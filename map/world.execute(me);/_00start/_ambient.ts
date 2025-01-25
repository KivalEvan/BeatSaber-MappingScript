import {
   deepCopy,
   DistributionType,
   EaseType,
   EventLightColor,
   TransitionType,
   types,
   v3,
} from '@bsmap';
import { Brightness, FILTER_HALF_1_STEP, FILTER_HALF_2_STEP, Group } from '../_common.ts';
import { generateSeed, objectTimeScale, objectTimeShift } from '../_helpers.ts';
import { START_TIME } from './_time.ts';

export default function (data: types.wrapper.IWrapBeatmap) {
   const light: Partial<types.wrapper.IWrapLightColorEventAttribute>[] = [
      {
         color: EventLightColor.WHITE,
         brightness: Brightness.OFF,
         previous: 1,
      },
      {
         time: 0.5,
         color: EventLightColor.WHITE,
         brightness: Brightness.EXTRA,
         easing: EaseType.LINEAR,
         frequency: 12,
      },
      {
         time: 0.75,
         color: EventLightColor.WHITE,
         easing: EaseType.LINEAR,
      },
      {
         time: 1.5,
         previous: 1,
      },
      {
         time: 2.5,
         color: EventLightColor.WHITE,
         brightness: Brightness.OFF,
         easing: EaseType.LINEAR,
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
