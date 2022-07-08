import * as bsmap from './depsLocal.ts';
import { generateEnvironment } from './environment-enhancement/lotus/environment.ts';

const { selector, noodleExtensions: NE } = bsmap.ext;

bsmap.globals.directory = 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/JOURNEY';
const INPUT_FILE = 'Lightshow.dat';
const lightshow = bsmap.load.difficultySync(INPUT_FILE, 3);

NE.randomFlip(selector.between(lightshow.colorNotes, 64, 120), [
    [-1, 4],
    [0, 2],
]);

selector.where(lightshow.bombNotes, { include: { b: 23 } });

bsmap.save.difficultySync(lightshow);
