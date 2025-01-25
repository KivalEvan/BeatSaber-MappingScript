import {
   ColorScheme,
   globals,
   readDifficultyFileSync,
   readInfoFileSync,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import { insertEnvironment } from '../../environment-enhancement/panorama/main.ts';
import { ColorUtils } from '../../utility/colorUtils.ts';
import phoenix from './phoenix.ts';
import shortenName from '../../preprocess/shortenName.ts';
import applyLabel from '../../utility/applyLabel.ts';
import copyToCustomColor from '../../utility/copyToCustomColor.ts';

globals.directory = beatmapWipPath('The Phoenix');

const info = readInfoFileSync();
info.song.title = 'The Phoenix';
info.environmentNames = ['PyroEnvironment'];
info.colorSchemes = [
   {
      name: 'Panorama',
      overrideNotes: true,
      overrideLights: true,
      saberLeftColor: ColorUtils.create(ColorScheme.Rocket._colorLeft),
      saberRightColor: ColorUtils.create(ColorScheme.Rocket._colorRight),
      environment0Color: ColorUtils.create(
         ColorScheme['Rock Mixtape']._envColorLeft,
      ),
      environment1Color: ColorUtils.create(
         ColorScheme['Rock Mixtape']._envColorRight,
      ),
      environment0ColorBoost: ColorUtils.create(
         ColorScheme.Lattice._envColorLeft,
      ),
      environment1ColorBoost: ColorUtils.create(
         ColorScheme.Lattice._envColorRight,
      ),
      obstaclesColor: ColorUtils.create(
         ColorScheme['Panic 2.0']._envColorLeftBoost,
      ),
   },
];
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];
applyLabel(info, [
   {
      characteristic: 'Standard',
      difficulty: 'ExpertPlus',
      label: 'Rise from the ashes',
      // label: 'Eternal',
   },
   {
      characteristic: 'OneSaber',
      difficulty: 'ExpertPlus',
      label: 'Reborn',
   },
   {
      characteristic: '360Degree',
      difficulty: 'Expert',
      label: 'Immortality',
   },
   {
      characteristic: '90Degree',
      difficulty: 'Expert',
      label: 'Immortality',
   },
]);

const lightshow = readDifficultyFileSync('EasyStandard.dat', 3);
for (const d of info.difficulties) {
   const data = readDifficultyFileSync(d.filename);
   data.lightshow = lightshow.lightshow;
   insertEnvironment(data);
   phoenix(data, d.characteristic === '360Degree');
   writeDifficultyFileSync(data, {
      save: { preprocess: [shortenName] },
   });

   delete d.customData._requirements;
   d.customData._suggestions = ['Chroma'];
   d.customData._information = [
      '1st track of album Save Rock and Roll',
      'Illustration by Genzoman',
   ];

   copyToCustomColor(d, info.colorSchemes[0]);
}

writeInfoFileSync(info);
