import { ext, load } from './depsLocal.ts';

const countEbg = ext.stats.countEbg;
const data = load.difficultySync(
   'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/Jaroslav Beck - Beat Saber (Built in)/OneSaberEasy.dat',
);

console.log(Object.keys(countEbg(data.lightColorEventBoxGroups)));
console.log(Object.keys(countEbg(data.lightRotationEventBoxGroups)));
console.log(Object.keys(countEbg(data.lightTranslationEventBoxGroups)));
console.log(Object.keys(countEbg(data.fxEventBoxGroups)));

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
console.log(data.basicEvents.map((e) => e.type));
