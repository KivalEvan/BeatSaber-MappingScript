/**
 * @typedef {import('./types').IBaseObject} IBaseObject
 * @typedef {import('./types').ColorArray} ColorArray
 * @typedef {import('./types').INote} INote
 * @typedef {import('./types').IObstacle} IObstacle
 * @typedef {import('./types').IEvent} IEvent
 * @typedef {INote | IObstacle | IEvent} IChromaObject
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

const { normalize } = require('./kvlCore');
const { interpolateColor, HSVAtoRGBA } = require('./colors');

/**
 * Return objects at given time, adjusted by BPM change if provided.
 * ```ts
 * const notesHere = at(notes, 42);
 * console.log(...notesHere);
 * ```
 * @template {IBaseObject} T
 * @param {T[]} objects
 * @param {number | number[]} times
 * @returns {T[]}
 */
function at(objects, times) {
    if (Array.isArray(times)) {
        return objects.filter((o) => times.some((time) => o._time === time));
    }
    return objects.filter((o) => o._time === times);
}

/**
 * Return objects at given time range, adjusted by BPM change if provided.
 * ```ts
 * const notesRange = between(notes, 42, 69);
 * console.log(...notesRange);
 * ```
 * @template {IBaseObject} T
 * @param {T[]} objects
 * @param {number} from
 * @param {number} to
 * @returns {T[]}
 */
function between(objects, from, to) {
    return objects.filter((o) => o._time >= from && o._time <= to);
}

/**
 * Query function on class object array.
 * ```ts
 * const notesFilter = where(notes, { include: { x: 2, y: [1, 0] }, exclude: { customData: ['color'] } });
 * console.log(...notesFilter);
 * ```
 * @template {IBaseObject} T
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
            let result = true;
            for (const key in filter.exclude) {
                const value = filter.exclude[key];
                if (key === '_customData') {
                    if (o[key]) {
                        result = value.some((p) => Object.keys(o[key]).includes(p));
                        if (!result) {
                            break;
                        }
                    } else {
                        continue;
                    }
                }
                if (Array.isArray(value)) {
                    result = !value.some((p) => o[key] === p);
                } else {
                    result = !(o[key] === value);
                }
                if (!result) {
                    break;
                }
            }
            return result;
        });
}

/**
 * @param {ColorArray} cArr
 * @param {number} [mult=1]
 * @returns {ColorArray}
 */
function multiplyColor(cArr, mult = 1) {
    return [...cArr].map((c, i) => {
        if (i === 2) {
            return c * mult;
        }
        return c;
    });
}

/**
 * @param {ColorArray} cArr
 * @param {number} [mult=1]
 * @param {'rgba'|'hsva'} [type='hsva']
 * @returns {ColorArray}
 */
function saturateColor(cArr, mult = 1, type = 'hsva') {
    if (type === 'hsva') {
        cArr[1] *= mult;
        return cArr;
    }
    return [...cArr].map((c, i) => {
        if (i === 1) {
            return c * mult;
        }
        return c;
    });
}

/**
 * @param {IChromaObject[]} objects
 * @param {ColorArray} color
 * @param {'rgba'|'hsva'} [type='hsva']
 * @returns {void}
 */
function setColor(objects, color, type = 'hsva') {
    color = type === 'hsva' ? HSVAtoRGBA(...color) : color;
    for (let i = 0, l = objects.length; i < l; i++) {
        if (objects[i]._customData) {
            objects[i]._customData._color = color;
        } else {
            objects[i]._customData = { _color: color };
        }
    }
}

/**
 * @param {IChromaObject[]} objects
 * @param {ColorArray} startColor
 * @param {ColorArray} endColor
 * @param {'rgba'|'hsva'} [type='hsva']
 * @returns {void}
 */
function setGradientColor(objects, startColor, endColor, type = 'hsva') {
    let norm = 0;
    for (let i = 0, l = objects.length; i < l; i++) {
        norm = normalize(objects[i]._time, objects[0]._time, objects[l - 1]._time);
        const color = interpolateColor(startColor, endColor, norm, type);
        if (objects[i]._customData) {
            objects[i]._customData._color = color;
        } else {
            objects[i]._customData = { _color: color };
        }
    }
}

/**
 * @param {IChromaObject[]} objects
 * @param {ColorArray} color1
 * @param {ColorArray} color2
 * @param {'rgba'|'hsva'} [type='hsva']
 * @returns {void}
 */
function randomizeColor(objects, color1, color2, type = 'hsva') {
    let random = 0;
    for (let i = 0, l = objects.length; i < l; i++) {
        random = Math.random();
        let color = interpolateColor(color1, color2, random, type);
        if (objects[i]._customData) {
            objects[i]._customData._color = color;
        } else {
            objects[i]._customData = { _color: color };
        }
    }
}

/**
 * @param {IChromaObject[]} objects
 * @param {ColorArray} color1
 * @param {ColorArray} color2
 * @param {'rgba'|'hsva'} [type='hsva']
 * @returns {void}
 */
function randomizeColorStack(objects, color1, color2, type = 'hsva') {
    let random = 0;
    let prevTime = 0;
    for (let i = 0, l = objects.length; i < l; i++) {
        if (objects[i]._time > prevTime + 0.001) {
            random = Math.random();
        }
        let color = interpolateColor(color1, color2, random, type);
        if (objects[i]._customData) {
            objects[i]._customData._color = color;
        } else {
            objects[i]._customData = { _color: color };
        }
        prevTime = objects[i]._time;
    }
}

/**
 * @param {IChromaObject[]} objects
 * @param {number} alpha
 * @returns {void}
 */
function setAlpha(objects, alpha) {
    for (let i = 0, l = objects.length; i < l; i++) {
        if (objects[i]._customData && objects[i]._customData._color) {
            if (objects[i]._customData._color.length === 3) {
                objects[i]._customData._color.push(alpha);
            } else {
                objects[i]._customData._color[3] = alpha;
            }
        }
    }
}

module.exports = {
    at,
    between,
    where,
    multiplyColor,
    saturateColor,
    setColor,
    setGradientColor,
    randomizeColor,
    randomizeColorStack,
    setAlpha,
};
