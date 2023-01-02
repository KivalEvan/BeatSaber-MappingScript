import { copySync, ensureDirSync } from 'https://deno.land/std@0.153.0/fs/mod.ts';
import { types } from '../depsLocal.ts';

const input = prompt('Folder full path:');

ensureDirSync(input + '/map');
let audioName = '';

for await (const entry of Deno.readDir(input + '/AudioClip')) {
    if (entry.isFile && entry.name.endsWith('wav')) {
        copySync(input + '/AudioClip/' + entry.name, input + '/map/' + entry.name, { overwrite: true });
        audioName = entry.name;
    }
}

let bpm = 120;
for await (const entry of Deno.readDir(input + '/MonoBehaviour')) {
    if (entry.isFile && entry.name.endsWith('json')) {
        const json = JSON.parse(Deno.readTextFileSync(input + '/MonoBehaviour/' + entry.name));
        if (json._jsonData) {
            if (entry.name.includes('BeatmapData')) {
                const map: types.v3.IDifficulty = JSON.parse(json._jsonData);
                bpm = map.bpmEvents.findLast((bpme) => bpme.m)!.m;
                Deno.writeTextFileSync(
                    input +
                        '/map/' +
                        entry.name.replace(audioName.replace('.wav', ''), '').replace('BeatmapData.json', '.dat'),
                    JSON.stringify(map),
                );
            }
        }
        if (json._difficultyBeatmapSets) {
            if (entry.name.includes('LevelData')) {
                const info: types.IInfo = {
                    _version: `2.0.0`,
                    _songName: 'Hills',
                    _songSubName: '',
                    _songAuthorName: '',
                    _levelAuthorName: '',
                    _beatsPerMinute: bpm,
                    _shuffle: 0,
                    _shufflePeriod: 0,
                    _previewStartTime: 10,
                    _previewDuration: 12,
                    _songFilename: audioName,
                    _coverImageFilename: 'cover.png',
                    _environmentName: 'TheWeekndEnvironment',
                    _allDirectionsEnvironmentName: 'GlassDesertEnvironment',
                    _songTimeOffset: 0,
                    _difficultyBeatmapSets: json._difficultyBeatmapSets.map((j: types.IInfoSet) => {
                        j._beatmapCharacteristicName = j._beatmapCharacteristicSerializedName;
                        delete j['_beatmapCharacteristicSerializedName'];
                        j._difficultyBeatmaps.forEach((b) => {
                            delete b['_beatmapData'];
                            switch (b._difficultyRank) {
                                case 1:
                                    b._difficulty = 'Easy';
                                    b._beatmapFilename = `${
                                        j._beatmapCharacteristicName === 'Standard' ? '' : 'OneSaber'
                                    }Easy.dat`;
                                    break;
                                case 3:
                                    b._difficulty = 'Normal';
                                    b._beatmapFilename = `${
                                        j._beatmapCharacteristicName === 'Standard' ? '' : 'OneSaber'
                                    }Normal.dat`;
                                    break;
                                case 5:
                                    b._difficulty = 'Hard';
                                    b._beatmapFilename = `${
                                        j._beatmapCharacteristicName === 'Standard' ? '' : 'OneSaber'
                                    }Hard.dat`;
                                    break;
                                case 7:
                                    b._difficulty = 'Expert';
                                    b._beatmapFilename = `${
                                        j._beatmapCharacteristicName === 'Standard' ? '' : 'OneSaber'
                                    }Expert.dat`;
                                    break;
                                case 9:
                                    b._difficulty = 'ExpertPlus';
                                    b._beatmapFilename = `${
                                        j._beatmapCharacteristicName === 'Standard' ? '' : 'OneSaber'
                                    }ExpertPlus.dat`;
                                    break;
                            }
                        });
                        return j;
                    }),
                };
                Deno.writeTextFileSync(input + '/map/Info.dat', JSON.stringify(info));
            }
        }
    }
}
