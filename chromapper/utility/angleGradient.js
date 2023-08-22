// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV3<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 */

const { normalize, lerp } = require('./library/kvlUtils.js');
const Easings = require('./library/easings.js');

const name = 'Angle Offset Gradient';
const errorCheck = false;
const params = {
   Angle: 0,
   'Flip Red': true,
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
   chains,
) {
   if (!data.version || data.version.startsWith('2')) {
      alert('This script only supports beatmap v3');
   }

   const angle = Math.round(global.params.Angle);
   const flipRed = global.params['Flip Red'];
   const easing = Easings.mapped[global.params.Easing];
   const objectSelected = [...notes.filter((n) => n.selected)];

   if (!objectSelected.length) {
      alert('Select notes to angle offset');
      return;
   }
   const startTime = objectSelected[0].b;
   // @ts-ignore
   const endTime = objectSelected.at(-1).b;

   objectSelected.forEach((obj) => {
      const norm = easing(normalize(obj.b, startTime, endTime));
      obj.a = lerp(norm, 0, angle, easing);
      if (obj.c == 0 && flipRed) obj.a *= -1;
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
