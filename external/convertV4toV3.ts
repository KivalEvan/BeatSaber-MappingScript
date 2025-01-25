import {
   globals,
   readAudioDataFileSync,
   readDifficultyFileSync,
   readInfoFileSync,
   readLightshowFileSync,
   writeAudioDataFileSync,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import beatmapWipPath from '../utility/beatmapWipPath.ts';

globals.directory = beatmapWipPath('Lost Days');
const info = readInfoFileSync();
const audioData = readAudioDataFileSync(info.audio.audioDataFilename).setFilename(
   'BPMInfo.dat',
);
writeAudioDataFileSync(audioData, 2);

const bpmEvents = audioData.getBpmEvents();
for (const infoDiff of info.difficulties) {
   const beatmap = readDifficultyFileSync(infoDiff.filename);
   infoDiff.filename = infoDiff.filename.replace('.beatmap.dat', '.dat');
   beatmap.filename = infoDiff.filename;

   if (beatmap.version === 4) {
      const lightshow = readLightshowFileSync(infoDiff.lightshowFilename);
      beatmap.lightshow = lightshow.lightshow;
   }
   beatmap.bpmEvents = []; // replace v3 bpm event anyway
   beatmap.addBpmEvents(...bpmEvents);
   writeDifficultyFileSync(beatmap, 3);
}

writeInfoFileSync(info, 2);
