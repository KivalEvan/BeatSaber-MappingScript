import { globals, load, save } from '../../depsLocal.ts';
import { convertLight, insertEnvironment } from '../../environment-enhancement/prayers/mod.ts';

globals.directory = Deno.build.os === 'linux'
    ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/9aaa (Clockup Flowers - Aalto)/'
    : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/9aaa (Clockup Flowers - Aalto)';

const d2 = load.difficultySync('EasyLightShow.dat', 2);
const d3 = load.difficultySync('EasyLightShow.dat', 3);
d2.basicEvents.forEach((e) => {
    if (e.type === 5 || e.type === 14 || e.type === 15) {
        d3.addBasicEvents({ b: e.time, et: e.type, i: e.value });
    }
});
d3.rotationEvents = [];
d3.colorBoostEvents = [];

insertEnvironment(d3);
convertLight(d3, 'BigMirrorEnvironment');

// d3.basicEvents = [];

save.difficultySync(d3, {
    filePath: 'HardStandard.dat',
});
