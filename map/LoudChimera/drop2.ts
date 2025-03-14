import {
   Beatmap,
   ColorNote,
   ext,
   logger,
   NoteDirectionAngle,
   NoteDirectionSpace,
   NoteJumpSpeed,
   TimeProcessor,
   types,
   v3,
} from '@bsmap';
import { connectSlider } from './helpers.ts';
const { noodle: NE } = ext.heck;
const { between, at, where } = ext.selector;

function slashGlitchHit(
   fakeNotes: ColorNote[],
   duration: number,
) {
   if (duration < NoteJumpSpeed.HJD_MIN) {
      throw new Error('re');
   }
   return fakeNotes.map((n) => {
      return n
         .clone()
         .setTime(n.time + duration - 0.02)
         .setDirection(8)
         .removeCustomData('animation')
         .addCustomData({
            track: 'trackDrop2PewPew',
            spawnEffect: true,
            noteJumpMovementSpeed: 10,
            noteJumpStartBeatOffset: -NoteJumpSpeed.HJD_START + duration,
            uninteractable: true,
            localRotation: [
               0,
               0,
               (180 + (NoteDirectionAngle[n.direction as 0] || 0)) % 360,
            ],
         });
   });
}

export function drop2(
   data: Beatmap,
   BPM: TimeProcessor,
   NJS: NoteJumpSpeed,
) {
   logger.info('Run Drop 2');
   const fakeNotes: types.wrapper.IWrapColorNote[] = [];
   data.difficulty.customData.pointDefinitions!.slashPosition = [
      [0, 0, 3, 0],
      [0, 0, 2, 1 / 32, 'easeStep'],
      [0, 0, 4.5, 0.5, 'easeOutQuad'],
      [0, 0, -999, 0.501, 'easeStep'],
   ];
   data.difficulty.customData.pointDefinitions!.slashExpand = [
      [1, 0.75, 0.75, 0],
      [0, 36, 0, 0.5, 'easeInQuad'],
   ];
   data.difficulty.customData.pointDefinitions!.slashGlitchEffect = [
      [0, 0],
      [0.75, 1 / 32, 'easeStep'],
      [0, 0.375],
   ];
   data.difficulty.customData.customEvents?.push({
      b: 0,
      t: 'AssignPathAnimation',
      d: {
         track: 'trackDrop2PewPew',
         dissolve: 'slashGlitchEffect',
         dissolveArrow: 'pZero',
         definitePosition: 'slashPosition',
         scale: 'slashExpand',
      },
   });

   const dropTiming = [520, 1032];
   const glitchShort = [
      2,
      3,
      4,
      5,
      8,
      9,
      10,
      11,
      18,
      19,
      20,
      21,
      24,
      25,
      26,
      34,
      35,
      36,
      37,
      40,
      41,
      42,
      43,
      50,
      51,
      52,
      53,
   ];
   const glitchLong = [0, 16, 32, 48];
   const noteSwapBullshit = [8, 16, 40, 48];

   for (const dt of dropTiming) {
      fakeNotes.push(...slashGlitchHit(at(data.colorNotes, dt, BPM), 2));
      for (let repeat = 0; repeat <= 64; repeat += 64) {
         const glitchNotes = at(
            data.colorNotes,
            glitchShort.map((n) => n + dt + repeat),
            BPM,
         );
         glitchNotes.forEach((n) => {
            const noteNJS = NoteJumpSpeed.create(
               BPM.bpm,
               n.customData.noteJumpMovementSpeed,
               n.customData.noteJumpStartBeatOffset!,
            );
            n.customData.noteJumpStartBeatOffset = noteNJS.offset + noteNJS.calcHjd();
            n.customData.spawnEffect = false;
            n.customData.animation = {
               dissolve: [
                  [0, 0],
                  [1, 0.375],
               ],
               offsetPosition: [
                  [
                     ...(NoteDirectionSpace[n.direction as 0].map(
                        (n) => -n * 24,
                     ) as types.Vector2),
                     0,
                     0,
                  ],
                  [0, 0, 0, 0.28125, 'easeInOutCirc'],
               ],
               localRotation: [
                  [
                     0,
                     0,
                     (180 + (NoteDirectionAngle[n.direction as 0] || 0)) % 360,
                     0,
                  ],
                  [0, 0, 0, 0.3125, 'easeInOutCirc'],
               ],
            };
            data.addChains({
               time: n.time,
               tailTime: n.time + 1 / 32,
               color: n.color,
               direction: n.direction,
               posX: n.posX,
               posY: n.posY,
               tailPosX: n.posX + (NoteDirectionSpace[n.direction as 0][0] || 0),
               tailPosY: n.posY + (NoteDirectionSpace[n.direction as 0][1] || 0),
               sliceCount: 3,
               squish: 0.375,
               customData: {
                  noteJumpMovementSpeed: n.customData.noteJumpMovementSpeed,
                  noteJumpStartBeatOffset: n.customData.noteJumpStartBeatOffset,
                  tailCoordinates: [
                     n.getPosition()[0] +
                     (NoteDirectionSpace[n.direction as 0][0] || 0),
                     n.getPosition()[1] +
                     (NoteDirectionSpace[n.direction as 0][1] || 0),
                  ],
                  animation: n.customData.animation,
               },
            });
         });
         fakeNotes.push(...slashGlitchHit(glitchNotes, 1));
         for (const gl of glitchLong) {
            if (!repeat && !gl) {
               continue;
            }
            const glitchNotesLong = at(data.colorNotes, dt + gl + repeat, BPM);
            glitchNotesLong.forEach((n) => {
               const noteNJS = NoteJumpSpeed.create(
                  BPM.bpm,
                  n.customData.noteJumpMovementSpeed,
                  n.customData.noteJumpStartBeatOffset!,
               );
               n.customData.noteJumpStartBeatOffset = noteNJS.offset + noteNJS.calcHjd();
               n.customData.spawnEffect = false;
               n.customData.animation = {
                  dissolve: [
                     [0, 0],
                     [1, 0.375],
                  ],
                  offsetPosition: [
                     [
                        ...(NoteDirectionSpace[n.direction as 0].map(
                           (n) => -n * 24,
                        ) as types.Vector2),
                        0,
                        0,
                     ],
                     [0, 0, 0, 0.28125, 'easeInOutCirc'],
                  ],
                  localRotation: [
                     [
                        0,
                        0,
                        (180 + (NoteDirectionAngle[n.direction as 0] || 0)) %
                        360,
                        0,
                     ],
                     [0, 0, 0, 0.3125, 'easeInOutCirc'],
                  ],
               };
               data.addChains({
                  time: n.time,
                  tailTime: n.time + 1 / 24,
                  color: n.color,
                  direction: n.direction,
                  posX: n.posX,
                  posY: n.posY,
                  tailPosX: n.posX + (NoteDirectionSpace[n.direction as 0][0] || 0),
                  tailPosY: n.posY + (NoteDirectionSpace[n.direction as 0][1] || 0),
                  sliceCount: 6,
                  squish: 0.625,
                  customData: {
                     noteJumpMovementSpeed: n.customData.noteJumpMovementSpeed,
                     noteJumpStartBeatOffset: n.customData.noteJumpStartBeatOffset,
                     tailCoordinates: [
                        n.getPosition()[0] +
                        (NoteDirectionSpace[n.direction as 0][0] || 0) * 2,
                        n.getPosition()[1] +
                        (NoteDirectionSpace[n.direction as 0][1] || 0) * 2,
                     ],
                     animation: n.customData.animation,
                  },
               });
            });
            fakeNotes.push(...slashGlitchHit(glitchNotesLong, 2));
         }
         for (const nsb of noteSwapBullshit) {
            connectSlider(
               data,
               between(
                  data.colorNotes,
                  dt + repeat + nsb - 2,
                  dt + repeat + nsb,
               ),
            );
         }
      }
   }

   data.difficulty.customData.fakeColorNotes?.push(
      ...fakeNotes.map((n) => v3.colorNote.serialize(n)),
   );
}
