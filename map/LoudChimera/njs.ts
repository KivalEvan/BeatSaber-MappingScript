import { Beatmap, ext, logger, NoteJumpSpeed, TimeProcessor } from '@bsmap';
import { getRepeatArray } from './helpers.ts';
const { noodle: NE } = ext.heck;
const { between } = ext.selector;

export function njsVibe(
   data: Beatmap,
   BPM: TimeProcessor,
   NJS: NoteJumpSpeed,
) {
   logger.info('Run NJS Vibe');
   data.colorNotes.forEach((o) => {
      o.customData.noteJumpMovementSpeed = NJS.value;
      o.customData.noteJumpStartBeatOffset = NJS.offset;
   });
   data.arcs.forEach((s) => {
      s.customData.noteJumpMovementSpeed = NJS.value;
      s.customData.noteJumpStartBeatOffset = NJS.offset;
   });
   data.chains.forEach((bs) => {
      bs.customData.noteJumpMovementSpeed = NJS.value;
      bs.customData.noteJumpStartBeatOffset = NJS.offset;
   });
   data.bombNotes.forEach((b) => {
      b.customData.noteJumpMovementSpeed = NJS.value;
      b.customData.noteJumpStartBeatOffset = NJS.offset;
   });
   data.obstacles.forEach((o) => {
      o.customData.noteJumpMovementSpeed = NJS.value;
      o.customData.noteJumpStartBeatOffset = NJS.offset;
   });

   const slowBuildSection = [264, 776];
   for (const t of slowBuildSection) {
      NE.setNjs(between(data.colorNotes, t - 64, t + 64), {
         timeProc: BPM,
         njs: NJS.value * 0.9375,
         jd: NJS.jd,
      });
      NE.setNjs(between(data.colorNotes, t + 112, t + 126), {
         timeProc: BPM,
         njs: NJS.value * 1.0625,
         jd: NJS.jd,
      });
      NE.setNjs(between(data.colorNotes, t + 72, t + 96), {
         timeProc: BPM,
         njs: NJS.value * 0.9375,
         jd: NJS.jd,
      });
      NE.gradientNjs(between(data.colorNotes, t + 64, t + 72), {
         timeProc: BPM,
         njsStart: NJS.value * 0.9375,
         njsEnd: NJS.value * 0.875,
         jd: NJS.jd,
      });
      NE.gradientNjs(between(data.colorNotes, t + 96, t + 112), {
         timeProc: BPM,
         njsStart: NJS.value * 0.875,
         njsEnd: NJS.value * 1.0625,
         jd: NJS.jd,
      });
   }

   const fastPewPew: number[] = [
      ...getRepeatArray(394, 16, 8),
      ...getRepeatArray(906, 16, 8),
   ];
   for (const fpp of fastPewPew) {
      const notes = between(data.colorNotes, fpp, fpp + 6);
      NE.setNoteGravity(notes, false);
      NE.simultaneousSpawn(notes, {
         timeProc: BPM,
         njs: NJS.value * 0.875,
         njsOverride: true,
         jd: NJS.calcJd(2.25),
         speed: 4,
      });
      NE.gradientNjs(between(data.colorNotes, fpp + 6.01, fpp + 10), {
         timeProc: BPM,
         njsStart: NJS.value * 0.9,
         njsEnd: NJS.value,
         jd: NJS.calcJd() + 0.5,
      });
   }

   const slowPart = [136, 648];
   for (const sp of slowPart) {
      NE.gradientNjs(between(data.colorNotes, sp + 0.001, sp + 16), {
         timeProc: BPM,
         njsStart: NJS.value * 0.975,
         njsEnd: NJS.value * 0.625,
         jd: NJS.calcJd() + NJS.calcDistance(0.5),
      });
      NE.gradientNjs(between(data.obstacles, sp + 0.001, sp + 16), {
         timeProc: BPM,
         njsStart: NJS.value * 0.975,
         njsEnd: NJS.value * 0.625,
         jd: NJS.calcJd() + NJS.calcDistance(0.5),
      });
      NE.simultaneousSpawn(between(data.colorNotes, sp + 16.001, sp + 63.999), {
         speed: 1.0625,
         timeProc: BPM,
         njs: NoteJumpSpeed.create(BPM.bpm, NJS.value * 0.625, 0),
         jd: NJS.calcJd() + NJS.calcDistance(0.5),
      });
      NE.simultaneousSpawn(between(data.obstacles, sp + 16.001, sp + 63.999), {
         speed: 1.0625,
         timeProc: BPM,
         njs: NoteJumpSpeed.create(BPM.bpm, NJS.value * 0.625, 0),
         jd: NJS.calcJd() + NJS.calcDistance(0.5),
      });
   }
   NE.setNjs(between(data.colorNotes, 8, 70), {
      timeProc: BPM,
      njs: NJS.value * 0.9375,
      jd: NJS.jd,
   });
   NE.gradientNjs(between(data.colorNotes, 72, 120), {
      timeProc: BPM,
      njsStart: NJS.value * 0.9375,
      njsEnd: NJS.value,
      jd: NJS.jd,
   });
   NE.setNjs(between(data.colorNotes, 1160, 1288), {
      timeProc: BPM,
      njs: NJS.value * 0.9375,
      jd: NJS.jd,
   });
   NE.gradientNjs(between(data.colorNotes, 1160, 1176), {
      timeProc: BPM,
      njsStart: NJS.value,
      njsEnd: NJS.value * 0.9375,
      jd: NJS.jd,
   });
   NE.gradientNjs(between(data.colorNotes, 1224, 1256), {
      timeProc: BPM,
      njsStart: NJS.value * 0.9375,
      njsEnd: NJS.value,
      jd: NJS.jd,
   });
   NE.setNjs(between(data.colorNotes, 1256, 1288), {
      timeProc: BPM,
      njs: NJS.value,
      jd: NJS.jd,
   });
}
