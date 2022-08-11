import { globals, load, save } from '../../depsLocal.ts';

globals.directory = 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/ECHO';

const d = load.difficultySync('ExpertPlusLawless.dat', 2);

save.difficultySync(d, { filePath: 'ExpertPlusLawless.dat' });
