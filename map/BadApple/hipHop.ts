import * as imagescript from 'https://deno.land/x/imagescript@1.2.17/mod.ts';
import { Beatmap, random, range, writeLightshowFileSync } from '../../depsLocal.ts';
import { lightitup, LightPositionMapping } from './lightitup.ts';

export default async function () {
   const gifFile = Deno.readFile('./map/BadApple/badHH.gif');
   const lightshow = new Beatmap().setLightshowFilename('HipHop.lightshow.dat');

   for (const id of range(14, 18, true)) {
      // geo yeet
      lightshow.addLightTranslationEventBoxGroups({
         id,
         boxes: [{ axis: 1, events: [{ translation: -9999 }] }],
      });
   }
   for (const id of [6, 8]) {
      // 10 group window train
      lightshow.addLightTranslationEventBoxGroups({
         id,
         boxes: [
            { axis: 0, events: [{ translation: -0.35 }] },
            { axis: 1, events: [{ translation: id === 6 ? 0.1 : 0.3 }] },
         ],
      });
   }
   for (const id of [10, 12]) {
      // 4 group window train
      lightshow.addLightRotationEventBoxGroups({
         id,
         boxes: [{ axis: 1, events: [{ rotation: 90 }] }],
      });
      lightshow.addLightTranslationEventBoxGroups({
         id,
         boxes: [
            { axis: 0, events: [{ translation: -2.25 }] },
            { axis: 1, events: [{ translation: id === 10 ? -0.1 : 0.5 }] },
            { axis: 2, events: [{ translation: 0.3 }] },
         ],
      });
   }
   for (const id of [2, 5]) {
      // ceiling lights
      lightshow.addLightRotationEventBoxGroups({
         id,
         boxes: [
            {
               axis: 0,
               events: [{ rotation: id === 2 ? 5 : 355 }],
            },
            {
               axis: 1,
               events: [{ rotation: 270 }],
            },
         ],
      });
      lightshow.addLightTranslationEventBoxGroups({
         id,
         boxes: [
            {
               axis: 0,
               events: [{ translation: -1.1 }],
               affectFirst: 1,
               gapDistribution: 0.3525,
               gapDistributionType: 2,
            },
            { axis: 1, events: [{ translation: id === 2 ? -0.05 : 1.4 }] },
            { axis: 2, events: [{ translation: 5.1 }] },
         ],
      });
   }
   for (const id of [22, 25, 28, 31]) {
      lightshow.addLightRotationEventBoxGroups(
         {
            id,
            boxes: [
               { axis: 0, events: [{ rotation: random(0, 360) }] },
               { axis: 2, events: [{ rotation: random(0, 360) }] },
            ],
         },
         {
            time: 512,
            id,
            boxes: [
               { axis: 0, events: [{ loop: 16, rotation: random(0, 360) }] },
               { axis: 2, events: [{ loop: 16, rotation: random(0, 360) }] },
            ],
         },
      );
   }
   for (const id of [22, 28]) {
      // balls
      lightshow.addLightTranslationEventBoxGroups({
         id,
         boxes: [
            { axis: 0, events: [{ translation: -1.45 }] },
            { axis: 1, events: [{ translation: -0.25 }] },
            { axis: 2, events: [{ translation: 4.85 }] },
         ],
      });
   }
   for (const id of [25, 31]) {
      // balls 2
      lightshow.addLightTranslationEventBoxGroups({
         id,
         boxes: [
            { axis: 0, events: [{ translation: -1.45 }] },
            { axis: 1, events: [{ translation: 2 }] },
            { axis: 2, events: [{ translation: 2.75 }] },
         ],
      });
   }
   for (const id of [20, 26]) {
      // balls
      lightshow.addLightTranslationEventBoxGroups({
         id,
         boxes: [
            {
               axis: 0,
               events: [{ translation: -0.55 }],
               filter: { type: 2, p0: 0, p1: 0 },
            },
            {
               axis: 0,
               events: [{ translation: -0.15 }],
               filter: { type: 2, p0: 1, p1: 0 },
            },
            {
               axis: 0,
               events: [{ translation: 0.2 }],
               filter: { type: 2, p0: 2, p1: 0 },
            },
            { axis: 1, events: [{ translation: -0.25 }] },
            { axis: 2, events: [{ translation: 4.85 }] },
         ],
      });
   }
   for (const id of [23, 29]) {
      // balls
      lightshow.addLightTranslationEventBoxGroups({
         id,
         boxes: [
            {
               axis: 0,
               events: [{ translation: -0.55 }],
               filter: { type: 2, p0: 0, p1: 0 },
            },
            {
               axis: 0,
               events: [{ translation: -0.15 }],
               filter: { type: 2, p0: 1, p1: 0 },
            },
            {
               axis: 0,
               events: [{ translation: 0.2 }],
               filter: { type: 2, p0: 2, p1: 0 },
            },
            { axis: 1, events: [{ translation: 2 }] },
            { axis: 2, events: [{ translation: 2.75 }] },
         ],
      });
   }
   for (const id of [21, 24, 27, 30]) {
      // hoops shell
      lightshow.addLightRotationEventBoxGroups({
         id,
         boxes: [
            {
               axis: 0,
               events: [{ rotation: 180 }],
            },
         ],
      });
      lightshow.addLightTranslationEventBoxGroups({
         id,
         boxes: [
            {
               axis: 2,
               events: [{ translation: 0.2 }],
               gapDistribution: 0.4,
               gapDistributionType: 2,
               affectFirst: 1,
            },
         ],
      });
   }

   const ballsMapping: LightPositionMapping[] = [
      [[1, 8], 25, 0],
      [[1, 1], 22, 0],
      [[10, 8], 31, 0],
      [[10, 1], 28, 0],
   ];
   const hoopsMapping: LightPositionMapping[] = [
      ...(range(3).map((e) => [[3 + e, 1], 20, e]) as LightPositionMapping[]),
      ...(range(3).map((e) => [[3 + e, 8], 23, e]) as LightPositionMapping[]),
      ...(range(3).map((e) => [[8 - e, 1], 26, e]) as LightPositionMapping[]),
      ...(range(3).map((e) => [[8 - e, 8], 29, e]) as LightPositionMapping[]),
   ];
   const trainsMapping: LightPositionMapping[] = [
      ...(range(12).map((e) => [[e, 3], 11, e]) as LightPositionMapping[]),
      ...(range(12).map((e) => [[11 - e, 6], 13, e]) as LightPositionMapping[]),
      ...(range(12).map((e) => [[e, 4], 7, 9 + e]) as LightPositionMapping[]),
      ...(range(12).map((e) => [[e, 5], 9, 9 + e]) as LightPositionMapping[]),
   ];
   const ceilingMappings: LightPositionMapping[] = [
      ...(range(12).map((e) => [[e, 2], 2, e]) as LightPositionMapping[]),
      ...(range(12).map((e) => [[11 - e, 7], 5, e]) as LightPositionMapping[]),
   ];
   const allMapping: LightPositionMapping[] = [
      ...ballsMapping,
      ...hoopsMapping,
      ...trainsMapping,
      ...ceilingMappings,
   ].map((e) => {
      e[0][1] = 9 - e[0][1];
      e[3] = 2;
      return e;
   });
   lightitup(
      await imagescript.GIF.decode(await gifFile),
      30,
      allMapping,
      lightshow,
   );
   writeLightshowFileSync(lightshow, 4);
}
