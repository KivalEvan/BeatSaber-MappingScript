import {
   ext,
   logger,
   normalize,
   NoteJumpSpeed,
   pRandom,
   TimeProcessor,
   v3,
} from '../../depsLocal.ts';

const { NE } = ext;
const { between } = ext.selector;

export function build2(data: types.wrapper.IWrapBeatmap, BPM: TimeProcessor, NJS: NoteJumpSpeed) {
   logger.info('Run Build 2');
   const fakeNotes: v3.ColorNote[] = [];
   const slowBuildTiming = [264, 778];

   for (const sbt of slowBuildTiming) {
      const notes = between(data.colorNotes, sbt, sbt + 120);

      notes.forEach((n) => n.addCustomData({ track: 'tBuild' }));

      for (let t = sbt; t < sbt + 64; t += 2) {
         data.customData.customEvents?.push({
            b: t,
            t: 'AnimateTrack',
            d: {
               track: 'tBuild',
               duration: 0.75,
               dissolve: [
                  [pRandom(0.8, 0.9), 0],
                  [1, 1],
               ],
               dissolveArrow: [
                  [pRandom(0.45, 0.55), 0],
                  [1, 1],
               ],
            },
         });
      }
      for (let t = sbt + 64; t < sbt + 120; t += 2) {
         data.customData.customEvents?.push(
            {
               b: t,
               t: 'AnimateTrack',
               d: {
                  track: 'tBuild',
                  duration: 0.75,
                  dissolve: [
                     [pRandom(0.8, 0.9) - normalize(t, sbt + 64, sbt + 120) * 0.25, 0],
                     [1, 1],
                  ],
                  dissolveArrow: [
                     [pRandom(0.45, 0.55) - normalize(t, sbt + 64, sbt + 120) * 0.25, 0],
                     [1, 1],
                  ],
               },
            },
            {
               b: t + 1,
               t: 'AnimateTrack',
               d: {
                  track: 'tBuild',
                  duration: 0.75,
                  dissolve: [
                     [pRandom(0.95, 1) - normalize(t, sbt + 64, sbt + 120) * 0.25, 0],
                     [1, 1],
                  ],
                  dissolveArrow: [
                     [pRandom(0.95, 1) - normalize(t, sbt + 64, sbt + 120) * 0.75, 0],
                     [1, 1],
                  ],
               },
            },
         );
      }

      // fakeNotes.push(...notes)
   }

   data.customData.fakeColorNotes!.push(...fakeNotes.map((n) => n.toJSON()));
}
