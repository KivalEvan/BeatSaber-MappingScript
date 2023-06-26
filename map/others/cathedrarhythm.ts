import { BeatPerMinute, convert, globals, load, save } from '../../depsLocal.ts';
import { insertEnvironment } from '../../environment-enhancement/cathedral/mod.ts';
import jankySliderConvert from '../../utility/jankySliderConvert.ts';

globals.directory = Deno.build.os === 'linux'
   ? '/home/kival/CustomWIPLevels/Cathedrarhythm/'
   : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/Cathedrarhythm';

const d2 = load.difficultySync('OriginalStandard.dat', 2);
const d3 = convert.toV3(d2);

const d2light = load.difficultySync('Lightshow.dat', 2);
const bpm = BeatPerMinute.create(182, [], 192);
convert.ogChromaToChromaV2(d2light);
convert.chromaLightGradientToVanillaGradient(d2light);
const d3light = convert.toV3(d2light);

insertEnvironment(d3);
jankySliderConvert(d3);

// d3light.basicBeatmapEvents.forEach((e) => {
// e.floatValue = 1;
// if (e.isLightEvent()) {
//     e.floatValue = e.value ? 1 : 0;
// }
// if (e.customData?.color) {
//     if (e.value !== 0) {
//         e.value = e.customData.color[0]
//             ? e.value <= 4
//                 ? 4
//                 : e.value <= 8
//                 ? 8
//                 : 12
//             : e.value;
//     }
//     e.floatValue = e.customData.color[3] ?? 1;
// }
// laser in bts is weak as fuck
// if (e.type === 2 || e.type === 3) {
//     e.floatValue *= 1.5;
// }
// delete e.customData?.color;
// });
d3.basicEvents = d3light.basicEvents
   .map((e) => {
      e.time = bpm.adjustTime(e.time);
      return e;
   })
   .filter((e) => e.type !== 9);
d3.colorBoostEvents = d3light.colorBoostEvents.map((e) => {
   e.time = bpm.adjustTime(e.time);
   return e;
});

save.difficultySync(d3, {
   filePath: 'ExpertPlusStandard.dat',
});

const info = load.infoSync();
for (const difficulties of Object.values(info.difficultySets)) {
   for (const d of difficulties) {
      delete d.customData._requirements;
      d.customData._suggestions = ['Chroma'];
   }
}
save.infoSync(info);
