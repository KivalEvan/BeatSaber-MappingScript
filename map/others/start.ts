import {
   globals,
   readDifficultyFileSync,
   readInfoFileSync,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';

globals.directory = beatmapWipPath('START');

const info = readInfoFileSync();
const data = readDifficultyFileSync('ExpertPlusStandard.dat');
info.song.title = '_START';
info.customData = { _assetBundle: { _windows2021: 63249876329 } };
info.difficulties.forEach((d) => {
   d.customData._requirements = ['Vivify', 'Noodle Extensions', 'Chroma'];
   d.customData._suggestions = [];
});

data.difficulty.obstacles = [];
data.lightshow.basicEvents = [];
data.lightshow.basicEvents.push({
   time: 0,
   type: 4,
   value: 9,
   floatValue: 1,
   customData: {},
});
data.difficulty.customData = {};
data.difficulty.customData.customEvents = [
   {
      b: 2,
      t: 'InstantiatePrefab',
      d: {
         asset: 'assets/anorlondo.prefab',
         id: 'anorlondo',
         track: 'anorlondo',
      },
   },
   {
      b: 2,
      t: 'InstantiatePrefab',
      d: {
         asset: 'assets/koish.prefab',
         id: 'koish3',
         track: 'koish3',
         position: [0, 0, 50],
         rotation: [0, 180, 0],
         scale: [0.666, 0.666, 0.666],
      },
   },
   // {
   //    b: 4,
   //    t: 'AnimateTrack',
   //    d: {
   //       track: 'kois3',
   //       position: [0, 0, 0],
   //    },
   // },
];
data.difficulty.customData.environment = [
   {
      id: 'Water',
      lookupMethod: 'Contains',
      active: false,
   },
   {
      id: 'Pillar',
      lookupMethod: 'Contains',
      active: false,
   },
   {
      id: 'Rail',
      lookupMethod: 'Contains',
      active: false,
   },
   {
      id: 'Mountains',
      lookupMethod: 'Contains',
      active: false,
   },
];

writeInfoFileSync(info);
writeDifficultyFileSync(data, 3, { format: 4 });
