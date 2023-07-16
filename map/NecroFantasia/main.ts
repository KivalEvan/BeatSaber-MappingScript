import { globals, load, save, utils, v3 } from '../../depsLocal.ts';
import { insertEnvironment } from '../../environment-enhancement/railway/main.ts';
import wipPath from '../../utility/wipPath.ts';

globals.directory = wipPath('Necro Fantasia');

const info = load.infoSync(2);
info.songName = '_Necro Fantasia';
info.environmentName = 'WeaveEnvironment';
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
for (const [_, d] of info.listMap()) {
   const difficulty = load.difficultySync(d.filename, 3);
   difficulty.useNormalEventsAsCompatibleEvents = false;
   difficulty.basicEvents = [];
   difficulty.obstacles = [];
   difficulty.lightColorEventBoxGroups = [];
   difficulty.lightRotationEventBoxGroups = [];
   difficulty.customData.customEvents = [];
   difficulty.basicEvents = v3.BasicEvent.create({ type: 4, value: 9 });
   difficulty.colorBoostEvents = v3.ColorBoostEvent.create({ toggle: true });
   insertEnvironment(difficulty);

   for (let id = 0; id < 16; id++) {
      difficulty.addLightColorEventBoxGroups({
         id,
         boxes: [{ events: [{}] }],
      });
   }
   save.difficultySync(difficulty);

   delete d.customData._requirements;
   d.customData._suggestions = ['Chroma'];
   d.copyColorScheme(info.colorSchemes[0].colorScheme);
}

save.infoSync(info);
