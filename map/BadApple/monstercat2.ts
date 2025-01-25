import * as imagescript from 'https://deno.land/x/imagescript@1.2.17/mod.ts';
import { Beatmap, range, writeLightshowFileSync } from '@bsmap';
import { lightitup, LightPositionMapping } from './lightitup.ts';
import { readFile } from '../../deps.ts';

export default async function () {
   const gifFile = readFile('./map/BadApple/badMonstercat2.gif');
   const lightshow = new Beatmap()
      .setVersion(4)
      .setLightshowFilename('Monstercat2.lightshow.dat');

   // pillar
   lightshow.addLightRotationEventBoxGroups(
      {
         id: 1,
         boxes: [{ axis: 2, events: [{ rotation: 90 }] }],
      },
      {
         id: 3,
         boxes: [{ axis: 2, events: [{ rotation: 90 }] }],
      },
   );
   lightshow.addLightTranslationEventBoxGroups(
      {
         id: 1,
         boxes: [
            {
               filter: { p0: 2, p1: 0 },
               axis: 0,
               events: [{ translation: -3.1 }],
               affectFirst: 1,
               gapDistribution: 0.17,
               gapDistributionType: 2,
            },
            {
               filter: { p0: 2, p1: 1 },
               axis: 0,
               events: [{ translation: -3.1 }],
               affectFirst: 1,
               gapDistribution: 0.17,
               gapDistributionType: 2,
            },
            {
               filter: { p0: 8, p1: 0 },
               axis: 1,
               events: [{ translation: 1.6 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 1 },
               axis: 1,
               events: [{ translation: 1.6 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 2 },
               axis: 1,
               events: [{ translation: 1.6 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 3 },
               axis: 1,
               events: [{ translation: 1.6 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 4 },
               axis: 1,
               events: [{ translation: 2.2 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 5 },
               axis: 1,
               events: [{ translation: 2.2 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 6 },
               axis: 1,
               events: [{ translation: 2.2 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 7 },
               axis: 1,
               events: [{ translation: 2.2 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            { axis: 2, events: [{ translation: 10 }] },
         ],
      },
      {
         id: 3,
         boxes: [
            {
               filter: { p0: 2, p1: 0 },
               axis: 0,
               events: [{ translation: -3.1 }],
               affectFirst: 1,
               gapDistribution: 0.17,
               gapDistributionType: 2,
            },
            {
               filter: { p0: 2, p1: 1 },
               axis: 0,
               events: [{ translation: -3.1 }],
               affectFirst: 1,
               gapDistribution: 0.17,
               gapDistributionType: 2,
            },
            {
               filter: { p0: 8, p1: 0 },
               axis: 1,
               events: [{ translation: 5.6 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 1 },
               axis: 1,
               events: [{ translation: 5.6 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 2 },
               axis: 1,
               events: [{ translation: 5.6 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 3 },
               axis: 1,
               events: [{ translation: 5.6 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 4 },
               axis: 1,
               events: [{ translation: 6.2 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 5 },
               axis: 1,
               events: [{ translation: 6.2 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 6 },
               axis: 1,
               events: [{ translation: 6.2 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            {
               filter: { p0: 8, p1: 7 },
               axis: 1,
               events: [{ translation: 6.2 }],
               affectFirst: 1,
               gapDistribution: -0.63,
            },
            { axis: 2, events: [{ translation: 10 }] },
         ],
      },
   );

   lightshow.addLightTranslationEventBoxGroups({
      boxes: [
         {
            axis: 1,
            events: [{ translation: -10 }],
         },
      ],
   });

   for (let i = 0; i < 2; i++) {
      lightshow.addLightRotationEventBoxGroups(
         {
            id: 14 + i,
            boxes: [
               { events: [{ rotation: 90 }] },
               {
                  axis: 1,
                  events: [{ rotation: 0 }],
                  affectFirst: 1,
                  rotationDistribution: -10,
               },
            ],
         },
         {
            id: 19 + i,
            boxes: [
               { events: [{ rotation: 67 }] },
               {
                  axis: 2,
                  events: [{ rotation: 1 }],
                  affectFirst: 1,
                  rotationDistribution: 8,
               },
            ],
         },
      );
      lightshow.addLightTranslationEventBoxGroups(
         {
            id: 14 + i,
            boxes: [
               {
                  axis: 0,
                  events: [{ translation: 0.26 }],
                  affectFirst: 1,
                  gapDistribution: -0.33,
                  gapDistributionType: 2,
               },
               { axis: 1, events: [{ translation: 0.8 }] },
               { axis: 2, events: [{ translation: -4.9 }] },
            ],
         },
         {
            id: 19 + i,
            boxes: [
               {
                  axis: 0,
                  events: [{ translation: 0.46 }],
                  affectFirst: 1,
                  gapDistribution: -0.33,
                  gapDistributionType: 2,
               },
               { axis: 1, events: [{ translation: 3.6 }] },
               { axis: 2, events: [{ translation: 3.8 }] },
            ],
         },
      );
   }
   lightshow.addLightTranslationEventBoxGroups(
      {
         id: 22,
         boxes: [
            {
               axis: 0,
               events: [{ translation: -1.18 }],
               affectFirst: 1,
               gapDistribution: 0.33,
               gapDistributionType: 2,
            },
            { axis: 1, events: [{ translation: 1.4 }] },
            { axis: 2, events: [{ translation: 4.4 }] },
         ],
      },
      {
         id: 28,
         boxes: [
            {
               axis: 0,
               events: [{ translation: -1.18 }],
               affectFirst: 1,
               gapDistribution: 0.33,
               gapDistributionType: 2,
            },
            { axis: 1, events: [{ translation: 0.83 }] },
            { axis: 2, events: [{ translation: 4.4 }] },
         ],
      },
      {
         id: 25,
         boxes: [
            {
               axis: 0,
               events: [{ translation: -1.18 }],
               affectFirst: 1,
               gapDistribution: 0.33,
               gapDistributionType: 2,
            },
            { axis: 1, events: [{ translation: 2.06 }] },
            { axis: 2, events: [{ translation: 4.4 }] },
         ],
      },
      {
         id: 31,
         boxes: [
            {
               axis: 0,
               events: [{ translation: -1.18 }],
               affectFirst: 1,
               gapDistribution: 0.33,
               gapDistributionType: 2,
            },
            { axis: 1, events: [{ translation: 1.49 }] },
            { axis: 2, events: [{ translation: 4.4 }] },
         ],
      },
   );

   const allMapping: LightPositionMapping[] = [
      ...range(4).map((e) => [[7 - e, 1], 19, e] as LightPositionMapping),
      ...range(4).map((e) => [[8 + e, 1], 20, e] as LightPositionMapping),
      ...range(16).map((e) => [[e, 2], 3, 31 - e] as LightPositionMapping),
      ...range(16).map((e) => [[e, 3], 3, 15 - e] as LightPositionMapping),
      ...range(16).map((e) => [[e, 4], 30, 30 - e * 2] as LightPositionMapping),
      ...range(16).map((e) => [[e, 4], 30, 31 - e * 2] as LightPositionMapping),
      ...range(16).map((e) => [[e, 5], 24, 30 - e * 2] as LightPositionMapping),
      ...range(16).map((e) => [[e, 5], 24, 31 - e * 2] as LightPositionMapping),
      ...range(16).map((e) => [[e, 6], 27, e * 2] as LightPositionMapping),
      ...range(16).map((e) => [[e, 6], 27, 1 + e * 2] as LightPositionMapping),
      ...range(16).map((e) => [[e, 7], 21, e * 2] as LightPositionMapping),
      ...range(16).map((e) => [[e, 7], 21, 1 + e * 2] as LightPositionMapping),
      ...range(16).map((e) => [[e, 8], 1, 16 + e] as LightPositionMapping),
      ...range(16).map((e) => [[e, 9], 1, e] as LightPositionMapping),
      ...range(4).map((e) => [[7 - e, 10], 14, e] as LightPositionMapping),
      ...range(4).map((e) => [[8 + e, 10], 15, e] as LightPositionMapping),
   ];
   lightitup(
      await imagescript.GIF.decode(await gifFile),
      30,
      allMapping,
      lightshow,
   );
   lightshow.colorBoostEvents.forEach((e) => (e.toggle = !e.toggle));
   writeLightshowFileSync(lightshow, 4);
}
