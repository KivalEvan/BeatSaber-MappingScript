import * as imagescript from 'https://deno.land/x/imagescript@1.2.17/mod.ts';
import { Beatmap, range, writeLightshowFileSync } from '@bsmap';
import { lightitup, LightPositionMapping } from './lightitup.ts';
import { readFile } from '../../deps.ts';

export default async function () {
   const gifFile = readFile('./map/BadApple/badLattice.gif');
   const lightshow = new Beatmap().setVersion(4).setLightshowFilename(
      'Lattice.lightshow.dat',
   );
   // difficulty.addBasicEvents({
   //    type: 6,
   //    value: 9,
   //    floatValue: 2,
   // });
   for (const i of range(4)) {
      lightshow.addLightRotationEventBoxGroups(
         {
            id: i * 7 + 4,
            boxes: [{ axis: 2, events: [{ rotation: i > 1 ? 180 : 0 }] }],
         },
         {
            id: i * 7 + 1,
            boxes: [{ events: [{ rotation: 315 }], flip: i > 1 ? 1 : 0 }],
         },
      );
      lightshow.addLightTranslationEventBoxGroups({
         id: i * 7 + 0,
         boxes: [
            {
               axis: 0,
               events: [{ translation: -1 }],
               gapDistribution: 2,
               affectFirst: 1,
            },
            {
               axis: 1,
               events: [{ translation: -0.5 + i * 0.34 }],
               flip: i > 1 ? 1 : 0,
            },
            { axis: 2, events: [{ translation: 2 - i * 0.34 }] },
         ],
      });
      lightshow.addFxEventBoxGroups({
         id: i * 7 + 1,
         boxes: [{ events: [{ value: -2.5 }] }],
      });
   }

   const allMapping: LightPositionMapping[] = [
      ...range(8).map((e) => [[e, 7], 1, e] as LightPositionMapping),
      ...range(8).map((e) => [[e, 6], 4, e] as LightPositionMapping),
      ...range(8).map((e) => [[e, 5], 8, 7 - e] as LightPositionMapping),
      ...range(8).map((e) => [[e, 4], 11, 7 - e] as LightPositionMapping),
      ...range(8).map((e) => [[e, 3], 15, e] as LightPositionMapping),
      ...range(8).map((e) => [[e, 2], 18, e] as LightPositionMapping),
      ...range(8).map((e) => [[e, 1], 22, 7 - e] as LightPositionMapping),
      ...range(8).map((e) => [[e, 0], 25, 7 - e] as LightPositionMapping),
   ];
   lightitup(
      await imagescript.GIF.decode(await gifFile),
      30,
      allMapping,
      lightshow,
      -1,
   );
   writeLightshowFileSync(lightshow, 4);
}
