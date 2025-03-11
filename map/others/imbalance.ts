import * as bsmap from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';

bsmap.globals.directory = beatmapWipPath('Imbalance');

const info = bsmap.readInfoFileSync();
for (const d of info.difficulties) {
   const difficulty = bsmap.readDifficultyFileSync(d.filename, 2);

   bsmap.toV3Beatmap(difficulty);
   bsmap.writeDifficultyFileSync(difficulty);
}
