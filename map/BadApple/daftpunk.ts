import * as imagescript from 'https://deno.land/x/imagescript@1.2.17/mod.ts';
import {
   BeatPerMinute,
   convert,
   deepCopy,
   ext,
   globals,
   load,
   range,
   save,
   types,
   v3,
   v4,
} from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';

globals.directory = wipPath('Bad Apple');
console.log('loading gif');
const image = Deno.readFileSync('./map/BadApple/badxdd.gif');
console.log('decoding gif');
const img = await imagescript.GIF.decode(image);
const screenX = 27;
const screenY = 10;
const fps = 30;

const lightshow = v3.Difficulty.create();
const info = load.infoSync(2);
info.environmentName = 'DaftPunkEnvironment';
info.environmentNames = ['DaftPunkEnvironment'];
info.audio.audioDataFilename = 'xdd.dat';
info.listMap().forEach((e) => {
   e[1].filename = 'DaftPunk.dat';
   e[1].lightshowFilename = 'DaftPunk.dat';
   e[1].authors.mappers = ['Kival Evan'];
});
save.infoSync(info);

const BPM = BeatPerMinute.create(info.audio.bpm);

// difficulty.addBasicEvents({
//    type: 6,
//    value: 9,
//    floatValue: 2,
// });
for (const id of [23, 24]) {
   lightshow.addLightTranslationEventBoxGroups({
      id,
      boxes: [{ axis: 1, events: [{ translation: -9999 }] }],
   });
}
for (const id of [25, 26]) {
   lightshow.addLightTranslationEventBoxGroups({
      id,
      boxes: [{ events: [{ translation: 2.5 }] }],
   });
}
lightshow.addLightRotationEventBoxGroups({
   id: 14,
   boxes: [{ axis: 1, events: [{ rotation: 90 }] }],
});
for (const id of [15, 16, 17]) {
   lightshow.addLightRotationEventBoxGroups({
      id,
      boxes: [{ events: [{ rotation: 76 + (id - 14) * 4 }] }],
   });
}
lightshow.addLightRotationEventBoxGroups(
   {
      id: 44,
      boxes: [
         { axis: 1, events: [{ rotation: 45 }] },
         {
            axis: 2,
            filter: { type: 2 },
            events: [{ rotation: 284 }],
            rotationDistributionType: 2,
            rotationDistribution: -4,
            affectFirst: 1,
         },
         {
            axis: 2,
            filter: { type: 2, p0: 1, p1: 1 },
            events: [{ rotation: 276 }],
            rotationDistributionType: 2,
            rotationDistribution: -4,
            affectFirst: 1,
         },
      ],
   },
   {
      id: 45,
      boxes: [
         { axis: 1, events: [{ rotation: 315 }] },
         {
            axis: 2,
            events: [{ rotation: 357 }],
            rotationDistributionType: 2,
            rotationDistribution: 3,
            affectFirst: 1,
         },
      ],
   },
   {
      id: 46,
      boxes: [
         { axis: 1, events: [{ rotation: 315 }] },
         {
            axis: 2,
            filter: { type: 1, p0: 2, p1: 0 },
            events: [{ rotation: 354 }],
            rotationDistributionType: 2,
            rotationDistribution: 3,
            affectFirst: 1,
         },
         {
            axis: 2,
            filter: { type: 1, p0: 2, p1: 1 },
            events: [{ rotation: 3 }],
            rotationDistributionType: 2,
            rotationDistribution: 3,
            affectFirst: 1,
         },
      ],
   },
   {
      id: 47,
      boxes: [
         { axis: 1, events: [{ rotation: 315 }] },
         {
            axis: 2,
            filter: { type: 1, p0: 2, p1: 0 },
            events: [{ rotation: 352 }],
            rotationDistributionType: 2,
            rotationDistribution: 4,
            affectFirst: 1,
         },
         {
            axis: 2,
            filter: { type: 1, p0: 2, p1: 1 },
            events: [{ rotation: 4 }],
            rotationDistributionType: 2,
            rotationDistribution: 4,
            affectFirst: 1,
         },
      ],
   },
);

type LightPositionMapping = [
   pos: types.Vector2,
   group: number,
   id: number,
   mul?: number,
];
const triangleMapping: LightPositionMapping[] = [
   range(0, 0, true).map((id, x) => [id, [9 + x, 9]]),
   range(1, 3, true)
      .reverse()
      .map((id, x) => [id, [8 + x, 8]]),
   range(4, 8, true).map((id, x) => [id, [7 + x, 7]]),
   range(9, 15, true)
      .reverse()
      .map((id, x) => [id, [6 + x, 6]]),
   range(16, 24, true).map((id, x) => [id, [5 + x, 5]]),
   range(25, 34, true)
      .reverse()
      .map((id, x) => [id, [4 + x, 4]]),
   range(35, 44, true).map((id, x) => [id, [3 + x, 3]]),
   range(45, 54, true)
      .reverse()
      .map((id, x) => [id, [2 + x, 2]]),
   range(55, 64, true).map((id, x) => [id, [1 + x, 1]]),
   range(65, 74, true)
      .reverse()
      .map((id, x) => [id, [x, 0]]),
]
   .flat()
   .map((e) => [e[1], 0, e[0]] as unknown as LightPositionMapping);
const triangleLMap = deepCopy(triangleMapping).map((e) => {
   e[0][0] = 13 - e[0][0];
   return e;
});
const triangleRMap = deepCopy(triangleMapping).map((e) => {
   e[0][0] = e[0][0] + 13;
   e[1] = 1;
   return e;
});

const runwayCenterMap: LightPositionMapping[] = [
   [[14, 10], 18, 6],
   [[14, 10], 18, 2],
   [[14, 10], 18, 3],
   [[14, 9], 18, 0],
   [[14, 9], 18, 1],
   [[14, 9], 18, 4],
   [[14, 8], 18, 5],
   [[14, 8], 18, 7],
   [[14, 7], 18, 8],
   [[14, 6], 18, 9],
];
const runwayLeftMap: LightPositionMapping[] = [
   [[10, 10], 25, 0],
   [[10, 10], 25, 1],
   [[11, 10], 25, 2],
   [[11, 9], 25, 3],
   [[11, 9], 25, 4],
   [[12, 9], 25, 5],
   [[12, 8], 25, 6],
   [[12, 8], 25, 7],
   [[13, 7], 25, 8],
   [[13, 6], 25, 9],
];
const runwayRightMap: LightPositionMapping[] = [
   [[18, 10], 26, 0],
   [[18, 10], 26, 1],
   [[17, 10], 26, 2],
   [[17, 9], 26, 3],
   [[17, 9], 26, 4],
   [[16, 9], 26, 5],
   [[16, 8], 26, 6],
   [[16, 8], 26, 7],
   [[15, 7], 26, 8],
   [[15, 6], 26, 9],
];
const orbit1Map: LightPositionMapping[] = [
   [[14, 1], 28, 0, 0.5],
   [[14, 3], 29, 0, 0.5],
   [[14, 4], 30, 0, 0.5],
   [[14, 5], 31, 0, 0.5],
];
const orbit2Map: LightPositionMapping[] = [
   [[13, 2], 32, 0, 0.5],
   [[14, 2], 33, 0, 0.5],
   [[15, 2], 34, 0, 0.5],
];
const orbit3Map: LightPositionMapping[] = [
   [[12, 3], 36, 0, 0.5],
   [[13, 3], 37, 0, 0.5],
   [[15, 3], 38, 0, 0.5],
   [[16, 3], 39, 0, 0.5],
];
const orbit4Map: LightPositionMapping[] = [
   [[11, 4], 40, 0, 0.5],
   [[13, 4], 41, 0, 0.5],
   [[15, 4], 42, 0, 0.5],
   [[17, 4], 43, 0, 0.5],
];
const allMapping = [
   ...triangleLMap,
   ...triangleRMap,
   ...runwayCenterMap,
   ...runwayLeftMap,
   ...runwayRightMap,
   ...orbit1Map,
   ...orbit2Map,
   ...orbit3Map,
   ...orbit4Map,
];

const screenLight: { [key: string]: number } = {};
img.forEach((frame, i) => {
   console.log('reading frame', i);
   frame.saturation(0, true);
   const lightThis: { [key: string]: number } = {};
   for (let y = 0; y < Math.min(frame.height); y++) {
      for (let x = 0; x < Math.min(frame.width); x++) {
         const pos = [x, -3 + y];
         const colorAry = frame.getRGBAAt(x + 1, y + 1);
         if (colorAry[3] === 0) {
            continue;
         }
         if (screenLight[pos.toString()] === colorAry[0]) {
            continue;
         }
         lightThis[pos.toString()] = colorAry[0] / 255;
         screenLight[pos.toString()] = colorAry[0];
      }
   }
   const group: Record<number, [id: number, val: number][]> = {};
   for (const [key, value] of Object.entries(lightThis)) {
      const pos = key.split(',').map((e) => +e) as types.Vector2;
      const filtered = allMapping.filter(
         (e) => e[0][0] === pos[0] && e[0][1] === pos[1],
      );
      for (const mapped of filtered) {
         group[mapped[1]] ||= [];
         group[mapped[1]].push([mapped[2], value * (mapped[3] || 1)]);
      }
   }
   for (const [key, value] of Object.entries(group)) {
      lightshow.addLightColorEventBoxGroups({
         time: 22 + BPM.toBeatTime(i / fps),
         id: +key,
         boxes: value.map(
            (e) =>
               v3.LightColorEventBox.create({
                  filter: { type: 2, p0: e[0] },
                  events: [{ color: 1, brightness: e[1] }],
               })[0],
         ),
      });
   }
});

save.difficultySync(v4.Difficulty.create().setFilename('Empty.dat'));
save.lightshowSync(lightshow.setFilename('DaftPunk.dat'));

const bpmInfo = JSON.parse(
   Deno.readTextFileSync(globals.directory + '/BPMInfo.dat'),
) as types.v2.IBPMInfo;

Deno.writeTextFileSync(
   globals.directory + '/xdd.dat',
   JSON.stringify(
      {
         version: '4.0.0',
         songChecksum: '',
         songFrequency: bpmInfo._songFrequency,
         songSampleCount: bpmInfo._songSampleCount,
         bpmData: bpmInfo._regions.map((r) => {
            return {
               si: r._startSampleIndex,
               ei: r._endSampleIndex,
               sb: r._startBeat,
               eb: r._endBeat,
            };
         }),
         lufsData: [],
      } satisfies types.v4.IAudio,
   ),
);
