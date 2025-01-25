import {
   globals,
   readDifficultyFileSync,
   readInfoFileSync,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import { insertEnvironment } from '../../environment-enhancement/torii/mod.ts';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';

globals.directory = beatmapWipPath('Master Of Tides');

const info = readInfoFileSync();
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];

const light = readDifficultyFileSync('Lightshow.dat', 3);
light.basicEvents.forEach((e) => {
   switch (e.type) {
      case 0:
      case 1:
      case 6:
      case 7:
         e.floatValue *= 1.5;
         break;
   }
});

for (const d of info.difficulties) {
   const data = readDifficultyFileSync(d.filename, 3);
   data.lightshow = light.lightshow;

   insertEnvironment(data);
   d.customData._information = ['12th track of album Shatter Me'];

   writeDifficultyFileSync(data);
}

writeInfoFileSync(info);
