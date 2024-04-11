import { degToRad, types } from '../depsLocal.ts';

export function genCircle(
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
      const rad = degToRad(-angle + angleOffset);
      points.push([
         posOffset[0] + radius * Math.cos(rad),
         posOffset[1] + radius * Math.sin(rad),
      ]);
   }
   return points;
}
