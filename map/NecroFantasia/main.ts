import {
   Beatmap,
   colorFrom,
   ColorScheme,
   ext,
   globals,
   lerp,
   normalize,
   readDifficultyFileSync,
   readInfoFileSync,
   toColorObject,
   writeDifficultyFile,
   writeInfoFileSync,
} from '../../depsLocal.ts';
import intervalBookmark from '../../utility/intervalBookmark.ts';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import { insertEnvironment } from '../../environment-enhancement/railway/main.ts';
import ambient from './ambient.ts';
import butterfly from './butterfly.ts';
import light from './light/main.ts';
import note from './note.ts';
import copyToCustomColor from '../../utility/copyToCustomColor.ts';

globals.directory = beatmapWipPath('Necro Fantasia');

const info = readInfoFileSync();
info.song.title = 'Necro Fantasia';
info.baseEnvironment = 'WeaveEnvironment';
info.environmentNames = ['WeaveEnvironment'];
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];
info.colorSchemes = [
   {
      useOverride: true,
      name: 'Necro Fantasia',
      saberLeftColor: toColorObject(ColorScheme.Lattice._colorLeft!, true),
      saberRightColor: toColorObject(ColorScheme.Lattice._colorRight!, true),
      environment0Color: toColorObject(colorFrom(320, 1, 0.9375, 'hsva'), true),
      environment1Color: toColorObject(colorFrom(285, 1, 0.875, 'hsva'), true),
      environment0ColorBoost: toColorObject(
         colorFrom(90, 0.9375, 0.9375, 'hsva'),
         true,
      ),
      environment1ColorBoost: toColorObject(
         colorFrom(200, 0.75, 0.8125, 'hsva'),
         true,
      ),
      obstaclesColor: toColorObject(colorFrom(0.5), true),
   },
];

const lightshow = new Beatmap();
insertEnvironment(lightshow);
light(lightshow);
butterfly(lightshow);
ambient(lightshow);
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
   b.c = colorFrom(
      lerp(normalize(i, 0, ary.length - 1), 375, 315),
      1,
      1,
      'hsva',
   );
   return b;
});

const promise = [];
for (const d of info.difficulties) {
   // if (d.difficulty !=='Easy') continue;
   const bm = readDifficultyFileSync(d.filename, 3);
   bm.useNormalEventsAsCompatibleEvents = false;
   bm.basicEvents = lightshow.basicEvents;
   bm.colorBoostEvents = lightshow.colorBoostEvents;
   bm.lightColorEventBoxGroups = lightshow.lightColorEventBoxGroups;
   bm.lightRotationEventBoxGroups = lightshow.lightRotationEventBoxGroups;
   bm.difficulty.customData.environment = lightshow.customData.environment;
   bm.difficulty.customData.materials = lightshow.customData.materials;
   bm.difficulty.customData.customEvents = lightshow.customData.customEvents;
   bm.difficulty.customData.pointDefinitions = lightshow.customData.pointDefinitions;
   bm.difficulty.customData.bookmarks = lightshow.customData.bookmarks;
   note(bm);
   promise.push(writeDifficultyFile(bm));

   delete d.customData._requirements;
   d.customData._suggestions = ['Chroma'];
   copyToCustomColor(d, info.colorSchemes[0]);
   d.customData._information = [
      'Yukari Yakumo',
      'Necrofantasia',
      '4th track of album For Your Pieces',
      'Illustration by ryosios',
   ];

   if (d.characteristic === 'Standard' && d.difficulty === 'Expert') {
      d.customData._difficultyLabel = 'Lunatic';
      d.customData._information.splice(
         2,
         0,
         ' 	Evil Spirits "Dreamland of Straight and Curve"',
      );
   }
   if (d.characteristic === 'Standard' && d.difficulty === 'ExpertPlus') {
      d.customData._difficultyLabel = 'Phantasm';
      d.customData._information.splice(
         2,
         0,
         'Barrier "Boundary of Life and Death"',
      );
   }

   if (d.characteristic === 'OneSaber' && d.difficulty === 'Normal') {
      d.customData._difficultyLabel = 'Petals';
   }
   if (d.characteristic === 'OneSaber' && d.difficulty === 'Expert') {
      d.customData._difficultyLabel = 'Blooming Flower';
      d.customData._information.splice(
         2,
         0,
         'Sinister Spirits "Double Black Death Butterfly"',
      );
   }
   if (d.characteristic === 'OneSaber' && d.difficulty === 'ExpertPlus') {
      d.customData._difficultyLabel = 'Cherry Blossom';
      d.customData._information.splice(
         2,
         0,
         '"Boundary of Humans and Youkai" ',
      );
   }
}
await Promise.allSettled(promise);

writeInfoFileSync(info);

console.log('event', lightshow.basicEvents.length);
console.log('boost', lightshow.colorBoostEvents.length);
console.log('light');
console.table(
   Object.values(ext.stats.countEbg(lightshow.lightColorEventBoxGroups)).reduce(
      (p, v) => {
         if (!p) return v;
         for (const k in v) {
            p[k] += v[k];
         }
         return p;
      },
      { groups: 0, boxes: 0, bases: 0 },
   ),
);
console.log('rotation');
console.table(
   Object.values(
      ext.stats.countEbg(lightshow.lightRotationEventBoxGroups),
   ).reduce(
      (p, v) => {
         if (!p) return v;
         for (const k in v) {
            p[k] += v[k];
         }
         return p;
      },
      { groups: 0, boxes: 0, bases: 0 },
   ),
);
console.log('custom events', lightshow.customData.customEvents?.length);
console.log(
   'custom events position points',
   lightshow.difficulty.customData.customEvents?.reduce((p, v) => {
      if (v.t === 'AnimateTrack') {
         p += v.d.position?.length ?? 0;
      }
      return p;
   }, 0),
);
console.log('environment', lightshow.customData.environment?.length);
