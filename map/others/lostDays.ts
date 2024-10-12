import {
   colorFrom,
   globals,
   pRandomFn,
   range,
   readDifficultyFileSync,
   readInfoFileSync,
   toColorObject,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '../../depsLocal.ts';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import { insertEnvironment } from '../../environment-enhancement/railway/main.ts';
import applyLabel from '../../utility/applyLabel.ts';
import copyToCustomColor from '../../utility/copyToCustomColor.ts';

globals.directory = beatmapWipPath('Lost Days');

const info = readInfoFileSync();
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
info.environmentNames = ['WeaveEnvironment'];
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];

applyLabel(info, [
   {
      characteristic: 'Standard',
      difficulty: 'ExpertPlus',
      label: 'Sorrowful Memory',
   },
   {
      characteristic: 'Standard',
      difficulty: 'Expert',
      label: 'Lunatic',
   },
   {
      characteristic: 'OneSaber',
      difficulty: 'ExpertPlus',
      label: 'Shattered Dreams',
   },
   {
      characteristic: 'OneSaber',
      difficulty: 'Expert',
      label: 'Tranquil Heart',
   },
   {
      characteristic: 'OneSaber',
      difficulty: 'Normal',
      label: 'Distant Apart',
   },
]);

for (const d of info.difficulties) {
   const data = readDifficultyFileSync(d.filename, 3);
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
   d.customData._suggestions = ['Chroma'];
   d.customData._information = [
      'Kana Anaberal',
      'Vanishing Dream ~ Lost Dream',
      '9th and 10th track of album Spatial Moving',
      'Illustration by c7777',
   ];

   copyToCustomColor(d, info.colorSchemes[d.colorSchemeId]);
   writeDifficultyFileSync(data);
}

writeInfoFileSync(info);
