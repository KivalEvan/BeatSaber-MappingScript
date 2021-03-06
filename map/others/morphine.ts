import * as bsmap from '../../deps.ts';

bsmap.globals.directory =
    'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/247a6_Morphine_-_AaltopahWi';

const d3 = bsmap.load.difficultySync('ExpertPlusStandardOld.dat');
const d3Convert = bsmap.convert.V2toV3(
    bsmap.convert.chromaLightGradientToVanillaGradient(bsmap.convert.V3toV2(d3, true)),
    true,
);

d3Convert.sliders = d3.sliders;
d3Convert.burstSliders = d3.burstSliders;

bsmap.save.difficultySync(d3Convert, {
    filePath: 'ExpertPlusStandard.dat',
});
