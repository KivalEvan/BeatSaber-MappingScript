import { globals, load, save, utils, v3 } from '../../depsLocal.ts';
import { insertEnvironment } from '../../environment-enhancement/railway/main.ts';
import intervalBookmark from '../../utility/intervalBookmark.ts';
import wipPath from '../../utility/wipPath.ts';
import butterfly from './butterfly.ts';
import light from './light/main.ts';
import note from './note.ts';

globals.directory = wipPath('Necro Fantasia');

const info = load.infoSync(2);
info.songName = '_Necro Fantasia';
info.colorSchemes = [
   {
      useOverride: true,
      colorScheme: {
         name: 'Necro Fantasia',
         saberLeftColor: utils.toColorObject(utils.colorFrom(355, 0.8125, 0.9375, 'hsva'), true),
         saberRightColor: utils.toColorObject(utils.colorFrom(215, 0.625, 0.875, 'hsva'), true),
         environment0Color: utils.toColorObject(utils.colorFrom(90, 0.9375, 0.9375, 'hsva'), true),
         environment1Color: utils.toColorObject(utils.colorFrom(200, 0.75, 0.8125, 'hsva'), true),
         environment0ColorBoost: utils.toColorObject(utils.colorFrom(350, 1, 0.8125, 'hsva'), true),
         environment1ColorBoost: utils.toColorObject(utils.colorFrom(270, 1, 0.75, 'hsva'), true),
         obstaclesColor: utils.toColorObject(utils.colorFrom(335, 0.666, 0.4375, 'hsva'), true),
      },
   },
];

const lightshow = v3.Difficulty.create();
insertEnvironment(lightshow);
light(lightshow);
butterfly(lightshow);
lightshow.customData.bookmarks = intervalBookmark(6, 32, [
   'Start-1',
   'Start-2',
   'Intro-1',
   'Intro-2',
   'Vocal-1-1',
   'Vocal-1-2',
   'Break-1',
   'Vocal-2-1',
   'Vocal-2-2',
   'Build-1-1',
   'Build-1-2',
   'Chorus-1-1',
   'Chorus-1-2',
   'Chorus-1-3',
   'Chorus-1-4',
   'Break-1-1',
   'Break-1-2',
   'Vocal-3-1',
   'Vocal-3-2',
   'Build-2-1',
   'Build-2-2',
   'Bridge-1-1',
   'Bridge-1-2',
   'Bridge-1-3',
   'Bridge-1-4',
   'Chorus-2-1',
   'Chorus-2-2',
   'Chorus-2-3',
   'Chorus-2-4',
   'Break-2-1',
   'Break-2-2',
   'End-1',
]).map((b, i, ary) => {
   b.c = utils.colorFrom(utils.lerp(utils.normalize(i, 0, ary.length - 1), 375, 315), 1, 1, 'hsva');
   return b;
});

for (const [_, d] of info.listMap()) {
   const difficulty = load.difficultySync(d.filename, 3);
   difficulty.useNormalEventsAsCompatibleEvents = false;
   difficulty.basicEvents = lightshow.basicEvents;
   difficulty.colorBoostEvents = lightshow.colorBoostEvents;
   difficulty.lightColorEventBoxGroups = lightshow.lightColorEventBoxGroups;
   difficulty.lightRotationEventBoxGroups = lightshow.lightRotationEventBoxGroups;
   difficulty.customData.environment = lightshow.customData.environment;
   difficulty.customData.materials = lightshow.customData.materials;
   difficulty.customData.customEvents = lightshow.customData.customEvents;
   difficulty.customData.pointDefinitions = lightshow.customData.pointDefinitions;
   difficulty.customData.bookmarks = lightshow.customData.bookmarks;
   note(difficulty);

   save.difficultySync(difficulty);

   delete d.customData._requirements;
   d.customData._suggestions = ['Chroma'];
   d.customData._requirements = ['Noodle Extensions'];
   d.copyColorScheme(info.colorSchemes[0].colorScheme);
}

save.infoSync(info);
