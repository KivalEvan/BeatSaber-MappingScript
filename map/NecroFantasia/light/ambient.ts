import { EventLightValue, utils, v3 } from '../../../depsLocal.ts';

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
                  floatValue: utils.lerp(
                     utils.normalize(time, previous.time, next.time),
                     previous.floatValue,
                     next.floatValue
                  ),
               });
            }
         }
         previous = next;
      });
}

export default function (data: v3.Difficulty) {
   data.addColorBoostEvents({ time: 0, toggle: true }, { time: 100, toggle: true });
   data.addBasicEvents(
      { time: 4, value: EventLightValue.RED_ON, floatValue: 0 },
      { time: 6, value: EventLightValue.RED_TRANSITION, floatValue: 2 },
      { time: 16, value: EventLightValue.RED_TRANSITION, floatValue: 0.5 },
      { time: 22, value: EventLightValue.RED_TRANSITION, floatValue: 1 },
      { time: 30, value: EventLightValue.RED_TRANSITION, floatValue: 0.5 },
      { time: 38, value: EventLightValue.RED_TRANSITION, floatValue: 1 },
      { time: 46, value: EventLightValue.RED_TRANSITION, floatValue: 0.5 },
      { time: 54, value: EventLightValue.RED_TRANSITION, floatValue: 1 },
      { time: 55, value: EventLightValue.RED_TRANSITION, floatValue: 1.5 },
      { time: 64, value: EventLightValue.RED_TRANSITION, floatValue: 0 }
   );

   bakeTransitionLight(data);
}
