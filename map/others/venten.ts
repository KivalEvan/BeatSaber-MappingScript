import { colorFrom, globals, load, save, toColorObject } from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';

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
      name: 'VENTEN',
      saberLeftColor: toColorObject(colorFrom(30, 0.666, 0.9375, 'hsva'), true),
      saberRightColor: toColorObject(colorFrom(270, 0.725, 0.9375, 'hsva'), true),
      environment0Color: toColorObject(colorFrom(45, 1, 0.666, 'hsva'), true),
      environment1Color: toColorObject(colorFrom(90, 0.8, 0.5, 'hsva'), true),
      environment0ColorBoost: toColorObject(colorFrom(330, 1, 0.75, 'hsva'), true),
      environment1ColorBoost: toColorObject(colorFrom(200, 1, 0.666, 'hsva'), true),
      obstaclesColor: toColorObject(colorFrom(180, 0.333, 0.8, 'hsva'), true),
   },
];
for (const [_, d] of info.listMap()) {
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
      d.customData._difficultyLabel = 'Sparkling Strings';
      d.customData._information.splice(2, 0, 'Double Chant "Song of Falling Stars"');
   }

   if (d.characteristic === 'OneSaber' && d.difficulty === 'Normal') {
      d.customData._difficultyLabel = 'Cut The Strings';
   }
   if (d.characteristic === 'OneSaber' && d.difficulty === 'Expert') {
      d.customData._difficultyLabel = 'Break The Rules';
      d.customData._information.splice(2, 0, 'Score "Score Web"');
   }
   if (d.characteristic === 'OneSaber' && d.difficulty === 'ExpertPlus') {
      d.customData._difficultyLabel = 'Storm Invokation';
      d.customData._information.splice(2, 0, 'Music Sign "Double Score"');
   }

   d.copyColorScheme(info.colorSchemes[0]);
}

save.infoSync(info);
