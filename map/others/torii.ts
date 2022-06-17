import * as bsmap from '../../depsLocal.ts';
import { insertEnvironment } from '../../environment-enhancement/torii/mod.ts';

bsmap.globals.path = 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/Time and again';

const d3 = bsmap.load.difficultySync('ExpertPlusStandard2.dat', 3);
insertEnvironment(d3);
d3.addColorBoostEvents({ o: true });
d3.addBasicEvents(
    { et: 0, i: 1 },
    { et: 1, i: 1 },
    { et: 2, i: 1 },
    { et: 3, i: 1 },
    { et: 4, i: 1 },
    { et: 6, i: 1 },
    { et: 7, i: 1 },
    { et: 10, i: 1 },
    { et: 11, i: 1 },
);
bsmap.save.difficultySync(d3, {
    filePath: 'ExpertPlusStandard.dat',
});
