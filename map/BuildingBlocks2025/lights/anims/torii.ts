import {
   EasingsFn,
   lerp,
   normalize,
   pRandomFn,
   shuffle,
   types,
   vectorAdd,
   vectorMul,
} from '@bsmap';
import { TORII_MODEL_DATA } from '../models/torii.ts';
import { hideEnvironment, showEnvironment } from './hider.ts';

export function create(): types.wrapper.ICustomDataDifficulty {
   const pRandom = pRandomFn('Torii');
   const customEvents: types.v3.ICustomEvent[] = [];
   TORII_MODEL_DATA.forEach((e, i) => {
      e.track = 'torii' + i;
   });

   showEnvironment(0, TORII_MODEL_DATA);
   showEnvironment(103, TORII_MODEL_DATA);
   shuffle([...TORII_MODEL_DATA], pRandom).forEach((e, i) => {
      customEvents.push(
         // {
         //    b: 7,
         //    t: 'AnimateTrack',
         //    d: {
         //       track: e.track!,
         //       duration:
         //          2 +
         //          lerp(
         //             EasingsFn.easeInQuad(
         //                normalize(i, 0, TORII_MODEL_DATA.length - 1)
         //             ),
         //             0,
         //             2
         //          ),
         //       position: [
         //          [
         //             ...vectorAdd(vectorMul(e.position!, 1.25), [
         //                pRandom(-2, 2),
         //                pRandom(-2, 2),
         //                pRandom(-2, 2),
         //             ]),
         //             0,
         //             'easeStep',
         //          ],
         //          [...vectorAdd(e.position!, [0, 0, 40]), 1, 'easeOutCirc'],
         //       ],
         //       rotation: [
         //          [
         //             ...vectorAdd(e.rotation || [0, 0, 0], [
         //                pRandom(-30, 30),
         //                pRandom(-30, 30),
         //                pRandom(-30, 30),
         //             ]),
         //             0,
         //             'easeStep',
         //          ],
         //          [...(e.rotation || [0, 0, 0]), 1, 'easeOutQuart'],
         //       ],
         //    },
         // },
         {
            b: 7,
            t: 'AnimateTrack',
            d: {
               track: e.track!,
               position: [
                  [...e.position!, 0, 'easeStep'],
                  [...vectorAdd(e.position!, [0, 0, 36]), 1, 'easeOutCirc'],
               ],
               duration: 4,
            },
         },
         {
            b: 11,
            t: 'AnimateTrack',
            d: {
               track: e.track!,
               position: [
                  [...vectorAdd(e.position!, [0, 0, 36]), 0, 'easeStep'],
                  [...vectorAdd(e.position!, [0, 0, 32]), 1, 'easeInOutQuad'],
               ],
               duration: 60,
            },
         },
         {
            b: 711,
            t: 'AnimateTrack',
            d: {
               track: e.track!,
               position: [
                  [...e.position!, 0, 'easeStep'],
                  [...vectorAdd(e.position!, [0, 0, 36]), 1, 'easeOutCirc'],
               ],
               duration: 4,
            },
         },
         {
            b: 715,
            t: 'AnimateTrack',
            d: {
               track: e.track!,
               position: [
                  [...vectorAdd(e.position!, [0, 0, 36]), 0, 'easeStep'],
                  [...vectorAdd(e.position!, [0, 0, 32]), 1, 'easeInOutQuad'],
               ],
               duration: 60,
            },
         },
      );
   });

   return { customEvents };
}
