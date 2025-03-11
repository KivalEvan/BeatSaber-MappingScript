import {
   Axis,
   Beatmap,
   deepCopy,
   DistributionType,
   EaseType,
   EventLightValue,
   LightRotationDirection,
} from '@bsmap';
import {
   Brightness,
   FILTER_HALF_1_DIV,
   FILTER_HALF_1_STEP,
   FILTER_HALF_2_DIV,
   FILTER_HALF_2_STEP,
   FILTER_QUARTET_1_DIV,
   FILTER_QUARTET_2_DIV,
   FILTER_QUARTET_3_DIV,
   FILTER_QUARTET_4_DIV,
   Group,
   SMALL_RINGS_DRUM_INNER,
   SMALL_RINGS_DRUM_OUTER,
} from '../_common.ts';
import { objectTimeScale } from '../_helpers.ts';
import { START_TIME } from './_time.ts';

export default function (data: Beatmap) {
   data.addColorBoostEvents(
      { time: START_TIME + 21.5, toggle: true },
      { time: START_TIME + 24, toggle: false },
   );
   for (let repeat = 16; repeat <= 21; repeat++) {
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
         time: START_TIME + 21.375,
         type: 4,
         value: EventLightValue.WHITE_ON,
         floatValue: Brightness.OFF,
      },
      {
         time: START_TIME + 24,
         type: 4,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: Brightness.OFF,
      },
   );
   for (let repeat = 22; repeat <= 23.5; repeat += 0.5) {
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
               filter: FILTER_QUARTET_1_DIV.clone().setChunks(48),
               beatDistribution: 0.03125,
               beatDistributionType: DistributionType.STEP,
               events: objectTimeScale(deepCopy(SMALL_RINGS_DRUM_INNER), 0.5),
            },
            {
               filter: FILTER_QUARTET_2_DIV.clone().setChunks(48),
               beatDistribution: 0.03125,
               beatDistributionType: DistributionType.STEP,
               events: objectTimeScale(deepCopy(SMALL_RINGS_DRUM_INNER), 0.5),
            },
         ],
      });
   }
   data.addLightRotationEventBoxGroups(
      {
         time: START_TIME + 16.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               filter: FILTER_HALF_1_STEP,
               axis: Axis.Z,
               beatDistribution: 0.25,
               events: [{ rotation: 225, easing: EaseType.INOUT_QUAD }],
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
               flip: 1,
            },
            {
               filter: FILTER_HALF_2_STEP,
               axis: Axis.Z,
               beatDistribution: 0.25,
               events: [{ rotation: 315, easing: EaseType.INOUT_QUAD }],
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
               flip: 1,
            },
         ],
      },
      {
         time: START_TIME + 17.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               filter: FILTER_HALF_1_STEP,
               axis: Axis.Z,
               beatDistribution: 0.25,
               events: [{ rotation: 45, easing: EaseType.INOUT_QUAD }],
               rotationDistribution: 15,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
               flip: 1,
            },
            {
               filter: FILTER_HALF_2_STEP,
               axis: Axis.Z,
               beatDistribution: 0.25,
               events: [{ rotation: 135, easing: EaseType.INOUT_QUAD }],
               rotationDistribution: 15,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
               flip: 1,
            },
         ],
      },
      {
         time: START_TIME + 18.75,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [{ rotation: 225, easing: EaseType.INOUT_QUAD }],
               rotationDistribution: 75,
               rotationDistributionType: DistributionType.STEP,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [{ rotation: 45, easing: EaseType.INOUT_QUAD }],
               rotationDistribution: 75,
               rotationDistributionType: DistributionType.STEP,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 20,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [{ rotation: 270, easing: EaseType.INOUT_QUAD }],
               rotationDistribution: 15,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 21,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [
                  {
                     rotation: 0,
                     easing: EaseType.OUT_QUAD,
                     direction: LightRotationDirection.CLOCKWISE,
                  },
               ],
               rotationDistribution: 15,
               rotationDistributionType: DistributionType.STEP,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 22,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [
                  {
                     rotation: 180,
                     easing: EaseType.IN_QUAD,
                     direction: LightRotationDirection.CLOCKWISE,
                  },
               ],
               rotationDistribution: 15,
               rotationDistributionType: DistributionType.STEP,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 23.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [
                  {
                     rotation: 0,
                     easing: EaseType.OUT_QUAD,
                     direction: LightRotationDirection.CLOCKWISE,
                  },
               ],
               rotationDistribution: 15,
               rotationDistributionType: DistributionType.STEP,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
   );
   data.addLightTranslationEventBoxGroups(
      {
         time: START_TIME + 16.75,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_QUARTET_1_DIV,
               events: [
                  {
                     translation: -2,
                     easing: EaseType.INOUT_QUAD,
                  },
               ],
               gapDistribution: 0.16,
               gapDistributionType: DistributionType.WAVE,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_QUARTET_2_DIV,
               events: [
                  {
                     translation: -2.2,
                     easing: EaseType.INOUT_QUAD,
                  },
               ],
               gapDistribution: 0.16,
               gapDistributionType: DistributionType.WAVE,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_QUARTET_3_DIV,
               events: [
                  {
                     translation: -2.3,
                     easing: EaseType.INOUT_QUAD,
                  },
               ],
               gapDistribution: 0.16,
               gapDistributionType: DistributionType.WAVE,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_QUARTET_4_DIV,
               events: [
                  {
                     translation: -2.5,
                     easing: EaseType.INOUT_QUAD,
                  },
               ],
               gapDistribution: 0.16,
               gapDistributionType: DistributionType.WAVE,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 17,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_QUARTET_1_DIV,
               events: [{ translation: -1.25, easing: EaseType.IN_QUAD }],
               gapDistribution: 0.2,
               gapDistributionType: DistributionType.WAVE,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_QUARTET_2_DIV,
               events: [
                  {
                     time: 0.0625,
                     translation: -0.75,
                     easing: EaseType.IN_QUAD,
                  },
               ],
               gapDistribution: 0.2,
               gapDistributionType: DistributionType.WAVE,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_QUARTET_3_DIV,
               events: [
                  {
                     time: 0.125,
                     translation: -0.5,
                     easing: EaseType.IN_QUAD,
                  },
               ],
               gapDistribution: 0.2,
               gapDistributionType: DistributionType.WAVE,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_QUARTET_4_DIV,
               events: [
                  {
                     time: 0.1875,
                     translation: -0.25,
                     easing: EaseType.IN_QUAD,
                  },
               ],
               gapDistribution: 0.2,
               gapDistributionType: DistributionType.WAVE,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 17.375,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_QUARTET_1_DIV,
               events: [{ translation: -1.5, easing: EaseType.OUT_QUAD }],
               gapDistribution: 0.16,
               gapDistributionType: DistributionType.WAVE,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_QUARTET_2_DIV,
               events: [
                  {
                     time: 0.0625,
                     translation: -1,
                     easing: EaseType.OUT_QUAD,
                  },
               ],
               gapDistribution: 0.16,
               gapDistributionType: DistributionType.WAVE,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_QUARTET_3_DIV,
               events: [
                  {
                     time: 0.125,
                     translation: -0.75,
                     easing: EaseType.OUT_QUAD,
                  },
               ],
               gapDistribution: 0.16,
               gapDistributionType: DistributionType.WAVE,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_QUARTET_4_DIV,
               events: [
                  {
                     time: 0.1875,
                     translation: -0.5,
                     easing: EaseType.OUT_QUAD,
                  },
               ],
               gapDistribution: 0.16,
               gapDistributionType: DistributionType.WAVE,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 17.75,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [{ translation: 2.25, easing: EaseType.INOUT_QUAD }],
               beatDistribution: 0.375,
            },
         ],
      },
      {
         time: START_TIME + 18.5,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [{ translation: -2, easing: EaseType.INOUT_QUAD }],
               beatDistribution: 0.5,
               gapDistribution: 0.1,
               gapDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 19.25,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [{ translation: 0.5, easing: EaseType.INOUT_QUAD }],
               gapDistribution: 0.02,
               gapDistributionType: DistributionType.STEP,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 20,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [{ translation: -1, easing: EaseType.IN_QUAD }],
               gapDistribution: 0.05,
               gapDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 21,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_DIV,
               events: [{ easing: EaseType.OUT_QUAD }],
               gapDistribution: 0.36,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_DIV,
               events: [{ translation: -1, easing: EaseType.OUT_QUAD }],
               gapDistribution: 0.36,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 23,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_DIV,
               events: [{ translation: -1.25, easing: EaseType.INOUT_QUAD }],
               gapDistribution: 0.36,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_DIV,
               events: [{ translation: 2.75, easing: EaseType.INOUT_QUAD }],
               gapDistribution: 0.36,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 23.75,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_DIV,
               events: [{ translation: -1, easing: EaseType.INOUT_QUAD }],
               gapDistribution: 0.36,
               flip: 1,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_DIV,
               events: [{ translation: 2.5, easing: EaseType.INOUT_QUAD }],
               gapDistribution: 0.36,
               flip: 1,
               affectFirst: 1,
            },
         ],
      },
   );
}
