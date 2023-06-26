import {
   BeatPerMinute,
   ext,
   logger,
   NoteDirectionAngle,
   NoteJumpSpeed,
   v3,
} from '../../depsLocal.ts';
import { connectSlider } from './helpers.ts';
const { NE } = ext;
const { between, at } = ext.selector;

export function outro(data: v3.Difficulty, BPM: BeatPerMinute, NJS: NoteJumpSpeed) {
   logger.info('Run Outro');
   connectSlider(data, between(data.colorNotes, 1222, 1224));
   connectSlider(data, between(data.colorNotes, 1286, 1288));
   for (let t = 1162; t < 1280; t += 4) {
      if (t === 1222) {
         continue;
      }
      data.customData.fakeColorNotes?.push(
         ...at(data.colorNotes, t).map((n) =>
            n
               .clone()
               .func((m) => (m.time += 2.002))
               .setDirection(8)
               .addCustomData({
                  uninteractable: true,
                  spawnEffect: true,
                  localRotation: [0, 0, (180 + (NoteDirectionAngle[n.direction as 0] || 0)) % 360],
                  noteJumpMovementSpeed: 10,
                  noteJumpStartBeatOffset: -NoteJumpSpeed.HJD_START + 2,
                  animation: {
                     definitePosition: 'slashPosition',
                     dissolve: 'slashGlitchEffect',
                     dissolveArrow: 'pZero',
                  },
               })
               .toJSON()
         ),
      );
   }
}
