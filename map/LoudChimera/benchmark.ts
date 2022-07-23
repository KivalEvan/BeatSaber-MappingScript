import * as bsmap from '../../depsLocal.ts';

bsmap.globals.directory = 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/loudchimera';

const data = bsmap.load.difficultySync('ExpertPlusStandard.dat', 3).toObject();

Deno.bench({ name: 'Structured clone' }, () => {
    structuredClone(data);
});

Deno.bench({ name: 'JSON parse stringify' }, () => {
    JSON.parse(JSON.stringify(data));
});
