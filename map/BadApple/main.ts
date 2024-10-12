import {
   Beatmap,
   globals,
   readInfoFileSync,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '../../depsLocal.ts';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import daftPunk from './daftPunk.ts';
import hipHop from './hipHop.ts';
import lattice from './lattice.ts';
import collider from './collider.ts';
import britneySpears from './britneySpears.ts';

globals.directory = beatmapWipPath('Bad Apple');

writeDifficultyFileSync(new Beatmap({ filename: 'Empty.beatmap.dat' }), 4);

const info = readInfoFileSync();
info.environmentNames = [
   'LatticeEnvironment',
   'DaftPunkEnvironment',
   'HipHopEnvironment',
   'ColliderEnvironment',
   'BritneyEnvironment',
];
info.difficulties = [];
info
   .addMap({
      difficulty: 'Easy',
      filename: 'Empty.beatmap.dat',
      lightshowFilename: 'Lattice.lightshow.dat',
      njs: 10,
      colorSchemeId: 0,
   })
   .addMap({
      difficulty: 'Normal',
      filename: 'Empty.beatmap.dat',
      lightshowFilename: 'DaftPunk.lightshow.dat',
      njs: 10,
      colorSchemeId: 0,
      environmentId: 1,
   })
   .addMap({
      difficulty: 'Hard',
      filename: 'Empty.beatmap.dat',
      lightshowFilename: 'HipHop.lightshow.dat',
      njs: 10,
      colorSchemeId: 0,
      environmentId: 2,
   })
   .addMap({
      difficulty: 'Expert',
      filename: 'Empty.beatmap.dat',
      lightshowFilename: 'Collider.lightshow.dat',
      njs: 10,
      colorSchemeId: 0,
      environmentId: 3,
   })
   .addMap({
      difficulty: 'ExpertPlus',
      filename: 'Empty.beatmap.dat',
      lightshowFilename: 'BritneySpears.lightshow.dat',
      njs: 10,
      colorSchemeId: -1,
      environmentId: 4,
   });
writeInfoFileSync(info);

// await lattice();
// await daftPunk();
// await hipHop();
// await collider();
await britneySpears();
