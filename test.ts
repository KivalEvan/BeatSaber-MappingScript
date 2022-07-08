import * as bsmap from './depsLocal.ts';

bsmap.globals.directory = '/home/kival/Downloads/';

bsmap.save.difficultySync(bsmap.load.difficultySync('EasyLightshow.dat'));
