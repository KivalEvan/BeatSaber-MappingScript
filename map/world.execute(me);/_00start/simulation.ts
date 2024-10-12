import {
   Axis,
   DistributionType,
   EaseType,
   EventBoxColor,
   EventLightValue,
   LightRotationDirection,
   RandomType,
   TransitionType,
   v3,
} from '../../../depsLocal.ts';
import {
   Brightness,
   FILTER_HALF_1_STEP,
   FILTER_HALF_2_STEP,
   FILTER_QUARTET_1_DIV,
   FILTER_QUARTET_2_DIV,
   FILTER_QUARTET_3_DIV,
   FILTER_QUARTET_4_DIV,
   FILTER_TRIPLET_1_STEP,
   FILTER_TRIPLET_2_STEP,
   FILTER_TRIPLET_3_STEP,
   FILTER_TWELVE_10_STEP,
   FILTER_TWELVE_11_STEP,
   FILTER_TWELVE_12_STEP,
   FILTER_TWELVE_1_STEP,
   FILTER_TWELVE_2_STEP,
   FILTER_TWELVE_3_STEP,
   FILTER_TWELVE_4_STEP,
   FILTER_TWELVE_5_STEP,
   FILTER_TWELVE_6_STEP,
   FILTER_TWELVE_7_STEP,
   FILTER_TWELVE_8_STEP,
   FILTER_TWELVE_9_STEP,
   Group,
   SMALL_RINGS_DRUM_INNER,
   SMALL_RINGS_DRUM_OUTER,
} from '../_common.ts';
import { generateSeed, objectTimeScale } from '../_helpers.ts';
import { START_TIME } from './_time.ts';

export default function (data: types.wrapper.IWrapBeatmap) {
   data.addColorBoostEvents(
      { time: START_TIME + 30, toggle: true },
      { time: START_TIME + 32, toggle: false },
   );
   for (let repeat = 24; repeat <= 29; repeat++) {
      data.addLightColorEventBoxGroups({
         time: START_TIME + repeat,
         id: Group.SMALL_RINGS_C,
         boxes: [
            {
               filter: FILTER_QUARTET_1_DIV,
               beatDistribution: 0.03125,
               beatDistributionType: DistributionType.STEP,
               events: SMALL_RINGS_DRUM_OUTER,
            },
            {
               filter: FILTER_QUARTET_2_DIV,
               beatDistribution: 0.03125,
               beatDistributionType: DistributionType.STEP,
               events: SMALL_RINGS_DRUM_OUTER,
            },
            {
               filter: FILTER_QUARTET_3_DIV,
               beatDistribution: 0.03125,
               beatDistributionType: DistributionType.STEP,
               events: SMALL_RINGS_DRUM_INNER,
            },
            {
               filter: FILTER_QUARTET_4_DIV,
               beatDistribution: 0.03125,
               beatDistributionType: DistributionType.STEP,
               events: SMALL_RINGS_DRUM_INNER,
            },
         ],
      });
   }
   data.addBasicEvents(
      {
         time: START_TIME + 29.875,
         type: 4,
         value: EventLightValue.WHITE_ON,
         floatValue: Brightness.OFF,
      },
      {
         time: START_TIME + 32,
         type: 4,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: Brightness.OFF,
      },
   );
   data.addLightColorEventBoxGroups({
      time: START_TIME + 30,
      id: Group.SMALL_RINGS_C,
      boxes: [
         {
            filter: FILTER_QUARTET_1_DIV,
            beatDistribution: 0.03125,
            beatDistributionType: DistributionType.STEP,
            events: [{ brightness: 0, easing: EaseType.LINEAR }],
         },
         {
            filter: FILTER_QUARTET_2_DIV,
            beatDistribution: 0.03125,
            beatDistributionType: DistributionType.STEP,
            events: [{ brightness: 0, easing: EaseType.LINEAR }],
         },
      ],
   });
   for (let repeat = 30; repeat <= 31.5; repeat += 0.5) {
      data.addBasicEvents(
         {
            time: START_TIME + repeat,
            type: 4,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: Brightness.MODERATE,
         },
         {
            time: START_TIME + repeat + 7 / 16,
            type: 4,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: Brightness.DIM,
         },
      );
   }
   data.addLightRotationEventBoxGroups(
      {
         time: START_TIME + 24,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               beatDistribution: 0.015625,
               beatDistributionType: DistributionType.STEP,
               events: [{ rotation: 90, easing: EaseType.IN_QUAD }],
               rotationDistribution: 15,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 24.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               beatDistribution: 0.015625,
               beatDistributionType: DistributionType.STEP,
               events: [{ rotation: 120, easing: EaseType.OUT_QUAD }],
               rotationDistribution: 30,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 25.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               beatDistribution: 0.015625,
               beatDistributionType: DistributionType.STEP,
               events: [{ rotation: 315, easing: EaseType.INOUT_QUAD }],
               rotationDistribution: 90,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 27,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               beatDistribution: 0.015625,
               beatDistributionType: DistributionType.STEP,
               events: [{ rotation: 60, easing: EaseType.INOUT_QUAD }],
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 0.015625,
               beatDistributionType: DistributionType.STEP,
               events: [{ rotation: 300, easing: EaseType.INOUT_QUAD }],
            },
         ],
      },
      {
         time: START_TIME + 28,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               beatDistribution: 0.499,
               events: [{ rotation: 120, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 0.499,
               events: [{ rotation: 240, easing: EaseType.IN_QUAD }],
            },
         ],
      },
      {
         time: START_TIME + 28.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               beatDistribution: 0.499,
               events: [{ rotation: 105, easing: EaseType.OUT_QUAD }],
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 0.499,
               events: [{ rotation: 255, easing: EaseType.OUT_QUAD }],
            },
         ],
      },
      {
         time: START_TIME + 29,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               beatDistribution: 0.499,
               events: [{ rotation: 135, easing: EaseType.IN_QUAD }],
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 0.499,
               events: [{ rotation: 225, easing: EaseType.IN_QUAD }],
            },
         ],
      },
      {
         time: START_TIME + 29.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               beatDistribution: 0.499,
               events: [{ rotation: 105, easing: EaseType.OUT_QUAD }],
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 0.499,
               events: [{ rotation: 255, easing: EaseType.OUT_QUAD }],
            },
         ],
      },
      {
         time: START_TIME + 30,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               filter: {
                  random: 2,
                  seed: generateSeed(),
               },
               axis: Axis.Z,
               beatDistribution: 1,
               events: [{ easing: EaseType.INOUT_QUAD }],
               rotationDistribution: 180,
               affectFirst: 1,
            },
         ],
      },
   );
   data.addLightTranslationEventBoxGroups(
      {
         time: START_TIME + 24,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               beatDistribution: 0.015625,
               beatDistributionType: DistributionType.STEP,
               events: [{ translation: -1, easing: EaseType.IN_QUAD }],
               gapDistribution: 0.01,
               gapDistributionType: DistributionType.STEP,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 25,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               beatDistribution: 0.015625,
               beatDistributionType: DistributionType.STEP,
               events: [{ translation: -1.5, easing: EaseType.IN_QUAD }],
               gapDistribution: 0.02,
               gapDistributionType: DistributionType.STEP,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 25.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [{ previous: 1 }],
               gapDistribution: 0.02,
               gapDistributionType: DistributionType.STEP,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 26.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               beatDistribution: 0.015625,
               beatDistributionType: DistributionType.STEP,
               events: [{ translation: -1.5, easing: EaseType.INOUT_QUAD }],
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 27.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               beatDistribution: 0.015625,
               beatDistributionType: DistributionType.STEP,
               events: [{ translation: -0.5, easing: EaseType.INOUT_QUAD }],
               gapDistribution: 0.02,
               gapDistributionType: DistributionType.STEP,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 29.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               beatDistribution: 0.499,
               events: [{ translation: -2 }],
               gapDistribution: 2,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 30,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               beatDistribution: 1,
               events: [{ translation: 0, easing: EaseType.INOUT_QUAD }],
               gapDistribution: 0.75,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
   );

   // ring
   data.addLightColorEventBoxGroups({
      time: START_TIME + 30,
      id: Group.BIG_RINGS,
      boxes: [
         {
            filter: { chunks: 4 },
            beatDistribution: 0.5,
            beatDistributionType: DistributionType.STEP,
            events: [
               { color: EventBoxColor.WHITE, brightness: Brightness.MODERATE },
               {
                  time: 0.25,
                  previous: 1,
               },
               {
                  time: 1,
                  color: EventBoxColor.WHITE,
                  brightness: Brightness.OFF,
                  easing: EaseType.LINEAR,
                  frequency: 8,
               },
            ],
         },
      ],
   });
   data.addLightRotationEventBoxGroups(
      {
         time: START_TIME + 30,
         id: Group.BIG_RINGS,
         boxes: [
            {
               filter: FILTER_HALF_1_STEP,
               axis: Axis.Z,
               events: [{ rotation: 7.5, easing: EaseType.NONE }],
            },
            {
               filter: FILTER_HALF_2_STEP,
               axis: Axis.Z,
               events: [{ rotation: 352.5, easing: EaseType.NONE }],
            },
         ],
      },
      {
         time: START_TIME + 31,
         id: Group.BIG_RINGS,
         boxes: [
            {
               filter: FILTER_HALF_1_STEP,
               beatDistribution: 0.999,
               axis: Axis.Z,
               events: [{ previous: 1 }, { time: 0.5, rotation: 15, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 0.999,
               axis: Axis.Z,
               events: [{ previous: 1 }, { time: 0.5, rotation: 345, easing: EaseType.OUT_QUAD }],
            },
         ],
      },
      {
         time: START_TIME + 32,
         id: Group.BIG_RINGS,
         boxes: [
            {
               filter: FILTER_HALF_1_STEP,
               axis: Axis.Z,
               events: [{ previous: 1 }],
            },
            {
               filter: FILTER_HALF_2_STEP,
               axis: Axis.Z,
               events: [{ previous: 1 }],
            },
         ],
      },
   );
   data.addLightTranslationEventBoxGroups(
      {
         time: START_TIME + 30,
         id: Group.BIG_RINGS,
         boxes: [
            {
               filter: FILTER_HALF_1_STEP,
               axis: Axis.Z,
               events: [{ easing: EaseType.NONE }],
               gapDistribution: 0.1,
               gapDistributionType: DistributionType.STEP,
               affectFirst: 1,
               flip: 1,
            },
            {
               filter: FILTER_HALF_2_STEP,
               axis: Axis.Z,
               events: [{ translation: 0.8, easing: EaseType.NONE }],
               gapDistribution: 0.1,
               gapDistributionType: DistributionType.STEP,
               affectFirst: 1,
               flip: 1,
            },
         ],
      },
      {
         time: START_TIME + 31,
         id: Group.BIG_RINGS,
         boxes: [
            {
               filter: FILTER_HALF_1_STEP,
               beatDistribution: 0.999,
               axis: Axis.Z,
               events: [{ translation: 0.8, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 0.999,
               axis: Axis.Z,
               events: [{ easing: EaseType.OUT_QUAD }],
            },
         ],
      },
      {
         time: START_TIME + 32,
         id: Group.BIG_RINGS,
         boxes: [
            {
               filter: FILTER_HALF_1_STEP,
               axis: Axis.Z,
               events: [{ easing: EaseType.IN_QUAD }],
               gapDistribution: 0.1,
               gapDistributionType: DistributionType.STEP,
               affectFirst: 1,
               flip: 1,
            },
            {
               filter: FILTER_HALF_2_STEP,
               axis: Axis.Z,
               events: [{ translation: 0.8, easing: EaseType.IN_QUAD }],
               gapDistribution: 0.1,
               gapDistributionType: DistributionType.STEP,
               affectFirst: 1,
               flip: 1,
            },
         ],
      },
   );
}
