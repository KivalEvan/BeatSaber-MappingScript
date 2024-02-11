import { colorFrom, ColorScheme, globals, load, save, toColorObject } from '../../depsLocal.ts';
import copyLightshow from '../../utility/copyLightshow.ts';
import wipPath from '../../utility/wipPath.ts';

globals.directory = wipPath('TRIPLE PLAY');

const info = load.infoSync(2);
info.colorSchemes = [
   {
      useOverride: true,
      name: 'TRIPLE PLAY',
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
];
info.environmentName = 'LatticeEnvironment';
info.environmentNames = ['LatticeEnvironment', 'TriangleEnvironment'];
const lightshow = load.difficultySync('EasyStandard.dat', 3);

for (const [m, d] of info.listMap()) {
   const difficulty = load.difficultySync(d.filename, 3);
   difficulty.useNormalEventsAsCompatibleEvents = m === 'Legacy';
   if (m !== 'Legacy') copyLightshow(lightshow, difficulty);

   delete d.customData._requirements;
   d.colorSchemeId = m === 'Legacy' ? 1 : 0;
   d.environmentId = m === 'Legacy' ? 1 : 0;
   d.copyColorScheme(info.colorSchemes[d.colorSchemeId]);
   save.difficultySync(difficulty);
}

save.infoSync(info);
