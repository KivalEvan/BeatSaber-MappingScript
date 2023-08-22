// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').Run<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 */

const name = 'Ring Spin Creator';
const errorCheck = false;
const params = {
   Rotation: 90,
   Step: 7.5,
   Prop: 1,
   Speed: 1,
   Direction: -1,
   'Snap Immediately': false,
   'Snap Offset': 0.0625,
};

const keyV2 = {
   rotation: '_rotation',
   step: '_step',
   prop: '_prop',
   speed: '_speed',
   direction: '_direction',
};

const keyV3 = {
   rotation: 'rotation',
   step: 'step',
   prop: 'prop',
   speed: 'speed',
   direction: 'direction',
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
   const rotation = global.params.Rotation;
   const step = global.params.Step;
   const prop = global.params.Prop;
   const speed = global.params.Speed;
   const direction = Math.min(Math.floor(Math.abs(global.params.Direction)), 1);
   const snapImmediately = global.params['Snap Immediately'];
   const snapOffset = global.params['Snap Offset'];

   const keyVer = data.version.startsWith('3') ? keyV3 : keyV2;

   const customData = {
      [keyVer.rotation]: rotation,
      [keyVer.step]: step,
      [keyVer.prop]: prop,
      [keyVer.speed]: speed,
      [keyVer.direction]: direction,
   };

   events.push({
      b: cursor,
      et: 8,
      i: 0,
      f: 1,
      customData: customData,
   });

   if (snapImmediately) {
      const customDataSnap = {
         [keyVer.step]: step,
         [keyVer.prop]: 255,
         [keyVer.speed]: 255,
         [keyVer.direction]: direction,
      };

      events.push({
         b: cursor - snapOffset,
         et: 8,
         i: 0,
         f: 1,
         customData: customDataSnap,
      });
   }
}

module.exports =
   /** @type {Main} */
   ({
      name,
      params,
      run,
      errorCheck,
   });
