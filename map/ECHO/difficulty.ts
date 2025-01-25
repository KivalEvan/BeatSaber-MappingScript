import {
   globals,
   readDifficultyFileSync,
   readFromInfoSync,
   readInfoFileSync,
   toV3Beatmap,
   v3,
   writeDifficultyFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';

globals.directory = beatmapWipPath('ECHO');

const info = readInfoFileSync();
const lightshow = readDifficultyFileSync('EasyLightshow.dat', 3);
const difficultyList = readFromInfoSync(info);
const diffFile: string[] = [];

difficultyList.forEach((d) => {
   if (d.beatmap.version !== 3) {
      d.beatmap = toV3Beatmap(d.beatmap, d.beatmap.version);
   }

   diffFile.push(globals.directory + d.beatmap.filename);

   d.beatmap.basicEvents = lightshow.basicEvents;
   d.beatmap.difficulty.customData.environment = lightshow.difficulty.customData.environment;
   d.beatmap.difficulty.customData.customEvents = lightshow.difficulty.customData.customEvents;
   d.beatmap.obstacles = [];
   if (d.info.difficulty === 'Easy' || d.info.difficulty === 'Normal') {
      for (let i = 0; i < 2; i++) {
         d.beatmap.addObstacles(
            ...[
               {
                  b: 52 + i * 4,
                  d: 0.25,
                  x: 1 - i,
                  y: 1,
               },
               {
                  b: 52.5 + i * 4,
                  d: 0.25,
                  x: -1 - i,
                  y: 2,
               },
               {
                  b: 52.75 + i * 4,
                  d: 0.25,
                  x: -i,
                  y: 0,
               },
               {
                  b: 68 + i * 4,
                  d: 0.25,
                  x: 2 + i,
                  y: 1,
               },
               {
                  b: 68.5 + i * 4,
                  d: 0.25,
                  x: 4 + i,
                  y: 2,
               },
               {
                  b: 68.75 + i * 4,
                  d: 0.25,
                  x: 3 + i,
                  y: 0,
               },
            ].map(v3.obstacle.deserialize),
         );
      }
   } else {
      for (let i = 0; i < 2; i++) {
         d.beatmap.addObstacles(
            ...[
               {
                  b: 52 + i * 4,
                  d: 0.25,
                  x: -1,
                  y: 1,
               },
               {
                  b: 52.5 + i * 4,
                  d: 0.25,
                  x: -3,
                  y: 2,
               },
               {
                  b: 52.75 + i * 4,
                  d: 0.25,
                  x: -2,
                  y: 0,
               },
               {
                  b: 68 + i * 4,
                  d: 0.25,
                  x: 4,
                  y: 1,
               },
               {
                  b: 68.5 + i * 4,
                  d: 0.25,
                  x: 6,
                  y: 2,
               },
               {
                  b: 68.75 + i * 4,
                  d: 0.25,
                  x: 5,
                  y: 0,
               },
            ].map(v3.obstacle.deserialize),
         );
      }
   }
   d.beatmap.addObstacles(
      ...[
         { b: 60, d: 1, x: -1 },
         { b: 60.25, d: 1, x: -2, y: 2 },
         { b: 76, d: 1, x: 4 },
         { b: 76.25, d: 1, x: 5, y: 2 },
         { b: 80, d: 2, x: -2, y: 1, h: 3 },
         { b: 80, d: 2, x: 5, y: 1, h: 3 },
         { b: 132, d: 1, x: -1 },
         { b: 132, d: 1, x: 4 },
         { b: 132.25, d: 1, x: -2, y: 2 },
         { b: 132.25, d: 1, x: 5, y: 2 },
         { b: 133, d: 1, x: -4, y: 1, w: 2 },
         { b: 133, d: 1, x: 6, y: 1, w: 2 },
         { b: 148, d: 8, h: -1 },
         { b: 148, d: 8, x: 3, h: -1 },
         { b: 156, d: 4, x: -1, y: 1 },
         { b: 156, d: 4, x: 4, y: 1 },
         { b: 160, d: 0.5, x: -1, y: 2 },
         { b: 160.75, d: 0.5, x: -1, y: 0 },
         { b: 161.5, d: 0.375, x: -1, y: 2 },
         { b: 162, d: 0.375, x: -1, y: 0 },
         { b: 162.5, d: 0.5, x: -1, y: 2 },
         { b: 163.25, d: 0.5, x: -3, y: 1, w: 2 },
         { b: 160, d: 0.5, x: 4, y: 0 },
         { b: 160.75, d: 0.5, x: 4, y: 2 },
         { b: 161.5, d: 0.375, x: 4, y: 0 },
         { b: 162, d: 0.375, x: 4, y: 2 },
         { b: 162.5, d: 0.5, x: 4, y: 0 },
         { b: 163.25, d: 0.5, x: 5, y: 1, w: 2 },
         { b: 210, d: 1.875, x: -1, y: 2, h: 2 },
         { b: 210, d: 1.875, x: 4, y: 2, h: 2 },
         { b: 290, d: 1.75, x: -1, y: 2, h: 2 },
         { b: 290, d: 1.75, x: 4, y: 2, h: 2 },
      ].map(v3.obstacle.deserialize),
   );
   writeDifficultyFileSync(d.beatmap, {
      directory: globals.directory.replace('CustomWIPLevels', 'CustomLevels'),
   });
});
