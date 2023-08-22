// @ts-check -- remove if error message is annoying
/**
 * use RunV3<> or RunV2<> if you are doing specific map version script, default is Run<>
 * @typedef {import('./library/types').Run<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 */

// if needed, import helper function
// const {} = require('./library/helpers.js');
// const Easings = require('./library/easings.js');

const name = 'Template';
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
   alert('This is a template script, you may use this to start from scratch using this library.');
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
