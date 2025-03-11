import {
   AudioData,
   Beatmap,
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
import { resolve } from '../deps.ts';

globals.directory = beatmapWipPath('Never Know');
const info = readInfoFileSync();
const audioData = AudioData.createOne(
   readAudioDataFileSync(info.audio.audioDataFilename),
);
Deno.removeSync(resolve(globals.directory, info.audio.audioDataFilename));
audioData.filename = 'BPMInfo.dat';
writeAudioDataFileSync(audioData, 2);

const bpmEvents = audioData.getBpmEvents();
for (const infoDiff of info.difficulties) {
   const beatmap = Beatmap.createOne(readDifficultyFileSync(infoDiff.filename));
   const filename = infoDiff.filename.replace('.beatmap.dat', '.dat');
   if (filename !== infoDiff.filename) {
      Deno.removeSync(resolve(globals.directory, infoDiff.filename));
   }
   infoDiff.filename = filename;
   beatmap.filename = filename;

   if (beatmap.version === 4) {
      const lightshow = Beatmap.createOne(
         readLightshowFileSync(infoDiff.lightshowFilename),
      );
      beatmap.lightshow = lightshow.lightshow;
   }
   beatmap.bpmEvents = []; // replace v3 bpm event anyway
   beatmap.addBpmEvents(...bpmEvents);
   writeDifficultyFileSync(beatmap, 3);
}

writeInfoFileSync(info, 2);
