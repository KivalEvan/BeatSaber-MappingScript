import {
   colorFrom,
   ext,
   globals,
   lerp,
   load,
   normalize,
   save,
   toColorObject,
   v3,
} from '../../depsLocal.ts';
import intervalBookmark from '../../utility/intervalBookmark.ts';
import wipPath from '../../utility/wipPath.ts';
import { insertEnvironment } from '../../environment-enhancement/railway/main.ts';
import ambient from './ambient.ts';
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
         saberLeftColor: toColorObject(colorFrom(355, 0.8125, 0.9375, 'hsva'), true),
         saberRightColor: toColorObject(colorFrom(215, 0.625, 0.875, 'hsva'), true),
         environment0Color: toColorObject(colorFrom(320, 1, 0.9375, 'hsva'), true),
         environment1Color: toColorObject(colorFrom(285, 1, 0.875, 'hsva'), true),
         environment0ColorBoost: toColorObject(colorFrom(90, 0.9375, 0.9375, 'hsva'), true),
         environment1ColorBoost: toColorObject(colorFrom(200, 0.75, 0.8125, 'hsva'), true),
         obstaclesColor: toColorObject(colorFrom(335, 0.666, 0.4375, 'hsva'), true),
      },
   },
];

const lightshow = v3.Difficulty.create();
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
   b.c = colorFrom(lerp(normalize(i, 0, ary.length - 1), 375, 315), 1, 1, 'hsva');
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
   d.copyColorScheme(info.colorSchemes[0].colorScheme);
}

save.infoSync(info);

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
   Object.values(ext.stats.countEbg(lightshow.lightRotationEventBoxGroups)).reduce(
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
   lightshow.customData.customEvents?.reduce((p, v) => {
      if (v.t === 'AnimateTrack') {
         p += v.d.position?.length ?? 0;
      }
      return p;
   }, 0),
);
console.log('environment', lightshow.customData.environment?.length);
