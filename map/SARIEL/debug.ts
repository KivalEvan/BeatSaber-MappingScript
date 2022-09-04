import { Axis, EventBoxColor, v3 } from '../../depsLocal.ts';

export function fixRot(d: v3.Difficulty) {
    for (let g = 0; g < 16; g++) {
        d.addLightRotationEventBoxGroups({
            b: 0,
            g,
            e: [
                {
                    l: [{}],
                },
                { a: Axis.Y, l: [{}] },
            ],
        });
    }
}

export function rotation(d: v3.Difficulty) {
    d.lightColorEventBoxGroups = [];
    for (let g = 0; g < 16; g++) {
        d.addLightColorEventBoxGroups({
            b: 0,
            g,
            e: [
                {
                    e: [{ c: g < 4 ? EventBoxColor.RED : g < 8 ? EventBoxColor.BLUE : EventBoxColor.WHITE }],
                },
            ],
        });
    }
}
