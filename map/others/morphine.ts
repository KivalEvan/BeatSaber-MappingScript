import { convert, globals, load, save } from '../../depsLocal.ts';

globals.directory =
    'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/247a6_Morphine_-_AaltopahWi';

const d3 = load.difficultySync('ExpertPlusStandardOld.dat');
const d3Convert = convert.V2toV3(convert.chromaLightGradientToVanillaGradient(convert.V3toV2(d3, true)), true);

d3Convert.sliders = d3.sliders;
d3Convert.burstSliders = d3.burstSliders;

save.difficultySync(d3Convert, {
    filePath: 'ExpertPlusStandard.dat',
});
