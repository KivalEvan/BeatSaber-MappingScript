import * as bsmap from 'https://deno.land/x/bsmap@1.0.0/mod.ts';

bsmap.globals.directory = 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/ECHO';

const d = bsmap.load.difficultySync('ExpertPlusLawless.dat', 2);

bsmap.save.difficultySync(d, { filePath: 'ExpertPlusLawless.dat' });
