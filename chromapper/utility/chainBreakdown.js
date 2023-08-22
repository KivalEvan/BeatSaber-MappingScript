// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV3<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 */

const name = 'Chain Breakdown';
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
   if (!data.version || data.version.startsWith('2')) {
      alert('This script only supports beatmap v3');
   }

   chains
      .filter((c) => c.selected)
      .forEach((c, i) => {
         if (c.sc > 2) {
            const duration = c.tb - c.b;
            const maxSquish = c.s;
            const linkCount = c.sc - 1;

            for (let x = 1; x < linkCount; x++) {
               const mult = x / linkCount;
               chains.push({
                  ...c,
                  tb: c.b + duration * mult,
                  sc: 2,
                  s: maxSquish * mult,
               });
            }

            c.sc = 2;
         }
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
