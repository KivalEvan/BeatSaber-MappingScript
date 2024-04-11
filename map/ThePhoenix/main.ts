import { ColorScheme, globals, load, save } from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';
import { insertEnvironment } from '../../environment-enhancement/panorama/main.ts';
import { ColorUtils } from '../../utility/colorUtils.ts';
import phoenix from './phoenix.ts';
import copyLightshow from '../../utility/copyLightshow.ts';
import shortenName from '../../preprocess/shortenName.ts';
import applyLabel from '../../utility/applyLabel.ts';

globals.directory = wipPath('The Phoenix');

const info = load.infoSync(2);
info.song.title = 'The Phoenix';
info.environmentName = 'PyroEnvironment';
info.environmentNames = ['PyroEnvironment'];
info.colorSchemes = [
   {
      name: 'Panorama',
      useOverride: true,
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
      obstaclesColor: ColorUtils.create(0.75), // for whatever weird reason, editor use this for boosted white color
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

const lightshow = load.difficultySync('EasyStandard.dat', 3);
for (const [m, d] of info.listMap()) {
   const data = load.difficultySync(d.filename, 3);
   copyLightshow(lightshow, data);
   data.useNormalEventsAsCompatibleEvents = m === 'Legacy';
   insertEnvironment(data);
   phoenix(data);
   save.difficultySync(data, { preprocess: [shortenName] });

   delete d.customData._requirements;
   d.customData._suggestions = ['Chroma'];
   d.customData._information = ['Illustration by Genzoman'];

   d.copyColorScheme(0, info);
}

save.infoSync(info);
