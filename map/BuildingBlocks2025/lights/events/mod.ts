import { Beatmap } from '@bsmap';
import * as background from './background.ts';
import * as fabric from './fabric.ts';
import * as yinYang from './yinYang.ts';

export function add(
   beatmap: Beatmap,
): Beatmap {
   background.add(beatmap);
   fabric.add(beatmap);
   yinYang.add(beatmap);
   return beatmap;
}
