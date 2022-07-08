import * as bsmap from '../../depsLocal.ts';
import { generateEnvironment } from '../../environment-enhancement/lotus/environment.ts';
import { sword } from './sword.ts';

bsmap.globals.directory = 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/JOURNEY';

const { at, between, where } = bsmap.ext.selector;

const INPUT_FILE = 'Lightshow.dat';
const OUTPUT_FILE = 'EasyLightshow.dat';

const lightshow = bsmap.load.difficultySync(INPUT_FILE, 2);
lightshow.notes = [];
lightshow.obstacles = [];
const env = generateEnvironment().map((e) => {
    return {
        _id: e.id,
        _lookupMethod: e.lookupMethod,
        _track: e.track,
        _duplicate: e.duplicate,
        _active: e.active,
        _scale: e.scale,
        _position: e.position?.map((n) => n / 0.6) as bsmap.types.Vector3,
        _rotation: e.rotation,
        _localPosition: e.localPosition?.map((n) => n / 0.6) as bsmap.types.Vector3,
        _localRotation: e.localRotation,
        _lightID: e.components?.ILightWithId?.lightID,
    } as bsmap.types.v2.IChromaEnvironment;
});

env.push({ _id: 'Environment$', _lookupMethod: 'Regex', _track: 'everythinglmao' });

lightshow.customData._customEvents = [
    {
        _time: 0,
        _type: 'AnimateTrack',
        _data: {
            _duration: 0,
            _track: 'everythinglmao',
            _position: [[0, 0, -160 / 0.6, 0]],
        },
    },
    {
        _time: 4,
        _type: 'AnimateTrack',
        _data: {
            _duration: 2,
            _track: 'everythinglmao',
            _position: [
                [0, 0, -160 / 0.6, 0],
                [0, 0, 0, 1, 'easeInExpo'],
            ],
        },
    },
    {
        _time: 1037,
        _type: 'AnimateTrack',
        _data: {
            _duration: 0.75,
            _track: 'everythinglmao',
            _position: [
                [0, 0, 0, 0],
                [0, 0, -160 / 0.6, 1, 'easeInExpo'],
            ],
        },
    },
];
lightshow.events.forEach((e) => {
    if (e.type === 1) {
        e.customData._lightID = bsmap.ext.chroma.LightIDList.BTSEnvironment[1];
    }
});
lightshow.addEvents(
    {
        _type: 1,
        _value: 5,
        _floatValue: 0.5,
        _customData: {
            _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
        },
    },
    {
        _time: 1,
        _type: 1,
        _value: 8,
        _floatValue: 0.75,
        _customData: {
            _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
        },
    },
    {
        _time: 4,
        _type: 1,
        _value: 8,
        _floatValue: 1,
        _customData: {
            _easing: 'easeInQuad',
            _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
        },
    },
    {
        _time: 5,
        _type: 1,
        _value: 8,
        _floatValue: 0.375,
        _customData: {
            _easing: 'easeOutQuad',
            _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
        },
    },
    {
        _time: 6,
        _type: 1,
        _value: 4,
        _floatValue: 0,
        _customData: {
            _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
        },
    },
    {
        _time: 1037.25,
        _type: 1,
        _value: 1,
        _floatValue: 0,
        _customData: {
            _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
        },
    },
    {
        _time: 1037.75,
        _type: 1,
        _value: 4,
        _floatValue: 1,
        _customData: {
            _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
        },
    },
    {
        _time: 1037.8125,
        _type: 1,
        _value: 0,
        _floatValue: 1,
        _customData: {
            _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
        },
    },
    {
        _time: 1037.875,
        _type: 1,
        _value: 1,
        _floatValue: 0.75,
        _customData: {
            _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
        },
    },
    {
        _time: 1037.9375,
        _type: 1,
        _value: 1,
        _floatValue: 0.25,
        _customData: {
            _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
        },
    },
    {
        _time: 1038,
        _type: 1,
        _value: 1,
        _floatValue: 1,
        _customData: {
            _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
        },
    },
);
lightshow.customData._environment = env;
const makeWhite = (e: bsmap.v2.Event, mult = 1) => {
    if (!e.isOff()) {
        e.value += e.value <= 4 ? 8 : 4;
        e.floatValue *= mult;
    }
};
where(between(lightshow.events, 258, 261.999), { include: { _type: 0 } }).forEach((e) => makeWhite(e, 0.875));
where(at(lightshow.events, 277.749), { include: { _type: 4 } }).forEach((e) => makeWhite(e, 0.5));
where(at(lightshow.events, 278), { include: { _type: 0 } }).forEach((e) => makeWhite(e, 0.5));
lightshow.addEvents({ _time: 280, _type: 0, _value: 8, _floatValue: 1 });
where(between(lightshow.events, 599, 611), { include: { _type: 4 } }).forEach((e) => makeWhite(e, 0.5));
where(between(lightshow.events, 862, 864), { include: { _type: 4 } }).forEach((e) => makeWhite(e, 0.25));
where(between(lightshow.events, 870, 880), { include: { _type: 4 } }).forEach((e) => makeWhite(e, 0.75));
where(at(lightshow.events, [886, 888, 890, 892]), { include: { _type: 4 } }).forEach((e) => makeWhite(e, 0.875));
at(lightshow.events, 901).forEach((e) => makeWhite(e, 0.75));

const info = bsmap.load.infoSync();
for (const set of info._difficultyBeatmapSets) {
    for (const d of set._difficultyBeatmaps) {
        console.log(`Copying lightshow to ${set._beatmapCharacteristicName} ${d._difficulty}`);
        const difficulty = bsmap.load.difficultySync(d._beatmapFilename, 2);

        difficulty.customData._environment = lightshow.customData!._environment;
        difficulty.customData._customEvents = lightshow.customData!._customEvents;

        const bookmarks = difficulty.customData._bookmarks;
        if (bookmarks) {
            for (const b of bookmarks) {
                if (b._time < 262) {
                    b._color = bsmap.utils.interpolateColor(
                        [185, 0, 0.375],
                        [175, 0.25, 0.5],
                        bsmap.utils.normalize(b._time, bookmarks.at(0)!._time, bookmarks.at(3)!._time),
                        'hsva',
                    );
                    continue;
                }
                b._color = bsmap.utils.interpolateColor(
                    [30, 1, 1],
                    [390, 1, 1],
                    bsmap.utils.normalize(b._time, 262, bookmarks.at(-1)!._time),
                    'hsva',
                );
            }
        }

        difficulty.events = lightshow.events;

        bsmap.save.difficultySync(difficulty);
    }
}

bsmap.save.difficultySync(lightshow, { filePath: OUTPUT_FILE });

sword();
