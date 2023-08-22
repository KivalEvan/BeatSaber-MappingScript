// @ts-check
/**
 * @typedef {import('./types/easings').EasingFunction} EasingFunction
 * @typedef {import('./types/colors').ColorObject} ColorObject
 * @typedef {import('./types/colors').ColorArray} ColorArray
 * @typedef {import('./types/colors').ColorType} ColorType
 * @typedef {import('./types/colors').ColorInput} ColorInput
 * @typedef {import('./types/colors').IColor} IColor
 */

const { lerp, round, isHex, hexToDec } = require('./kvlUtils.js');

/**
 * Convert RGBA value to HSVA array.
 * @overload
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} [a=1]
 * @returns {ColorArray}
 *
 * @overload
 * @param {ColorArray} color
 * @returns {ColorArray}
 *
 * @param {number | ColorArray} r
 * @param {number} g
 * @param {number} b
 * @param {number} [a=1]
 * @returns {ColorArray}
 */
function RgbaToHsva(r, g, b, a = 1) {
   if (Array.isArray(r)) {
      // @ts-ignore
      return RgbaToHsva(...r);
   }
   let h = 0;
   const max = Math.max(r, g, b);
   const min = Math.min(r, g, b);
   const d = max - min;
   const s = max === 0 ? 0 : d / max;
   const v = max;

   switch (max) {
      case min:
         h = 0;
         break;
      case r:
         h = g - b + d * (g < b ? 6 : 0);
         h /= 6 * d;
         break;
      case g:
         h = b - r + d * 2;
         h /= 6 * d;
         break;
      case b:
         h = r - g + d * 4;
         h /= 6 * d;
         break;
   }
   /** @type {ColorArray} */
   const result = [h * 360, s, v];
   if (typeof a === 'number') result.push(a);
   return result;
}

/**
 * Convert HSVA value to RGBA array.
 * @overload
 * @param {number} hue
 * @param {number} saturation
 * @param {number} value
 * @param {number} [alpha=1]
 * @returns {ColorArray}
 *
 * @overload
 * @param {ColorArray} color
 * @returns {ColorArray}
 *
 * @param {number | ColorArray} hue
 * @param {number} saturation
 * @param {number} value
 * @param {number} [alpha=1]
 * @returns {ColorArray}
 */
function HsvaToRgba(hue, saturation, value, alpha = 1) {
   if (Array.isArray(hue)) {
      // @ts-ignore
      return HsvaToRgba(...hue);
   }
   hue = hue / 360;
   if (hue < 0) {
      hue += Math.abs(Math.floor(hue));
   }
   let r = 0,
      g = 0,
      b = 0;
   const i = Math.floor(hue * 6);
   const f = hue * 6 - i;
   const p = value * (1 - saturation);
   const q = value * (1 - f * saturation);
   const t = value * (1 - (1 - f) * saturation);
   switch (i % 6) {
      case 0:
         (r = value), (g = t), (b = p);
         break;
      case 1:
         (r = q), (g = value), (b = p);
         break;
      case 2:
         (r = p), (g = value), (b = t);
         break;
      case 3:
         (r = p), (g = q), (b = value);
         break;
      case 4:
         (r = t), (g = p), (b = value);
         break;
      case 5:
         (r = value), (g = p), (b = q);
         break;
   }
   /** @type {ColorArray} */
   const result = [r, g, b];
   if (typeof alpha === 'number') result.push(alpha);
   return result;
}

/**
 * Interpolate between colors and returns RGBA array.
 * ```ts
 * const rgba = interpolateColor([90, 1, 1], [180, 1, 1], 0.5, 'hsva');
 * ```
 * @param {ColorObject | ColorArray | string} colorStart
 * @param {ColorObject | ColorArray | string} colorEnd
 * @param {number} alpha
 * @param {ColorType} [type='rgba']
 * @param {EasingFunction} [easing=easing.Linear]
 * @returns {ColorArray}
 */
function interpolateColor(colorStart, colorEnd, alpha, type = 'rgba', easing = (x) => x) {
   if (!easing) {
      easing = (x) => {
         return x;
      };
   }
   const fixType = type === 'rgba255' ? 'rgba' : type;
   const cStart = convertColorType(colorStart, fixType, fixType);
   const cEnd = convertColorType(colorEnd, fixType, fixType);
   if (cStart.length === 3) cStart.push(1);
   if (cEnd.length === 3) cEnd.push(1);
   switch (fixType) {
      case 'hsva': {
         return HsvaToRgba(
            .../** @type {ColorArray}*/ (
               cStart.map((c, i) => {
                  if (!(typeof c === 'number')) {
                     return 1;
                  }
                  const cE = cEnd[i] ?? c;
                  return lerp(easing(alpha), c, cE);
               })
            ),
         );
      }
      default:
         return /** @type {ColorArray}*/ (
            cStart.map((c, i) => {
               if (!(typeof c === 'number')) {
                  return 1;
               }
               const cE = cEnd[i] ?? c;
               return lerp(easing(alpha), c, cE);
            })
         );
   }
}

/**
 * @param {IColor} c
 * @returns {ColorArray}
 */
function colorObjToAry(c) {
   /** @type ColorArray */
   const result = [c.r, c.g, c.b];
   if (typeof c.a === 'number') {
      result.push(c.a);
   }
   return result;
}

/**
 * @param {number} c
 * @returns {string}
 */
function compToHex(c) {
   const hex = c.toString(16);
   return hex.length === 1 ? '0' + hex : hex;
}

/**
 * @param {number} c
 * @returns {number}
 */
function cDenorm(c) {
   return c > 1 && !(c < 0) ? 255 : round(c * 255);
}

/**
 * @param {number} c
 * @returns {number}
 */
function cNorm(c) {
   return c / 255;
}

/**
 * @param {IColor} colorObj
 * @returns {string}
 */
function RgbatoHex(colorObj) {
   const color = { r: 0, g: 0, b: 0 };
   for (const c in colorObj) {
      const num = colorObj[c];
      if (num === undefined) {
         continue;
      }
      color[c] = cDenorm(num);
   }
   return `#${compToHex(color.r)}${compToHex(color.g)}${compToHex(color.b)}${
      typeof color.a === 'number' ? compToHex(color.a) : ''
   }`;
}

/**
 * @param {string} hex
 * @returns {ColorArray}
 */
function hexToRgba(hex) {
   hex = hex.trim();
   if (hex.startsWith('#')) {
      hex = hex.substring(1);
   }
   if (!isHex(hex)) {
      throw new Error('Not valid hexadecimal');
   }
   /** @type ColorArray */
   let result = [0, 0, 0];

   if (hex.length === 3 || hex.length === 4) {
      result = [
         cNorm(hexToDec(hex.slice(0, 1) + hex.slice(0, 1))),
         cNorm(hexToDec(hex.slice(1, 2) + hex.slice(1, 2))),
         cNorm(hexToDec(hex.slice(2, 3) + hex.slice(2, 3))),
      ];
      if (hex.length === 4) {
         result.push(cNorm(hexToDec(hex.slice(3, 4) + hex.slice(3, 4))));
      }
   } else if (hex.length === 6 || hex.length === 8) {
      result = [
         cNorm(hexToDec(hex.slice(0, 2))),
         cNorm(hexToDec(hex.slice(2, 4))),
         cNorm(hexToDec(hex.slice(4, 6))),
      ];
      if (hex.length === 8) {
         result.push(cNorm(hexToDec(hex.slice(6, 8))));
      }
   }
   return result;
}

/** Convert color input to standard RGBA array.
 * ```ts
 * const rgba = convertColorInput([30, 0.75, 1], 'hsva')
 * ```
 * Default color output type is RGBA unless specified otherwise.
 *
 * @param {ColorInput | IColor} color
 * @param {ColorType} [type='rgba']
 * @param {'rgba' | 'hsva'} [output='rgba']
 * @returns {ColorArray}
 */
function convertColorType(color, type = 'rgba', output = 'rgba') {
   if (typeof color === 'string') {
      const temp = hexToRgba(color);
      if (output === 'hsva') {
         return RgbaToHsva(...temp);
      }
      return temp;
   } else if (Array.isArray(color)) {
      if (type === 'hsva') {
         return output === 'hsva' ? color : HsvaToRgba(color);
      }
      /** @type {ColorArray} */
      const temp =
         type === 'rgba255'
            ? /** @type {ColorArray} */ (color.map((n) => cNorm(/** @type {number} */ (n))))
            : color;
      return output === 'hsva' ? RgbaToHsva(temp) : temp;
   } else {
      if ('type' in color) {
         /** @type {ColorArray} */
         let temp;
         switch (color.type) {
            case 'hsva':
               temp = colorFrom(color.value, 'hsva');
               break;
            case 'rgba':
               temp = colorFrom(color.value, 'rgba');
               break;
            case 'rgba255':
               temp = colorFrom(color.value, 'rgba255');
         }
         return output === 'hsva' ? RgbaToHsva(...temp) : temp;
      } else {
         /** @type {ColorArray} */
         const temp = [color.r, color.g, color.b];
         if (typeof color.a === 'number') {
            temp.push(color.a);
         }
         return output === 'hsva' ? RgbaToHsva(...temp) : temp;
      }
   }
}
/**
 * @overload
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number | undefined} a
 * @returns {ColorArray}
 *
 * @overload
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {'rgba'} type
 * @returns {Required<ColorArray>}
 *
 * @overload
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {'rgba255'} type
 * @returns {Required<ColorArray>}
 *
 * @overload
 * @param {number} h
 * @param {number} s
 * @param {number} v
 * @param {number} a
 * @param {'hsva'} type
 * @returns {Required<ColorArray>}
 *
 * @overload
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {'rgba'} type
 * @returns {ColorArray}
 *
 * @overload
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {'rgba255'} type
 * @returns {ColorArray}
 *
 * @overload
 * @param {number} h
 * @param {number} s
 * @param {number} v
 * @param {'hsva'} type
 * @returns {ColorArray}
 *
 * @overload
 * @param {number} value
 * @returns {ColorArray}
 *
 * @overload
 * @param {number} value
 * @param {boolean | undefined} normalise255
 * @returns {ColorArray}
 *
 * @overload
 * @param {number} value
 * @param {number} alpha
 * @returns {Required<ColorArray>}
 *
 * @overload
 * @param {string} hex
 * @returns {ColorArray}
 *
 * @overload
 * @param {(number | undefined)[]} color
 * @returns {ColorArray}
 *
 * @overload
 * @param {(number | undefined)[]} color
 * @param {'rgba'} type
 * @returns {ColorArray}
 *
 * @overload
 * @param {(number | undefined)[]} color
 * @param {'rgba255'} type
 * @returns {ColorArray}
 *
 * @overload
 * @param {(number | undefined)[]} color
 * @param {'hsva'} type
 * @returns {ColorArray}
 *
 * @overload
 * @param {ColorObject} color
 * @returns {ColorArray}
 *
 * @overload
 * @param {IColor} color
 * @returns {ColorArray}
 *
 * Return RGBA color array from input.
 * @returns {ColorArray}
 */
function colorFrom() {
   const args = arguments;
   if (typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[2] === 'number') {
      /** @type {ColorArray} */
      let val = [args[0], args[1], args[2]];
      if (typeof args[3] === 'number') {
         val.push(args[3]);
      }
      if (typeof args[3] === 'string') {
         if (args[3] === 'hsva') {
            val = HsvaToRgba(val);
         }
         if (args[3] === 'rgba255') {
            val = /** @type {ColorArray} */ (val.map((v) => /** @type {number} */ (v) / 255));
         }
      }
      if (typeof args[4] === 'string') {
         if (args[4] === 'hsva') {
            val = HsvaToRgba(val);
         }
         if (args[4] === 'rgba255') {
            val = /** @type {ColorArray} */ (val.map((v) => /** @type {number} */ (v) / 255));
         }
      }
      return val;
   }
   if (typeof args[0] === 'number') {
      if (typeof args[1] === 'boolean' && args[1]) {
         return [args[0] / 255, args[0] / 255, args[0] / 255];
      }
      if (typeof args[1] === 'number') {
         return [args[0], args[0], args[0], args[1]];
      }
      return [args[0], args[0], args[0]];
   }
   if (typeof args[0] === 'string') {
      return hexToRgba(args[0]);
   }
   if (Array.isArray(args[0])) {
      /** @type {ColorArray} */
      let val = [args[0][0], args[0][1], args[0][2]];
      if (!val.every((v) => typeof v === 'number')) {
         throw new Error('Unable to parse color; array contain undefined or non-numeric value');
      }
      if (typeof args[0][3] === 'number') {
         val.push(args[0][3]);
      }
      if (typeof args[1] === 'string') {
         if (args[1] === 'hsva') {
            val = HsvaToRgba(val);
         }
         if (args[1] === 'rgba255') {
            val = /** @type {ColorArray} */ (
               val.filter((v) => typeof v === 'number').map((v) => /** @type {number} */ (v) / 255)
            );
         }
      }
      return val;
   }
   if (typeof args[0] === 'object') {
      const obj = args[0];
      if ('type' in obj) {
         switch (obj.type) {
            case 'hsva':
               return colorFrom(obj.value, 'hsva');
            case 'rgba':
               return colorFrom(obj.value, 'rgba');
            case 'rgba255':
               return colorFrom(obj.value, 'rgba255');
         }
      }
      if ('r' in obj) {
         /** @type {ColorArray} */
         const val = [obj.r, obj.g, obj.b];
         if (typeof obj.a === 'number') {
            val.push(obj.a);
         }
         return val;
      }
   }

   throw new Error('Unable to parse color; input is invalid');
}

module.exports = {
   RgbaToHsva,
   HsvaToRgba,
   hexToRgba,
   RgbatoHex,
   interpolateColor,
   colorObjToAry,
   convertColorType,
   colorFrom,
};
