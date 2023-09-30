// @ts-check
/**
 * @typedef {import('./types/easings').EasingFunction} EasingFunction
 * @typedef {import('./types/vector').Vector2} Vector2
 * @typedef {import('./types/vector').Vector3} Vector3
 * @typedef {import('./types/vector').Vector4} Vector4
 * @typedef {import('./types/vector').Vector2Object} Vector2Object
 * @typedef {import('./types/vector').Vector3Object} Vector3Object
 * @typedef {import('./types/vector').Vector4Object} Vector4Object
 * @typedef {Partial<Vector2Object> | Partial<Vector3Object> | Partial<Vector4Object>} VectorObject
 */

/** Return number in formatted number string.
 * ```ts
 * console.log(formatNumber(12345678)) // 12,345,678
 * ```
 * @param {number} num
 * @returns {string}
 */
function formatNumber(num) {
   return num
      .toString()
      .split('.')
      .map((str, i) => (i ? str : str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')))
      .join('.');
}

// Randomly generate seed if not provided.
const _seed = { ref: hashCode(Math.random()) };

/** Mulberry32 algorithm.
 *
 * shamelessly taken from stackoverflow
 * @param {number | {ref: number}} seed
 * @returns {() => number}
 */
function _pRandom(seed) {
   const _s = typeof seed === 'number' ? { ref: seed } : seed;
   return function () {
      let s = (_s.ref += 0x6d2b79f5);
      s = Math.imul(s ^ (s >>> 15), s | 1);
      s ^= s + Math.imul(s ^ (s >>> 7), s | 61);
      return ((s ^ (s >>> 14)) >>> 0) / 4294967296;
   };
}
const _instPRandom = _pRandom(_seed);

/**
 * @param {number | boolean} [min]
 * @param {number | boolean} [max]
 * @param {number | boolean} [rounding]
 * @param {() => number} [func]
 * @returns {number}
 */
function _random(min, max, rounding = false, func = Math.random) {
   if (typeof min === 'boolean' || (!min && typeof min !== 'number')) {
      if (min) {
         return Math.round(func());
      }
      return func();
   }
   if (typeof max === 'boolean' || (!max && typeof max !== 'number')) {
      let result = func() * min;
      if (max) {
         result = Math.round(result);
      }
      return result;
   }
   [min, max] = fixRange(min, max);
   const result = func() * (max - min) + min;
   return rounding
      ? round(result, typeof rounding === 'number' && rounding > 0 ? rounding : 0)
      : result;
}

/** Seeded pseudorandom generator.
 *
 * Based on Mulberry32 PRNG algorithm.
 *
 * **NOTE:** This is globally scoped, any random call elsewhere will affect the consequent call. Consider creating instance of pseudorandom with `pRandomFn` if you need consistency across usage. Reset the random seed to retain same randomness if needed.
 *
 * **WARNING:** This is not meant to be used for security, rather quick and simple for pseudorandom purpose.
 * @param {number | boolean} [min]
 * @param {number | boolean} [max]
 * @param {number | boolean} [rounding]
 * @returns {number}
 */
function pRandom(min, max, rounding = false) {
   return _random(min, max, rounding, _instPRandom);
}

/** Create instance of pseudorandom function.
 * ```ts
 * const pRandom = pRandomFn('seed');
 * console.log(pRandom());
 * ```
 * **NOTE:** Seed cannot be reset.
 * @param {string | number | bigint} [seed]
 * @returns
 */
function pRandomFn(seed = Math.random()) {
   const _seed = hashCode(seed);
   const _func = _pRandom(_seed);
   return function (min, max, rounding = false) {
      return _random(min, max, rounding, _func);
   };
}

/** Set seed for pseudorandom generator.
 *
 * Recalling this resets the seed.
 *
 * If this is never called, defaults to randomly generated seed.
 * @param {string | number | bigint} seed
 */
function pRandomSeed(seed) {
   _seed.ref = hashCode(seed);
}

/** Random number generator using built-in JS Math.
 * @param {number | boolean} [min]
 * @param {number | boolean} [max]
 * @param {number | boolean} [rounding]
 * @returns {number}
 */
function random(min, max, rounding = false) {
   return _random(min, max, rounding, Math.random);
}

/** Return number tuple in order.
 * @param {number} min
 * @param {number} max
 * @param {boolean} [inverse]
 * @returns {[number, number]}
 */
function fixRange(min, max, inverse) {
   if (!inverse && min > max) {
      return [max, min];
   }
   if (inverse && min < max) {
      return [max, min];
   }
   return [min, max];
}

function round(num, d = 0) {
   return Math.round(num * Math.pow(10, d)) / Math.pow(10, d);
}

/** Generate 32-bit hash with Java implementation.
 *
 * Internally converts primitives to string.
 * @param {number | string | bigint} str
 * @returns {number}
 */
function hashCode(str) {
   str = str.toString();
   let hash = 0;
   for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
   }
   return hash;
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
 * @param {number} from
 * @param {number} to
 * @param {EasingFunction} [easing]
 * @returns {number}
 */
function lerp(alpha, from, to, easing) {
   if (!easing) easing = (x) => x;
   return from + (to - from) * easing(alpha);
}

/**
 * Linear interpolate between start to end time given alpha value.
 * @param {number} value must be around 0-1.
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
function invLerp(value, from, to) {
   return (value - from) / (to - from);
}

/** Remap the value from original range to target range.
 * ```ts
 * const num = remap(6, 4, 8, 40, 60); // returns 50
 * ```
 * @param {number} value
 * @param {number} origFrom
 * @param {number} origTo
 * @param {number} targetFrom
 * @param {number} targetTo
 * @returns {number}
 */
function remap(value, origFrom, origTo, targetFrom, targetTo) {
   const alpha = invLerp(value, origFrom, origTo);
   return lerp(alpha, targetFrom, targetTo);
}

/** Check float number close to another float.
 * @param {number} value
 * @param {number} compareTo
 * @param {number} [tolerance]
 * @returns {boolean}
 */
function equalNear(value, compareTo, tolerance = Number.EPSILON) {
   return Math.abs(value - compareTo) <= tolerance;
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
 * @template {*} T
 * @param {T[]} ary
 * @param {() => number} fn
 * @returns {T}
 */
function pickRandom(ary, fn = Math.random) {
   return ary[Math.floor(fn() * ary.length)];
}

/**
 * Simple deep copy JSON object or JSON array.
 * @template {any} T
 * @param {T} object
 * @returns {T}
 * Works best with only primitive objects.
 */
function deepCopy(object) {
   if (typeof object !== 'object' || typeof object === null || typeof object === undefined) {
      return object;
   }
   return JSON.parse(JSON.stringify(object));
}

/**
 * @param {string} hex
 * @returns {boolean}
 */
function isHex(hex) {
   return /^[a-fA-F0-9]+$/g.test(hex);
}

/**
 * @param {string} hex
 * @returns {number}
 */
function hexToDec(hex) {
   return parseInt(hex, 16);
}

/**
 * @param {number} val
 * @returns {string}
 */
function decToHex(val) {
   const hex = val.toString(16);
   return hex;
}

/**
 * @param {unknown} obj
 * @returns {obj is Vector2}
 */
function isVector2(obj) {
   return Array.isArray(obj) && obj.every((n) => typeof n === 'number') && obj.length === 2;
}

/**
 * @param {unknown} obj
 * @returns {obj is Vector3}
 */
function isVector3(obj) {
   return Array.isArray(obj) && obj.every((n) => typeof n === 'number') && obj.length === 3;
}

/**
 * @param {unknown} obj
 * @returns {obj is Vector4}
 */
function isVector4(obj) {
   return Array.isArray(obj) && obj.every((n) => typeof n === 'number') && obj.length === 4;
}

/**
 * @overload
 * @param {Vector2} [vec]
 * @param {VectorObject} [value]
 * @returns {Vector2}
 *
 * @overload
 * @param {Vector3} [vec]
 * @param {VectorObject} [value]
 * @returns {Vector3}
 *
 * @overload
 * @param {Vector4} [vec]
 * @param {VectorObject} [value]
 * @returns {Vector4}
 *
 * @template {Vector2 | Vector3 | Vector4 | number[]} T
 * @param {T} [vec]
 * @param {number | T | VectorObject} [value]
 * @returns {T | undefined}
 */
function vectorAdd(vec, value) {
   if (!vec) return vec;
   if (typeof value === 'number') return /** @type {T} */ (vec.map((v) => v + value));
   if (value) {
      if (Array.isArray(value)) {
         for (let i = 0; i < vec.length; i++) {
            if (typeof value[i] === 'number') {
               vec[i] += value[i];
            }
         }
      } else {
         switch (vec.length) {
            case 4:
               vec[3] =
                  vec[3] + /** @type {number} */ (/** @type {Vector4Object} */ (value).w ?? 1);
            case 3:
               vec[2] =
                  vec[2] + /** @type {number} */ (/** @type {Vector3Object} */ (value).z ?? 1);
            case 2:
               vec[1] = vec[1] + (value.y ?? 0);
               vec[0] = vec[0] + (value.x ?? 0);
         }
      }
   }
   return vec;
}

/**
 * @overload
 * @param {Vector2} [vec]
 * @param {VectorObject} [value]
 * @returns {Vector2}
 *
 * @overload
 * @param {Vector3} [vec]
 * @param {VectorObject} [value]
 * @returns {Vector3}
 *
 * @overload
 * @param {Vector4} [vec]
 * @param {VectorObject} [value]
 * @returns {Vector4}
 *
 * @template {Vector2 | Vector3 | Vector4 | number[]} T
 * @param {T} [vec]
 * @param {number | T | VectorObject} [value]
 * @returns {T | undefined}
 */
function vectorSub(vec, value) {
   if (!vec) return vec;
   if (typeof value === 'number') return /** @type {T}*/ (vec.map((v) => v - value));
   if (value) {
      if (Array.isArray(value)) {
         for (let i = 0; i < vec.length; i++) {
            if (typeof value[i] === 'number') {
               vec[i] -= value[i];
            }
         }
      } else {
         switch (vec.length) {
            case 4:
               vec[3] =
                  vec[3] - /** @type {number} */ (/** @type {Vector4Object} */ (value).w ?? 1);
            case 3:
               vec[2] =
                  vec[2] - /** @type {number} */ (/** @type {Vector3Object} */ (value).z ?? 1);
            case 2:
               vec[1] = vec[1] - (value.y ?? 0);
               vec[0] = vec[0] - (value.x ?? 0);
         }
      }
   }
   return vec;
}

/**
 * @overload
 * @param {Vector2} [vec]
 * @param {VectorObject} [value]
 * @returns {Vector2}
 *
 * @overload
 * @param {Vector3} [vec]
 * @param {VectorObject} [value]
 * @returns {Vector3}
 *
 * @overload
 * @param {Vector4} [vec]
 * @param {VectorObject} [value]
 * @returns {Vector4}
 *
 * @template {Vector2 | Vector3 | Vector4 | number[]} T
 * @param {T} [vec]
 * @param {number | T | VectorObject} [value]
 * @returns {T | undefined}
 */
function vectorMul(vec, value) {
   if (!vec) return vec;
   if (typeof value === 'number') return /** @type {T}*/ (vec.map((v) => v * value));
   if (value) {
      if (Array.isArray(value)) {
         for (let i = 0; i < vec.length; i++) {
            if (typeof value[i] === 'number') {
               vec[i] *= value[i];
            }
         }
      } else {
         switch (vec.length) {
            case 4:
               vec[3] =
                  vec[3] * /** @type {number} */ (/** @type {Vector4Object} */ (value).w ?? 1);
            case 3:
               vec[2] =
                  vec[2] * /** @type {number} */ (/** @type {Vector3Object} */ (value).z ?? 1);
            case 2:
               vec[1] = vec[1] * (value.y ?? 1);
               vec[0] = vec[0] * (value.x ?? 1);
         }
      }
   }
   return vec;
}

/**
 * @overload
 * @param {Vector2} [vec]
 * @param {VectorObject} [value]
 * @returns {Vector2}
 *
 * @overload
 * @param {Vector3} [vec]
 * @param {VectorObject} [value]
 * @returns {Vector3}
 *
 * @overload
 * @param {Vector4} [vec]
 * @param {VectorObject} [value]
 * @returns {Vector4}
 *
 * @template {Vector2 | Vector3 | Vector4 | number[]} T
 * @param {T} [vec]
 * @param {number | T | VectorObject} [value]
 * @returns {T | undefined}
 */
function vectorDiv(vec, value) {
   if (!vec) return vec;
   if (typeof value === 'number') return /** @type {T}*/ (vec.map((v) => v / value));
   if (value) {
      if (Array.isArray(value)) {
         for (let i = 0; i < vec.length; i++) {
            if (typeof value[i] === 'number') {
               vec[i] /= value[i];
            }
         }
      } else {
         switch (vec.length) {
            case 4:
               vec[3] =
                  vec[3] / /** @type {number} */ (/** @type {Vector4Object} */ (value).w ?? 1);
            case 3:
               vec[2] =
                  vec[2] / /** @type {number} */ (/** @type {Vector3Object} */ (value).z ?? 1);
            case 2:
               vec[1] = vec[1] / (value.y ?? 1);
               vec[0] = vec[0] / (value.x ?? 1);
         }
      }
   }
   return vec;
}
vectorDiv();

module.exports = {
   formatNumber,
   pRandom,
   pRandomFn,
   pRandomSeed,
   random,
   hashCode,
   fixRange,
   round,
   radToDeg,
   degToRad,
   clamp,
   normalize,
   lerp,
   invLerp,
   remap,
   equalNear,
   shuffle,
   interleave,
   pickRandom,
   deepCopy,
   isHex,
   hexToDec,
   decToHex,
   isVector2,
   isVector3,
   isVector4,
   vectorAdd,
   vectorSub,
   vectorMul,
   vectorDiv,
};
