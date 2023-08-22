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
// length: [0-inf] => duration for color gradient
// precision: [0-inf] => how far apart from each lightID
// step: [0-inf] => how many step should color gradient take
// light off: [>0 to enable] => replace to off event at the end of step
// off strobe: [>0 to enable] => place off event in between color step
// idStart: [1-inf] => set startID (see prop event)
// idEnd: [1-inf] => set endID
// idIgnore: [01234...] => ignore specific lightID in prop; '0' is disabled (if lightCount is 4, set 24 to ignore 2 and 4)
// idMultiple: [1-inf] => how many lightID at a time
// eventType: [valid type] => set event type (0 -> backtop, 1 -> ring, ...)
// eventColor: [0,1] => set event value (0 -> red, 1 -> blue)

const { normalize, lerp, shuffle } = require('./library/kvlUtils.js');
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

const name = 'Pseudorandom LightID';
const errorCheck = false;
const params = {
   'Event Type': Object.keys(eventTypeEnum),
   'Event Color': Object.keys(eventColorEnum),
   'Color Type': ['HSVA', 'RGBA'],
   'Color Start': '360,1,1,1',
   'Color End': '240,1,1,1',
   Duration: 2,
   Length: 1,
   Precision: 4,
   Step: 8,
   'Light Off': false,
   'Off-strobe': false,
   'ID Start-End': '1-7',
   'ID Ignore': '0',
   'ID Multiple': 1,
   'Easing Color': Easings.list,
   'Easing Step': Easings.list,
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
   const colorType = /** @type {'hsva'| 'rgba'} */ (global.params['Color Type'].toLowerCase());
   const startColor = parseStringColor(global.params['Color Start']);
   const endColor = parseStringColor(global.params['Color End']);
   if (!startColor || !endColor) {
      alert('invalid color');
      return;
   }

   // time
   const cursorTime = cursor;
   const duration = Math.abs(global.params.Duration);
   const length = Math.abs(global.params.Length);
   const precision = Math.abs(global.params.Precision);

   // color
   const maxColorStep = Math.abs(global.params.Step);
   const lightOff = global.params['Light Off'];
   const offStrobe = global.params['Off-strobe'];

   // light id
   const idStart = parseInt(global.params['ID Start-End'].split('-')[0]);
   const idEnd = parseInt(global.params['ID Start-End'].split('-')[1]);
   const idIgnore = global.params['ID Ignore'].split(',').map((el) => parseInt(el));

   // easing
   const colorEasing = Easings.mapped[global.params['Easing Color']];
   const stepEasing = Easings.mapped[global.params['Easing Step']];

   const arrayLightID = [];
   for (let i = idStart; i <= idEnd; i++) {
      if (!idIgnore.includes(i)) {
         arrayLightID.push(i);
      }
   }
   const itMultiple = Math.min(Math.abs(global.params['ID Multiple']), arrayLightID.length);
   shuffle(arrayLightID);
   const lightIDLength = arrayLightID.length;
   const maxLightCount = Math.floor(duration * precision);

   for (let itLightCount = 0, itLightID = 0; itLightCount < maxLightCount; itLightCount++) {
      const currentLightID = [];
      for (let itIdCount = 0; itIdCount < itMultiple; itIdCount++, itLightID++) {
         if (itLightID === lightIDLength && lightIDLength > 1) {
            const prevLightID = arrayLightID[itLightID - 1];
            shuffle(arrayLightID);
            while (arrayLightID[0] === prevLightID) {
               shuffle(arrayLightID);
            }
            itLightID = 0;
         }
         currentLightID.push(arrayLightID[itLightID]);
      }
      const idCountStepTime = (1 / precision) * itLightCount;
      for (let itColorStep = 0; itColorStep <= maxColorStep; itColorStep++) {
         if (offStrobe && lightOff && itColorStep === maxColorStep) {
            break;
         }
         const colorStepTime = lerp(normalize(itColorStep, 0, maxColorStep), 0, length);
         const currentTime = cursorTime + idCountStepTime + colorStepTime;
         if (lightOff && itColorStep === maxColorStep) {
            events.push({
               _time: currentTime,
               _type: eventType,
               _value: 0,
               _floatValue: 1,
               _customData: {
                  [lightIdKey]: currentLightID,
               },
            });
            break;
         }
         const currentColor = interpolateColor(
            startColor,
            endColor,
            normalize(
               lerp(stepEasing(normalize(itColorStep, 0, maxColorStep)), 0, length),
               0,
               length
            ),
            colorType,
            colorEasing
         );
         events.push({
            _time: currentTime,
            _type: eventType,
            _value: eventColor,
            _floatValue: 1,
            _customData: {
               [colorKey]: currentColor,
               [lightIdKey]: currentLightID,
            },
         });
         if (offStrobe && itColorStep !== maxColorStep) {
            events.push({
               _time:
                  currentTime -
                  colorStepTime +
                  lerp(stepEasing(normalize(itColorStep * 2 + 1, 0, maxColorStep * 2)), 0, length),
               _type: eventType,
               _value: 0,
               _floatValue: 1,
               _customData: {
                  [lightIdKey]: currentLightID,
               },
            });
         }
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
