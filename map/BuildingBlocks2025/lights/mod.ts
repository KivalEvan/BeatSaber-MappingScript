import { Beatmap, types } from '@bsmap';
import { aggregateCustomData } from '../utils.ts';
import * as models from './models/mod.ts';
import * as anims from './anims/mod.ts';
import * as events from './events/mod.ts';

export function lightItUp(data: Beatmap): Beatmap {
   data.difficulty.customData = aggregateCustomData(
      data.difficulty.customData,
      models.create(),
      anims.create(),
   );

   events.add(data);

   return data;
}
