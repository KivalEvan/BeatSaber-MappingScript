import { ext, globals, load } from '../depsLocal.ts';
import wipPath from '../utility/wipPath.ts';
const countEbg = ext.stats.countEbg;

globals.directory = wipPath('Bad Apple', true);
const data = load.lightshowSync('Common.lightshow.dat');

console.log(Object.keys(countEbg(data.lightColorEventBoxGroups)));
console.log(Object.keys(countEbg(data.lightRotationEventBoxGroups)));
console.log(Object.keys(countEbg(data.lightTranslationEventBoxGroups)));
console.log(Object.keys(countEbg(data.fxEventBoxGroups)));

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
