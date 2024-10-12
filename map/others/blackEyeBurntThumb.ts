import * as bsmap from '../../depsLocal.ts';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';

bsmap.globals.directory = beatmapWipPath('Black Eye-Burnt Thumb');
const INPUT_FILE = 'ExpertPlusStandard.dat';
const OUTPUT_FILE = INPUT_FILE;

const old = bsmap.readDifficultyFileSync(INPUT_FILE, 2);
old.basicEvents.forEach((e) => {
   e.floatValue = 1;
   if (e.isLightEvent()) {
      e.floatValue = e.value ? 1 : 0;
   }
   if (e.isLightEvent() && e.customData?._color) {
      if (e.value !== 0) {
         e.value = e.customData._color[0] ? (e.value <= 4 ? 4 : 8) : e.value;
      }
      e.floatValue = e.customData._color[3] ?? 1;
   }
   delete e.customData._color;
});

const difficulty = bsmap.toV3Beatmap(old, old.version);

for (let i = 0, len = difficulty.colorNotes.length; i < len; i++) {
   const n = difficulty.colorNotes[i];
   if (n.time > 528) {
      n.angleOffset = Math.round(Math.random() * 20 - 10);
   }
   if (n.time < 208) {
      n.angleOffset = Math.round(Math.random() * 10 - 5);
   }
   if (n.time < 144) {
      n.angleOffset = Math.round(Math.random() * 15 - 7.5);
   }
   if (n.time < 70) {
      n.angleOffset = Math.round(Math.random() * 20 - 10);
   }
}

difficulty.obstacles.forEach((o) => {
   if (o.time >= 266 && o.time <= 267) {
      o.height = 2;
   }
   if (o.time >= 268 && o.time <= 271) {
      o.height = 3;
      if (o.time % 2 === 1) {
         o.height = 4;
      }
   }
   if (o.time >= 394 && o.time <= 395) {
      o.height = 2;
   }
   if (o.time >= 396 && o.time <= 399) {
      o.height = 3;
      if (o.time % 2 === 1) {
         o.height = 4;
      }
   }
   if (o.time >= 522 && o.time <= 523) {
      o.height = 2;
   }
   if (o.time >= 524 && o.time <= 527) {
      o.height = 3;
      if (o.time % 2 === 1) {
         o.height = 4;
      }
   }
   if (!(o.time >= 80 && o.time < 144)) {
      return;
   }
   if ((o.time - 80) % 8 === 0) {
      o.posY = 0;
   }
   if ((o.time - 80) % 8 === 7.5) {
      o.posY = 1;
   }
});
difficulty.obstacles.forEach((o) => {
   if (o.time >= 63 && o.time < 64) {
      o.posY = 1;
      o.height = 4;
   }
   if (!(o.time >= 3.5 && o.time < 63)) {
      return;
   }
   if (o.posX !== 1 && o.posX !== 2 && !(o.time >= 13 && o.time <= 20)) {
      o.height = 2;
   }
});
difficulty.obstacles.forEach((o) => {
   if (o.time >= 585 && o.time < 586) {
      o.posY = 1;
      o.height = 4;
   }
   if (!(o.time >= 528 && o.time < 585)) {
      return;
   }
   if (o.posX !== 1 && o.posX !== 2 && !(o.time >= 535 && o.time <= 542)) {
      o.height = 2;
   }
});

difficulty.colorNotes.forEach((n) => n.resetCustomData());

bsmap.writeDifficultyFileSync(difficulty, {
   filename: OUTPUT_FILE,
   directory:
      'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/Black Eye-Burnt Thumb/',
});
