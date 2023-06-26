import {
   Axis,
   DistributionType,
   EaseType,
   EventBoxColor,
   EventLightValue,
   LightRotationDirection,
   TransitionType,
   utils,
   v3,
} from '../../../depsLocal.ts';
import {
   Brightness,
   FILTER_HALF_1_STEP,
   FILTER_HALF_2_STEP,
   FILTER_QUARTET_1_DIV,
   FILTER_QUARTET_1_STEP,
   FILTER_QUARTET_2_DIV,
   FILTER_QUARTET_2_STEP,
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

export default function (data: v3.Difficulty) {
   data.addLightColorEventBoxGroups({
      time: START_TIME,
      id: Group.SMALL_RINGS_C,
      boxes: [
         {
            filter: FILTER_QUARTET_1_DIV.clone().setReverse(1),
            beatDistribution: 1,
            events: [
               { color: EventBoxColor.WHITE, brightness: Brightness.FLASH },
               {
                  time: 0.125,
                  transition: TransitionType.EXTEND,
               },
               {
                  time: 1,
                  color: EventBoxColor.RED,
                  transition: TransitionType.INTERPOLATE,
               },
            ],
         },
         {
            filter: FILTER_QUARTET_2_DIV.clone().setReverse(1),
            beatDistribution: 1,
            events: [
               { color: EventBoxColor.WHITE, brightness: Brightness.FLASH },
               {
                  time: 0.125,
                  transition: TransitionType.EXTEND,
               },
               {
                  time: 1,
                  color: EventBoxColor.BLUE,
                  transition: TransitionType.INTERPOLATE,
               },
            ],
         },
      ],
   });
   data.addLightRotationEventBoxGroups(
      {
         time: START_TIME - 0.25,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [{ previous: 1 }],
            },
         ],
      },
      {
         time: START_TIME,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               events: [
                  {
                     rotation: 45,
                     easing: EaseType.INOUT_QUAD,
                  },
               ],
               rotationDistribution: 60,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               events: [
                  {
                     rotation: 315,
                     easing: EaseType.INOUT_QUAD,
                  },
               ],
               rotationDistribution: 60,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 8,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               beatDistribution: 8,
               events: [
                  {
                     rotation: 270,
                     easing: EaseType.INOUT_QUAD,
                  },
               ],
               rotationDistribution: 165,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 8,
               events: [
                  {
                     rotation: 90,
                     easing: EaseType.INOUT_QUAD,
                  },
               ],
               rotationDistribution: 105,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 16,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               beatDistribution: 8,
               events: [
                  {
                     rotation: 75,
                     easing: EaseType.INOUT_QUAD,
                  },
               ],
               rotationDistribution: 150,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 8,
               events: [
                  {
                     rotation: 270,
                     easing: EaseType.INOUT_QUAD,
                  },
               ],
               rotationDistribution: 120,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 24,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: FILTER_HALF_1_STEP,
               beatDistribution: 4,
               events: [
                  {
                     rotation: 270,
                     easing: EaseType.INOUT_QUAD,
                  },
               ],
               rotationDistribution: 75,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 4,
               events: [
                  {
                     rotation: 90,
                     easing: EaseType.INOUT_QUAD,
                  },
               ],
               rotationDistribution: 15,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
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
               beatDistribution: 2,
               events: [
                  {
                     rotation: 90,
                     easing: EaseType.INOUT_QUAD,
                     direction: LightRotationDirection.CLOCKWISE,
                  },
               ],
               rotationDistribution: 105,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 2,
               events: [
                  {
                     rotation: 270,
                     easing: EaseType.INOUT_QUAD,
                     direction: LightRotationDirection.COUNTER_CLOCKWISE,
                  },
               ],
               rotationDistribution: 75,
               rotationDistributionType: DistributionType.STEP,
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
               beatDistribution: 2,
               events: [
                  {
                     rotation: 0,
                     easing: EaseType.INOUT_QUAD,
                     direction: LightRotationDirection.CLOCKWISE,
                  },
               ],
               rotationDistribution: 45,
               rotationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
   );
   data.addLightTranslationEventBoxGroups(
      {
         time: START_TIME - 0.25,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               events: [{ previous: 1 }],
            },
         ],
      },
      {
         time: START_TIME + 0.25,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: { reverse: 1, random: 2, seed: generateSeed() },
               beatDistribution: 1.5,
               events: [{ translation: -6.5, easing: EaseType.INOUT_QUAD }],
               translationDistribution: 0.1,
               translationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 8,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: { reverse: 1, random: 2, seed: generateSeed() },
               beatDistribution: 2,
               events: [{ translation: -6, easing: EaseType.INOUT_QUAD }],
               translationDistribution: 0.05,
               translationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 16,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: { reverse: 1, random: 2, seed: generateSeed() },
               beatDistribution: 2,
               events: [{ translation: -6.25, easing: EaseType.INOUT_QUAD }],
               translationDistribution: 0.07,
               translationDistributionType: DistributionType.STEP,
               affectFirst: 1,
            },
         ],
      },
      {
         time: START_TIME + 24,
         id: Group.SMALL_RINGS_RT,
         boxes: [
            {
               axis: Axis.Z,
               filter: { reverse: 1, random: 2, seed: generateSeed() },
               beatDistribution: 2,
               events: [{ translation: -6.5, easing: EaseType.INOUT_QUAD }],
               translationDistribution: 0.1,
               translationDistributionType: DistributionType.STEP,
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
               beatDistribution: 2,
               events: [{ translation: -0.5, easing: EaseType.INOUT_QUAD }],
            },
         ],
      },
   );

   data.addLightColorEventBoxGroups(
      {
         time: START_TIME,
         id: Group.BIG_RINGS,
         boxes: [
            {
               filter: { reverse: 1 },
               beatDistribution: 1.25,
               events: [
                  { color: EventBoxColor.WHITE, brightness: Brightness.FLASH },
                  {
                     time: 0.25,
                     transition: TransitionType.EXTEND,
                  },
                  {
                     time: 1,
                     color: EventBoxColor.WHITE,
                     brightness: Brightness.OFF,
                     transition: TransitionType.INTERPOLATE,
                     frequency: 8,
                  },
               ],
            },
         ],
      },
      {
         time: START_TIME + 1.25,
         id: Group.BIG_RINGS,
         boxes: [
            {
               filter: FILTER_HALF_1_STEP,
               beatDistribution: 4,
               events: [
                  {
                     color: EventBoxColor.BLUE,
                     brightness: Brightness.OFF,
                     frequency: 8,
                  },
                  {
                     time: 1,
                     color: EventBoxColor.RED,
                     transition: TransitionType.INTERPOLATE,
                  },
               ],
            },
            {
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 4,
               events: [
                  {
                     color: EventBoxColor.RED,
                     brightness: Brightness.OFF,
                     frequency: 8,
                  },
                  {
                     time: 1,
                     color: EventBoxColor.BLUE,
                     transition: TransitionType.INTERPOLATE,
                  },
               ],
            },
         ],
      },
   );
   data.addLightRotationEventBoxGroups(
      {
         time: START_TIME + 0.5,
         id: Group.BIG_RINGS,
         boxes: [
            {
               axis: Axis.Z,
               events: [
                  {
                     easing: EaseType.IN_QUAD,
                  },
               ],
            },
         ],
      },
      {
         time: START_TIME + 4,
         id: Group.BIG_RINGS,
         boxes: [
            {
               filter: FILTER_HALF_1_STEP,
               beatDistribution: 2,
               axis: Axis.Z,
               events: [
                  {
                     rotation: 180,
                     easing: EaseType.OUT_QUAD,
                     direction: LightRotationDirection.CLOCKWISE,
                  },
               ],
            },
            {
               filter: FILTER_HALF_2_STEP,
               beatDistribution: 2,
               axis: Axis.Z,
               events: [
                  {
                     rotation: 225,
                     easing: EaseType.OUT_QUAD,
                     direction: LightRotationDirection.COUNTER_CLOCKWISE,
                  },
               ],
            },
         ],
      },
   );
   data.addLightTranslationEventBoxGroups({
      time: START_TIME + 4,
      id: Group.BIG_RINGS,
      boxes: [
         {
            axis: Axis.Z,
            events: [{ easing: EaseType.INOUT_QUAD }],
         },
      ],
   });
}
