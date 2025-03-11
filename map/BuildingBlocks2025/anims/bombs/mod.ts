import { Beatmap, normalize, pRandom, types } from '@bsmap';
import { aggregateCustomData } from '../../utils.ts';

export function init(
   beatmap: Beatmap,
): Beatmap {
   const customEvents: types.v3.ICustomEvent[] = [];

   beatmap.bombNotes.forEach((obj, i) => {
      obj.customData = {};

      obj.customData.track = 'genericBomb';
      obj.customData.color = [1, 1, 1];

      if (obj.time >= 707 && obj.time <= 709) {
         obj.customData.track = 'genericBomb' + i;
         customEvents.push({
            b: 707 + normalize(obj.time, 707, 707 + 32),
            t: 'AnimateTrack',
            d: {
               duration: pRandom(0.25, 1.5),
               track: 'genericBomb' + i,
               color: [
                  [1, 1, 1, 1, 0, 'easeStep'],
                  [0.25, 0.25, 0.25, 1, 1, 'easeInOutBounce'],
               ],
            },
         });
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
