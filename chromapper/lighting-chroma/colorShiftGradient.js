// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV3} Run
 * @typedef {import('./library/types').Main} Main
 * @typedef {import('./library/types/colors').ColorArray} ColorArray
 */

const { clamp, normalize, lerp } = require('./library/kvlUtils.js');
const { HsvaToRgba, RgbaToHsva } = require('./library/colors.js');
const Easings = require('./library/easings.js');

const name = 'Colour Shift Gradient';
const errorCheck = false;
const params = {
   Hue: 0,
   Saturation: 100,
   Value: 0,
   Alpha: 0,
   Easing: Easings.list,
   'Force Colour': false,
   'Infer Inbetween': false,
};

/**
 * @param {ColorArray} hsvaStart
 * @param {ColorArray} hsvaEnd
 * @param {number} norm
 * @returns
 */
function interpolateColor(hsvaStart, hsvaEnd, norm) {
   return HsvaToRgba(
      .../**@type ColorArray*/ (
         RgbaToHsva(...hsvaStart).map((hsva, i) =>
            lerp(norm, /**@type number*/ (hsva), /**@type number*/ (hsvaEnd[i])),
         )
      ),
   );
}

/**
 * @param {ColorArray} currentColor
 * @param {ColorArray} shiftHSVA
 * @returns {ColorArray}
 */
function shiftColor(currentColor, shiftHSVA) {
   return /**@type ColorArray*/ (
      RgbaToHsva(...currentColor).map((hsva, i) => {
         if (i === 1) {
            return clamp(/**@type number*/ (hsva) * shiftHSVA[1], 0, 1);
         }
         return /**@type number*/ (hsva) + /**@type number*/ (shiftHSVA[i]);
      })
   );
}

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
   bombs = [],
   arcs = [],
   chains = [],
) {
   /** @type [number,number,number,number] */
   const hsvaShift = [
      /** @type number */ (global.params[0]),
      /** @type number */ (global.params[1]) / 100,
      /** @type number */ (global.params[2]),
      /** @type number */ (global.params[3]),
   ];
   const colorEasing = Easings.mapped[/** @type string */ (global.params[4])];
   const getSelected = (obj) => obj.selected;
   const objectSelected = [
      ...notes.filter(getSelected),
      ...events.filter(getSelected),
      ...walls.filter(getSelected),
      ...bombs.filter(getSelected),
      ...arcs.filter(getSelected),
      ...chains.filter(getSelected),
   ].sort((a, b) => a.b - b.b);
   if (!objectSelected.length) {
      alert('Select any notes, events, or walls with Chroma color');
      return;
   }
   const startTime = objectSelected[0].b;
   const endTime = Math.max(
      ...objectSelected
         // @ts-ignore
         .map((x) => [x.b, x.tb])
         .flat()
         .filter((x) => x != null),
   );

   objectSelected.forEach((obj) => {
      // @ts-ignore
      const norm = colorEasing(normalize(obj.tb ?? obj.b, startTime, endTime));
      const customData = obj.customData;
      if (customData) {
         if (customData._color) {
            customData._color = interpolateColor(
               customData._color,
               shiftColor(customData._color, hsvaShift),
               norm,
            );
         }
         if (customData.color) {
            customData.color = interpolateColor(
               customData.color,
               shiftColor(customData.color, hsvaShift),
               norm,
            );
         }
         if (customData._lightGradient) {
            customData._lightGradient._startColor = interpolateColor(
               customData._lightGradient._startColor,
               shiftColor(customData._lightGradient._startColor, hsvaShift),
               norm,
            );
            customData._lightGradient._endColor = interpolateColor(
               customData._lightGradient._endColor,
               shiftColor(customData._lightGradient._endColor, hsvaShift),
               norm,
            );
         }
      }
   });
}

module.exports =
   /** @type {Main} */
   ({
      name,
      params,
      run,
      errorCheck,
   });
