import {
   globals,
   readDifficultyFileSync,
   readInfoFileSync,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import applyLabel from '../../utility/applyLabel.ts';
import infoAudioDur from '../../utility/audioDuration.ts';

globals.directory = beatmapWipPath('FAITH');

const info = readInfoFileSync('Info.dat', 2);
await infoAudioDur(info);
info.environmentNames = ['LatticeEnvironment', 'TriangleEnvironment'];
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];

applyLabel(info, [
   {
      characteristic: 'Standard',
      difficulty: 'ExpertPlus',
      label: 'Native Stream',
   },
   {
      characteristic: 'Standard',
      difficulty: 'Expert',
      label: 'Lunatic',
   },
   {
      characteristic: 'Legacy',
      difficulty: 'ExpertPlus',
      label: 'Extra Stage',
   },
   {
      characteristic: 'Legacy',
      difficulty: 'Expert',
      label: 'Lunatic',
   },
]);

for (const d of info.difficulties) {
   const data = readDifficultyFileSync(d.filename, 3);
   data.lightshow.useNormalEventsAsCompatibleEvents = true;

   d.environmentId = d.characteristic === 'Legacy' ? 1 : 0;
   d.customData._information = [
      'Suwako Moriya',
      'Native Fatih',
      '5th track of album REBIRTH',
   ];

   writeDifficultyFileSync(data, 3);
}

writeInfoFileSync(info, 2);
