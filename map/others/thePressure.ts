import {
   globals,
   readDifficultyFileSync,
   readInfoFileSync,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';

globals.directory = beatmapWipPath('The Pressure');

const info = readInfoFileSync();
info.environmentNames = ['Monstercat2Environment', 'MonstercatEnvironment'];

for (const d of info.difficulties) {
   const difficulty = readDifficultyFileSync(d.filename, 3);
   difficulty.lightshow.useNormalEventsAsCompatibleEvents = d.characteristic === 'Legacy';

   if (d.characteristic !== 'Legacy') {
      difficulty.lightshow.basicEvents = [];
   }

   delete d.customData._requirements;
   d.colorSchemeId = d.characteristic === 'Legacy' ? 1 : 0;
   d.environmentId = d.characteristic === 'Legacy' ? 1 : 0;
   writeDifficultyFileSync(difficulty);
}

writeInfoFileSync(info);
