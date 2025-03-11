import {
   Beatmap,
   globals,
   readAudioDataFileSync,
   readDifficultyFileSync,
   readInfoFileSync,
   v4,
   writeAudioDataFileSync,
   writeDifficultyFileSync,
   writeInfoFileSync,
   writeLightshowFileSync,
} from '@bsmap';
import beatmapWipPath from '../utility/beatmapWipPath.ts';
import { resolve } from '../deps.ts';

globals.directory = beatmapWipPath('My Soul Is Your Soul');

const info = readInfoFileSync();
const bpmInfo = readAudioDataFileSync('BPMInfo.dat');
bpmInfo.filename = 'AudioData.dat';
writeAudioDataFileSync(bpmInfo, 4);
Deno.removeSync(resolve(globals.directory, 'BPMInfo.dat'));
info.audio.duration = bpmInfo.sampleCount / bpmInfo.frequency;
info.audio.audioDataFilename = 'AudioData.dat';

if (!info.environmentNames.length) {
   info.environmentNames.push(info.environmentBase.normal!);
}

const lightshowMap: Record<string, string> = {};

for (const infoDiff of info.difficulties) {
   const beatmap = readDifficultyFileSync(infoDiff.filename);
   if (beatmap.version === 4) continue;

   const lightshow = new Beatmap(beatmap);
   const lightshowJson = v4.lightshow.serialize(lightshow);

   const found = Object.entries(lightshowMap).find(
      ([_, v]) => v === JSON.stringify(lightshowJson),
   );

   if (found) {
      infoDiff.lightshowFilename = found[0];
   } else {
      const lightshowFilename = infoDiff.filename.replace(
         '.dat',
         '.lightshow.dat',
      );
      lightshowMap[lightshowFilename] = JSON.stringify(lightshowJson);
      infoDiff.lightshowFilename = lightshowFilename;
      lightshow.lightshowFilename = lightshowFilename;
      writeLightshowFileSync(lightshow, 4);
   }

   const difficultyFilename = infoDiff.filename.replace('.dat', '.beatmap.dat');
   if (difficultyFilename !== infoDiff.filename) {
      Deno.removeSync(resolve(globals.directory, infoDiff.filename));
   }
   infoDiff.filename = difficultyFilename;
   beatmap.filename = difficultyFilename;

   writeDifficultyFileSync(beatmap, 4);
}

writeInfoFileSync(info, 4);
