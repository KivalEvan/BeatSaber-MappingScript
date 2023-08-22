// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV3<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 * @typedef {import('./library/types/colors').ColorArray} ColorArray
 */

const { interpolateColor } = require('./library/colors');
const Easings = require('./library/easings.js');
const { parseStringColor } = require('./library/helpers');
const { normalize } = require('./library/kvlUtils');

const name = 'Object Gradient';
const errorCheck = false;
const params = {
   'Color Type': ['HSVA', 'RGBA'],
   'Color Start': '360,1,1,1',
   'Color End': '240,1,1,1',
   Easing: Easings.list,
};

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
   chains
) {
   const colorKey = data.version.startsWith('3') ? 'color' : '_color';

   // chroma color
   const colorType = /** @type {'hsva'| 'rgba'} */ (global.params['Color Type']);
   const startColor = parseStringColor(global.params['Color Start']);
   const endColor = parseStringColor(global.params['Color End']);
   if (!startColor || !endColor) {
      alert('invalid color');
      return;
   }

   const colorEasing = Easings.mapped[global.params['Easing Color']];

   const objectSelected = [
      ...notes.filter((n) => n.selected),
      ...events.filter((ev) => ev.selected),
      ...walls.filter((w) => w.selected),
      ...bombs.filter((b) => b.selected),
      ...arcs.filter((a) => a.selected),
      ...chains.filter((c) => c.selected),
   ].sort((a, b) => a.b - b.b);
   if (!objectSelected.length) {
      alert('Select any notes, events, or walls');
      return;
   }
   const startTime = objectSelected[0].b;
   const endTime = Math.max(
      ...objectSelected
         // @ts-ignore
         .map((x) => [x.b, x.tb])
         .flat()
         .filter((x) => x != null)
   );

   objectSelected.forEach((obj) => {
      const currentColor = interpolateColor(
         startColor,
         endColor,
         normalize(obj.b, startTime, endTime),
         colorType,
         colorEasing
      );
      if (obj.customData) {
         obj.customData[colorKey] = currentColor;
      } else {
         obj.customData = {
            [colorKey]: currentColor,
         };
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
