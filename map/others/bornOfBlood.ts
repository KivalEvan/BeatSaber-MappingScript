import { globals, load, save } from '../../depsLocal.ts';
import { convertLight, insertEnvironment } from '../../environment-enhancement/bmv2/mod.ts';

globals.directory = Deno.build.os === 'linux'
    ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/Born_Of_Blood/'
    : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/Born_Of_Blood';

const d2 = load.difficultySync('LightshowOriginal.dat', 2);
const d3 = load.difficultySync('LightshowOriginal.dat', 3);
d2.basicEvents.forEach((e) => {
    if (e.type === 5 || e.type === 14 || e.type === 15) {
        d3.addBasicEvents({ b: e.time, et: e.type, i: e.value });
    }
});
d3.rotationEvents = [];
d3.colorBoostEvents = [];

insertEnvironment(d3);
convertLight(d3, 'BigMirrorEnvironment');

save.difficultySync(d3, {
    filePath: 'Hard.dat',
    format: 2,
});
