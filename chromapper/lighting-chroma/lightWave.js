// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').Run<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 * @typedef {import('./library/types/colors').ColorArray} ColorArray
 */

// hue: [0-inf] => set color hue (0 -> red, 120 -> green, 240 -> blue, 360 -> red, ...)
// saturation: [0-1] => color saturation
// value: [any range] => color value (higher is brighter)
// alpha: [any range] => color alpha
// duration: [0-inf] => duration from startID to endID
// invert: [>0 to enable] => start from endID to startID
// idStart: [1-inf] => set startID (see prop event)
// idEnd: [1-inf] => set endID
// idLightCount: [1-inf] => how many lightID in single prop
// idIgnore: [01234...] => ignore specific lightID in prop; '0' is disabled (if lightCount is 4, set 24 to ignore 2 and 4)
// eventType: [valid type] => set event type (0 -> backtop, 1 -> ring, ...)
// eventColor: [0,1] => set event value (0 -> red, 1 -> blue)
// repeat: [0-inf] => repeat placement for every duration
// repeatOffset: [any range] => offset repeat placement time

const { normalize, lerp } = require('./library/kvlUtils.js');
const { interpolateColor } = require('./library/colors.js');
const { parseStringColor } = require('./library/helpers.js');
const Easings = require('./library/easings.js');

/** @type {{[key:string]:number}} */
const eventTypeEnum = {
   'Ring Light': 1,
   Backtop: 0,
   'L Laser': 2,
   'R Laser': 3,
   Center: 4,
   'XL Light': 6,
   'XR Light': 7,
   'XL Laser': 10,
   'XR Laser': 11,
};

/** @type {{[key:string]:number}} */
const eventColorEnum = {
   Blue: 1,
   Red: 5,
   White: 9,
};

const name = 'Light Wave';
const errorCheck = false;
const params = {
   'Event Type': Object.keys(eventTypeEnum),
   'Event Color': Object.keys(eventColorEnum),
   'Color Type': ['HSVA', 'RGBA'],
   'Color Start': '360,1,1,1',
   'Color End': '240,1,1,1',
   Duration: 2,
   Invert: false,
   'ID Start-End': '1-15',
   'ID Light Count': 4,
   'ID Offset': 0,
   'ID Ignore': '0',
   'Easing Duration': Easings.list,
   'Easing Color': Easings.list,
   Repeat: 0,
   'Repeat Offset': 0,
   'Repeat Shift Hue': 0,
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
   chains
) {
   // event type and color
   const eventType = eventTypeEnum[global.params['Event Type']];
   const eventColor = eventColorEnum[global.params['Event Color']];
   const colorKey = data.version.startsWith('3') ? 'color' : '_color';
   const lightIdKey = data.version.startsWith('3') ? 'lightID' : '_lightID';

   // chroma color
   const colorType = /** @type {'hsva' | 'rgba'} */ (global.params['Color Type'].toLowerCase());
   const startColor = parseStringColor(global.params['Color Start']);
   const endColor = parseStringColor(global.params['Color End']);
   if (!startColor || !endColor) {
      alert('invalid color');
      return;
   }

   // time
   const cursorTime = cursor;
   const duration = Math.abs(/** @type number */ (global.params.Duration));
   const invert = global.params.Invert;

   // lightID
   const idStart = parseInt(global.params['ID Start-End'].split('-')[0]);
   const idEnd = parseInt(global.params['ID Start-End'].split('-')[1]);
   const idLightCount = Math.abs(global.params['ID Light Count']);
   const idOffset = Math.floor(global.params['ID Offset']);
   const idIgnore = global.params['ID Ignore'].split(',').map((el) => parseInt(el));

   // easing
   const durationEasing = Easings.mapped[global.params['Easing Duration']];
   const colorEasing = Easings.mapped[global.params['Easing Color']];

   // repeat
   const maxRepeat = Math.abs(/** @type number */ (global.params.Repeat));
   const repeatOffset = /** @type number */ (global.params['Repeat Offset']);
   const repeatShiftHue = /** @type number */ (global.params['Repeat Shift Hue']);

   const lightID = [];
   for (let i = 1; i <= idLightCount; i++) {
      if (!idIgnore.includes(i)) {
         lightID.push(i + idOffset);
      }
   }

   const maxIdStep = idEnd - idStart;
   for (let itRepeat = 0; itRepeat <= maxRepeat; itRepeat++) {
      const repeatTime = (duration + repeatOffset) * itRepeat;
      const currentLightID = [];
      for (let itIdStep = 0; itIdStep <= maxIdStep; itIdStep++) {
         lightID.forEach((id) =>
            currentLightID.push(
               id + (invert ? idEnd - itIdStep - 1 : itIdStep + idStart - 1) * idLightCount
            )
         );
         const idStepTime = lerp(durationEasing(normalize(itIdStep, 0, maxIdStep)), 0, duration);
         const tempLightID = [...currentLightID];
         const currentTime = cursorTime + repeatTime + idStepTime;
         const currentColor = interpolateColor(
            startColor,
            endColor,
            normalize(itIdStep, 0, maxIdStep),
            colorType,
            colorEasing
         );
         events.push({
            _time: currentTime,
            _type: eventType,
            _value: eventColor,
            _floatValue: 1,
            _customData: { [colorKey]: currentColor, [lightIdKey]: tempLightID },
         });
      }
      if (colorType === 'hsva') {
         startColor[0] += repeatShiftHue;
         endColor[0] += repeatShiftHue;
      }
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
