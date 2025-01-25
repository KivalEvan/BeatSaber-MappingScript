import { GIF } from 'https://deno.land/x/imagescript@1.2.17/ImageScript.js';
import { logger, TimeProcessor, types } from '@bsmap';

export type LightPositionMapping = [
   pos: types.Vector2,
   group: number,
   id: number,
   mul?: number,
];
export function lightitup(
   gif: GIF,
   fps: number,
   pixelMap: LightPositionMapping[],
   lightshow: types.wrapper.IWrapBeatmap,
   xOffset = 0,
   yOffset = 0,
): void {
   const timeProc = new TimeProcessor(138);
   const screenLight: { [key: string]: number } = {};
   let skip = false;
   gif.forEach((frame, i) => {
      const prog = Math.floor(((i + 1) / gif.length) * 100);
      if (prog % 20 === 0 && !skip) {
         logger.info('Bad Apple-ing progress (%):', prog);
         skip = true;
      } else if (prog % 20 !== 0) {
         skip = false;
      }
      frame.saturation(0, true);
      const lightThis: { [key: string]: number } = {};
      for (let y = 0; y < Math.min(frame.height); y++) {
         for (let x = 0; x < Math.min(frame.width); x++) {
            const pos = [x + xOffset, y + yOffset];
            const colorAry = frame.getRGBAAt(x + 1, y + 1);
            if (colorAry[3] === 0) {
               continue;
            }
            if (screenLight[pos.toString()] === colorAry[0]) {
               continue;
            }
            lightThis[pos.toString()] = colorAry[0] / 255;
            screenLight[pos.toString()] = colorAry[0];
         }
      }
      const group: Record<number, [id: number, brightness: number][]> = {};
      for (const [position, brightness] of Object.entries(lightThis)) {
         const pos = position.split(',').map((e) => +e) as types.Vector2;
         const filtered = pixelMap.filter(
            (e) => e[0][0] === pos[0] && e[0][1] === pos[1],
         );
         for (const mapped of filtered) {
            group[mapped[1]] ||= [];
            group[mapped[1]].push([mapped[2], brightness * (mapped[3] || 1)]);
         }
      }
      for (const [gid, bid] of Object.entries(group)) {
         lightshow.addLightColorEventBoxGroups({
            time: 1 + timeProc.toBeatTime(i / fps),
            id: +gid,
            boxes: bid.map((e) => ({
               filter: { type: 2, p0: e[0] },
               events: [{ color: 1, brightness: e[1], easing: -1 }],
            })),
         });
      }
   });
   lightshow.addColorBoostEvents(
      { time: 0, toggle: false },
      { time: 35, toggle: true },
      { time: 63.75, toggle: false },
      { time: 98, toggle: true },
      { time: 130.25, toggle: false },
      { time: 163.25, toggle: true },
      { time: 196, toggle: false },
      { time: 258, toggle: true },
      { time: 259, toggle: false },
      { time: 260, toggle: true },
      { time: 290, toggle: false },
   );
}
