import {
   Beatmap,
   globals,
   Info,
   readInfoFileSync,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import daftPunk from './daftPunk.ts';
import hipHop from './hipHop.ts';
import lattice from './lattice.ts';
import collider from './collider.ts';
import britneySpears from './britneySpears.ts';
import monstercat2 from './monstercat2.ts';
import metallica from './metallica.ts';

globals.directory = beatmapWipPath('Bad Apple');

writeDifficultyFileSync(new Beatmap({ filename: 'Empty.beatmap.dat' }), 4);

const info = Info.createOne(readInfoFileSync());
info.environmentNames = [
   'LatticeEnvironment',
   'DaftPunkEnvironment',
   'HipHopEnvironment',
   'ColliderEnvironment',
   'BritneyEnvironment',
   'Monstercat2Environment',
   'MetallicaEnvironment',
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
   })
   .addMap({
      difficulty: 'Easy',
      characteristic: 'Legacy',
      filename: 'Empty.beatmap.dat',
      lightshowFilename: 'Monstercat2.lightshow.dat',
      njs: 10,
      colorSchemeId: -1,
      environmentId: 5,
   })
   .addMap({
      difficulty: 'Normal',
      characteristic: 'Legacy',
      filename: 'Empty.beatmap.dat',
      lightshowFilename: 'Metallica.lightshow.dat',
      njs: 10,
      colorSchemeId: -1,
      environmentId: 6,
   });
writeInfoFileSync(info);

// await lattice();
// await daftPunk();
// await hipHop();
// await collider();
// await britneySpears();
// await monstercat2();
await metallica();
