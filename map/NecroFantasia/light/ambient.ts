import {
   Axis,
   deepCopy,
   DistributionType,
   EaseType,
   EventBoxColor,
   EventLightValue,
   IndexFilterType,
   pRandomFn,
   RandomType,
   TransitionType,
   types,
   v3,
} from '../../../depsLocal.ts';
import { WeaveID } from './id.ts';

const flashTime = [
   102,
   198,
   230,
   294,
   326,
   358,
   390,
   422,
   454,
   486,
   518,
   550,
   582,
   614,
   646,
   806,
   838,
   870,
   902,
   934,
];

export default function (data: v3.Difficulty) {
   data.addBasicEvents(
      { time: 6, value: EventLightValue.BLUE_ON, floatValue: 0 },
      { time: 10, value: EventLightValue.RED_TRANSITION, floatValue: 1.5 },
      { time: 16, value: EventLightValue.RED_TRANSITION, floatValue: 0.75 },
      { time: 22, value: EventLightValue.RED_TRANSITION, floatValue: 1 },
      { time: 30, value: EventLightValue.RED_TRANSITION, floatValue: 0.75 },
      { time: 38, value: EventLightValue.RED_TRANSITION, floatValue: 1 },
      { time: 46, value: EventLightValue.RED_TRANSITION, floatValue: 0.75 },
      { time: 54, value: EventLightValue.RED_TRANSITION, floatValue: 1 },
      { time: 64, value: EventLightValue.RED_TRANSITION, floatValue: 0.75 },
      { time: 70, value: EventLightValue.BLUE_TRANSITION, floatValue: 0 },
      { time: 354, value: EventLightValue.BLUE_ON, floatValue: 0 },
      { time: 354.25, value: EventLightValue.BLUE_TRANSITION, floatValue: 1.5 },
      { time: 357, value: EventLightValue.BLUE_TRANSITION, floatValue: 0 },
      { time: 678, value: EventLightValue.WHITE_ON, floatValue: 0 },
      { time: 680, value: EventLightValue.RED_TRANSITION, floatValue: 2 },
      { time: 686, value: EventLightValue.BLUE_TRANSITION, floatValue: 1 },
      { time: 692, value: EventLightValue.RED_TRANSITION, floatValue: 1 },
      { time: 700, value: EventLightValue.BLUE_TRANSITION, floatValue: 1 },
      { time: 708, value: EventLightValue.RED_TRANSITION, floatValue: 1 },
      { time: 716, value: EventLightValue.BLUE_TRANSITION, floatValue: 1 },
      { time: 724, value: EventLightValue.RED_TRANSITION, floatValue: 1 },
      { time: 734, value: EventLightValue.BLUE_TRANSITION, floatValue: 1 },
      { time: 742, value: EventLightValue.RED_TRANSITION, floatValue: 0 },
      { time: 790, value: EventLightValue.BLUE_ON, floatValue: 0 },
      { time: 792, value: EventLightValue.RED_TRANSITION, floatValue: 2 },
      { time: 796, value: EventLightValue.RED_TRANSITION, floatValue: 4 },
      { time: 800, value: EventLightValue.BLUE_TRANSITION, floatValue: 0 },
      { time: 997.5, value: EventLightValue.WHITE_ON, floatValue: 0 },
      { time: 998, value: EventLightValue.WHITE_TRANSITION, floatValue: 2 },
      { time: 1002, value: EventLightValue.RED_TRANSITION, floatValue: 1.5 },
      { time: 1014, value: EventLightValue.RED_TRANSITION, floatValue: 0 },
   );
   for (let id = 0; id < 12; id++) {
      data.addLightRotationEventBoxGroups(
         {
            time: 797.999,
            id,
            boxes: [
               {
                  axis: Axis.Y,
                  events: [{ previous: 1 }],
               },
            ],
         },
         {
            time: 677.999,
            id,
            boxes: [
               {
                  axis: Axis.Y,
                  events: [{ previous: 1 }],
               },
            ],
         },
         {
            time: 661.999,
            id,
            boxes: [
               {
                  axis: Axis.Y,
                  events: [{ previous: 1 }],
               },
            ],
         },
      );
   }

   for (const time of flashTime) {
      data.addBasicEvents(
         { time, value: EventLightValue.WHITE_ON, floatValue: 0 },
         {
            time: time + 2,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: 2,
         },
         {
            time: time + 8,
            value: EventLightValue.RED_TRANSITION,
            floatValue: 1,
         },
         {
            time: time + 15.9999,
            value: EventLightValue.BLUE_TRANSITION,
            floatValue: 0,
         },
      );
      for (
         const id of [
            WeaveID.INNER_BOTTOM_LEFT,
            WeaveID.INNER_BOTTOM_RIGHT,
         ]
      ) {
         data.addLightColorEventBoxGroups(
            {
               time,
               id,
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 0 },
                        {
                           time: 1,
                           color: EventBoxColor.WHITE,
                           brightness: 1,
                           transition: TransitionType.INTERPOLATE,
                        },
                     ],
                     beatDistributionType: DistributionType.STEP,
                     beatDistribution: 1 / 4,
                  },
               ],
            },
            {
               time: time + 7.999,
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
                     beatDistribution: time === 294 || time === 614 ? 0 : 1 / 2,
                     beatDistributionType: DistributionType.STEP,
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
                     events: [{ rotation: 225, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
            {
               time: time + (time === 294 || time === 614 ? 7.99 : 16),
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     events: [{ rotation: 0 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ rotation: 95, easing: EaseType.OUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     events: [{ rotation: 240, easing: EaseType.OUT_QUAD }],
                  },
               ],
            },
         );
      }
   }

   const pRandom = pRandomFn('sakura');
   const lightBox: types.DeepPartial<types.wrapper.IWrapLightColorEventBoxAttribute>[] = [
      {
         filter: {
            random: RandomType.RANDOM_ELEMENTS,
            seed: pRandom(-999999, 999999, true),
         },
         beatDistribution: 16,
         beatDistributionType: DistributionType.WAVE,
         events: [
            { color: EventBoxColor.WHITE, brightness: 0 },
            {
               time: 1,
               color: EventBoxColor.WHITE,
               brightness: 2,
               transition: TransitionType.INTERPOLATE,
            },
            {
               time: 4,
               color: EventBoxColor.RED,
               brightness: 1.5,
               transition: TransitionType.INTERPOLATE,
            },
            {
               time: 8,
               color: EventBoxColor.RED,
               brightness: 1,
               transition: TransitionType.INTERPOLATE,
            },
            {
               time: 14,
               color: EventBoxColor.RED,
               brightness: 0,
               transition: TransitionType.INTERPOLATE,
            },
         ],
      },
   ];
   data.addLightColorEventBoxGroups(
      {
         time: 997,
         id: WeaveID.DISTANT_LEFT,
         boxes: deepCopy(lightBox).map((e) => {
            e.filter!.seed = pRandom(-999999, 999999, true);
            return e;
         }),
      },
      {
         time: 997.25,
         id: WeaveID.DISTANT_RIGHT,
         boxes: deepCopy(lightBox).map((e) => {
            e.filter!.seed = pRandom(-999999, 999999, true);
            return e;
         }),
      },
      {
         time: 997.125,
         id: WeaveID.DISTANT_BOTTOM,
         boxes: deepCopy(lightBox).map((e) => {
            e.filter!.seed = pRandom(-999999, 999999, true);
            return e;
         }),
      },
   );
}
