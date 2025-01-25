import {
   Axis,
   deepCopy,
   DistributionType,
   EaseType,
   EventLightColor,
   IndexFilterType,
   pRandomFn,
   range as rangeEx,
   types,
} from '@bsmap';
import { WeaveID } from './id.ts';
function range(start: number, end?: number, step?: number): number[] {
   return rangeEx(start, end!, step!, true);
}

type Pattern = { bass: number[]; kick: number[] };

const pattern1: Pattern = { bass: [0, 2.5], kick: [1, 3] };
const timeStart = 102;
const timeEnd = 990 - 1;
const timeInterval = 4;
const timeSkip = [
   130,
   222,
   226,
   342,
   346,
   350,
   354,
   542,
   546,
   662,
   666,
   670,
   674,
].concat(...range(678, 806, 4));
const timePattern2 = [
   162,
   242,
   306,
   370,
   434,
   514,
   562,
   602,
   626,
   818,
   882,
   962,
];
const timePattern3 = [194];
const timePattern4 = [258, 290, 322, 386, 450, 578, 610, 642, 834, 898];

const lightBaseBass: Partial<types.wrapper.IWrapLightColorEvent>[] = [
   { time: 0, previous: 1 },
   {
      time: 0.125,
      color: EventLightColor.WHITE,
      easing: EaseType.LINEAR,
   },
   {
      time: 0.4999,
      color: EventLightColor.WHITE,
      easing: EaseType.LINEAR,
      brightness: 0,
   },
];
const lightBass: types.DeepPartial<types.wrapper.IWrapLightColorEventBoxAttribute>[] = [
   {
      filter: { p0: 2, p1: 1 },
      events: lightBaseBass,
      beatDistribution: 1 / 16,
      beatDistributionType: DistributionType.STEP,
   },
   {
      filter: { p0: 2, p1: 1, reverse: 1 },
      events: lightBaseBass,
      beatDistribution: 1 / 16,
      beatDistributionType: DistributionType.STEP,
   },
];
const lightBaseBassShort: Partial<types.wrapper.IWrapLightColorEvent>[] = [
   { previous: 1 },
   {
      time: 0.0625,
      color: EventLightColor.WHITE,
      easing: EaseType.LINEAR,
   },
   {
      time: 0.375,
      color: EventLightColor.WHITE,
      easing: EaseType.LINEAR,
      brightness: 0,
   },
];
const lightBassShort: types.DeepPartial<types.wrapper.IWrapLightColorEventBoxAttribute>[] = [
   {
      filter: { p0: 2, p1: 1, limit: 0.5 },
      events: lightBaseBassShort,
      beatDistribution: 1 / 16,
      beatDistributionType: DistributionType.STEP,
   },
   {
      filter: { p0: 2, p1: 1, reverse: 1, limit: 0.5 },
      events: [
         { previous: 1 },
         {
            time: 0.125,
            color: EventLightColor.WHITE,
            easing: EaseType.LINEAR,
         },
         {
            time: 0.375,
            color: EventLightColor.WHITE,
            easing: EaseType.LINEAR,
            brightness: 0,
         },
      ],
      beatDistribution: 1 / 16,
      beatDistributionType: DistributionType.STEP,
   },
];
const lightKick: types.DeepPartial<types.wrapper.IWrapLightColorEventBoxAttribute>[] = [
   {
      filter: {},
      events: [
         { color: EventLightColor.WHITE },
         {
            time: 0.5,
            color: EventLightColor.WHITE,
            easing: EaseType.LINEAR,
            brightness: 0,
         },
      ],
      beatDistribution: 1 / 16,
      beatDistributionType: DistributionType.STEP,
   },
];

const pRandom = pRandomFn('h');
export default function (data: types.wrapper.IWrapBeatmap) {
   for (const time of range(timeStart, timeEnd, timeInterval)) {
      if (timeSkip.includes(time)) continue;
      if (timePattern2.includes(time)) doPattern2(data, time);
      else if (timePattern3.includes(time)) doPattern3(data, time);
      else if (timePattern4.includes(time)) doPattern4(data, time);
      else doPattern1(data, time);
   }
   bigbuild(data);
   for (const id of range(WeaveID.DISTANT_LEFT, WeaveID.DISTANT_RIGHT)) {
      for (const time of range(742, 790, 16)) {
         data.addLightRotationEventBoxGroups({
            time,
            id,
            boxes: [
               {
                  events: [
                     {
                        rotation: pRandom(-15, 15),
                        easing: EaseType.INOUT_QUAD,
                     },
                  ],
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1 },
                  events: [
                     {
                        rotation: pRandom(-15, 15),
                        easing: EaseType.INOUT_QUAD,
                     },
                  ],
                  beatDistribution: 2,
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [
                     {
                        rotation: pRandom(-15, 15),
                        easing: EaseType.INOUT_QUAD,
                     },
                  ],
                  beatDistribution: 2,
               },
            ],
         });
      }
      for (const time of range(742, 790, 8)) {
         data.addLightColorEventBoxGroups(
            {
               time,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                        reverse: ((id + 1) % 2) as 1,
                     },
                     events: [
                        { color: EventLightColor.WHITE, brightness: 0 },
                        {
                           time: 0.5,
                           color: EventLightColor.WHITE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 2,
                           color: EventLightColor.WHITE,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                     beatDistribution: 1,
                     beatDistributionType: DistributionType.STEP,
                  },
               ],
            },
            {
               time: time + 4,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                        reverse: ((id + 1) % 2) as 1,
                     },
                     events: [
                        { color: EventLightColor.WHITE, brightness: 0 },
                        {
                           time: 0.5,
                           color: EventLightColor.WHITE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 2,
                           color: EventLightColor.WHITE,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                     beatDistribution: 1,
                     beatDistributionType: DistributionType.STEP,
                  },
               ],
            },
         );
      }
   }
}

function doPattern1(data: types.wrapper.IWrapBeatmap, time: number) {
   const pattern = pattern1;
   data.addLightRotationEventBoxGroups({
      time,
      id: WeaveID.DISTANT_BOTTOM,
      boxes: [
         {
            events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
         },
         {
            axis: Axis.Y,
            filter: { p0: 2, p1: 1 },
            events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
         },
         {
            axis: Axis.Y,
            filter: { p0: 2, p1: 1, reverse: 1 },
            events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
         },
      ],
   });
   for (const tOffset of pattern.bass) {
      data.addLightColorEventBoxGroups({
         time: time + tOffset,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: lightBass,
      });
   }
   for (const id of range(WeaveID.DISTANT_LEFT, WeaveID.DISTANT_RIGHT)) {
      data.addLightRotationEventBoxGroups({
         time,
         id,
         boxes: [
            {
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
            {
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
               rotationDistribution: -30,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
         ],
      });
      for (const tOffset of pattern.kick) {
         data.addLightColorEventBoxGroups({
            time: time + tOffset,
            id,
            boxes: [
               {
                  filter: { reverse: id % 2 ? 0 : 1 },
                  events: [
                     { color: EventLightColor.WHITE },
                     {
                        time: 0.5,
                        color: EventLightColor.WHITE,
                        easing: EaseType.LINEAR,
                        brightness: 0,
                     },
                  ],
                  beatDistribution: 1 / 16,
                  beatDistributionType: DistributionType.STEP,
               },
            ],
         });
         data.addLightRotationEventBoxGroups(
            {
               time: time + tOffset,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: { p0: 2, p1: 1 },
                     events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
                     rotationDistribution: -30,
                     affectFirst: 1,
                  },
                  {
                     axis: Axis.Y,
                     filter: { p0: 2, p1: 1, reverse: 1 },
                     events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
                     rotationDistribution: 30,
                     affectFirst: 1,
                  },
               ],
            },
            {
               time: time + 0.25 + tOffset,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: { p0: 2, p1: 1 },
                     events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
                     rotationDistribution: -40,
                     affectFirst: 1,
                  },
                  {
                     axis: Axis.Y,
                     filter: { p0: 2, p1: 1, reverse: 1 },
                     events: [{ rotation: 90, easing: EaseType.OUT_QUAD }],
                     rotationDistribution: 40,
                     affectFirst: 1,
                  },
               ],
            },
         );
      }
   }
}

let flipFlop2 = false;
function doPattern2(data: types.wrapper.IWrapBeatmap, time: number) {
   data.addLightColorEventBoxGroups(
      {
         time: time,
         id: WeaveID.DISTANT_TOP,
         boxes: lightBassShort,
      },
      {
         time: time + 0.5,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: lightBass,
      },
      {
         time: time + 2.5,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: lightBass,
      },
   );
   data.addLightRotationEventBoxGroups(
      {
         time,
         id: WeaveID.DISTANT_TOP,
         boxes: [
            {
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
            },
         ],
      },
      {
         time,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: [
            {
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
            },
         ],
      },
   );
   for (const id of range(WeaveID.DISTANT_LEFT, WeaveID.DISTANT_RIGHT)) {
      data.addLightRotationEventBoxGroups({
         time,
         id,
         boxes: [
            {
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
            {
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
               rotationDistribution: -30,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
         ],
      });
      data.addLightColorEventBoxGroups({
         time: time + 3,
         id,
         boxes: deepCopy(lightKick).map((e) => {
            e.filter!.reverse = id % 2 ? 0 : 1;
            return e;
         }),
      });
      data.addLightRotationEventBoxGroups(
         {
            time: time + 3,
            id,
            boxes: [
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1 },
                  events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
                  rotationDistribution: -30,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
                  rotationDistribution: 30,
                  affectFirst: 1,
               },
            ],
         },
         {
            time: time + 3.25,
            id,
            boxes: [
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1 },
                  events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
                  rotationDistribution: -40,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [{ rotation: 90, easing: EaseType.OUT_QUAD }],
                  rotationDistribution: 40,
                  affectFirst: 1,
               },
            ],
         },
      );
   }
   data.addLightColorEventBoxGroups(
      {
         time: time + 1,
         id: flipFlop2 ? WeaveID.DISTANT_RIGHT : WeaveID.DISTANT_LEFT,
         boxes: [
            {
               filter: {
                  reverse: (flipFlop2 ? WeaveID.DISTANT_RIGHT : WeaveID.DISTANT_LEFT) % 2 ? 0 : 1,
               },
               events: [
                  { color: EventLightColor.WHITE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     easing: EaseType.LINEAR,
                     brightness: 0,
                  },
               ],
               beatDistribution: 1 / 16,
               beatDistributionType: DistributionType.STEP,
            },
         ],
      },
      {
         time: time + 1.5,
         id: flipFlop2 ? WeaveID.DISTANT_LEFT : WeaveID.DISTANT_RIGHT,
         boxes: [
            {
               filter: {
                  reverse: (flipFlop2 ? WeaveID.DISTANT_LEFT : WeaveID.DISTANT_RIGHT) % 2 ? 0 : 1,
               },
               events: [
                  { color: EventLightColor.WHITE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     easing: EaseType.LINEAR,
                     brightness: 0,
                  },
               ],
               beatDistribution: 1 / 16,
               beatDistributionType: DistributionType.STEP,
            },
         ],
      },
   );
   data.addLightRotationEventBoxGroups(
      {
         time: time + 1,
         id: flipFlop2 ? WeaveID.DISTANT_RIGHT : WeaveID.DISTANT_LEFT,
         boxes: [
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
               rotationDistribution: -30,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
         ],
      },
      {
         time: time + 1.25,
         id: flipFlop2 ? WeaveID.DISTANT_RIGHT : WeaveID.DISTANT_LEFT,
         boxes: [
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
               rotationDistribution: -40,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.OUT_QUAD }],
               rotationDistribution: 40,
               affectFirst: 1,
            },
         ],
      },
      {
         time: time + 1.5,
         id: flipFlop2 ? WeaveID.DISTANT_LEFT : WeaveID.DISTANT_RIGHT,
         boxes: [
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
               rotationDistribution: -30,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
         ],
      },
      {
         time: time + 1.75,
         id: flipFlop2 ? WeaveID.DISTANT_LEFT : WeaveID.DISTANT_RIGHT,
         boxes: [
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
               rotationDistribution: -40,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.OUT_QUAD }],
               rotationDistribution: 40,
               affectFirst: 1,
            },
         ],
      },
   );
   flipFlop2 = !flipFlop2;
}

function doPattern3(data: types.wrapper.IWrapBeatmap, time: number) {
   data.addLightColorEventBoxGroups(
      {
         time,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: lightBass,
      },
      {
         time: time + 2,
         id: WeaveID.DISTANT_TOP,
         boxes: lightBassShort,
      },
      {
         time: time + 2.5,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: lightBassShort,
      },
      {
         time: time + 3.5,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: lightBassShort,
      },
   );
   data.addLightRotationEventBoxGroups(
      {
         time,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: [
            {
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
            },
         ],
      },
      {
         time,
         id: WeaveID.DISTANT_TOP,
         boxes: [
            {
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
            },
         ],
      },
   );
   for (const id of range(WeaveID.DISTANT_LEFT, WeaveID.DISTANT_RIGHT)) {
      data.addLightRotationEventBoxGroups({
         time,
         id,
         boxes: [
            {
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
            {
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
               rotationDistribution: -30,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
         ],
      });
      data.addLightColorEventBoxGroups({
         time: time + 3,
         id,
         boxes: lightKick,
      });
      data.addLightRotationEventBoxGroups(
         {
            time: time + 3,
            id,
            boxes: [
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1 },
                  events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
                  rotationDistribution: -30,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
                  rotationDistribution: 30,
                  affectFirst: 1,
               },
            ],
         },
         {
            time: time + 3.25,
            id,
            boxes: [
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1 },
                  events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
                  rotationDistribution: -40,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [{ rotation: 90, easing: EaseType.OUT_QUAD }],
                  rotationDistribution: 40,
                  affectFirst: 1,
               },
            ],
         },
      );
   }
   data.addLightColorEventBoxGroups(
      {
         time: time + 1,
         id: flipFlop2 ? WeaveID.DISTANT_RIGHT : WeaveID.DISTANT_LEFT,
         boxes: [
            {
               filter: {
                  reverse: (flipFlop2 ? WeaveID.DISTANT_RIGHT : WeaveID.DISTANT_LEFT) % 2 ? 0 : 1,
               },
               events: [
                  { color: EventLightColor.WHITE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     easing: EaseType.LINEAR,
                     brightness: 0,
                  },
               ],
               beatDistribution: 1 / 16,
               beatDistributionType: DistributionType.STEP,
            },
         ],
      },
      {
         time: time + 1.5,
         id: flipFlop2 ? WeaveID.DISTANT_LEFT : WeaveID.DISTANT_RIGHT,
         boxes: [
            {
               filter: {
                  reverse: (flipFlop2 ? WeaveID.DISTANT_LEFT : WeaveID.DISTANT_RIGHT) % 2 ? 0 : 1,
               },
               events: [
                  { color: EventLightColor.WHITE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     easing: EaseType.LINEAR,
                     brightness: 0,
                  },
               ],
               beatDistribution: 1 / 16,
               beatDistributionType: DistributionType.STEP,
            },
         ],
      },
   );
   data.addLightRotationEventBoxGroups(
      {
         time: time + 1,
         id: flipFlop2 ? WeaveID.DISTANT_RIGHT : WeaveID.DISTANT_LEFT,
         boxes: [
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
               rotationDistribution: -30,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
         ],
      },
      {
         time: time + 1.25,
         id: flipFlop2 ? WeaveID.DISTANT_RIGHT : WeaveID.DISTANT_LEFT,
         boxes: [
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
               rotationDistribution: -40,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.OUT_QUAD }],
               rotationDistribution: 40,
               affectFirst: 1,
            },
         ],
      },
      {
         time: time + 1.5,
         id: flipFlop2 ? WeaveID.DISTANT_LEFT : WeaveID.DISTANT_RIGHT,
         boxes: [
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
               rotationDistribution: -30,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
         ],
      },
      {
         time: time + 1.75,
         id: flipFlop2 ? WeaveID.DISTANT_LEFT : WeaveID.DISTANT_RIGHT,
         boxes: [
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
               rotationDistribution: -40,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.OUT_QUAD }],
               rotationDistribution: 40,
               affectFirst: 1,
            },
         ],
      },
   );
   flipFlop2 = !flipFlop2;
}

function doPattern4(data: types.wrapper.IWrapBeatmap, time: number) {
   data.addLightColorEventBoxGroups(
      {
         time,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: lightBass,
      },
      {
         time: time + 2.25,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: lightBassShort,
      },
      {
         time: time + 2.5,
         id: WeaveID.DISTANT_TOP,
         boxes: lightBassShort,
      },
      {
         time: time + 3.5,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: lightBassShort,
      },
   );
   data.addLightRotationEventBoxGroups(
      {
         time,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: [
            {
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
            },
         ],
      },
      {
         time,
         id: WeaveID.DISTANT_TOP,
         boxes: [
            {
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
            },
         ],
      },
   );
   for (const id of range(WeaveID.DISTANT_LEFT, WeaveID.DISTANT_RIGHT)) {
      data.addLightRotationEventBoxGroups({
         time,
         id,
         boxes: [
            {
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
            {
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1 },
               events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
               rotationDistribution: -30,
               affectFirst: 1,
            },
            {
               axis: Axis.Y,
               filter: { p0: 2, p1: 1, reverse: 1 },
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 30,
               affectFirst: 1,
            },
         ],
      });
      data.addLightColorEventBoxGroups({
         time: time + 1,
         id,
         boxes: [
            {
               filter: { reverse: id % 2 ? 0 : 1 },
               events: [
                  { color: EventLightColor.WHITE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     easing: EaseType.LINEAR,
                     brightness: 0,
                  },
               ],
               beatDistribution: 1 / 16,
               beatDistributionType: DistributionType.STEP,
            },
         ],
      });
      data.addLightRotationEventBoxGroups(
         {
            time: time + 1,
            id,
            boxes: [
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1 },
                  events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
                  rotationDistribution: -30,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
                  rotationDistribution: 30,
                  affectFirst: 1,
               },
            ],
         },
         {
            time: time + 1.25,
            id,
            boxes: [
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1 },
                  events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
                  rotationDistribution: -40,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [{ rotation: 90, easing: EaseType.OUT_QUAD }],
                  rotationDistribution: 40,
                  affectFirst: 1,
               },
            ],
         },
      );
      for (const tOffset of [2, 3]) {
         data.addLightColorEventBoxGroups({
            time: time + tOffset,
            id,
            boxes: [
               {
                  filter: { reverse: id % 2 ? 0 : 1 },
                  events: [
                     { color: EventLightColor.WHITE },
                     {
                        time: 0.5,
                        color: EventLightColor.WHITE,
                        easing: EaseType.LINEAR,
                        brightness: 0,
                     },
                  ],
                  beatDistribution: 1 / 16,
                  beatDistributionType: DistributionType.STEP,
               },
            ],
         });
         data.addLightRotationEventBoxGroups(
            {
               time: time + tOffset,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: { p0: 2, p1: 1 },
                     events: [{ rotation: 270, easing: EaseType.IN_QUAD }],
                     rotationDistribution: -30,
                     affectFirst: 1,
                  },
                  {
                     axis: Axis.Y,
                     filter: { p0: 2, p1: 1, reverse: 1 },
                     events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
                     rotationDistribution: 30,
                     affectFirst: 1,
                  },
               ],
            },
            {
               time: time + 0.25 + tOffset,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: { p0: 2, p1: 1 },
                     events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
                     rotationDistribution: -40,
                     affectFirst: 1,
                  },
                  {
                     axis: Axis.Y,
                     filter: { p0: 2, p1: 1, reverse: 1 },
                     events: [{ rotation: 90, easing: EaseType.OUT_QUAD }],
                     rotationDistribution: 40,
                     affectFirst: 1,
                  },
               ],
            },
         );
      }
   }
}

function bigbuild(data: types.wrapper.IWrapBeatmap) {
   const buildTime = [342, 346, 350, 662, 666, 670, 798];
   for (const time of buildTime) {
      data.addLightRotationEventBoxGroups(
         {
            time,
            id: WeaveID.DISTANT_TOP,
            boxes: [
               {
                  events: [{ rotation: 270, easing: EaseType.IN_BACK }],
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1 },
                  events: [{ rotation: 270, easing: EaseType.IN_BACK }],
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [{ rotation: 90, easing: EaseType.IN_BACK }],
               },
            ],
         },
         {
            time,
            id: WeaveID.DISTANT_BOTTOM,
            boxes: [
               {
                  events: [{ rotation: 270, easing: EaseType.IN_BACK }],
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1 },
                  events: [{ rotation: 270, easing: EaseType.IN_BACK }],
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [{ rotation: 90, easing: EaseType.IN_BACK }],
               },
            ],
         },
      );
      for (let offset = 0; offset <= 1.5; offset += 1.5) {
         const calcTime = time + offset;
         if (calcTime === 351.5) continue;
         data.addLightColorEventBoxGroups(
            {
               time: calcTime,
               id: WeaveID.DISTANT_TOP,
               boxes: lightBassShort,
            },
            {
               time: calcTime + 0.125,
               id: WeaveID.DISTANT_BOTTOM,
               boxes: lightBassShort,
            },
            {
               time: calcTime + 0.25,
               id: WeaveID.DISTANT_LEFT,
               boxes: lightBass,
            },
            {
               time: calcTime + 0.25,
               id: WeaveID.DISTANT_RIGHT,
               boxes: lightBass,
            },
            {
               time: calcTime + 0.5,
               id: WeaveID.DISTANT_TOP,
               boxes: lightBassShort,
            },
            {
               time: calcTime + 1,
               id: WeaveID.DISTANT_BOTTOM,
               boxes: lightBassShort,
            },
         );
      }
      if (time === 350) continue;
      data.addLightColorEventBoxGroups(
         {
            time: time + 3,
            id: WeaveID.DISTANT_TOP,
            boxes: lightBassShort,
         },
         {
            time: time + 3.125,
            id: WeaveID.DISTANT_BOTTOM,
            boxes: lightBassShort,
         },
         {
            time: time + 3.25,
            id: WeaveID.DISTANT_LEFT,
            boxes: lightBass,
         },
         {
            time: time + 3.25,
            id: WeaveID.DISTANT_RIGHT,
            boxes: lightBass,
         },
         {
            time: time + 3.5,
            id: WeaveID.DISTANT_TOP,
            boxes: lightBassShort,
         },
      );
      for (let i = 0; i < 3; i++) {
         for (let id = 0; id < 4; id++) {
            data.addLightColorEventBoxGroups({
               time: time + i * 1.5,
               id: id + i * 4,
               boxes: [
                  {
                     events: [
                        { time: 0, previous: 1 },
                        {
                           time: 0.125,
                           color: EventLightColor.BLUE,
                           brightness: 2,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 0.7499,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                           brightness: 0,
                        },
                     ],
                     beatDistribution: 1 / 16,
                     beatDistributionType: DistributionType.STEP,
                  },
               ],
            });
            data.addLightRotationEventBoxGroups({
               time: time + i * 1.5,
               id: id + i * 4,
               boxes: [
                  {
                     events: [{ rotation: 135, easing: EaseType.NONE }],
                     flip: 1,
                     rotationDistribution: -45,
                     affectFirst: 1,
                  },
               ],
            });
         }
      }
   }
   for (let i = 0; i < 3; i++) {
      for (let id = 0; id < 4; id++) {
         data.addLightColorEventBoxGroups({
            time: 350 + i * 2,
            id: id + i * 4,
            boxes: [
               {
                  events: [
                     { time: 0, previous: 1 },
                     {
                        time: 0.125,
                        color: EventLightColor.BLUE,
                        brightness: 2,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 0.7499,
                        color: EventLightColor.BLUE,
                        easing: EaseType.LINEAR,
                        brightness: 0,
                     },
                  ],
                  beatDistribution: 1 / 16,
                  beatDistributionType: DistributionType.STEP,
               },
            ],
         });
         data.addLightRotationEventBoxGroups({
            time: 350 + i * 2,
            id: id + i * 4,
            boxes: [
               {
                  events: [{ rotation: 135, easing: EaseType.NONE }],
                  flip: 1,
                  rotationDistribution: -45,
                  affectFirst: 1,
               },
            ],
         });
      }
   }
   data.addLightColorEventBoxGroups(
      {
         time: 351.5,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: lightBassShort,
      },
      {
         time: 352,
         id: WeaveID.DISTANT_TOP,
         boxes: lightBassShort,
      },
      {
         time: 352.125,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: lightBassShort,
      },
      {
         time: 352.25,
         id: WeaveID.DISTANT_LEFT,
         boxes: lightBass,
      },
      {
         time: 352.25,
         id: WeaveID.DISTANT_RIGHT,
         boxes: lightBass,
      },
      {
         time: 352.5,
         id: WeaveID.DISTANT_TOP,
         boxes: lightBassShort,
      },
      {
         time: 353,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: lightBassShort,
      },
      {
         time: 353.5,
         id: WeaveID.DISTANT_TOP,
         boxes: lightBassShort,
      },
   );
   const buildTime2 = [351, 354, 674, 802];
   data.addLightColorEventBoxGroups({
      time: 356.5,
      id: WeaveID.DISTANT_BOTTOM,
      boxes: lightBass,
   });
   for (const time of buildTime2) {
      data.addLightColorEventBoxGroups(
         {
            time: time + 3,
            id: WeaveID.DISTANT_LEFT,
            boxes: lightBass,
         },
         {
            time: time + 3,
            id: WeaveID.DISTANT_RIGHT,
            boxes: lightBass,
         },
      );
      if (time === 351 || time === 354) continue;
      for (let t = time; t < time + 3; t++) {
         data.addLightColorEventBoxGroups(
            {
               time: t,
               id: WeaveID.DISTANT_LEFT,
               boxes: lightBass,
            },
            {
               time: t,
               id: WeaveID.DISTANT_RIGHT,
               boxes: lightBass,
            },
            {
               time: t + 0.125,
               id: WeaveID.DISTANT_BOTTOM,
               boxes: lightBassShort,
            },
            {
               time: t + 0.25,
               id: WeaveID.DISTANT_TOP,
               boxes: lightBassShort,
            },
            {
               time: t + 0.5,
               id: WeaveID.DISTANT_BOTTOM,
               boxes: lightBassShort,
            },
            {
               time: t + 0.75,
               id: WeaveID.DISTANT_TOP,
               boxes: lightBassShort,
            },
         );
      }
   }
   const lightsUp: Partial<types.wrapper.IWrapLightColorEventAttribute>[] = [
      {
         time: 0,
         color: EventLightColor.WHITE,
         brightness: 2,
      },
      {
         time: 0.2499,
         color: EventLightColor.WHITE,
         brightness: 1,
         easing: EaseType.LINEAR,
      },
      {
         time: 0.75,
         color: EventLightColor.WHITE,
         brightness: 1.5,
         easing: EaseType.LINEAR,
      },
      {
         time: 2,
         color: EventLightColor.WHITE,
         brightness: 0,
         easing: EaseType.LINEAR,
      },
      {
         time: 3,
         color: EventLightColor.WHITE,
         brightness: 1,
         easing: EaseType.LINEAR,
      },
      {
         time: 4,
         color: EventLightColor.WHITE,
         brightness: 0,
         easing: EaseType.LINEAR,
      },
   ];
   data.addLightColorEventBoxGroups({
      time: 790,
      id: WeaveID.DISTANT_BOTTOM,
      boxes: [
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 0 },
            events: lightsUp,
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 10, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 0.5;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 1;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 11, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 1.5;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 8, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 2;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 3, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 2.5;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 9, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 3;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 7, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 3;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 2, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 3.5;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 4, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 3.5;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 6, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 4;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 5, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 4;
               return e;
            }),
         },
      ],
   });
   data.addLightColorEventBoxGroups({
      time: 794,
      id: WeaveID.DISTANT_TOP,
      boxes: [
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 0 },
            events: lightsUp,
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 10, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 0.5;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 1;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 11, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 1.5;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 8, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 2;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 3, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 2.5;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 9, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 3;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 7, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 3;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 2, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 3.5;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 4, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 3.5;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 6, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 4;
               return e;
            }),
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 5, p1: 0 },
            events: deepCopy(lightsUp).map((e) => {
               e.time! += 4;
               return e;
            }),
         },
      ],
   });
   for (const id of range(WeaveID.DISTANT_TOP, WeaveID.DISTANT_BOTTOM)) {
      data.addLightRotationEventBoxGroups(
         {
            time: 790,
            id,
            boxes: [
               {
                  axis: Axis.X,
                  events: [{ rotation: 180, easing: EaseType.INOUT_QUAD }],
               },
               {
                  filter: { type: IndexFilterType.DIVISION, p0: 2, p1: 0 },
                  axis: Axis.Y,
                  events: [{ rotation: 225, easing: EaseType.INOUT_QUAD }],
               },
               {
                  filter: { type: IndexFilterType.DIVISION, p0: 2, p1: 1 },
                  axis: Axis.Y,
                  events: [{ rotation: 135, easing: EaseType.INOUT_QUAD }],
               },
            ],
         },
         {
            time: 798 + 7.9999,
            id,
            boxes: [
               {
                  events: [{ rotation: 270, easing: EaseType.BS_INOUT_BACK }],
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1 },
                  events: [{ rotation: 270, easing: EaseType.BS_INOUT_BACK }],
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [{ rotation: 90, easing: EaseType.BS_INOUT_BACK }],
               },
            ],
         },
      );
   }
   for (const id of range(WeaveID.DISTANT_LEFT, WeaveID.DISTANT_RIGHT)) {
      data.addLightRotationEventBoxGroups(
         {
            time: 798,
            id,
            boxes: [
               {
                  filter: { p0: 2, p1: 1 },
                  events: [{ rotation: 90, easing: EaseType.OUT_BACK }],
                  rotationDistribution: 30,
                  affectFirst: 1,
               },
               {
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [{ rotation: 90, easing: EaseType.OUT_BACK }],
                  rotationDistribution: 30,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1 },
                  events: [{ rotation: 270, easing: EaseType.OUT_BACK }],
                  rotationDistribution: -30,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [{ rotation: 90, easing: EaseType.OUT_BACK }],
                  rotationDistribution: 30,
                  affectFirst: 1,
               },
            ],
         },
         {
            time: 801.9999,
            id,
            boxes: [
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1 },
                  events: [{ rotation: 270, easing: EaseType.INOUT_QUAD }],
                  rotationDistribution: -40,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Y,
                  filter: { p0: 2, p1: 1, reverse: 1 },
                  events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  rotationDistribution: 40,
                  affectFirst: 1,
               },
            ],
         },
      );
   }
}
