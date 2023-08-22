// @ts-check
/**
 * @typedef {import('./library/types').RunV2<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 */

const {
   at,
   between,
   where,
   v2SetColor: setColor,
   v2SetGradientColor: setGradientColor,
   v2RandomizeColor: randomizeColor,
   v2RandomizeColorStack: randomizeColorStack,
} = require('./library/helpers.js');

const name = 'Ghosts Play';
const errorCheck = false;
const params = {};

/** @type {Run} */
function run(
   cursor,
   notes,
   events,
   walls,
   _,
   global,
   data,
   customEvents,
   bpmChanges,
   bombs,
   arcs,
   chains,
) {
   const introTime = [20, 180, 504];
   const ukeiTiming = [84, 244];
   const chorusTime = [116, 276];
   const chorus2Time = [148, 308, 440];

   notes.forEach((n) => (n._type = n._type ? n._type : 1));

   //#region set base color
   randomizeColorStack(notes, [165, 0, 0.5625], [195, 0.25, 0.6875]);
   randomizeColorStack(where(notes, { include: { _type: 3 } }), [0, 0, 0.75], [0, 0, 1]);
   randomizeColor(between(notes, 4, 18), [165, 0, 0.5625], [195, 0, 0.6875]);
   setGradientColor(between(notes, 19, 20), [165, 0.75, 1], [195, 0.75, 0.875]);
   setGradientColor(between(notes, 503, 504), [165, 0.75, 1], [195, 0.75, 0.875]);
   randomizeColor(between(notes, 536, 550), [165, 0, 0.5625], [195, 0, 0.6875]);
   //#endregion

   for (const it of introTime) {
      const wooTime = [
         [6, 7.5],
         [14, 15.5],
         [22, 23.5],
         [28, 29.5],
      ];
      randomizeColor(between(notes, it, it + 31.75), [285, 0.75, 0.875], [315, 0.75, 0.875]);
      for (const times of wooTime) {
         randomizeColor(between(notes, it + times[0], it + times[1]), [0, 0, 0.625], [0, 0, 0.75]);
      }
      setGradientColor(between(notes, it + 30, it + 31.75), [0, 0, 0.75], [0, 1, 1]);
   }

   for (const ut of ukeiTiming) {
      randomizeColor(between(notes, ut + 2, ut + 3.25), [165, 0.75, 0.875], [195, 0.75, 0.875]);
      randomizeColor(between(notes, ut + 6, ut + 7.25), [165, 0.75, 0.875], [195, 0.75, 0.875]);
      randomizeColor(between(notes, ut + 10, ut + 11.25), [165, 0.75, 0.875], [195, 0.75, 0.875]);
      randomizeColor(between(notes, ut + 14, ut + 15.25), [165, 0.75, 0.875], [195, 0.75, 0.875]);
   }
   setGradientColor(between(notes, 99, 99.75), [165, 0.5, 0.875], [195, 0, 1]);

   for (const ct of chorusTime) {
      randomizeColorStack(between(notes, ct, ct + 28), [165, 0.75, 0.875], [195, 0.75, 0.875]);
      randomizeColorStack(between(notes, ct + 28, ct + 32), [165, 0, 0.75], [195, 0, 0.875]);
   }
   setColor(
      at(
         notes,
         chorusTime.map((n) => n - 0.5),
      ),
      [180, 0, 0.375],
   );
   setColor(at(notes, chorusTime), [180, 1, 1]);
   setColor(where(at(notes, chorusTime), { include: { _cutDirection: 8 } }), [180, 0, 1]);

   for (const ct of chorus2Time) {
      randomizeColorStack(between(notes, ct, ct + 31.75), [165, 0.75, 0.875], [195, 0.75, 0.875]);
      setGradientColor(between(notes, ct - 1, ct), [0, 0, 0.375], [0, 0, 1]);
      setGradientColor(between(notes, ct, ct + 2), [315, 1, 0.875], [360, 1, 1]);
      randomizeColor(between(notes, ct + 3, ct + 4), [45, 1, 0.75], [75, 1, 1]);
      setGradientColor(between(notes, ct + 4, ct + 6), [315, 1, 0.875], [360, 1, 1]);
      setGradientColor(between(notes, ct + 15, ct + 16), [0, 0, 0.375], [0, 0, 1]);
      setGradientColor(between(notes, ct + 16, ct + 18), [315, 1, 0.875], [360, 1, 1]);
      randomizeColor(between(notes, ct + 19, ct + 20), [45, 1, 0.75], [75, 1, 0.75]);
      setGradientColor(between(notes, ct + 20, ct + 22), [315, 1, 0.875], [360, 1, 1]);
   }
   setGradientColor(between(notes, 471, 472), [0, 0, 0.375], [0, 0, 1]);
   for (let i = 0; i < 6; i++) {
      setGradientColor(between(notes, 472 + i * 4, 474 + i * 4), [315, 1, 0.875], [360, 1, 1]);
      randomizeColor(between(notes, 475 + i * 4, 476 + i * 4), [45, 1, 0.75], [75, 1, 1]);
   }
   randomizeColorStack(between(notes, 495, 502.75), [165, 0.75, 0.875], [195, 0.75, 0.875]);

   //#region special effect
   randomizeColor(
      at(notes, [58.5, 58.75, 59.5, 59.75, 66.5, 67, 67.25, 67.5, 67.75]),
      [300, 1, 0.75],
      [330, 1, 0.875],
   );
   randomizeColor(
      at(
         notes,
         [79.5, 79.75, 109, 111, 111.5, 111.75, 238.5, 238.75, 239.5, 239.75, 269, 271.5, 271.75],
      ),
      [0, 0, 0.75],
      [0, 0, 0.875],
   );
   setGradientColor(between(notes, 83, 83.75), [0, 0, 0.375], [0, 0, 0.125]);
   randomizeColor(between(notes, 219, 219.75), [0, 0, 0.75], [0, 0, 0.875]);
   randomizeColor(between(notes, 227, 227.75), [0, 0, 0.75], [0, 0, 0.875]);
   randomizeColor(between(notes, 231, 231.75), [0, 0, 0.75], [0, 0, 0.875]);
   randomizeColor(between(notes, 235, 235.75), [0, 0, 0.75], [0, 0, 0.875]);
   setColor(at(notes, 271), [0, 0, 0.375]);
   setColor(at(notes, 340), [0, 0, 1]);
   randomizeColor(between(notes, 403, 403.75), [0, 0, 0.75], [0, 0, 0.875]);
   setColor(at(notes, 404), [0, 0, 0.375]);
   randomizeColor(between(notes, 432, 435), [0, 0, 0.375], [0, 0, 0.4375]);
   randomizeColor(between(notes, 435, 436), [0, 0, 0.75], [0, 0, 0.875]);
   setGradientColor(between(notes, 436, 438.5), [0, 0, 0.25], [0, 0, 0.875]);
   setGradientColor(between(notes, 439, 439.75), [0, 0, 0.75], [0, 0, 0.25]);
   setColor(at(notes, 500), [0, 0, 0.375]);
   setColor(where(at(notes, 551), { include: { _lineIndex: 3 } }), [0, 0, 1.5]);
   setColor(where(at(notes, 551), { include: { _lineIndex: 2 } }), [0, 0, 1.375]);
   setColor(where(at(notes, 551), { include: { _lineIndex: 1 } }), [0, 0, 1.25]);
   setColor(where(at(notes, 551), { include: { _lineIndex: 0 } }), [0, 0, 1.125]);
   //#endregion

   return;
}

module.exports =
   /** @type {Main} */
   ({
      name,
      params,
      run,
      errorCheck,
   });
