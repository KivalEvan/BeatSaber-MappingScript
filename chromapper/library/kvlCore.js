/**
 * @typedef {import('./types').EasingFunction} EasingFunction
 */

/**
 * Generate random number.
 * @param {number} min
 * @param {number} max
 * @param {boolean} [round=false]
 * @returns {number}
 */
function random(min, max, round = false) {
    [min, max] = fixRange(min, max);
    const result = Math.random() * (max - min) + min;
    return round ? Math.round(result) : result;
}

/**
 * @param {number} min
 * @param {number} max
 * @param {boolean} [inverse]
 * @returns {[number, number]}
 */
function fixRange(min, max, inverse) {
    if (min < max && inverse) {
        return [max, min];
    }
    if (min > max) {
        return [min, max];
    }
    return [min, max];
}

/**
 * @param {number} num
 * @param {number} [d=0]
 * @returns {number}
 */
function round(num, d = 0) {
    return Math.round(num * Math.pow(10, d)) / Math.pow(10, d);
}

/**
 * @param {number} rad
 * @returns {number}
 */
function radToDeg(rad) {
    return rad * (180 / Math.PI);
}

/**
 * @param {number} deg
 * @returns {number}
 */
function degToRad(deg) {
    return deg * (Math.PI / 180);
}

/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function clamp(value, min, max) {
    return Math.min(Math.max(min, value), max);
}

/**
 * Normalize value to 0-1 from given min and max value.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function normalize(value, min, max) {
    if (min >= max) {
        return 1;
    }
    const result = (value - min) / (max - min);
    return result;
}

/**
 * Linear interpolate between start to end time given alpha value.
 * @param {number} alpha must be around 0-1.
 * @param {number} start
 * @param {number} end
 * @param {EasingFunction} [easing]
 * @returns {number}
 */
function lerp(alpha, start, end, easing) {
    if (!easing) {
        easing = (x) => x;
    }
    const result = start + (end - start) * easing(alpha);
    return result;
}

/**
 * Fisher–Yates shuffle algorithm.
 * @param {*[]} array
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * @param {number[]} param0
 * @param {number[]} [ys=[]]
 * @returns {number[]}
 */
function interleave([x, ...xs], ys = []) {
    return x === undefined
        ? ys // base: no x
        : [x, ...interleave(ys, xs)]; // inductive: some x
}

/**
 * Simple deep copy JSON object or JSON array.
 * @template {Object|Array<Object>} T
 * @param {T} object
 * @returns {T}
 * Works best with only primitive objects.
 */
function deepCopy(object) {
    return JSON.parse(JSON.stringify(object));
}

/**
 * @param {string} hex
 * @returns {boolean}
 */
function isHex(hex) {
    return /[a-fA-F0-9]*/g.test(hex);
}

module.exports = {
    random,
    fixRange,
    round,
    radToDeg,
    degToRad,
    clamp,
    normalize,
    lerp,
    shuffle,
    interleave,
    deepCopy,
    isHex,
};
