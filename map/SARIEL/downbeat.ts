import { Axis, EventBoxColor, TransitionType, types, v3 } from '../../depsLocal.ts';
import { Brightness, eventBoxSwapColor, eventBoxTimeScale } from './helpers.ts';

export default (d: v3.Difficulty) => {
    const downbeatTiming: [number, number, number, boolean?, boolean?][] = [
        [70, 20, 2, false, true],
        [102, 26, 1, true],
        [134, 26, 1],
        [198, 24, 2, false, true],
        [230, 20, 2, false, true],
        [262, 26, 1, true],
        [294, 26, 1],
        [358, 24, 2, false, true],
        [390, 20, 2, false, true],
        [486, 24, 2, false, true],
        [518, 20, 2, false, true],
    ];
    const TBTiming = [98];
    const LRTiming = [99];

    const fltr = {
        f: 1,
        p: 2,
        t: 1,
        r: 1,
    } as types.v3.IIndexFilter;
    const fltrR = {
        f: 1,
        p: 2,
        t: 1,
        r: 0,
    } as types.v3.IIndexFilter;
    const e: Partial<types.v3.ILightColorBase>[] = [
        { c: EventBoxColor.WHITE, s: 1.25 },
        { b: 0.1875, c: EventBoxColor.WHITE, s: Brightness.FULL, i: TransitionType.INTERPOLATE },
        { c: EventBoxColor.BLUE, b: 0.25, s: Brightness.FULL },
        { b: 0.375, i: TransitionType.EXTEND },
        { c: EventBoxColor.BLUE, b: 0.5, s: Brightness.ZERO, i: TransitionType.INTERPOLATE },
    ];
    const fastBeat = [
        [0, 0],
        [0.5, 0],
        [1, 0],
        [1, 1],
        [1.5, 1],
    ];
    for (const dbt of downbeatTiming) {
        for (let g = 14; g < 16; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: dbt[0],
                    g,
                    e: [
                        {
                            l: [{ r: 120 }],
                        },
                        {
                            f: fltr,
                            a: Axis.Y,
                            b: 1,
                            s: -60,
                            l: [{ r: 225 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            b: 1,
                            s: 60,
                            l: [{ r: 135 }],
                        },
                    ],
                },
                {
                    b: dbt[0] + dbt[1] - 0.001,
                    g,
                    e: [
                        {
                            l: [{ r: 150 }],
                        },
                        {
                            f: fltr,
                            a: Axis.Y,
                            b: 1,
                            s: -75,
                            l: [{ r: 210 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            b: 1,
                            s: 75,
                            l: [{ r: 150 }],
                        },
                    ],
                },
                {
                    b: dbt[0] + dbt[1],
                    g,
                    e: [
                        {
                            l: [{ p: 1 }, { b: 1, r: 90 }],
                        },
                        {
                            f: fltr,
                            a: Axis.Y,
                            l: [{ p: 1 }, { b: 1, r: 270 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            l: [{ p: 1 }, { b: 1, r: 90 }],
                        },
                    ],
                },
                {
                    b: dbt[0] + dbt[1] + dbt[2] * 2 - 0.001,
                    g,
                    e: [
                        {
                            l: [{ r: 90 }],
                        },
                        {
                            f: fltr,
                            a: Axis.Y,
                            l: [{ r: 270 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                    ],
                },
            );
        }
        for (let g = 12; g < 14; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: dbt[0],
                    g,
                    e: [
                        {
                            f: fltr,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                        {
                            f: fltr,
                            l: [{ r: 270 }],
                        },
                        {
                            r: 1,
                            f: fltrR,
                            l: [{ r: 270 }],
                        },
                    ],
                },
                {
                    b: dbt[0] + dbt[1] + dbt[2] * 2 - 0.001,
                    g,
                    e: [
                        {
                            s: 15,
                            f: fltr,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                        {
                            s: -15,
                            f: fltrR,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                        {
                            s: -90,
                            f: fltr,
                            l: [{ r: 270 }],
                        },
                        {
                            s: -90,
                            r: 1,
                            f: fltrR,
                            l: [{ r: 270 }],
                        },
                    ],
                },
            );
            for (let b = dbt[0]; b < dbt[0] + dbt[1]; b++) {
                let en = e;
                if (b === 70) {
                    continue;
                }
                if (b === 86) {
                    en = eventBoxSwapColor(en);
                }
                const doubleHit = !dbt[3] && (b - dbt[0]) % 4 === 2 && dbt[4];
                d.addLightColorEventBoxGroups({
                    b,
                    g: dbt[3] ? ((b - dbt[0]) % 8 === 1 || (b - dbt[0]) % 8 === 3 ? g + 2 : g) : b % 2 ? g + 2 : g,
                    e: [
                        {
                            f: fltrR,
                            w: doubleHit ? 0.375 : 0.75,
                            e: doubleHit ? eventBoxTimeScale(en, 0.5) : en,
                        },
                        {
                            f: fltr,
                            w: doubleHit ? 0.375 : 0.75,
                            e: doubleHit ? eventBoxTimeScale(en, 0.5) : en,
                        },
                    ],
                });
                if (doubleHit) {
                    d.addLightColorEventBoxGroups({
                        b: b + 0.5,
                        g: dbt[3] ? ((b - dbt[0]) % 8 === 1 || (b - dbt[0]) % 8 === 3 ? g + 2 : g) : b % 2 ? g + 2 : g,
                        e: [
                            {
                                f: fltrR,
                                w: 0.375,
                                e: eventBoxTimeScale(en, 0.5),
                            },
                            {
                                f: fltr,
                                w: 0.375,
                                e: eventBoxTimeScale(en, 0.5),
                            },
                        ],
                    });
                }
            }
            for (let i = 0; i < dbt[2]; i++) {
                for (const fb of fastBeat) {
                    d.addLightColorEventBoxGroups({
                        b: dbt[0] + dbt[1] + fb[0] + i * 2,
                        g: g + fb[1] * 2,
                        e: [
                            {
                                f: fltrR,
                                w: 0.375,
                                e: eventBoxTimeScale(e, 0.5),
                            },
                            {
                                f: fltr,
                                w: 0.375,
                                e: eventBoxTimeScale(e, 0.5),
                            },
                        ],
                    });
                }
            }
        }
    }

    for (const tbt of TBTiming) {
        for (let g = 12; g < 14; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: tbt,
                    g,
                    e: [
                        {
                            f: fltr,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                        {
                            f: fltr,
                            l: [{ r: 270 }],
                        },
                        {
                            r: 1,
                            f: fltrR,
                            l: [{ r: 270 }],
                        },
                    ],
                },
                {
                    b: tbt + 0.999,
                    g,
                    e: [
                        {
                            f: fltr,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                        {
                            f: fltr,
                            l: [{ r: 270 }],
                        },
                        {
                            r: 1,
                            f: fltrR,
                            l: [{ r: 270 }],
                        },
                    ],
                },
            );
            d.addLightColorEventBoxGroups({
                b: tbt,
                g,
                e: [
                    {
                        f: fltrR,
                        w: 0.75,
                        e,
                    },
                    {
                        f: fltr,
                        w: 0.75,
                        e,
                    },
                ],
            });
        }
    }
    for (const lrt of LRTiming) {
        for (let g = 14; g < 16; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: lrt,
                    g,
                    e: [
                        {
                            f: fltr,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                        {
                            f: fltr,
                            l: [{ r: 270 }],
                        },
                        {
                            r: 1,
                            f: fltrR,
                            l: [{ r: 270 }],
                        },
                    ],
                },
                {
                    b: lrt + 0.999,
                    g,
                    e: [
                        {
                            f: fltr,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            l: [{ r: 90 }],
                        },
                        {
                            f: fltr,
                            l: [{ r: 270 }],
                        },
                        {
                            r: 1,
                            f: fltrR,
                            l: [{ r: 270 }],
                        },
                    ],
                },
            );
            d.addLightColorEventBoxGroups({
                b: lrt,
                g,
                e: [
                    {
                        f: fltrR,
                        w: 0.75,
                        e,
                    },
                    {
                        f: fltr,
                        w: 0.75,
                        e,
                    },
                ],
            });
        }
    }
};
