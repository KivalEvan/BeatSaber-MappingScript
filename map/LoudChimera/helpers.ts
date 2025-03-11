import { Beatmap, ColorNote, EasingsFn, ext, lerp, normalize, types } from '@bsmap';

export function getRepeatArray(start: number, gap: number, repeat: number) {
   const arr = new Array(repeat).fill(start);
   for (let i = 0; i < repeat; i++) {
      arr[i] = arr[i] + gap * i;
   }
   return arr;
}

export function lerpVec3(
   alpha: number,
   points: types.Vector3PointDefinitionBase,
): types.Vector3 {
   const pointBefore = [...points]
      .reverse()
      .find((p) => alpha >= (p[3] as number));
   const pointAfter = points.slice(1).find((p) => alpha <= (p[3] as number));
   if (!pointAfter || typeof pointAfter === 'string') {
      throw new Error('not found');
   }
   if (!pointBefore || typeof pointBefore === 'string') {
      throw new Error('not found');
   }
   const norm = normalize(alpha, pointBefore[3], pointAfter[3]);
   const easing =
      (pointAfter?.find((s) => typeof s === 'string' ? s.startsWith('ease') : 'easeLinear') ??
         'easeLinear') as 'easeStep';
   return [
      lerp(EasingsFn[easing](norm), pointBefore[0], pointAfter[0]),
      lerp(EasingsFn[easing](norm), pointBefore[1], pointAfter[1]),
      lerp(EasingsFn[easing](norm), pointBefore[2], pointAfter[2]),
   ];
}

export function connectSlider(data: Beatmap, notes: ColorNote[]) {
   const prevSlider: {
      [key: number]: ColorNote;
   } = {};
   for (let i = 0, len = notes.length; i < len; i++) {
      const n = notes[i];
      if (prevSlider[n.color] && prevSlider[n.color].time < n.time) {
         data.addArcs({
            time: prevSlider[n.color].time,
            color: n.color,
            posX: prevSlider[n.color].posX,
            posY: prevSlider[n.color].posY,
            direction: prevSlider[n.color].direction,
            tailTime: n.time,
            tailPosX: n.posX,
            tailPosY: n.posY,
            tailDirection: n.direction,
            customData: {
               ...n.customData,
               coordinates: prevSlider[n.color].getPosition(),
               tailCoordinates: n.getPosition(),
            },
         });
      }
      if (prevSlider[n.color] && prevSlider[n.color].time === n.time) {
         if (
            ext.placement.isEndNote(
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
