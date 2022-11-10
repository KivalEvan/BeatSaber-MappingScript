import { globals, load, save } from './depsLocal.ts';
import { insertEnvironment } from './environment-enhancement/prayers/mod.ts';

globals.directory = Deno.build.os === 'linux'
    ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/Test/'
    : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/5495_Warg_-_AaltopahWi_Skeelie';

const d3 = load.difficultySync('Hard.dat', 3);
d3.basicEvents = [];
for (let i = 0; i < 5; i++) {
    d3.addBasicEvents({ b: 0, et: i, i: i === 0 || i === 4 ? 5 : 1 });
}
insertEnvironment(d3);

save.difficultySync(d3);
