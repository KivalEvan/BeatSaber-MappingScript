import { convert, globals, load, save } from '../../deps.ts';
import { convertLight, insertEnvironment } from '../../environment-enhancement/vapor-frame/mod.ts';

globals.directory =
    'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/11d0294f1e929221a94ef18b86f22f852ca1395f';

const d2 = load.difficultySync('LightshowOriginal.dat', 2);
insertEnvironment(d2);
convertLight(d2, 'BigMirrorEnvironment');

const d3 = convert.V2toV3(d2, true);
save.difficultySync(d3, {
    filePath: 'Hard.dat',
});
