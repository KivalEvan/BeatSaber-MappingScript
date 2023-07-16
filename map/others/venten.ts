import { globals, load, logger, save } from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';

console.time('Runtime');

globals.directory = wipPath('VENTEN');

const lightshow = load.difficultySync('Lightshow.dat', 2);

const info = load.infoSync(2);
info.customData = {
   _contributors: [
      {
         _name: 'Kival Evan',
         _role: 'Mapper',
         _iconPath: 'iconKivalEvan.png',
      },
   ],
   _editors: {
      MMA2: {
         version: '4.8.0',
      },
      _lastEditedBy: 'ChroMapper',
      ChroMapper: {
         version: '0.8.609',
      },
   },
};
info.colorSchemes = [
   {
      useOverride: true,
      colorScheme: {
         name: 'VENTEN',
         saberLeftColor: { r: 0.8125, g: 0.5, b: 0.125, a: 1 },
         saberRightColor: { r: 0.5, g: 0.125, b: 0.8125, a: 1 },
         environment0Color: { r: 0.625, g: 0.4375, b: 0.03125, a: 1 },
         environment1Color: { r: 0.03125, g: 0.5625, b: 0.40625, a: 1 },
         environment0ColorBoost: { r: 0.75, g: 0.03125, b: 0.28125, a: 1 },
         environment1ColorBoost: { r: 0.15625, g: 0.4375, b: 0.75, a: 1 },
         obstaclesColor: { r: 0.125, g: 0.25, b: 0.4375, a: 1 },
      },
   },
];
for (const [_, d] of info.listMap()) {
   logger.info(`Copying lightshow to ${d.characteristic} ${d.difficulty}`);
   const difficulty = load.difficultySync(d.filename, 2);

   difficulty.customData._bookmarks = lightshow.customData!._bookmarks;
   difficulty.basicEvents = lightshow.basicEvents.filter((e) => !e.isBpmEvent());

   save.difficultySync(difficulty);

   delete d.customData._requirements;
   delete d.customData._suggestions;
   d.customData._information = [
      'Benben Tsukumo',
      'Yatsuhashi Tsukumo',
      'Illusionary Joururi',
      '1st track of album VENTEN',
   ];
   if (d.characteristic === 'Standard' && d.difficulty === 'Expert') {
      d.customData._difficultyLabel = 'Lunatic';
      d.customData._information.splice(2, 0, 'String Music "Storm Ensemble"');
   }

   if (d.characteristic === 'Standard' && d.difficulty === 'ExpertPlus') {
      d.customData._difficultyLabel = 'Storm Invokation';
      d.customData._information.splice(2, 0, 'Double Chant "Song of Falling Stars"');
   }

   if (d.characteristic === 'OneSaber' && d.difficulty === 'ExpertPlus') {
      d.customData._difficultyLabel = 'Sparkling Strings';
      d.customData._information.splice(2, 0, 'Score "Score Web"');
   }

   d.copyColorScheme(info.colorSchemes[0].colorScheme);
}

save.infoSync(info);

console.timeEnd('Runtime');
