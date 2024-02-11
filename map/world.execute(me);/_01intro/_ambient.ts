import {
   deepCopy,
   DistributionType,
   EventBoxColor,
   TransitionType,
   types,
   v3,
} from '../../../depsLocal.ts';
import { Brightness, FILTER_HALF_1_STEP, FILTER_HALF_2_STEP, Group } from '../_common.ts';
import { generateSeed, objectTimeScale, objectTimeShift } from '../_helpers.ts';
import { START_TIME } from './_time.ts';

export default function (data: v3.Difficulty) {
   const light: Partial<types.wrapper.IWrapLightColorEventAttribute>[] = [
      {
         color: EventBoxColor.WHITE,
         brightness: Brightness.OFF,
         transition: TransitionType.EXTEND,
      },
      {
         time: 0.5,
         color: EventBoxColor.RED,
         brightness: Brightness.EXTRA,
         transition: TransitionType.INTERPOLATE,
         frequency: 12,
      },
      {
         time: 0.75,
         color: EventBoxColor.WHITE,
         transition: TransitionType.INTERPOLATE,
      },
      {
         time: 1.5,
         transition: TransitionType.EXTEND,
      },
      {
         time: 2.5,
         color: EventBoxColor.WHITE,
         brightness: Brightness.OFF,
         transition: TransitionType.INTERPOLATE,
         frequency: 8,
      },
   ];

   for (let repeat = 0, flip = false; repeat < 28; repeat += 4, flip = !flip) {
      for (let i = 0; i < 2; i++) {
         data.addLightColorEventBoxGroups({
            time: START_TIME + repeat + i * 0.25,
            id: flip ? Group.PARTICLES_RIGHT - i : Group.PARTICLES_LEFT + i,
            boxes: [
               {
                  filter: { random: 2, seed: generateSeed() },
                  beatDistribution: 0.5,
                  beatDistributionType: DistributionType.STEP,
                  events: light,
               },
            ],
         });
      }
   }
   for (let i = 0; i < 2; i++) {
      data.addLightColorEventBoxGroups({
         time: START_TIME + 28 + i * 0.25,
         id: Group.PARTICLES_RIGHT - i,
         boxes: [
            {
               filter: { random: 2, seed: generateSeed() },
               beatDistribution: 0.375,
               beatDistributionType: DistributionType.STEP,
               events: objectTimeScale(deepCopy(light), 0.75),
            },
         ],
      });
   }
}
