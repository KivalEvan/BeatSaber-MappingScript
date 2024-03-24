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
const image = Deno.readFileSync('./map/BadApple/badapplelattice.gif');
console.log('decoding gif');
const img = await imagescript.GIF.decode(image);
const screenX = 27;
const screenY = 10;
const fps = 30;

const lightshow = v3.Difficulty.create();
const info = load.infoSync(2);
info.audio.audioDataFilename = 'xdd.dat';
info.environmentName = 'LatticeEnvironment';
info.environmentNames = ['LatticeEnvironment'];
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
for (const i of range(4)) {
   lightshow.addLightRotationEventBoxGroups(
      {
         id: i * 7 + 4,
         boxes: [{ axis: 2, events: [{ rotation: i > 1 ? 180 : 0 }] }],
      },
      {
         id: i * 7 + 1,
         boxes: [{ events: [{ rotation: 315 }], flip: i > 1 ? 1 : 0 }],
      },
   );
   lightshow.addLightTranslationEventBoxGroups({
      id: i * 7 + 0,
      boxes: [
         {
            axis: 0,
            events: [{ translation: -1 }],
            gapDistribution: 2,
            affectFirst: 1,
         },
         {
            axis: 1,
            events: [{ translation: -.5 + i * 0.34 }],
            flip: i > 1 ? 1 : 0,
         },
         { axis: 2, events: [{ translation: 2 - i * 0.34 }] },
      ],
   });
   lightshow.addFxEventBoxGroups({
      id: i * 7 + 1,
      boxes: [{ events: [{ value: -2.5 }] }],
   });
}

type LightPositionMapping = [
   pos: types.Vector2,
   group: number,
   id: number,
   mul?: number,
];
const allMapping: LightPositionMapping[] = [
   ...range(8).map((e) => [[e, 7], 1, e]),
   ...range(8).map((e) => [[e, 6], 4, e]),
   ...range(8).map((e) => [[e, 5], 8, 7 - e]),
   ...range(8).map((e) => [[e, 4], 11, 7 - e]),
   ...range(8).map((e) => [[e, 3], 15, e]),
   ...range(8).map((e) => [[e, 2], 18, e]),
   ...range(8).map((e) => [[e, 1], 22, 7 - e]),
   ...range(8).map((e) => [[e, 0], 25, 7 - e]),
];

const screenLight: { [key: string]: number } = {};
img.forEach((frame, i) => {
   console.log('reading frame', i);
   frame.saturation(0, true);
   const lightThis: { [key: string]: number } = {};
   for (let y = 0; y < Math.min(frame.height); y++) {
      for (let x = 0; x < Math.min(frame.width); x++) {
         const pos = [-1 + x, y];
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
