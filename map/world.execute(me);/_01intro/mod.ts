import { Beatmap } from '@bsmap';
import _ambient from './_ambient.ts';
import _laser from './_laser.ts';
import _ring from './_ring.ts';

export default function (data: Beatmap) {
   _ambient(data);
   _ring(data);
   _laser(data);
}
