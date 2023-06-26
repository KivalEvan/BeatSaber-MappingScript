import {
   DistributionType,
   EventBoxColor,
   TransitionType,
   types,
   utils,
   v3,
} from '../../../depsLocal.ts';
import { Brightness, FILTER_HALF_1_STEP, FILTER_HALF_2_STEP, Group } from '../_common.ts';
import { generateSeed, objectTimeShift } from '../_helpers.ts';
import { START_TIME } from './_time.ts';

export default function (data: v3.Difficulty) {
   const light: Partial<types.wrapper.IWrapLightColorBaseAttribute>[] = [
      {
         color: EventBoxColor.WHITE,
         brightness: Brightness.OFF,
         frequency: 12,
      },
      {
         time: 0.25,
         color: EventBoxColor.WHITE,
         brightness: Brightness.FLASH,
         transition: TransitionType.INTERPOLATE,
      },
      {
         time: 0.3125,
         color: EventBoxColor.WHITE,
         brightness: Brightness.MODERATE,
         transition: TransitionType.INTERPOLATE,
      },
      {
         time: 0.375,
         color: EventBoxColor.WHITE,
         brightness: Brightness.FULL,
         transition: TransitionType.INTERPOLATE,
      },
   ];

   for (let repeat = 0, flip = false; repeat < 32; repeat += 8, flip = !flip) {
      data.addLightColorEventBoxGroups({
         time: START_TIME + repeat - 0.125,
         id: Group.TOP_SPOTLIGHTS,
         boxes: [
            {
               filter: FILTER_HALF_1_STEP.clone().setRandom(2).setSeed(
                  generateSeed(),
               ),
               beatDistribution: 2,
               beatDistributionType: DistributionType.STEP,
               events: light,
            },
            {
               filter: FILTER_HALF_2_STEP.clone().setRandom(2).setSeed(
                  generateSeed(),
               ),
               beatDistribution: 2,
               beatDistributionType: DistributionType.STEP,
               events: objectTimeShift(utils.deepCopy(light), 1),
            },
         ],
      });
      data.addLightRotationEventBoxGroups({
         time: START_TIME + repeat,
         id: Group.TOP_SPOTLIGHTS,
         boxes: [
            {
               filter: flip
                  ? FILTER_HALF_1_STEP.clone().setRandom(2).setSeed(
                     generateSeed(),
                  )
                  : FILTER_HALF_2_STEP.clone().setRandom(2).setSeed(
                     generateSeed(),
                  ),
               events: [{ rotation: 15 }, { time: 7.5, rotation: 20 }],
               rotationDistribution: 15,
            },
            {
               filter: flip
                  ? FILTER_HALF_2_STEP.clone().setRandom(2).setSeed(
                     generateSeed(),
                  )
                  : FILTER_HALF_1_STEP.clone().setRandom(2).setSeed(
                     generateSeed(),
                  ),
               events: [{ rotation: 15 }, { time: 7.5, rotation: 20 }],
               rotationDistribution: 15,
               flip: 1,
            },
         ],
      });
   }
   const halt = [6.5, 13.5, 21.5, 29.5];
   for (const h of halt) {
      data.addLightColorEventBoxGroups(
         {
            time: START_TIME + h,
            id: Group.TOP_SPOTLIGHTS,
            boxes: [
               {
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.OFF,
                        transition: TransitionType.EXTEND,
                     },
                  ],
               },
            ],
         },
         {
            time: START_TIME + 0.5 + h,
            id: Group.TOP_SPOTLIGHTS,
            boxes: [
               {
                  filter: { random: 2, seed: generateSeed() },
                  beatDistribution: 0.5,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.OFF,
                        transition: TransitionType.INTERPOLATE,
                        frequency: 12,
                     },
                  ],
               },
            ],
         },
      );
   }
}
