import {
   globals,
   readAudioDataFileSync,
   readDifficultyFileSync,
   readInfoFileSync,
   writeAudioDataFileSync,
   writeDifficultyFileSync,
   writeInfoFileSync,
   writeLightshowFileSync,
} from '@bsmap';
import beatmapWipPath from '../utility/beatmapWipPath.ts';

const info = readInfoFileSync();
const bpmInfo = readAudioDataFileSync('BPMInfo.dat').setFilename('AudioData.dat');
writeAudioDataFileSync(bpmInfo, 4);
info.audio.audioDataFilename = 'AudioData.dat';

const lm = readDifficultyFileSync(
   'Easy.dat',
).setLightshowFilename('Common.lightshow.dat');
writeLightshowFileSync(lm, 4);

for (const infoDiff of info.difficulties) {
   const beatmap = readDifficultyFileSync(infoDiff.filename);

   infoDiff.lightshowFilename = 'Common.lightshow.dat';
   infoDiff.filename = infoDiff.filename.replace('.dat', '.beatmap.dat');
   beatmap.filename = infoDiff.filename;

   writeDifficultyFileSync(beatmap, 4);
}

writeInfoFileSync(info, 4);
