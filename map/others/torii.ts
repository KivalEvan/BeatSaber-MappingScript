import {
   BeatPerMinute,
   convert,
   ext,
   globals,
   NoteJumpSpeed,
   save,
   types,
   v3,
} from '../../depsLocal.ts';
import { insertEnvironment } from '../../environment-enhancement/torii/mod.ts';

globals.directory =
   'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/START';

const d3 = v3.Difficulty.create().setFileName('ExpertPlusStandard.dat');
insertEnvironment(d3);
d3.addColorBoostEvents({ o: true });
d3.addBasicEvents(
   { et: 0, i: 1 },
   { et: 1, i: 0 },
   { et: 2, i: 1 },
   { et: 3, i: 1 },
   { et: 4, i: 1 },
   { et: 6, i: 1 },
   { et: 7, i: 1 },
   { et: 10, i: 1 },
   { et: 11, i: 1 },
);
const BPM = BeatPerMinute.create(175);
const NJS = NoteJumpSpeed.create(BPM, 17.5);
const points: types.Vector2[][] = [
   [
      [943.5000610351562, 1498.278076171875],
      [920.8560180664062, 1479.4080810546875],
      [618.7591075897217, 1224.9579133987427],
      [428.82076263427734, 1034.5478134155273],
      [301.9200134277344, 717.06005859375],
      [400.98751068115234, 476.46753692626953],
      [641.5800170898438, 377.4000244140625],
      [827.9212799072266, 429.2925262451172],
      [943.5000610351562, 532.134033203125],
      [1059.0787887573242, 429.2925262451172],
      [1245.4200439453125, 377.4000244140625],
      [1486.0125885009766, 476.46753692626953],
      [1585.080078125, 717.06005859375],
      [1458.1793365478516, 1034.5478134155273],
      [1268.2409839630127, 1224.9579133987427],
      [966.14404296875, 1479.4080810546875],
      [943.5000610351562, 1498.278076171875],
   ],
].map((n) => n.map((m) => [m[0] / 250 - 5, -m[1] / 250 + 8]));
for (const p of points) {
   console.log(p.length);
   const { coordinates, rotations, sizes } = ext.NE.drawPath(p);
   for (const j in coordinates) {
      d3.addObstacles({
         b: 4,
         customData: {
            size: [0.0001, sizes[j], 0.0001],
            coordinates: [coordinates[j][0], coordinates[j][1]],
            localRotation: [0.0001, 0.0001, rotations[j]],
         },
      });
   }
}
d3.customData.customEvents = [
   {
      b: 61,
      t: 'AnimateTrack',
      d: {
         duration: 32,
         track: 'everythinglmao',
         position: [
            [0, 0, -1032, 0],
            [0, 0, -1032 - NJS.calcDistance(16), 1],
         ],
      },
   },
   {
      b: 253,
      t: 'AnimateTrack',
      d: {
         duration: 12,
         track: 'everythinglmao',
         position: [
            [0, 0, -1032, 0],
            [0, 0, -1032 - NJS.calcDistance(6), 1],
         ],
      },
   },
];
for (let b = 61, i = 0; b < 93; b++, i = ++i % 3) {
   d3.addBasicEvents(
      {
         b,
         et: 1,
         i: 3,
         f: 2,
         customData: { lightID: [9, 10, 11, 12].map((n) => n + i * 4) },
      },
      {
         b,
         et: 1,
         i: 3,
         f: 2,
         customData: { lightID: [9, 10, 11, 12].map((n) => n + i * 4 + 12) },
      },
      {
         b,
         et: 1,
         i: 3,
         f: 2,
         customData: { lightID: [9, 10, 11, 12].map((n) => n + i * 4 + 24) },
      },
      {
         b,
         et: 1,
         i: 3,
         f: 2,
         customData: { lightID: [9, 10, 11, 12].map((n) => n + i * 4 + 36) },
      },
      {
         b,
         et: 1,
         i: 3,
         f: 2,
         customData: { lightID: [9, 10, 11, 12].map((n) => n + i * 4 + 48) },
      },
   );
}
save.difficultySync(convert.toV2(d3));
