import {
   colorFrom,
   ColorScheme,
   globals,
   readDifficultyFileSync,
   readInfoFileSync,
   toColorObject,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import copyToCustomColor from '../../utility/copyToCustomColor.ts';

globals.directory = beatmapWipPath('TRIPLE PLAY');

const info = readInfoFileSync();
info.colorSchemes = [
   {
      name: 'TRIPLE PLAY',
      overrideNotes: true,
      overrideLights: true,
      saberLeftColor: toColorObject(
         colorFrom(355, 0.8125, 0.9375, 'hsva'),
         true,
      ),
      saberRightColor: toColorObject(
         colorFrom(215, 0.625, 0.875, 'hsva'),
         true,
      ),
      environment0Color: toColorObject(
         colorFrom(0, 0.9375, 0.875, 'hsva'),
         true,
      ),
      environment1Color: toColorObject(
         colorFrom(205, 0.75, 0.8125, 'hsva'),
         true,
      ),
      environment0ColorBoost: toColorObject(
         colorFrom(350, 1, 0.8125, 'hsva'),
         true,
      ),
      environment1ColorBoost: toColorObject(
         colorFrom(300, 0.875, 0.75, 'hsva'),
         true,
      ),
      obstaclesColor: toColorObject(
         colorFrom(220, 0.666, 0.4375, 'hsva'),
         true,
      ),
   },
   {
      name: 'Default Color',
      overrideNotes: false,
      overrideLights: false,
      saberLeftColor: toColorObject(ColorScheme['The First']._colorLeft!, true),
      saberRightColor: toColorObject(
         ColorScheme['The First']._colorRight!,
         true,
      ),
      environment0Color: toColorObject(
         ColorScheme['The First']._envColorLeft!,
         true,
      ),
      environment1Color: toColorObject(
         ColorScheme['The First']._envColorRight!,
         true,
      ),
      environment0ColorBoost: toColorObject([0, 0, 0], true),
      environment1ColorBoost: toColorObject([0, 0, 0], true),
      obstaclesColor: toColorObject(
         ColorScheme['The First']._obstacleColor!,
         true,
      ),
   },
];
info.environmentNames = ['LatticeEnvironment', 'TriangleEnvironment'];
const lightshow = readDifficultyFileSync('EasyStandard.dat', 3);

for (const d of info.difficulties) {
   const difficulty = readDifficultyFileSync(d.filename, 3);
   difficulty.useNormalEventsAsCompatibleEvents = d.characteristic === 'Legacy';
   if (d.characteristic !== 'Legacy') difficulty.lightshow = lightshow.lightshow;

   delete d.customData._requirements;
   d.colorSchemeId = d.characteristic === 'Legacy' ? 1 : 0;
   d.environmentId = d.characteristic === 'Legacy' ? 1 : 0;
   copyToCustomColor(d, info.colorSchemes[d.colorSchemeId]);
   writeDifficultyFileSync(difficulty);
}

writeInfoFileSync(info);
