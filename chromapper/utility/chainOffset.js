// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV3<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 */

const name = 'Chain Offset';
const errorCheck = false;
const params = { Offset: 0.125 };

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
   chains
      .filter((c) => c.selected)
      .forEach((c, _) => {
         c.tb = c.b + global.params.Offset;
      });

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
