import {
   colorFrom,
   globals,
   load,
   pRandomFn,
   range,
   save,
   toColorObject,
} from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';
import { insertEnvironment } from '../../environment-enhancement/railway/main.ts';

globals.directory = wipPath('Lost Days');

const info = load.infoSync(2);
info.colorSchemes = [
   {
      useOverride: true,
      name: 'Lost Days',
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
info.environmentName = 'WeaveEnvironment';
info.environmentNames = ['WeaveEnvironment'];
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];

for (const [m, d] of info.listMap()) {
   const data = load.difficultySync(d.filename, 3);
   data.useNormalEventsAsCompatibleEvents = m === 'Legacy';
   insertEnvironment(data);

   const pRandom = pRandomFn('Lost Days');
   data.customData.customEvents = [];
   for (const it of range(0, 9)) {
      const r = pRandom(3, 4);
      data.customData.customEvents.push(
         {
            b: 0,
            t: 'AnimateTrack',
            d: {
               track: `railwayField${it}`,
               duration: 0,
               scale: [[1 / 24, 1 / 24, r, 0, 'easeInOutQuad']],
            },
         },
         {
            b: 0.125 + it * 3,
            t: 'AnimateTrack',
            d: {
               track: `railwayField${it}`,
               duration: 27,
               repeat: 41,
               scale: [
                  [1 / 24, 1 / 24, r, 0, 'easeInOutQuad'],
                  [1 / 24, 1 / 24, 0.25, 0.5, 'easeInOutQuad'],
                  [1 / 24, 1 / 24, r, 1, 'easeInOutQuad'],
               ],
            },
         },
      );
   }

   delete d.customData._requirements;
   delete d.customData._difficultyLabel;
   d.customData._suggestions = ['Chroma'];
   d.customData._information = [
      'Kana Anaberal',
      'Vanishing Dream ~ Lost Dream',
      '9th and 10th track of album Spatial Moving',
      'Illustration by c7777',
   ];

   if (d.characteristic === 'Standard' && d.difficulty === 'Expert') {
      d.customData._difficultyLabel = 'Lunatic';
   }
   if (d.characteristic === 'Standard' && d.difficulty === 'ExpertPlus') {
      d.customData._difficultyLabel = 'Sorrowful Memory';
   }

   if (d.characteristic === 'OneSaber' && d.difficulty === 'Normal') {
      d.customData._difficultyLabel = 'Distant Apart';
   }
   if (d.characteristic === 'OneSaber' && d.difficulty === 'Expert') {
      d.customData._difficultyLabel = 'Tranquil Heart';
   }
   if (d.characteristic === 'OneSaber' && d.difficulty === 'ExpertPlus') {
      d.customData._difficultyLabel = 'Shattered Dreams';
   }

   d.copyColorScheme(info.colorSchemes[d.colorSchemeId]);
   save.difficultySync(data);
}

save.infoSync(info);
