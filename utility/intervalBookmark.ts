import { colorFrom, random, types } from '../depsLocal.ts';

export default function (time: number, interval: number, names: string[]): types.v3.IBookmark[] {
   return names.map((n, i) => {
      return {
         b: time + interval * i,
         n,
         c: colorFrom(random(360), 0.75, 0.75, 1, 'hsva'),
      };
   });
}
