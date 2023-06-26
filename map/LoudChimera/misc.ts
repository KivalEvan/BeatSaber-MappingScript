import { random } from '../../../BeatSaber-Deno/utils/math.ts';
import {
   BeatPerMinute,
   ext,
   logger,
   NoteDirectionAngle,
   NoteJumpSpeed,
   v3,
} from '../../depsLocal.ts';

const { at } = ext.selector;

export function misc(data: v3.Difficulty, BPM: BeatPerMinute, NJS: NoteJumpSpeed) {
   logger.info('Run Misc');

   const slapTiming = [392, 456, 584, 904, 968, 1096];

   const slapNotes = at(
      data.colorNotes,
      slapTiming.map((n) => n - 2),
   );
   slapNotes.forEach((n) => {
      n.angleOffset = NoteDirectionAngle[n.direction as 0] || 0;
      n.direction = 8;
      n.addCustomData({
         animation: {
            dissolveArrow: 'pZero',
         },
      });
   });
   const fwoompNotes = at(data.colorNotes, slapTiming);
   const fwoompNJS = NoteJumpSpeed.create(BPM, NJS.value * 0.875);
   fwoompNJS.offset = NoteJumpSpeed.HJD_START - (fwoompNJS.calcHjd(0) + 1);
   fwoompNotes.forEach((n) => {
      n.addCustomData({
         noteJumpMovementSpeed: fwoompNJS.value,
         noteJumpStartBeatOffset: fwoompNJS.offset,
         animation: {
            offsetPosition: [
               [0, 0, -fwoompNJS.calcDistance(0.25), 0],
               [0, 0, -fwoompNJS.calcDistance(0.5), 1 / (fwoompNJS.calcHjd() * 2), 'easeOutCubic'],
               [
                  random(-1.5, 1.5),
                  random(-1.5, 1.5),
                  0,
                  1 / (fwoompNJS.calcHjd() * 2) + 1 / (fwoompNJS.calcHjd() * 32),
                  'easeOutExpo',
               ],
               [
                  random(-1, 1),
                  random(-1, 1),
                  0,
                  1 / (fwoompNJS.calcHjd() * 2) + 2 / (fwoompNJS.calcHjd() * 32),
                  'easeInOutElastic',
               ],
               [
                  random(-0.75, 0.75),
                  random(-0.75, 0.75),
                  0,
                  1 / (fwoompNJS.calcHjd() * 2) + 3 / (fwoompNJS.calcHjd() * 32),
                  'easeInOutElastic',
               ],
               [
                  random(-0.5, 0.5),
                  random(-0.5, 0.5),
                  0,
                  1 / (fwoompNJS.calcHjd() * 2) + 4 / (fwoompNJS.calcHjd() * 32),
                  'easeInOutElastic',
               ],
               [
                  random(-0.25, 0.25),
                  random(-0.25, 0.25),
                  0,
                  1 / (fwoompNJS.calcHjd() * 2) + 5 / (fwoompNJS.calcHjd() * 32),
                  'easeInOutElastic',
               ],
               [
                  0,
                  0,
                  0,
                  1 / (fwoompNJS.calcHjd() * 2) + 6 / (fwoompNJS.calcHjd() * 32),
                  'easeInOutElastic',
               ],
            ],
         },
      });
   });
}
