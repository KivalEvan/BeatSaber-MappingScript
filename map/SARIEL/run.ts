import { convert, globals, isV3, load, save } from '../../depsLocal.ts';
import { copySync } from 'https://deno.land/std@0.153.0/fs/mod.ts';
import lights from './lights.ts';

console.log('Running script...');
console.time('Runtime');
globals.directory = Deno.build.os === 'linux'
    ? '/home/kival/CustomWIPLevels/S.A.R.I.E.L/'
    : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/S.A.R.I.E.L';

const info = load.infoSync();
info._songName = '!' + info._songName;
info._environmentName = 'WeaveEnvironment';
info._customData!._contributors = [
    {
        _role: 'Mapper',
        _name: 'Kival Evan',
        _iconPath: 'iconKivalEvan.png',
    },
];
for (const set of info._difficultyBeatmapSets) {
    for (const d of set._difficultyBeatmaps) {
        if (d._customData) {
            d._customData._information = [
                'Sariel',
                'Now, Until the Moment You Die',
                '1st track of album Civilization of Magic',
            ];
            delete d._customData._requirements;
            delete d._customData._suggestions;
        }
    }
}

const difficultyList = load.difficultyFromInfoSync(info);

difficultyList.forEach((d) => {
    if (!isV3(d.data)) {
        d.data = convert.V2toV3(d.data, true);
    }

    d.data.basicBeatmapEvents = [];
    d.data.useNormalEventsAsCompatibleEvents = false;
    lights(d.data);
});

const oldDirectory = globals.directory;
globals.directory = Deno.build.os === 'linux'
    ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/S.A.R.I.E.L/'
    : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/S.A.R.I.E.L';
copySync(oldDirectory + info._songFilename, globals.directory + info._songFilename, { overwrite: true });
copySync(oldDirectory + info._coverImageFilename, globals.directory + info._coverImageFilename, { overwrite: true });
save.difficultyListSync(difficultyList);
save.infoSync(info);

console.timeEnd('Runtime');
