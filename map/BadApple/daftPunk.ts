import * as imagescript from 'https://deno.land/x/imagescript@1.2.17/mod.ts';
import { Beatmap, deepCopy, range, writeLightshowFileSync } from '../../depsLocal.ts';
import { lightitup, LightPositionMapping } from './lightitup.ts';

export default async function () {
   const gifFile = Deno.readFile('./map/BadApple/badDP.gif');
   const lightshow = new Beatmap().setLightshowFilename(
      'DaftPunk.lightshow.dat',
   );
   // difficulty.addBasicEvents({
   //    type: 6,
   //    value: 9,
   //    floatValue: 2,
   // });
   for (const id of [23, 24]) {
      lightshow.addLightTranslationEventBoxGroups({
         id,
         boxes: [{ axis: 1, events: [{ translation: -9999 }] }],
      });
   }
   for (const id of [25, 26]) {
      lightshow.addLightTranslationEventBoxGroups({
         id,
         boxes: [{ events: [{ translation: 2.5 }] }],
      });
   }
   lightshow.addLightRotationEventBoxGroups({
      id: 14,
      boxes: [{ axis: 1, events: [{ rotation: 90 }] }],
   });
   for (const id of [15, 16, 17]) {
      lightshow.addLightRotationEventBoxGroups({
         id,
         boxes: [{ events: [{ rotation: 76 + (id - 14) * 4 }] }],
      });
   }
   lightshow.addLightRotationEventBoxGroups(
      {
         id: 44,
         boxes: [
            { axis: 1, events: [{ rotation: 45 }] },
            {
               axis: 2,
               filter: { type: 2 },
               events: [{ rotation: 284 }],
               rotationDistributionType: 2,
               rotationDistribution: -4,
               affectFirst: 1,
            },
            {
               axis: 2,
               filter: { type: 2, p0: 1, p1: 1 },
               events: [{ rotation: 276 }],
               rotationDistributionType: 2,
               rotationDistribution: -4,
               affectFirst: 1,
            },
         ],
      },
      {
         id: 45,
         boxes: [
            { axis: 1, events: [{ rotation: 315 }] },
            {
               axis: 2,
               events: [{ rotation: 357 }],
               rotationDistributionType: 2,
               rotationDistribution: 3,
               affectFirst: 1,
            },
         ],
      },
      {
         id: 46,
         boxes: [
            { axis: 1, events: [{ rotation: 315 }] },
            {
               axis: 2,
               filter: { type: 1, p0: 2, p1: 0 },
               events: [{ rotation: 354 }],
               rotationDistributionType: 2,
               rotationDistribution: 3,
               affectFirst: 1,
            },
            {
               axis: 2,
               filter: { type: 1, p0: 2, p1: 1 },
               events: [{ rotation: 3 }],
               rotationDistributionType: 2,
               rotationDistribution: 3,
               affectFirst: 1,
            },
         ],
      },
      {
         id: 47,
         boxes: [
            { axis: 1, events: [{ rotation: 315 }] },
            {
               axis: 2,
               filter: { type: 1, p0: 2, p1: 0 },
               events: [{ rotation: 352 }],
               rotationDistributionType: 2,
               rotationDistribution: 4,
               affectFirst: 1,
            },
            {
               axis: 2,
               filter: { type: 1, p0: 2, p1: 1 },
               events: [{ rotation: 4 }],
               rotationDistributionType: 2,
               rotationDistribution: 4,
               affectFirst: 1,
            },
         ],
      },
   );

   const triangleMapping: LightPositionMapping[] = [
      range(0, 0, true).map((id, x) => [id, [9 + x, 9]]),
      range(1, 3, true)
         .reverse()
         .map((id, x) => [id, [8 + x, 8]]),
      range(4, 8, true).map((id, x) => [id, [7 + x, 7]]),
      range(9, 15, true)
         .reverse()
         .map((id, x) => [id, [6 + x, 6]]),
      range(16, 24, true).map((id, x) => [id, [5 + x, 5]]),
      range(25, 34, true)
         .reverse()
         .map((id, x) => [id, [4 + x, 4]]),
      range(35, 44, true).map((id, x) => [id, [3 + x, 3]]),
      range(45, 54, true)
         .reverse()
         .map((id, x) => [id, [2 + x, 2]]),
      range(55, 64, true).map((id, x) => [id, [1 + x, 1]]),
      range(65, 74, true)
         .reverse()
         .map((id, x) => [id, [x, 0]]),
   ]
      .flat()
      .map((e) => [e[1], 0, e[0]] as unknown as LightPositionMapping);
   const triangleLMap = deepCopy(triangleMapping).map((e) => {
      e[0][0] = 13 - e[0][0];
      return e;
   });
   const triangleRMap = deepCopy(triangleMapping).map((e) => {
      e[0][0] = e[0][0] + 13;
      e[1] = 1;
      return e;
   });

   const runwayCenterMap: LightPositionMapping[] = [
      [[14, 10], 18, 6],
      [[14, 10], 18, 2],
      [[14, 10], 18, 3],
      [[14, 9], 18, 0],
      [[14, 9], 18, 1],
      [[14, 9], 18, 4],
      [[14, 8], 18, 5],
      [[14, 8], 18, 7],
      [[14, 7], 18, 8],
      [[14, 6], 18, 9],
   ];
   const runwayLeftMap: LightPositionMapping[] = [
      [[10, 10], 25, 0],
      [[10, 10], 25, 1],
      [[11, 10], 25, 2],
      [[11, 9], 25, 3],
      [[11, 9], 25, 4],
      [[12, 9], 25, 5],
      [[12, 8], 25, 6],
      [[12, 8], 25, 7],
      [[13, 7], 25, 8],
      [[13, 6], 25, 9],
   ];
   const runwayRightMap: LightPositionMapping[] = [
      [[18, 10], 26, 0],
      [[18, 10], 26, 1],
      [[17, 10], 26, 2],
      [[17, 9], 26, 3],
      [[17, 9], 26, 4],
      [[16, 9], 26, 5],
      [[16, 8], 26, 6],
      [[16, 8], 26, 7],
      [[15, 7], 26, 8],
      [[15, 6], 26, 9],
   ];
   const orbit1Map: LightPositionMapping[] = [
      [[14, 1], 28, 0, 0.5],
      [[14, 3], 29, 0, 0.5],
      [[14, 4], 30, 0, 0.5],
      [[14, 5], 31, 0, 0.5],
   ];
   const orbit2Map: LightPositionMapping[] = [
      [[13, 2], 32, 0, 0.5],
      [[14, 2], 33, 0, 0.5],
      [[15, 2], 34, 0, 0.5],
   ];
   const orbit3Map: LightPositionMapping[] = [
      [[12, 3], 36, 0, 0.5],
      [[13, 3], 37, 0, 0.5],
      [[15, 3], 38, 0, 0.5],
      [[16, 3], 39, 0, 0.5],
   ];
   const orbit4Map: LightPositionMapping[] = [
      [[11, 4], 40, 0, 0.5],
      [[13, 4], 41, 0, 0.5],
      [[15, 4], 42, 0, 0.5],
      [[17, 4], 43, 0, 0.5],
   ];
   const allMapping = [
      ...triangleLMap,
      ...triangleRMap,
      ...runwayCenterMap,
      ...runwayLeftMap,
      ...runwayRightMap,
      ...orbit1Map,
      ...orbit2Map,
      ...orbit3Map,
      ...orbit4Map,
   ];
   lightitup(
      await imagescript.GIF.decode(await gifFile),
      30,
      allMapping,
      lightshow,
      0,
      -3,
   );
   writeLightshowFileSync(lightshow, 4);
}
