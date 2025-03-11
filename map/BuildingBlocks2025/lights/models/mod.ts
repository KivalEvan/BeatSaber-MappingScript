import { types } from '@bsmap';
import { aggregateCustomData } from '../../utils.ts';
import * as materials from './materials.ts';
import * as spectrogram from './spectrogram.ts';
import * as yinYang from './yinYang.ts';
import * as fabric from './fabric.ts';
import * as background from './background.ts';
import * as torii from './torii.ts';
import * as fogs from './fogs.ts';
import * as laserSet from './laserSet.ts';
import * as triWalls from './triWalls.ts';

export function create(): types.wrapper.ICustomDataDifficulty {
   return aggregateCustomData(
      materials.create(),
      spectrogram.create(),
      yinYang.create(),
      fabric.create(),
      torii.create(),
      background.create(),
      fogs.create(),
      laserSet.create(),
      triWalls.create(),
   );
}
