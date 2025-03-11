import {
   EasingsFn,
   lerp,
   normalize,
   pRandomFn,
   range,
   shuffle,
   types,
   vectorAdd,
   vectorMul,
} from '@bsmap';
import { hideEnvironment, showEnvironment } from './hider.ts';

export function create(): types.wrapper.ICustomDataDifficulty {
   const pRandom = pRandomFn('Spinny');
   const customEvents: types.v3.ICustomEvent[] = [];
   let flipFlop = 1;

   const rotateSnaps: [number, number, string | string[]][] = [
      [103, 0, ['laserSet', 'tri']],
      [106.5, 30, ['laserSet', 'tri']],
      [107.5, 0, ['laserSet', 'tri']],
      [108, 330, ['laserSet', 'tri']],
      [109, 0, ['laserSet', 'tri']],
      [112, 90, ['laserSet', 'tri']],
      [113.75, 45, ['laserSet', 'tri']],
      [116, 315, ['laserSet', 'tri']],
      [117, 90, ['laserSet', 'tri']],
      [118.5, 0, ['laserSet', 'tri']],
      [122, 45, ['laserSet', 'tri']],
      [123.5, 315, ['laserSet', 'tri']],
      [125, 0, ['laserSet', 'tri']],
      [128, 90, ['laserSet', 'tri']],
      [131, 45, 'tri'],
      [131, 315, 'laserSet'],

      [32 + 103, 0, ['laserSet', 'tri']],
      [32 + 106.5, 330, ['laserSet', 'tri']],
      [32 + 107.5, 0, ['laserSet', 'tri']],
      [32 + 108, 30, ['laserSet', 'tri']],
      [32 + 109, 0, ['laserSet', 'tri']],
      [32 + 112, 90, ['laserSet', 'tri']],
      [32 + 113.75, 315, ['laserSet', 'tri']],
      [32 + 116, 45, ['laserSet', 'tri']],
      [32 + 117, 90, ['laserSet', 'tri']],
      [32 + 118.5, 0, ['laserSet', 'tri']],
      [32 + 122, 315, ['laserSet', 'tri']],
      [32 + 123.5, 45, ['laserSet', 'tri']],
      [32 + 125, 0, ['laserSet', 'tri']],

      [288 + 103, 0, ['laserSet', 'tri']],
      [288 + 106.5, 30, ['laserSet', 'tri']],
      [288 + 107.5, 0, ['laserSet', 'tri']],
      [288 + 108, 330, ['laserSet', 'tri']],
      [288 + 109, 0, ['laserSet', 'tri']],
      [288 + 112, 90, ['laserSet', 'tri']],
      [288 + 113.75, 45, ['laserSet', 'tri']],
      [288 + 116, 315, ['laserSet', 'tri']],
      [288 + 117, 90, ['laserSet', 'tri']],
      [288 + 118.5, 0, ['laserSet', 'tri']],
      [288 + 122, 45, ['laserSet', 'tri']],
      [288 + 123.5, 315, ['laserSet', 'tri']],
      [288 + 125, 0, ['laserSet', 'tri']],
      [288 + 128, 90, ['laserSet', 'tri']],
      [288 + 131, 315, 'tri'],
      [288 + 131, 45, 'laserSet'],

      [288 + 32 + 103, 0, ['laserSet', 'tri']],
      [288 + 32 + 106.5, 330, ['laserSet', 'tri']],
      [288 + 32 + 107.5, 0, ['laserSet', 'tri']],
      [288 + 32 + 108, 30, ['laserSet', 'tri']],
      [288 + 32 + 109, 0, ['laserSet', 'tri']],
      [288 + 32 + 112, 90, ['laserSet', 'tri']],
      [288 + 32 + 113.75, 315, ['laserSet', 'tri']],
      [288 + 32 + 116, 45, ['laserSet', 'tri']],
      [288 + 32 + 117, 90, ['laserSet', 'tri']],
      [288 + 32 + 118.5, 0, ['laserSet', 'tri']],
      [288 + 32 + 122, 315, ['laserSet', 'tri']],
      [288 + 32 + 123.5, 45, ['laserSet', 'tri']],
      [288 + 32 + 125, 0, ['laserSet', 'tri']],

      [201, 45, 'tri'],
      [201, 315, 'laserSet'],
      [203, 0, ['laserSet', 'tri']],
      [205, 315, 'tri'],
      [205, 45, 'laserSet'],
      [207, 0, ['laserSet', 'tri']],
      [209, 45, 'tri'],
      [209, 315, 'laserSet'],
      [211, 0, ['laserSet', 'tri']],
      [213, 315, 'tri'],
      [213, 45, 'laserSet'],
      [215, 0, ['laserSet', 'tri']],
      [219, 90, 'tri'],

      [288 + 201, 315, 'tri'],
      [288 + 201, 45, 'laserSet'],
      [288 + 203, 0, ['laserSet', 'tri']],
      [288 + 205, 45, 'tri'],
      [288 + 205, 315, 'laserSet'],
      [288 + 207, 0, ['laserSet', 'tri']],
      [288 + 209, 315, 'tri'],
      [288 + 209, 45, 'laserSet'],
      [288 + 211, 0, ['laserSet', 'tri']],
      [288 + 213, 45, 'tri'],
      [288 + 213, 315, 'laserSet'],
      [288 + 215, 0, ['laserSet', 'tri']],
      [288 + 219, 90, 'tri'],

      [382 + 201, 45, 'tri'],
      [382 + 201, 315, 'laserSet'],
      [382 + 203, 0, ['laserSet', 'tri']],
      [382 + 205, 315, 'tri'],
      [382 + 205, 45, 'laserSet'],
      [382 + 207, 0, ['laserSet', 'tri']],
      [382 + 209, 45, 'tri'],
      [382 + 209, 315, 'laserSet'],
      [382 + 211, 0, ['laserSet', 'tri']],
      [382 + 213, 315, 'tri'],
      [382 + 213, 45, 'laserSet'],
      [382 + 215, 0, ['laserSet', 'tri']],
      [382 + 219, 90, 'tri'],

      // [243, 45, 'tri'],
      [244, 45, 'tri'],
      [245, 315, 'tri'],
      [246, 0, 'tri'],
      [247, 90, ['laserSet', 'tri']],
      [275, 300, 'tri'],
      [276, 60, 'tri'],
      [277, 90, 'tri'],
      [278, 0, ['laserSet', 'tri']],
      [279, 270, ['laserSet', 'tri']],
      [287, 30, ['laserSet', 'tri']],
      [287.5, 0, ['laserSet', 'tri']],
      [289, 330, ['laserSet', 'tri']],
      [289.5, 0, ['laserSet', 'tri']],

      [357, 45, 'laserSet'],
      [357.5, 315, 'laserSet'],
      [358, 45, 'laserSet'],
      [358.5, 315, 'laserSet'],

      [359, 0, ['tri', 'laserSet']],

      [520, 330, 'laserSet'],
      [520, 30, 'tri'],
      [521, 300, 'laserSet'],
      [521, 60, 'tri'],
      [522, 270, 'laserSet'],
      [522, 90, 'tri'],
      [523, 240, 'laserSet'],
      [523, 120, 'tri'],
      [524, 210, 'laserSet'],
      [524, 150, 'tri'],
      [525, 180, 'laserSet'],
      [525, 180, 'tri'],
      [526, 150, 'laserSet'],
      [526, 210, 'tri'],

      [527, 45, 'laserSet'],
      [527, 315, 'tri'],
      [528, 315, 'laserSet'],
      [528, 45, 'tri'],
      [527 + 2, 45, 'laserSet'],
      [527 + 2, 315, 'tri'],
      [528 + 2, 315, 'laserSet'],
      [528 + 2, 45, 'tri'],
      [527 + 4, 45, 'laserSet'],
      [527 + 4, 315, 'tri'],
      [528 + 4, 315, 'laserSet'],
      [528 + 4, 45, 'tri'],
      [527 + 6, 45, 'laserSet'],
      [527 + 6, 315, 'tri'],
      [528 + 6, 315, 'laserSet'],
      [528 + 6, 45, 'tri'],

      [16 + 519, 0, ['tri', 'laserSet']],
      [16 + 520, 330, 'laserSet'],
      [16 + 520, 30, 'tri'],
      [16 + 521, 300, 'laserSet'],
      [16 + 521, 60, 'tri'],
      [16 + 522, 270, 'laserSet'],
      [16 + 522, 90, 'tri'],
      [16 + 523, 240, 'laserSet'],
      [16 + 523, 120, 'tri'],
      [16 + 524, 210, 'laserSet'],
      [16 + 524, 150, 'tri'],
      [16 + 525, 180, 'laserSet'],
      [16 + 525, 180, 'tri'],
      [16 + 526, 150, 'laserSet'],
      [16 + 526, 210, 'tri'],

      [549, 90, 'tri'],

      [32 + 519, 0, ['tri', 'laserSet']],
      [32 + 520, 330, 'tri'],
      [32 + 520, 30, 'laserSet'],
      [32 + 521, 300, 'tri'],
      [32 + 521, 60, 'laserSet'],
      [32 + 522, 270, 'tri'],
      [32 + 522, 90, 'laserSet'],
      [32 + 523, 240, 'tri'],
      [32 + 523, 120, 'laserSet'],
      [32 + 524, 210, 'tri'],
      [32 + 524, 150, 'laserSet'],
      [32 + 525, 180, 'tri'],
      [32 + 525, 180, 'laserSet'],
      [32 + 526, 150, 'tri'],
      [32 + 526, 210, 'laserSet'],

      [32 + 527, 45, 'tri'],
      [32 + 527, 315, 'laserSet'],
      [32 + 528, 315, 'tri'],
      [32 + 528, 45, 'laserSet'],
      [32 + 527 + 2, 45, 'tri'],
      [32 + 527 + 2, 315, 'laserSet'],
      [32 + 528 + 2, 315, 'tri'],
      [32 + 528 + 2, 45, 'laserSet'],
      [32 + 527 + 4, 45, 'tri'],
      [32 + 527 + 4, 315, 'laserSet'],
      [32 + 528 + 4, 315, 'tri'],
      [32 + 528 + 4, 45, 'laserSet'],
      [32 + 527 + 6, 45, 'tri'],
      [32 + 527 + 6, 315, 'laserSet'],
      [32 + 528 + 6, 315, 'tri'],
      [32 + 528 + 6, 45, 'laserSet'],

      [32 + 16 + 519, 0, ['tri', 'laserSet']],
      [32 + 16 + 520, 330, 'tri'],
      [32 + 16 + 520, 30, 'laserSet'],
      [32 + 16 + 521, 300, 'tri'],
      [32 + 16 + 521, 60, 'laserSet'],
      [32 + 16 + 522, 270, 'tri'],
      [32 + 16 + 522, 90, 'laserSet'],
      [32 + 16 + 523, 240, 'tri'],
      [32 + 16 + 523, 120, 'laserSet'],
      [32 + 16 + 524, 210, 'tri'],
      [32 + 16 + 524, 150, 'laserSet'],
      [32 + 16 + 525, 180, 'tri'],
      [32 + 16 + 525, 180, 'laserSet'],
      [32 + 16 + 526, 150, 'tri'],
      [32 + 16 + 526, 210, 'laserSet'],

      [575, 30, 'tri'],
      [575, 330, 'laserSet'],
      [577, 330, 'tri'],
      [577, 30, 'laserSet'],
      [579, 0, ['laserSet', 'tri']],

      [628, 315, 'tri'],
      [629, 45, 'tri'],
      [630, 0, 'tri'],
      [631, 270, ['laserSet', 'tri']],
      [660, 45, 'tri'],
      [661, 315, 'tri'],
      [662, 0, 'tri'],
      [663, 90, ['laserSet', 'tri']],
      [671, 30, ['laserSet', 'tri']],
      [671.5, 0, ['laserSet', 'tri']],
      [673, 330, ['laserSet', 'tri']],
      [673.5, 0, ['laserSet', 'tri']],
   ];
   for (const snap of rotateSnaps) {
      customEvents.push({
         b: snap[0],
         t: 'AnimateTrack',
         d: {
            track: snap[2],
            duration: 0.5,
            localRotation: [
               [0, 0, snap[1] + 15 * flipFlop, 0, 'easeStep'],
               [0, 0, snap[1], 1, 'easeOutElastic'],
            ],
         },
      });
      flipFlop *= -1;
   }

   const repeat = [232, 248, 264, 280, 616, 632, 648, 664];
   for (const rep of repeat) {
      for (let r = 0; r <= 180; r += 30) {
         const t = r / 30;
         customEvents.push({
            b: rep + t,
            t: 'AnimateTrack',
            d: {
               track: ['laserSet', 'tri'],
               duration: 0.5,
               localRotation: [
                  [
                     0,
                     0,
                     180 + flipFlop * (r - 30 + (t ? -15 : 0)),
                     0,
                     'easeStep',
                  ],
                  [0, 0, 180 + flipFlop * r, 1, 'easeOutElastic'],
               ],
            },
         });
      }
      flipFlop *= -1;
   }

   const repeat2 = [240, 256, 272, 543, 624, 640, 656];
   for (const rep of repeat2) {
      for (let r = 45; r <= 180; r += 45) {
         const t = r / 45 - 1;
         customEvents.push(
            {
               b: rep + t,
               t: 'AnimateTrack',
               d: {
                  track: 'laserSet',
                  duration: 0.5,
                  localRotation: [
                     [0, 0, r - 45, 0, 'easeStep'],
                     [0, 0, r, 1, 'easeOutElastic'],
                  ],
               },
            },
            {
               b: rep + t,
               t: 'AnimateTrack',
               d: {
                  track: 'tri',
                  duration: 0.5,
                  localRotation: [
                     [0, 0, -r - 45, 0, 'easeStep'],
                     [0, 0, -r, 1, 'easeOutElastic'],
                  ],
               },
            },
         );
      }
   }

   const speeen = range(298, 354, 2, true).filter(
      (x) => x !== 326 && x !== 324,
   );
   let r = 0;
   for (const t of speeen) {
      if (t > 322) r -= 45;
      else r += 45;
      if (t === 322) r = 0;
      const origin = t > 322 ? 45 : -45;
      customEvents.push(
         {
            b: t,
            t: 'AnimateTrack',
            d: {
               track: 'laserSet',
               duration: 0.5,
               localRotation: [
                  [0, 0, r + origin, 0, 'easeStep'],
                  [0, 0, r, 1, 'easeOutElastic'],
               ],
            },
         },
         {
            b: t,
            t: 'AnimateTrack',
            d: {
               track: 'tri',
               duration: 0.5,
               localRotation: [
                  [0, 0, -r + origin, 0, 'easeStep'],
                  [0, 0, -r, 1, 'easeOutElastic'],
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
            duration: 14.5,
            localRotation: range(128).map(
               (r) =>
                  [
                     0,
                     0,
                     lerp(normalize(r, 0, 127), 180, 0),
                     EasingsFn.easeInCirc(normalize(r, 0, 127)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 197,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            duration: 2,
            localRotation: range(64).map(
               (r) =>
                  [
                     0,
                     0,
                     360 - lerp(normalize(r, 0, 63), 0, 360),
                     EasingsFn.easeInCirc(normalize(r, 0, 63)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 197,
         t: 'AnimateTrack',
         d: {
            track: 'laserSet',
            duration: 2,
            localRotation: range(64).map(
               (r) =>
                  [
                     0,
                     0,
                     lerp(normalize(r, 0, 63), 0, 360),
                     EasingsFn.easeInCirc(normalize(r, 0, 63)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 223,
         t: 'AnimateTrack',
         d: {
            track: 'laserSet',
            duration: 4,
            localRotation: range(128).map(
               (r) =>
                  [
                     0,
                     0,
                     -lerp(normalize(r, 0, 127), 0, 810),
                     EasingsFn.easeOutCirc(normalize(r, 0, 127)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 223,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            duration: 4,
            localRotation: range(128).map(
               (r) =>
                  [
                     0,
                     0,
                     90 - lerp(normalize(r, 0, 127), 0, 810),
                     EasingsFn.easeOutCirc(normalize(r, 0, 127)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 511,
         t: 'AnimateTrack',
         d: {
            track: 'laserSet',
            duration: 4,
            localRotation: range(128).map(
               (r) =>
                  [
                     0,
                     0,
                     lerp(normalize(r, 0, 127), 0, 810),
                     EasingsFn.easeOutCirc(normalize(r, 0, 127)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 511,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            duration: 4,
            localRotation: range(128).map(
               (r) =>
                  [
                     0,
                     0,
                     90 + lerp(normalize(r, 0, 127), 0, 810),
                     EasingsFn.easeOutCirc(normalize(r, 0, 127)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 607,
         t: 'AnimateTrack',
         d: {
            track: 'laserSet',
            duration: 4,
            localRotation: range(128).map(
               (r) =>
                  [
                     0,
                     0,
                     -lerp(normalize(r, 0, 127), 0, 810),
                     EasingsFn.easeOutCirc(normalize(r, 0, 127)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 607,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            duration: 4,
            localRotation: range(128).map(
               (r) =>
                  [
                     0,
                     0,
                     90 - lerp(normalize(r, 0, 127), 0, 810),
                     EasingsFn.easeOutCirc(normalize(r, 0, 127)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 485,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            duration: 2,
            localRotation: range(64).map(
               (r) =>
                  [
                     0,
                     0,
                     lerp(normalize(r, 0, 63), 0, 360),
                     EasingsFn.easeInCirc(normalize(r, 0, 63)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 485,
         t: 'AnimateTrack',
         d: {
            track: 'laserSet',
            duration: 2,
            localRotation: range(64).map(
               (r) =>
                  [
                     0,
                     0,
                     360 - lerp(normalize(r, 0, 63), 0, 360),
                     EasingsFn.easeInCirc(normalize(r, 0, 63)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 291,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            duration: 4,
            localRotation: range(64).map(
               (r) =>
                  [
                     0,
                     0,
                     lerp(normalize(r, 0, 63), 0, 720),
                     EasingsFn.easeOutCirc(normalize(r, 0, 63)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 291,
         t: 'AnimateTrack',
         d: {
            track: 'laserSet',
            duration: 4,
            localRotation: range(64).map(
               (r) =>
                  [
                     0,
                     0,
                     720 - lerp(normalize(r, 0, 63), 0, 720),
                     EasingsFn.easeOutCirc(normalize(r, 0, 63)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 455,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            duration: 16,
            localRotation: range(128).map(
               (r) =>
                  [
                     0,
                     0,
                     lerp(normalize(r, 0, 127), 0, 720),
                     EasingsFn.easeInCirc(normalize(r, 0, 127)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 581,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            duration: 1.5,
            localRotation: range(128).map(
               (r) =>
                  [
                     0,
                     0,
                     lerp(normalize(r, 0, 127), 0, 360),
                     EasingsFn.easeInCirc(normalize(r, 0, 127)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 675,
         t: 'AnimateTrack',
         d: {
            track: 'tri',
            duration: 4,
            localRotation: range(64).map(
               (r) =>
                  [
                     0,
                     0,
                     720 - lerp(normalize(r, 0, 63), 0, 720),
                     EasingsFn.easeOutCirc(normalize(r, 0, 63)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
      {
         b: 675,
         t: 'AnimateTrack',
         d: {
            track: 'laserSet',
            duration: 4,
            localRotation: range(64).map(
               (r) =>
                  [
                     0,
                     0,
                     lerp(normalize(r, 0, 63), 0, 720),
                     EasingsFn.easeOutCirc(normalize(r, 0, 63)),
                     'easeLinear',
                  ] as types.Vector3PointDefinitionBase[number],
            ),
         },
      },
   );

   return { customEvents };
}
