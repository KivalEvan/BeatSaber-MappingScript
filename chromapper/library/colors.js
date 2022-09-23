/**
 * @typedef {import('./types').EasingFunction} EasingFunction
 * @typedef {import('./types').ColorArray} ColorArray
 */

/**
 * Standard color object.
 * @typedef {Object} IColor
 * @property {number} r
 * @property {number} g
 * @property {number} b
 * @property {number} [a]
 */

/**
 * Convert RGBA to HSVA array.
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} [a=1]
 * @returns {ColorArray}
 */

const { lerp, isHex } = require('./kvlCore');

function RGBAtoHSVA(r, g, b, a = 1) {
    let h;
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
    return [h * 360, s, v, a];
}

/**
 * Convert HSVA to RGBA array.
 * @param {number} hue
 * @param {number} saturation
 * @param {number} value
 * @param {number} [alpha=1]
 * @returns {ColorArray}
 */
function HSVAtoRGBA(hue, saturation, value, alpha = 1) {
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
    return [r, g, b, alpha];
}

/**
 * @param {ColorArray | string} colorStart
 * @param {ColorArray | string} colorEnd
 * @param {number} alpha
 * @param {'rgba' | 'hsva' | 'long hsva' | 'short hsva'} [type='rgba']
 * @param {EasingFunction} [easing]
 * @returns {ColorArray}
 */
function interpolateColor(colorStart, colorEnd, alpha, type = 'rgba', easing) {
    if (!easing) {
        easing = function (x) {
            return x;
        };
    }
    let cStart, cEnd;
    if (typeof colorStart === 'string') {
        cStart = hexToRGBA(colorStart);
    } else {
        cStart = colorStart;
    }
    if (typeof colorEnd === 'string') {
        cEnd = hexToRGBA(colorEnd);
    } else if (Array.isArray(colorEnd)) {
        cEnd = colorEnd;
    }
    switch (type) {
        case 'hsva': {
            return HSVAtoRGBA(
                ...cStart.map((c, i) => {
                    if (!(typeof c === 'number')) {
                        return 1;
                    }
                    const cE = typeof cEnd[i] === 'number' ? cEnd[i] : c;
                    return lerp(easing(alpha), c, cE);
                })
            );
        }
        case 'long hsva': {
            return HSVAtoRGBA(
                ...cStart.map((c, i) => {
                    if (!(typeof c === 'number')) {
                        return 1;
                    }
                    const cE = typeof cEnd[i] === 'number' ? cEnd[i] : c;
                    return lerp(easing(alpha), c, cE);
                })
            );
        }
        case 'short hsva': {
            return HSVAtoRGBA(
                ...cStart.map((c, i) => {
                    if (!(typeof c === 'number')) {
                        return 1;
                    }
                    const cE = typeof cEnd[i] === 'number' ? cEnd[i] : c;
                    return lerp(easing(alpha), c, cE);
                })
            );
        }
        default: {
            return cStart.map((c, i) => {
                if (!(typeof c === 'number')) {
                    return 1;
                }
                const cE = typeof cEnd[i] === 'number' ? cEnd[i] : c;
                return lerp(easing(alpha), c, cE);
            });
        }
    }
}

/**
 * @param {IColor} c
 * @returns {ColorArray}
 */
function colorObjToAry(c) {
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
function RGBAtoHex(colorObj) {
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
function hexToRGBA(hex) {
    hex = hex.trim();
    if (hex.startsWith('#')) {
        hex = hex.substring(1);
    }
    if (!isHex(hex)) {
        throw new Error('Not valid hexadecimal');
    }
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
        result = [cNorm(hexToDec(hex.slice(0, 2))), cNorm(hexToDec(hex.slice(2, 4))), cNorm(hexToDec(hex.slice(4, 6)))];
        if (hex.length === 8) {
            result.push(cNorm(hexToDec(hex.slice(6, 8))));
        }
    }
    return result;
}

module.exports = {
    RGBAtoHSVA,
    HSVAtoRGBA,
    interpolateColor,
    colorObjToAry,
    RGBAtoHex,
    hexToRGBA,
};
