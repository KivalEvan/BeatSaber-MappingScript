import {
   Beatmap,
   BombNote,
   ColorNote,
   EasingsFn,
   ext,
   lerp,
   logger,
   normalize,
   NoteDirectionAngle,
   NoteJumpSpeed,
   Obstacle,
   pRandom,
   TimeProcessor,
   types,
   v3,
} from '@bsmap';
import { getRepeatArray } from './helpers.ts';
const { noodle: NE } = ext.heck;
const { at, between } = ext.selector;

function doArrowthing(
   fakeNotes: ColorNote[],
   duration: number,
) {
   if (duration < 0.25) {
      throw new Error('re');
   }
   return fakeNotes.map((n) => {
      return n
         .clone()
         .setTime(n.time + duration)
         .setPosX(0)
         .setPosY(0)
         .addCustomData({
            uninteractable: true,
            disableNoteGravity: true,
            disableNoteLook: true,
            spawnEffect: false,
            noteJumpMovementSpeed: 10,
            noteJumpStartBeatOffset: -4 + duration,
            animation: {
               dissolve: 'pZero',
               dissolveArrow: 'pqOne',
               scale: [[3, 3, 3, 0]],
               definitePosition: [
                  [1.5, -3.5, 16, 0],
                  [1.5, -3.5, 12, 0.0625],
                  [1.5, -3.5, -999, 0.5, 'easeStep'],
               ],
            },
         });
   });
}

export function drop1(data: Beatmap, BPM: TimeProcessor, NJS: NoteJumpSpeed) {
   logger.info('Run Drop 1');
   const fakeNotes: types.wrapper.IWrapColorNote[] = [];

   const fastPewPew: number[] = [
      ...getRepeatArray(394, 16, 8),
      ...getRepeatArray(906, 16, 8),
   ];
   let flipFlop = true;
   for (const fpp of fastPewPew) {
      for (let min = 0, max = 4, x = min; x < max; x++) {
         const bomb = BombNote.create({
            time: fpp -
               2 +
               1.5 -
               lerp(EasingsFn.easeInCirc(normalize(x, min, max)), 0, 0.25),
            customData: {
               coordinates: [
                  x,
                  -0.25 -
                  lerp(
                     EasingsFn.easeInQuad(normalize(x, min, max)),
                     0,
                     1.25,
                  ),
               ],
               color: [1, 1, 1],
               noteJumpMovementSpeed: NJS.value,
               noteJumpStartBeatOffset: lerp(
                  EasingsFn.easeInCirc(normalize(x, min, max)),
                  0,
                  8 - NoteJumpSpeed.HJD_START - NJS.calcHjd(0),
               ),
               spawnEffect: true,
               uninteractable: true,
               animation: {
                  color: [
                     [0, 0, 0, 1, 0],
                     [0, 0, 0, 1, 0.25],
                     flipFlop
                        ? [
                           lerp(normalize(x, min, max), 1, 0),
                           0,
                           0,
                           1,
                           lerp(
                              EasingsFn.easeInCirc(normalize(x, min, max)),
                              0,
                              8 - NoteJumpSpeed.HJD_START - NJS.calcHjd(0),
                           ) * 0.375,
                           'easeOutQuad',
                        ]
                        : [
                           0,
                           0,
                           lerp(normalize(x, min, max), 1, 0),
                           1,
                           lerp(
                              EasingsFn.easeInCirc(normalize(x, min, max)),
                              0,
                              8 - NoteJumpSpeed.HJD_START - NJS.calcHjd(0),
                           ) * 0.375,
                           'easeOutQuad',
                        ],
                  ],
                  offsetPosition: [
                     [(2 + x) * 2, 0, 0, 0],
                     [
                        0,
                        0,
                        0,
                        lerp(
                           EasingsFn.easeInCirc(normalize(x, min, max)),
                           0,
                           8 - NoteJumpSpeed.HJD_START - NJS.calcHjd(0),
                        ) * 0.1875,
                        'easeInCirc',
                     ],
                  ],
               },
            },
         });
         data.difficulty.customData.fakeBombNotes?.push(
            bomb[0],
            bomb[0].clone().mirror(),
         );
      }
      flipFlop = !flipFlop;

      const obs = Obstacle.create({
         time: fpp - 1.5,
         customData: {
            uninteractible: true,
            size: [3, 4, 2],
            color: [100, 100, 100, 1],
            noteJumpMovementSpeed: 10,
            noteJumpStartBeatOffset: -2.5,
            animation: {
               dissolve: [
                  [0, 0],
                  [1, 1 / 64],
                  [0, 0.5, 'easeStep'],
               ],
               definitePosition: [
                  [6, -2, 0, 0],
                  [6, -2, 0, 0.25, 'easeStep'],
                  [6, -2, 100, 0.5, 'easeInExpo'],
               ],
               scale: [
                  [1, 1, 1, 0],
                  [1, 1, 0.5, 0.125, 'easeOutExpo'],
                  [1, 1, 100, 0.25, 'easeOutExpo'],
                  [0.25, 0.25, 1, 0.5, 'easeInExpo'],
               ],
            },
         },
      });
      // data.difficulty.customData.fakeObstacles!.push(
      //     obs.toJSON(),
      //     obs.clone().mirror().toJSON()
      // );

      const fastPewPewNotes = between(data.colorNotes, fpp, fpp + 5.999);
      fakeNotes.push(
         ...fastPewPewNotes.map((n) => {
            const randX = pRandom(4, 6, true);
            const randY = pRandom(-1, 1, true);
            return n
               .clone()
               .setTime(n.time - 0.0025)
               .addCustomData({
                  spawnEffect: false,
                  animation: {
                     dissolve: [
                        [1, 0],
                        [0, 0.125, 'easeInOutBounce'],
                     ],
                     offsetPosition: [
                        [0, 0, 0, 0],
                        [
                           n.time % 1 ? randX : -randX,
                           randY,
                           0,
                           0.125,
                           'easeOutQuart',
                        ],
                        [
                           0,
                           0,
                           NoteJumpSpeed.create(
                              BPM.bpm,
                              n.customData.noteJumpMovementSpeed,
                           ).calcDistance(0.0024),
                           0.375,
                           'easeInElastic',
                        ],
                     ],
                  },
               });
         }),
         ...fastPewPewNotes.map((n) => {
            const randX = pRandom(4, 6, true);
            const randY = pRandom(-1, 1, true);
            return n
               .clone()
               .setTime(n.time - 0.0075)
               .addCustomData({
                  spawnEffect: false,
                  animation: {
                     dissolve: [
                        [1, 0],
                        [0, 0.125, 'easeInOutBounce'],
                     ],
                     offsetPosition: [
                        [0, 0, 0, 0],
                        [
                           n.time % 1 ? -randX : randX,
                           randY,
                           0,
                           0.125,
                           'easeOutQuart',
                        ],
                        [
                           0,
                           0,
                           NoteJumpSpeed.create(
                              BPM.bpm,
                              n.customData.noteJumpMovementSpeed,
                           ).calcDistance(0.0074),
                           0.375,
                           'easeInElastic',
                        ],
                     ],
                  },
               });
         }),
         ...doArrowthing(fastPewPewNotes, 0.495),
         ...doArrowthing(
            fastPewPewNotes.map((n) => n.clone().setTime(n.time + 0.03125)),
            0.485 - 0.03125,
         ),
         ...doArrowthing(
            fastPewPewNotes.map((n) => n.clone().setTime(n.time + 0.0625)),
            0.475 - 0.0625,
         ),
         ...doArrowthing(
            fastPewPewNotes.map((n) => n.clone().setTime(n.time + 0.09375)),
            0.465 - 0.09375,
         ),
         ...doArrowthing(
            fastPewPewNotes.map((n) => n.clone().setTime(n.time + 0.125)),
            0.455 - 0.125,
         ),
      );
      fastPewPewNotes.forEach((n) => {
         const noteNJS = NoteJumpSpeed.create(
            BPM.bpm,
            n.customData.noteJumpMovementSpeed,
            n.customData.noteJumpStartBeatOffset,
         );
         n.angleOffset = NoteDirectionAngle[n.direction as 0] || 0;
         n.direction = 8;
         n.addCustomData({
            animation: {
               dissolveArrow: 'pZero',
               dissolve: [
                  [0, 0],
                  [1, 1 / 32],
               ],
               offsetPosition: [
                  [0, 0, NJS.calcJd() - noteNJS.calcJd(), 0],
                  [0, 0, 0, 1 / 8, 'easeOutElastic'],
               ],
               scale: [
                  [1, 1, 1, 0],
                  [4, 0.75, 0.75, 1 / 64, 'easeOutElastic'],
                  [1, 1, 1, 1 / 32, 'easeInElastic'],
               ],
            },
         });
      });
   }

   data.difficulty.customData.fakeColorNotes?.push(
      ...fakeNotes.map((n) => v3.colorNote.serialize(n)),
   );
}
