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
import { hideEnvironment, showEnvironment } from './hider.ts';

export function create(): types.wrapper.ICustomDataDifficulty {
   const pRandom = pRandomFn('Laser Set');
   const customEvents: types.v3.ICustomEvent[] = [];

   for (const mirrorX of [-1, 1]) {
      for (const rep of [679, 687, 695]) {
         customEvents.push(
            {
               b: rep,
               t: 'AnimateTrack',
               d: {
                  track: `laserSet${mirrorX === -1 ? 'L' : 'R'}`,
                  duration: 7,
                  position: [
                     [mirrorX * 1.1, 0, 77.18, 0, 'easeStep'],
                     [mirrorX * 32, 0, 77.18, 1, 'easeInOutQuad'],
                  ],
                  rotation: [
                     [0, 180, 0, 0, 'easeStep'],
                     [0, mirrorX * 120, 0, 1, 'easeInOutQuad'],
                  ],
               },
            },
            {
               b: rep + 7,
               t: 'AnimateTrack',
               d: {
                  track: `laserSet${mirrorX === -1 ? 'L' : 'R'}`,
                  duration: 1,
                  position: [
                     [mirrorX * 32, 0, 77.18, 0, 'easeStep'],
                     [mirrorX * 1.1, 0, 77.18, 1, 'easeOutBounce'],
                  ],
                  rotation: [
                     [0, mirrorX * 120, 0, 0, 'easeStep'],
                     [0, 180, 0, 1, 'easeOutQuad'],
                  ],
               },
            },
         );
      }
      customEvents.push(
         {
            b: 703,
            t: 'AnimateTrack',
            d: {
               track: `laserSet${mirrorX === -1 ? 'L' : 'R'}`,
               duration: 4,
               position: [
                  [mirrorX * 1.1, 0, 77.18, 0, 'easeStep'],
                  [mirrorX * 32, 0, 77.18, 1, 'easeInOutQuad'],
               ],
               rotation: [
                  [0, 180, 0, 0, 'easeStep'],
                  [0, mirrorX * 120, 0, 1, 'easeInOutQuad'],
               ],
            },
         },
         {
            b: 707,
            t: 'AnimateTrack',
            d: {
               track: `laserSet${mirrorX === -1 ? 'L' : 'R'}`,
               duration: 2,
               position: [
                  [mirrorX * 32, 0, 77.18, 0, 'easeStep'],
                  [mirrorX * 1.1, 0, 77.18, 1, 'easeOutBounce'],
               ],
               rotation: [
                  [0, mirrorX * 120, 0, 0, 'easeStep'],
                  [0, 180, 0, 1, 'easeOutQuad'],
               ],
            },
         },
      );
   }

   return { customEvents };
}
