import { globals, load, save } from '../../depsLocal.ts';
import { insertEnvironment } from '../../environment-enhancement/torii/mod.ts';

globals.directory = Deno.build.os === 'linux'
    ? '/home/kival/CustomWIPLevels/Genryuu Kaiko/'
    : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/Genryuu Kaiko';

const info = load.infoSync();

const d3 = load.difficultySync('ExpertPlusLightshow.dat', 3);
insertEnvironment(d3);

console.log(d3.customData.environment?.length);

save.difficultySync(d3);
save.infoSync(info);
