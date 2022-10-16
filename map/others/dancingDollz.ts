import { globals, load, save, utils } from '../../depsLocal.ts';

globals.directory = Deno.build.os === 'linux'
    ? '/home/kival/CustomWIPLevels/Dancing Dollz/'
    : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/Dancing Dollz';

const INPUT_FILE = 'Lightshow.dat';
const OUTPUT_FILE = 'EasyOneSaber.dat';

const lightshow = load.difficultySync(INPUT_FILE, 2).setFileName(OUTPUT_FILE);

lightshow.events.forEach((e) => {
    e.floatValue = 1;
    if (e.isLightEvent()) {
        e.floatValue = e.value ? 1 : 0;
    }
    if (e.customData?._color) {
        if (e.value) {
            e.value = e.customData._color[0] ? (e.value <= 4 ? 4 : e.value <= 8 ? 8 : 12) : e.value;
        }
        e.floatValue = e.customData._color[3] ?? 1;
    }
    e.resetCustomData();
});

const info = load.infoSync();
for (const set of info._difficultyBeatmapSets) {
    for (const d of set._difficultyBeatmaps) {
        if (set._beatmapCharacteristicName === 'OneSaber' && d._difficulty === 'Normal') {
            continue;
        }

        console.log(`Copying lightshow to ${set._beatmapCharacteristicName} ${d._difficulty}`);
        const difficulty = load.difficultySync(d._beatmapFilename, 2);

        const bookmarks = difficulty.customData._bookmarks;
        if (bookmarks) {
            for (const b of bookmarks) {
                b._color = utils.interpolateColor(
                    [210, 1, 1],
                    [135, 1, 1],
                    utils.normalize(b._time, 0, bookmarks.at(-1)!._time),
                    'hsva',
                );
            }
        }

        difficulty.events = lightshow.events;

        save.difficultySync(difficulty);
    }
}

save.infoSync(info);
