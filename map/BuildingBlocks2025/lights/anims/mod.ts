import { types } from '@bsmap';
import { aggregateCustomData } from '../../utils.ts';
import * as torii from './torii.ts';
import * as yinYang from './yinYang.ts';
import * as laserSet from './laserSet.ts';
import * as triWalls from './triWalls.ts';
import * as hider from './hider.ts';
import * as spinny from './spinny.ts';

export function create(): types.wrapper.ICustomDataDifficulty {
   return aggregateCustomData(
      torii.create(),
      yinYang.create(),
      laserSet.create(),
      triWalls.create(),
      spinny.create(),
      hider.create(),
   );
}
