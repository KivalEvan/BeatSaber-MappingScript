// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV3<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 */

const name = 'Float Value Multiplier';
const errorCheck = false;
const params = { Multiply: 1 };

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
   events.filter((ev) => ev.selected).forEach((ev) => (ev.f *= global.params.Multiply));
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
