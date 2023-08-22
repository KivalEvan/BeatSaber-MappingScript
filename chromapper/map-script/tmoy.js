// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV2<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 */

const { at, between, v2SetColor: setColor } = require('./library/helpers');

const name = 'The March of Yui';
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
   setColor(between(walls, 6, 8), [0, 0, 1]);
   setColor(between(walls, 134, 136), [0, 0, 1]);
   setColor(between(walls, 262, 264), [0, 0, 1]);
   setColor(between(walls, 308, 308), [0, 0, 0.75]);
   setColor(between(walls, 324, 324), [0, 0, 0.75]);
   setColor(between(walls, 454, 456), [0, 0, 1]);
   setColor(between(walls, 582, 584), [0, 0, 1]);
   setColor(between(walls, 710, 712), [0, 0, 1]);

   setColor(between(walls, 10, 22), [90, 0.675, 0.75]);
   setColor(between(walls, 138, 150), [90, 0.675, 0.75]);

   setColor(between(walls, 280, 293), [180, 0.6875, 0.5]);
   setColor(between(walls, 294, 306), [120, 0.5, 0.625]);
   setColor(between(walls, 328, 438), [180, 0.6875, 0.5]);
   setColor(at(walls, 358), [120, 0.5, 0.625]);
   setColor(at(walls, 360.5), [120, 0.5, 0.625]);
   setColor(at(walls, 362), [120, 0.5, 0.625]);
   setColor(at(walls, 366), [120, 0.5, 0.625]);
   setColor(at(walls, 368.5), [120, 0.5, 0.625]);
   setColor(at(walls, 370), [120, 0.5, 0.625]);

   setColor(at(walls, 422), [120, 0.5, 0.625]);
   setColor(at(walls, 424.5), [120, 0.5, 0.625]);
   setColor(at(walls, 426), [120, 0.5, 0.625]);
   setColor(at(walls, 430), [120, 0.5, 0.625]);
   setColor(at(walls, 432.5), [120, 0.5, 0.625]);
   setColor(at(walls, 434), [120, 0.5, 0.625]);

   setColor(between(walls, 458, 470), [90, 0.675, 0.75]);
}

module.exports =
   /** @type {Main} */
   ({
      name,
      params,
      run,
      errorCheck,
   });
