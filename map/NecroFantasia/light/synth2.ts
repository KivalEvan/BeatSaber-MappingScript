import {
   EaseType,
   EventLightColor,
   IndexFilterType,
   pRandomFn,
   range as rangeEx,
   TransitionType,
   types,
   v3,
} from '@bsmap';
import { loopArray } from '../../../utility/iterator.ts';
import { WeaveID } from './id.ts';
function range(start: number, end?: number, step?: number): number[] {
   return rangeEx(start, end!, step!, true);
}

const loopGen = loopArray([5, 4, 2, 4, 3, 1, 5, 4, 2, 3, 0, 6]);
const timingAry = [0, 1.5, 3, 4.5, 6, 7, 8, 9.5, 11, 12.5, 14, 15];
const timeInterval = 16;
const duration = 3.5;
const loopLeft = loopArray([WeaveID.SIDE_BOTTOM_LEFT, WeaveID.SIDE_TOP_LEFT]);
const loopRight = loopArray([
   WeaveID.SIDE_BOTTOM_RIGHT,
   WeaveID.SIDE_TOP_RIGHT,
]);

export default function (data: types.wrapper.IWrapBeatmap) {
   const pRandom = pRandomFn('Necro Fantasia');
   let flipFlop = false;
   for (
      const time of [
         ...range(294, 357, timeInterval),
         ...range(486, 541, timeInterval),
         ...range(614, 805, timeInterval),
         ...range(934, 990, timeInterval),
      ]
   ) {
      for (const timeOffset of timingAry) {
         if (
            (time + timeOffset >= 310 && time + timeOffset < 318) ||
            (time + timeOffset >= 342 && time + timeOffset < 358) ||
            (time + timeOffset >= 486 && time + timeOffset < 490) ||
            (time + timeOffset >= 542 && time + timeOffset < 550) ||
            (time + timeOffset >= 630 && time + timeOffset < 638) ||
            (time + timeOffset >= 658 && time + timeOffset < 678) ||
            (time + timeOffset >= 790 && time + timeOffset < 806) ||
            (time + timeOffset >= 934 && time + timeOffset < 938)
         ) {
            continue;
         }
         const currentId = flipFlop ? loopLeft.next().value! : loopRight.next().value!;
         const currentFilter = loopGen.next().value!;
         const currentRotation = pRandom(-60, 60);
         for (const it of range(0, 1, 2)) {
            data.addLightColorEventBoxGroups({
               time: time + timeOffset,
               id: currentId + it,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: currentFilter,
                        p1: 0,
                     },
                     events: [
                        { color: EventLightColor.WHITE, brightness: 0 },
                        {
                           time: 0.375,
                           color: EventLightColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: 1.5,
                        },
                        {
                           time: 1,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: duration,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                           brightness: 0,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: currentFilter + 1,
                        p1: 0,
                     },
                     events: [
                        { color: EventLightColor.WHITE, brightness: 0 },
                        {
                           time: 0.375,
                           color: EventLightColor.WHITE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: duration,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            });
            data.addLightRotationEventBoxGroups({
               time: time + timeOffset,
               id: currentId + it,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: currentFilter,
                        p1: 0,
                     },
                     events: [
                        { rotation: currentRotation },
                        { time: duration, previous: 1 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: currentFilter + 1,
                        p1: 0,
                     },
                     events: [
                        { rotation: currentRotation - 180 },
                        { time: duration, previous: 1 },
                     ],
                  },
               ],
            });
         }
         flipFlop = !flipFlop;
      }
      flipFlop = !flipFlop;
   }
}
