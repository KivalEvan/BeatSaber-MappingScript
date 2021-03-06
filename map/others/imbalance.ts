import jankySliderConvert from 'https://deno.land/x/bsmap@1.0.0/example/jankySliderConvert.ts';
import * as bsmap from 'https://deno.land/x/bsmap@1.0.0/mod.ts';

console.log('Running script...');
console.time('Runtime');
bsmap.globals.directory = 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/Imbalance/';

const info = bsmap.load.infoSync();
const difficultyList = bsmap.load.difficultyFromInfoSync(info);

difficultyList.forEach((d) => {
    if (!bsmap.version.isV3(d.data)) {
        d.data = bsmap.convert.V2toV3(d.data, true);
    }

    jankySliderConvert(d.data);
    for (let i = 0, len = d.data.colorNotes.length; i < len; i++) {
        const n = d.data.colorNotes[i];
        if (n.direction === 8) {
            n.angleOffset = 45;
        }
    }
});

bsmap.save.difficultyListSync(difficultyList, {
    directory: 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/Imbalance/',
});

console.timeEnd('Runtime');
