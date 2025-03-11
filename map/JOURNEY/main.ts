import {
   BasicEvent,
   Beatmap,
   EasingsFn,
   ext,
   globals,
   lerp,
   lerpColor,
   normalize,
   readDifficultyFileSync,
   readInfoFileSync,
   types,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import { generateEnvironment } from '../../environment-enhancement/lotus/mod.ts';
// import { sword } from './sword.ts';

globals.directory =
   'D:/SteamLibrary/steamapps/common/Beat Saber/Beat SaberData/CustomWIPLevels/JOURNEY';

const { at, between, where } = ext.selector;

const INPUTFILE = 'Lightshow.dat';
const OUTPUTFILE = 'EasyLightshow.dat';

const lightshow = Beatmap.createOne(readDifficultyFileSync(INPUTFILE, 2));
lightshow.colorNotes = [];
lightshow.obstacles = [];
const envV3 = generateEnvironment();
const animatedFELT = envV3
   .filter((e) => e.id?.includes('SideLaser'))
   .map((e, i) => {
      e.track = `FELTlogo${i}`;
      return e;
   });
envV3.push({
   id: 'Environment$',
   lookupMethod: 'Regex',
   track: 'everythinglmao',
});

const env = ext.heck.chroma.envV3ToV2(envV3);

lightshow.lightshow.customData.customEvents = [
   {
      b: 0,
      t: 'AnimateTrack',
      d: {
         duration: 0,
         track: 'everythinglmao',
         position: [[0, 0, -160 / 0.6, 0]],
      },
   },
   {
      b: 4,
      t: 'AnimateTrack',
      d: {
         duration: 2,
         track: 'everythinglmao',
         position: [
            [0, 0, -160 / 0.6, 0],
            [0, 0, 0, 1, 'easeInExpo'],
         ],
      },
   },
];
animatedFELT
   .map((e) => [
      e.track,
      [e.position![0] / 0.6, e.position![1] / 0.6, e.position![2] / 0.6],
   ])
   .forEach((e) =>
      lightshow.lightshow.customData.customEvents?.push({
         b: 1036,
         t: 'AnimateTrack',
         d: {
            duration: 1,
            track: e[0] as string,
            position: [
               [...(e[1] as types.Vector3), 0],
               [
                  (e[1] as types.Vector3)[0],
                  (e[1] as types.Vector3)[1],
                  32 / 0.6,
                  1,
                  'easeInExpo',
               ],
            ],
         },
      })
   );
lightshow.basicEvents.forEach((e) => {
   if (e.type === 1) {
      e.customData.lightID = ext.heck.chroma.LightIDList.BTSEnvironment[1];
   }
});
lightshow.addBasicEvents(
   {
      type: 1,
      value: 5,
      floatValue: 0.5,
      customData: {
         lightID: [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
         ],
      },
   },
   {
      time: 1,
      type: 1,
      value: 8,
      floatValue: 0.75,
      customData: {
         lightID: [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
         ],
      },
   },
   {
      time: 4,
      type: 1,
      value: 8,
      floatValue: 1,
      customData: {
         easing: 'easeInQuad',
         lightID: [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
         ],
      },
   },
   {
      time: 5,
      type: 1,
      value: 8,
      floatValue: 0.375,
      customData: {
         easing: 'easeOutQuad',
         lightID: [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
         ],
      },
   },
   {
      time: 6,
      type: 1,
      value: 4,
      floatValue: 0,
      customData: {
         lightID: [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
         ],
      },
   },
   {
      time: 1037.25,
      type: 1,
      value: 1,
      floatValue: 0,
      customData: {
         lightID: [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
         ],
      },
   },
   {
      time: 1037.75,
      type: 1,
      value: 4,
      floatValue: 1,
      customData: {
         lightID: [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
         ],
      },
   },
   {
      time: 1037.8125,
      type: 1,
      value: 0,
      floatValue: 1,
      customData: {
         lightID: [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
         ],
      },
   },
   {
      time: 1037.875,
      type: 1,
      value: 1,
      floatValue: 0.75,
      customData: {
         lightID: [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
         ],
      },
   },
   {
      time: 1037.9375,
      type: 1,
      value: 1,
      floatValue: 0.25,
      customData: {
         lightID: [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
         ],
      },
   },
   {
      time: 1038,
      type: 1,
      value: 1,
      floatValue: 0.875,
      customData: {
         lightID: [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
         ],
      },
   },
);
lightshow.lightshow.customData._environment = env;
const makeWhite = (e: BasicEvent, mult = 1) => {
   if (!e.isOff()) {
      e.value += e.value <= 4 ? 8 : 4;
      e.floatValue *= mult;
   }
};
where(between(lightshow.basicEvents, 258, 261.999), {
   include: { type: 0 },
}).forEach((e) => makeWhite(e, 0));
where(at(lightshow.basicEvents, 262), { include: { type: [0, 2, 3] } }).forEach(
   (e) => makeWhite(e, 2.5),
);
where(between(lightshow.basicEvents, 262, 264), {
   include: { type: 4 },
}).forEach((e) => makeWhite(e));
where(between(lightshow.basicEvents, 262, 274), {
   include: { type: [1, 4] },
}).forEach((e) => (e.floatValue *= lerp(normalize(e.time, 262, 274), 5, 1)));
where(at(lightshow.basicEvents, 277.749), { include: { type: 4 } }).forEach(
   (e) => makeWhite(e, 0.5),
);
where(at(lightshow.basicEvents, 278), { include: { type: 0 } }).forEach((e) => makeWhite(e, 0.5));
lightshow.addBasicEvents({ time: 280, type: 0, value: 8, floatValue: 1 });
where(between(lightshow.basicEvents, 599, 611), {
   include: { type: 4 },
}).forEach((e) => makeWhite(e, 0.5));
where(between(lightshow.basicEvents, 614, 616), {
   include: { type: 4 },
}).forEach((e) => makeWhite(e, 1));
where(between(lightshow.basicEvents, 614, 622), {
   include: { type: [1, 4] },
}).forEach(
   (e) => (e.floatValue *= lerp(
      EasingsFn.easeOutQuad(normalize(e.time, 614, 622)),
      4,
      1,
   )),
);
where(between(lightshow.basicEvents, 862, 864), {
   include: { type: 4 },
}).forEach((e) => makeWhite(e, 0.25));
where(between(lightshow.basicEvents, 870, 880), {
   include: { type: 4 },
}).forEach((e) => makeWhite(e, 0.75));
where(at(lightshow.basicEvents, [886, 888, 890, 892]), {
   include: { type: 4 },
}).forEach((e) => makeWhite(e, 0.875));
at(lightshow.basicEvents, 901).forEach((e) => makeWhite(e, 0.75));
where(between(lightshow.basicEvents, 966, 974), {
   include: { type: [1, 4] },
}).forEach(
   (e) => (e.floatValue *= lerp(
      EasingsFn.easeOutQuad(normalize(e.time, 966, 974)),
      4,
      1,
   )),
);

const info = readInfoFileSync();
for (const d of info.difficulties) {
   delete d.customData.requirements;
   d.customData.suggestions = ['Chroma'];
   if (d.characteristic == 'OneSaber') continue;
   const difficulty = Beatmap.createOne(readDifficultyFileSync(d.filename, 2));

   difficulty.difficulty.customData.environment = lightshow.lightshow.customData!.environment;
   difficulty.difficulty.customData.customEvents = lightshow.lightshow.customData!.customEvents;
   const bookmarks = difficulty.customData.bookmarks;
   if (bookmarks) {
      for (const b of bookmarks) {
         if (b.time < 262) {
            b.color = lerpColor(
               [185, 0, 0.375],
               [175, 0.25, 0.5],
               normalize(b.time, bookmarks.at(0)!.time, bookmarks.at(3)!.time),
               'hsva',
            );
            continue;
         }
         b.color = lerpColor(
            [30, 1, 1],
            [390, 1, 1],
            normalize(b.time, 262, bookmarks.at(-1)!.time),
            'hsva',
         );
      }
   }
   difficulty.basicEvents = lightshow.basicEvents;

   writeDifficultyFileSync(difficulty);
}

writeInfoFileSync(info);

const lightshowV3 = lightshow.clone().setVersion(3);
const oneSaberV3 = Beatmap.createOne(
   readDifficultyFileSync('ExpertPlusOneSaber.dat', 3),
);

oneSaberV3.difficulty.customData.environment = envV3;
oneSaberV3.difficulty.customData.customEvents = lightshowV3.difficulty.customData!.customEvents;
const bookmarks = oneSaberV3.customData.bookmarks;
if (bookmarks) {
   for (const b of bookmarks) {
      if (b.b < 262) {
         b.c = lerpColor(
            [185, 0, 0.375],
            [175, 0.25, 0.5],
            normalize(b.b, bookmarks.at(0)!.b, bookmarks.at(3)!.b),
            'hsva',
         );
         continue;
      }
      b.c = lerpColor(
         [30, 1, 1],
         [390, 1, 1],
         normalize(b.b, 262, bookmarks.at(-1)!.b),
         'hsva',
      );
   }
}
oneSaberV3.basicEvents = lightshowV3.basicEvents;
oneSaberV3.colorBoostEvents = lightshowV3.colorBoostEvents;

writeDifficultyFileSync(oneSaberV3);
writeDifficultyFileSync(lightshowV3, { filename: OUTPUTFILE });

// sword();
