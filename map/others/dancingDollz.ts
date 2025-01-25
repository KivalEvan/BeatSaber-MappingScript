import {
   colorFrom,
   globals,
   readDifficultyFileSync,
   readInfoFileSync,
   toColorObject,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import applyLabel from '../../utility/applyLabel.ts';
import { ColorUtils } from '../../utility/colorUtils.ts';
import copyToCustomColor from '../../utility/copyToCustomColor.ts';

globals.directory = beatmapWipPath('Dancing Dollz');

const info = readInfoFileSync('Info.dat', 2);
info.colorSchemes = [
   {
      name: 'Dancing Dollz',
      overrideNotes: true,
      overrideLights: true,
      saberLeftColor: toColorObject(
         colorFrom(355, 0.8125, 0.9375, 'hsva'),
         true,
      ),
      saberRightColor: toColorObject(
         colorFrom(215, 0.625, 0.875, 'hsva'),
         true,
      ),
      environment0Color: ColorUtils.create({ r: 0.125, g: 0.75, b: 0.188 }),
      environment1Color: ColorUtils.create({ r: 0, g: 0.625, b: 0.875 }),
      environment0ColorBoost: ColorUtils.create({ r: 0.75, g: 0, b: 0.188 }),
      environment1ColorBoost: ColorUtils.create({ r: 0.438, g: 0, b: 0.75 }),
      obstaclesColor: ColorUtils.create({ r: 0.188, g: 0.688, b: 0.875 }),
   },
];
info.environmentNames = ['SkrillexEnvironment'];
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];

applyLabel(info, [
   {
      characteristic: 'Standard',
      difficulty: 'ExpertPlus',
      label: 'Dance on all alone',
   },
   {
      characteristic: 'Standard',
      difficulty: 'Expert',
      label: 'Lunatic',
   },
   {
      characteristic: 'OneSaber',
      difficulty: 'ExpertPlus',
      label: 'Forever Dancing',
   },
   {
      characteristic: 'OneSaber',
      difficulty: 'Expert',
      label: 'Searching',
   },
   {
      characteristic: 'OneSaber',
      difficulty: 'Normal',
      label: 'Forgetting',
   },
]);

for (const d of info.difficulties) {
   const data = readDifficultyFileSync(d.filename, 3);
   data.useNormalEventsAsCompatibleEvents = d.characteristic === 'Legacy';

   delete d.customData._requirements;
   d.customData._suggestions = ['Chroma'];
   d.customData._information = [
      'Renko Usami',
      'Maribel Hearn',
      "Girls' Secret Sealing Club",
      '5th track of album 50/50 Disc 2',
      'Illustration by dise',
   ];

   copyToCustomColor(d, info.colorSchemes[d.colorSchemeId]);
   writeDifficultyFileSync(data, 3);
}

writeInfoFileSync(info, 2);
