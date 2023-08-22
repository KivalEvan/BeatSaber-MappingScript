// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV2<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 */

const name = 'Convert to Timing Note';
const errorCheck = false;
const params = {
   'Start Time': 0,
   'End Time': 999,
   'Remove Stack': false,
   'Ignore Bomb': false,
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
   let startTime = global.params['Start Time'];
   let endTime = global.params['End Time'];
   const removeStack = global.params['Remove Stack'];
   const ignoreBomb = global.params['Ignore Bomb'];

   /** @type {{[key:number]: import('./library/types/beatmap/v2/note').INote[]}} */
   const noteAtTime = {
      0: [],
      1: [],
      3: [],
   };

   let noteSelected = notes.filter((n) => n.selected).sort((a, b) => a._time - b._time);
   if (!noteSelected.length) {
      noteSelected = notes;
   } else {
      startTime = noteSelected[0]._time;
      endTime = noteSelected[noteSelected.length - 1]._time;
   }

   for (const i in noteSelected) {
      let layer = 0;
      if (noteSelected[i]._time < startTime) {
         continue;
      }
      if (noteSelected[i]._time > endTime) {
         break;
      }
      if (noteSelected[i]._type === 3 && ignoreBomb) {
         continue;
      }
      if (
         noteAtTime[noteSelected[i]._type].length > 0 &&
         checkNoteAtTime(noteAtTime[noteSelected[i]._type], noteSelected[i])
      ) {
         if (removeStack) {
            delete noteSelected[i];
            continue;
         }
         layer = Math.min(2, noteAtTime[noteSelected[i]._type].length);
      } else {
         noteAtTime[noteSelected[i]._type] = [];
      }
      noteSelected[i]._lineIndex = (noteSelected[i]._type + 1) % 4;
      noteSelected[i]._lineLayer = layer;
      noteSelected[i]._cutDirection = 8;
      noteAtTime[noteSelected[i]._type].push(noteSelected[i]);
   }
}

function checkNoteAtTime(noteArr, note) {
   for (const n of noteArr) {
      if (n._time + 0.001 >= note._time) {
         return true;
      }
   }
   return false;
}

module.exports =
   /** @type {Main} */
   ({
      name,
      params,
      run,
      errorCheck,
   });
