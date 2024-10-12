import {
   Axis,
   degToRad,
   DistributionType,
   EaseType,
   globals,
   IndexFilterType,
   readDifficultyFileSync,
   readInfoFileSync,
   round,
   types,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '../../depsLocal.ts';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import copyToCustomColor from '../../utility/copyToCustomColor.ts';

globals.directory = beatmapWipPath('Necromantic');

const ALPHA = 1.5;
const info = readInfoFileSync();
info.colorSchemes = [
   {
      useOverride: true,
      name: 'Necromantic',
      saberLeftColor: {
         r: 0.9098039269447327,
         g: 0.0,
         b: 0.2705882489681244,
         a: 1.0,
      },
      saberRightColor: {
         r: 0.572549045085907,
         g: 0.800000011920929,
         b: 0.14901961386203767,
         a: 1.0,
      },
      environment0Color: {
         r: 0.8823529481887817 / ALPHA,
         g: 0.0784313753247261 / ALPHA,
         b: 0.30588236451148989 / ALPHA,
         a: 1.0 * ALPHA,
      },
      environment1Color: {
         r: 0.9960784316062927 / ALPHA,
         g: 0.7254902124404907 / ALPHA,
         b: 0.19607843458652497 / ALPHA,
         a: 1.0 * ALPHA,
      },
      environment0ColorBoost: {
         r: 0.9098039269447327 / ALPHA,
         g: 0.0 / ALPHA,
         b: 0.2705882489681244 / ALPHA,
         a: 1.0 * ALPHA,
      },
      environment1ColorBoost: {
         r: 0.572549045085907 / ALPHA,
         g: 0.800000011920929 / ALPHA,
         b: 0.14901961386203767 / ALPHA,
         a: 1.0 * ALPHA,
      },
      obstaclesColor: {
         r: 0.625,
         g: 0.625,
         b: 0.625,
         a: 1.0,
      },
   },
];
info.environmentNames = ['TheRollingStonesEnvironment'];
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];

export function createCircle(
   radius: number,
   precision: number,
   posOffset?: types.Vector2,
   angleOffset?: number,
) {
   const points: types.Vector2[] = [];
   angleOffset = angleOffset || 0;
   posOffset ||= [0, 0];

   const step = 360 / precision;
   for (let angle = 0; angle < 360; angle += step) {
      points.push([
         posOffset[0] + radius * Math.cos(degToRad(-angle + angleOffset)),
         posOffset[1] + radius * Math.sin(degToRad(-angle + angleOffset)),
      ]);
   }
   return points;
}

function speiny(data: types.wrapper.IWrapBeatmap) {
   for (let i = 0, r = 0; r < 360; r += 15, i++) {
      const circ = createCircle(1.5, 3, [0.05, 2.15], r + 270).map((e) =>
         e.map((p) => round(p, 2))
      );
      data.addLightTranslationEventBoxGroups({
         time: 324 + i / 8,
         id: 38,
         boxes: [
            {
               axis: Axis.X,
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 4 },
               affectFirst: 1,
               gapDistribution: -0.07,
               events: [{ easing: EaseType.LINEAR, translation: circ[0][0] }],
            },
            {
               axis: Axis.Y,
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 4 },
               affectFirst: 1,
               gapDistribution: -0.6,
               events: [{ easing: EaseType.LINEAR, translation: circ[0][1] }],
            },
            {
               axis: Axis.X,
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 2,
                  p1: 1,
                  limit: 0.5,
               },
               affectFirst: 1,
               gapDistribution: -0.05,
               events: [{ easing: EaseType.LINEAR, translation: circ[1][0] }],
            },
            {
               axis: Axis.Y,
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 2,
                  p1: 1,
                  limit: 0.5,
               },
               affectFirst: 1,
               gapDistribution: -0.55,
               gapDistributionType: DistributionType.STEP,
               events: [{ easing: EaseType.LINEAR, translation: circ[1][1] }],
            },
            {
               axis: Axis.X,
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 4 },
               affectFirst: 1,
               gapDistribution: -0.05,
               events: [{ easing: EaseType.LINEAR, translation: circ[2][0] }],
            },
            {
               axis: Axis.Y,
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 4 },
               affectFirst: 1,
               gapDistribution: -0.6,
               events: [{ easing: EaseType.LINEAR, translation: circ[2][1] }],
            },
         ],
      });
   }
   for (let i = 0, r = 0; r < 360; r += 15, i++) {
      const circ = createCircle(3.825, 1, [1.95, 4.275], -r + 30).map((e) =>
         e.map((p) => round(p, 2))
      );
      console.log(circ);
      data.addLightTranslationEventBoxGroups({
         time: 324 + i / 8,
         id: 25,
         boxes: [
            {
               axis: Axis.X,
               filter: {
                  p0: 2,
                  p1: 0,
                  random: 2,
                  seed: i % 2 ? -429177727 : 1969532985,
               },
               affectFirst: 1,
               gapDistribution: 0.05,
               events: [{ easing: EaseType.LINEAR, translation: circ[0][0] }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 0 },
               affectFirst: 1,
               gapDistribution: 0.25,
               events: [{ easing: EaseType.LINEAR, translation: circ[0][1] }],
            },
         ],
      });
   }
   for (let i = 0, r = 0; r < 360; r += 15, i++) {
      const circ = createCircle(3.825, 3, [2.1, 4.225], r + 150).map((e) =>
         e.map((p) => round(p, 2))
      );
      console.log(circ);
      data.addLightTranslationEventBoxGroups({
         time: 324 + i / 8,
         id: 24,
         boxes: [
            {
               axis: Axis.X,
               filter: {
                  p0: 2,
                  p1: 0,
                  random: 2,
                  seed: i % 2 ? -429177727 : 1969532985,
               },
               affectFirst: 1,
               gapDistribution: 0.05,
               events: [{ easing: EaseType.LINEAR, translation: circ[2][0] }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 0 },
               affectFirst: 1,
               gapDistribution: 0.25,
               events: [{ easing: EaseType.LINEAR, translation: circ[2][1] }],
            },
            {
               axis: Axis.X,
               filter: {
                  p0: 2,
                  p1: 1,
                  random: 2,
                  seed: i % 2 ? -429177727 : 1969532985,
               },
               affectFirst: 1,
               gapDistribution: 0.05,
               events: [{ easing: EaseType.LINEAR, translation: circ[1][0] }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               affectFirst: 1,
               gapDistribution: 0.25,
               events: [{ easing: EaseType.LINEAR, translation: circ[1][1] }],
            },
         ],
      });
   }
}

const lightshow = readDifficultyFileSync('EasyStandard.dat', 3);
for (const d of info.difficulties) {
   const difficulty = readDifficultyFileSync(d.filename, 3);
   difficulty.lightshow = lightshow.lightshow;
   // speiny(data);
   d.customData._information = [
      'Seiga Kaku',
      'Desire Drive',
      '3rd track of album Sunflower -Eternal Summer-',
   ];

   if (d.characteristic === 'Standard' && d.difficulty === 'Expert') {
      d.customData._difficultyLabel = 'Lunatic';
      d.customData._information.splice(2, 0, 'Evil Sign "Yang Xiaogui"');
   }
   if (d.characteristic === 'Standard' && d.difficulty === 'ExpertPlus') {
      d.customData._difficultyLabel = 'I wanna see you die';
      d.customData._information.splice(
         2,
         0,
         'Demonify "Excessive Zouhuo Rumo"',
      );
   }

   if (d.characteristic === 'OneSaber' && d.difficulty === 'Normal') {
      d.customData._difficultyLabel = 'You and I';
   }
   if (d.characteristic === 'OneSaber' && d.difficulty === 'Expert') {
      d.customData._difficultyLabel = 'Love me';
      d.customData._information.splice(2, 0, 'Necromancy "Corpse Tongji"');
   }
   if (d.characteristic === 'OneSaber' && d.difficulty === 'ExpertPlus') {
      d.customData._difficultyLabel = 'One more time';
      d.customData._information.splice(2, 0, 'Spirit Link "Tongling Yoshika"');
   }
   copyToCustomColor(d, info.colorSchemes[d.colorSchemeId]);
   writeDifficultyFileSync(difficulty);
}

writeInfoFileSync(info);
