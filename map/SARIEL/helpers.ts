import { types, utils } from '../../depsLocal.ts';

export function eventBoxSwapColor(obj: Partial<types.v3.ILightColorBase>[]) {
    return utils.deepCopy(obj).map((o) => {
        o.c = o.c === 0 ? (o.c = 1) : o.c === 1 ? (o.c = 0) : o.c;
        return o;
    });
}

export function eventBoxTimeScale(
    obj: Partial<types.v3.ILightColorBase | types.v3.ILightRotationBase>[],
    scale: number,
) {
    return utils.deepCopy(obj).map((o) => {
        if (o.b) {
            o.b *= scale;
        }
        return o;
    });
}

export const enum Brightness {
    ZERO = 0,
    DIM = 0.25,
    HALF = 0.5,
    MODERATE = 0.75,
    FULL = 1,
    FLASH = 1.2,
    EXTRA = 1.5,
    DOUBLE = 2,
    TRIPLE = 3,
    QUAD = 4,
}
