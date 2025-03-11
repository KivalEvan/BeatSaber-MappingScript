import { Beatmap, EventLightValue, lerp, normalize, pRandomFn, shuffle, types } from '@bsmap';
import { FABRIC_INIT_SIZE, FABRIC_ITERATION, FABRIC_SEQUENCES } from '../models/fabric.ts';
import { autoSkipShuffle } from '../../../../utility/iterator.ts';

export function add(
   beatmap: Beatmap,
): Beatmap {
   const pRandom = pRandomFn('Fabric');
   const groupedRoot: number[][][] = new Array(FABRIC_INIT_SIZE)
      .fill(0)
      .map(() => []);
   const groupedId: number[][] = new Array(FABRIC_ITERATION + 1)
      .fill(0)
      .map(() => []);
   for (const fab of FABRIC_SEQUENCES) {
      groupedRoot[fab[0]].push([fab[1], fab[2]]);
      groupedId[fab[1]].push(fab[2]);
   }
   for (const i in groupedId.reverse()) {
      if (!groupedId[i].length) continue;
      beatmap.addBasicEvents(
         {
            time: 455 + lerp(normalize(+i, 0, FABRIC_ITERATION + 1), 0, 0.25),
            type: 6,
            value: EventLightValue.WHITE_ON,
            floatValue: lerp(normalize(+i, 0, FABRIC_ITERATION + 1), 8, 4),
            customData: {
               lightID: groupedId[i],
            },
         },
         {
            time: 455.0625 +
               lerp(normalize(+i, 0, FABRIC_ITERATION + 1), 0, 0.375),
            type: 6,
            value: EventLightValue.OFF,
            floatValue: 0,
            customData: {
               lightID: groupedId[i],
            },
         },
         {
            time: 455.125 + lerp(normalize(+i, 0, FABRIC_ITERATION + 1), 0, 0.5),
            type: 6,
            value: EventLightValue.WHITE_ON,
            floatValue: lerp(normalize(+i, 0, FABRIC_ITERATION + 1), 6, 3),
            customData: {
               lightID: groupedId[i],
            },
         },
         {
            time: 455.1875 + lerp(normalize(+i, 0, FABRIC_ITERATION + 1), 0, 0.75),
            type: 6,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: 0,
            customData: {
               lightID: groupedId[i],
            },
         },
         {
            time: 455.25 + lerp(normalize(+i, 0, FABRIC_ITERATION + 1), 0, 1),
            type: 6,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: lerp(normalize(+i, 0, FABRIC_ITERATION + 1), 4, 1),
            customData: {
               lightID: groupedId[i],
            },
         },
         {
            time: 459 + lerp(1 - normalize(+i, 0, FABRIC_ITERATION + 1), 0, 4),
            type: 6,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: 0,
            customData: {
               lightID: groupedId[i],
            },
         },
         {
            time: 581 + lerp(normalize(+i, 0, FABRIC_ITERATION + 1), 0, 1.25),
            type: 6,
            value: EventLightValue.WHITE_ON,
            floatValue: lerp(normalize(+i, 0, FABRIC_ITERATION + 1), 8, 4),
            customData: {
               lightID: groupedId[i],
            },
         },
         {
            time: 581.25 + lerp(normalize(+i, 0, FABRIC_ITERATION + 1), 0, 1.5),
            type: 6,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: 0,
            customData: {
               lightID: groupedId[i],
            },
         },
         {
            time: 707 + lerp(1 - normalize(+i, 0, FABRIC_ITERATION + 1), 0, 1),
            type: 6,
            value: EventLightValue.WHITE_ON,
            floatValue: 1.5,
            customData: {
               lightID: groupedId[i],
            },
         },
         {
            time: 709 + lerp(1 - normalize(+i, 0, FABRIC_ITERATION + 1), 0, 1.5),
            type: 6,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: 0,
            customData: {
               lightID: groupedId[i],
            },
         },
      );
   }

   const timing = [0, 0.75, 1.5, 2.25, 2.5, 3, 3.5, 4.25, 5, 5.75, 6.5];
   const repeat = [679, 687, 695];
   const getShuffled = autoSkipShuffle(groupedRoot, 3, pRandom);
   for (const rep of repeat) {
      for (const t of timing) {
         for (let _ = 0; _ < 3; _++) {
            const grouped = getShuffled.next();
            for (const i in grouped.value!) {
               const it = grouped.value![i][0];
               const id = grouped.value![i][1];
               beatmap.addBasicEvents(
                  {
                     time: rep +
                        t +
                        ((FABRIC_ITERATION + 1 - it) / (FABRIC_ITERATION + 1)) *
                           0.5,
                     type: 6,
                     value: EventLightValue.WHITE_ON,
                     floatValue: 1.5,
                     customData: {
                        lightID: id,
                     },
                  },
                  {
                     time: rep +
                        t +
                        0.125 +
                        ((FABRIC_ITERATION + 1 - it) / (FABRIC_ITERATION + 1)) *
                           0.625,
                     type: 6,
                     value: EventLightValue.WHITE_TRANSITION,
                     floatValue: 0,
                     customData: {
                        lightID: id,
                     },
                  },
               );
            }
         }
      }
      const grouped = shuffle([...groupedRoot], pRandom);
      for (let j = 0; j < (FABRIC_INIT_SIZE / 3) * 2; j++) {
         for (const i in grouped[j]) {
            const it = grouped[j][i][0];
            const id = grouped[j][i][1];
            beatmap.addBasicEvents(
               {
                  time: rep +
                     7 +
                     ((FABRIC_ITERATION + 1 - it) / (FABRIC_ITERATION + 1)) *
                        0.5,
                  type: 6,
                  value: EventLightValue.WHITE_ON,
                  floatValue: 1.5,
                  customData: {
                     lightID: id,
                  },
               },
               {
                  time: rep +
                     7 +
                     0.125 +
                     ((FABRIC_ITERATION + 1 - it) / (FABRIC_ITERATION + 1)) *
                        0.625,
                  type: 6,
                  value: EventLightValue.WHITE_TRANSITION,
                  floatValue: 0,
                  customData: {
                     lightID: id,
                  },
               },
            );
         }
      }
   }
   for (const t of [0, 0.75, 1.5, 2.25, 2.5, 3, 3.5]) {
      for (let _ = 0; _ < 3; _++) {
         const grouped = getShuffled.next();
         for (const i in grouped.value!) {
            const it = grouped.value![i][0];
            const id = grouped.value![i][1];
            beatmap.addBasicEvents(
               {
                  time: 703 +
                     t +
                     ((FABRIC_ITERATION + 1 - it) / (FABRIC_ITERATION + 1)) *
                        0.5,
                  type: 6,
                  value: EventLightValue.WHITE_ON,
                  floatValue: 1.5,
                  customData: {
                     lightID: id,
                  },
               },
               {
                  time: 703 +
                     t +
                     0.125 +
                     ((FABRIC_ITERATION + 1 - it) / (FABRIC_ITERATION + 1)) *
                        0.625,
                  type: 6,
                  value: EventLightValue.WHITE_TRANSITION,
                  floatValue: 0,
                  customData: {
                     lightID: id,
                  },
               },
            );
         }
      }
   }

   return beatmap;
}
