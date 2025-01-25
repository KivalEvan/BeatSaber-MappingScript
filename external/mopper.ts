import { globals, readDifficultyFileSync, writeDifficultyFileSync } from '@bsmap';
import beatmapWipPath from '../utility/beatmapWipPath.ts';

globals.directory = beatmapWipPath('Bad Apple');
const data = readDifficultyFileSync('Empty.beatmap.dat');

data.colorNotes = [];
data.chains = [];
data.arcs = [];
for (let i = 0; i < 100; i++) {
   data.addColorNotes(
      {
         time: 4 + i,
         color: 1,
         direction: i % 2,
         posX: 1,
         laneRotation: -i,
      },
      {
         time: 4 + i,
         color: 0,
         direction: i % 2,
         posX: 2,
         laneRotation: i,
      },
   );
}

writeDifficultyFileSync(data);
