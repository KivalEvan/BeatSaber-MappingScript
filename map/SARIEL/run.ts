import { BeatPerMinute, convert, globals, isV3, load, save, utils, v3 } from '../../depsLocal.ts';
import lights from './lights.ts';

console.log('Running script...');
console.time('Runtime');
utils.pRandomSeed('S.A.R.I.E.L.');

globals.directory = Deno.build.os === 'linux'
    ? '/home/kival/CustomWIPLevels/S.A.R.I.E.L/'
    : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/S.A.R.I.E.L';

const info = load.infoSync();
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
                'Civilization of Magic',
                '1st track of album S.A.R.I.E.L. -Request Song Jukebox Vol.01-',
            ];
            d._customData = {
                ...d._customData,
                _envColorLeft: {
                    r: 0.875,
                    g: 0.125,
                    b: 0.1875,
                },
                _envColorRight: {
                    r: 0.1875,
                    g: 0.6875,
                    b: 1,
                },
                _envColorLeftBoost: {
                    r: 0.875,
                    g: 0,
                    b: 0.1875,
                },
                _envColorRightBoost: {
                    r: 0.4375,
                    g: 0,
                    b: 0.8125,
                },
            };
            delete d._customData._requirements;
            delete d._customData._suggestions;
        } else {
            d._customData = {
                _envColorLeft: {
                    r: 0.875,
                    g: 0.5,
                    b: 0,
                },
                _envColorRight: {
                    r: 0,
                    g: 0.5,
                    b: 0.8125,
                },
                _envColorLeftBoost: {
                    r: 0.875,
                    g: 0,
                    b: 0.1875,
                },
                _envColorRightBoost: {
                    r: 0.4375,
                    g: 0,
                    b: 0.8125,
                },
            };
        }
    }
}
const bpm = BeatPerMinute.create(info._beatsPerMinute);

const lightshow = v3.Difficulty.create();
lights(lightshow, bpm);

const difficultyList = load.difficultyFromInfoSync(info);

difficultyList.forEach((d) => {
    if (!isV3(d.data)) {
        d.data = convert.V2toV3(d.data, true);
    }

    d.data.basicEvents = [];
    d.data.colorBoostEvents = lightshow.colorBoostEvents;
    d.data.lightColorEventBoxGroups = lightshow.lightColorEventBoxGroups;
    d.data.lightRotationEventBoxGroups = lightshow.lightRotationEventBoxGroups;
    d.data.useNormalEventsAsCompatibleEvents = false;
});

// const oldDirectory = globals.directory;
// globals.directory = Deno.build.os === 'linux'
//     ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/S.A.R.I.E.L/'
//     : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/S.A.R.I.E.L';
// copySync(oldDirectory + info._songFilename, globals.directory + info._songFilename, {
//     overwrite: true,
// });
// copySync(oldDirectory + info._coverImageFilename, globals.directory + info._coverImageFilename, { overwrite: true });
save.difficultyListSync(difficultyList);
save.infoSync(info);

console.timeEnd('Runtime');
