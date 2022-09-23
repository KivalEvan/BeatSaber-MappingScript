// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types.d.ts').Run} Run
 * @typedef {import('./library/types.d.ts').Main} Main
 */

const { clamp, normalize, lerp } = require('./library/kvlCore.js');
const { HSVAtoRGBA, RGBAtoHSVA } = require('./library/colors.js');
const Easings = require('./library/easings.js');

function interpolateColor(hsvaStart, hsvaEnd, norm) {
    return HSVAtoRGBA(...RGBAtoHSVA(...hsvaStart).map((hsva, i) => lerp(norm, hsva, hsvaEnd[i])));
}
function shiftColor(currentColor, shiftHSVA) {
    return RGBAtoHSVA(...currentColor).map((hsva, i) => {
        if (i === 1) {
            return clamp(hsva * shiftHSVA[1], 0, 1);
        }
        return hsva + shiftHSVA[i];
    });
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
    const colorEasing = Easings.func[global.params[4]];
    const objectSelected = [
        ...notes.filter((n) => n.selected),
        ...events.filter((ev) => ev.selected),
        ...walls.filter((w) => w.selected),
    ].sort((a, b) => a._time - b._time);
    if (!objectSelected.length) {
        alert('Select any notes, events, or walls with Chroma color');
        return;
    }
    const startTime = objectSelected[0]._time;
    const endTime = objectSelected[objectSelected.length - 1]._time;

    objectSelected.forEach((obj) => {
        const norm = colorEasing(normalize(obj._time, startTime, endTime));
        if (obj._customData && obj._customData._color) {
            obj._customData._color = interpolateColor(
                obj._customData._color,
                shiftColor(obj._customData._color, hsvaShift),
                norm
            );
        }
        if (obj._customData && obj._customData._lightGradient) {
            obj._customData._lightGradient._startColor = interpolateColor(
                obj._customData._lightGradient._startColor,
                shiftColor(obj._customData._lightGradient._startColor, hsvaShift),
                norm
            );
            obj._customData._lightGradient._endColor = interpolateColor(
                obj._customData._lightGradient._endColor,
                shiftColor(obj._customData._lightGradient._endColor, hsvaShift),
                norm
            );
        }
    });
}

module.exports =
    /**
     * @type {Main}
     */
    ({
        name: 'Colour Shift Gradient',
        params: {
            Hue: 0,
            Saturation: 100,
            Value: 0,
            Alpha: 0,
            Easing: Easings.list,
        },
        run: shift,
        errorCheck: false,
    });
