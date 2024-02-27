import { shuffle } from '../depsLocal.ts';

/** infinite loop, do not use in `for..of` */
export function* autoShuffle<T>(ary: T[], randFn = Math.random) {
   if (ary.length < 2) throw new Error('array cannot contain less than 2 elements');
   const el = ary[0];
   if (ary.every((e) => e === el)) throw new Error('all elements cannot be identical');
   shuffle(ary, randFn);
   const len = ary.length;
   let it = 0;
   while (true) {
      yield ary[it];
      if (++it === len) {
         const last = ary[--it];
         shuffle(ary, randFn);
         while (last === ary[0]) shuffle(ary, randFn);
         it = 0;
      }
   }
}

/** infinite loop, do not use in `for..of` */
export function* loopArray<T>(ary: T[]) {
   const len = ary.length;
   let it = 0;
   while (true) {
      yield ary[it];
      if (++it === len) it = 0;
   }
}
