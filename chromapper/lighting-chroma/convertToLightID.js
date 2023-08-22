// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV2<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 * @typedef {import('./library/types/colors').ColorArray} ColorArray
 */

const { normalize, lerp } = require('./library/kvlUtils.js');
const Easings = require('./library/easings.js');
const ColorScheme = require('./library/colorScheme.js');

const name = 'Convert Environment LightID';
const params = {
   'Type 0': false,
   'Type 1': false,
   'Type 2': false,
   'Type 3': false,
   'Type 4': false,
   'Type 6': false,
   'Type 7': false,
   'Type 10': false,
   'Type 11': false,
   'Convert Fade': false,
   'Fade Duration': 1.5,
   'Fade Step (ms)': 30,
   'Fade Brightness': 1.12,
   'Fade Easings': Easings.list,
   'Fix No Chroma': false,
};
const errorCheck = false;

const isOn = (ev) => ev._value === 1 || ev._value === 5;
const isFlash = (ev) => ev._value === 2 || ev._value === 6;
const isFade = (ev) => ev._value === 3 || ev._value === 7;

// very readable code :+1:
const environmentMap = {
   DefaultEnvironment: {
      0: Array.from(Array(10), (_, i) => i + 1),
      1: Array.from(Array(60), (_, i) => i + 1),
      2: Array.from(Array(7), (_, i) => i + 1),
      3: Array.from(Array(7), (_, i) => i + 1),
      4: Array.from(Array(12), (_, i) => i + 1),
   },
   OriginsEnvironment: {
      0: Array.from(Array(10), (_, i) => i + 1),
      1: Array.from(Array(60), (_, i) => i + 1),
      2: Array.from(Array(7), (_, i) => i + 1),
      3: Array.from(Array(7), (_, i) => i + 1),
      4: Array.from(Array(12), (_, i) => i + 1),
   },
   TriangleEnvironment: {
      0: Array.from(Array(8), (_, i) => i + 1),
      1: Array.from(Array(60), (_, i) => i + 1),
      2: Array.from(Array(7), (_, i) => i + 1),
      3: Array.from(Array(7), (_, i) => i + 1),
      4: Array.from(Array(12), (_, i) => i + 1),
   },
   NiceEnvironment: {
      0: Array.from(Array(10), (_, i) => i + 1),
      1: Array.from(Array(60), (_, i) => i + 1),
      2: Array.from(Array(7), (_, i) => i + 1),
      3: Array.from(Array(7), (_, i) => i + 1),
      4: Array.from(Array(12), (_, i) => i + 1),
   },
   BigMirrorEnvironment: {
      0: Array.from(Array(10), (_, i) => i + 1),
      1: Array.from(Array(60), (_, i) => i + 1),
      2: Array.from(Array(6), (_, i) => i + 1),
      3: Array.from(Array(6), (_, i) => i + 1),
      4: Array.from(Array(16), (_, i) => i + 1),
   },
   DragonsEnvironment: {
      0: Array.from(Array(2), (_, i) => i + 1),
      1: Array.from(Array(62), (_, i) => i + 1),
      2: Array.from(Array(5), (_, i) => i + 1),
      3: Array.from(Array(5), (_, i) => i + 1),
      4: Array.from(Array(4), (_, i) => i + 1),
   },
   KDAEnvironment: {
      0: Array.from(Array(6), (_, i) => i + 1),
      1: Array.from(Array(5), (_, i) => i + 1),
      2: Array.from(Array(7), (_, i) => i + 1),
      3: Array.from(Array(9), (_, i) => i + 1),
      4: Array.from(Array(80), (_, i) => i + 1),
   },
   MonstercatEnvironment: {
      0: Array.from(Array(8), (_, i) => i + 1),
      1: Array.from(Array(7), (_, i) => i + 1),
      2: Array.from(Array(5), (_, i) => i + 1),
      3: Array.from(Array(5), (_, i) => i + 1),
      4: Array.from(Array(14), (_, i) => i + 1),
   },
   CrabRaveEnvironment: {
      0: Array.from(Array(8), (_, i) => i + 1),
      1: Array.from(Array(7), (_, i) => i + 1),
      2: Array.from(Array(5), (_, i) => i + 1),
      3: Array.from(Array(5), (_, i) => i + 1),
      4: Array.from(Array(14), (_, i) => i + 1),
   },
   PanicEnvironment: {
      0: Array.from(Array(2), (_, i) => i + 1),
      1: Array.from(Array(62), (_, i) => i + 1),
      2: Array.from(Array(7), (_, i) => i + 1),
      3: Array.from(Array(7), (_, i) => i + 1),
      4: Array.from(Array(6), (_, i) => i + 1),
   },
   RocketEnvironment: {
      0: Array.from(Array(11), (_, i) => i + 1),
      1: Array.from(Array(4), (_, i) => i + 1),
      2: Array.from(Array(7), (_, i) => i + 1),
      3: Array.from(Array(7), (_, i) => i + 1),
      4: Array.from(Array(5), (_, i) => i + 1),
   },
   GreenDayEnvironment: {
      0: Array.from(Array(16), (_, i) => i + 1),
      1: Array.from(Array(60), (_, i) => i + 1),
      2: Array.from(Array(6), (_, i) => i + 1),
      3: Array.from(Array(6), (_, i) => i + 1),
      4: Array.from(Array(3), (_, i) => i + 1),
   },
   GreenDayGrenadeEnvironment: {
      0: Array.from(Array(16), (_, i) => i + 1),
      2: Array.from(Array(6), (_, i) => i + 1),
      3: Array.from(Array(6), (_, i) => i + 1),
      4: Array.from(Array(3), (_, i) => i + 1),
   },
   TimbalandEnvironment: {
      0: Array.from(Array(20), (_, i) => i + 1),
      1: Array.from(Array(20), (_, i) => i + 1),
      2: Array.from(Array(10), (_, i) => i + 1),
      3: Array.from(Array(14), (_, i) => i + 1),
      4: Array.from(Array(6), (_, i) => i + 1),
   },
   FitBeatEnvironment: {
      0: Array.from(Array(30), (_, i) => i + 1),
      1: Array.from(Array(30), (_, i) => i + 1),
      2: Array.from(Array(8), (_, i) => i + 1),
      3: Array.from(Array(8), (_, i) => i + 1),
      4: Array.from(Array(2), (_, i) => i + 1),
   },
   LinkinParkEnvironment: {
      0: Array.from(Array(2), (_, i) => i + 1),
      1: Array.from(Array(16), (_, i) => i + 1),
      2: Array.from(Array(20), (_, i) => i + 1),
      3: Array.from(Array(20), (_, i) => i + 1),
      4: Array.from(Array(1), (_, i) => i + 1),
   },
   BTSEnvironment: {
      0: Array.from(Array(1), (_, i) => i + 1),
      1: Array.from(Array(20), (_, i) => i + 1),
      2: Array.from(Array(25), (_, i) => i + 1),
      3: Array.from(Array(25), (_, i) => i + 1),
      4: Array.from(Array(3), (_, i) => i + 1),
   },
   KaleidoscopeEnvironment: {
      0: Array.from(Array(40), (_, i) => i + 1),
      1: Array.from(Array(40), (_, i) => i + 1),
      2: Array.from(Array(20), (_, i) => i + 1),
      3: Array.from(Array(20), (_, i) => i + 1),
      4: Array.from(Array(80), (_, i) => i + 1),
   },
   InterscopeEnvironment: {
      0: Array.from(Array(3), (_, i) => i + 1),
      1: Array.from(Array(3), (_, i) => i + 1),
      2: Array.from(Array(3), (_, i) => i + 1),
      3: Array.from(Array(3), (_, i) => i + 1),
      4: Array.from(Array(3), (_, i) => i + 1),
      6: Array.from(Array(7), (_, i) => i + 1),
      7: Array.from(Array(7), (_, i) => i + 1),
   },
   SkrillexEnvironment: {
      0: Array.from(Array(2), (_, i) => i + 1),
      1: Array.from(Array(66), (_, i) => i + 1),
      2: Array.from(Array(23), (_, i) => i + 1),
      3: Array.from(Array(23), (_, i) => i + 1),
      4: Array.from(Array(66), (_, i) => i + 1),
      6: Array.from(Array(24), (_, i) => i + 1),
      7: Array.from(Array(24), (_, i) => i + 1),
   },
   // FIXME: Figure out light ID for these
   BillieEnvironment: {},
   HalloweenEnvironment: {},
   GagaEnvironment: {},
   WeaveEnvironment: {},
   PyroEnvironment: {},
   EDMEnvironment: {},
   TheSecondEnvironment: {},
   LizzoEnvironment: {},
   TheWeekndEnvironment: {},
   RockMixtapeEnvironment: {},
   Dragons2Environment: {},
   Panic2Environment: {},
   QueenEnvironment: {},
   GlassDesertEnvironment: {
      0: Array.from(Array(6), (_, i) => i + 1),
      1: Array.from(Array(8), (_, i) => i + 1),
      2: Array.from(Array(10), (_, i) => i + 1),
      3: Array.from(Array(10), (_, i) => i + 1),
   },
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
   bombs = [],
   arcs = [],
   chains = [],
) {
   const convertType = {
      0: global.params['Type 0'],
      1: global.params['Type 1'],
      2: global.params['Type 2'],
      3: global.params['Type 3'],
      4: global.params['Type 4'],
      6: global.params['Type 6'],
      7: global.params['Type 7'],
      10: global.params['Type 10'],
      11: global.params['Type 11'],
   };
   const colorKey = data.version.startsWith('3') ? 'color' : '_color';
   const lightIdKey = data.version.startsWith('3') ? 'lightID' : '_lightID';

   const fadeEnabled = global.params['Convert Fade'];
   const fadeDuration = Math.max(global.params['Fade Duration'], 0.1);
   const fadeStep = 1 / (Math.max(global.params['Fade Step (ms)'], 10) / 1000);
   const fadeBrightness = Math.max(global.params['Fade Brightness'], 1);
   const fadeEasing = Easings.mapped[global.params['Fade Easings']];
   const fixNoChroma = global.params['Fix No Chroma'];
   const schemeName = ColorScheme.EnvironmentSchemeName[data.environment];

   const songBPM = data.songBPM;

   const timeFromFade = (songBPM * fadeDuration) / 60;
   const maxStep = Math.floor(timeFromFade * fadeStep);

   const typeIncluded = Object.keys(environmentMap[data.environment])
      .filter((t) => convertType[t])
      .map((t) => parseInt(t));

   let eventSelected = events.filter((e) => e.selected);
   if (!eventSelected.length) {
      eventSelected = events;
   }
   eventSelected = eventSelected.filter((e) => typeIncluded.includes(e._type));

   for (let i = 0, len = eventSelected.length; i < len; i++) {
      const evt = eventSelected[i];
      if (
         !typeIncluded.includes(evt._type) ||
         (evt._customData && evt._customData[lightIdKey]) ||
         (evt._customData && evt._customData._lightGradient)
      ) {
         continue;
      }
      if (evt._customData) {
         // selected._customData = JSON.parse(
         //     JSON.stringify(selected._customData).replace(
         //         /}$/,
         //         ',"_lightID":'
         //     ) +
         //         JSON.stringify(
         //             environmentMap[environmentName][selected._type]
         //         ) +
         //         '}'
         // );
         evt._customData[lightIdKey] = environmentMap[data.environment][evt._type];
      } else {
         evt._customData = {
            [lightIdKey]: environmentMap[data.environment][evt._type],
         };
      }
      if (evt._value === 0 || isOn(evt)) {
         continue;
      }
      let wasFlash;
      if (isFlash(evt)) {
         wasFlash = true;
         evt._value = evt._value === 2 ? 1 : 5;
      }
      if (isFade(evt)) {
         evt._value = evt._value === 3 ? 1 : 5;
      }
      if (!fadeEnabled) {
         continue;
      }
      let finalTime = null;
      for (let j = i + 1; j < len; j++) {
         if (evt._time + timeFromFade < eventSelected[j]._time) {
            finalTime = evt._time + timeFromFade;
            break;
         }
         if (evt._type !== eventSelected[j]._type) {
            continue;
         }
         finalTime = Math.min(evt._time + timeFromFade, eventSelected[j]._time);
         break;
      }
      if (finalTime === null) {
         finalTime = evt._time + timeFromFade;
      }
      const maxCount = Math.floor((finalTime - evt._time) * fadeStep);
      let originalColor = evt._customData[colorKey];
      if (!originalColor) {
         if (fixNoChroma) {
            const color =
               ColorScheme.ColorScheme[schemeName][
                  evt._value === 1 ? '_envColorRight' : '_envColorLeft'
               ];
            originalColor = color ? color : [0, 0, 0];
         } else {
            continue;
         }
      }
      if (originalColor.length < 4) {
         originalColor.push(fadeBrightness);
      }
      evt._customData[colorKey] = originalColor;
      for (let j = 1; j <= maxCount; j++) {
         let currentColor = [...originalColor];
         currentColor[3] = Math.max(
            lerp(fadeEasing(normalize(j, 0, maxStep)), fadeBrightness, 0),
            0,
         );
         const temp = JSON.parse(JSON.stringify(evt));
         temp._time += j / fadeStep;
         temp._customData[colorKey] = currentColor;
         let stoprightthere;
         if (currentColor[3] < 1 && wasFlash) {
            currentColor[3] = 1;
            stoprightthere = true;
         }
         if (currentColor[3] < 1 && !stoprightthere) {
            for (let k = 0; k < 3; k++) {
               currentColor[k] = Math.max(lerp(1 - currentColor[3], currentColor[k], 0), 0);
            }
         }
         if (currentColor[3] <= 0) {
            currentColor[3] = 0;
            stoprightthere = true;
         }
         events.push(temp);
         if (stoprightthere) {
            break;
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
