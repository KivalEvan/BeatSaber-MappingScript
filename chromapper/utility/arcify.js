// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV3<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 */

const name = 'Arc-ify';
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

   /**
    * @type {Record<number, import('./library/types/beatmap/v3/colorNote').IColorNote>}
    */
   let prevNote = {};
   for (const n of notes) {
      if (prevNote[n.c]) {
         arcs.push({
            b: prevNote[n.c].b,
            c: prevNote[n.c].c,
            x: prevNote[n.c].x,
            y: prevNote[n.c].y,
            d: prevNote[n.c].d,
            mu: 1,
            tb: n.b,
            tx: n.x,
            ty: n.y,
            tc: n.d,
            tmu: 1,
            m: 0,
         });
      }
      prevNote[n.c] = n;
   }
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
