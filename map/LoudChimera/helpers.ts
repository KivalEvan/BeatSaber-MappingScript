import * as bsmap from '../../depsLocal.ts';

const { lerp, normalize, easings } = bsmap.utils;

export function getRepeatArray(start: number, gap: number, repeat: number) {
    const arr = new Array(repeat).fill(start);
    for (let i = 0; i < repeat; i++) {
        arr[i] = arr[i] + gap * i;
    }
    return arr;
}

export function lerpVec3(
    alpha: number,
    points: bsmap.types.Vector3PointDefinition[]
): bsmap.types.Vector3 {
    const pointBefore = [...points].reverse().find((p) => alpha >= p[3]);
    const pointAfter = points.slice(1).find((p) => alpha <= p[3]);
    if (!pointAfter) {
        throw new Error('not found');
    }
    if (!pointBefore) {
        throw new Error('not found');
    }
    const norm = normalize(alpha, pointBefore[3], pointAfter[3]);
    const easing = pointAfter[4]?.startsWith('ease') ? pointAfter[4] : 'easeLinear';
    return [
        lerp(norm, pointBefore[0], pointAfter[0], easings[easing]),
        lerp(norm, pointBefore[1], pointAfter[1], easings[easing]),
        lerp(norm, pointBefore[2], pointAfter[2], easings[easing]),
    ];
}
