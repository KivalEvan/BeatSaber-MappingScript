import {
   Axis,
   deepCopy,
   DistributionType,
   EaseType,
   EventBoxColor,
   IndexFilterType,
   TransitionType,
   types,
   v3,
} from '../../../depsLocal.ts';
import { itNum } from '../../../utility/iterator.ts';
import { WeaveID } from './id.ts';

type Pattern = { bass: number[]; kick: number[] };

const pattern1: Pattern = { bass: [0, 2.5], kick: [1, 3] };
const pattern2: Pattern = { bass: [0, 0.5, 2.5], kick: [1, 1.5, 3] };
const pattern3: Pattern = { bass: [0, 2, 2.5, 3.5], kick: [1, 1.5, 3] };
const pattern4: Pattern = { bass: [0, 3.5], kick: [1, 2, 2.25, 2.5, 3] };
const timeStart = 102;
const timeEnd = 990 - 1;
const timeInterval = 4;
const timeSkip = [130, 222, 226, 342, 346, 350, 354, 542, 546, 662, 666, 670, 674].concat(
   ...itNum(678, 806, 4),
);
const timePattern2 = [162, 242, 306, 370, 434, 514, 562, 602, 626, 818, 882, 962];
const timePattern3 = [194];
const timePattern4 = [258, 290, 322, 386, 450, 578, 610, 642, 834, 898];

const lightBaseBass: Partial<types.wrapper.IWrapLightColorBase>[] = [
   { transition: TransitionType.EXTEND },
   {
      time: 0.125,
      color: EventBoxColor.WHITE,
      transition: TransitionType.INTERPOLATE,
   },
   {
      time: 0.5,
      color: EventBoxColor.WHITE,
      transition: TransitionType.INTERPOLATE,
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
const lightBaseBassShort: Partial<types.wrapper.IWrapLightColorBase>[] = [
   { transition: TransitionType.EXTEND },
   {
      time: 0.0625,
      color: EventBoxColor.WHITE,
      transition: TransitionType.INTERPOLATE,
   },
   {
      time: 0.375,
      color: EventBoxColor.WHITE,
      transition: TransitionType.INTERPOLATE,
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
         { transition: TransitionType.EXTEND },
         {
            time: 0.125,
            color: EventBoxColor.WHITE,
            transition: TransitionType.INTERPOLATE,
         },
         {
            time: 0.375,
            color: EventBoxColor.WHITE,
            transition: TransitionType.INTERPOLATE,
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
         { color: EventBoxColor.WHITE },
         {
            time: 0.5,
            color: EventBoxColor.WHITE,
            transition: TransitionType.INTERPOLATE,
            brightness: 0,
         },
      ],
      beatDistribution: 1 / 16,
      beatDistributionType: DistributionType.STEP,
   },
];

export default function (data: v3.Difficulty) {
   for (const time of itNum(timeStart, timeEnd, timeInterval)) {
      if (timeSkip.includes(time)) continue;
      if (timePattern2.includes(time)) doPattern2(data, time);
      else if (timePattern3.includes(time)) doPattern3(data, time);
      else if (timePattern4.includes(time)) doPattern4(data, time);
      else doPattern1(data, time);
   }
   for (const time of itNum(742, 790, 8)) {
      for (const id of itNum(WeaveID.DISTANT_LEFT, WeaveID.DISTANT_RIGHT)) {
         data.addLightColorEventBoxGroups(
            {
               time,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        reverse: id % 2 ? 0 : 1,
                     },
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 0 },
                        {
                           time: 0.5,
                           color: EventBoxColor.WHITE,
                           transition: TransitionType.INTERPOLATE,
                        },
                        {
                           time: 2,
                           color: EventBoxColor.WHITE,
                           brightness: 0,
                           transition: TransitionType.INTERPOLATE,
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
                        reverse: id % 2 ? 0 : 1,
                     },
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 0 },
                        {
                           time: 0.5,
                           color: EventBoxColor.WHITE,
                           transition: TransitionType.INTERPOLATE,
                        },
                        {
                           time: 2,
                           color: EventBoxColor.WHITE,
                           brightness: 0,
                           transition: TransitionType.INTERPOLATE,
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

function doPattern1(data: v3.Difficulty, time: number) {
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
   for (const id of itNum(WeaveID.DISTANT_LEFT, WeaveID.DISTANT_RIGHT)) {
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
                     { color: EventBoxColor.WHITE },
                     {
                        time: 0.5,
                        color: EventBoxColor.WHITE,
                        transition: TransitionType.INTERPOLATE,
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
function doPattern2(data: v3.Difficulty, time: number) {
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
   for (const id of itNum(WeaveID.DISTANT_LEFT, WeaveID.DISTANT_RIGHT)) {
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
                  { color: EventBoxColor.WHITE },
                  {
                     time: 0.5,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
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
                  { color: EventBoxColor.WHITE },
                  {
                     time: 0.5,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
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

function doPattern3(data: v3.Difficulty, time: number) {
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
   for (const id of itNum(WeaveID.DISTANT_LEFT, WeaveID.DISTANT_RIGHT)) {
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
                  { color: EventBoxColor.WHITE },
                  {
                     time: 0.5,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
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
                  { color: EventBoxColor.WHITE },
                  {
                     time: 0.5,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
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

function doPattern4(data: v3.Difficulty, time: number) {
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
   for (const id of itNum(WeaveID.DISTANT_LEFT, WeaveID.DISTANT_RIGHT)) {
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
                  { color: EventBoxColor.WHITE },
                  {
                     time: 0.5,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
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
                     { color: EventBoxColor.WHITE },
                     {
                        time: 0.5,
                        color: EventBoxColor.WHITE,
                        transition: TransitionType.INTERPOLATE,
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
