import * as bsmap from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';

bsmap.globals.directory = beatmapWipPath('Imbalance');

const info = bsmap.readInfoFileSync();
for (const d of info.difficulties) {
   const difficulty = bsmap.readDifficultyFileSync(d.filename, 2);
   const prevSlider: {
      [key: number]: bsmap.types.wrapper.IWrapColorNote;
   } = {};
   const possibleBurst: {
      [key: number]: bsmap.types.wrapper.IWrapColorNote[];
   } = { 0: [], 1: [] };
   for (let i = 0, len = difficulty.colorNotes.length; i < len; i++) {
      const n = difficulty.colorNotes[i];
      if (n.direction === 8) {
         n.angleOffset = 45;
      }
      if (n.customData?._color) {
         if (n.customData._color[0] === 0) {
            if (possibleBurst[n.color].length) {
               difficulty.colorNotes.splice(i, 1);
               i--;
               len--;
            }
            possibleBurst[n.color].push(n);
         }
         if (n.customData._color[0] === 1) {
            if (prevSlider[n.color]) {
               difficulty.addArcs(
                  bsmap.v3.arc.deserialize({
                     b: prevSlider[n.color].time,
                     c: prevSlider[n.color].color,
                     x: prevSlider[n.color].posX,
                     y: prevSlider[n.color].posY,
                     d: prevSlider[n.color].direction,
                     mu: prevSlider[n.color].customData!._disableSpawnEffect
                        ? 0
                        : prevSlider[n.color].customData!._color![2],
                     tb: n.time,
                     tx: n.posX,
                     ty: n.posY,
                     tc: prevSlider[n.color].customData!._disableSpawnEffect
                        ? prevSlider[n.color].direction
                        : n.direction,
                     tmu: prevSlider[n.color].customData!._disableSpawnEffect
                        ? 0
                        : prevSlider[n.color].customData!._color![3],
                     m: prevSlider[n.color].customData!._color![1],
                  }),
               );
            }
            delete prevSlider[n.color];
            if (n.customData._color[3] !== 0) {
               prevSlider[n.color] = n;
            } else {
               if (n.customData._color[2] !== 0) {
                  let x = n.posX;
                  let y = n.posY;
                  while (x >= 0 && x <= 3 && y >= 0 && y <= 2) {
                     x += bsmap.NoteDirectionSpace[n.direction as 0][0];
                     y += bsmap.NoteDirectionSpace[n.direction as 0][1];
                  }
                  x = bsmap.clamp(x, 0, 3);
                  y = bsmap.clamp(y, 0, 2);
                  difficulty.addArcs(
                     bsmap.v3.arc.deserialize({
                        b: n.time,
                        c: n.color,
                        x: n.posX,
                        y: n.posY,
                        d: n.direction,
                        mu: 0.5,
                        tb: n.time + n.customData._color[2],
                        tx: x,
                        ty: y,
                        tc: n.direction,
                        tmu: 0,
                        m: 0,
                     }),
                  );
               }
               if (n.customData!._disableSpawnEffect) {
                  difficulty.colorNotes.splice(i, 1);
                  i--;
                  len--;
               }
            }
         }
      }
      if (possibleBurst[n.color].length === 2) {
         difficulty.addChains(
            bsmap.v3.chain.deserialize({
               b: possibleBurst[n.color][0].time,
               c: possibleBurst[n.color][0].color,
               x: possibleBurst[n.color][0].posX,
               y: possibleBurst[n.color][0].posY,
               d: possibleBurst[n.color][0].direction,
               tb: possibleBurst[n.color][1].time,
               tx: possibleBurst[n.color][1].posX,
               ty: possibleBurst[n.color][1].posY,
               sc: possibleBurst[n.color][0].customData!._color![1],
               s: possibleBurst[n.color][0].customData!._color![2]
                  ? possibleBurst[n.color][0].customData!._color![2]
                  : 1,
            }),
         );
         possibleBurst[n.color] = [];
      }
   }
   if (possibleBurst[0].length || possibleBurst[1].length) {
      throw Error('what the fuck');
   }
   difficulty.colorNotes.forEach((n) => n.resetCustomData());

   bsmap.toV3Beatmap(difficulty);
   bsmap.writeDifficultyFileSync(difficulty);
}
