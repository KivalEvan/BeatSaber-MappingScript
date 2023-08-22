// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').Run<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 * @typedef {import('./library/types/colors').ColorArray} ColorArray
 */

// Event Type => self-explanatory
// Event Color => default fallback color if Chroma not exist
// HSVA Start => [hue,saturation,value,alpha?]
// HSVA End => see how HSV work
// Duration => duration from startID to endID
// Length => duration for color gradient
// Step => how many step should color gradient take
// Light Off => replace to off event at the end of step
// Off-strobe => place off event in between color step
// Invert => start from endID to startID
// Fill Start => fill the light from startID to endID
// Delete Last => delete the very last event (useful if you don't want overlap side effect)
// ID Start-End => set startID (see prop event)
// ID Light Count => how many lightID in single prop
// ID Offset => offset by lightID (useful for case like Skrillex)
// ID Ignore => ignore specific lightID (only '0' is disable, use ',' to separate (if light count is 4, set 2,4 to ignore 2 and 4))
// Easing Duration => self-explanatory
// Easing Color => see easings.net
// Easing Step => for more detail
// Repeat => repeat placement for every length + duration
// Repeat Offset => offset repeat placement time
// Repeat Shift Hue => shift hue for each repeated
// Flicker Slide => make off-strobe to do flickery/butterfly effect towards end
// Flicker Invert => start from start
// Flicker Strength => determine how often should off-strobe
// Flicker Coverage => how much to cover
// Noise => enable noise (random color)
// Noise Intensity => how intense is the color change (value)
// Noise Saturation => how much should saturation get affected
// Noise Coverage => how much does it cover

const { normalize, lerp } = require('./library/kvlUtils.js');
const { HsvaToRgba } = require('./library/colors.js');
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

const name = 'Light Gradient';
const errorCheck = false;
const params = {
   'Event Type': Object.keys(eventTypeEnum),
   'Event Color': Object.keys(eventColorEnum),
   'Color Type': ['HSVA', 'RGBA'],
   'Color Start': '360,1,1,1',
   'Color End': '240,1,1,1',
   Duration: 1,
   Length: 1,
   Step: 8,
   'Light Off': false,
   'Off-strobe': false,
   Invert: false,
   'Fill Start': false,
   'Delete Last': false,
   'ID Start-End': '1-15',
   'ID Light Count': 4,
   'ID Offset': 0,
   'ID Ignore': '0',
   'Easing Duration': Easings.list,
   'Easing Color': Easings.list,
   'Easing Step': Easings.list,
   Repeat: 0,
   'Repeat Offset': 0,
   'Repeat Shift Hue': 0,
};

/**
 * @param {ColorArray} colorStart
 * @param {ColorArray} colorEnd
 * @param {number} norm
 * @returns {ColorArray}
 */
function interpolateColor(colorStart, colorEnd, norm) {
   return /** @type ColorArray */ (
      colorStart.map((c, i) =>
         lerp(norm, /** @type number */ (c), /** @type number */ (colorEnd[i])),
      )
   );
}

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
   const colorType = global.params['Color Type'];
   const colorTransformer = colorType === 'HSVA' ? HsvaToRgba : (/** @type {ColorArray} */ x) => x;
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

   // light settings
   const maxColorStep = Math.abs(global.params.Step);
   const lightOff = global.params['Light Off'];
   const offStrobe = global.params['Off-strobe'];
   const invert = global.params.Invert;
   const fillStart = global.params['Fill Start'];
   const deleteLast = global.params['Delete Last'];

   // light id
   const idStart = parseInt(global.params['ID Start-End'].split('-')[0]);
   const idEnd = parseInt(global.params['ID Start-End'].split('-')[1]);
   const idLightCount = Math.abs(global.params['ID Light Count']);
   const idOffset = Math.floor(global.params['ID Offset']);
   const idIgnore = global.params['ID Ignore'].split(',').map((el) => parseInt(el));

   // easing
   const durationEasing = Easings.mapped[global.params['Easing Duration']];
   const colorEasing = Easings.mapped[global.params['Easing Color']];
   const stepEasing = Easings.mapped[global.params['Easing Step']];

   // repeat
   const maxRepeat = Math.abs(global.params.Repeat);
   const repeatOffset = global.params['Repeat Offset'];
   const repeatShiftHue = global.params['Repeat Shift Hue'];

   // flicker
   const flickerMode = false;
   const flickerInvert = false;
   const flickerStrength = 1;
   const flickerCoverage = 1;

   // noise
   const noiseMode = false;
   const noiseIntensity = 64 / 100;
   const noiseSaturation = 1;
   const noiseCoverage = 1;

   // generate lightID
   const lightID = [];
   const lightIDAll = [];
   for (let i = 1; i <= idLightCount; i++) {
      if (!idIgnore.includes(i)) {
         lightID.push(i + idOffset);
      }
   }
   for (let i = idStart - 1; i < idEnd; i++) {
      for (let j = 1; j <= idLightCount; j++) {
         if (!idIgnore.includes(j)) {
            lightIDAll.push(i * idLightCount + j + idOffset);
         }
      }
   }
   lightIDAll.sort((a, b) => a - b);

   const maxIdStep = idEnd - idStart;
   for (let itRepeat = 0; itRepeat <= maxRepeat; itRepeat++) {
      const repeatTime = (duration + length + repeatOffset) * itRepeat;
      for (let itIdStep = 0; itIdStep <= maxIdStep; itIdStep++) {
         const currentLightID = lightID.map(
            (id) => id + (invert ? idEnd - itIdStep - 1 : itIdStep + idStart - 1) * idLightCount,
         );
         const idStepTime = lerp(durationEasing(normalize(itIdStep, 0, maxIdStep)), 0, duration);
         for (let itColorStep = 0; itColorStep <= maxColorStep; itColorStep++) {
            if (!flickerMode && offStrobe && lightOff && itColorStep === maxColorStep) {
               break;
            }
            if (deleteLast && itIdStep === maxIdStep && itColorStep === maxColorStep) {
               continue;
            }
            if (fillStart && itIdStep > idStart && itColorStep === 0) {
               continue;
            }
            const colorStepTime = lerp(
               stepEasing(normalize(itColorStep, 0, maxColorStep)),
               0,
               length,
            );
            const currentTime =
               cursorTime +
               repeatTime +
               (fillStart && itColorStep === 0 ? 0 : colorStepTime + idStepTime);
            if (itColorStep === maxColorStep && lightOff) {
               events.push({
                  _time: currentTime,
                  _type: eventType,
                  _value: 0,
                  _floatValue: 1,
                  _customData: {
                     [lightIdKey]: fillStart && itColorStep === 0 ? lightIDAll : currentLightID,
                  },
               });
               break;
            }
            const currentColor = interpolateColor(
               startColor,
               endColor,
               colorEasing(
                  normalize(
                     lerp(stepEasing(normalize(itColorStep, 0, maxColorStep)), 0, length),
                     0,
                     length,
                  ),
               ),
            );
            if (noiseMode && colorType === 'HSVA' && Math.random() < noiseCoverage) {
               currentColor[0] += Math.random() * noiseSaturation;
               currentColor[1] = Math.max(
                  Math.min(currentColor[1] + (-0.5 + Math.random()) * noiseSaturation, 1),
                  0,
               );
               currentColor[2] = Math.max(
                  currentColor[2] + (-0.5 + Math.random()) * noiseIntensity,
                  0,
               );
            }
            const transofmed = colorTransformer(currentColor);
            console.log(
               `${currentColor[0]},${currentColor[1]},${currentColor[2]},${currentColor[3]} > ${transofmed[0]},${transofmed[1]},${transofmed[2]},${transofmed[3]}`,
            );
            events.push({
               _time: currentTime,
               _type: eventType,
               _value: eventColor,
               _floatValue: 1,
               _customData: {
                  [colorKey]: colorTransformer(currentColor),
                  [lightIdKey]: fillStart && itColorStep === 0 ? lightIDAll : currentLightID,
               },
            });
            if (!flickerMode && offStrobe && itColorStep !== maxColorStep) {
               const isFlicker = Math.random() < flickerStrength;
               if (isFlicker && flickerCoverage > itColorStep / maxColorStep) {
                  events.push({
                     _time:
                        currentTime -
                        colorStepTime +
                        lerp(
                           stepEasing(normalize(itColorStep * 2 + 1, 0, maxColorStep * 2)),
                           0,
                           length,
                        ),
                     _type: eventType,
                     _value: 0,
                     _floatValue: 1,
                     _customData: { [lightIdKey]: currentLightID },
                  });
               }
            }
            if (flickerMode && offStrobe && itColorStep !== maxColorStep) {
               const isFlicker = flickerInvert
                  ? Math.random() * flickerStrength > itColorStep / maxColorStep
                  : Math.random() * flickerStrength < itColorStep / maxColorStep;
               if (isFlicker && flickerCoverage > itColorStep / maxColorStep) {
                  events.push({
                     _time:
                        currentTime -
                        colorStepTime +
                        lerp(
                           stepEasing(normalize(itColorStep * 2 + 1, 0, maxColorStep * 2)),
                           0,
                           length,
                        ),
                     _type: eventType,
                     _value: 0,
                     _floatValue: 1,
                     _customData: { [lightIdKey]: currentLightID },
                  });
               }
            }
         }
      }
      if (colorType === 'HSVA') {
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
