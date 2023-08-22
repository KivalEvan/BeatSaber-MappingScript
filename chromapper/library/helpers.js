// @ts-check
/**
 * @typedef {import('./types/colors').ColorArray} ColorArray
 * @typedef {import('./types/beatmap/v2/object').IBaseObject} IBaseObject
 * @typedef {import('./types/beatmap/v3/baseObject').IBaseObject} IBaseObjectV3
 * @typedef {import('./types/beatmap/v2/note').INote} INote
 * @typedef {import('./types/beatmap/v2/obstacle').IObstacle} IObstacle
 * @typedef {import('./types/beatmap/v2/event').IEvent} IEvent
 * @typedef {import('./types/beatmap/v3/colorNote').IColorNote} IColorNote
 * @typedef {import('./types/beatmap/v3/bombNote').IBombNote} IBombNote
 * @typedef {import('./types/beatmap/v3/arc').IArc} IArc
 * @typedef {import('./types/beatmap/v3/chain').IChain} IChain
 * @typedef {import('./types/beatmap/v3/obstacle').IObstacle} IObstacleV3
 * @typedef {import('./types/beatmap/v3/basicEvent').IBasicEvent} IBasicEvent
 * @typedef {INote | IObstacle | IEvent} IChromaObjectV2
 * @typedef {IColorNote | IBombNote | IArc | IChain | IObstacleV3 | IBasicEvent} IChromaObjectV3
 */

/**
 * @template {Object} T
 * @typedef {{[P in keyof T]?: T[P] extends {} ? T[P] | T[P][] : string[]}} FilterTypeChange
 */

/**
 * @template {Object} T
 * @typedef {Object} IFilter
 * @property {FilterTypeChange<T>} [include]
 * @property {FilterTypeChange<T>} [exclude]
 */

const { normalize, clamp } = require('./kvlUtils.js');
const { interpolateColor, HsvaToRgba } = require('./colors.js');

/**
 * Return objects at given time, adjusted by BPM change if provided.
 * ```ts
 * const notesHere = at(notes, 42);
 * console.log(...notesHere);
 * ```
 * @template {IBaseObject | IBaseObjectV3} T
 * @param {T[]} objects
 * @param {number | number[]} times
 * @returns {T[]}
 */
function at(objects, times) {
   if (Array.isArray(times)) {
      return objects.filter((o) =>
         // @ts-ignore
         times.some((time) => o._time === time),
      );
   }
   // @ts-ignore
   return objects.filter((o) => o._time === times);
}

/**
 * Return objects at given time range, adjusted by BPM change if provided.
 * ```ts
 * const notesRange = between(notes, 42, 69);
 * console.log(...notesRange);
 * ```
 * @template {IBaseObject | IBaseObjectV3} T
 * @param {T[]} objects
 * @param {number} from
 * @param {number} to
 * @returns {T[]}
 */
function between(objects, from, to) {
   return objects.filter(
      (o) =>
         // @ts-ignore
         o._time >= from && o._time <= to,
   );
}

/**
 * Query function on class object array.
 * ```ts
 * const notesFilter = where(notes, { include: { x: 2, y: [1, 0] }, exclude: { customData: ['color'] } });
 * console.log(...notesFilter);
 * ```
 * @template {IBaseObject | IBaseObjectV3} T
 * @param {T[]} objects
 * @param {IFilter<T>} [filter={}]
 * @returns {T[]}
 */
function where(objects, filter = {}) {
   return objects
      .filter((o) => {
         let result = false;
         for (const key in filter.include) {
            const value = filter.include[key];
            if (key === '_customData') {
               if (o[key]) {
                  // @ts-ignore
                  result = value.some((p) => Object.keys(o[key]).includes(p));
                  if (result) {
                     break;
                  }
               } else {
                  continue;
               }
            }
            if (Array.isArray(value)) {
               result = value.some((p) => o[key] === p);
            } else {
               result = o[key] === value;
            }
            if (result) {
               break;
            }
         }
         return result;
      })
      .filter((o) => {
         let result = false;
         for (const key in filter.exclude) {
            const value = filter.exclude[key];
            if (key === '_customData') {
               if (o[key]) {
                  // @ts-ignore
                  result = value.some((p) => Object.keys(o[key]).includes(p));
                  if (result) {
                     break;
                  }
               } else {
                  continue;
               }
            }
            if (Array.isArray(value)) {
               result = value.some((p) => o[key] === p);
            } else {
               result = o[key] === value;
            }
            if (result) {
               break;
            }
         }
         return !result;
      });
}

/**
 * Parse string representation of color to color array.
 * ```ts
 * const color = parseStringColor('90,1,0.5'); // [90, 1, 0.5, 1]
 * ```
 * @param {string} str
 * @returns {Required<ColorArray> | null}
 */
function parseStringColor(str) {
   const ary = str.split(',').map((el) => parseFloat(el));
   if (ary.length > 2) {
      if (ary.length === 3) {
         ary.push(1);
      }
   } else {
      return null;
   }
   if (ary.some((n) => isNaN(n))) {
      return null;
   }
   return /** @type {Required<ColorArray>}*/ (ary);
}

/**
 * @param {IChromaObjectV2[]} objects
 * @param {ColorArray} color
 * @param {'rgba'|'hsva'} [type='hsva']
 * @returns {void}
 */
function v2SetColor(objects, color, type = 'hsva') {
   color = type === 'hsva' ? HsvaToRgba(color) : color;
   for (let i = 0, l = objects.length; i < l; i++) {
      const obj = objects[i];
      if (obj._customData) {
         obj._customData._color = color;
      } else {
         obj._customData = { _color: color };
      }
   }
}

/**
 * @param {IChromaObjectV2[]} objects
 * @param {ColorArray} startColor
 * @param {ColorArray} endColor
 * @param {'rgba'|'hsva'} [type='hsva']
 * @returns {void}
 */
function v2SetGradientColor(objects, startColor, endColor, type = 'hsva') {
   let norm = 0;
   for (let i = 0, l = objects.length; i < l; i++) {
      const obj = objects[i];
      norm = normalize(obj._time, objects[0]._time, objects[l - 1]._time);
      const color = interpolateColor(startColor, endColor, norm, type);
      if (obj._customData) {
         obj._customData._color = color;
      } else {
         obj._customData = { _color: color };
      }
   }
}

/**
 * @param {IChromaObjectV2[]} objects
 * @param {ColorArray} color1
 * @param {ColorArray} color2
 * @param {'rgba'|'hsva'} [type='hsva']
 * @returns {void}
 */
function v2RandomizeColor(objects, color1, color2, type = 'hsva') {
   let random = 0;
   for (let i = 0, l = objects.length; i < l; i++) {
      const obj = objects[i];
      random = Math.random();
      let color = interpolateColor(color1, color2, random, type);
      if (obj._customData) {
         obj._customData._color = color;
      } else {
         obj._customData = { _color: color };
      }
   }
}

/**
 * @param {IChromaObjectV2[]} objects
 * @param {ColorArray} color1
 * @param {ColorArray} color2
 * @param {'rgba'|'hsva'} [type='hsva']
 * @returns {void}
 */
function v2RandomizeColorStack(objects, color1, color2, type = 'hsva') {
   let random = 0;
   let prevTime = 0;
   for (let i = 0, l = objects.length; i < l; i++) {
      const obj = objects[i];
      if (obj._time > prevTime + 0.001) {
         random = Math.random();
      }
      let color = interpolateColor(color1, color2, random, type);
      if (obj._customData) {
         obj._customData._color = color;
      } else {
         obj._customData = { _color: color };
      }
      prevTime = obj._time;
   }
}

module.exports = {
   at,
   between,
   where,
   parseStringColor,
   v2SetColor,
   v2SetGradientColor,
   v2RandomizeColor,
   v2RandomizeColorStack,
};
