import {
   Axis,
   Beatmap,
   DistributionType,
   EaseType,
   EventLightColor,
   IndexFilterType,
   pRandomFn,
   RandomType,
   range as rangeEx,
   types,
} from '@bsmap';
import { WeaveID } from './id.ts';
function range(start: number, end?: number, step?: number): number[] {
   return rangeEx(start, end!, step!, true);
}

const buildTime = [294, 614];
const sakuraTime = [310, 630];
const burstTime = [674, 802];
const patternTime1 = [
   1,
   1.5,
   3.5,
   4.5,
   5.5,
   6.5,
   33,
   33.5,
   37,
   37.5,
   41,
   41.5,
   43.5,
   44,
];
const patternTime2 = [1, 1.5, 5, 6, 33, 33.5, 36.5, 37];

const lightSweepBase: Partial<types.wrapper.IWrapLightColorEvent>[] = [
   { color: EventLightColor.BLUE, brightness: 0 },
   {
      time: 0.125,
      color: EventLightColor.BLUE,
      brightness: 1,
      easing: EaseType.LINEAR,
   },
   {
      time: 0.375,
      color: EventLightColor.RED,
      brightness: 1,
      easing: EaseType.LINEAR,
   },
   {
      time: 0.625,
      color: EventLightColor.BLUE,
      brightness: 0,
      easing: EaseType.LINEAR,
   },
];

export default function (data: Beatmap) {
   const pRandom = pRandomFn('Sakura');
   let flipFlop = false;
   for (const time of sakuraTime) {
      for (
         const id of range(
            WeaveID.SIDE_BOTTOM_LEFT,
            WeaveID.SIDE_TOP_RIGHT,
         )
      ) {
         data.addLightColorEventBoxGroups(
            {
               time: time - 0.125,
               id,
               boxes: [
                  {
                     events: [
                        {
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time,
               id,
               boxes: [
                  {
                     filter: {
                        random: RandomType.RANDOM_ELEMENTS,
                        seed: pRandom(-999999, 999999, true),
                     },
                     events: [
                        { brightness: 0 },
                        {
                           time: 0.75,
                           color: EventLightColor.RED,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.5,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 3,
                           color: EventLightColor.RED,
                           easing: EaseType.LINEAR,
                           brightness: 0.5,
                        },
                        {
                           time: 5,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                           brightness: 0,
                        },
                     ],
                     beatDistribution: 1 / 3,
                     beatDistributionType: DistributionType.STEP,
                  },
               ],
            },
         );
         data.addLightRotationEventBoxGroups(
            {
               time: time - 0.001,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     events: [{ previous: 1 }],
                  },
                  {
                     events: [{ previous: 1 }],
                  },
               ],
            },
            {
               time,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 255 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 135 }],
                  },
               ],
            },
            {
               time: time + 7.999,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 240, easing: EaseType.IN_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 120, easing: EaseType.IN_QUAD }],
                  },
               ],
            },
         );
      }
      for (
         const id of range(
            WeaveID.OUTER_BOTTOM_LEFT,
            WeaveID.OUTER_TOP_RIGHT,
         )
      ) {
         data.addLightColorEventBoxGroups(
            {
               time: time - 0.001,
               id,
               boxes: [
                  {
                     events: [
                        {
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time,
               id,
               boxes: [
                  {
                     filter: {
                        random: RandomType.RANDOM_ELEMENTS,
                        seed: pRandom(-999999, 999999, true),
                     },
                     events: [
                        { brightness: 0 },
                        {
                           time: 0.75,
                           color: EventLightColor.RED,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.5,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 3,
                           color: EventLightColor.RED,
                           easing: EaseType.LINEAR,
                           brightness: 0.5,
                        },
                        {
                           time: 5,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                           brightness: 0,
                        },
                     ],
                     beatDistribution: 1 / 3,
                     beatDistributionType: DistributionType.STEP,
                  },
               ],
            },
         );
         data.addLightRotationEventBoxGroups(
            {
               time: time - 0.001,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     events: [{ previous: 1 }],
                  },
                  {
                     events: [{ previous: 1 }],
                  },
               ],
            },
            {
               time,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: {
                        random: 2,
                        seed: pRandom(-999999, 999999, true),
                     },
                     events: [{ rotation: 105 }],
                  },
                  {
                     filter: {
                        random: 2,
                        seed: pRandom(-999999, 999999, true),
                     },
                     events: [{ rotation: 100 }],
                  },
               ],
            },
            {
               time: time + 7.999,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: {
                        random: 2,
                        seed: pRandom(-999999, 999999, true),
                     },
                     events: [
                        { rotation: 110, easing: EaseType.IN_QUAD },
                        { time: 2, rotation: 112, easing: EaseType.OUT_QUAD },
                     ],
                  },
                  {
                     filter: {
                        random: 2,
                        seed: pRandom(-999999, 999999, true),
                     },
                     events: [
                        { rotation: 90, easing: EaseType.IN_QUAD },
                        { time: 2, rotation: 87, easing: EaseType.OUT_QUAD },
                     ],
                  },
               ],
            },
         );
      }
      for (
         const id of range(
            WeaveID.INNER_BOTTOM_LEFT,
            WeaveID.INNER_TOP_RIGHT,
         )
      ) {
         data.addLightColorEventBoxGroups(
            {
               time: time - 0.001,
               id,
               boxes: [
                  {
                     events: [
                        {
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time,
               id,
               boxes: [
                  {
                     filter: {
                        random: RandomType.RANDOM_ELEMENTS,
                        seed: pRandom(-999999, 999999, true),
                     },
                     events: [
                        { brightness: 0 },
                        {
                           time: 0.75,
                           color: EventLightColor.RED,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.5,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 3,
                           color: EventLightColor.RED,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 4.5,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                           brightness: 0.75,
                        },
                        {
                           time: 6,
                           color: EventLightColor.RED,
                           easing: EaseType.LINEAR,
                           brightness: 0.75,
                        },
                     ],
                     beatDistribution: 1 / 3,
                     beatDistributionType: DistributionType.STEP,
                  },
               ],
            },
            {
               time: time + 7,
               id,
               boxes: [
                  {
                     events: [
                        { color: EventLightColor.WHITE, brightness: 2 },
                        {
                           time: 1 / 12,
                           brightness: 0,
                        },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 12,
                  },
               ],
            },
            {
               time: time + 8,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: [
                        { color: EventLightColor.WHITE, brightness: 2 },
                        {
                           time: 1,
                           color: EventLightColor.RED,
                           brightness: 1,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.5,
                           color: EventLightColor.BLUE,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 16,
                  },
               ],
            },
            {
               time: time + 9.5,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: [
                        { color: EventLightColor.WHITE, brightness: 2 },
                        {
                           time: 1,
                           color: EventLightColor.RED,
                           brightness: 1,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.5,
                           color: EventLightColor.BLUE,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 16,
                  },
               ],
            },
            {
               time: time + 11,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: [
                        { color: EventLightColor.WHITE, brightness: 2 },
                        {
                           time: 1 / 12,
                           brightness: 0,
                        },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 12,
                  },
               ],
            },
            {
               time: time + 12,
               id,
               boxes: [
                  {
                     events: [
                        { color: EventLightColor.WHITE, brightness: 2 },
                        {
                           time: 1,
                           color: EventLightColor.RED,
                           brightness: 1,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.5,
                           color: EventLightColor.BLUE,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 16,
                  },
               ],
            },
            {
               time: time + 13.5,
               id,
               boxes: [
                  {
                     events: [
                        { color: EventLightColor.WHITE, brightness: 2 },
                        {
                           time: 1,
                           color: EventLightColor.RED,
                           brightness: 1,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 2,
                           color: EventLightColor.BLUE,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 16,
                  },
               ],
            },
         );
         data.addLightRotationEventBoxGroups(
            {
               time: time - 0.001,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     events: [{ previous: 1 }],
                  },
                  {
                     events: [{ previous: 1 }],
                  },
               ],
            },
            {
               time,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: {
                        random: 2,
                        seed: pRandom(-999999, 999999, true),
                     },
                     events: [{ rotation: 105 }],
                  },
                  {
                     filter: {
                        random: 2,
                        seed: pRandom(-999999, 999999, true),
                     },
                     events: [{ rotation: 100 }],
                  },
               ],
            },
            {
               time: time + 6.999,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: {
                        random: 2,
                        seed: pRandom(-999999, 999999, true),
                     },
                     events: [
                        { rotation: 110, easing: EaseType.IN_QUAD },
                        { time: 2, rotation: 112, easing: EaseType.OUT_QUAD },
                     ],
                  },
                  {
                     filter: {
                        random: 2,
                        seed: pRandom(-999999, 999999, true),
                     },
                     events: [
                        { rotation: 90, easing: EaseType.IN_QUAD },
                        { time: 2, rotation: 87, easing: EaseType.OUT_QUAD },
                     ],
                  },
               ],
            },
            {
               time: time + 7,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     events: [
                        { easing: EaseType.NONE },
                        { time: 0.125, easing: EaseType.NONE },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 12,
                  },
                  {
                     events: [
                        { easing: EaseType.NONE },
                        { time: 0.125, easing: EaseType.NONE },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 12,
                  },
               ],
            },
            {
               time: time + 8,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     events: [
                        { easing: EaseType.NONE },
                        { time: 3.5, easing: EaseType.NONE },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [
                        { rotation: -90, easing: EaseType.NONE },
                        { time: 2.999, rotation: -90, easing: EaseType.NONE },
                     ],
                     rotationDistribution: -90,
                     affectFirst: 1,
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [
                        { rotation: -90, easing: EaseType.NONE },
                        { time: 2.999, rotation: -90, easing: EaseType.NONE },
                     ],
                  },
               ],
            },
            {
               time: time + 11,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     axis: Axis.Y,
                     events: [
                        { easing: EaseType.NONE },
                        { time: 0.125, easing: EaseType.NONE },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 12,
                  },
                  {
                     filter: { reverse: 1 },
                     events: [
                        { easing: EaseType.NONE },
                        { time: 0.125, easing: EaseType.NONE },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 12,
                  },
               ],
            },
            {
               time: time + 12,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     events: [
                        { easing: EaseType.NONE },
                        { time: 3.5, easing: EaseType.NONE },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                        reverse: 1,
                     },
                     events: [
                        { rotation: 270, easing: EaseType.NONE },
                        { time: 3.5, rotation: 270, easing: EaseType.NONE },
                     ],
                     rotationDistribution: -45,
                     affectFirst: 1,
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                        reverse: 1,
                     },
                     events: [
                        { rotation: 180, easing: EaseType.NONE },
                        { time: 3.5, rotation: 180, easing: EaseType.NONE },
                     ],
                  },
               ],
            },
         );
      }
   }
   for (const time of buildTime) {
      for (const offsetTime of patternTime1) {
         data.addLightColorEventBoxGroups({
            time: time + offsetTime,
            id: flipFlop ? WeaveID.INNER_TOP_RIGHT : WeaveID.INNER_TOP_LEFT,
            boxes: [
               {
                  events: lightSweepBase,
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1 / 8,
               },
            ],
         });
         flipFlop = !flipFlop;
      }
      for (const offsetTime of patternTime2) {
         data.addLightColorEventBoxGroups({
            time: 8 + time + offsetTime,
            id: flipFlop ? WeaveID.INNER_BOTTOM_RIGHT : WeaveID.INNER_BOTTOM_LEFT,
            boxes: [
               {
                  filter: { reverse: 1 },
                  events: lightSweepBase,
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1 / 8,
               },
            ],
         });
         flipFlop = !flipFlop;
      }
      for (const id of range(WeaveID.INNER_TOP_LEFT, WeaveID.INNER_TOP_RIGHT)) {
         data.addLightColorEventBoxGroups(
            {
               time,
               id,
               boxes: [
                  {
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 2.5,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 10.5,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 12,
               id,
               boxes: [
                  {
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 15,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                  },
               ],
            },
            {
               time: time + 32,
               id,
               boxes: [
                  {
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 34.5,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 35.5,
               id,
               boxes: [
                  {
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 36,
               id,
               boxes: [
                  {
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 38.5,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 39,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 40,
               id,
               boxes: [
                  {
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 43.5,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 46.5,
               id,
               boxes: [
                  {
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                  },
               ],
            },
         );
         data.addLightRotationEventBoxGroups(
            {
               time,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 180 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 120, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
            {
               time: time + 15.998,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 180 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 105, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
            {
               time: time + 32,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 180 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 120, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
            {
               time: time + 47.998,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 180 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 105, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
         );
      }
      for (
         const id of range(
            WeaveID.INNER_BOTTOM_LEFT,
            WeaveID.INNER_BOTTOM_RIGHT,
         )
      ) {
         data.addLightColorEventBoxGroups(
            {
               time: time + 8,
               id,
               boxes: [
                  {
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 10.5,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 11.5,
               id,
               boxes: [
                  {
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 15,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                  },
               ],
            },
            {
               time: time + 40,
               id,
               boxes: [
                  {
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 42.5,
               id,
               boxes: [
                  {
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 43.5,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 44,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 46.5,
               id,
               boxes: [
                  {
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                  },
               ],
            },
         );
         data.addLightRotationEventBoxGroups(
            {
               time: time + 8,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 180 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 105, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
            {
               time: time + 15.998,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 180 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 105, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
            {
               time: time + 32,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 180 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 120, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
            {
               time: time + 47.999,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 180 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 105, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
         );
      }
   }
   const burstIDOrder = [
      WeaveID.SIDE_TOP_LEFT,
      WeaveID.SIDE_BOTTOM_LEFT,
      WeaveID.SIDE_BOTTOM_RIGHT,
      WeaveID.SIDE_TOP_RIGHT,
      WeaveID.OUTER_TOP_LEFT,
      WeaveID.OUTER_BOTTOM_LEFT,
      WeaveID.OUTER_BOTTOM_RIGHT,
      WeaveID.OUTER_TOP_RIGHT,
      WeaveID.INNER_TOP_LEFT,
      WeaveID.INNER_BOTTOM_LEFT,
      WeaveID.INNER_BOTTOM_RIGHT,
      WeaveID.INNER_TOP_RIGHT,
   ];
   for (const time of burstTime) {
      let offset = 0;
      for (const id of burstIDOrder) {
         data.addLightColorEventBoxGroups(
            {
               time: time + offset,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1.25,
                     events: [
                        { color: EventLightColor.WHITE, brightness: 4 },
                        {
                           time: 0.25,
                           color: EventLightColor.RED,
                           brightness: 2,
                        },
                        {
                           time: 1,
                           color: EventLightColor.BLUE,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time: time + 3,
               id,
               boxes: [
                  {
                     beatDistribution: 0.5,
                     events: [
                        { color: EventLightColor.WHITE, brightness: 2 },
                        {
                           time: 0.125,
                           color: EventLightColor.WHITE,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
         );
         data.addLightRotationEventBoxGroups(
            {
               time: time + offset,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                        reverse: 1,
                     },
                     beatDistribution: 0.25,
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                        reverse: 1,
                     },
                     beatDistribution: 0.25,
                     events: [{ rotation: 180, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                        reverse: 1,
                     },
                     beatDistribution: 0.25,
                     events: [{ rotation: 0, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 4,
                        reverse: 1,
                     },
                     beatDistribution: 0.25,
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 3,
                        p1: 4,
                        reverse: 1,
                     },
                     beatDistribution: 0.25,
                     events: [{ rotation: 270, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
            {
               time: time + 3.5,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                        reverse: 1,
                     },
                     beatDistribution: 0.25,
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                        reverse: 1,
                     },
                     beatDistribution: 0.25,
                     events: [{ rotation: 180, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                        reverse: 1,
                     },
                     beatDistribution: 0.25,
                     events: [{ rotation: 0, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 4,
                        reverse: 1,
                     },
                     beatDistribution: 0.25,
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     axis: Axis.Y,
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 3,
                        p1: 4,
                        reverse: 1,
                     },
                     beatDistribution: 0.25,
                     events: [{ rotation: 270, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
            {
               time: time + 3.999,
               id,
               boxes: [
                  { events: [{ easing: EaseType.NONE }] },
                  { axis: Axis.Y, events: [{ easing: EaseType.NONE }] },
               ],
            },
         );
         offset += 0.25;
      }
   }
}
