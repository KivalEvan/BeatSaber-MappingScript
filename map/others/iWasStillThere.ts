import {
   colorFrom,
   deepCopy,
   globals,
   lerpColor,
   normalize,
   readDifficultyFileSync,
   readFromInfoSync,
   readInfoFileSync,
   round,
   TimeProcessor,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';

globals.directory = beatmapWipPath(
   "I Bet You'll Forget That Even If You Noticed That (I Was Still There)",
);

const info = readInfoFileSync();
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];

const difficultyList = readFromInfoSync(info);
const lightshow = readDifficultyFileSync('ExpertPlusStandard.dat', 3, {
   directory:
      "/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/I Bet You'll Forget That Even If You Noticed That (I Was Still There)/",
});
const cd = readDifficultyFileSync('ExpertPlusStandardBac.dat', 3);

const precisions = [16, 12];

difficultyList.forEach((d) => {
   d.beatmap.lightshow.basicEvents = lightshow.lightshow.basicEvents;
   d.beatmap.lightshow.colorBoostEvents = lightshow.lightshow.colorBoostEvents;
   d.beatmap.lightshow.lightColorEventBoxGroups = lightshow.lightshow.lightColorEventBoxGroups;
   d.beatmap.lightshow.lightRotationEventBoxGroups =
      lightshow.lightshow.lightRotationEventBoxGroups;
   d.beatmap.lightshow.lightTranslationEventBoxGroups =
      lightshow.lightshow.lightTranslationEventBoxGroups;
   d.beatmap.difficulty.customData.bookmarks = deepCopy(
      cd.difficulty.customData.bookmarks,
   );
   d.info.customData._information = [
      'Fujiwara no Mokou',
      'Extend Ash ~ Person of Hourai',
      '4th track of album Each And Every Word Leaves Me Here Alone',
      '10th track disc 1 rearranged in album Touhou Illusionary Play of Sounds ~fANTASIAsPIRALoVERdRIVE~',
   ];

   if (d.info.characteristic === 'OneSaber') {
      if (d.info.difficulty === 'Expert') {
         d.info.customData._information.splice(
            1,
            0,
            '"Until This Life, Repeated Countless Times, Burns Away"',
         );
      }
      if (d.info.difficulty === 'ExpertPlus') {
         d.info.customData._information.splice(
            1,
            0,
            '*Let This Whole World Burn Away to Nothing!*',
         );
      }
   } else {
      if (d.info.difficulty === 'Expert') {
         d.info.customData._information.splice(
            1,
            0,
            'Inextinguishable "Phoenix\'s Tail"',
         );
      }
      if (d.info.difficulty === 'ExpertPlus') {
         d.info.customData._information.splice(1, 0, '"Phoenix Rebirth"');
      }
   }

   const bpm = new TimeProcessor(
      info.audio.bpm,
      d.beatmap.difficulty.bpmEvents,
   );
   if (d.beatmap.version === 3) {
      d.beatmap.difficulty.customData.bookmarks?.forEach((b) => {
         const saveB = b.b;
         b.b = bpm.toBeatTime(bpm.toRealTime(b.b, false), true);
         let res = { p: 0, val: Number.MAX_SAFE_INTEGER };
         for (const p of precisions) {
            const v = (b.b % 1) % (1 / p);
            if (res.val > v) res = { p: p, val: v };
         }
         if (res.val > 0.01) {
            b.b = round(b.b, 1);
         }
         b.b = round(b.b, 3);

         b.c = lerpColor(
            [0, 0, 0.25],
            [0, 0, 0.5],
            normalize(b.b, 0, 1000),
            'hsva',
         );
         if (b.b === 57 || b.b === 269 || b.b === 301) {
            b.c = colorFrom([0, 0, 1], 'hsva');
         }
         if (b.b >= 141 && b.b <= 253) {
            b.c = lerpColor(
               [270, 1, 1],
               [300, 1, 1],
               normalize(b.b, 141, 253),
               'hsva',
            );
         }
         if (b.b >= 333 && b.b <= 381) {
            b.c = lerpColor(
               [300, 1, 1],
               [285, 1, 1],
               normalize(b.b, 333, 381),
               'hsva',
            );
         }
         if (b.b >= 397 && b.b <= 413) {
            b.c = lerpColor(
               [195, 0.75, 1],
               [195, 0.5, 1],
               normalize(b.b, 397, 413),
               'hsva',
            );
         }
         if (b.b >= 429 && b.b <= 453) {
            b.c = colorFrom([0, 0, 1], 'hsva');
         }
         if (b.b >= 469 && b.b <= 533) {
            b.c = lerpColor(
               [15, 1, 1],
               [-30, 1, 1],
               normalize(b.b, 469, 533),
               'hsva',
            );
         }
         if (b.b >= 597 && b.b <= 613) {
            b.c = colorFrom([0, 0, 1], 'hsva');
         }
         if (b.b >= 533 && b.b <= 569) {
            b.c = lerpColor(
               [285, 1, 1],
               [300, 1, 1],
               normalize(b.b, 533, 569),
               'hsva',
            );
         }
         if (b.b >= 629 && b.b <= 717) {
            b.c = lerpColor(
               [300, 1, 1],
               [285, 1, 1],
               normalize(b.b, 629, 717),
               'hsva',
            );
         }

         b.b = saveB;
      });
   }
   // [...d.beatmap.colorNotes, ...d.beatmap.bombNotes, ...d.beatmap.arcs, ...d.beatmap.chains].forEach((obj) => {
   //     let res = { p: 0, val: Number.MAX_SAFE_INTEGER };
   //     for (const p of precisions) {
   //         const v = (obj.time % 1) % (1 / p);
   //         if (res.val > v) res = { p: p, val: v };
   //     }
   //     if (res.val > 0.00005) {
   //         obj.time = round(obj.time, 3);
   //     }
   // });
   // [...d.beatmap.arcs, ...d.beatmap.chains].forEach((obj) => {
   //     let res = { p: 0, val: Number.MAX_SAFE_INTEGER };
   //     for (const p of precisions) {
   //         const v = (obj.tailTime % 1) % (1 / p);
   //         if (res.val > v) res = { p: p, val: v };
   //     }
   //     if (res.val > 0.00005) {
   //         obj.tailTime = round(obj.tailTime, 3);
   //     }
   // });
   writeDifficultyFileSync(d.beatmap);
});

writeInfoFileSync(info);
