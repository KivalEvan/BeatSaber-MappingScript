import { globals, load, save } from '../../depsLocal.ts';
import { convertLight, insertEnvironment } from '../../environment-enhancement/bmv2/mod.ts';

globals.directory =
    'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/5495_Warg_-_AaltopahWi_Skeelie';

const d3 = load.difficultySync('LightshowOriginal.dat', 3);
convertLight(d3, 'BigMirrorEnvironment');
insertEnvironment(d3);
save.difficultySync(d3, {
    filePath: 'Hard.dat',
});
