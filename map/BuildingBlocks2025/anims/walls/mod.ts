import { Beatmap, interleave, lerp, normalize, pRandom, range, types } from '@bsmap';
import { aggregateCustomData } from '../../utils.ts';

export function init(
   beatmap: Beatmap,
): Beatmap {
   const customEvents: types.v3.ICustomEvent[] = [];

   for (
      const t of range(201, 213, 4, true).concat(
         range(489, 501, 4, true),
         range(298, 322, 2, true),
         range(328, 354, 2, true),
      )
   ) {
      customEvents.push({
         b: t,
         t: 'AnimateTrack',
         d: {
            duration: 1,
            track: 'genericWall',
            color: [
               [2, 2, 2, 2, 0, 'easeStep'],
               [0.25, 0.25, 0.25, 1, 1, 'easeOutQuad'],
            ],
         },
      });
   }

   customEvents.push({
      b: 455,
      t: 'AnimateTrack',
      d: {
         duration: 30,
         track: 'genericWalle',
         color: [
            [0.25, 0.25, 0.25, 1, 0, 'easeStep'],
            [2, 2, 2, 2, 1, 'easeLinear'],
         ],
      },
   });

   const build = [223, 511, 607];
   const whrrrm = [231, 263, 615, 631, 647, 663];
   beatmap.obstacles.forEach((obj, i) => {
      obj.customData = {};

      const randomC = pRandom(0.1, 0.3);
      obj.customData.track = 'genericWall';
      obj.customData.color = [randomC, randomC, randomC];

      if (obj.time >= 167 && obj.time <= 197) {
         if (obj.posX < 0 || obj.posX > 3 || obj.duration < 0.125) {
            obj.customData.color = [1, 1, 1];
         }
      }

      if (obj.time >= 451 && obj.time <= 453) {
         const c = pRandom();
         obj.customData.color = [c, c, c];
      }

      if (obj.time >= 455 && obj.time <= 485) {
         if (obj.posY === 0) {
            const c = pRandom(0.75, 1);
            obj.customData.color = [c, c, c];
         }
         if (obj.posY === 1) {
            obj.customData.track = 'genericWalle';
         }
      }

      for (const t of whrrrm) {
         if (obj.time >= t && obj.time <= t + 1) {
            obj.customData.track = 'genericWall' + i;
            customEvents.push({
               b: t,
               t: 'AnimateTrack',
               d: {
                  duration: 1,
                  track: obj.customData.track,
                  color: interleave(
                     range(8).map(
                        (_, j) =>
                           [
                              0,
                              0,
                              0,
                              1,
                              normalize(j * 2, 0, 16),
                              'easeStep',
                           ] as types.Vector4PointDefinitionBase[number],
                     ),
                     range(8).map(
                        (_, j) =>
                           [
                              4,
                              0,
                              0,
                              4,
                              normalize(1 + j * 2, 0, 16),
                              'easeStep',
                           ] as types.Vector4PointDefinitionBase[number],
                     ),
                  ).concat([[0.25, 0.25, 0.25, 1, 1, 'easeStep']]),
               },
            });
         }
      }

      for (const t of build) {
         if (obj.time >= t - 8 && obj.time < t - 7) {
            const c = lerp(normalize(obj.time, t - 8, t + 7), 0.5, 1.5);
            obj.customData.color = [c, c, c];
         }
         if (obj.time >= t - 4 && obj.time < t - 3) {
            const c = lerp(normalize(obj.time, t - 4, t - 3), 0.5, 1.5);
            obj.customData.color = [c, c, c];
         }
         if (obj.time >= t && obj.time <= t + 4) {
            const c = lerp(normalize(obj.time, t, t + 4), 0.5, 2);
            obj.customData.color = [c, c, c];
         }
      }
   });

   beatmap.difficulty.customData = aggregateCustomData(
      beatmap.difficulty.customData,
      {
         customEvents,
      },
   );

   return beatmap;
}
