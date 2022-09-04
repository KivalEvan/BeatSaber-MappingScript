import { Axis, EaseType, EventBoxColor, TransitionType, types, utils, v3 } from '../../depsLocal.ts';
import { Brightness, eventBoxSwapColor, eventBoxTimeScale } from './helpers.ts';

export default (d: v3.Difficulty) => {
    for (let g = 14; g < 16; g++) {
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
        d.addLightRotationEventBoxGroups(
            {
                b: 70,
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
                b: 89.999,
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
                b: 90,
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
                b: 94,
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
            }
        );
    }
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
        { c: EventBoxColor.BLUE, b: 0.5, s: Brightness.OFF, i: TransitionType.INTERPOLATE },
    ];
    const downbeatTiming = [
        [90, 0],
        [90.5, 0],
        [91, 0],
        [91, 1],
        [91.5, 1],
        [92, 0],
        [92.5, 0],
        [93, 0],
        [93, 1],
        [93.5, 1],
    ];
    for (let g = 4; g < 12; g++) {
        d.addLightRotationEventBoxGroups({
            b: 100,
            g: g,
            e: [
                {
                    l: [{ p: 1 }, { b: 1 }],
                },
                { a: Axis.Y, l: [{ p: 1 }, { b: 1 }] },
            ],
        });
    }
    for (let g = 12; g < 14; g++) {
        d.addLightRotationEventBoxGroups(
            {
                b: 70,
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
                b: 94,
                g,
                e: [
                    {
                        s: 15,
                        f: fltr,
                        a: Axis.Y,
                        l: [{ r: 90 }, { b: 8, r: 75, e: EaseType.IN_QUAD }],
                    },
                    {
                        s: -15,
                        f: fltrR,
                        a: Axis.Y,
                        l: [{ r: 90 }, { b: 8, r: 105, e: EaseType.IN_QUAD }],
                    },
                    {
                        s: -90,
                        f: fltr,
                        l: [{ r: 270 }, { b: 8, r: 270, e: EaseType.IN_QUAD }],
                    },
                    {
                        s: -90,
                        r: 1,
                        f: fltrR,
                        l: [{ r: 270 }, { b: 8, r: 270, e: EaseType.IN_QUAD }],
                    },
                ],
            }
        );
        for (let b = 71; b < 90; b++) {
            const en = b === 86 ? eventBoxSwapColor(e) : e;
            d.addLightColorEventBoxGroups({
                b,
                g: b % 2 ? g + 2 : g,
                e: [
                    {
                        f: fltrR,
                        w: 0.75,
                        e: en,
                    },
                    {
                        f: fltr,
                        w: 0.75,
                        e: en,
                    },
                ],
            });
        }
        for (const dbt of downbeatTiming) {
            d.addLightColorEventBoxGroups({
                b: dbt[0],
                g: g + dbt[1] * 2,
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

    for (let g = 0; g < 12; g++) {
        d.addLightColorEventBoxGroups(
            {
                b: 69.999,
                g,
                e: [
                    {
                        e: [{ s: Brightness.OFF }],
                    },
                ],
            },
            {
                b: 70,
                g,
                e: [
                    {
                        w: g >= 8 && g < 12 ? 0.499 : 1,
                        e: [
                            { c: EventBoxColor.WHITE, s: 2.5 },
                            { b: 0.09375, s: Brightness.OFF, c: EventBoxColor.WHITE },
                            { b: 0.125, c: EventBoxColor.RED },
                        ],
                    },
                ],
            }
        );
    }

    for (let g = 0; g < 4; g++) {
        d.addLightRotationEventBoxGroups(
            {
                b: 70,
                g: g,
                e: [
                    {
                        r: 1,
                        l: [{ r: 135, e: EaseType.NONE }],
                    },
                    {
                        a: Axis.Y,
                        s: -30,
                        b: 1,
                        l: [{ r: 300, e: EaseType.NONE }],
                    },
                ],
            },
            {
                b: 78,
                g: g,
                e: [{ a: Axis.Y, l: [{ e: EaseType.OUT_QUAD }] }],
            }
        );
        for (let b = 70.5, flipFlop = false, first = true; b < 95; b += 12, flipFlop = !flipFlop, first = false) {
            d.addLightRotationEventBoxGroups({
                b: Math.min(b, 93.999),
                g: g,
                e: [
                    {
                        f: { f: 2, t: 2 },
                        r: 1,
                        s: flipFlop ? -15 : 15,
                        b: 1,
                        l: [{ r: flipFlop ? 150 : 120, e: first ? 2 : 3 }],
                    },
                    {
                        f: { f: 2, p: 1, t: 2 },
                        r: 1,
                        s: flipFlop ? 15 : -15,
                        b: 1,
                        l: [{ r: flipFlop ? 120 : 150, e: first ? 2 : 3 }],
                    },
                ],
            });
        }
        for (let b = 71; b < 94; b += 2) {
            d.addLightColorEventBoxGroups({
                b,
                g,
                e: [
                    {
                        f: { r: 1 },
                        w: 0.499,
                        e: [
                            { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                            { b: 0.28125, s: Brightness.OFF, c: EventBoxColor.BLUE },
                        ],
                    },
                ],
            });
            if (b < 90) {
                d.addLightColorEventBoxGroups({
                    b: b + 0.5,
                    g,
                    e: [
                        {
                            e: [
                                {
                                    b: 1,
                                    c: b === 85 ? EventBoxColor.RED : EventBoxColor.BLUE,
                                    s: Brightness.FULL,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                    ],
                });
            }
        }
        d.addLightRotationEventBoxGroups(
            {
                b: 94,
                g: g,
                e: [
                    {
                        f: { f: 2, t: 2 },
                        s: -90,
                        b: 1,
                        l: [{ r: 15, e: EaseType.NONE }],
                    },
                    {
                        f: { f: 2, p: 1, t: 2 },
                        s: 90,
                        b: 1,
                        l: [{ r: 75, e: EaseType.NONE }],
                    },
                ],
            },
            {
                b: 96,
                g: g,
                e: [
                    {
                        f: { f: 2, t: 2 },
                        s: -90,
                        b: 1,
                        l: [{ r: 330 }],
                    },
                    {
                        f: { f: 2, p: 1, t: 2 },
                        s: 90,
                        b: 1,
                        l: [{ r: 120 }],
                    },
                ],
            }
        );
    }
    for (let g = 4; g < 8; g++) {
        d.addLightRotationEventBoxGroups(
            {
                b: 70,
                g: g,
                e: [
                    { l: [{ r: 225 }] },
                    {
                        a: Axis.Y,
                        l: [{ r: 180, e: EaseType.NONE }],
                    },
                ],
            },
            {
                b: 75,
                g: g,
                e: [{ l: [{ r: 270, e: EaseType.OUT_QUAD }] }],
            },
            {
                b: 101,
                g: g,
                e: [{ l: [{ r: 270 }] }],
            }
        );
        for (let b = 71, flipFlop = false, first = true; b <= 95; b += 12, flipFlop = !flipFlop, first = false) {
            d.addLightRotationEventBoxGroups(
                {
                    b,
                    g: g,
                    e: [
                        {
                            f: { f: 2, p: 1, t: 2 },
                            a: Axis.Y,
                            l: [{ r: flipFlop ? 120 : 240, e: first ? 2 : 3 }],
                        },
                    ],
                },
                {
                    b: Math.min(b + 3, 95.999),
                    g: g,
                    e: [
                        {
                            f: { f: 2, t: 2 },
                            a: Axis.Y,
                            l: [{ r: flipFlop ? 240 : 120, e: first ? 2 : 3 }],
                        },
                    ],
                }
            );
        }
        d.addLightColorEventBoxGroups(
            {
                b: 71,
                g,
                e: [
                    {
                        f: { r: 1 },
                        w: 0.499,
                        e: [
                            { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                            { b: 0.28125, s: Brightness.OFF, c: EventBoxColor.BLUE },
                        ],
                    },
                ],
            },
            {
                b: 71.5,
                g,
                e: [
                    {
                        e: [{ b: 0.5, c: EventBoxColor.BLUE, s: Brightness.FULL, i: TransitionType.INTERPOLATE }],
                    },
                ],
            },
            {
                b: 86,
                g,
                e: [
                    {
                        w: 0.5,
                        e: [
                            { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                            { b: 0.09375, s: Brightness.OFF, c: EventBoxColor.WHITE },
                            { b: 0.125 },
                        ],
                    },
                ],
            },
            {
                b: 87,
                g,
                e: [
                    {
                        f: { r: 1 },
                        w: 0.499,
                        e: [
                            { c: EventBoxColor.RED, s: Brightness.EXTRA },
                            { b: 0.28125, s: Brightness.OFF, c: EventBoxColor.BLUE },
                        ],
                    },
                ],
            },
            {
                b: 87.5,
                g,
                e: [
                    {
                        e: [{ b: 0.5, c: EventBoxColor.BLUE, s: Brightness.FULL, i: TransitionType.INTERPOLATE }],
                    },
                ],
            }
        );
        for (let b = 71.5; b < 93.5; b += 0.5) {
            if (b >= 86 && b < 87.5) {
                continue;
            }
            d.addLightColorEventBoxGroups({
                b: b + utils.random(0, 0.375),
                g,
                e: [
                    {
                        f: { f: 2, p: utils.random(0, 7, true), t: 8 },
                        e: [
                            { i: TransitionType.EXTEND },
                            { b: 0.125, c: EventBoxColor.WHITE, i: TransitionType.INTERPOLATE, s: Brightness.EXTRA },
                            { b: 0.375, c: EventBoxColor.BLUE, i: TransitionType.INTERPOLATE },
                        ],
                    },
                ],
            });
        }
        d.addLightColorEventBoxGroups({
            b: 93.5,
            g,
            e: [
                {
                    f: { r: 1 },
                    w: 0.499,
                    e: [
                        { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                        { b: 0.25, c: EventBoxColor.WHITE, s: Brightness.OFF },
                    ],
                },
            ],
        });
    }
    for (let g = 8; g < 12; g++) {
        d.addLightRotationEventBoxGroups(
            {
                b: 70,
                g: g,
                e: [
                    {
                        r: 1,
                        l: [{ r: 172.5, e: EaseType.NONE }],
                    },
                    {
                        a: Axis.Y,
                        r: 1,
                        l: [{ r: 300, e: EaseType.NONE }],
                    },
                ],
            },
            {
                b: 76,
                g: g,
                e: [{ a: Axis.Y, r: 1, l: [{ e: EaseType.OUT_QUAD }] }],
            },
            {
                b: 100,
                g: g,
                e: [{ l: [{ r: 270 }] }],
            }
        );
        for (let b = 72, flipFlop = false, first = true; b <= 96; b += 12, flipFlop = !flipFlop, first = false) {
            d.addLightRotationEventBoxGroups({
                b,
                g: g,
                e: [
                    {
                        f: { f: 2, t: 2 },
                        r: 1,
                        s: flipFlop ? -30 : 30,
                        b: 1,
                        l: [{ r: flipFlop ? 165 : 180, e: first ? 2 : 3 }],
                    },
                ],
            });
            d.addLightRotationEventBoxGroups({
                b: b + 2,
                g: g,
                e: [
                    {
                        f: { f: 2, p: 1, t: 2 },
                        r: 1,
                        s: flipFlop ? 30 : -30,
                        b: 1,
                        l: [{ r: flipFlop ? 180 : 165, e: first ? 2 : 3 }],
                    },
                ],
            });
        }
        for (let b = 70, flipFlop = false; b < 94; b += 4, flipFlop = !flipFlop) {
            if (flipFlop ? g % 2 : !(g % 2)) {
                d.addLightColorEventBoxGroups({
                    b: b + 0.5,
                    g,
                    e: [
                        {
                            w: 0.999,
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                { b: 0.28125, c: EventBoxColor.WHITE, s: Brightness.OFF },
                                { b: 0.78125, c: EventBoxColor.BLUE, i: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                });
            } else {
                d.addLightColorEventBoxGroups({
                    b: b + 1,
                    g,
                    e: [
                        {
                            w: 0.999,
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                { b: 0.28125, c: EventBoxColor.WHITE, s: Brightness.OFF },
                                { b: 0.78125, c: EventBoxColor.BLUE, i: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                });
            }
            if (flipFlop ? g % 4 === 0 || g % 4 === 3 : g % 4 === 1 || g % 4 === 2) {
                d.addLightColorEventBoxGroups({
                    b: b + 2,
                    g,
                    e: [
                        {
                            w: 0.999,
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                { b: 0.28125, c: EventBoxColor.WHITE, s: Brightness.OFF },
                                { b: 0.78125, c: EventBoxColor.BLUE, i: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                });
            } else {
                d.addLightColorEventBoxGroups({
                    b: b + 2.5,
                    g,
                    e: [
                        {
                            w: 0.999,
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                { b: 0.28125, c: EventBoxColor.WHITE, s: Brightness.OFF },
                                { b: 0.78125, c: EventBoxColor.BLUE, i: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                });
            }
            if (b === 90) {
                d.addLightColorEventBoxGroups({
                    b: b + 3.5,
                    g,
                    e: [
                        {
                            f: { r: 1 },
                            w: 0.499,
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                { b: 0.25, c: EventBoxColor.WHITE, s: Brightness.OFF },
                            ],
                        },
                    ],
                });
            } else {
                d.addLightColorEventBoxGroups({
                    b: b + 3.5,
                    g,
                    e: [
                        {
                            f: { r: 1 },
                            w: 0.999,
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                { b: 0.25, c: EventBoxColor.WHITE, s: Brightness.OFF },
                                {
                                    b: 0.75,
                                    c: b === 82 ? EventBoxColor.RED : EventBoxColor.BLUE,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                    ],
                });
            }
        }
    }
};
