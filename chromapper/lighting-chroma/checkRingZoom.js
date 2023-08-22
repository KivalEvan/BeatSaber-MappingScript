// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV2<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 */

const name = 'Ring Zoom State';
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
   let zoomed = false;
   for (const obj of events) {
      if (obj._time > cursor) {
         break;
      }
      if (obj._type !== 9) {
         continue;
      }
      zoomed = !zoomed;
   }
   alert(`Ring zoom is ${zoomed} at time ${Math.round(cursor * 100) / 100}`);
}

module.exports =
   /** @type {Main} */
   ({
      name,
      params,
      run,
      errorCheck,
   });
