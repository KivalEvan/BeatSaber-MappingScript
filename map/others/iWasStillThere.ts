import { BeatPerMinute, globals, isV3, load, save, utils } from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';

<<<<<<< HEAD
console.time('Runtime');

=======
>>>>>>> ec05bfd (njygfttrnjktrktrmj)
globals.directory = wipPath(
   "I Bet You'll Forget That Even If You Noticed That (I Was Still There)"
);

const info = load.infoSync(2);
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];

const difficultyList = load.difficultyFromInfoSync(info);
const lightshow = load.difficultySync('ExpertPlusStandard.dat', 3, {
   directory:
      "/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/I Bet You'll Forget That Even If You Noticed That (I Was Still There)/",
});
const cd = load.difficultySync('ExpertPlusStandardBac.dat', 3);

const precisions = [16, 12];

difficultyList.forEach((d) => {
   d.data.basicEvents = lightshow.basicEvents;
   d.data.colorBoostEvents = lightshow.colorBoostEvents;
   d.data.lightColorEventBoxGroups = lightshow.lightColorEventBoxGroups;
   d.data.lightRotationEventBoxGroups = lightshow.lightRotationEventBoxGroups;
   d.data.lightTranslationEventBoxGroups = lightshow.lightTranslationEventBoxGroups;
   d.data.customData.bookmarks = utils.deepCopy(cd.customData.bookmarks);
   d.settings.customData._information = [
      'Fujiwara no Mokou',
      'Extend Ash ~ Person of Hourai',
      '4th track of album Each And Every Word Leaves Me Here Alone',
      '10th track disc 1 rearranged in album Touhou Illusionary Play of Sounds ~fANTASIAsPIRALoVERdRIVE~',
   ];

   if (d.characteristic === 'OneSaber') {
      if (d.difficulty === 'Expert') {
         d.settings.customData._information.splice(
            1,
            0,
            '"Until This Life, Repeated Countless Times, Burns Away"'
         );
      }
      if (d.difficulty === 'ExpertPlus') {
         d.settings.customData._information.splice(
            1,
            0,
            '*Let This Whole World Burn Away to Nothing!*'
         );
      }
   } else {
      if (d.difficulty === 'Expert') {
         d.settings.customData._information.splice(1, 0, 'Inextinguishable "Phoenix\'s Tail"');
      }
      if (d.difficulty === 'ExpertPlus') {
         d.settings.customData._information.splice(1, 0, '"Phoenix Rebirth"');
      }
   }

   const bpm = new BeatPerMinute(info.beatsPerMinute, d.data.bpmEvents);
   if (isV3(d.data)) {
      d.data.customData.bookmarks?.forEach((b) => {
         const saveB = b.b;
         b.b = bpm.toBeatTime(bpm.toRealTime(b.b, false), true);
         let res = { p: 0, val: Number.MAX_SAFE_INTEGER };
         for (const p of precisions) {
            const v = (b.b % 1) % (1 / p);
            if (res.val > v) res = { p: p, val: v };
         }
         if (res.val > 0.01) {
            b.b = utils.round(b.b, 1);
         }
         b.b = utils.round(b.b, 3);

         b.c = utils.interpolateColor(
            [0, 0, 0.25],
            [0, 0, 0.5],
            utils.normalize(b.b, 0, 1000),
            'hsva'
         );
         if (b.b === 57 || b.b === 269 || b.b === 301) {
            b.c = utils.colorFrom([0, 0, 1], 'hsva');
         }
         if (b.b >= 141 && b.b <= 253) {
            b.c = utils.interpolateColor(
               [270, 1, 1],
               [300, 1, 1],
               utils.normalize(b.b, 141, 253),
               'hsva'
            );
         }
         if (b.b >= 333 && b.b <= 381) {
            b.c = utils.interpolateColor(
               [300, 1, 1],
               [285, 1, 1],
               utils.normalize(b.b, 333, 381),
               'hsva'
            );
         }
         if (b.b >= 397 && b.b <= 413) {
            b.c = utils.interpolateColor(
               [195, 0.75, 1],
               [195, 0.5, 1],
               utils.normalize(b.b, 397, 413),
               'hsva'
            );
         }
         if (b.b >= 429 && b.b <= 453) {
            b.c = utils.colorFrom([0, 0, 1], 'hsva');
         }
         if (b.b >= 469 && b.b <= 533) {
            b.c = utils.interpolateColor(
               [15, 1, 1],
               [-30, 1, 1],
               utils.normalize(b.b, 469, 533),
               'hsva'
            );
         }
         if (b.b >= 597 && b.b <= 613) {
            b.c = utils.colorFrom([0, 0, 1], 'hsva');
         }
         if (b.b >= 533 && b.b <= 569) {
            b.c = utils.interpolateColor(
               [285, 1, 1],
               [300, 1, 1],
               utils.normalize(b.b, 533, 569),
               'hsva'
            );
         }
         if (b.b >= 629 && b.b <= 717) {
            b.c = utils.interpolateColor(
               [300, 1, 1],
               [285, 1, 1],
               utils.normalize(b.b, 629, 717),
               'hsva'
            );
         }

         b.b = saveB;
      });
   }
   // [...d.data.colorNotes, ...d.data.bombNotes, ...d.data.arcs, ...d.data.chains].forEach((obj) => {
   //     let res = { p: 0, val: Number.MAX_SAFE_INTEGER };
   //     for (const p of precisions) {
   //         const v = (obj.time % 1) % (1 / p);
   //         if (res.val > v) res = { p: p, val: v };
   //     }
   //     if (res.val > 0.00005) {
   //         obj.time = utils.round(obj.time, 3);
   //     }
   // });
   // [...d.data.arcs, ...d.data.chains].forEach((obj) => {
   //     let res = { p: 0, val: Number.MAX_SAFE_INTEGER };
   //     for (const p of precisions) {
   //         const v = (obj.tailTime % 1) % (1 / p);
   //         if (res.val > v) res = { p: p, val: v };
   //     }
   //     if (res.val > 0.00005) {
   //         obj.tailTime = utils.round(obj.tailTime, 3);
   //     }
   // });
});

save.difficultyListSync(difficultyList);
save.infoSync(info);
