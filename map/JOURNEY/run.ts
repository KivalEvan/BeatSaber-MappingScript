import { convert, ext, globals, load, save, types, utils, v2 } from '../../depsLocal.ts';
import { generateEnvironment } from '../../environment-enhancement/lotus/environment.ts';
// import { sword } from './sword.ts';

globals.directory =
   'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/JOURNEY';

const { at, between, where } = ext.selector;

const INPUT_FILE = 'Lightshow.dat';
const OUTPUT_FILE = 'EasyLightshow.dat';

const lightshow = load.difficultySync(INPUT_FILE, 2);
lightshow.colorNotes = [];
lightshow.obstacles = [];
const envV3 = generateEnvironment();
const animatedFELT = envV3
   .filter((e) => e.id?.includes('SideLaser'))
   .map((e, i) => {
      e.track = `FELT_logo_${i}`;
      return e;
   });
envV3.push({
   id: 'Environment$',
   lookupMethod: 'Regex',
   track: 'everythinglmao',
});

const env = ext.chroma.envV3toV2(envV3);

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
];
animatedFELT
   .map((e) => [e.track, [e.position![0] / 0.6, e.position![1] / 0.6, e.position![2] / 0.6]])
   .forEach((e) =>
      lightshow.customData._customEvents?.push({
         _time: 1036,
         _type: 'AnimateTrack',
         _data: {
            _duration: 1,
            _track: e[0] as string,
            _position: [
               [...(e[1] as types.Vector3), 0],
               [(e[1] as types.Vector3)[0], (e[1] as types.Vector3)[1], 32 / 0.6, 1, 'easeInExpo'],
            ],
         },
      })
   );
lightshow.basicEvents.forEach((e) => {
   if (e.type === 1) {
      e.customData._lightID = ext.chroma.LightIDList.BTSEnvironment[1];
   }
});
lightshow.addBasicEvents(
   {
      type: 1,
      _value: 5,
      _floatValue: 0.5,
      _customData: {
         _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      },
   },
   {
      _time: 1,
      type: 1,
      _value: 8,
      _floatValue: 0.75,
      _customData: {
         _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      },
   },
   {
      _time: 4,
      type: 1,
      _value: 8,
      _floatValue: 1,
      _customData: {
         _easing: 'easeInQuad',
         _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      },
   },
   {
      _time: 5,
      type: 1,
      _value: 8,
      _floatValue: 0.375,
      _customData: {
         _easing: 'easeOutQuad',
         _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      },
   },
   {
      _time: 6,
      type: 1,
      _value: 4,
      _floatValue: 0,
      _customData: {
         _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      },
   },
   {
      _time: 1037.25,
      type: 1,
      _value: 1,
      _floatValue: 0,
      _customData: {
         _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      },
   },
   {
      _time: 1037.75,
      type: 1,
      _value: 4,
      _floatValue: 1,
      _customData: {
         _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      },
   },
   {
      _time: 1037.8125,
      type: 1,
      _value: 0,
      _floatValue: 1,
      _customData: {
         _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      },
   },
   {
      _time: 1037.875,
      type: 1,
      _value: 1,
      _floatValue: 0.75,
      _customData: {
         _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      },
   },
   {
      _time: 1037.9375,
      type: 1,
      _value: 1,
      _floatValue: 0.25,
      _customData: {
         _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      },
   },
   {
      _time: 1038,
      type: 1,
      _value: 1,
      _floatValue: 0.875,
      _customData: {
         _lightID: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      },
   },
);
lightshow.customData._environment = env;
const makeWhite = (e: v2.Event, mult = 1) => {
   if (!e.isOff()) {
      e.value += e.value <= 4 ? 8 : 4;
      e.floatValue *= mult;
   }
};
where(between(lightshow.basicEvents, 258, 261.999), { include: { type: 0 } }).forEach((e) =>
   makeWhite(e, 0)
);
where(at(lightshow.basicEvents, 262), { include: { type: [0, 2, 3] } }).forEach((e) =>
   makeWhite(e, 2.5)
);
where(between(lightshow.basicEvents, 262, 264), { include: { type: 4 } }).forEach((e) =>
   makeWhite(e)
);
where(between(lightshow.basicEvents, 262, 274), { include: { type: [1, 4] } }).forEach(
   (e) => (e.floatValue *= utils.lerp(utils.normalize(e.time, 262, 274), 5, 1)),
);
where(at(lightshow.basicEvents, 277.749), { include: { type: 4 } }).forEach((e) =>
   makeWhite(e, 0.5)
);
where(at(lightshow.basicEvents, 278), { include: { type: 0 } }).forEach((e) => makeWhite(e, 0.5));
lightshow.addBasicEvents({ _time: 280, type: 0, _value: 8, _floatValue: 1 });
where(between(lightshow.basicEvents, 599, 611), { include: { type: 4 } }).forEach((e) =>
   makeWhite(e, 0.5)
);
where(between(lightshow.basicEvents, 614, 616), { include: { type: 4 } }).forEach((e) =>
   makeWhite(e, 1)
);
where(between(lightshow.basicEvents, 614, 622), { include: { type: [1, 4] } }).forEach(
   (e) => (e.floatValue *= utils.lerp(
      utils.normalize(e.time, 614, 622),
      4,
      1,
      utils.EasingsFn.easeOutQuad,
   )),
);
where(between(lightshow.basicEvents, 862, 864), { include: { type: 4 } }).forEach((e) =>
   makeWhite(e, 0.25)
);
where(between(lightshow.basicEvents, 870, 880), { include: { type: 4 } }).forEach((e) =>
   makeWhite(e, 0.75)
);
where(at(lightshow.basicEvents, [886, 888, 890, 892]), {
   include: { type: 4 },
}).forEach((e) => makeWhite(e, 0.875));
at(lightshow.basicEvents, 901).forEach((e) => makeWhite(e, 0.75));
where(between(lightshow.basicEvents, 966, 974), { include: { type: [1, 4] } }).forEach(
   (e) => (e.floatValue *= utils.lerp(
      utils.normalize(e.time, 966, 974),
      4,
      1,
      utils.EasingsFn.easeOutQuad,
   )),
);

const info = load.infoSync();
for (const difficulties of Object.values(info.difficultySets)) {
   for (const d of difficulties) {
      delete d.customData._requirements;
      d.customData._suggestions = ['Chroma'];
      if (d.characteristic == 'OneSaber') continue;
      console.log(`Copying lightshow to ${d.characteristic} ${d.difficulty}`);
      const difficulty = load.difficultySync(d.filename, 2);

      difficulty.customData._environment = lightshow.customData!._environment;
      difficulty.customData._customEvents = lightshow.customData!._customEvents;
      const bookmarks = difficulty.customData._bookmarks;
      if (bookmarks) {
         for (const b of bookmarks) {
            if (b._time < 262) {
               b._color = utils.interpolateColor(
                  [185, 0, 0.375],
                  [175, 0.25, 0.5],
                  utils.normalize(b._time, bookmarks.at(0)!._time, bookmarks.at(3)!._time),
                  'hsva',
               );
               continue;
            }
            b._color = utils.interpolateColor(
               [30, 1, 1],
               [390, 1, 1],
               utils.normalize(b._time, 262, bookmarks.at(-1)!._time),
               'hsva',
            );
         }
      }
      difficulty.basicEvents = lightshow.basicEvents;

      save.difficultySync(difficulty);
   }
}

save.infoSync(info);

const lightshowV3 = convert.toV3(lightshow);
const oneSaberV3 = load.difficultySync('ExpertPlusOneSaber.dat', 3);

oneSaberV3.customData.environment = envV3;
oneSaberV3.customData.customEvents = lightshowV3.customData!.customEvents;
const bookmarks = oneSaberV3.customData.bookmarks;
if (bookmarks) {
   for (const b of bookmarks) {
      if (b.b < 262) {
         b.c = utils.interpolateColor(
            [185, 0, 0.375],
            [175, 0.25, 0.5],
            utils.normalize(b.b, bookmarks.at(0)!.b, bookmarks.at(3)!.b),
            'hsva',
         );
         continue;
      }
      b.c = utils.interpolateColor(
         [30, 1, 1],
         [390, 1, 1],
         utils.normalize(b.b, 262, bookmarks.at(-1)!.b),
         'hsva',
      );
   }
}
oneSaberV3.basicEvents = lightshowV3.basicEvents;
oneSaberV3.colorBoostEvents = lightshowV3.colorBoostEvents;

save.difficultySync(oneSaberV3);
save.difficultySync(lightshowV3, { filePath: OUTPUT_FILE });

// sword();
