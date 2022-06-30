//#region helper function
function normalize(x, min, max) {
    return (x - min) / (max - min);
}
function lerp(x, y, a) {
    return x + (y - x) * a;
}
function HSVAtoRGBA(hue, saturation, value, alpha = 1) {
    hue = hue / 360;
    let r, g, b, i, f, p, q, t;
    i = Math.floor(hue * 6);
    f = hue * 6 - i;
    p = value * (1 - saturation);
    q = value * (1 - f * saturation);
    t = value * (1 - (1 - f) * saturation);
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
function interpolateColor(hsvaStart, hsvaEnd, norm) {
    return HSVAtoRGBA(...hsvaStart.map((hsva, i) => lerp(hsva, hsvaEnd[i], norm)));
}
function multiplyColor(cArr, mult = 1) {
    return [...cArr].map((c, i) => {
        if (i === 2) {
            return c * mult;
        }
        return c;
    });
}
function saturateColor(cArr, mult = 1) {
    return [...cArr].map((c, i) => {
        if (i === 1) {
            return c * mult;
        }
        return c;
    });
}

function setColor(obj, type, color, t1, t2) {
    if (!t2) {
        t2 = t1;
    }
    for (let i = 0, l = obj.length; i < l; i++) {
        if (obj[i]._time > t2) {
            return;
        }
        if (obj[i]._time < t1 || (obj[i]._type !== type && type !== 2)) {
            continue;
        }
        obj[i]._customData = { _color: HSVAtoRGBA(...color) };
    }
}
function setGradientColor(obj, type, color1, color2, t1, t2) {
    let norm = 0;
    for (let i = 0, l = obj.length; i < l; i++) {
        if (obj[i]._time > t2) {
            return;
        }
        if (obj[i]._time < t1 || (obj[i]._type !== type && type !== 2)) {
            continue;
        }
        norm = normalize(obj[i]._time, t1, t2);
        let color = interpolateColor(color1, color2, norm);
        obj[i]._customData = { _color: color };
    }
}
function randomizeColor(obj, type, color1, color2, t1, t2) {
    let random = 0;
    for (let i = 0, l = obj.length; i < l; i++) {
        if (obj[i]._time > t2) {
            return;
        }
        if (obj[i]._time < t1 || (obj[i]._type !== type && type !== 2)) {
            continue;
        }
        random = Math.random();
        let color = interpolateColor(color1, color2, random);
        obj[i]._customData = { _color: color };
    }
}
function randomizeColorStack(obj, type, color1, color2, t1, t2) {
    let random = 0;
    let prevTime = 0;
    for (let i = 0, l = obj.length; i < l; i++) {
        if (obj[i]._time > t2) {
            return;
        }
        if (obj[i]._time < t1 || (obj[i]._type !== type && type !== 2)) {
            continue;
        }
        if (obj[i]._time > prevTime + 0.001) {
            random = Math.random();
        }
        let color = interpolateColor(color1, color2, random);
        obj[i]._customData = { _color: color };
        prevTime = obj[i]._time;
    }
}
function setAlpha(obj, type, alpha, t1, t2) {
    for (let i = 0, l = obj.length; i < l; i++) {
        if (obj[i]._time > t2) {
            return;
        }
        if (obj[i]._time < t1 || (obj[i]._type !== type && type !== 2)) {
            continue;
        }
        if (obj[i]._customData && obj[i]._customData._color) {
            if (obj[i]._customData._color.length === 3) {
                obj[i]._customData._color.push(alpha);
            } else {
                obj[i]._customData._color[3] = alpha;
            }
        }
    }
}
//#endregion

function check(
    cursor,
    notes,
    events,
    walls,
    _,
    global,
    data,
    customEvents,
    bpmChanges,
) {
    notes.forEach((n) => {
        if (n._type === 1) {
            n._customData = { _color: HSVAtoRGBA(240, 1, 2) };
        }
        if (n._type === 3) {
            n._customData = { _color: HSVAtoRGBA(120, 1, 2) };
        }
    });
    walls.forEach((w) => {
        w._customData = { _color: HSVAtoRGBA(60, 1, 2) };
    });

    //#region notes
    setColor(notes, 1, [0, 0, 0.5], 11, 55);

    randomizeColorStack(notes, 1, [315, 1, 1], [345, 1, 1], 61, 93);

    randomizeColorStack(notes, 1, [0, 0, 0.75], [0, 0, 0.5], 93.5, 105);
    randomizeColorStack(notes, 1, [315, 1, 1], [345, 1, 1], 105.4, 109.5);
    randomizeColorStack(notes, 1, [145, 1, 1], [105, 1, 1], 109.5, 117);
    randomizeColorStack(notes, 1, [145, 1, 1], [175, 1, 1], 117, 153);
    randomizeColorStack(notes, 1, [75, 0.75, 0.75], [45, 0.875, 0.875], 121, 126);
    setColor(notes, 1, [315, 0.81, 0.875], 124.9, 125);
    randomizeColorStack(notes, 1, [0, 0, 0.75], [0, 0, 0.5], 125.9, 149);
    randomizeColorStack(notes, 1, [75, 0.75, 0.75], [45, 0.875, 0.875], 149, 153);
    randomizeColorStack(notes, 1, [300, 1, 1], [330, 1, 1], 153, 157);

    setGradientColor(notes, 1, [45, 0, 0.625], [60, 0.75, 0.875], 157.9, 170);
    randomizeColorStack(notes, 1, [330, 0.875, 1], [360, 1, 1], 169, 176);
    setGradientColor(notes, 1, [345, 0.875, 1], [360, 0, 0.625], 177, 179);
    randomizeColorStack(notes, 1, [200, 0.74, 1], [230, 0.8, 1], 179, 186);
    setGradientColor(notes, 1, [200, 0.74, 1], [230, 0, 0.75], 186, 189.7);
    randomizeColorStack(notes, 1, [0, 0, 0.5], [0, 0, 0.75], 190, 198.5);
    randomizeColorStack(notes, 1, [0, 0, 0.75], [0, 0, 0.875], 198.5, 204);
    setGradientColor(notes, 1, [345, 0, 0.75], [345, 1, 1], 204, 205.5);
    randomizeColorStack(notes, 1, [345, 1, 1], [315, 1, 1], 205.5, 211.5);
    setColor(notes, 1, [210, 0.87, 1], 211.2, 211.5);

    setColor(notes, 1, [0, 0, 0.625], 212.2, 212.4);
    for (let i = 0, l = notes.length; i < l; i++) {
        if (notes[i]._time > 213.4) {
            break;
        }
        if (notes[i]._time < 213.3) {
            continue;
        }
        let color = interpolateColor(
            [345, 0.875, 1],
            [360, 0.125, 1],
            notes[i]._lineLayer / 2,
        );
        notes[i]._customData = { _color: color };
    }
    randomizeColorStack(notes, 1, [315, 1, 1], [345, 1, 1], 213.4, 269.1);
    randomizeColorStack(notes, 1, [145, 0, 0.75], [105, 0, 0.5], 241.5, 244.5);
    randomizeColorStack(notes, 1, [145, 0, 0.75], [105, 0, 0.5], 269.25, 271.75);

    randomizeColorStack(notes, 1, [315, 1, 1], [345, 1, 1], 276, 302);
    randomizeColorStack(notes, 1, [0, 0, 0.5], [0, 0, 0.75], 302, 303.25);
    randomizeColorStack(notes, 1, [200, 0.74, 1], [230, 0.8, 1], 303.25, 306);
    randomizeColorStack(notes, 1, [0, 0, 0.25], [0, 0, 0.5], 306.5, 311.75);

    randomizeColorStack(notes, 1, [200, 0.74, 1], [230, 0.8, 1], 311.75, 329);
    setGradientColor(notes, 1, [200, 0.74, 1], [230, 0.12, 0.5], 329, 333);
    setGradientColor(notes, 1, [0, 0, 0.875], [0, 0, 0.375], 333.6, 334.8);
    randomizeColorStack(notes, 1, [145, 1, 1], [105, 1, 1], 334.8, 341.5);
    setGradientColor(notes, 1, [0, 0, 0.875], [0, 0, 0.375], 342.2, 344.3);

    setGradientColor(notes, 1, [180, 0, 0.625], [200, 0.5, 0.875], 344.2, 355.5);
    randomizeColorStack(notes, 1, [145, 1, 1], [105, 1, 1], 355.5, 363);
    setGradientColor(notes, 1, [145, 0.74, 1], [105, 0.12, 0.5], 363.3, 365.1);
    setGradientColor(notes, 1, [105, 0, 0.75], [145, 0.87, 0.87], 365.8, 369.9);
    setGradientColor(notes, 1, [105, 0, 0.75], [145, 0.87, 0.87], 370.6, 376);
    setGradientColor(notes, 1, [145, 1, 0.87], [105, 0, 0.5], 376.9, 379.5);
    randomizeColorStack(notes, 1, [0, 0, 0.375], [0, 0, 0.625], 379.5, 384.75);
    randomizeColorStack(notes, 1, [315, 1, 1], [345, 1, 1], 385.5, 389.1);
    randomizeColorStack(notes, 1, [200, 0.74, 1], [230, 0.8, 1], 389.5, 392);
    setGradientColor(notes, 1, [200, 0.74, 1], [230, 0.125, 0.625], 389.5, 393.8);
    randomizeColorStack(notes, 1, [315, 1, 1], [345, 1, 1], 393.8, 398.9);

    setColor(notes, 1, [0, 0, 0.75], 399.8, 399.9);
    setColor(notes, 1, [0, 0, 0.5], 400.8, 400.9);
    for (let i = 0, l = notes.length; i < l; i++) {
        if (notes[i]._time > 401.9) {
            break;
        }
        if (notes[i]._time < 401.8) {
            continue;
        }
        let color = interpolateColor(
            [345, 0.875, 1],
            [360, 0.125, 1],
            notes[i]._lineIndex / 3,
        );
        notes[i]._customData = { _color: color };
    }
    randomizeColorStack(notes, 1, [315, 1, 1], [345, 1, 1], 402.4, 498.2);
    randomizeColorStack(notes, 1, [145, 0, 0.75], [105, 0, 0.5], 428.25, 433.1);
    randomizeColorStack(notes, 1, [145, 0, 0.75], [105, 0, 0.5], 457, 478.4);
    setColor(notes, 1, [345, 1, 1], 462.7, 462.8);
    setColor(notes, 1, [345, 1, 1], 470.7, 470.8);

    randomizeColorStack(notes, 1, [200, 0.74, 1], [230, 0.8, 1], 474, 476.25);
    setGradientColor(notes, 1, [330, 1, 1], [360, 0, 0.75], 498.1, 506.05);

    randomizeColorStack(notes, 1, [90, 0, 0.5], [120, 0, 0.625], 511, 594);

    setColor(notes, 1, [345, 1, 1], 595.4, 605.5);
    for (let i = 0, l = notes.length; i < l; i++) {
        if (notes[i]._time > 606.5) {
            break;
        }
        if (notes[i]._time < 596.4) {
            continue;
        }
        if (Math.floor(notes[i]._time) % 2 === 0) {
            notes[i]._customData = { _color: [0.75, 0.75, 0.75] };
        }
    }
    randomizeColorStack(notes, 1, [200, 0.74, 1], [230, 0.8, 1], 606.5, 631);
    setColor(notes, 1, [0, 1, 1], 616.9, 621.9);

    for (let i = 0, l = notes.length; i < l; i++) {
        if (notes[i]._time > 636.4) {
            break;
        }
        if (notes[i]._time < 636.3) {
            continue;
        }
        let color = interpolateColor(
            [360, 0.125, 1],
            [345, 0.875, 1],
            notes[i]._lineIndex / 3,
        );
        notes[i]._customData = { _color: color };
    }
    randomizeColorStack(notes, 1, [315, 1, 1], [345, 1, 1], 636.4, 750.5);
    randomizeColorStack(notes, 1, [145, 0, 0.75], [105, 0, 0.5], 662.9, 667.7);
    randomizeColorStack(notes, 1, [145, 0, 0.75], [105, 0, 0.5], 693.4, 699.1);
    randomizeColorStack(notes, 1, [145, 0, 0.75], [105, 0, 0.5], 713, 714.8);
    randomizeColorStack(notes, 1, [145, 0, 0.75], [105, 0, 0.5], 726.8, 729.6);
    randomizeColorStack(notes, 1, [145, 0, 0.75], [105, 0, 0.5], 750.9, 759.9);
    randomizeColorStack(notes, 1, [145, 1, 0.875], [120, 1, 0.875], 753.9, 756.9);
    //#endregion
    //#region bombs
    randomizeColor(notes, 3, [345, 0.875, 1], [360, 0.875, 1], 59, 62);
    setGradientColor(notes, 3, [220, 1, 1], [200, 0.25, 1], 93.25, 93.75);
    setGradientColor(notes, 3, [220, 1, 1], [200, 0.25, 1], 157.25, 157.75);
    randomizeColor(notes, 3, [0, 0, 0.375], [0, 0, 0.5], 465.5, 469);
    //#endregion
    //#region walls
    setColor(walls, 2, [220, 0.25, 0.75], 11, 55);
    randomizeColor(walls, 2, [220, 0.25, 1], [200, 0.375, 1], 93, 116);
    setColor(walls, 2, [220, 0.125, 1], 117, 124);
    setColor(walls, 2, [345, 0.75, 0.875], 123, 126);
    setGradientColor(walls, 2, [45, 0, 0.625], [60, 0.5, 0.875], 157.9, 193);
    setColor(walls, 2, [15, 0, 0.875], 193, 194);
    randomizeColor(walls, 2, [0, 0, 0.375], [0, 0, 0.625], 199, 203);
    setColor(walls, 2, [220, 0.75, 0.875], 203, 210);
    randomizeColorStack(walls, 2, [345, 1, 0.75], [360, 1, 0.875], 241.5, 271.75);
    setColor(walls, 2, [0, 0, 0.875], 271.9, 272);
    randomizeColor(walls, 2, [0, 0, 0.375], [0, 0, 0.625], 305, 308);
    randomizeColor(walls, 2, [220, 0.25, 1], [200, 0.375, 1], 312, 326);
    setGradientColor(walls, 2, [220, 0.25, 1], [330, 0.75, 1], 326, 332);
    setColor(walls, 2, [0, 0, 0.875], 333.6, 333.8);
    setColor(walls, 2, [0, 0, 0.5], 335.2, 341.3);
    setGradientColor(walls, 2, [195, 0, 0.625], [210, 0.5, 0.875], 344.2, 353.9);
    randomizeColor(walls, 2, [0, 0, 0.5], [0, 0, 0.75], 355.5, 400);
    randomizeColorStack(walls, 2, [345, 1, 0.75], [360, 1, 0.875], 386, 392.5);
    setColor(walls, 2, [0, 0, 0.875], 399, 400);
    randomizeColorStack(walls, 2, [345, 1, 0.75], [360, 1, 0.875], 428, 459);
    setColor(walls, 2, [0, 0, 0.875], 460.7, 507);
    randomizeColorStack(walls, 2, [345, 1, 0.75], [360, 1, 0.875], 463, 468.5);
    randomizeColorStack(walls, 2, [345, 1, 0.75], [360, 1, 0.875], 471, 473.25);
    setGradientColor(walls, 2, [45, 0.375, 0.75], [60, 0.5, 0.875], 511, 594);
    randomizeColor(walls, 2, [220, 0.25, 1], [200, 0.375, 1], 595, 605.5);
    setColor(walls, 2, [0, 0, 1], 617, 621.3);
    setColor(walls, 2, [0, 0, 0.25], 621.3, 622);
    randomizeColor(walls, 2, [345, 1, 0.75], [360, 1, 0.875], 662, 726);
    randomizeColor(walls, 2, [200, 0.875, 0.75], [220, 0.75, 0.875], 726, 757);
    randomizeColor(walls, 2, [0, 0, 0.375], [0, 0, 0.625], 756, 773);
    randomizeColor(walls, 1, [0, 0, 1], [0, 0, 0.375], 763, 771.7);
    //#endregion
}

module.exports = {
    name: 'Junjo Arumeria',
    params: {},
    run: check,
    errorCheck: false,
};
