import { globals, load, save } from '../../depsLocal.ts';
import { insertEnvironment } from '../../environment-enhancement/torii/mod.ts';

globals.directory = Deno.build.os === 'linux'
    ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/Genryuu Kaiko/'
    : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/Genryuu Kaiko';

const info = load.infoSync();
const d3 = load.difficultySync('ExpertPlusStandard.dat', 3);
insertEnvironment(d3);

globals.directory = Deno.build.os === 'linux'
    ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/Genryuu Kaiko/'
    : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/Genryuu Kaiko';

save.difficultySync(d3);
save.infoSync(info);
