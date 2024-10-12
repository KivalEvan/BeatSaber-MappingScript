import { ext, globals, TimeProcessor, v3 } from '../../depsLocal.ts';
import * as imagescript from 'https://deno.land/x/imagescript@1.2.17/mod.ts';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';

globals.directory = beatmapWipPath('Bad Apple');

const difficulty = readDifficultyFileSync('EasyLawless.dat', 3);
const info = readInfoFileSync();

const BPM = TimeProcessor.create(info.beatsPerMinute);

difficulty.customData = {};
difficulty.basicEvents = [];
difficulty.colorNotes = [];
difficulty.bombNotes = [];

for (let id = 0; id < 4; id++) {
   difficulty.addLightTranslationEventBoxGroups({
      time: 0,
      id,
      boxes: [{ axis: 1, events: [{ translation: -5 }] }],
   });
}

difficulty.addLightTranslationEventBoxGroups({
   time: 0,
   id: 8,
   boxes: [{ axis: 1, events: [{ translation: -5 }] }],
});

for (let id = 20; id < 22; id++) {
   difficulty.addLightTranslationEventBoxGroups({
      time: 0,
      id,
      boxes: [
         { filter: { type: 2, p0: 1 }, events: [{ translation: -1 }] },
         { filter: { type: 2, p0: 1 }, axis: 1, events: [{ translation: 3 }] },
         {
            filter: { type: 2, p0: 2 },
            axis: 1,
            events: [{ translation: 2.5 }],
         },
         { filter: { type: 2, p0: 2 }, events: [{ translation: 2 }] },
      ],
   });
}

console.log('loading gif');
const image = Deno.readFileSync('./map/BadApple/badWeeknd.gif');
console.log('decoding gif');
const img = await imagescript.GIF.decode(image);
let i = 0;
const screenLight: { [key: number]: number } = {};
const screenX = 10;
const screenY = 5;
const fps = 15;
img.forEach((frame) => {
   console.log('reading frame', i);
   frame.saturation(0, true);
   const lightThis: { [key: number]: number } = {};
   for (let y = 2; y < Math.min(frame.height, screenY) + 2; y++) {
      for (let x = 0; x < Math.min(frame.width, screenX); x++) {
         const pos = screenX * (frame.yOffset + y - 2) + x + frame.xOffset;
         const colorAry = frame.getRGBAAt(x + 1, y + 1);
         if (colorAry[3] === 0) {
            continue;
         }
         if (screenLight[pos] === colorAry[0]) {
            continue;
         }
         lightThis[pos] = colorAry[0] / 255;
         screenLight[pos] = colorAry[0];
      }
   }
   const leftSide: v3.LightColorEventBox[] = [];
   const rightSide: v3.LightColorEventBox[] = [];
   const mapped = [
      0,
      1,
      2,
      3,
      4,
      4,
      3,
      2,
      1,
      0,
      9,
      8,
      7,
      6,
      5,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      14,
      13,
      12,
      11,
      10,
      19,
      18,
      17,
      16,
      15,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      24,
      23,
      22,
      21,
      20,
   ];
   for (const [key, value] of Object.entries(lightThis)) {
      const id = parseInt(key);
      if (id % 10 < 5) {
         leftSide.push(
            v3.LightColorEventBox.create({
               filter: { type: 2, p0: mapped[id] },
               events: [{ color: 2, brightness: value }],
            })[0],
         );
      } else {
         rightSide.push(
            v3.LightColorEventBox.create({
               filter: { type: 2, p0: mapped[id] },
               events: [{ color: 2, brightness: value }],
            })[0],
         );
      }
   }
   if (leftSide.length) {
      difficulty.addLightColorEventBoxGroups({
         time: 25 + BPM.toBeatTime(i / fps),
         id: 13,
         boxes: leftSide,
      });
   }
   if (rightSide.length) {
      difficulty.addLightColorEventBoxGroups({
         time: 25 + BPM.toBeatTime(i / fps),
         id: 18,
         boxes: rightSide,
      });
   }
   i++;
});

globals.directory = Deno.build.os === 'linux'
   ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/Bad Apple/'
   : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/Bad Apple';
console.log(ext.stats.countEbg(difficulty.lightColorEventBoxGroups));
writeDifficultyFileSync(difficulty, { format: 4 });
console.log('done');
