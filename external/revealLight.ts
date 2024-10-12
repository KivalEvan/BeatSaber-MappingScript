import { ext, globals, readLightshowFileSync } from '../depsLocal.ts';
import beatmapWipPath from '../utility/beatmapWipPath.ts';
const countEbg = ext.stats.countEbg;

globals.directory = beatmapWipPath('Bad Apple');
const data = readLightshowFileSync('BritneySpears.lightshow.dat');

console.log(Object.keys(countEbg(data.lightColorEventBoxGroups)).map((e) => +e));
console.log(Object.keys(countEbg(data.lightRotationEventBoxGroups)).map((e) => +e));
console.log(Object.keys(countEbg(data.lightTranslationEventBoxGroups)).map((e) => +e));
console.log(Object.keys(countEbg(data.fxEventBoxGroups)).map((e) => +e));

console.log(data.basicEvents.map((e) => e.type));
console.log(
   Array.from(
      new Set([
         ...Object.keys(countEbg(data.lightColorEventBoxGroups)).map((n) => parseInt(n)),
         ...Object.keys(countEbg(data.lightRotationEventBoxGroups)).map((n) => parseInt(n)),
         ...Object.keys(countEbg(data.lightTranslationEventBoxGroups)).map(
            (n) => parseInt(n),
         ),
         ...Object.keys(countEbg(data.fxEventBoxGroups)).map((n) => parseInt(n)),
      ]),
   ).sort((a, b) => a - b),
);
