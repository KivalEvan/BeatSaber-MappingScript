import * as imagescript from 'https://deno.land/x/imagescript@1.2.17/mod.ts';
import { Beatmap, range, readLightshowFileSync, writeLightshowFileSync } from '@bsmap';
import { lightitup, LightPositionMapping } from './lightitup.ts';
import { readFile } from '../../deps.ts';

export default async function () {
   const gifFile = readFile('./map/BadApple/badMonstercat2.gif');
   // const lightshow = new Beatmap()
   //    .setVersion(4)
   //    .setLightshowFilename('Metallica.lightshow.dat');

   const lightshow = Beatmap.createOne(
      readLightshowFileSync('Metallica.lightshow.dat'),
   );
   lightshow.lightColorEventBoxGroups = [];
   lightshow.colorBoostEvents = [];

   const allMapping: LightPositionMapping[] = [];

   allMapping.push(
      ...range(2).map(
         (e) => [[0, 7 - e], 33, 2 * 0 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(2).map(
         (e) => [[1, 6 + e], 33, 2 * 1 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(2).map(
         (e) => [[0, 5 - e], 33, 2 * 2 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(2).map(
         (e) => [[1, 4 + e], 33, 2 * 3 + e, 2] as LightPositionMapping,
      ),
   );

   allMapping.push(
      ...range(2).map(
         (e) => [[14, 7 - e], 33, 2 * 4 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(2).map(
         (e) => [[15, 6 + e], 33, 2 * 5 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(2).map(
         (e) => [[14, 5 - e], 33, 2 * 6 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(2).map(
         (e) => [[15, 4 + e], 33, 2 * 7 + e, 2] as LightPositionMapping,
      ),
   );

   allMapping.push(
      ...range(5).map(
         (e) => [[2, 10 - e * 2], 34, 5 * 0 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[3, 10 - e * 2], 34, 5 * 1 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[2, 9 - e * 2], 34, 5 * 2 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[3, 9 - e * 2], 34, 5 * 3 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[4, 10 - e * 2], 34, 5 * 4 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[5, 10 - e * 2], 34, 5 * 5 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[4, 9 - e * 2], 34, 5 * 6 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[5, 9 - e * 2], 34, 5 * 7 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[6, 10 - e * 2], 34, 5 * 8 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[7, 10 - e * 2], 34, 5 * 9 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[6, 9 - e * 2], 34, 5 * 10 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[7, 9 - e * 2], 34, 5 * 11 + e, 2] as LightPositionMapping,
      ),
   );

   allMapping.push(
      ...range(5).map(
         (e) => [[13, 10 - e * 2], 35, 5 * 0 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[12, 10 - e * 2], 35, 5 * 1 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[13, 9 - e * 2], 35, 5 * 2 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[12, 9 - e * 2], 35, 5 * 3 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[11, 10 - e * 2], 35, 5 * 4 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[10, 10 - e * 2], 35, 5 * 5 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[11, 9 - e * 2], 35, 5 * 6 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[10, 9 - e * 2], 35, 5 * 7 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[9, 10 - e * 2], 35, 5 * 8 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[8, 10 - e * 2], 35, 5 * 9 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[9, 9 - e * 2], 35, 5 * 10 + e, 2] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(5).map(
         (e) => [[8, 9 - e * 2], 35, 5 * 11 + e, 2] as LightPositionMapping,
      ),
   );

   allMapping.push(
      ...range(3).map((e) => [[1, 2 - e], 9, e * 2, 1] as LightPositionMapping),
   );
   allMapping.push(
      ...range(3).map(
         (e) => [[0, 2 - e], 9, e * 2 + 1, 1] as LightPositionMapping,
      ),
   );

   allMapping.push(
      ...range(3).map(
         (e) => [[14, 2 - e], 10, e * 2, 1] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(3).map(
         (e) => [[15, 2 - e], 10, e * 2 + 1, 1] as LightPositionMapping,
      ),
   );

   allMapping.push(
      ...range(3).map((e) => [[1, 10 - e], 7, e * 2, 1] as LightPositionMapping),
   );
   allMapping.push(
      ...range(3).map(
         (e) => [[0, 10 - e], 7, e * 2 + 1, 1] as LightPositionMapping,
      ),
   );

   allMapping.push(
      ...range(3).map(
         (e) => [[14, 10 - e], 8, e * 2, 1] as LightPositionMapping,
      ),
   );
   allMapping.push(
      ...range(3).map(
         (e) => [[15, 10 - e], 8, e * 2 + 1, 1] as LightPositionMapping,
      ),
   );
   lightitup(
      await imagescript.GIF.decode(await gifFile),
      30,
      allMapping,
      lightshow,
      0,
      1,
   );
   lightshow.colorBoostEvents.forEach((e) => (e.toggle = !e.toggle));
   writeLightshowFileSync(lightshow, 4);
}
