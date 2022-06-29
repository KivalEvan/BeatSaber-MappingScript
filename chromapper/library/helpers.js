/**
 * @typedef {import('./types').IBaseObject} IBaseObject
 * @typedef {import('./types').ColorArray} ColorArray
 * @typedef {import('./types').INote} INote
 * @typedef {import('./types').IObstacle} IObstacle
 * @typedef {import('./types').IEvent} IEvent
 * @typedef {INote | IObstacle | IEvent} IChromaObject
 */

/** Return objects at given time, adjusted by BPM change if provided.
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

/** Return objects at given time range, adjusted by BPM change if provided.
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

/** Query function on class object array.
 * ```ts
 * const notesFilter = where(notes, { include: { x: 2, y: [1, 0] }, exclude: { customData: ['color'] } });
 * console.log(...notesFilter);
 * ```
 * @template {IBaseObject} T
 * @param {T[]} objects
 * @param {*} [filter={}]
 * @returns {T[]}
 */
function where(objects, filter = {}) {
    return objects.filter((o) => {
        let result = false;
        for (const key in filter.include) {
            const value = filter.include[key];
            if (key === 'customData' || key === '_customData') {
                if (o.data[key]) {
                    result = value.some((p) => Object.keys(o.data[key]).includes(p));
                    if (result) {
                        break;
                    }
                } else {
                    continue;
                }
            }
            if (Array.isArray(value)) {
                result = value.some((p) => o.data[key] === p);
            } else {
                result = o.data[key] === value;
            }
            if (result) {
                break;
            }
        }
        for (const key in filter.exclude) {
            const value = filter.exclude[key];
            if (key === 'customData' || key === '_customData') {
                if (o.data[key]) {
                    result = value.some((p) => Object.keys(o.data[key]).includes(p));
                    if (!result) {
                        break;
                    }
                } else {
                    continue;
                }
            }
            if (Array.isArray(value)) {
                result = !value.some((p) => o.data[key] === p);
            } else {
                result = !(o.data[key] === value);
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
 * @param {number} mult
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
 * @param {number} mult
 * @returns {ColorArray}
 */
function saturateColor(cArr, mult = 1) {
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
 * @returns {void}
 */
function setColor(objects, color) {
    for (let i = 0, l = obj.length; i < l; i++) {
        obj[i]._customData = { _color: HSVAtoRGBA(...color) };
    }
}

/**
 * @param {IChromaObject[]} objects
 * @param {ColorArray} startColor
 * @param {ColorArray} endColor
 * @returns {void}
 */
function setGradientColor(objects, startColor, endColor) {
    let norm = 0;
    for (let i = 0, l = obj.length; i < l; i++) {
        norm = normalize(obj[i]._time, obj[0]._time, obj[l - 1]._time);
        let color = interpolateColor(color1, color2, norm);
        obj[i]._customData = { _color: color };
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
};
