import { types, utils } from '../../depsLocal.ts';

export function eventBoxSwapColor<T extends types.wrapper.IWrapLightColorBase>(obj: Partial<T>[]): T[] {
    return utils.deepCopy(obj).map((o) => {
        o.color = o.color === 0 ? (o.color = 1) : o.color === 1 ? (o.color = 0) : o.color;
        return o;
    }) as T[];
}

export function eventBoxTimeScale<T extends types.wrapper.IWrapBaseObject>(obj: Partial<T>[], scale: number): T[] {
    return utils.deepCopy(obj).map((o) => {
        if (o.time) {
            o.time *= scale;
        }
        return o;
    }) as T[];
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
