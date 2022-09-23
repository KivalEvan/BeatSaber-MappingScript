// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').Run} Run
 * @typedef {import('./library/types').Main} Main
 */

const { clamp } = require('./library/kvlCore.js');
const { HSVAtoRGBA, RGBAtoHSVA } = require('./library/colors.js');

function shiftColor(currentColor, shiftHSVA, settings) {
    return HSVAtoRGBA(
        ...RGBAtoHSVA(...currentColor).map((hsva, i) => {
            if (i === 1) {
                return clamp(hsva * shiftHSVA[1], 0, 1);
            }
            if (i === 2 && settings.fixedValue) {
                return shiftHSVA[2];
            }
            if (i === 3 && settings.fixedAlpha) {
                return shiftHSVA[3];
            }
            return hsva + shiftHSVA[i];
        })
    );
}

/**
 * @type {Run}
 */
function shift(cursor, notes, events, walls, _, global, data, customEvents, bpmChanges) {
    const hsvaShift = [
        global.params[0],
        // @ts-ignore
        global.params[1] / 100,
        global.params[2],
        global.params[3],
    ];
    const settings = {
        fixedValue: global.params[4] > 0,
        fixedAlpha: global.params[5] > 0,
    };
    const objectSelected = [
        ...notes.filter((n) => n.selected),
        ...events.filter((ev) => ev.selected),
        ...walls.filter((w) => w.selected),
    ];
    if (!objectSelected.length) {
        alert('Select any notes, events, or walls with Chroma color');
        return;
    }
    objectSelected.forEach((obj) => {
        if (obj._customData && obj._customData._color) {
            obj._customData._color = shiftColor(obj._customData._color, hsvaShift, settings);
        }
        if (obj._customData && obj._customData._lightGradient) {
            obj._customData._lightGradient._startColor = shiftColor(
                obj._customData._lightGradient._startColor,
                hsvaShift,
                settings
            );
            obj._customData._lightGradient._endColor = shiftColor(
                obj._customData._lightGradient._endColor,
                hsvaShift,
                settings
            );
        }
    });
}

module.exports =
    /**
     * @type {Main}
     */
    ({
        name: 'Colour Shift',
        params: {
            Hue: 0,
            Saturation: 100,
            Value: 0,
            Alpha: 0,
            'Fixed Value': false,
            'Fixed Alpha': false,
        },
        run: shift,
        errorCheck: false,
    });
