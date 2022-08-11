import { globals, load, save } from '../../depsLocal.ts';
import { convertLight, insertEnvironment } from '../../environment-enhancement/bmv2/mod.ts';

globals.directory = 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/Born_Of_Blood';

const d3 = load.difficultySync('LightshowOriginal.dat', 3);
insertEnvironment(d3);
convertLight(d3, 'BigMirrorEnvironment');

save.difficultySync(d3, {
    filePath: 'Hard.dat',
    format: 2,
});
