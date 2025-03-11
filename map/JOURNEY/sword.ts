import { Beatmap, ext, globals, readDifficultyFileSync, writeDifficultyFileSync } from '@bsmap';
import { arcs } from './arcs.ts';
import { walls } from './walls.ts';

const { at, between, where } = ext.selector;

export function sword() {
   const INPUT_FILE = 'HardOneSaber.dat';
   const OUTPUT_FILE = 'ExpertPlusOneSaber.dat';

   const data = Beatmap.createOne(
      readDifficultyFileSync(INPUT_FILE, 3),
   ).setFilename(OUTPUT_FILE);

   where(at(data.colorNotes, 262), { include: { posX: 0 } }).forEach((n) => {
      n.customData.track = 'swordBit0';
      data.difficulty.customData.customEvents?.push({
         b: 260.125,
         t: 'AnimateTrack',
         d: {
            track: 'swordBit0',
            duration: 0.5,
            color: [
               [0.375, 0.375, 0.375, 1, 0],
               [2, 2, 2, 1, 0.5],
               [0.375, 0.375, 0.375, 1, 1],
            ],
         },
      });
   });
   where(at(data.colorNotes, 262), { include: { posX: 1 } }).forEach((n) => {
      n.customData.track = 'swordBit1';
      data.difficulty.customData.customEvents?.push({
         b: 260.25,
         t: 'AnimateTrack',
         d: {
            track: 'swordBit1',
            duration: 0.5,
            color: [
               [0.375, 0.375, 0.375, 1, 0],
               [2, 2, 2, 1, 0.5],
               [
                  n.customData.color?.[0] ?? 1,
                  n.customData.color?.[1] ?? 0.5,
                  n.customData.color?.[2] ?? 0,
                  1,
                  1,
               ],
            ],
         },
      });
   });
   where(at(data.colorNotes, 262), { include: { posX: 2 } }).forEach((n) => {
      n.customData.track = 'swordBit2';
      data.difficulty.customData.customEvents?.push({
         b: 260.375,
         t: 'AnimateTrack',
         d: {
            track: 'swordBit2',
            duration: 0.5,
            color: [
               [0.375, 0.375, 0.375, 1, 0],
               [2, 2, 2, 1, 0.5],
               [
                  n.customData.color?.[0] ?? 1,
                  n.customData.color?.[1] ?? 0.5,
                  n.customData.color?.[2] ?? 0,
                  1,
                  1,
               ],
            ],
         },
      });
   });
   where(at(data.colorNotes, 262), { include: { posX: 3 } }).forEach((n) => {
      n.customData.track = 'swordBit3';
      data.difficulty.customData.customEvents?.push({
         b: 260.5,
         t: 'AnimateTrack',
         d: {
            track: 'swordBit3',
            duration: 0.5,
            color: [
               [0.375, 0.375, 0.375, 1, 0],
               [2, 2, 2, 1, 0.5],
               [
                  n.customData.color?.[0] ?? 1,
                  n.customData.color?.[1] ?? 0.5,
                  n.customData.color?.[2] ?? 0,
                  1,
                  1,
               ],
            ],
         },
      });
   });

   between(data.colorNotes, 259, 261.5).forEach(
      (n) => (n.customData.track = 'noteBuildUpJourney'),
   );
   data.difficulty.customData.customEvents?.push(
      {
         b: 0,
         t: 'AnimateTrack',
         d: {
            track: [
               'swordBit0',
               'swordBit1',
               'swordBit2',
               'swordBit3',
               'noteBuildUpJourney',
            ],
            duration: 0,
            color: [[0, 0, 0, 1, 0]],
         },
      },
      {
         b: 257.5,
         t: 'AnimateTrack',
         d: {
            track: 'noteBuildUpJourney',
            duration: 1.5,
            color: [
               [0.75, 0.75, 0.75, 1, 0],
               [0.3125, 0.3125, 0.3125, 1, 1, 'easeOutQuad'],
            ],
         },
      },
      {
         b: 259,
         t: 'AnimateTrack',
         d: {
            track: 'noteBuildUpJourney',
            duration: 3,
            color: [
               [0.3125, 0.3125, 0.3125, 1, 0],
               [1.25, 1.25, 1.25, 1, 1, 'easeInQuad'],
            ],
         },
      },
   );
   between(data.colorNotes, 262, 293.999).forEach(
      (n) => (n.customData.animation = {
         color: [
            [1, 1, 1, 1, 0],
            [
               n.customData.color![0],
               n.customData.color![1],
               n.customData.color![2],
               1,
               1 / 16,
            ],
         ],
      }),
   );

   const towerHitTiming: [number, boolean][] = [
      [311.5, true],
      [314.5, true],
      [439.5, false],
      [442.5, false],
      [631.5, false],
      [634.5, false],
      [823.5, false],
      [826.5, false],
   ];
   for (const tht of towerHitTiming) {
      at(data.colorNotes, tht[0]).forEach(
         (n) => (n.customData.animation = {
            color: [
               [0.25, 0.25, 0.25, 1, 0],
               [
                  n.customData.color![0],
                  n.customData.color![1],
                  n.customData.color![2],
                  1,
                  1 / 4,
               ],
            ],
         }),
      );
   }

   walls(data);
   arcs(data);

   writeDifficultyFileSync(data);
}

if (import.meta.main) {
   globals.directory =
      'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/JOURNEY';
   sword();
}
