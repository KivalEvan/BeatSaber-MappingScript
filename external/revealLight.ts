import { ext, globals, readLightshowFileSync } from '@bsmap';
import beatmapWipPath from '../utility/beatmapWipPath.ts';
const countEbg = ext.stats.countEbg;

globals.directory = beatmapWipPath('Bad Apple');
const data = readLightshowFileSync('Common.lightshow.dat');

console.log(
   Object.keys(countEbg(data.lightshow.lightColorEventBoxGroups)).map((e) => +e),
);
console.log(
   Object.keys(countEbg(data.lightshow.lightRotationEventBoxGroups)).map(
      (e) => +e,
   ),
);
console.log(
   Object.keys(countEbg(data.lightshow.lightTranslationEventBoxGroups)).map(
      (e) => +e,
   ),
);
console.log(
   Object.keys(countEbg(data.lightshow.fxEventBoxGroups)).map((e) => +e),
);

console.log(data.lightshow.basicEvents.map((e) => e.type));
console.log(
   Array.from(
      new Set([
         ...Object.keys(countEbg(data.lightshow.lightColorEventBoxGroups)).map(
            (n) => parseInt(n),
         ),
         ...Object.keys(
            countEbg(data.lightshow.lightRotationEventBoxGroups),
         ).map((n) => parseInt(n)),
         ...Object.keys(
            countEbg(data.lightshow.lightTranslationEventBoxGroups),
         ).map((n) => parseInt(n)),
         ...Object.keys(countEbg(data.lightshow.fxEventBoxGroups)).map((n) => parseInt(n)),
      ]),
   ).sort((a, b) => a - b),
);
