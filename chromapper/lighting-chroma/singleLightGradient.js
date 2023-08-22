// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').Run<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 * @typedef {import('./library/types/colors').ColorArray} ColorArray
 */

const { interpolateColor, HsvaToRgba } = require('./library/colors');
const { parseStringColor } = require('./library/helpers');
const { normalize } = require('./library/kvlUtils.js');
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

const name = 'Single Light Gradient';
const errorCheck = false;
const params = {
   'Event Type': Object.keys(eventTypeEnum),
   'Event Color': Object.keys(eventColorEnum),
   'Color Type': ['HSVA', 'RGBA'],
   'Color Start': '360,1,1,1',
   'Color End': '240,1,1,1',
   Duration: 1,
   Step: 8,
   'Light Off': false,
   ID: 1,
   'Easing Color': Easings.list,
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
   const duration = Math.abs(global.params.Duration);

   // light
   const maxColorStep = Math.abs(global.params.Step);
   const lightOff = global.params['Light Off'];
   const lightID = Math.abs(global.params['ID']);

   // easing
   const colorEasing = Easings.mapped[global.params['Easing Color']];

   const timeColorStepIncrement = maxColorStep ? duration / maxColorStep : 1;
   for (let itColorStep = 0; itColorStep <= maxColorStep; itColorStep++) {
      const currentTime = cursorTime + timeColorStepIncrement * itColorStep;
      if (itColorStep === maxColorStep && lightOff) {
         events.push({
            b: currentTime,
            et: eventType,
            i: 0,
            f: 1,
            customData: {
               [lightIdKey]: [lightID],
            },
         });
         break;
      }
      const normColor = normalize(timeColorStepIncrement * itColorStep, 0, duration);
      const currentColor = interpolateColor(
         startColor,
         endColor,
         normColor,
         colorType,
         colorEasing,
      );
      events.push({
         b: currentTime,
         et: eventType,
         i: eventColor,
         f: 1,
         customData: {
            [colorKey]: currentColor,
            [lightIdKey]: [lightID],
         },
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
