import { degToRad, types } from './depsLocal.ts';

export function createCircle(
   radius: number,
   precision: number,
   posOffset?: types.Vector2,
   angleOffset?: number,
) {
   const points: types.Vector2[] = [];
   angleOffset = angleOffset || 0;
   posOffset ||= [0, 0];

   const step = 360 / precision;
   for (let angle = 0; angle < 360; angle += step) {
      points.push([
         posOffset[0] + radius * Math.cos(degToRad(-angle + angleOffset)),
         posOffset[1] + radius * Math.sin(degToRad(-angle + angleOffset)),
      ]);
   }
   return points;
}

for (let i = 0, r = 0; r < 360; r += 15) {
   console.log('round', i++);
   createCircle(100, 3, [5, 165], r + 270).forEach((e) => console.log(e.map((p) => Math.round(p))));
}
