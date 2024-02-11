import {
   Axis,
   convert,
   degToRad,
   DistributionType,
   EaseType,
   globals,
   IndexFilterType,
   load,
   round,
   save,
   types,
   v4,
} from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';

globals.directory =
   '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/Necromantic2/';

const ALPHA = 1;
const info = load.infoSync(4);
info.audio.audioDataFilename = 'audio.dat';
info.audio.duration = 420;
info.difficulties.forEach((d) => (d.lightshowFilename = 'Lightshow.dat'));
info.song.title = 'Necromantic V4';
info.colorSchemes = [
   {
      useOverride: true,
      name: 'Necromantic',
      saberLeftColor: {
         r: 0.8980392217636108,
         g: 0.0,
         b: 0.115031898021698,
         a: 1.0,
      },
      saberRightColor: {
         r: 0.5254902243614197,
         g: 0.13333334028720857,
         b: 0.6784313917160034,
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
         r: 0.7254902124404907,
         g: 0.7254902124404907,
         b: 0.7254902124404907,
         a: 1.0,
      },
   },
];
info.environmentNames = ['TheRollingStonesEnvironment'];
info.customData.contributors = [
   { role: 'Mapper', name: 'Kival Evan', iconPath: 'iconKivalEvan.png' },
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

function speiny(data: types.wrapper.IWrapDifficulty) {
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

// const lightshow = convert.toV4Lightshow(load.difficultySync('ExpertPlusStandard.dat', 3)).setFileName('Lightshow.dat');
const lightshow = load.lightshowSync('Lightshow.dat', 4);
// const lightshow = v4.Lightshow.create().setFileName('Lightshow.dat');
lightshow.useNormalEventsAsCompatibleEvents = true;
save.lightshowSync(lightshow, {
   // format: 2,
   optimize: {
      enabled: true,
      purgeZeros: true,
      deduplicate: true,
   },
});
for (const [_, d] of info.listMap()) {
   const difficulty = load.difficultySync(d.filename, 4);
   // speiny(data);
   d.customData._information = [
      'Seiga Kaku',
      'Desire Drive',
      '3rd track of album Sunflower -Eternal Summer-',
   ];

   if (d.characteristic === 'Standard' && d.difficulty === 'Expert') {
      d.customData._difficultyLabel = 'Lunatic';
      d.customData._information.splice(2, 0, '');
   }
   if (d.characteristic === 'Standard' && d.difficulty === 'ExpertPlus') {
      d.customData._difficultyLabel = 'I wanna see you die';
      d.customData._information.splice(2, 0, '');
   }

   if (d.characteristic === 'OneSaber' && d.difficulty === 'Normal') {
      d.customData._difficultyLabel = 'You and I';
   }
   if (d.characteristic === 'OneSaber' && d.difficulty === 'Expert') {
      d.customData._difficultyLabel = 'Love me';
      d.customData._information.splice(2, 0, '');
   }
   if (d.characteristic === 'OneSaber' && d.difficulty === 'ExpertPlus') {
      d.customData._difficultyLabel = 'One more time';
      d.customData._information.splice(2, 0, '');
   }
   d.copyColorScheme(info.colorSchemes[d.colorSchemeId]);
   save.difficultySync(difficulty, {
      // format: 2,
      optimize: { enabled: true, purgeZeros: false },
   });
}

save.infoSync(info);

const bpmInfo = JSON.parse(
   Deno.readTextFileSync(globals.directory + '/BPMInfo.dat'),
) as types.external.IBPMInfo;

Deno.writeTextFileSync(
   globals.directory + '/audio.dat',
   JSON.stringify(
      {
         version: '4.0.0',
         contentChecksum: '',
         content: {
            songFrequency: bpmInfo._songFrequency,
            songSampleCount: bpmInfo._songSampleCount,
            bpmData: bpmInfo._regions.map((r) => {
               return {
                  si: r._startSampleIndex,
                  ei: r._endSampleIndex,
                  sb: r._startBeat,
                  eb: r._endBeat,
               };
            }),
            integratedLufs: 0, // float
            lufsData: [],
         },
      } satisfies types.v4.IAudio,
   ),
);
