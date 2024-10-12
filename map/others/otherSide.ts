import {
   EaseType,
   globals,
   readDifficultyFileSync,
   readInfoFileSync,
   readLightshowFileSync,
   remap,
   shuffle,
   writeDifficultyFileSync,
   writeInfoFileSync,
   writeLightshowFileSync,
} from '../../depsLocal.ts';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import applyLabel from '../../utility/applyLabel.ts';
import infoAudioDur from '../../utility/infoAudioDur.ts';
import copyToCustomColor from '../../utility/copyToCustomColor.ts';

globals.directory = beatmapWipPath('Other Side');

const info = readInfoFileSync('Info.dat');
await infoAudioDur(info);
info.colorSchemes = [];
info.environmentNames = ['DaftPunkEnvironment'];
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];

applyLabel(info, [
   {
      characteristic: 'Standard',
      difficulty: 'ExpertPlus',
      label: 'Soar Through the Sky',
   },
   {
      characteristic: 'Standard',
      difficulty: 'Expert',
      label: 'Lunatic',
   },
   {
      characteristic: 'OneSaber',
      difficulty: 'ExpertPlus',
      label: 'Dream',
   },
   {
      characteristic: 'OneSaber',
      difficulty: 'Expert',
      label: 'Gleam',
   },
   {
      characteristic: 'OneSaber',
      difficulty: 'Normal',
      label: 'Awake',
   },
]);

const l = readLightshowFileSync('Common.lightshow.dat');
for (
   const ltebg of l.lightTranslationEventBoxGroups.filter(
      (e) => e.time >= 2 && e.time <= 33 && (e.id === 0 || e.id === 1),
   )
) {
   const boxes = ltebg.boxes.filter((b) => b.events.every((e) => !e.previous));
   const times = shuffle(
      new Array(boxes.length)
         .fill(0)
         .map((_, i) => remap(i, 0, boxes.length - 1, 0, 0.25)),
   );
   boxes.forEach((b) =>
      b.events.forEach((e, i) => {
         e.time = times[i];
         e.easing = EaseType.OUT_QUAD;
      })
   );
}
writeLightshowFileSync(l);

for (const d of info.difficulties) {
   d.lightshowFilename = 'Common.lightshow.dat';
   const data = readDifficultyFileSync(d.filename);

   d.colorSchemeId = -1;
   d.customData._information = [
      'Sekibanki',
      'Dullahan Under the Willows',
      '2nd track of album Sevens Head',
   ];

   copyToCustomColor(d, info.colorSchemes[d.colorSchemeId]);
   writeDifficultyFileSync(data);
}

writeInfoFileSync(info);
