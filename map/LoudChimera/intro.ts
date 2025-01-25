import { ext, logger, NoteDirectionAngle, NoteJumpSpeed, TimeProcessor, types, v3 } from '@bsmap';
import { connectSlider } from './helpers.ts';
const { ne: NE } = ext;
const { between, at } = ext.selector;

export function intro(
   data: types.wrapper.IWrapBeatmap,
   BPM: TimeProcessor,
   NJS: NoteJumpSpeed,
) {
   logger.info('Run Intro');
   connectSlider(data, between(data.colorNotes, 70, 72));
   for (let t = 10; t < 130; t += 4) {
      if (t === 70) {
         continue;
      }
      data.difficulty.customData.fakeColorNotes?.push(
         ...at(data.colorNotes, t).map((n) =>
            n
               .clone()
               .perform((m) => (m.time += 2.002))
               .setDirection(8)
               .addCustomData({
                  uninteractable: true,
                  spawnEffect: true,
                  localRotation: [
                     0,
                     0,
                     (180 + (NoteDirectionAngle[n.direction as 0] || 0)) % 360,
                  ],
                  noteJumpMovementSpeed: 10,
                  noteJumpStartBeatOffset: -NoteJumpSpeed.HJD_START + 2,
                  animation: {
                     definitePosition: 'slashPosition',
                     dissolve: 'slashGlitchEffect',
                     dissolveArrow: 'pZero',
                  },
               })
         ),
      );
   }
}
