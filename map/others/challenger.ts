import { globals, load, save } from '../../depsLocal.ts';
import { convertLight, insertEnvironment } from '../../environment-enhancement/vapor-frame/mod.ts';

globals.directory =
    'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/584b (Challenger - Excession, Aeroluna)';

const d2 = load.difficultySync('Expert.dat', 2);
const d3 = load.difficultySync('Expert.dat', 3);
d2.events.forEach((e) => {
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
});
