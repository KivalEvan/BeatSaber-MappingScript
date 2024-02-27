import {
   Axis,
   DistributionType,
   EaseType,
   EventBoxColor,
   IndexFilterType,
   pRandomFn,
   RandomType,
   range,
   TransitionType,
   v3,
} from '../../../depsLocal.ts';
import { loopArray } from '../../../utility/iterator.ts';
import { WeaveID } from './id.ts';

const timingAry = [
   0,
   1.5,
   3,
   4.5,
   6,
   7,
   8,
   9.5,
   11,
   12.5,
   14,
   15,
   ...[0, 1.5, 3, 4.5, 6, 7, 8, 9.5, 11, 12.5, 14, 15].map((e) => e + 16),
];
const loopGen = loopArray(
   range(WeaveID.SIDE_BOTTOM_LEFT, WeaveID.SIDE_TOP_RIGHT),
);
export default function (data: v3.Difficulty) {
   const pRandom = pRandomFn('Necro Fantasia');
   let flipFlop = true;
   for (const time of [358, 806]) {
      for (const id of [WeaveID.INNER_TOP_LEFT, WeaveID.INNER_TOP_RIGHT]) {
         for (const nTime of range(time, time + 159, 32)) {
            data.addLightColorEventBoxGroups({
               time: nTime,
               id,
               boxes: [
                  {
                     events: [{ color: EventBoxColor.WHITE, brightness: 3 }],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                  },
               ],
            });
            for (const offsetTime of range(4, 32, 8)) {
               data.addLightColorEventBoxGroups({
                  time: nTime + offsetTime,
                  id,
                  boxes: [
                     {
                        filter: {
                           random: RandomType.RANDOM_ELEMENTS,
                           seed: pRandom(9999999, -9999999, true),
                        },
                        events: [
                           {
                              color: flipFlop ? EventBoxColor.BLUE : EventBoxColor.RED,
                              brightness: 1,
                              transition: TransitionType.INTERPOLATE,
                           },
                           {
                              time: 1,
                              color: flipFlop ? EventBoxColor.RED : EventBoxColor.BLUE,
                              brightness: 1,
                              transition: TransitionType.INTERPOLATE,
                           },
                           {
                              time: 2,
                              color: flipFlop ? EventBoxColor.BLUE : EventBoxColor.RED,
                              brightness: 1,
                              transition: TransitionType.INTERPOLATE,
                           },
                           {
                              time: 3,
                              color: flipFlop ? EventBoxColor.RED : EventBoxColor.BLUE,
                              brightness: 1,
                              transition: TransitionType.INTERPOLATE,
                           },
                           {
                              time: 4,
                              color: flipFlop ? EventBoxColor.BLUE : EventBoxColor.RED,
                              brightness: 1,
                              transition: TransitionType.INTERPOLATE,
                           },
                           {
                              time: 5,
                              color: flipFlop ? EventBoxColor.RED : EventBoxColor.BLUE,
                              brightness: 1,
                              transition: TransitionType.INTERPOLATE,
                           },
                        ],
                        beatDistributionType: DistributionType.STEP,
                        beatDistribution: 1 / 1.5,
                     },
                  ],
               });
               flipFlop = !flipFlop;
            }
         }
         data.addLightColorEventBoxGroups(
            {
               time: time + 160,
               id,
               boxes: [
                  {
                     events: [{ color: EventBoxColor.WHITE, brightness: 4 }],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                  },
               ],
            },
            {
               time: time + 164,
               id,
               boxes: [
                  {
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: 0,
                           transition: TransitionType.INTERPOLATE,
                        },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 2,
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
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                        reverse: 1,
                     },
                     events: [{ rotation: 335, easing: EaseType.INOUT_QUAD }],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                     rotationDistribution: 25,
                     affectFirst: 1,
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                        reverse: 1,
                     },
                     events: [{ rotation: 325, easing: EaseType.INOUT_QUAD }],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                     rotationDistribution: -25,
                     affectFirst: 1,
                  },
                  {
                     axis: Axis.Y,
                     events: [{ rotation: 0, easing: EaseType.INOUT_QUAD }],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                  },
               ],
            },
            {
               time: time + 160,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                        reverse: 1,
                     },
                     events: [{ rotation: 325, easing: EaseType.INOUT_BACK }],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1,
                     rotationDistribution: -25,
                     affectFirst: 1,
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                        reverse: 1,
                     },
                     events: [{ rotation: 335, easing: EaseType.INOUT_BACK }],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1,
                     rotationDistribution: 25,
                     affectFirst: 1,
                  },
               ],
            },
         );
      }
      for (const nTime of range(time, time + 127, 32)) {
         for (
            const id of range(
               WeaveID.SIDE_BOTTOM_LEFT,
               WeaveID.SIDE_TOP_RIGHT,
            )
         ) {
            data.addLightColorEventBoxGroups(
               {
                  time: nTime,
                  id,
                  boxes: [
                     {
                        events: [{ color: EventBoxColor.WHITE, brightness: 2 }],
                        beatDistributionType: DistributionType.STEP,
                        beatDistribution: 1 / 8,
                     },
                  ],
               },
               {
                  time: nTime + 3.9999,
                  id,
                  boxes: [
                     {
                        filter: {
                           random: RandomType.RANDOM_ELEMENTS,
                           seed: pRandom(9999999, -9999999, true),
                        },
                        events: [
                           {
                              color: flipFlop ? EventBoxColor.BLUE : EventBoxColor.RED,
                              brightness: 1,
                              transition: TransitionType.INTERPOLATE,
                           },
                           {
                              time: 1,
                              color: flipFlop ? EventBoxColor.RED : EventBoxColor.BLUE,
                              brightness: 1,
                              transition: TransitionType.INTERPOLATE,
                           },
                           {
                              time: 2,
                              color: flipFlop ? EventBoxColor.BLUE : EventBoxColor.RED,
                              brightness: 1,
                              transition: TransitionType.INTERPOLATE,
                           },
                           {
                              time: 3,
                              color: flipFlop ? EventBoxColor.RED : EventBoxColor.BLUE,
                              brightness: 1,
                              transition: TransitionType.INTERPOLATE,
                           },
                           {
                              time: 4,
                              color: flipFlop ? EventBoxColor.BLUE : EventBoxColor.RED,
                              brightness: 1,
                              transition: TransitionType.INTERPOLATE,
                           },
                           {
                              time: 5,
                              color: flipFlop ? EventBoxColor.RED : EventBoxColor.BLUE,
                              brightness: 1,
                              transition: TransitionType.INTERPOLATE,
                           },
                        ],
                        beatDistributionType: DistributionType.STEP,
                        beatDistribution: 1 / 2,
                     },
                  ],
               },
            );
            data.addLightRotationEventBoxGroups({
               time: nTime,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [
                        {
                           rotation: flipFlop ? 90 : 135,
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                     flip: 1,
                     beatDistribution: time === nTime ? 0 : 2,
                     rotationDistribution: flipFlop ? 45 : -45,
                     affectFirst: 1,
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [
                        {
                           rotation: flipFlop ? 180 : 225,
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                     flip: 1,
                     beatDistribution: time === nTime ? 0 : 2,
                     rotationDistribution: flipFlop ? 45 : -45,
                     affectFirst: 1,
                  },
               ],
            });
         }
         for (const offsetTime of timingAry) {
            const id = loopGen.next().value!;
            const t = nTime + offsetTime;
            if (t <= nTime + 1.5) continue;
            data.addLightColorEventBoxGroups({
               time: t,
               id,
               boxes: [
                  {
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: 2.5,
                        },
                        {
                           time: 1,
                           color: flipFlop ? EventBoxColor.RED : EventBoxColor.BLUE,
                           brightness: 1.5,
                           transition: TransitionType.INTERPOLATE,
                        },
                        {
                           time: 2,
                           color: flipFlop ? EventBoxColor.BLUE : EventBoxColor.RED,
                           brightness: 1,
                           transition: TransitionType.INTERPOLATE,
                        },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                  },
               ],
            });
         }
         flipFlop = !flipFlop;
      }
      for (
         const id of range(
            WeaveID.SIDE_BOTTOM_LEFT,
            WeaveID.SIDE_TOP_RIGHT,
         )
      ) {
         for (const nTime of range(time, time + 127, 64)) {
            continue;
            data.addLightColorEventBoxGroups({
               time: nTime + 60,
               id,
               boxes: [
                  {
                     events: [
                        {
                           transition: TransitionType.EXTEND,
                        },
                        {
                           time: 1,
                           color: EventBoxColor.WHITE,
                           brightness: 2,
                           frequency: 16,
                           transition: TransitionType.INTERPOLATE,
                        },
                        {
                           time: 3,
                           color: EventBoxColor.WHITE,
                           brightness: 0,
                           transition: TransitionType.INTERPOLATE,
                        },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                  },
               ],
            });
         }
         data.addLightColorEventBoxGroups(
            {
               time: time + 128,
               id,
               boxes: [
                  {
                     events: [{ color: EventBoxColor.WHITE, brightness: 2 }],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 8,
                  },
               ],
            },
            {
               time: time + 130,
               id,
               boxes: [
                  {
                     filter: {
                        random: RandomType.RANDOM_ELEMENTS,
                        seed: pRandom(9999999, -9999999, true),
                     },
                     events: [
                        {
                           color: flipFlop ? EventBoxColor.BLUE : EventBoxColor.RED,
                           brightness: 0,
                           transition: TransitionType.INTERPOLATE,
                        },
                     ],
                     beatDistribution: 1.999,
                  },
               ],
            },
         );
         data.addLightRotationEventBoxGroups({
            time: time + 128,
            id,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 2,
                  },
                  events: [
                     {
                        rotation: flipFlop ? 90 : 135,
                        easing: EaseType.INOUT_QUAD,
                     },
                  ],
                  flip: 1,
                  beatDistribution: 3.999,
                  rotationDistribution: flipFlop ? 45 : -45,
                  affectFirst: 1,
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
                  events: [
                     {
                        rotation: flipFlop ? 180 : 225,
                        easing: EaseType.INOUT_QUAD,
                     },
                  ],
                  flip: 1,
                  beatDistribution: 3.999,
                  rotationDistribution: flipFlop ? 45 : -45,
                  affectFirst: 1,
               },
            ],
         });
      }
   }
}
