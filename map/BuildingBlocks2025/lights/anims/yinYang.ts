import {
   clamp,
   EasingsFn,
   lerpVector,
   normalize,
   pRandomFn,
   range,
   shuffle,
   types,
   vectorAdd,
   vectorMul,
   vectorSub,
} from '@bsmap';
import { YIN_YANG_MODEL_DATA } from '../models/yinYang.ts';
import { hideEnvironment, showEnvironment } from './hider.ts';

export function create(): types.wrapper.ICustomDataDifficulty {
   const pRandom = pRandomFn('Yin Yang');
   for (let i = 0; i < 17; i++) {
      pRandom();
   }

   const center = YIN_YANG_MODEL_DATA[0].position!;

   const customEvents: types.v3.ICustomEvent[] = [];
   YIN_YANG_MODEL_DATA.forEach((e, i) => {
      e.track = 'yinYang' + i;
   });

   hideEnvironment(0, YIN_YANG_MODEL_DATA);
   hideEnvironment(485, YIN_YANG_MODEL_DATA);
   hideEnvironment(583, YIN_YANG_MODEL_DATA);
   hideEnvironment(711, YIN_YANG_MODEL_DATA);

   shuffle([...YIN_YANG_MODEL_DATA], pRandom).forEach((e, i) => {
      const randomPos = vectorAdd(e.position!, [
         Math.cos((i / YIN_YANG_MODEL_DATA.length) * Math.PI * 2) *
         pRandom(20, 25),
         Math.sin((i / YIN_YANG_MODEL_DATA.length) * Math.PI * 2) *
         pRandom(20, 25),
         0,
      ]);

      const lerpCloser = lerpVector(0.02, randomPos, e.position!);
      customEvents.push(
         {
            b: 454,
            t: 'AnimateTrack',
            d: {
               track: e.track!,
               duration: 0.9375,
               position: [
                  [...randomPos, 0, 'easeStep'],
                  [...lerpCloser, 0.25, 'easeOutQuad'],
                  [...e.position!, 1, 'easeInCirc'],
               ],
               scale: [
                  [
                     ...vectorMul([1, 1, 1], Math.max(...e.scale!)),
                     0,
                     'easeStep',
                  ],
                  [
                     ...vectorMul([1, 1, 1], Math.max(...e.scale!)),
                     0.75,
                     'easeStep',
                  ],
                  [...vectorMul(e.scale!, 0), 1, 'easeInQuad'],
               ],
            },
         },
         {
            b: 678,
            t: 'AnimateTrack',
            d: {
               track: e.track!,
               duration: 0.9375,
               position: [
                  [...randomPos, 0, 'easeStep'],
                  [...lerpCloser, 0.25, 'easeOutQuad'],
                  [...e.position!, 1, 'easeInCirc'],
               ],
               scale: [
                  [0, 0, 0, 0, 'easeStep'],
                  [
                     ...vectorMul([1, 1, 1], Math.max(...e.scale!)),
                     0.5,
                     'easeOutQuad',
                  ],
                  [
                     ...vectorMul([1, 1, 1], Math.max(...e.scale!)),
                     0.75,
                     'easeStep',
                  ],
                  [...e.scale!, 1, 'easeInQuart'],
               ],
            },
         },
         {
            b: 455,
            t: 'AnimateTrack',
            d: {
               track: e.track!,
               duration: 2,
               position: [
                  [...center, 0, 'easeStep'],
                  [
                     ...lerpVector(0.8375, center, e.position!),
                     0.25,
                     'easeLinear',
                  ],
                  [...e.position!, 1, 'easeOutBack'],
               ],
               scale: [
                  [0, 0, 0, 0, 'easeStep'],
                  [
                     ...lerpVector(0.8375, [0, 0, 0], e.scale!),
                     0.25,
                     'easeLinear',
                  ],
                  [...e.scale!, 1, 'easeOutBack'],
               ],
            },
         },
         {
            b: 581,
            t: 'AnimateTrack',
            d: {
               track: e.track!,
               duration: 2,
               position: [
                  [...center, 0, 'easeStep'],
                  [
                     ...lerpVector(0.75, center, e.position!),
                     0.1875,
                     'easeLinear',
                  ],
                  [...e.position!, 1, 'easeOutBack'],
               ],
               scale: [
                  [0, 0, 0, 0, 'easeStep'],
                  [
                     ...lerpVector(0.75, [0, 0, 0], e.scale!),
                     0.1875,
                     'easeLinear',
                  ],
                  [...e.scale!, 1, 'easeOutBack'],
               ],
            },
         },
      );
      for (let t = 457; t < 485; t++) {
         customEvents.push({
            b: t,
            t: 'AnimateTrack',
            d: {
               track: e.track!,
               duration: 1,
               position: [
                  [...e.position!, 0, 'easeStep'],
                  [
                     ...vectorAdd(
                        e.position!,
                        vectorMul(
                           vectorSub(e.position!, center),
                           clamp(
                              EasingsFn.easeInQuad(normalize(t, 455, 485)),
                              0,
                              0.075,
                           ),
                        ),
                     ),
                     0.375,
                     'easeOutQuad',
                  ],
                  [...e.position!, 1, 'easeInQuad'],
               ],
               scale: [
                  [...e.scale!, 0, 'easeStep'],
                  [
                     ...vectorAdd(
                        e.scale!,
                        vectorMul(e.scale!, [
                           clamp(
                              EasingsFn.easeInQuad(normalize(t, 455, 485)),
                              0,
                              0.075,
                           ),
                           clamp(
                              EasingsFn.easeInQuad(normalize(t, 455, 485)),
                              0,
                              0.075,
                           ),
                           1,
                        ]),
                     ),
                     0.375,
                     'easeOutQuad',
                  ],
                  [...e.scale!, 1, 'easeInQuad'],
               ],
            },
         });
      }
   });

   for (const _ of range(10)) pRandom();
   shuffle([...YIN_YANG_MODEL_DATA], pRandom).forEach((e, i) => {
      const randomPos = vectorAdd(e.position!, [
         Math.cos((i / YIN_YANG_MODEL_DATA.length) * Math.PI * 2) *
         pRandom(16, 24),
         Math.sin((i / YIN_YANG_MODEL_DATA.length) * Math.PI * 2) *
         pRandom(16, 24),
         0,
      ]);

      customEvents.push({
         b: 710,
         t: 'AnimateTrack',
         d: {
            track: e.track!,
            duration: 1,
            position: [
               [...e.position!, 0, 'easeStep'],
               [...randomPos, 1, 'easeOutQuad'],
            ],
            scale: [
               [...vectorMul([1, 1, 1], Math.max(...e.scale!)), 0, 'easeStep'],
            ],
         },
      });
   });

   const timing = [0, 0.75, 1.5, 2.25, 2.5, 3, 3.5, 4.25, 5, 5.75, 6.5];
   const repeat = [679, 687, 695];
   const timed = [0, 0.75, 1.5, 2.25, 2.5, 3, 3.5, 4]
      .map((t) => t + 703)
      .concat(timing.flatMap((t) => repeat.map((r) => r + t)));
   YIN_YANG_MODEL_DATA.forEach((e) => {
      for (const rep of repeat) {
         customEvents.push({
            b: rep + 7,
            t: 'AnimateTrack',
            d: {
               track: e.track!,
               duration: 0.75,
               position: [
                  [
                     ...vectorAdd(
                        e.position!,
                        vectorMul(vectorSub(e.position!, center), 0.125),
                     ),
                     0,
                     'easeStep',
                  ],
                  [...e.position!, 1, 'easeOutQuad'],
               ],
               scale: [
                  [
                     ...vectorAdd(
                        e.scale!,
                        vectorMul(e.scale!, [0.125, 0.125, 1]),
                     ),
                     0,
                     'easeStep',
                  ],
                  [...e.scale!, 1, 'easeOutQuad'],
               ],
            },
         });
      }
      for (const t of timed) {
         customEvents.push({
            b: t,
            t: 'AnimateTrack',
            d: {
               track: e.track!,
               duration: 0.5,
               position: [
                  [
                     ...vectorAdd(
                        e.position!,
                        vectorMul(vectorSub(e.position!, center), 0.075),
                     ),
                     0,
                     'easeStep',
                  ],
                  [...e.position!, 1, 'easeOutQuad'],
               ],
               scale: [
                  [
                     ...vectorAdd(
                        e.scale!,
                        vectorMul(e.scale!, [0.075, 0.075, 1]),
                     ),
                     0,
                     'easeStep',
                  ],
                  [...e.scale!, 1, 'easeOutQuad'],
               ],
            },
         });
      }
   });

   return { customEvents };
}
