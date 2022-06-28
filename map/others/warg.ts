import * as bsmap from '../../deps.ts';
import { convertLight, insertEnvironment } from '../../environment-enhancement/bmv2/mod.ts';
import { printChromaEnvironment } from 'https://deno.land/x/bsmap/example/printInfo.ts';

bsmap.globals.directory =
    'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/5495_Warg_-_AaltopahWi_Skeelie';

const d2 = bsmap.load.difficultySync('LightshowOriginal.dat', 2);
insertEnvironment(d2);
convertLight(d2, 'BigMirrorEnvironment');

const d3 = bsmap.convert.V2toV3(d2, true);
printChromaEnvironment(d3);
bsmap.save.difficultySync(d3, {
    filePath: 'Hard.dat',
});
