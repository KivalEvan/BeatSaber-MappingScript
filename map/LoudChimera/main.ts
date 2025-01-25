import {
   ColorScheme,
   ext,
   globals,
   NoteJumpSpeed,
   readDifficultyFileSync,
   readInfoFileSync,
   TimeProcessor,
   writeInfoFileSync,
} from '@bsmap';
import counter from '../../utility/counter.ts';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import { main } from './all.ts';
const { ne } = ext;

counter(import.meta.url);

globals.directory = beatmapWipPath('loudchimera');

// logger.setLevel(5);

const info = readInfoFileSync();
const timeProcessor = TimeProcessor.create(info.audio.bpm);
const NJS = NoteJumpSpeed.create(timeProcessor.bpm, 19, -1.75);
ne.settings.timeProc = timeProcessor;
ne.settings.NJS = NJS;

main(
   readDifficultyFileSync('HardStandard.dat', 3).setFilename(
      'ExpertPlusStandard.dat',
   ),
   timeProcessor,
   NJS,
);

main(
   readDifficultyFileSync('ExpertOneSaber.dat', 3).setFilename(
      'ExpertPlusOneSaber.dat',
   ),
   timeProcessor,
   NJS,
);

NJS.value = 16;
NJS.offset = -1.25;
main(
   readDifficultyFileSync('NormalStandard.dat', 3).setFilename(
      'ExpertStandard.dat',
   ),
   timeProcessor,
   NJS,
);

for (const d of info.difficulties) {
   d.customData._requirements = ['Noodle Extensions'];
   d.customData._suggestions = ['Chroma'];
   d.customData = { ...d.customData, ...ColorScheme.Weave };
}

writeInfoFileSync(info);
