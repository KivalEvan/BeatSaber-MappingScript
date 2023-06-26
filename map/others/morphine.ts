import { convert, globals, load, save } from '../../depsLocal.ts';

globals.directory =
   'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/247a6_Morphine_-_AaltopahWi';

const d3 = load.difficultySync('ExpertPlusStandardOld.dat', 3);
const d3Convert = convert.toV3(convert.chromaLightGradientToVanillaGradient(convert.toV2(d3)));

d3Convert.arcs = d3.arcs;
d3Convert.chains = d3.chains;

save.difficultySync(d3Convert, {
   filePath: 'ExpertPlusStandard.dat',
});
