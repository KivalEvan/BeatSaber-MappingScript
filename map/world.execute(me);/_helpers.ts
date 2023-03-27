import { types, utils } from '../../depsLocal.ts';

export function eventBoxSwapColor<T extends Partial<types.wrapper.IWrapLightColorBaseAttribute>>(
    obj: T[],
): T[] {
    return utils.deepCopy(obj).map((o) => {
        o.color = o.color === 0 ? (o.color = 1) : o.color === 1 ? (o.color = 0) : o.color;
        return o;
    }) as T[];
}

export function objectTimeScale<T extends Partial<types.wrapper.IWrapBaseObjectAttribute>>(
    obj: T[],
    scale: number,
): T[] {
    return utils.deepCopy(obj).map((o) => {
        if (o.time) {
            o.time *= scale;
        }
        return o;
    }) as T[];
}

export function objectTimeShift<T extends Partial<types.wrapper.IWrapBaseObjectAttribute>>(
    obj: T[],
    shift: number,
): T[] {
    return utils.deepCopy(obj).map((o) => {
        if (typeof o.time === 'number') {
            o.time += shift;
        } else {
            o.time = shift;
        }
        return o;
    }) as T[];
}

let previousSeed: number;
export function generateSeed(usePrevious?: boolean): number {
    if (usePrevious) {
        return previousSeed;
    }
    previousSeed = utils.pRandom(-727_727, 727_727, true);
    return previousSeed;
}
generateSeed();
