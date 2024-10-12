import { ext, lerp, normalize, pRandomFn, round, types, v3 } from '../../depsLocal.ts';

const { between, where } = ext.selector;

function rotateGradient45<T extends types.wrapper.IWrapColorNote>(note: T, i: number, ary: T[]) {
   if (note.direction !== 8) return;
   note.angleOffset = round(lerp(normalize(i, 0, ary.length - 1), 0, 45));
}

export default function (data: types.wrapper.IWrapBeatmap) {
   const pRandom = pRandomFn('Necro Fantasia');
   data.colorNotes.forEach((n) => (n.angleOffset = 0));

   between(data.colorNotes, 132, 133).forEach(rotateGradient45);
   between(data.colorNotes, 228, 229).forEach(rotateGradient45);
   between(data.colorNotes, 548, 549).forEach(rotateGradient45);
   between(data.colorNotes, 990, 998).forEach(rotateGradient45);

   between(data.colorNotes, 6, 69).forEach((n) => (n.angleOffset = pRandom(-10, 10, true)));
   between(data.colorNotes, 678, 740).forEach((n) => (n.angleOffset = pRandom(-10, 10, true)));

   if (data.filename.includes('OneSaber')) return;
   for (let time = 742, isRed = true; time < 790; time += 4, isRed = !isRed) {
      const n = where(between(data.colorNotes, time, time + 4), {
         include: { color: isRed ? 0 : 1 },
      });
      if (n.length > 1) n.forEach(rotateGradient45);
   }
}
