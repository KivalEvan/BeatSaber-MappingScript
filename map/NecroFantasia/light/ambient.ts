import {
   Axis,
   DistributionType,
   EaseType,
   EventBoxColor,
   EventLightValue,
   IndexFilterType,
   lerp,
   normalize,
   TransitionType,
   v3,
} from '../../../depsLocal.ts';
import { itNum } from '../../../utility/iterator.ts';
import { WeaveID } from './id.ts';

const bakeTransitionInterval = 1 / 16;
function bakeTransitionLight(data: v3.Difficulty) {
   let previous: v3.BasicEvent | null = null;
   data.basicEvents
      .map((e) => e)
      .forEach((next) => {
         if (previous && next.isTransition()) {
            next.value -= 3;
            for (let time = previous.time; time < next.time; time += bakeTransitionInterval) {
               data.addBasicEvents({
                  time,
                  value: previous.value,
                  floatValue: lerp(
                     normalize(time, previous.time, next.time),
                     previous.floatValue,
                     next.floatValue,
                  ),
               });
            }
         }
         previous = next;
      });
}

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
      { time: 996.5, value: EventLightValue.BLUE_ON, floatValue: 0 },
      { time: 997, value: EventLightValue.RED_TRANSITION, floatValue: 1.5 },
      { time: 1002, value: EventLightValue.RED_TRANSITION, floatValue: 1 },
      { time: 1010, value: EventLightValue.BLUE_TRANSITION, floatValue: 0 },
   );

   for (const time of flashTime) {
      data.addBasicEvents(
         { time, value: EventLightValue.WHITE_ON, floatValue: 0 },
         { time: time + 1, value: EventLightValue.WHITE_TRANSITION, floatValue: 1 },
         { time: time + 12, value: EventLightValue.WHITE_TRANSITION, floatValue: 0 },
      );
      for (const id of [WeaveID.INNER_BOTTOM_LEFT, WeaveID.INNER_BOTTOM_RIGHT]) {
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
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 105, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
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
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
                     events: [{ rotation: 95, easing: EaseType.OUT_QUAD }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                     events: [{ rotation: 240, easing: EaseType.OUT_QUAD }],
                  },
               ],
            },
         );
      }
   }

   for (const id of itNum(WeaveID.INNER_TOP_LEFT, WeaveID.INNER_TOP_RIGHT)) {
   }

   // bakeTransitionLight(data); // because linux build is broken for some reason
}
