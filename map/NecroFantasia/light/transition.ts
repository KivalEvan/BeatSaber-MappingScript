import {
   Axis,
   DistributionType,
   EaseType,
   EventBoxColor,
   IndexFilterType,
   pRandom,
   TransitionType,
   v3,
} from '../../../depsLocal.ts';
import { itNum } from '../../../utility/iterator.ts';
import { WeaveID } from './id.ts';

export default function (data: v3.Difficulty) {
   for (const id of itNum(WeaveID.INNER_TOP_LEFT, WeaveID.INNER_TOP_RIGHT)) {
      data.addLightColorEventBoxGroups(
         {
            time: 102,
            id,
            boxes: [
               {
                  filter: { random: 2, seed: pRandom(-999999, 999999, true) },
                  events: [
                     {
                        color: EventBoxColor.BLUE,
                        brightness: 0,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1 / 3,
               },
            ],
         },
         {
            time: 129,
            id,
            boxes: [
               {
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: 1.5,
                        frequency: 32,
                        transition: TransitionType.INTERPOLATE,
                     },
                     {
                        time: 1,
                        color: EventBoxColor.WHITE,
                        brightness: 0,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         },
      );
      data.addLightRotationEventBoxGroups(
         {
            time: 86,
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                  events: [{ rotation: -45, easing: EaseType.IN_QUAD }],
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1 / 8,
               },
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                  events: [{ rotation: -45, easing: EaseType.IN_QUAD }],
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1 / 8,
               },
            ],
         },
         {
            time: 130,
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                  events: [
                     { rotation: 0, easing: EaseType.IN_QUAD },
                     { time: 2, rotation: -15, easing: EaseType.OUT_QUAD },
                  ],
               },
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                  events: [
                     { rotation: -90, easing: EaseType.IN_QUAD },
                     { time: 2, rotation: -75, easing: EaseType.OUT_QUAD },
                  ],
               },
            ],
         },
      );
   }
   for (
      const id of [
         ...itNum(WeaveID.OUTER_BOTTOM_LEFT, WeaveID.OUTER_TOP_RIGHT),
         ...itNum(WeaveID.SIDE_BOTTOM_LEFT, WeaveID.SIDE_TOP_RIGHT),
      ]
   ) {
      data.addLightColorEventBoxGroups(
         {
            time: 130,
            id,
            boxes: [
               {
                  events: [
                     { color: EventBoxColor.RED, brightness: 1 },
                     {
                        time: 1 / 8,
                        color: EventBoxColor.RED,
                        brightness: 0,
                     },
                  ],
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1 / 8,
               },
            ],
         },
         {
            time: 131,
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 0, reverse: 1 },
                  events: [
                     { color: EventBoxColor.RED, brightness: 1 },
                     { time: 1, transition: TransitionType.EXTEND },
                     {
                        time: 1.5,
                        color: EventBoxColor.WHITE,
                        brightness: 1,
                        transition: TransitionType.INTERPOLATE,
                     },
                     {
                        time: 2,
                        color: EventBoxColor.BLUE,
                        brightness: 1,
                        transition: TransitionType.INTERPOLATE,
                     },
                     {
                        time: 3,
                        color: EventBoxColor.RED,
                        brightness: 0,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         },
      );
   }
   for (const id of itNum(WeaveID.SIDE_BOTTOM_LEFT, WeaveID.SIDE_TOP_RIGHT)) {
      for (const it of itNum(1, 3)) {
         data.addLightColorEventBoxGroups(
            {
               time: 132 + it * 0.125,
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: it, p1: 0, reverse: 1 },
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 1.5 },
                        {
                           time: 0.25,
                           color: EventBoxColor.BLUE,
                           transition: TransitionType.INTERPOLATE,
                        },
                        {
                           time: 0.999,
                           color: EventBoxColor.RED,
                           brightness: 0,
                           transition: TransitionType.INTERPOLATE,
                        },
                     ],
                  },
               ],
            },
            {
               time: 133 + it * 0.125,
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: it, p1: 0, reverse: 1 },
                     events: [
                        { color: EventBoxColor.RED, brightness: 1.5 },
                        {
                           time: 0.25,
                           color: EventBoxColor.BLUE,
                           transition: TransitionType.INTERPOLATE,
                        },
                        {
                           time: 1,
                           color: EventBoxColor.RED,
                           brightness: 0,
                           transition: TransitionType.INTERPOLATE,
                        },
                     ],
                  },
               ],
            },
         );
      }
      data.addLightRotationEventBoxGroups(
         {
            time: 130,
            id,
            boxes: [
               {
                  events: [{ rotation: 120, easing: EaseType.NONE }],
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1 / 8,
               },
            ],
         },
         {
            time: 131,
            id,
            boxes: [
               {
                  events: [{ rotation: 120, easing: EaseType.NONE }],
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1 / 8,
               },
            ],
         },
         {
            time: 130,
            id: id - 8,
            boxes: [
               {
                  events: [{ rotation: 120, easing: EaseType.NONE }],
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1 / 8,
               },
            ],
         },
         {
            time: 132,
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                  events: [{ rotation: 240, easing: EaseType.INOUT_QUAD }],
               },
            ],
         },
         {
            time: 134,
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                  events: [{ rotation: 180, easing: EaseType.IN_QUAD }],
                  rotationDistribution: -45,
                  affectFirst: 1,
               },
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                  events: [{ rotation: 225, easing: EaseType.IN_QUAD }],
               },
            ],
         },
         {
            time: 134,
            id: id - 8,
            boxes: [
               {
                  events: [{ rotation: 180, easing: EaseType.IN_QUAD }],
                  rotationDistribution: -45,
                  affectFirst: 1,
               },
            ],
         },
      );
   }
}
