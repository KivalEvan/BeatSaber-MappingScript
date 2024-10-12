import {
   colorFrom,
   ColorScheme,
   globals,
   readDifficultyFileSync,
   readInfoFileSync,
   toColorObject,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '../../depsLocal.ts';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import copyToCustomColor from '../../utility/copyToCustomColor.ts';

globals.directory = beatmapWipPath('Sunset Tea Cup');

const info = readInfoFileSync();
info.customData = {
   _contributors: [
      {
         _name: 'Kival Evan',
         _role: 'Mapper',
         _iconPath: 'iconKivalEvan.png',
      },
      {
         _name: 'shad',
         _role: 'Mapper (Timely Moment)',
         _iconPath: 'iconshad.png',
      },
   ],
   _editors: {
      MMA2: {
         version: '4.8.0',
      },
      _lastEditedBy: 'ChroMapper',
      ChroMapper: {
         version: '0.8.617',
      },
   },
};
info.colorSchemes = [
   {
      useOverride: false,
      name: 'Default Color',
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
   {
      useOverride: true,
      name: 'Sunset Tea Cup',
      saberLeftColor: toColorObject(
         colorFrom(355, 0.8125, 0.9375, 'hsva'),
         true,
      ),
      saberRightColor: toColorObject(
         colorFrom(215, 0.625, 0.875, 'hsva'),
         true,
      ),
      environment0Color: toColorObject(colorFrom(80, 0.666, 0.7, 'hsva'), true),
      environment1Color: toColorObject(
         colorFrom(205, 0.75, 0.8125, 'hsva'),
         true,
      ),
      environment0ColorBoost: toColorObject(
         colorFrom(350, 1, 0.8125, 'hsva'),
         true,
      ),
      environment1ColorBoost: toColorObject(
         colorFrom(210, 0.75, 0.75, 'hsva'),
         true,
      ),
      obstaclesColor: toColorObject(
         colorFrom(220, 0.666, 0.4375, 'hsva'),
         true,
      ),
   },
];
const lightshow = readDifficultyFileSync('Lightshow.dat', 3);
const walls = readDifficultyFileSync('ExpertPlusStandard.dat', 3);

for (const d of info.difficulties) {
   const difficulty = readDifficultyFileSync(d.filename, 3);
   difficulty.useNormalEventsAsCompatibleEvents = true;
   if (d.characteristic === 'Legacy') {
      if (d.difficulty === 'ExpertPlus') {
         d.customData._difficultyLabel = 'Seasonal Scenery (2021)';
      }
      if (d.difficulty === 'Expert') {
         d.customData._difficultyLabel = 'Timely Moment (2021)';
      }
      if (d.difficulty === 'Hard') {
         d.customData._difficultyLabel = 'Mid-2020 Edition';
      }
      continue;
   }
   if (d.characteristic === 'OneSaber') {
      if (d.difficulty === 'ExpertPlus') {
         d.customData._difficultyLabel = 'Teh Tarik';
      }
      if (d.difficulty === 'Expert') d.customData._difficultyLabel = 'Chai';
      if (d.difficulty === 'Normal') d.customData._difficultyLabel = 'Ryokucha';
   }
   if (d.characteristic === 'Standard') {
      if (d.difficulty === 'ExpertPlus') {
         d.customData._difficultyLabel = 'Seasonal Scenery';
      }
   }
   difficulty.obstacles = walls.obstacles;
   difficulty.basicEvents = lightshow.basicEvents;
   difficulty.colorBoostEvents = lightshow.colorBoostEvents;

   delete d.customData._requirements;
   d.colorSchemeId = 1;
   copyToCustomColor(d, info.colorSchemes[1]);
   writeDifficultyFileSync(difficulty);
}

writeInfoFileSync(info);
