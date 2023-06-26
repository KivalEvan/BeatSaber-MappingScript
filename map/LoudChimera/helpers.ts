import { ext, types, utils, v3 } from '../../depsLocal.ts';

const { lerp, normalize, EasingsFn } = utils;

export function getRepeatArray(start: number, gap: number, repeat: number) {
   const arr = new Array(repeat).fill(start);
   for (let i = 0; i < repeat; i++) {
      arr[i] = arr[i] + gap * i;
   }
   return arr;
}

export function lerpVec3(
   alpha: number,
   points: types.Vector3PointDefinition[],
): types.Vector3 {
   const pointBefore = [...points].reverse().find((p) => alpha >= p[3]);
   const pointAfter = points.slice(1).find((p) => alpha <= p[3]);
   if (!pointAfter) {
      throw new Error('not found');
   }
   if (!pointBefore) {
      throw new Error('not found');
   }
   const norm = normalize(alpha, pointBefore[3], pointAfter[3]);
   const easing =
      (pointAfter?.find((s) => typeof s === 'string' ? s.startsWith('ease') : 'easeLinear') ??
         'easeLinear') as 'easeStep';
   return [
      lerp(norm, pointBefore[0], pointAfter[0], EasingsFn[easing]),
      lerp(norm, pointBefore[1], pointAfter[1], EasingsFn[easing]),
      lerp(norm, pointBefore[2], pointAfter[2], EasingsFn[easing]),
   ];
}

export function connectSlider(data: v3.Difficulty, notes: v3.ColorNote[]) {
   const prevSlider: {
      [key: number]: v3.ColorNote;
   } = {};
   for (let i = 0, len = notes.length; i < len; i++) {
      const n = notes[i];
      if (prevSlider[n.color] && prevSlider[n.color].time < n.time) {
         data.addArcs({
            b: prevSlider[n.color].time,
            c: n.color,
            x: prevSlider[n.color].posX,
            y: prevSlider[n.color].posY,
            d: prevSlider[n.color].direction,
            tb: n.time,
            tx: n.posX,
            ty: n.posY,
            tc: n.direction,
            customData: {
               ...n.customData,
               coordinates: prevSlider[n.color].getPosition(),
               tailCoordinates: n.getPosition(),
            },
         });
      }
      if (prevSlider[n.color] && prevSlider[n.color].time === n.time) {
         if (
            ext.placement.isEnd(
               n,
               prevSlider[n.color],
               prevSlider[n.color].direction,
            )
         ) {
            prevSlider[n.color] = n;
         }
         continue;
      }
      prevSlider[n.color] = n;
   }
}
