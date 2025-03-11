import {
   clamp,
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
   const pRandom = pRandomFn('Tri Walls');
   const customEvents: types.v3.ICustomEvent[] = [];
   const DEFAULT_Y_T = -2.7;
   const DEFAULT_Y_B = 2.72;
   const DEFAULT_Z = 82.68;
   const DEFAULT_CON_Z = 82.86;
   const DEFAULT_LASER_Z = 82.18;

   const sides = ['L', 'R'];
   const OFFSET_Y = 16;
   for (const side of sides) {
      const mirrorX = side === 'L' ? 1 : -1;
      customEvents.push(
         {
            b: 454,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}T`,
               duration: 1,
               position: [
                  [0, DEFAULT_Y_T + OFFSET_Y, DEFAULT_CON_Z, 0, 'easeStep'],
                  [
                     mirrorX * -20,
                     DEFAULT_Y_T + OFFSET_Y,
                     DEFAULT_CON_Z,
                     0.5,
                     'easeOutQuad',
                  ],
                  [
                     mirrorX * 60,
                     DEFAULT_Y_T + OFFSET_Y,
                     DEFAULT_CON_Z,
                     1,
                     'easeInCirc',
                  ],
               ],
            },
         },
         {
            b: 454,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}B`,
               duration: 1,
               position: [
                  [0, DEFAULT_Y_B + OFFSET_Y, DEFAULT_CON_Z, 0, 'easeStep'],
                  [
                     mirrorX * -20,
                     DEFAULT_Y_B + OFFSET_Y,
                     DEFAULT_CON_Z,
                     0.5,
                     'easeOutQuad',
                  ],
                  [
                     mirrorX * 60,
                     DEFAULT_Y_B + OFFSET_Y,
                     DEFAULT_CON_Z,
                     1,
                     'easeInCirc',
                  ],
               ],
            },
         },
         {
            b: 454,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}T`,
               duration: 1,
               position: [
                  [0, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                  [
                     mirrorX * -20,
                     OFFSET_Y,
                     DEFAULT_LASER_Z,
                     0.5,
                     'easeOutQuad',
                  ],
                  [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeInCirc'],
               ],
            },
         },
         {
            b: 454,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}B`,
               duration: 1,
               position: [
                  [0, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                  [
                     mirrorX * -20,
                     OFFSET_Y,
                     DEFAULT_LASER_Z,
                     0.5,
                     'easeOutQuad',
                  ],
                  [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeInCirc'],
               ],
            },
         },
         {
            b: 455,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}T`,
               position: [
                  [mirrorX * 60, DEFAULT_Y_T, DEFAULT_CON_Z, 0, 'easeStep'],
               ],
            },
         },
         {
            b: 455,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}B`,
               position: [
                  [mirrorX * 60, DEFAULT_Y_B, DEFAULT_CON_Z, 0, 'easeStep'],
               ],
            },
         },
         {
            b: 455,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}T`,
               position: [[mirrorX * 60, 0, DEFAULT_LASER_Z, 0, 'easeStep']],
            },
         },
         {
            b: 455,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}B`,
               position: [[mirrorX * 60, 0, DEFAULT_LASER_Z, 0, 'easeStep']],
            },
         },
         {
            b: 485,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}T`,
               position: [
                  [0, DEFAULT_Y_T + OFFSET_Y, DEFAULT_CON_Z, 0, 'easeStep'],
               ],
            },
         },
         {
            b: 485,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}B`,
               position: [
                  [0, DEFAULT_Y_B + OFFSET_Y, DEFAULT_CON_Z, 0, 'easeStep'],
               ],
            },
         },
         {
            b: 485,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}T`,
               position: [[0, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep']],
            },
         },
         {
            b: 485,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}B`,
               position: [[0, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep']],
            },
         },
         {
            b: 580.999,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}T`,
               position: [
                  [
                     mirrorX * 60,
                     DEFAULT_Y_T,
                     DEFAULT_CON_Z,
                     0,
                     'easeStep',
                  ],
               ],
            },
         },
         {
            b: 580.999,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}B`,
               position: [
                  [
                     mirrorX * 60,
                     DEFAULT_Y_B,
                     DEFAULT_CON_Z,
                     0,
                     'easeStep',
                  ],
               ],
            },
         },
         {
            b: 580.999,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}T`,
               position: [
                  [mirrorX * 60, 0, DEFAULT_LASER_Z, 0, 'easeStep'],
               ],
            },
         },
         {
            b: 580.999,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}B`,
               position: [
                  [mirrorX * 60, 0, DEFAULT_LASER_Z, 0, 'easeStep'],
               ],
            },
         },
         {
            b: 582.999,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}T`,
               position: [
                  [0, OFFSET_Y + DEFAULT_Y_T, DEFAULT_CON_Z, 0, 'easeStep'],
               ],
            },
         },
         {
            b: 582.999,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}B`,
               position: [
                  [0, OFFSET_Y + DEFAULT_Y_B, DEFAULT_CON_Z, 0, 'easeStep'],
               ],
            },
         },
         {
            b: 582.999,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}T`,
               position: [[0, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep']],
            },
         },
         {
            b: 582.999,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}B`,
               position: [[0, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep']],
            },
         },
         {
            b: 678,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}T`,
               duration: 1,
               position: [
                  [0, DEFAULT_Y_T, DEFAULT_CON_Z, 0, 'easeStep'],
                  [
                     mirrorX * -20,
                     DEFAULT_Y_T + OFFSET_Y,
                     DEFAULT_CON_Z,
                     0.5,
                     'easeOutQuad',
                  ],
                  [
                     mirrorX * 60,
                     DEFAULT_Y_T + OFFSET_Y,
                     DEFAULT_CON_Z,
                     1,
                     'easeInCirc',
                  ],
               ],
            },
         },
         {
            b: 678,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}B`,
               duration: 1,
               position: [
                  [0, DEFAULT_Y_B, DEFAULT_CON_Z, 0, 'easeStep'],
                  [
                     mirrorX * -20,
                     DEFAULT_Y_B + OFFSET_Y,
                     DEFAULT_CON_Z,
                     0.5,
                     'easeOutQuad',
                  ],
                  [
                     mirrorX * 60,
                     DEFAULT_Y_B + OFFSET_Y,
                     DEFAULT_CON_Z,
                     1,
                     'easeInCirc',
                  ],
               ],
            },
         },
         {
            b: 678,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}T`,
               duration: 1,
               position: [
                  [0, 0, DEFAULT_LASER_Z, 0, 'easeStep'],
                  [
                     mirrorX * -20,
                     OFFSET_Y,
                     DEFAULT_LASER_Z,
                     0.5,
                     'easeOutQuad',
                  ],
                  [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeInCirc'],
               ],
            },
         },
         {
            b: 678,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}B`,
               duration: 1,
               position: [
                  [0, 0, DEFAULT_LASER_Z, 0, 'easeStep'],
                  [
                     mirrorX * -20,
                     OFFSET_Y,
                     DEFAULT_LASER_Z,
                     0.5,
                     'easeOutQuad',
                  ],
                  [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeInCirc'],
               ],
            },
         },
      );
      for (let r = 0; r < 14; r++) {
         const jump = lerp(clamp(normalize(r, 0, 8), 0, 1), 60.25, 64);
         customEvents.push(
            {
               b: 471 + r,
               t: 'AnimateTrack',
               d: {
                  track: `triCon${side}T`,
                  duration: 1,
                  position: [
                     [
                        mirrorX * 60,
                        DEFAULT_Y_T + OFFSET_Y,
                        DEFAULT_CON_Z,
                        0,
                        'easeStep',
                     ],
                     [
                        mirrorX * jump,
                        DEFAULT_Y_T + OFFSET_Y,
                        DEFAULT_CON_Z,
                        0.5,
                        'easeOutQuad',
                     ],
                     [
                        mirrorX * 60,
                        DEFAULT_Y_T + OFFSET_Y,
                        DEFAULT_CON_Z,
                        1,
                        'easeInCirc',
                     ],
                  ],
               },
            },
            {
               b: 471 + r,
               t: 'AnimateTrack',
               d: {
                  track: `triCon${side}B`,
                  duration: 1,
                  position: [
                     [
                        mirrorX * 60,
                        DEFAULT_Y_B + OFFSET_Y,
                        DEFAULT_CON_Z,
                        0,
                        'easeStep',
                     ],
                     [
                        mirrorX * jump,
                        DEFAULT_Y_B + OFFSET_Y,
                        DEFAULT_CON_Z,
                        0.5,
                        'easeOutQuad',
                     ],
                     [
                        mirrorX * 60,
                        DEFAULT_Y_B + OFFSET_Y,
                        DEFAULT_CON_Z,
                        1,
                        'easeInCirc',
                     ],
                  ],
               },
            },
            {
               b: 471 + r,
               t: 'AnimateTrack',
               d: {
                  track: `triLaser${side}T`,
                  duration: 1,
                  position: [
                     [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                     [
                        mirrorX * jump,
                        OFFSET_Y,
                        DEFAULT_LASER_Z,
                        0.5,
                        'easeOutQuad',
                     ],
                     [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeInCirc'],
                  ],
               },
            },
            {
               b: 471 + r,
               t: 'AnimateTrack',
               d: {
                  track: `triLaser${side}B`,
                  duration: 1,
                  position: [
                     [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                     [
                        mirrorX * jump,
                        OFFSET_Y,
                        DEFAULT_LASER_Z,
                        0.5,
                        'easeOutQuad',
                     ],
                     [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeInCirc'],
                  ],
               },
            },
         );
      }

      const repeat = [679, 687, 695];
      const build = 67.5;
      const jump = 62.5;
      for (const r of repeat) {
         customEvents.push(
            {
               b: r,
               t: 'AnimateTrack',
               d: {
                  track: `triCon${side}T`,
                  duration: 7,
                  position: [
                     [
                        mirrorX * 60,
                        DEFAULT_Y_T + OFFSET_Y,
                        DEFAULT_CON_Z,
                        0,
                        'easeStep',
                     ],
                     [
                        mirrorX * build,
                        DEFAULT_Y_T + OFFSET_Y,
                        DEFAULT_CON_Z,
                        1,
                        'easeInQuad',
                     ],
                  ],
               },
            },
            {
               b: r,
               t: 'AnimateTrack',
               d: {
                  track: `triCon${side}B`,
                  duration: 7,
                  position: [
                     [
                        mirrorX * 60,
                        DEFAULT_Y_B + OFFSET_Y,
                        DEFAULT_CON_Z,
                        0,
                        'easeStep',
                     ],
                     [
                        mirrorX * build,
                        DEFAULT_Y_B + OFFSET_Y,
                        DEFAULT_CON_Z,
                        1,
                        'easeInQuad',
                     ],
                  ],
               },
            },
            {
               b: r,
               t: 'AnimateTrack',
               d: {
                  track: `triLaser${side}T`,
                  duration: 7,
                  position: [
                     [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                     [
                        mirrorX * build,
                        OFFSET_Y,
                        DEFAULT_LASER_Z,
                        1,
                        'easeInQuad',
                     ],
                  ],
               },
            },
            {
               b: r,
               t: 'AnimateTrack',
               d: {
                  track: `triLaser${side}B`,
                  duration: 7,
                  position: [
                     [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                     [
                        mirrorX * build,
                        OFFSET_Y,
                        DEFAULT_LASER_Z,
                        1,
                        'easeInQuad',
                     ],
                  ],
               },
            },
            {
               b: r + 7,
               t: 'AnimateTrack',
               d: {
                  track: `triCon${side}T`,
                  duration: 1,
                  position: [
                     [
                        mirrorX * build,
                        DEFAULT_Y_T + OFFSET_Y,
                        DEFAULT_CON_Z,
                        0,
                        'easeStep',
                     ],
                     [
                        mirrorX * 60,
                        DEFAULT_Y_T + OFFSET_Y,
                        DEFAULT_CON_Z,
                        0.25,
                        'easeInQuad',
                     ],
                     [
                        mirrorX * jump,
                        DEFAULT_Y_T + OFFSET_Y,
                        DEFAULT_CON_Z,
                        0.5,
                        'easeOutQuad',
                     ],
                     [
                        mirrorX * 60,
                        DEFAULT_Y_T + OFFSET_Y,
                        DEFAULT_CON_Z,
                        1,
                        'easeInCirc',
                     ],
                  ],
               },
            },
            {
               b: r + 7,
               t: 'AnimateTrack',
               d: {
                  track: `triCon${side}B`,
                  duration: 1,
                  position: [
                     [
                        mirrorX * build,
                        DEFAULT_Y_B + OFFSET_Y,
                        DEFAULT_CON_Z,
                        0,
                        'easeStep',
                     ],
                     [
                        mirrorX * 60,
                        DEFAULT_Y_B + OFFSET_Y,
                        DEFAULT_CON_Z,
                        0.25,
                        'easeInQuad',
                     ],
                     [
                        mirrorX * jump,
                        DEFAULT_Y_B + OFFSET_Y,
                        DEFAULT_CON_Z,
                        0.5,
                        'easeOutQuad',
                     ],
                     [
                        mirrorX * 60,
                        DEFAULT_Y_B + OFFSET_Y,
                        DEFAULT_CON_Z,
                        1,
                        'easeInCirc',
                     ],
                  ],
               },
            },
            {
               b: r + 7,
               t: 'AnimateTrack',
               d: {
                  track: `triLaser${side}T`,
                  duration: 1,
                  position: [
                     [
                        mirrorX * build,
                        OFFSET_Y,
                        DEFAULT_LASER_Z,
                        0,
                        'easeStep',
                     ],
                     [
                        mirrorX * 60,
                        OFFSET_Y,
                        DEFAULT_LASER_Z,
                        0.25,
                        'easeInQuad',
                     ],
                     [
                        mirrorX * jump,
                        OFFSET_Y,
                        DEFAULT_LASER_Z,
                        0.5,
                        'easeOutQuad',
                     ],
                     [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeInCirc'],
                  ],
               },
            },
            {
               b: r + 7,
               t: 'AnimateTrack',
               d: {
                  track: `triLaser${side}B`,
                  duration: 1,
                  position: [
                     [
                        mirrorX * build,
                        OFFSET_Y,
                        DEFAULT_LASER_Z,
                        0,
                        'easeStep',
                     ],
                     [
                        mirrorX * 60,
                        OFFSET_Y,
                        DEFAULT_LASER_Z,
                        0.25,
                        'easeInQuad',
                     ],
                     [
                        mirrorX * jump,
                        OFFSET_Y,
                        DEFAULT_LASER_Z,
                        0.5,
                        'easeOutQuad',
                     ],
                     [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeInCirc'],
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
               track: `triCon${side}T`,
               duration: 4,
               position: [
                  [
                     mirrorX * 60,
                     DEFAULT_Y_T + OFFSET_Y,
                     DEFAULT_CON_Z,
                     0,
                     'easeStep',
                  ],
                  [
                     mirrorX * build,
                     DEFAULT_Y_T + OFFSET_Y,
                     DEFAULT_CON_Z,
                     1,
                     'easeInQuad',
                  ],
               ],
            },
         },
         {
            b: 703,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}B`,
               duration: 4,
               position: [
                  [
                     mirrorX * 60,
                     DEFAULT_Y_B + OFFSET_Y,
                     DEFAULT_CON_Z,
                     0,
                     'easeStep',
                  ],
                  [
                     mirrorX * build,
                     DEFAULT_Y_B + OFFSET_Y,
                     DEFAULT_CON_Z,
                     1,
                     'easeInQuad',
                  ],
               ],
            },
         },
         {
            b: 703,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}T`,
               duration: 4,
               position: [
                  [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                  [mirrorX * build, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeInQuad'],
               ],
            },
         },
         {
            b: 703,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}B`,
               duration: 4,
               position: [
                  [mirrorX * 60, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                  [mirrorX * build, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeInQuad'],
               ],
            },
         },
         {
            b: 707,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}T`,
               duration: 3,
               position: [
                  [
                     mirrorX * build,
                     DEFAULT_Y_T + OFFSET_Y,
                     DEFAULT_CON_Z,
                     0,
                     'easeStep',
                  ],
                  [
                     mirrorX * jump,
                     DEFAULT_Y_T + OFFSET_Y,
                     DEFAULT_CON_Z,
                     1,
                     'easeOutQuad',
                  ],
               ],
            },
         },
         {
            b: 707,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}B`,
               duration: 3,
               position: [
                  [
                     mirrorX * build,
                     DEFAULT_Y_B + OFFSET_Y,
                     DEFAULT_CON_Z,
                     0,
                     'easeStep',
                  ],
                  [
                     mirrorX * jump,
                     DEFAULT_Y_B + OFFSET_Y,
                     DEFAULT_CON_Z,
                     1,
                     'easeOutQuad',
                  ],
               ],
            },
         },
         {
            b: 707,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}T`,
               duration: 3,
               position: [
                  [mirrorX * build, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                  [mirrorX * jump, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeOutQuad'],
               ],
            },
         },
         {
            b: 707,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}B`,
               duration: 3,
               position: [
                  [mirrorX * build, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                  [mirrorX * jump, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeOutQuad'],
               ],
            },
         },
         {
            b: 710,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}T`,
               duration: 1,
               position: [
                  [
                     mirrorX * jump,
                     DEFAULT_Y_T + OFFSET_Y,
                     DEFAULT_CON_Z,
                     0,
                     'easeStep',
                  ],
                  [
                     mirrorX * -20,
                     DEFAULT_Y_T + OFFSET_Y,
                     DEFAULT_CON_Z,
                     1,
                     'easeOutQuad',
                  ],
               ],
            },
         },
         {
            b: 710,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}B`,
               duration: 1,
               position: [
                  [
                     mirrorX * jump,
                     DEFAULT_Y_B + OFFSET_Y,
                     DEFAULT_CON_Z,
                     0,
                     'easeStep',
                  ],
                  [
                     mirrorX * -20,
                     DEFAULT_Y_B + OFFSET_Y,
                     DEFAULT_CON_Z,
                     1,
                     'easeOutQuad',
                  ],
               ],
            },
         },
         {
            b: 710,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}T`,
               duration: 1,
               position: [
                  [mirrorX * jump, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                  [mirrorX * -20, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeOutQuad'],
               ],
            },
         },
         {
            b: 710,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}B`,
               duration: 1,
               position: [
                  [mirrorX * jump, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                  [mirrorX * -20, OFFSET_Y, DEFAULT_LASER_Z, 1, 'easeOutQuad'],
               ],
            },
         },
         {
            b: 711,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}T`,
               duration: 1.5,
               position: [
                  [
                     mirrorX * -20,
                     DEFAULT_Y_T + OFFSET_Y,
                     DEFAULT_CON_Z,
                     0,
                     'easeStep',
                  ],
                  [0, DEFAULT_Y_T, DEFAULT_CON_Z, 1, 'easeOutElastic'],
               ],
            },
         },
         {
            b: 711,
            t: 'AnimateTrack',
            d: {
               track: `triCon${side}B`,
               duration: 1.5,
               position: [
                  [
                     mirrorX * -20,
                     DEFAULT_Y_B + OFFSET_Y,
                     DEFAULT_CON_Z,
                     0,
                     'easeStep',
                  ],
                  [0, DEFAULT_Y_B, DEFAULT_CON_Z, 1, 'easeOutElastic'],
               ],
            },
         },
         {
            b: 711,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}T`,
               duration: 1.5,
               position: [
                  [mirrorX * -20, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                  [0, 0, DEFAULT_LASER_Z, 1, 'easeOutElastic'],
               ],
            },
         },
         {
            b: 711,
            t: 'AnimateTrack',
            d: {
               track: `triLaser${side}B`,
               duration: 1.5,
               position: [
                  [mirrorX * -20, OFFSET_Y, DEFAULT_LASER_Z, 0, 'easeStep'],
                  [0, 0, DEFAULT_LASER_Z, 1, 'easeOutElastic'],
               ],
            },
         },
      );
   }
   customEvents.push(
      {
         b: 0,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            duration: 15,
            position: [
               [0, 0, 0, 0, 'easeStep'],
               [0, 0, DEFAULT_Z, 1, 'easeOutBack'],
            ],
         },
      },
      {
         b: 455.001,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            position: [[0, OFFSET_Y, DEFAULT_Z, 0, 'easeStep']],
         },
      },
      {
         b: 485.001,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            position: [[0, 0, DEFAULT_Z, 0, 'easeStep']],
         },
      },
      {
         b: 581,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            position: [[0, OFFSET_Y, DEFAULT_Z, 0, 'easeStep']],
         },
      },
      {
         b: 583,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            position: [[0, 0, DEFAULT_Z, 0, 'easeStep']],
         },
      },
   );

   return { customEvents };
}
