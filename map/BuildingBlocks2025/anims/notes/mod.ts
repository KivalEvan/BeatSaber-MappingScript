import { Beatmap } from '@bsmap';

export function init(beatmap: Beatmap): Beatmap {
   beatmap.colorNotes.forEach((obj) => {
      obj.customData = {};
   });

   return beatmap;
}
