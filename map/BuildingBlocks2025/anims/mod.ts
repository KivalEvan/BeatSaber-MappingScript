import { Beatmap } from '@bsmap';
import * as notes from './notes/mod.ts';
import * as bombs from './bombs/mod.ts';
import * as walls from './walls/mod.ts';

export function animateIt(data: Beatmap): Beatmap {
   data = notes.init(data);
   data = bombs.init(data);
   data = walls.init(data);

   return data;
}
