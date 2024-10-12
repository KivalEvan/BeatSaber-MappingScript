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

export default function (data: types.wrapper.IWrapBeatmap) {
   const light: Partial<types.wrapper.IWrapLightColorEventAttribute>[] = [
      {
         color: EventBoxColor.WHITE,
         brightness: Brightness.OFF,
         previous: 1,
      },
      {
         time: 0.5,
         color: EventBoxColor.RED,
         brightness: Brightness.EXTRA,
         easing: EaseType.LINEAR,
         frequency: 12,
      },
      {
         time: 0.75,
         color: EventBoxColor.BLUE,
         easing: EaseType.LINEAR,
      },
      {
         time: 1.5,
         previous: 1,
      },
      {
         time: 2.5,
         color: EventBoxColor.BLUE,
         brightness: Brightness.OFF,
         easing: EaseType.LINEAR,
         frequency: 8,
      },
   ];

   for (let repeat = 0, flip = false; repeat < 28; repeat += 4, flip = !flip) {
      for (let i = 0; i < 4; i++) {
         data.addLightColorEventBoxGroups({
            time: START_TIME + repeat + i * 0.25,
            id: Group.MAIN_LASERS_BOTTOM_LEFT + i,
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
   for (let i = 0; i < 4; i++) {
      data.addLightColorEventBoxGroups({
         time: START_TIME + 28 + i * 0.25,
         id: Group.MAIN_LASERS_BOTTOM_LEFT + i,
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
