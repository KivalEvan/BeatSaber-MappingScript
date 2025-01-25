import {
   DistributionType,
   EaseType,
   EventLightColor,
   IndexFilterType,
   pRandom,
   range as rangeEx,
   TransitionType,
   types,
   v3,
} from '@bsmap';
import { WeaveID } from './id.ts';
function range(start: number, end?: number, step?: number): number[] {
   return rangeEx(start, end!, step!, true);
}

export default function (data: types.wrapper.IWrapBeatmap) {
   for (const id of range(WeaveID.INNER_TOP_LEFT, WeaveID.INNER_TOP_RIGHT)) {
      data.addLightColorEventBoxGroups(
         {
            time: 102,
            id,
            boxes: [
               {
                  filter: { random: 2, seed: pRandom(-999999, 999999, true) },
                  events: [
                     {
                        color: EventLightColor.BLUE,
                        brightness: 0,
                        easing: EaseType.LINEAR,
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
                        color: EventLightColor.WHITE,
                        brightness: 1.5,
                        frequency: 32,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1,
                        color: EventLightColor.WHITE,
                        brightness: 0,
                        easing: EaseType.LINEAR,
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
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 2,
                  },
                  events: [{ rotation: -45, easing: EaseType.IN_QUAD }],
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1 / 8,
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
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
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 2,
                  },
                  events: [
                     { rotation: 0, easing: EaseType.IN_QUAD },
                     { time: 2, rotation: -15, easing: EaseType.OUT_QUAD },
                  ],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
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
         ...range(WeaveID.OUTER_BOTTOM_LEFT, WeaveID.OUTER_TOP_RIGHT),
         ...range(WeaveID.SIDE_BOTTOM_LEFT, WeaveID.SIDE_TOP_RIGHT),
      ]
   ) {
      data.addLightColorEventBoxGroups(
         {
            time: 130,
            id,
            boxes: [
               {
                  events: [
                     { color: EventLightColor.RED, brightness: 1 },
                     {
                        time: 1 / 8,
                        color: EventLightColor.RED,
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
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p1: 0,
                     reverse: 1,
                  },
                  events: [
                     { color: EventLightColor.RED, brightness: 1 },
                     { time: 1, previous: 1 },
                     {
                        time: 1.5,
                        color: EventLightColor.WHITE,
                        brightness: 1,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 2,
                        color: EventLightColor.BLUE,
                        brightness: 1,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 3,
                        color: EventLightColor.RED,
                        brightness: 0,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         },
         {
            time: 222,
            id,
            boxes: [
               {
                  events: [
                     { color: EventLightColor.WHITE, brightness: 1.5 },
                     {
                        time: 0.5,
                        color: EventLightColor.BLUE,
                        easing: EaseType.LINEAR,
                        brightness: 1.2,
                     },
                     {
                        time: 1.249,
                        color: EventLightColor.BLUE,
                        easing: EaseType.LINEAR,
                        brightness: 0,
                     },
                  ],
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 0.5,
               },
            ],
         },
         {
            time: 226,
            id,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 3,
                     p1: 4,
                     reverse: 1,
                  },
                  events: [
                     { color: EventLightColor.WHITE, brightness: 1.5 },
                     {
                        time: 0.5,
                        color: EventLightColor.BLUE,
                        easing: EaseType.LINEAR,
                        brightness: 1.2,
                     },
                     {
                        time: 0.999,
                        color: EventLightColor.BLUE,
                        easing: EaseType.LINEAR,
                        brightness: 0,
                     },
                  ],
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 226.5,
            id,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 4,
                     reverse: 1,
                  },
                  events: [
                     { color: EventLightColor.WHITE, brightness: 1.5 },
                     {
                        time: 0.5,
                        color: EventLightColor.BLUE,
                        easing: EaseType.LINEAR,
                        brightness: 1.2,
                     },
                     {
                        time: 0.999,
                        color: EventLightColor.BLUE,
                        easing: EaseType.LINEAR,
                        brightness: 0,
                     },
                  ],
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 228,
            id,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p1: 0,
                     reverse: 1,
                  },
                  events: [
                     {
                        color: EventLightColor.BLUE,
                        brightness: 1,
                     },
                     {
                        time: 1,
                        color: EventLightColor.RED,
                        brightness: 0,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         },
      );
   }
   for (const time of [130, 226]) {
      for (
         const id of range(
            WeaveID.SIDE_BOTTOM_LEFT,
            WeaveID.SIDE_TOP_RIGHT,
         )
      ) {
         for (const it of range(1, 3)) {
            data.addLightColorEventBoxGroups(
               {
                  time: time + 2 + it * 0.125,
                  id,
                  boxes: [
                     {
                        filter: {
                           type: IndexFilterType.STEP_AND_OFFSET,
                           p0: it,
                           p1: 0,
                           reverse: 1,
                        },
                        events: [
                           { color: EventLightColor.WHITE, brightness: 1.5 },
                           {
                              time: 0.25,
                              color: EventLightColor.BLUE,
                              easing: EaseType.LINEAR,
                           },
                           {
                              time: 0.999,
                              color: EventLightColor.RED,
                              brightness: 0,
                              easing: EaseType.LINEAR,
                           },
                        ],
                     },
                  ],
               },
               {
                  time: time + 3 + it * 0.125,
                  id,
                  boxes: [
                     {
                        filter: {
                           type: IndexFilterType.STEP_AND_OFFSET,
                           p0: it,
                           p1: 0,
                           reverse: 1,
                        },
                        events: [
                           { color: EventLightColor.RED, brightness: 1.5 },
                           {
                              time: 0.25,
                              color: EventLightColor.BLUE,
                              easing: EaseType.LINEAR,
                           },
                           {
                              time: 1,
                              color: EventLightColor.RED,
                              brightness: 0,
                              easing: EaseType.LINEAR,
                           },
                        ],
                     },
                  ],
               },
            );
         }
         data.addLightRotationEventBoxGroups(
            {
               time: time + 2,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 240, easing: EaseType.INOUT_QUAD }],
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
                     },
                     events: [{ rotation: 180, easing: EaseType.IN_QUAD }],
                     rotationDistribution: -45,
                     affectFirst: 1,
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 225, easing: EaseType.IN_QUAD }],
                  },
               ],
            },
            {
               time: time + 4,
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
   for (const time of [130, 222]) {
      for (
         const id of range(
            WeaveID.SIDE_BOTTOM_LEFT,
            WeaveID.SIDE_TOP_RIGHT,
         )
      ) {
         data.addLightRotationEventBoxGroups(
            {
               time,
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
               time,
               id: id - 8,
               boxes: [
                  {
                     events: [{ rotation: 120, easing: EaseType.NONE }],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                  },
               ],
            },
         );
      }
   }
}
