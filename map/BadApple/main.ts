import {
   Beatmap,
   globals,
   readInfoFileSync,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';
import daftPunk from './daftPunk.ts';
import hipHop from './hipHop.ts';
import lattice from './lattice.ts';
import collider from './collider.ts';

globals.directory = wipPath('Bad Apple');

writeDifficultyFileSync(new Beatmap({ filename: 'Empty.beatmap.dat' }), 4);

const info = readInfoFileSync();
info.environmentNames = [
   'LatticeEnvironment',
   'DaftPunkEnvironment',
   'HipHopEnvironment',
   'ColliderEnvironment',
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
   });
writeInfoFileSync(info);

await lattice();
await daftPunk();
await hipHop();
await collider();
