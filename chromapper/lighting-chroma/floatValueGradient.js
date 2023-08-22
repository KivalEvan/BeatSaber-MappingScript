// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV3<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 */

const { normalize, lerp } = require('./library/kvlUtils.js');
const Easings = require('./library/easings.js');

const name = 'Float Value Gradient';
const errorCheck = false;
const params = {
   Start: 1,
   End: 1,
   Easings: Easings.list,
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
   const selectedEvents = events.filter((ev) => ev.selected);

   if (!selectedEvents.length) {
      return;
   }
   const startTime = selectedEvents[0].b;
   // @ts-ignore
   const endTime = selectedEvents.at(-1).b;
   const easings = Easings.mapped[global.params.Easings];

   selectedEvents.forEach(
      (ev) =>
         (ev.f = lerp(
            normalize(ev.b, startTime, endTime),
            global.params.Start,
            global.params.End,
            easings,
         )),
   );

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
