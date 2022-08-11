import { ext, globals, load, save, utils } from '../../depsLocal.ts';

globals.directory = 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/crescent moon';

const { convertColorInput, interpolateColor, normalize } = utils;
const { where, at, between } = ext.selector;

const data = load.difficultySync('ExpertPlusStandard.dat', 2);

const bookmarks = data.customData._bookmarks;
if (bookmarks) {
    for (const b of bookmarks) {
        b._color = interpolateColor(
            [185, 0, 0.375],
            [175, 0.25, 0.5],
            normalize(b._time, bookmarks.at(0)!._time, bookmarks.at(-1)!._time),
            'hsva',
        );
        if ((b._time >= 110 && b._time <= 142) || (b._time >= 310 && b._time <= 342)) {
            b._color = convertColorInput([0, 0, 0.75], 'hsva');
            continue;
        }
        if (b._time === 74 || (b._time >= 534 && b._time <= 590) || (b._time >= 742 && b._time <= 774)) {
            b._color = convertColorInput([30, 1, 1], 'hsva');
            continue;
        }
        if (b._time >= 174 && b._time <= 206) {
            b._color = interpolateColor([285, 0.75, 0.75], [315, 0.875, 0.875], normalize(b._time, 174, 206), 'hsva');
            continue;
        }
        if (b._time >= 374 && b._time <= 406) {
            b._color = interpolateColor([165, 0.75, 0.75], [195, 0.875, 0.875], normalize(b._time, 374, 406), 'hsva');
            continue;
        }
        if (b._time === 206 || b._time === 406 || b._time === 734) {
            b._color = convertColorInput([0, 0, 1], 'hsva');
            continue;
        }
        if (
            b._time === 238 ||
            b._time === 270 ||
            b._time === 438 ||
            b._time === 470 ||
            b._time === 670 ||
            b._time === 702
        ) {
            b._color = convertColorInput([135, 0.75, 1], 'hsva');
            continue;
        }
    }
}

save.difficultySync(data);
