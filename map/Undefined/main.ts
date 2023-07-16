import walls from './walls.ts';
import lights from './lights.ts';
import jankySliderConvert from '../../utility/jankySliderConvert.ts';
import { convert, globals, isV3, load, save, utils } from '../../depsLocal.ts';

console.log('Running script...');
console.time('Runtime');
globals.directory = Deno.build.os === 'linux'
   ? '/home/kival/CustomWIPLevels/Undefined/'
   : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/Undefined';

const info = load.infoSync();
info.environmentName = 'WeaveEnvironment';
info.customData._contributors = [
   {
      _role: 'Mapper',
      _name: 'Kival Evan',
      _iconPath: 'iconKivalEvan.png',
   },
];

for (const [_, d] of info.listMap()) {
   d.customData._information = [
      'Yuuka Kazami',
      'Gensokyo, Past and Present ~ Flower Land',
      '6th track of album Parallel Cross',
      'Illustration by Yuuki Shironeko',
   ];
   if (d.difficulty === 'Expert') {
      d.customData._information.splice(1, 0, 'Flower Sign "Blossoming of Gensokyo"');
   }
   if (d.difficulty === 'ExpertPlus') {
      if (d.characteristic === 'Standard') {
         d.customData._information.splice(1, 0, 'Fantasy "The Beauties of Nature"');
      } else {
         d.customData._information.splice(1, 0, '"Fantastic Spring Flowers"');
      }
   }
   delete d.customData._requirements;
   delete d.customData._suggestions;
}

const difficultyList = load.difficultyFromInfoSync(info);

difficultyList.forEach((d) => {
   if (!isV3(d.data)) {
      d.data = convert.toV3(d.data);
   }

   d.data.basicEvents = [];
   d.data.useNormalEventsAsCompatibleEvents = false;
   jankySliderConvert(d.data);
   for (let i = 0, j = 0, len = d.data.colorNotes.length; i < len; i++) {
      const n = d.data.colorNotes[i];
      if (n.direction === 8) {
         n.angleOffset = 45;
      }
      if (d.characteristic === 'OneSaber') {
         if (n.time >= 98.25 + j * 4 && n.time <= 100.5 + j * 4) {
            n.angleOffset = Math.round(
               utils.lerp(utils.normalize(n.time, 98.25 + j * 4, 100.5 + j * 4), -22.5, 22.5) *
                  (j % 2 ? 1 : -1),
            );
         }
         if (n.time >= 100.5 + j * 4) {
            j++;
         }
         continue;
      }
      if (d.difficulty === 'ExpertPlus' || d.difficulty === 'Expert') {
         if (n.color === 1 && n.time >= 32 && n.time < 32.75) {
            n.angleOffset = Math.round(utils.lerp(utils.normalize(n.time, 32, 32.75), -45, 0));
         }
         if (n.color === 0 && n.time >= 33 && n.time < 33.75) {
            n.angleOffset = Math.round(utils.lerp(utils.normalize(n.time, 33, 33.75), 45, 0));
         }
         if (n.time >= 98 + j * 4 && n.time <= 101 + j * 4) {
            if (n.color === (d.difficulty === 'Expert' ? j + 1 : j) % 2) {
               n.angleOffset = Math.round(
                  utils.lerp(
                     utils.normalize(n.time, 98.25 + j * 4, 100.5 + j * 4),
                     d.difficulty === 'Expert' ? -30 : -45,
                     d.difficulty === 'Expert' ? 30 : 45,
                  ) * (j % 2 ? 1 : -1),
               );
            }
         }
         if (n.time >= 101 + j * 4) {
            j++;
         }
      }
   }
   walls(d.data);
   lights(d.data);
});

globals.directory = Deno.build.os === 'linux'
   ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/Undefined/'
   : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/Undefined';
save.difficultyListSync(difficultyList);
save.infoSync(info);

console.timeEnd('Runtime');
