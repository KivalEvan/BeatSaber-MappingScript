import { pRandomFn, range, v3 } from '../../depsLocal.ts';

export default function (data: v3.Difficulty) {
   const pRandom = pRandomFn('Necro Fantasia');
   data.customData.customEvents ??= [];
   for (const it of range(0, 9)) {
      const r = pRandom(3, 4);
      data.customData.customEvents.push(
         {
            b: 0,
            t: 'AnimateTrack',
            d: {
               track: `railwayField${it}`,
               duration: 0,
               scale: [[1 / 24, 1 / 24, r, 0, 'easeInOutQuad']],
            },
         },
         {
            b: 0.125 + it * 3,
            t: 'AnimateTrack',
            d: {
               track: `railwayField${it}`,
               duration: 27,
               repeat: 41,
               scale: [
                  [1 / 24, 1 / 24, r, 0, 'easeInOutQuad'],
                  [1 / 24, 1 / 24, 0.25, 0.5, 'easeInOutQuad'],
                  [1 / 24, 1 / 24, r, 1, 'easeInOutQuad'],
               ],
            },
         },
      );
   }
}
