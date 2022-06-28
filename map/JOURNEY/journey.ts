import * as bsmap from '../../depsLocal.ts';
import { generateEnvironment } from '../../environment-enhancement/lotus/environment.ts';

bsmap.globals.directory = 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/JOURNEY';

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
        _lightID: e.lightID,
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

const info = bsmap.load.infoSync();
for (const set of info._difficultyBeatmapSets) {
    for (const d of set._difficultyBeatmaps) {
        console.log(`Copying lightshow to ${set._beatmapCharacteristicName} ${d._difficulty}`);
        const difficulty = bsmap.load.difficultySync(d._beatmapFilename, 2);

        difficulty.customData._environment = lightshow.customData!._environment;
        difficulty.customData._customEvents = lightshow.customData!._customEvents;

        difficulty.events = lightshow.events;

        bsmap.save.difficultySync(difficulty);
    }
}

bsmap.save.difficultySync(lightshow, { filePath: OUTPUT_FILE });
