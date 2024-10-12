import {
   EaseType,
   EventBoxColor,
   IndexFilterType,
   range as rangeEx,
   TransitionType,
   v3,
} from '../../../depsLocal.ts';
import { WeaveID } from './id.ts';
function range(start: number, end?: number, step?: number): number[] {
   return rangeEx(start, end!, step!, true);
}

const pattern1 = [2, 0, 3, 1, 5, 4, 6, 7];
const pattern2 = [2, 0, 3, 1, 6, 7, 0, 4];
const timeStart = 70;
const timeInterval = 4;
const timeRepeat = 4;
const timeEnd = 614;
const timeSkip = [130, 222, 226];
const timeOverride = [578, 610];

export default function (data: types.wrapper.IWrapBeatmap) {
   for (const id of range(WeaveID.SIDE_BOTTOM_LEFT, WeaveID.SIDE_TOP_RIGHT)) {
      let flipFlop = false;
      for (
         const time of [
            ...range(timeStart, 293, timeInterval),
            ...range(550, timeEnd - 1, timeInterval),
         ]
      ) {
         if (timeSkip.includes(time)) continue;
         let pattern = (time - (timeStart + timeInterval * (timeRepeat - 1))) %
               (timeInterval * timeRepeat)
            ? pattern1
            : pattern2;
         if (timeOverride.includes(time)) pattern = pattern1;
         for (const offset of range(0, 7)) {
            data.addLightColorEventBoxGroups({
               time: time + offset * 0.5,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: pattern[offset],
                        p1: 0,
                     },
                     events: [
                        { color: EventBoxColor.RED, brightness: 1.25 },
                        {
                           time: 1,
                           color: EventBoxColor.BLUE,
                           easing: EaseType.LINEAR,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            });
         }
         if ((time - timeStart) % (timeInterval * timeRepeat * 2)) continue;
         data.addLightRotationEventBoxGroups({
            time,
            id,
            boxes: [
               {
                  events: [
                     {
                        rotation: flipFlop ? 90 : 135,
                        easing: EaseType.INOUT_QUAD,
                     },
                  ],
                  flip: 1,
                  beatDistribution: time === timeStart ? 0 : 2,
                  rotationDistribution: flipFlop ? 45 : -45,
                  affectFirst: 1,
               },
            ],
         });
         flipFlop = !flipFlop;
      }
      data.addLightRotationEventBoxGroups(
         {
            time: 293.999,
            id,
            boxes: [
               {
                  events: [
                     {
                        rotation: flipFlop ? 90 : 135,
                        easing: EaseType.INOUT_QUAD,
                     },
                  ],
                  flip: 1,
                  rotationDistribution: flipFlop ? 45 : -45,
                  affectFirst: 1,
               },
            ],
         },
         {
            time: 613.999,
            id,
            boxes: [
               {
                  events: [
                     {
                        rotation: flipFlop ? 90 : 135,
                        easing: EaseType.INOUT_QUAD,
                     },
                  ],
                  flip: 1,
                  rotationDistribution: flipFlop ? 45 : -45,
                  affectFirst: 1,
               },
            ],
         },
      );
   }
}
