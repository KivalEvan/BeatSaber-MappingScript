import * as imagescript from 'https://deno.land/x/imagescript@1.2.17/mod.ts';
import {
   Axis,
   Beatmap,
   DistributionType,
   IndexFilterType,
   range,
   writeLightshowFileSync,
} from '../../depsLocal.ts';
import { lightitup, LightPositionMapping } from './lightitup.ts';

// FIXME: no hardcore drug will fix me

const MAX_X = 18;
const MAX_Y = 13;

export default async function () {
   const gifFile = Deno.readFile('./map/BadApple/badCollider.gif');
   const lightshow = new Beatmap().setLightshowFilename(
      'Collider.lightshow.dat',
   );
   const allMapping: LightPositionMapping[] = [];

   // big block setup
   for (const id of [0, 7, 8]) {
      lightshow.addLightRotationEventBoxGroups({
         id,
         boxes: [{ events: [{ rotation: 90 }] }],
      });
   }
   lightshow.addLightTranslationEventBoxGroups({
      boxes: [
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 2 },
            events: [{ translation: -1 }],
         },
         {
            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
            events: [{ translation: 1 }],
         },
         {
            axis: Axis.Y,
            filter: { chunks: 10 },
            events: [{ translation: -1 }],
            gapDistributionType: DistributionType.STEP,
            gapDistribution: 0.5,
            affectFirst: 1,
         },
         { axis: Axis.Z, events: [{ translation: 4.5 }] },
      ],
   });
   for (const id of [7, 8]) {
      lightshow.addLightTranslationEventBoxGroups({
         id,
         boxes: [
            {
               events: [{ translation: 3 }],
            },
            {
               axis: Axis.Y,
               events: [{ translation: -1 }],
               gapDistributionType: DistributionType.STEP,
               gapDistribution: 0.5,
               affectFirst: 1,
            },
            { axis: Axis.Z, events: [{ translation: 4.5 }] },
         ],
      });
   }

   // laser setup
   for (const id of [4, 5, 15, 16, 17, 18]) {
      lightshow.addLightRotationEventBoxGroups({
         id,
         boxes: [{ events: [{ rotation: 90 }] }],
      });
   }
   for (const id of [2, 11, 12]) {
      lightshow.addLightRotationEventBoxGroups({
         id,
         boxes: [{ events: [{ rotation: 180 }] }],
      });
   }
   lightshow.addLightTranslationEventBoxGroups(
      {
         id: 2,
         boxes: [
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 0,
                  p1: 4,
               },
               events: [{ translation: 0.55 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 1,
                  p1: 4,
               },
               events: [{ translation: 1.85 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 2,
                  p1: 4,
               },
               events: [{ translation: -1.85 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 3,
                  p1: 4,
               },
               events: [{ translation: -0.55 }],
            },
            {
               axis: Axis.Y,
               events: [{}],
            },
            {
               filter: { chunks: 10 },
               axis: Axis.Z,
               events: [{ translation: 0.35 }],
               gapDistributionType: DistributionType.STEP,
               gapDistribution: -0.25,
               affectFirst: 1,
            },
         ],
      },
      {
         id: 2 + 1,
         boxes: [
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 0,
                  p1: 4,
               },
               events: [{ translation: -1.45 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 1,
                  p1: 4,
               },
               events: [{ translation: 0.25 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 2,
                  p1: 4,
               },
               events: [{ translation: -0.25 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 3,
                  p1: 4,
               },
               events: [{ translation: 1.45 }],
            },
            {
               axis: Axis.Y,
               events: [{ translation: -0.21 }],
            },
            {
               filter: { chunks: 10 },
               axis: Axis.Z,
               events: [{ translation: 0.15 }],
               gapDistributionType: DistributionType.STEP,
               gapDistribution: 0.25,
               affectFirst: 1,
            },
         ],
      },
      {
         id: 2 + 2,
         boxes: [
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 0,
                  p1: 4,
               },
               events: [{ translation: 1.35 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 1,
                  p1: 4,
               },
               events: [{ translation: 2.65 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 2,
                  p1: 4,
               },
               events: [{ translation: -2.65 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 3,
                  p1: 4,
               },
               events: [{ translation: -1.35 }],
            },
            {
               filter: { chunks: 10 },
               axis: Axis.Y,
               events: [{ translation: 0.6 }],
               gapDistributionType: DistributionType.STEP,
               gapDistribution: -0.25,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               events: [{ translation: -0.15 }],
            },
         ],
      },
      {
         id: 2 + 3,
         boxes: [
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 0,
                  p1: 4,
               },
               events: [{ translation: -0.25 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 1,
                  p1: 4,
               },
               events: [{ translation: 1.05 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 2,
                  p1: 4,
               },
               events: [{ translation: -1.05 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 3,
                  p1: 4,
               },
               events: [{ translation: 0.25 }],
            },
            {
               filter: { chunks: 10 },
               axis: Axis.Y,
               events: [{ translation: -2.35 }],
               gapDistributionType: DistributionType.STEP,
               gapDistribution: 0.25,
               affectFirst: 1,
            },
            {
               axis: Axis.Z,
               events: [{ translation: 0.15 }],
            },
         ],
      },
      {
         time: 0.01,
         id: 2 + 3,
         boxes: [
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 16,
                  p1: 0,
               },
               events: [{ translation: 0.15 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 17,
                  p1: 0,
               },
               events: [{ translation: 1.45 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 18,
                  p1: 0,
               },
               events: [{ translation: -1.45 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 19,
                  p1: 0,
               },
               events: [{ translation: -0.15 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 20,
                  p1: 4,
                  limit: 0.6,
               },
               events: [{ translation: -1.25 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 21,
                  p1: 4,
                  limit: 0.6,
               },
               events: [{ translation: 0.05 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 22,
                  p1: 4,
                  limit: 0.6,
               },
               events: [{ translation: -0.05 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 23,
                  p1: 4,
                  limit: 0.6,
               },
               events: [{ translation: 1.25 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 32,
                  p1: 4,
               },
               events: [{ translation: -0.85 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 33,
                  p1: 4,
               },
               events: [{ translation: 0.45 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 34,
                  p1: 4,
               },
               events: [{ translation: -0.45 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 35,
                  p1: 4,
               },
               events: [{ translation: 0.85 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 4,
                  p1: 0,
                  chunks: 10,
               },
               axis: Axis.Y,
               events: [{ translation: -1.1 }],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 5,
                  p1: 1,
                  chunks: 10,
                  limit: 0.6,
               },
               axis: Axis.Y,
               events: [{ translation: -0.1 }],
               gapDistributionType: DistributionType.STEP,
               gapDistribution: 0.25,
               affectFirst: 1,
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 7,
                  p1: 1,
                  chunks: 10,
               },
               axis: Axis.Y,
               events: [{ translation: 3.65 }],
               gapDistributionType: DistributionType.STEP,
               gapDistribution: 0.25,
               affectFirst: 1,
            },
         ],
      },
   );
   for (const id of [11, 12]) {
      lightshow.addLightTranslationEventBoxGroups(
         {
            id,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 2,
                  },
                  events: [{ translation: 1.75 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
                  events: [{ translation: 3.05 }],
               },
               {
                  axis: Axis.Y,
                  events: [{}],
               },
               {
                  filter: { chunks: 5 },
                  axis: Axis.Z,
                  events: [{ translation: 0.85 }],
                  gapDistributionType: DistributionType.STEP,
                  gapDistribution: -0.25,
                  affectFirst: 1,
               },
            ],
         },
         {
            id: id + 2,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 2,
                  },
                  events: [{ translation: 0.95 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
                  events: [{ translation: 2.45 }],
               },
               {
                  axis: Axis.Y,
                  events: [{ translation: -0.21 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 2,
                  },
                  axis: Axis.Z,
                  events: [{ translation: -0.85 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
                  axis: Axis.Z,
                  events: [{ translation: -1.1 }],
               },
            ],
         },
         {
            id: id + 4,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 2,
                  },
                  events: [{ translation: 2.15 }],
                  gapDistributionType: DistributionType.STEP,
                  gapDistribution: -0.2,
                  affectFirst: 1,
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
                  events: [{ translation: 3.65 }],
                  gapDistributionType: DistributionType.STEP,
                  gapDistribution: -0.2,
                  affectFirst: 1,
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 2,
                  },
                  axis: Axis.Y,
                  events: [{ translation: -0.15 }],
                  gapDistributionType: DistributionType.STEP,
                  gapDistribution: -0.5,
                  affectFirst: 1,
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
                  axis: Axis.Y,
                  events: [{ translation: -0.4 }],
                  gapDistributionType: DistributionType.STEP,
                  gapDistribution: -0.5,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Z,
                  events: [{ translation: -0.15 }],
               },
            ],
         },
         {
            id: id + 6,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 2,
                  },
                  events: [{ translation: 1.75 }],
                  gapDistributionType: DistributionType.STEP,
                  gapDistribution: -0.2,
                  affectFirst: 1,
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
                  events: [{ translation: 3.25 }],
                  gapDistributionType: DistributionType.STEP,
                  gapDistribution: -0.2,
                  affectFirst: 1,
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 2,
                  },
                  axis: Axis.Y,
                  events: [{ translation: -0.6 }],
                  gapDistributionType: DistributionType.STEP,
                  gapDistribution: 0.5,
                  affectFirst: 1,
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
                  axis: Axis.Y,
                  events: [{ translation: -0.85 }],
                  gapDistributionType: DistributionType.STEP,
                  gapDistribution: 0.5,
                  affectFirst: 1,
               },
               {
                  axis: Axis.Z,
                  events: [{ translation: 0.15 }],
               },
            ],
         },
      );
   }

   // mappings
   for (const y of range(10)) {
      for (const x of range(4)) {
         allMapping.push([[MAX_X / 2 - 2 + x, y + 2], 2, 39 - x - y * 4, 1.5]);
      }
   }
   for (const id of range(40)) {
      const j = id % 4;
      const x = j >= 2 ? MAX_X - 2 + (j % 2) : 0 + (j % 2);
      const y = Math.floor(id / 4);
      allMapping.push([[x, MAX_Y - y], 3, id, 2.5]);
   }
   for (const id of range(40)) {
      const j = id % 4;
      const x = j >= 2 ? 4 - (j % 2) : MAX_X - 4 - (j % 2);
      const y = Math.floor(id / 4);
      allMapping.push([[x, MAX_Y - 4 - y], 4, id, 2.5]);
   }
   for (const id of range(10)) {
      const x = MAX_X / 2 - 3 - (id % 2);
      const y = Math.floor(id / 2);
      allMapping.push([[x, MAX_Y - 4 - y], 11, id, 2]);
   }
   for (const id of range(10)) {
      const x = MAX_X / 2 + 2 + (id % 2);
      const y = Math.floor(id / 2);
      allMapping.push([[x, MAX_Y - 4 - y], 12, id, 2]);
   }
   for (const group of [13, 14]) {
      for (const y of range(10)) {
         allMapping.push([
            [group === 13 ? 2 : MAX_X - 3, y],
            group,
            9 - y,
            2.5,
         ]);
      }
   }
   for (const x of range(5)) {
      allMapping.push([[MAX_X / 2 - 1 - x, 11], 15, x * 2, 2.5]);
      allMapping.push([[MAX_X / 2 - 1 - x, 12], 15, 1 + x * 2, 2.5]);
      allMapping.push([[MAX_X / 2 + x, 11], 16, x * 2, 2.5]);
      allMapping.push([[MAX_X / 2 + x, 12], 16, 1 + x * 2, 2.5]);
      allMapping.push([[MAX_X / 2 - 3 - x, 10], 17, x * 2, 2.5]);
      allMapping.push([[MAX_X / 2 - 3 - x, 9], 17, 1 + x * 2, 2.5]);
      allMapping.push([[MAX_X / 2 + 2 + x, 10], 18, x * 2, 2.5]);
      allMapping.push([[MAX_X / 2 + 2 + x, 9], 18, 1 + x * 2, 2.5]);
   }
   allMapping.push([[MAX_X / 2 - 3, 4], 5, 0, 2.5]);
   allMapping.push([[MAX_X / 2 - 4, 4], 5, 1, 2.5]);
   allMapping.push([[MAX_X / 2 + 3, 4], 5, 2, 2.5]);
   allMapping.push([[MAX_X / 2 + 2, 4], 5, 3, 2.5]);
   allMapping.push([[MAX_X / 2 - 3, 3], 5, 4, 2.5]);
   allMapping.push([[MAX_X / 2 - 4, 3], 5, 5, 2.5]);
   allMapping.push([[MAX_X / 2 + 3, 3], 5, 6, 2.5]);
   allMapping.push([[MAX_X / 2 + 2, 3], 5, 7, 2.5]);
   allMapping.push([[MAX_X / 2 - 3, 2], 5, 8, 2.5]);
   allMapping.push([[MAX_X / 2 - 4, 2], 5, 9, 2.5]);
   allMapping.push([[MAX_X / 2 + 3, 2], 5, 10, 2.5]);
   allMapping.push([[MAX_X / 2 + 2, 2], 5, 11, 2.5]);
   allMapping.push([[MAX_X / 2 - 3, 1], 5, 12, 2.5]);
   allMapping.push([[MAX_X / 2 - 4, 1], 5, 13, 2.5]);
   allMapping.push([[MAX_X / 2 + 3, 1], 5, 14, 2.5]);
   allMapping.push([[MAX_X / 2 + 2, 1], 5, 15, 2.5]);
   allMapping.push([[MAX_X / 2 - 1, 1], 5, 16, 2.5]);
   allMapping.push([[MAX_X / 2 - 2, 1], 5, 17, 2.5]);
   allMapping.push([[MAX_X / 2 + 1, 1], 5, 18, 2.5]);
   allMapping.push([[MAX_X / 2, 1], 5, 19, 2.5]);
   allMapping.push([[1, 3], 5, 20, 2.5]);
   allMapping.push([[0, 3], 5, 21, 2.5]);
   allMapping.push([[MAX_X - 1, 3], 5, 22, 2.5]);
   allMapping.push([[MAX_X - 2, 3], 5, 23, 2.5]);
   allMapping.push([[1, 2], 5, 24, 2.5]);
   allMapping.push([[0, 2], 5, 25, 2.5]);
   allMapping.push([[MAX_X - 1, 2], 5, 26, 2.5]);
   allMapping.push([[MAX_X - 2, 2], 5, 27, 2.5]);
   allMapping.push([[1, 1], 5, 28, 2.5]);
   allMapping.push([[0, 1], 5, 29, 2.5]);
   allMapping.push([[MAX_X - 1, 1], 5, 30, 2.5]);
   allMapping.push([[MAX_X - 2, 1], 5, 31, 2.5]);
   allMapping.push([[3, MAX_Y], 5, 32, 2.5]);
   allMapping.push([[2, MAX_Y], 5, 33, 2.5]);
   allMapping.push([[MAX_X - 3, MAX_Y], 5, 34, 2.5]);
   allMapping.push([[MAX_X - 4, MAX_Y], 5, 35, 2.5]);
   allMapping.push([[3, MAX_Y - 1], 5, 36, 2.5]);
   allMapping.push([[2, MAX_Y - 1], 5, 37, 2.5]);
   allMapping.push([[MAX_X - 3, MAX_Y - 1], 5, 38, 2.5]);
   allMapping.push([[MAX_X - 4, MAX_Y - 1], 5, 39, 2.5]);

   allMapping.forEach((e) => {
      if (e[3]) {
         e[3] *= 4;
      }
   });

   lightitup(
      await imagescript.GIF.decode(await gifFile),
      30,
      allMapping.filter((e) => e[0][1] !== 0),
      lightshow,
      0,
      0,
   );
   writeLightshowFileSync(lightshow, 4);
}
