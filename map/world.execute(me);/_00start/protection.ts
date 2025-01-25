import {
   Axis,
   deepCopy,
   DistributionType,
   EaseType,
   EventLightColor,
   EventLightValue,
   LightRotationDirection,
   TransitionType,
   types,
   v3,
} from '@bsmap';
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
   Group,
   SMALL_RINGS_DRUM_INNER,
   SMALL_RINGS_DRUM_OUTER,
} from '../_common.ts';
import { objectTimeScale, objectTimeShift } from '../_helpers.ts';
import { START_TIME } from './_time.ts';

export default function (data: types.wrapper.IWrapBeatmap) {
   data.addColorBoostEvents(
      { time: START_TIME + 6.5, toggle: true },
      { time: START_TIME + 8, toggle: false },
   );
   data.addLightColorEventBoxGroups({
      time: START_TIME - 0.5,
      id: Group.SMALL_RINGS_C,
      boxes: [
         {
            filter: FILTER_QUARTET_1_DIV,
            beatDistribution: 0.499,
            events: [{ color: EventLightColor.WHITE, brightness: 0.2 }],
            brightnessDistribution: 1,
            affectFirst: 1,
         },
         {
            filter: FILTER_QUARTET_2_DIV,
            beatDistribution: 0.499,
            events: [{ color: EventLightColor.WHITE, brightness: 0.2 }],
            brightnessDistribution: 1,
            affectFirst: 1,
         },
      ],
   });
   for (let repeat = 0; repeat <= 6; repeat++) {
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
         time: START_TIME + 6.375,
         type: 4,
         value: EventLightValue.WHITE_ON,
         floatValue: Brightness.OFF,
      },
      {
         time: START_TIME + 8,
         type: 4,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: Brightness.OFF,
      },
   );
   for (let repeat = 6.5; repeat <= 7.5; repeat += 0.5) {
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
      data.addLightColorEventBoxGroups({
         time: START_TIME + repeat,
         id: Group.SMALL_RINGS_C,
         boxes: [
            {
               filter: FILTER_QUARTET_1_DIV.clone().setChunks(32),
               beatDistribution: 0.03125,
               beatDistributionType: DistributionType.STEP,
               events: objectTimeScale(deepCopy(SMALL_RINGS_DRUM_INNER), 0.5),
            },
            {
               filter: FILTER_QUARTET_2_DIV.clone().setChunks(32),
               beatDistribution: 0.03125,
               beatDistributionType: DistributionType.STEP,
               events: objectTimeScale(deepCopy(SMALL_RINGS_DRUM_INNER), 0.5),
            },
         ],
      });
   }
   data.addLightRotationEventBoxGroups(
      {
         time: START_TIME - 0.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [{ rotation: 120, easing: EaseType.INOUT_QUAD }],
               beatDistribution: 0.999,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ rotation: 60, easing: EaseType.INOUT_QUAD }],
               beatDistribution: 0.999,
            },
         ],
      },
      {
         time: START_TIME + 0.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [{ rotation: 60, easing: EaseType.INOUT_QUAD }],
               beatDistribution: 0.999,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ rotation: 120, easing: EaseType.INOUT_QUAD }],
               beatDistribution: 0.999,
            },
         ],
      },
      {
         time: START_TIME + 1.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [{ rotation: 120, easing: EaseType.INOUT_QUAD }],
               beatDistribution: 0.999,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ rotation: 60, easing: EaseType.INOUT_QUAD }],
               beatDistribution: 0.999,
            },
         ],
      },
      {
         time: START_TIME + 2.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [
                  {
                     rotation: 300,
                     easing: EaseType.INOUT_QUAD,
                     direction: LightRotationDirection.COUNTER_CLOCKWISE,
                  },
               ],
               beatDistribution: 0.499,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [
                  {
                     rotation: 240,
                     easing: EaseType.INOUT_QUAD,
                     direction: LightRotationDirection.CLOCKWISE,
                  },
               ],
               beatDistribution: 0.499,
            },
         ],
      },
      {
         time: START_TIME + 3,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [{ rotation: 315, easing: EaseType.IN_QUAD }],
               beatDistribution: 0.499,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ rotation: 225, easing: EaseType.IN_QUAD }],
               beatDistribution: 0.499,
            },
         ],
      },
      {
         time: START_TIME + 3.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [{ rotation: 330, easing: EaseType.OUT_QUAD }],
               beatDistribution: 0.499,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ rotation: 210, easing: EaseType.OUT_QUAD }],
               beatDistribution: 0.499,
            },
         ],
      },
      {
         time: START_TIME + 4,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [{ rotation: 315, easing: EaseType.IN_QUAD }],
               beatDistribution: 0.499,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ rotation: 225, easing: EaseType.IN_QUAD }],
               beatDistribution: 0.499,
            },
         ],
      },
      {
         time: START_TIME + 4.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [{ rotation: 330, easing: EaseType.OUT_QUAD }],
               beatDistribution: 0.499,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ rotation: 210, easing: EaseType.OUT_QUAD }],
               beatDistribution: 0.499,
            },
         ],
      },
      {
         time: START_TIME + 5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [{ rotation: 315, easing: EaseType.IN_QUAD }],
               beatDistribution: 0.499,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ rotation: 225, easing: EaseType.IN_QUAD }],
               beatDistribution: 0.499,
            },
         ],
      },
      {
         time: START_TIME + 5.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [{ rotation: 330, easing: EaseType.OUT_QUAD }],
               beatDistribution: 0.499,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ rotation: 210, easing: EaseType.OUT_QUAD }],
               beatDistribution: 0.499,
            },
         ],
      },
      {
         time: START_TIME + 6,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [{ rotation: 315, easing: EaseType.IN_QUAD }],
               beatDistribution: 0.25,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ rotation: 225, easing: EaseType.IN_QUAD }],
               beatDistribution: 0.25,
            },
         ],
      },
      {
         time: START_TIME + 6.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_TRIPLET_1_STEP,
               events: [{ rotation: 285, easing: EaseType.OUT_QUAD }],
            },
            {
               axis: Axis.Z,
               filter: FILTER_TRIPLET_2_STEP,
               events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
            },
            {
               axis: Axis.Z,
               filter: FILTER_TRIPLET_3_STEP,
               events: [{ rotation: 255, easing: EaseType.OUT_QUAD }],
            },
         ],
      },
   );
   data.addLightTranslationEventBoxGroups(
      {
         time: 1,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [{ translation: 5 }],
            },
         ],
      },
      {
         time: START_TIME,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [{ previous: 1 }],
            },
         ],
      },
      {
         time: START_TIME + 2,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [{ translation: -0.5, easing: EaseType.OUT_QUAD }],
            },
         ],
      },
      {
         time: START_TIME + 2.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ translation: -0.74, easing: EaseType.INOUT_QUAD }],
               beatDistribution: 0.499,
            },
         ],
      },
      {
         time: START_TIME + 3,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [{ translation: -0.5, easing: EaseType.INOUT_QUAD }],
               beatDistribution: 0.499,
               gapDistribution: 0.1,
               gapDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ translation: -0.74, easing: EaseType.INOUT_QUAD }],
               beatDistribution: 0.499,
               gapDistribution: 0.1,
               gapDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 6,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [{ previous: 1 }],
            },
         ],
      },
   );
   for (let repeat = 0; repeat < 1.5; repeat += 0.5) {
      data.addLightTranslationEventBoxGroups(
         {
            time: START_TIME + 6.5 + repeat,
            id: Group.SMALL_RINGS_RT,
            boxes: [
               {
                  axis: Axis.Z,
                  filter: FILTER_TRIPLET_1_STEP,
                  events: [{ translation: -0.5, easing: EaseType.INOUT_QUAD }],
               },
               {
                  axis: Axis.Z,
                  filter: FILTER_TRIPLET_2_STEP,
                  events: [{ translation: -0.74, easing: EaseType.INOUT_QUAD }],
               },
               {
                  axis: Axis.Z,
                  filter: FILTER_TRIPLET_3_STEP,
                  events: [{ translation: -0.98, easing: EaseType.INOUT_QUAD }],
               },
            ],
         },
         {
            time: START_TIME + 6.625 + repeat,
            id: Group.SMALL_RINGS_RT,
            boxes: [
               {
                  axis: Axis.Z,
                  filter: FILTER_TRIPLET_1_STEP,
                  events: [{ translation: -0.4, easing: EaseType.IN_QUAD }],
                  beatDistribution: 0.124,
                  gapDistribution: 0.025,
                  gapDistributionType: DistributionType.STEP,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Z,
                  filter: FILTER_TRIPLET_2_STEP,
                  events: [{ translation: -0.64, easing: EaseType.IN_QUAD }],
                  beatDistribution: 0.124,
                  gapDistribution: 0.025,
                  gapDistributionType: DistributionType.STEP,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Z,
                  filter: FILTER_TRIPLET_3_STEP,
                  events: [{ translation: -0.88, easing: EaseType.IN_QUAD }],
                  beatDistribution: 0.124,
                  gapDistribution: 0.025,
                  gapDistributionType: DistributionType.STEP,
                  affectFirst: 1,
               },
            ],
         },
         {
            time: START_TIME + 6.75 + repeat,
            id: Group.SMALL_RINGS_RT,
            boxes: [
               {
                  axis: Axis.Z,
                  filter: FILTER_TRIPLET_1_STEP,
                  events: [{ translation: -0.5, easing: EaseType.OUT_QUAD }],
                  beatDistribution: 0.249,
               },
               {
                  axis: Axis.Z,
                  filter: FILTER_TRIPLET_2_STEP,
                  events: [{ translation: -0.74, easing: EaseType.OUT_QUAD }],
                  beatDistribution: 0.249,
               },
               {
                  axis: Axis.Z,
                  filter: FILTER_TRIPLET_3_STEP,
                  events: [{ translation: -0.98, easing: EaseType.OUT_QUAD }],
                  beatDistribution: 0.249,
               },
            ],
         },
      );
   }
}
