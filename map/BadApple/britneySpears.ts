import * as imagescript from 'https://deno.land/x/imagescript@1.2.17/mod.ts';
import {
   Beatmap,
   DistributionType,
   EaseType,
   EventLightColor,
   LimitAlsoAffectsType,
   normalize,
   range,
   writeLightshowFileSync,
} from '../../depsLocal.ts';
import { lightitup, LightPositionMapping } from './lightitup.ts';
import { readFile } from '../../deps.ts';

export default async function () {
   const gifFile = readFile('./map/BadApple/badBritney.gif');
   const lightshow = new Beatmap()
      .setVersion(4)
      .setLightshowFilename('BritneySpears.lightshow.dat');
   // difficulty.addBasicEvents({
   //    type: 6,
   //    value: 9,
   //    floatValue: 2,
   // });
   for (const id of [0, 2]) {
      lightshow.addLightRotationEventBoxGroups({
         id,
         time: 4,
         boxes: [
            {
               axis: 1,
               affectFirst: 1,
               rotationDistribution: 3,
               rotationDistributionType: 2,
               events: [{ rotation: 15, easing: EaseType.OUT_QUAD }],
            },
         ],
      });
      lightshow.addLightTranslationEventBoxGroups({
         id,
         time: 4,
         boxes: [
            {
               filter: { p0: 6, p1: 0 },
               axis: 0,
               events: [{ translation: 0.27, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: { p0: 6, p1: 1 },
               axis: 0,
               events: [{ translation: 0.37, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: { p0: 6, p1: 2 },
               axis: 0,
               events: [{ translation: 0.51, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: { p0: 6, p1: 3 },
               axis: 0,
               events: [{ translation: 0.68, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: { p0: 6, p1: 4 },
               axis: 0,
               events: [{ translation: 0.92, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: { p0: 6, p1: 5 },
               axis: 0,
               events: [{ translation: 1.16, easing: EaseType.OUT_QUAD }],
            },
            {
               axis: 1,
               events: [{ translation: 0.4, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: { p0: 6, p1: 0 },
               axis: 2,
               events: [{ translation: 0, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: { p0: 6, p1: 1 },
               axis: 2,
               events: [{ translation: 0.05, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: { p0: 6, p1: 2 },
               axis: 2,
               events: [{ translation: 0.12, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: { p0: 6, p1: 3 },
               axis: 2,
               events: [{ translation: 0.16, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: { p0: 6, p1: 4 },
               axis: 2,
               events: [{ translation: 0.18, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: { p0: 6, p1: 5 },
               axis: 2,
               events: [{ translation: 0.14, easing: EaseType.OUT_QUAD }],
            },
         ],
      });
   }
   lightshow.addLightTranslationEventBoxGroups({
      id: 5,
      boxes: [
         {
            axis: 1,
            events: [{ translation: -4, easing: EaseType.OUT_QUAD }],
         },
      ],
   });

   lightshow.addLightRotationEventBoxGroups(
      {
         id: 6,
         time: 4,
         boxes: [
            {
               axis: 0,
               events: [{ rotation: 285, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: {
                  limit: 0.55,
                  limitAffectsType: LimitAlsoAffectsType.DISTRIBUTION,
               },
               axis: 2,
               affectFirst: 1,
               rotationDistribution: 30,
               events: [{ rotation: 345, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: {
                  limit: 0.4,
                  limitAffectsType: LimitAlsoAffectsType.DISTRIBUTION,
                  reverse: 1,
               },
               axis: 2,
               affectFirst: 1,
               rotationDistribution: 30,
               events: [{ rotation: 345, easing: EaseType.OUT_QUAD }],
            },
         ],
      },
      {
         id: 8,
         time: 4,
         boxes: [
            {
               axis: 0,
               events: [{ rotation: 255, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: {
                  limit: 0.55,
                  limitAffectsType: LimitAlsoAffectsType.DISTRIBUTION,
               },
               axis: 2,
               affectFirst: 1,
               rotationDistribution: 30,
               events: [{ rotation: 345, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: {
                  limit: 0.4,
                  limitAffectsType: LimitAlsoAffectsType.DISTRIBUTION,
                  reverse: 1,
               },
               axis: 2,
               affectFirst: 1,
               rotationDistribution: 30,
               events: [{ rotation: 345, easing: EaseType.OUT_QUAD }],
            },
         ],
      },
   );
   lightshow.addLightTranslationEventBoxGroups(
      {
         id: 6,
         time: 4,
         boxes: [
            {
               filter: {
                  limit: 0.55,
                  limitAffectsType: LimitAlsoAffectsType.DISTRIBUTION,
               },
               affectFirst: 1,
               gapDistributionType: DistributionType.STEP,
               gapDistribution: -2.5,
               events: [{ translation: 11.25, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: {
                  limit: 0.4,
                  limitAffectsType: LimitAlsoAffectsType.DISTRIBUTION,
                  reverse: 1,
               },
               affectFirst: 1,
               gapDistributionType: DistributionType.STEP,
               gapDistribution: -2.5,
               events: [
                  { translation: 11.25 - 2.5, easing: EaseType.OUT_QUAD },
               ],
            },
            {
               filter: {
                  limit: 0.55,
                  limitAffectsType: LimitAlsoAffectsType.DISTRIBUTION,
               },
               axis: 1,
               events: [{ translation: 6, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: {
                  limit: 0.4,
                  limitAffectsType: LimitAlsoAffectsType.DISTRIBUTION,
                  reverse: 1,
               },
               axis: 1,
               events: [{ translation: 8, easing: EaseType.OUT_QUAD }],
            },
            {
               axis: 2,
               events: [{ translation: -10.8, easing: EaseType.OUT_QUAD }],
            },
         ],
      },
      {
         id: 8,
         time: 4,
         boxes: [
            {
               filter: {
                  limit: 0.55,
                  limitAffectsType: LimitAlsoAffectsType.DISTRIBUTION,
               },
               affectFirst: 1,
               gapDistributionType: DistributionType.STEP,
               gapDistribution: -2.5,
               events: [{ translation: 11.25, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: {
                  limit: 0.4,
                  limitAffectsType: LimitAlsoAffectsType.DISTRIBUTION,
                  reverse: 1,
               },
               affectFirst: 1,
               gapDistributionType: DistributionType.STEP,
               gapDistribution: -2.5,
               events: [
                  { translation: 11.25 - 2.5, easing: EaseType.OUT_QUAD },
               ],
            },
            {
               filter: {
                  limit: 0.55,
                  limitAffectsType: LimitAlsoAffectsType.DISTRIBUTION,
               },
               axis: 1,
               events: [{ translation: -6.5, easing: EaseType.OUT_QUAD }],
            },
            {
               filter: {
                  limit: 0.4,
                  limitAffectsType: LimitAlsoAffectsType.DISTRIBUTION,
                  reverse: 1,
               },
               axis: 1,
               events: [{ translation: -8.5, easing: EaseType.OUT_QUAD }],
            },
            {
               axis: 2,
               events: [{ translation: -10.8, easing: EaseType.OUT_QUAD }],
            },
         ],
      },
   );
   lightshow.addLightRotationEventBoxGroups({
      id: 14,
      boxes: [
         {
            events: [{ rotation: 90 }],
         },
      ],
   });
   lightshow.addLightTranslationEventBoxGroups({
      id: 14,
      boxes: [
         { axis: 1, events: [{ translation: 1 }] },
         { axis: 2, events: [{ translation: 2.75 }] },
      ],
   });

   const allMapping: LightPositionMapping[] = [
      ...range(8).map((e) => [[e + 2, 0], 7, 17 - e] as LightPositionMapping),
      ...range(10).map((e) => [[e + 1, 1], 7, e] as LightPositionMapping),
      ...range(10).map((e) => [[e + 1, 6], 9, e] as LightPositionMapping),
      ...range(8).map((e) => [[e + 2, 7], 9, 17 - e] as LightPositionMapping),
   ];

   for (let stackkk = 0; stackkk < 4; stackkk++) {
      allMapping.push(
         ...range(4).map(
            (e) =>
               [
                  [5, 5 - e],
                  18,
                  e * 4 + 16 * 0 + stackkk,
                  normalize(stackkk, -0.5, 3),
               ] as LightPositionMapping,
         ),
         ...range(4).map(
            (e) =>
               [
                  [4, 2 + e],
                  18,
                  e * 4 + 16 * 1 + stackkk,
                  normalize(stackkk, -0.5, 3),
               ] as LightPositionMapping,
         ),
         ...range(4).map(
            (e) =>
               [
                  [3, 5 - e],
                  18,
                  e * 4 + 16 * 2 + stackkk,
                  normalize(stackkk, -0.5, 3),
               ] as LightPositionMapping,
         ),
         ...range(4).map(
            (e) =>
               [
                  [2, 2 + e],
                  18,
                  e * 4 + 16 * 3 + stackkk,
                  normalize(stackkk, -0.5, 3),
               ] as LightPositionMapping,
         ),
         ...range(4).map(
            (e) =>
               [
                  [1, 5 - e],
                  18,
                  e * 4 + 16 * 4 + stackkk,
                  normalize(stackkk, -0.5, 3),
               ] as LightPositionMapping,
         ),
         ...range(4).map(
            (e) =>
               [
                  [0, 2 + e],
                  18,
                  e * 4 + 16 * 5 + stackkk,
                  normalize(stackkk, -0.5, 3),
               ] as LightPositionMapping,
         ),
         ...range(4).map(
            (e) =>
               [
                  [6, 5 - e],
                  19,
                  e * 4 + 16 * 0 + stackkk,
                  normalize(stackkk, -0.5, 3),
               ] as LightPositionMapping,
         ),
         ...range(4).map(
            (e) =>
               [
                  [7, 2 + e],
                  19,
                  e * 4 + 16 * 1 + stackkk,
                  normalize(stackkk, -0.5, 3),
               ] as LightPositionMapping,
         ),
         ...range(4).map(
            (e) =>
               [
                  [8, 5 - e],
                  19,
                  e * 4 + 16 * 2 + stackkk,
                  normalize(stackkk, -0.5, 3),
               ] as LightPositionMapping,
         ),
         ...range(4).map(
            (e) =>
               [
                  [9, 2 + e],
                  19,
                  e * 4 + 16 * 3 + stackkk,
                  normalize(stackkk, -0.5, 3),
               ] as LightPositionMapping,
         ),
         ...range(4).map(
            (e) =>
               [
                  [10, 5 - e],
                  19,
                  e * 4 + 16 * 4 + stackkk,
                  normalize(stackkk, -0.5, 3),
               ] as LightPositionMapping,
         ),
         ...range(4).map(
            (e) =>
               [
                  [11, 2 + e],
                  19,
                  e * 4 + 16 * 5 + stackkk,
                  normalize(stackkk, -0.5, 3),
               ] as LightPositionMapping,
         ),
      );
   }
   lightitup(
      await imagescript.GIF.decode(await gifFile),
      30,
      allMapping,
      lightshow,
   );

   lightshow.addLightColorEventBoxGroups(
      {
         id: 15,
         time: 35,
         boxes: [
            {
               events: [
                  { color: 2, brightness: 1.5, easing: EaseType.NONE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 14,
         time: 4,
         boxes: [
            {
               beatDistribution: 4,
               events: [
                  { color: 2, brightness: 0, easing: EaseType.NONE },
                  {
                     time: 0.25,
                     color: EventLightColor.RED,
                     brightness: 1.5,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 2,
                     color: EventLightColor.BLUE,
                     brightness: 1,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 3.75,
                     color: EventLightColor.BLUE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 14,
         time: 36,
         boxes: [
            {
               beatDistribution: 4,
               events: [
                  { color: 2, brightness: 0, easing: EaseType.NONE },
                  {
                     time: 0.25,
                     color: EventLightColor.BLUE,
                     brightness: 1.5,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 2,
                     color: EventLightColor.BLUE,
                     brightness: 1,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 3.75,
                     color: EventLightColor.BLUE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 14,
         time: 68,
         boxes: [
            {
               beatDistribution: 4,
               events: [
                  { color: 2, brightness: 0, easing: EaseType.NONE },
                  {
                     time: 0.25,
                     color: EventLightColor.RED,
                     brightness: 1.5,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 2,
                     color: EventLightColor.BLUE,
                     brightness: 1,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 3.75,
                     color: EventLightColor.BLUE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 14,
         time: 100,
         boxes: [
            {
               beatDistribution: 4,
               events: [
                  { color: 2, brightness: 0, easing: EaseType.NONE },
                  {
                     time: 0.25,
                     color: EventLightColor.BLUE,
                     brightness: 1.5,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 2,
                     color: EventLightColor.BLUE,
                     brightness: 1,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 3.75,
                     color: EventLightColor.BLUE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 14,
         time: 132,
         boxes: [
            {
               beatDistribution: 4,
               events: [
                  { color: 2, brightness: 0, easing: EaseType.NONE },
                  {
                     time: 0.25,
                     color: EventLightColor.RED,
                     brightness: 1.5,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 2,
                     color: EventLightColor.BLUE,
                     brightness: 1,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 3.75,
                     color: EventLightColor.BLUE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 14,
         time: 196,
         boxes: [
            {
               beatDistribution: 4,
               events: [
                  { color: 2, brightness: 0, easing: EaseType.NONE },
                  {
                     time: 0.25,
                     color: EventLightColor.RED,
                     brightness: 1.5,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 2,
                     color: EventLightColor.BLUE,
                     brightness: 1,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 3.75,
                     color: EventLightColor.BLUE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 16,
         time: 258,
         boxes: [
            {
               beatDistributionType: DistributionType.STEP,
               beatDistribution: 1,
               events: [
                  { color: 2, brightness: 1.25, easing: EaseType.NONE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 17,
         time: 258,
         boxes: [
            {
               beatDistributionType: DistributionType.STEP,
               beatDistribution: 1,
               events: [
                  { color: 2, brightness: 1.25, easing: EaseType.NONE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 16,
         time: 66,
         boxes: [
            {
               beatDistributionType: DistributionType.STEP,
               beatDistribution: 1 / 3,
               events: [
                  { color: 2, brightness: 1.25, easing: EaseType.NONE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 16,
         time: 67,
         boxes: [
            {
               beatDistributionType: DistributionType.STEP,
               beatDistribution: 1 / 3,
               events: [
                  { color: 2, brightness: 1.25, easing: EaseType.NONE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 17,
         time: 66.0625,
         boxes: [
            {
               beatDistributionType: DistributionType.STEP,
               beatDistribution: 1 / 3,
               events: [
                  { color: 2, brightness: 1.25, easing: EaseType.NONE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 17,
         time: 67.0625,
         boxes: [
            {
               beatDistributionType: DistributionType.STEP,
               beatDistribution: 1 / 3,
               events: [
                  { color: 2, brightness: 1.25, easing: EaseType.NONE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 16,
         time: 98,
         boxes: [
            {
               beatDistributionType: DistributionType.STEP,
               beatDistribution: 1 / 3,
               events: [
                  { color: 2, brightness: 1.25, easing: EaseType.NONE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 16,
         time: 99,
         boxes: [
            {
               beatDistributionType: DistributionType.STEP,
               beatDistribution: 1 / 3,
               events: [
                  { color: 2, brightness: 1.25, easing: EaseType.NONE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 17,
         time: 98.0625,
         boxes: [
            {
               beatDistributionType: DistributionType.STEP,
               beatDistribution: 1 / 3,
               events: [
                  { color: 2, brightness: 1.25, easing: EaseType.NONE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 17,
         time: 99.0625,
         boxes: [
            {
               beatDistributionType: DistributionType.STEP,
               beatDistribution: 1 / 3,
               events: [
                  { color: 2, brightness: 1.25, easing: EaseType.NONE },
                  {
                     time: 0.5,
                     color: EventLightColor.WHITE,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
      {
         id: 21,
         boxes: [
            {
               events: [
                  {
                     color: 2,
                     brightness: 1,
                     easing: EaseType.NONE,
                  },
                  { time: 1, previous: 1 },
                  {
                     time: 4,
                     color: 2,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 36,
                     color: 2,
                     brightness: 0,
                  },
                  {
                     time: 40,
                     color: 2,
                     brightness: 1,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 62,
                     color: 2,
                     brightness: 1,
                  },
                  {
                     time: 64,
                     color: 2,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 132,
                     color: 2,
                     brightness: 0,
                     easing: EaseType.NONE,
                  },
                  {
                     time: 136,
                     color: 2,
                     brightness: 1,
                     easing: EaseType.LINEAR,
                  },
                  {
                     time: 162,
                     color: 2,
                     brightness: 1,
                  },
                  {
                     time: 164,
                     color: 2,
                     brightness: 0,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
   );
   writeLightshowFileSync(lightshow, 4);
}
