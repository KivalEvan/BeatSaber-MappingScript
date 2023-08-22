// @ts-check
/**
 * @typedef {import('./library/types').RunV2<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 * @typedef {import('./library/types/colors').ColorArray} ColorArray
 */

const {
   between,
   where,
   v2SetColor: setColor,
   v2SetGradientColor: setGradientColor,
   v2RandomizeColor: randomizeColor,
   v2RandomizeColorStack: randomizeColorStack,
} = require('./library/helpers.js');

const { HsvaToRgba, interpolateColor } = require('./library/colors.js');

const name = 'Junjo Arumeria';
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
   notes.forEach((n) => {
      if (n._type === 1) {
         n._customData = { _color: HsvaToRgba(240, 1, 2) };
      }
      if (n._type === 3) {
         n._customData = { _color: HsvaToRgba(120, 1, 2) };
      }
   });
   walls.forEach((w) => {
      w._customData = { _color: HsvaToRgba(60, 1, 2) };
   });

   //#region notes
   setColor(between(where(notes, { include: { _type: 1 } }), 11, 55), [0, 0, 0.5]);

   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 61, 93),
      [315, 1, 1],
      [345, 1, 1],
   );

   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 93.5, 105),
      [0, 0, 0.75],
      [0, 0, 0.5],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 105.4, 109.5),
      [315, 1, 1],
      [345, 1, 1],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 109.5, 117),
      [145, 1, 1],
      [105, 1, 1],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 117, 153),
      [145, 1, 1],
      [175, 1, 1],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 121, 126),
      [75, 0.75, 0.75],
      [45, 0.875, 0.875],
   );
   setColor(between(where(notes, { include: { _type: 1 } }), 124.9, 125), [315, 0.81, 0.875]);
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 125.9, 149),
      [0, 0, 0.75],
      [0, 0, 0.5],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 149, 153),
      [75, 0.75, 0.75],
      [45, 0.875, 0.875],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 153, 157),
      [300, 1, 1],
      [330, 1, 1],
   );

   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 157.9, 170),
      [45, 0, 0.625],
      [60, 0.75, 0.875],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 169, 176),
      [330, 0.875, 1],
      [360, 1, 1],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 177, 179),
      [345, 0.875, 1],
      [360, 0, 0.625],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 179, 186),
      [200, 0.74, 1],
      [230, 0.8, 1],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 186, 189.7),
      [200, 0.74, 1],
      [230, 0, 0.75],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 190, 198.5),
      [0, 0, 0.5],
      [0, 0, 0.75],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 198.5, 204),
      [0, 0, 0.75],
      [0, 0, 0.875],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 204, 205.5),
      [345, 0, 0.75],
      [345, 1, 1],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 205.5, 211.5),
      [345, 1, 1],
      [315, 1, 1],
   );
   setColor(between(where(notes, { include: { _type: 1 } }), 211.2, 211.5), [210, 0.87, 1]);

   setColor(between(where(notes, { include: { _type: 1 } }), 212.2, 212.4), [0, 0, 0.625]);
   for (let i = 0, l = notes.length; i < l; i++) {
      if (notes[i]._time > 213.4) {
         break;
      }
      if (notes[i]._time < 213.3) {
         continue;
      }
      let color = interpolateColor(
         [345, 0.875, 1],
         [360, 0.125, 1],
         notes[i]._lineLayer / 2,
         'hsva',
      );
      notes[i]._customData = { _color: color };
   }
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 213.4, 269.1),
      [315, 1, 1],
      [345, 1, 1],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 241.5, 244.5),
      [145, 0, 0.75],
      [105, 0, 0.5],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 269.25, 271.75),
      [145, 0, 0.75],
      [105, 0, 0.5],
   );

   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 276, 302),
      [315, 1, 1],
      [345, 1, 1],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 302, 303.25),
      [0, 0, 0.5],
      [0, 0, 0.75],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 303.25, 306),
      [200, 0.74, 1],
      [230, 0.8, 1],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 306.5, 311.75),
      [0, 0, 0.25],
      [0, 0, 0.5],
   );

   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 311.75, 329),
      [200, 0.74, 1],
      [230, 0.8, 1],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 329, 333),
      [200, 0.74, 1],
      [230, 0.12, 0.5],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 333.6, 334.8),
      [0, 0, 0.875],
      [0, 0, 0.375],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 334.8, 341.5),
      [145, 1, 1],
      [105, 1, 1],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 342.2, 344.3),
      [0, 0, 0.875],
      [0, 0, 0.375],
   );

   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 344.2, 355.5),
      [180, 0, 0.625],
      [200, 0.5, 0.875],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 355.5, 363),
      [145, 1, 1],
      [105, 1, 1],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 363.3, 365.1),
      [145, 0.74, 1],
      [105, 0.12, 0.5],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 365.8, 369.9),
      [105, 0, 0.75],
      [145, 0.87, 0.87],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 370.6, 376),
      [105, 0, 0.75],
      [145, 0.87, 0.87],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 376.9, 379.5),
      [145, 1, 0.87],
      [105, 0, 0.5],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 379.5, 384.75),
      [0, 0, 0.375],
      [0, 0, 0.625],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 385.5, 389.1),
      [315, 1, 1],
      [345, 1, 1],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 389.5, 392),
      [200, 0.74, 1],
      [230, 0.8, 1],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 389.5, 393.8),
      [200, 0.74, 1],
      [230, 0.125, 0.625],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 393.8, 398.9),
      [315, 1, 1],
      [345, 1, 1],
   );

   setColor(between(where(notes, { include: { _type: 1 } }), 399.8, 399.9), [0, 0, 0.75]);
   setColor(between(where(notes, { include: { _type: 1 } }), 400.8, 400.9), [0, 0, 0.5]);
   for (let i = 0, l = notes.length; i < l; i++) {
      if (notes[i]._time > 401.9) {
         break;
      }
      if (notes[i]._time < 401.8) {
         continue;
      }
      let color = interpolateColor(
         [345, 0.875, 1],
         [360, 0.125, 1],
         notes[i]._lineIndex / 3,
         'hsva',
      );
      notes[i]._customData = { _color: color };
   }
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 402.4, 498.2),
      [315, 1, 1],
      [345, 1, 1],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 428.25, 433.1),
      [145, 0, 0.75],
      [105, 0, 0.5],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 457, 478.4),
      [145, 0, 0.75],
      [105, 0, 0.5],
   );
   setColor(between(where(notes, { include: { _type: 1 } }), 462.7, 462.8), [345, 1, 1]);
   setColor(between(where(notes, { include: { _type: 1 } }), 470.7, 470.8), [345, 1, 1]);

   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 474, 476.25),
      [200, 0.74, 1],
      [230, 0.8, 1],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 1 } }), 498.1, 506.05),
      [330, 1, 1],
      [360, 0, 0.75],
   );

   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 511, 594),
      [90, 0, 0.5],
      [120, 0, 0.625],
   );

   setColor(between(where(notes, { include: { _type: 1 } }), 595.4, 605.5), [345, 1, 1]);
   for (let i = 0, l = notes.length; i < l; i++) {
      if (notes[i]._time > 606.5) {
         break;
      }
      if (notes[i]._time < 596.4) {
         continue;
      }
      if (Math.floor(notes[i]._time) % 2 === 0) {
         notes[i]._customData = { _color: [0.75, 0.75, 0.75] };
      }
   }
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 606.5, 631),
      [200, 0.74, 1],
      [230, 0.8, 1],
   );
   setColor(between(where(notes, { include: { _type: 1 } }), 616.9, 621.9), [0, 1, 1]);

   for (let i = 0, l = notes.length; i < l; i++) {
      if (notes[i]._time > 636.4) {
         break;
      }
      if (notes[i]._time < 636.3) {
         continue;
      }
      let color = interpolateColor(
         [360, 0.125, 1],
         [345, 0.875, 1],
         notes[i]._lineIndex / 3,
         'hsva',
      );
      notes[i]._customData = { _color: color };
   }
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 636.4, 750.5),
      [315, 1, 1],
      [345, 1, 1],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 662.9, 667.7),
      [145, 0, 0.75],
      [105, 0, 0.5],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 693.4, 699.1),
      [145, 0, 0.75],
      [105, 0, 0.5],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 713, 714.8),
      [145, 0, 0.75],
      [105, 0, 0.5],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 726.8, 729.6),
      [145, 0, 0.75],
      [105, 0, 0.5],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 750.9, 759.9),
      [145, 0, 0.75],
      [105, 0, 0.5],
   );
   randomizeColorStack(
      between(where(notes, { include: { _type: 1 } }), 753.9, 756.9),
      [145, 1, 0.875],
      [120, 1, 0.875],
   );
   //#endregion
   //#region bombs
   randomizeColor(
      between(where(notes, { include: { _type: 3 } }), 59, 62),
      [345, 0.875, 1],
      [360, 0.875, 1],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 3 } }), 93.25, 93.75),
      [220, 1, 1],
      [200, 0.25, 1],
   );
   setGradientColor(
      between(where(notes, { include: { _type: 3 } }), 157.25, 157.75),
      [220, 1, 1],
      [200, 0.25, 1],
   );
   randomizeColor(
      between(where(notes, { include: { _type: 3 } }), 465.5, 469),
      [0, 0, 0.375],
      [0, 0, 0.5],
   );
   //#endregion
   //#region walls
   setColor(between(where(walls, { include: { _type: 2 } }), 11, 55), [220, 0.25, 0.75]);
   randomizeColor(
      between(where(walls, { include: { _type: 2 } }), 93, 116),
      [220, 0.25, 1],
      [200, 0.375, 1],
   );
   setColor(between(where(walls, { include: { _type: 2 } }), 117, 124), [220, 0.125, 1]);
   setColor(between(where(walls, { include: { _type: 2 } }), 123, 126), [345, 0.75, 0.875]);
   setGradientColor(
      between(where(walls, { include: { _type: 2 } }), 157.9, 193),
      [45, 0, 0.625],
      [60, 0.5, 0.875],
   );
   setColor(between(where(walls, { include: { _type: 2 } }), 193, 194), [15, 0, 0.875]);
   randomizeColor(
      between(where(walls, { include: { _type: 2 } }), 199, 203),
      [0, 0, 0.375],
      [0, 0, 0.625],
   );
   setColor(between(where(walls, { include: { _type: 2 } }), 203, 210), [220, 0.75, 0.875]);
   randomizeColorStack(
      between(where(walls, { include: { _type: 2 } }), 241.5, 271.75),
      [345, 1, 0.75],
      [360, 1, 0.875],
   );
   setColor(between(where(walls, { include: { _type: 2 } }), 271.9, 272), [0, 0, 0.875]);
   randomizeColor(
      between(where(walls, { include: { _type: 2 } }), 305, 308),
      [0, 0, 0.375],
      [0, 0, 0.625],
   );
   randomizeColor(
      between(where(walls, { include: { _type: 2 } }), 312, 326),
      [220, 0.25, 1],
      [200, 0.375, 1],
   );
   setGradientColor(
      between(where(walls, { include: { _type: 2 } }), 326, 332),
      [220, 0.25, 1],
      [330, 0.75, 1],
   );
   setColor(between(where(walls, { include: { _type: 2 } }), 333.6, 333.8), [0, 0, 0.875]);
   setColor(between(where(walls, { include: { _type: 2 } }), 335.2, 341.3), [0, 0, 0.5]);
   setGradientColor(
      between(where(walls, { include: { _type: 2 } }), 344.2, 353.9),
      [195, 0, 0.625],
      [210, 0.5, 0.875],
   );
   randomizeColor(
      between(where(walls, { include: { _type: 2 } }), 355.5, 400),
      [0, 0, 0.5],
      [0, 0, 0.75],
   );
   randomizeColorStack(
      between(where(walls, { include: { _type: 2 } }), 386, 392.5),
      [345, 1, 0.75],
      [360, 1, 0.875],
   );
   setColor(between(where(walls, { include: { _type: 2 } }), 399, 400), [0, 0, 0.875]);
   randomizeColorStack(
      between(where(walls, { include: { _type: 2 } }), 428, 459),
      [345, 1, 0.75],
      [360, 1, 0.875],
   );
   setColor(between(where(walls, { include: { _type: 2 } }), 460.7, 507), [0, 0, 0.875]);
   randomizeColorStack(
      between(where(walls, { include: { _type: 2 } }), 463, 468.5),
      [345, 1, 0.75],
      [360, 1, 0.875],
   );
   randomizeColorStack(
      between(where(walls, { include: { _type: 2 } }), 471, 473.25),
      [345, 1, 0.75],
      [360, 1, 0.875],
   );
   setGradientColor(
      between(where(walls, { include: { _type: 2 } }), 511, 594),
      [45, 0.375, 0.75],
      [60, 0.5, 0.875],
   );
   randomizeColor(
      between(where(walls, { include: { _type: 2 } }), 595, 605.5),
      [220, 0.25, 1],
      [200, 0.375, 1],
   );
   setColor(between(where(walls, { include: { _type: 2 } }), 617, 621.3), [0, 0, 1]);
   setColor(between(where(walls, { include: { _type: 2 } }), 621.3, 622), [0, 0, 0.25]);
   randomizeColor(
      between(where(walls, { include: { _type: 2 } }), 662, 726),
      [345, 1, 0.75],
      [360, 1, 0.875],
   );
   randomizeColor(
      between(where(walls, { include: { _type: 2 } }), 726, 757),
      [200, 0.875, 0.75],
      [220, 0.75, 0.875],
   );
   randomizeColor(
      between(where(walls, { include: { _type: 2 } }), 756, 773),
      [0, 0, 0.375],
      [0, 0, 0.625],
   );
   randomizeColor(
      between(where(walls, { include: { _type: 1 } }), 763, 771.7),
      [0, 0, 1],
      [0, 0, 0.375],
   );
   //#endregion
}

module.exports =
   /** @type {Main} */
   ({
      name,
      params,
      run,
      errorCheck,
   });
