import walls from './walls.ts';
import lights from './lights.ts';
import {
   globals,
   lerp,
   normalize,
   readFromInfoSync,
   readInfoFileSync,
   toV3Beatmap,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';

globals.directory = beatmapWipPath('Undefined');

const info = readInfoFileSync();
info.environmentBase.normal = 'WeaveEnvironment';
info.customData._contributors = [
   {
      _role: 'Mapper',
      _name: 'Kival Evan',
      _iconPath: 'iconKivalEvan.png',
   },
];

for (const d of info.difficulties) {
   d.customData._information = [
      'Yuuka Kazami',
      'Gensokyo, Past and Present ~ Flower Land',
      '6th track of album Parallel Cross',
      'Illustration by Yuuki Shironeko',
   ];
   if (d.difficulty === 'Expert') {
      d.customData._information.splice(
         1,
         0,
         'Flower Sign "Blossoming of Gensokyo"',
      );
   }
   if (d.difficulty === 'ExpertPlus') {
      if (d.characteristic === 'Standard') {
         d.customData._information.splice(
            1,
            0,
            'Fantasy "The Beauties of Nature"',
         );
      } else {
         d.customData._information.splice(1, 0, '"Fantastic Spring Flowers"');
      }
   }
   delete d.customData._requirements;
   delete d.customData._suggestions;
}

const difficultyList = readFromInfoSync(info);

difficultyList.forEach((d) => {
   d.beatmap = toV3Beatmap(d.beatmap, d.beatmap.version);
   d.beatmap.basicEvents = [];
   d.beatmap.useNormalEventsAsCompatibleEvents = false;
   for (let i = 0, j = 0, len = d.beatmap.colorNotes.length; i < len; i++) {
      const n = d.beatmap.colorNotes[i];
      if (n.direction === 8) {
         n.angleOffset = 45;
      }
      if (d.info.characteristic === 'OneSaber') {
         if (n.time >= 98.25 + j * 4 && n.time <= 100.5 + j * 4) {
            n.angleOffset = Math.round(
               lerp(
                  normalize(n.time, 98.25 + j * 4, 100.5 + j * 4),
                  -22.5,
                  22.5,
               ) * (j % 2 ? 1 : -1),
            );
         }
         if (n.time >= 100.5 + j * 4) {
            j++;
         }
         continue;
      }
      if (d.info.difficulty === 'ExpertPlus' || d.info.difficulty === 'Expert') {
         if (n.color === 1 && n.time >= 32 && n.time < 32.75) {
            n.angleOffset = Math.round(
               lerp(normalize(n.time, 32, 32.75), -45, 0),
            );
         }
         if (n.color === 0 && n.time >= 33 && n.time < 33.75) {
            n.angleOffset = Math.round(
               lerp(normalize(n.time, 33, 33.75), 45, 0),
            );
         }
         if (n.time >= 98 + j * 4 && n.time <= 101 + j * 4) {
            if (n.color === (d.info.difficulty === 'Expert' ? j + 1 : j) % 2) {
               n.angleOffset = Math.round(
                  lerp(
                     normalize(n.time, 98.25 + j * 4, 100.5 + j * 4),
                     d.info.difficulty === 'Expert' ? -30 : -45,
                     d.info.difficulty === 'Expert' ? 30 : 45,
                  ) * (j % 2 ? 1 : -1),
               );
            }
         }
         if (n.time >= 101 + j * 4) {
            j++;
         }
      }
   }
   walls(d.beatmap);
   lights(d.beatmap);

   writeDifficultyFileSync(d.beatmap);
});

writeInfoFileSync(info);
