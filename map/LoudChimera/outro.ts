import {
   Beatmap,
   ext,
   logger,
   NoteDirectionAngle,
   NoteJumpSpeed,
   TimeProcessor,
   types,
   v3,
} from '@bsmap';
import { connectSlider } from './helpers.ts';
const { noodle: NE } = ext.heck;
const { between, at } = ext.selector;

export function outro(
   data: Beatmap,
   BPM: TimeProcessor,
   NJS: NoteJumpSpeed,
) {
   logger.info('Run Outro');
   connectSlider(data, between(data.colorNotes, 1222, 1224));
   connectSlider(data, between(data.colorNotes, 1286, 1288));
   for (let t = 1162; t < 1280; t += 4) {
      if (t === 1222) {
         continue;
      }
      data.difficulty.customData.fakeColorNotes?.push(
         ...at(data.colorNotes, t).map((n) =>
            v3.colorNote.serialize(
               n
                  .clone()
                  .perform((m) => (m.time += 2.002))
                  .setDirection(8)
                  .addCustomData({
                     uninteractable: true,
                     spawnEffect: true,
                     localRotation: [
                        0,
                        0,
                        (180 + (NoteDirectionAngle[n.direction as 0] || 0)) %
                        360,
                     ],
                     noteJumpMovementSpeed: 10,
                     noteJumpStartBeatOffset: -NoteJumpSpeed.HJD_START + 2,
                     animation: {
                        definitePosition: 'slashPosition',
                        dissolve: 'slashGlitchEffect',
                        dissolveArrow: 'pZero',
                     },
                  }),
            )
         ),
      );
   }
}
