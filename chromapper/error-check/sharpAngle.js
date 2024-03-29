const kvlCore = require('./_kivalCore.js');

function check(cursor, notes, events, walls, _, global, data, customEvents, bpmChanges) {
   const maxPrec = global.params[0];
   const epsilon = 0.001;

   const bpmChangesTime = kvlCore.getBPMChangesTime(data.songBPM, bpmChanges);
   const lastNote = {
      0: null,
      1: null,
      3: null,
   };
   const lastNoteDirection = {
      0: null,
      1: null,
      3: null,
   };
   const startNoteDot = {
      0: null,
      1: null,
      3: null,
   };
   const swingNoteArray = {
      0: [],
      1: [],
      3: [],
   };

   for (const note of notes) {
      if (kvlCore.isNote(note) && lastNote[note._type]) {
         if (
            kvlCore.swingNext(note, lastNote[note._type], data.songBPM, swingNoteArray[note._type])
         ) {
            if (startNoteDot[note._type]) {
               startNoteDot[note._type] = null;
               lastNoteDirection[note._type] = kvlCore.flipCutDir[lastNoteDirection[note._type]];
            }
            if (
               kvlCore.checkAngle(note._cutDirection, lastNoteDirection[note._type], 90) &&
               kvlCore.adjustTime(note._time, data.songBPM, bpmChangesTime) -
                  kvlCore.adjustTime(lastNote[note._type]._time, data.songBPM, bpmChangesTime) <=
                  1 / maxPrec + epsilon
            ) {
               addError(note, '');
            }
            if (note._cutDirection === 8) {
               startNoteDot[note._type] = note;
            } else {
               lastNoteDirection[note._type] = note._cutDirection;
            }
            swingNoteArray[note._type] = [];
         } else {
            if (
               startNoteDot[note._type] &&
               kvlCore.checkAngle(note._cutDirection, lastNoteDirection[note._type], 90) &&
               kvlCore.adjustTime(note._time, data.songBPM, bpmChangesTime) -
                  kvlCore.adjustTime(lastNote[note._type]._time, data.songBPM, bpmChangesTime) <=
                  1 / maxPrec + epsilon
            ) {
               addError(note, 'Ambiguous dot flow assume Sharp Angle');
               startNoteDot[note._type] = null;
            }
            if (note._cutDirection !== 8) {
               lastNoteDirection[note._type] = note._cutDirection;
            }
         }
      } else {
         lastNoteDirection[note._type] = note._cutDirection;
      }
      lastNote[note._type] = note;
      swingNoteArray[note._type].push(note);
   }
}

module.exports = {
   name: 'Sharp Angle',
   params: {
      'Max Prec': 1 / kvlCore.toolValue.maxShrAngle,
   },
   run: check,
};
