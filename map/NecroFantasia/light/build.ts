import {
   Axis,
   DistributionType,
   EaseType,
   EventBoxColor,
   IndexFilterType,
   lerp,
   normalize,
   pRandomFn,
   TransitionType,
   types,
   v3,
} from '../../../depsLocal.ts';
import { itNum } from '../../../utility/iterator.ts';
import { WeaveID } from './id.ts';

const buildTime = [294, 614];
const sakuraTime = [310, 630];
const patternTime1 = [1, 1.5, 3.5, 4.5, 5.5, 6.5];
const patternTime2 = [1, 1.5, 5, 6];

const lightSweepBase: Partial<types.wrapper.IWrapLightColorBase>[] = [
   { color: EventBoxColor.BLUE, brightness: 0 },
   {
      time: 0.125,
      color: EventBoxColor.BLUE,
      brightness: 1,
      transition: TransitionType.INTERPOLATE,
   },
   {
      time: 0.375,
      color: EventBoxColor.RED,
      brightness: 1,
      transition: TransitionType.INTERPOLATE,
   },
   {
      time: 0.625,
      color: EventBoxColor.BLUE,
      brightness: 0,
      transition: TransitionType.INTERPOLATE,
   },
];

export default function (data: v3.Difficulty) {
   const pRandom = pRandomFn('Sakura');
   let flipFlop = false;
   for (const time of sakuraTime) {
      for (const id of itNum(WeaveID.SIDE_BOTTOM_LEFT, WeaveID.SIDE_TOP_RIGHT)) {
         data.addLightColorEventBoxGroups(
            {
               time: time - 0.001,
               id,
               boxes: [{ events: [{ brightness: 0, transition: TransitionType.INTERPOLATE }] }],
            },
            {
               time,
               id,
               boxes: [
                  {
                     events: [
                        { brightness: 0 },
                        {
                           time: 0.75,
                           color: EventBoxColor.RED,
                           transition: TransitionType.INTERPOLATE,
                        },
                        {
                           time: 1.5,
                           color: EventBoxColor.BLUE,
                           transition: TransitionType.INTERPOLATE,
                        },
                        {
                           time: 3,
                           color: EventBoxColor.RED,
                           transition: TransitionType.INTERPOLATE,
                           brightness: 0.5,
                        },
                        {
                           time: 5,
                           color: EventBoxColor.BLUE,
                           transition: TransitionType.INTERPOLATE,
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
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 255 }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                     events: [{ rotation: 135 }],
                  },
               ],
            },
            {
               time: time + 7.999,
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 240, easing: EaseType.IN_QUAD }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                     events: [{ rotation: 120, easing: EaseType.IN_QUAD }],
                  },
               ],
            },
         );
      }
      for (const id of itNum(WeaveID.OUTER_BOTTOM_LEFT, WeaveID.INNER_TOP_RIGHT)) {
         data.addLightColorEventBoxGroups(
            {
               time: time - 0.001,
               id,
               boxes: [{ events: [{ brightness: 0, transition: TransitionType.INTERPOLATE }] }],
            },
            {
               time,
               id,
               boxes: [
                  {
                     events: [
                        { brightness: 0 },
                        {
                           time: 0.25,
                           color: EventBoxColor.RED,
                           transition: TransitionType.INTERPOLATE,
                        },
                     ],
                     beatDistribution: 1 / 4,
                     beatDistributionType: DistributionType.STEP,
                  },
               ],
            },
            {
               time: time + 2,
               id,
               boxes: [
                  {
                     filter: { random: 2, seed: pRandom(-999999, 999999, true) },
                     events: [
                        {
                           color: EventBoxColor.BLUE,
                           transition: TransitionType.INTERPOLATE,
                        },
                        {
                           time: 0.5,
                           color: EventBoxColor.RED,
                           transition: TransitionType.INTERPOLATE,
                           brightness: 0.5,
                        },
                        {
                           time: 1.5,
                           color: EventBoxColor.WHITE,
                           transition: TransitionType.INTERPOLATE,
                           brightness: 0.5,
                        },
                        {
                           time: 2.5,
                           color: EventBoxColor.RED,
                           transition: TransitionType.INTERPOLATE,
                           brightness: 0.25,
                        },
                        {
                           time: 3.5,
                           color: EventBoxColor.BLUE,
                           transition: TransitionType.INTERPOLATE,
                           brightness: 0,
                        },
                     ],
                     beatDistribution: 1 / 2,
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
                     filter: { random: 2, seed: pRandom(-999999, 999999, true) },
                     events: [{ rotation: 105 }],
                  },
                  {
                     filter: { random: 2, seed: pRandom(-999999, 999999, true) },
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
                     filter: { random: 2, seed: pRandom(-999999, 999999, true) },
                     events: [
                        { rotation: 110, easing: EaseType.IN_QUAD },
                        { time: 2, rotation: 112, easing: EaseType.OUT_QUAD },
                     ],
                  },
                  {
                     filter: { random: 2, seed: pRandom(-999999, 999999, true) },
                     events: [
                        { rotation: 90, easing: EaseType.IN_QUAD },
                        { time: 2, rotation: 87, easing: EaseType.OUT_QUAD },
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
      for (const id of itNum(WeaveID.INNER_TOP_LEFT, WeaveID.INNER_TOP_RIGHT)) {
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
               time: time + 15,
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
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 35,
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
         );
         data.addLightRotationEventBoxGroups(
            {
               time,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 270 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 105, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
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
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 270 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
         );
      }
      for (const id of itNum(WeaveID.INNER_BOTTOM_LEFT, WeaveID.INNER_BOTTOM_RIGHT)) {
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
                     events: lightSweepBase,
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 6,
                  },
               ],
            },
            {
               time: time + 11,
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
               time: time + 15,
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
               time: time + 43,
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
               time: time + 47,
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
         );
         data.addLightRotationEventBoxGroups(
            {
               time: time + 8,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 270 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 105, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
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
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 270 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
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
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 270 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 105, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
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
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 270 }],
                  },
                  {
                     axis: Axis.Y,
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                     events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
         );
      }
   }
}