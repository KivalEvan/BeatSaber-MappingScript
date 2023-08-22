// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').Run<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 * @typedef {import('./library/types/colors').ColorArray} ColorArray
 */

const { clamp } = require('./library/kvlUtils.js');
const { HsvaToRgba, RgbaToHsva } = require('./library/colors.js');

const name = 'Colour Shift';
const errorCheck = false;
const params = {
   Hue: 0,
   Saturation: 100,
   Value: 0,
   Alpha: 0,
   'Fixed Value': false,
   'Fixed Alpha': false,
};

/**
 * @param {ColorArray} currentColor
 * @param {ColorArray} shiftHSVA
 * @param {{ fixedAlpha: boolean, fixedValue: boolean }} settings
 * @returns
 */
function shiftColor(currentColor, shiftHSVA, settings) {
   return HsvaToRgba(
      /** @type {ColorArray} */
      (
         RgbaToHsva(currentColor).map((hsva, i) => {
            if (i === 1) {
               return clamp(/**@type number*/ (hsva) * shiftHSVA[1], 0, 1);
            }
            if (i === 2 && settings.fixedValue) {
               return shiftHSVA[2];
            }
            if (i === 3 && settings.fixedAlpha) {
               return shiftHSVA[3];
            }
            return /**@type number*/ (hsva) + /**@type number*/ (shiftHSVA[i]);
         })
      ),
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
   /** @type ColorArray */
   const hsvaShift = [
      global.params.Hue,
      global.params.Saturation / 100,
      global.params.Value,
      global.params.Alpha,
   ];
   const settings = {
      fixedValue: global.params['Fixed Value'],
      fixedAlpha: global.params['Fixed Alpha'],
   };
   const objectSelected = [
      ...notes.filter((n) => n.selected),
      ...events.filter((ev) => ev.selected),
      ...walls.filter((w) => w.selected),
      ...bombs.filter((n) => n.selected),
      ...arcs.filter((ev) => ev.selected),
      ...chains.filter((w) => w.selected),
   ];
   if (!objectSelected.length) {
      alert('Select any notes, events, or walls with Chroma color');
      return;
   }
   objectSelected.forEach((obj) => {
      const customData = obj.customData;
      if (customData) {
         if (customData._color) {
            customData._color = shiftColor(customData._color, hsvaShift, settings);
         }
         if (customData.color) {
            customData.color = shiftColor(customData.color, hsvaShift, settings);
         }
         if (customData._lightGradient) {
            customData._lightGradient._startColor = shiftColor(
               customData._lightGradient._startColor,
               hsvaShift,
               settings,
            );
            customData._lightGradient._endColor = shiftColor(
               customData._lightGradient._endColor,
               hsvaShift,
               settings,
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
