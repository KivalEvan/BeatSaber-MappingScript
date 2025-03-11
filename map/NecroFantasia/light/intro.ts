import {
   Beatmap,
   DistributionType,
   EaseType,
   EventLightColor,
   IndexFilterType,
   pRandom,
   range as rangeEx,
} from '@bsmap';
import { WeaveID } from './id.ts';
function range(start: number, end?: number, step?: number): number[] {
   return rangeEx(start, end!, step!, true);
}

export default function (data: Beatmap) {
   // for (const id of itNum(WeaveID.SIDE_BOTTOM_LEFT, WeaveID.SIDE_TOP_RIGHT)) {
   //    data.addLightColorEventBoxGroups(
   //       {
   //          time: 4,
   //          id,
   //          boxes: [
   //             {
   //                events: [
   //                   { color: EventLightColor.RED, brightness: 0 },
   //                   {
   //                      time: 2,
   //                      color: EventLightColor.WHITE,
   //                      brightness: 1,
   //                      easing: EaseType.LINEAR,
   //                   },
   //                ],
   //                beatDistributionType: DistributionType.STEP,
   //                beatDistribution: 1 / 4,
   //             },
   //          ],
   //       },
   //       {
   //          time: 16,
   //          id,
   //          boxes: [
   //             {
   //                events: [
   //                   {
   //                      color: EventLightColor.WHITE,
   //                      brightness: 0,
   //                      easing: EaseType.LINEAR,
   //                   },
   //                ],
   //                beatDistributionType: DistributionType.STEP,
   //                beatDistribution: 1,
   //             },
   //          ],
   //       }
   //    );
   //    data.addLightRotationEventBoxGroups(
   //       {
   //          time: 4,
   //          id,
   //          boxes: [
   //             {
   //                axis: Axis.Y,
   //                events: [
   //                   { rotation: 270 },
   //                   { time: 24, rotation: 255, easing: EaseType.OUT_QUAD },
   //                ],
   //                rotationDistribution: 60,
   //                beatDistribution: 4,
   //             },
   //             {
   //                filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
   //                events: [{ rotation: 270 }],
   //             },
   //             {
   //                filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
   //                events: [
   //                   { rotation: 270 },
   //                   { time: 24, rotation: 270, easing: EaseType.OUT_QUAD },
   //                ],
   //                rotationDistribution: -90,
   //                beatDistribution: 4,
   //             },
   //          ],
   //       },
   //       {
   //          time: 66,
   //          id,
   //          boxes: [
   //             {
   //                events: [{}],
   //             },
   //             {
   //                axis: Axis.Y,
   //                events: [{}],
   //             },
   //          ],
   //       }
   //    );
   // }
   for (const id of range(WeaveID.INNER_BOTTOM_LEFT, WeaveID.INNER_BOTTOM_RIGHT)) {
      data.addLightColorEventBoxGroups({
         time: 6,
         id,
         boxes: [
            {
               events: [
                  { color: EventLightColor.RED, brightness: 0 },
                  {
                     time: 2,
                     color: EventLightColor.RED,
                     brightness: 1,
                     easing: EaseType.LINEAR,
                  },
               ],
               beatDistributionType: DistributionType.STEP,
               beatDistribution: 1 / 4,
            },
         ],
      });
      let flipFlop = false;
      for (const time of range(12, 64, 8)) {
         data.addLightColorEventBoxGroups({
            time,
            id,
            boxes: [
               {
                  filter: { random: 2, seed: pRandom(-9999999, 9999999, true) },
                  events: [
                     {
                        color: flipFlop ? EventLightColor.BLUE : EventLightColor.RED,
                        brightness: 0.25,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 2,
                        color: flipFlop ? EventLightColor.RED : EventLightColor.BLUE,
                        easing: EaseType.LINEAR,
                     },
                  ],
                  beatDistributionType: DistributionType.STEP,
                  beatDistribution: 1,
               },
            ],
         });
         flipFlop = !flipFlop;
      }
      data.addLightColorEventBoxGroups({
         time: 68,
         id,
         boxes: [
            {
               events: [
                  {
                     color: flipFlop ? EventLightColor.RED : EventLightColor.BLUE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
               beatDistributionType: DistributionType.STEP,
               beatDistribution: 1 / 4,
            },
         ],
      });
      data.addLightRotationEventBoxGroups(
         {
            time: 6,
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                  events: [{ rotation: 85, easing: EaseType.INOUT_QUAD }],
               },
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                  events: [{ rotation: 275, easing: EaseType.INOUT_QUAD }],
               },
            ],
         },
         {
            time: 22,
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                  events: [{ rotation: 95, easing: EaseType.INOUT_QUAD }],
                  beatDistribution: 4,
               },
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                  events: [{ rotation: 265, easing: EaseType.INOUT_QUAD }],
                  beatDistribution: 4,
               },
            ],
         },
         {
            time: 38,
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                  events: [{ rotation: 85, easing: EaseType.INOUT_QUAD }],
                  beatDistribution: 4,
               },
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                  events: [{ rotation: 275, easing: EaseType.INOUT_QUAD }],
                  beatDistribution: 4,
               },
            ],
         },
         {
            time: 54,
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                  events: [{ rotation: 95, easing: EaseType.INOUT_QUAD }],
                  beatDistribution: 4,
               },
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                  events: [{ rotation: 265, easing: EaseType.INOUT_QUAD }],
                  beatDistribution: 4,
               },
            ],
         },
         {
            time: 70,
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                  events: [{ rotation: 85, easing: EaseType.INOUT_QUAD }],
                  beatDistribution: 4,
               },
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                  events: [{ rotation: 275, easing: EaseType.INOUT_QUAD }],
                  beatDistribution: 4,
               },
            ],
         },
      );
   }
}
