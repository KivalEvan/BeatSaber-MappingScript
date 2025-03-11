import {
   Beatmap,
   clamp,
   ext,
   logger,
   normalize,
   NoteJumpSpeed,
   TimeProcessor,
   types,
   unityToGridUnit,
} from '@bsmap';
import { connectSlider, lerpVec3 } from './helpers.ts';
import UFO from './ufo.ts';
const { heck, selector } = ext;
const { between } = selector;
const { noodle: NE } = heck;

export function slow(data: Beatmap, BPM: TimeProcessor, NJS: NoteJumpSpeed) {
   logger.info('Run Slow');
   const slowTiming = [136, 648];
   const ufoSlow = new UFO(data, 'Slow');
   ufoSlow.hide(0);
   ufoSlow.light(0, 0, 0);

   for (const st of slowTiming) {
      ufoSlow.light(st, 0, 0);
      ufoSlow.light(st + 8, 12, 1);
      ufoSlow.light(st + 56, 9, 1);
      ufoSlow.light(st + 60, 12, 0);

      const notes = between(data.colorNotes, st + 0.001, st + 63.999);
      const obstacles = between(data.obstacles, st + 0.001, st + 63.999);
      notes.forEach((n) => {
         const noteNJS = NoteJumpSpeed.create(
            BPM.bpm,
            n.customData.noteJumpMovementSpeed,
            n.customData.noteJumpStartBeatOffset,
         );
         ufoSlow.beam(n.time - noteNJS.calcHjd(), n.color);
         const pos = n.getPosition();
         const distance = unityToGridUnit(18.25) - noteNJS.calcJd();
         const offsetPosition: types.Vector3PointDefinitionBase[number] = [
            -0.5 -
            pos[0] +
            unityToGridUnit(
               lerpVec3(
                  normalize(
                     clamp(n.time - noteNJS.calcHjd() / 2, st, st + 64),
                     st,
                     st + 64,
                  ),
                  [
                     [0, 4, 16, 0],
                     [4, 4, 16, 0.25, 'easeOutCubic'],
                     [0, 4, 16, 0.5, 'easeInCubic'],
                     [-4, 4, 16, 0.75, 'easeOutCubic'],
                     [0, 4, 16, 1, 'easeInCubic'],
                  ],
               )[0],
            ),
            unityToGridUnit(3.375),
            distance,
            0,
         ];
         n.customData.animation = {
            offsetPosition: [offsetPosition, [0, 0, 0, 0.25, 'easeOutQuad']],
            localRotation: [
               [180, 0, 0, 0],
               [0, 0, 0, 0.25, 'easeOutCubic'],
            ],
            dissolve: [
               [0, 0],
               [0, 1 / 64, 'easeStep'],
               [0.5, 1 / 32, 'easeOutCubic'],
               [1, 0.375, 'easeInOutBounce'],
            ],
            dissolveArrow: [
               [0, 0],
               [0, 1 / 64],
               [1, 1 / 32],
            ],
         };
      });

      ufoSlow.animate(st - 4, st - 2, {
         position: [
            [-64, 4, 16, 0],
            [0, 4, 16, 1, 'easeOutCubic'],
         ],
         localRotation: [
            [-60, -20, 0, 0],
            [0, 0, 0, 1, 'easeOutCubic'],
         ],
      });
      ufoSlow.animate(st - 2, st + 29, {
         position: [
            [0, 4, 16, 0],
            [4, 4, 16, 0.5, 'easeOutCubic'],
            [0, 4, 16, 1, 'easeInCubic'],
         ],
         localRotation: 'ufoSpinLoop',
      });
      ufoSlow.animate(st + 29, st + 60, {
         position: [
            [0, 4, 16, 0],
            [-4, 4, 16, 0.5, 'easeOutCubic'],
            [0, 4, 16, 1, 'easeInCubic'],
         ],
         localRotation: 'ufoSpinLoop',
      });
      ufoSlow.animate(st + 60, st + 64, {
         position: [
            [0, 4, 16, 0],
            [128, 4, 16, 1, 'easeInCirc'],
         ],
         localRotation: [
            [0, 0, 0, 0],
            [60, 30, 0, 1, 'easeInCirc'],
         ],
      });
      ufoSlow.animate(
         st - 8,
         st + 72,
         {
            color: [
               [0, 0, 1, 1, 0],
               [1, 0, 1, 1, 1 / 6],
               [1, 0, 0, 1, 2 / 6],
               [1, 1, 0, 1, 3 / 6],
               [0, 1, 0, 1, 4 / 6],
               [0, 1, 1, 1, 5 / 6],
               [0, 0, 1, 1, 1],
            ],
         },
         true,
      );
      ufoSlow.hide(st + 64);
   }
   connectSlider(data, between(data.colorNotes, 136, 138));
   connectSlider(data, between(data.colorNotes, 140, 142));
   connectSlider(data, between(data.colorNotes, 144, 146));
   connectSlider(data, between(data.colorNotes, 148, 150));
   connectSlider(data, between(data.colorNotes, 152, 154));
   connectSlider(data, between(data.colorNotes, 156, 158));
   connectSlider(data, between(data.colorNotes, 160, 162));

   connectSlider(data, between(data.colorNotes, 168, 170));
   connectSlider(data, between(data.colorNotes, 172, 174));
   connectSlider(data, between(data.colorNotes, 176, 178));
   connectSlider(data, between(data.colorNotes, 180, 182));
   connectSlider(data, between(data.colorNotes, 184, 186));
   connectSlider(data, between(data.colorNotes, 188, 190));
   connectSlider(
      data,
      between(
         data.colorNotes,
         192,
         data.filename === 'ExpertPlusOneSaber.dat' ? 194 : 200,
      ),
   );
   connectSlider(data, between(data.colorNotes, 196, 200));

   connectSlider(data, between(data.colorNotes, 672, 684));
   connectSlider(data, between(data.colorNotes, 688, 692));
   connectSlider(data, between(data.colorNotes, 696, 712));
}
