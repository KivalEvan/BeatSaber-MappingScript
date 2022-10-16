import { Axis, EaseType, EventBoxColor, TransitionType, types, v3 } from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

export default (d: v3.Difficulty) => {
    const repeatTiming = [94, 254, 414];
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
    for (const rt of repeatTiming) {
        d.addColorBoostEvents({ b: rt, o: true }, { b: rt + 4, o: false }, { b: rt + 6, o: true });
        for (let g = 0; g < 4; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: rt,
                    g: g,
                    e: [
                        {
                            s: 30,
                            a: 1,
                            l: [{ r: 15, e: EaseType.NONE }],
                        },
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
                    b: rt + 2.5,
                    g: g,
                    e: [
                        { a: 1, l: [{ e: EaseType.IN_QUAD }] },
                        {
                            f: { f: 2, t: 2 },
                            s: -135,
                            b: 1,
                            l: [{ r: 300 }],
                        },
                        {
                            f: { f: 2, p: 1, t: 2 },
                            s: 135,
                            b: 1,
                            l: [{ r: 150 }],
                        },
                    ],
                },
            );
            for (let i = 0; i < 4; i++) {
                d.addLightColorEventBoxGroups({
                    b: rt + i * 0.25,
                    g,
                    e: [
                        {
                            f: { f: 2, p: 0 + i * 2, t: 999 },
                            e: [
                                {
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.DOUBLE,
                                },
                                { b: 0.125, i: TransitionType.EXTEND },
                                { b: 0.25, c: EventBoxColor.RED, s: Brightness.FULL, i: TransitionType.INTERPOLATE },
                                { b: 1, c: EventBoxColor.BLUE, s: Brightness.MODERATE, i: TransitionType.INTERPOLATE },
                                {
                                    b: 1.125,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.DOUBLE,
                                    i: TransitionType.INTERPOLATE,
                                },
                                {
                                    b: 1.25,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.ZERO,
                                },
                            ],
                        },
                        {
                            f: { f: 2, p: 1 + i * 2, t: 999 },
                            e: [
                                {
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.DOUBLE,
                                },
                                { b: 0.125, i: TransitionType.EXTEND },
                                { b: 0.25, c: EventBoxColor.RED, s: Brightness.FULL, i: TransitionType.INTERPOLATE },
                                { b: 1, c: EventBoxColor.BLUE, s: Brightness.MODERATE, i: TransitionType.INTERPOLATE },
                                {
                                    b: 1.125,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.DOUBLE,
                                    i: TransitionType.INTERPOLATE,
                                },
                                {
                                    b: 1.25,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                });
            }
        }
        for (let g = 12; g < 14; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: rt,
                    g,
                    e: [
                        {
                            l: [{ r: 120 }],
                        },
                        {
                            f: fltr,
                            a: Axis.Y,
                            b: 1,
                            s: -75,
                            l: [{ r: 255 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            b: 1,
                            s: 75,
                            l: [{ r: 105 }],
                        },
                    ],
                },
                {
                    b: rt + 3,
                    g,
                    e: [
                        {
                            l: [{ r: 60, e: EaseType.INOUT_QUAD }],
                        },
                        {
                            f: fltr,
                            a: Axis.Y,
                            b: 1,
                            s: -120,
                            l: [{ r: 210, e: EaseType.INOUT_QUAD }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            b: 1,
                            s: 120,
                            l: [{ r: 150, e: EaseType.INOUT_QUAD }],
                        },
                    ],
                },
            );
            d.addLightColorEventBoxGroups({
                b: rt,
                g,
                e: [
                    {
                        f: fltr,
                        w: 2,
                        e: [
                            { f: 8, c: EventBoxColor.WHITE, s: Brightness.FULL },
                            { b: 0.5, c: EventBoxColor.BLUE, f: 8, s: Brightness.FLASH, i: TransitionType.INTERPOLATE },
                            { b: 1, f: 8, s: Brightness.EXTRA, i: TransitionType.INTERPOLATE },
                            { b: 1.5, c: EventBoxColor.WHITE, s: Brightness.ZERO, i: TransitionType.INTERPOLATE },
                        ],
                    },
                    {
                        f: fltrR,
                        w: 2,
                        e: [
                            { f: 8, c: EventBoxColor.WHITE, s: Brightness.FULL },
                            { b: 0.5, c: EventBoxColor.BLUE, f: 8, s: Brightness.FLASH, i: TransitionType.INTERPOLATE },
                            { b: 1, f: 8, s: Brightness.EXTRA, i: TransitionType.INTERPOLATE },
                            { b: 1.5, c: EventBoxColor.WHITE, s: Brightness.ZERO, i: TransitionType.INTERPOLATE },
                        ],
                    },
                ],
            });
        }

        for (let g = 4; g < 8; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: rt + 2,
                    g: g,
                    e: [
                        {
                            f: { f: 2, t: 2 },
                            s: -45,
                            b: 1,
                            l: [{ r: 120, e: EaseType.NONE }],
                        },
                        {
                            f: { f: 2, p: 1, t: 2 },
                            s: 45,
                            b: 1,
                            l: [{ r: 60, e: EaseType.NONE }],
                        },
                    ],
                },
                {
                    b: rt + 3.999,
                    g: g,
                    e: [
                        {
                            f: { f: 2, t: 2 },
                            s: -135,
                            b: 1,
                            l: [{ r: 210 }],
                        },
                        {
                            f: { f: 2, p: 1, t: 2 },
                            s: 135,
                            b: 1,
                            l: [{ r: 150 }],
                        },
                    ],
                },
            );
            for (let i = 0; i < 4; i++) {
                d.addLightColorEventBoxGroups({
                    b: rt + 2 + i * 0.25,
                    g,
                    e: [
                        {
                            f: { f: 2, p: 0 + i * 2, t: 999, r: 1 },
                            e: [
                                {
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.DOUBLE,
                                },
                                { b: 0.125, i: TransitionType.EXTEND },
                                { b: 0.25, c: EventBoxColor.BLUE, s: Brightness.FULL, i: TransitionType.INTERPOLATE },
                                { b: 1, c: EventBoxColor.RED, s: Brightness.MODERATE, i: TransitionType.INTERPOLATE },
                                {
                                    b: 1.125,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.DOUBLE,
                                    i: TransitionType.INTERPOLATE,
                                },
                                {
                                    b: 1.25,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.ZERO,
                                },
                            ],
                        },
                        {
                            f: { f: 2, p: 1 + i * 2, t: 999, r: 1 },
                            e: [
                                {
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.DOUBLE,
                                },
                                { b: 0.125, i: TransitionType.EXTEND },
                                { b: 0.25, c: EventBoxColor.RED, s: Brightness.FULL, i: TransitionType.INTERPOLATE },
                                { b: 1, c: EventBoxColor.BLUE, s: Brightness.MODERATE, i: TransitionType.INTERPOLATE },
                                {
                                    b: 1.125,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.DOUBLE,
                                    i: TransitionType.INTERPOLATE,
                                },
                                {
                                    b: 1.25,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                });
            }
        }
        for (let g = 14; g < 16; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: rt + 2,
                    g,
                    e: [
                        {
                            l: [{ r: 120 }],
                        },
                        {
                            f: fltr,
                            a: Axis.Y,
                            b: 1,
                            s: -75,
                            l: [{ r: 240 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            b: 1,
                            s: 75,
                            l: [{ r: 120 }],
                        },
                    ],
                },
                {
                    b: rt + 4.999,
                    g,
                    e: [
                        {
                            l: [{ r: 60, e: EaseType.INOUT_QUAD }],
                        },
                        {
                            f: fltr,
                            a: Axis.Y,
                            b: 1,
                            s: -120,
                            l: [{ r: 180, e: EaseType.INOUT_QUAD }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            b: 1,
                            s: 120,
                            l: [{ r: 180, e: EaseType.INOUT_QUAD }],
                        },
                    ],
                },
            );
            d.addLightColorEventBoxGroups({
                b: rt + 2,
                g,
                e: [
                    {
                        f: fltr,
                        w: 2,
                        e: [
                            { f: 8, c: EventBoxColor.WHITE, s: Brightness.FULL },
                            { b: 0.5, c: EventBoxColor.BLUE, f: 8, s: Brightness.FLASH, i: TransitionType.INTERPOLATE },
                            { b: 1, f: 8, s: Brightness.EXTRA, i: TransitionType.INTERPOLATE },
                            { b: 1.5, c: EventBoxColor.WHITE, s: Brightness.ZERO, i: TransitionType.INTERPOLATE },
                        ],
                    },
                    {
                        f: fltrR,
                        w: 2,
                        e: [
                            { f: 8, c: EventBoxColor.WHITE, s: Brightness.FULL },
                            { b: 0.5, c: EventBoxColor.BLUE, f: 8, s: Brightness.FLASH, i: TransitionType.INTERPOLATE },
                            { b: 1, f: 8, s: Brightness.EXTRA, i: TransitionType.INTERPOLATE },
                            { b: 1.5, c: EventBoxColor.WHITE, s: Brightness.ZERO, i: TransitionType.INTERPOLATE },
                        ],
                    },
                ],
            });
        }

        for (let g = 0; g < 8; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: rt + 4,
                    g,
                    e: [
                        {
                            f: { f: 2, t: 2 },
                            l: [{ r: g < 4 ? 120 : 300 }],
                        },
                        {
                            f: { f: 2, t: 2, p: 1 },
                            l: [{ r: g < 4 ? 270 : 180 }],
                        },
                        {
                            a: Axis.Y,
                            l: [{}],
                        },
                    ],
                },
                {
                    b: rt + 4.999,
                    g,
                    e: [
                        {
                            f: { f: 2, t: 2 },
                            l: [{ r: g < 4 ? 120 : 300 }],
                        },
                        {
                            f: { f: 2, t: 2, p: 1 },
                            l: [{ r: g < 4 ? 270 : 180 }],
                        },
                        {
                            a: Axis.Y,
                            l: [{}],
                        },
                    ],
                },
            );
            d.addLightColorEventBoxGroups({
                b: rt + 4,
                g,
                e: [
                    {
                        f: { f: 2, t: 2 },
                        w: 1,
                        e: [
                            { c: EventBoxColor.WHITE, s: Brightness.TRIPLE },
                            { b: 0.125, i: TransitionType.EXTEND },
                            { b: 0.15625, s: 0 },
                            { b: 0.1875, c: EventBoxColor.RED, s: Brightness.EXTRA },
                            { b: 0.75, c: EventBoxColor.BLUE, f: 8, s: Brightness.ZERO, i: TransitionType.INTERPOLATE },
                        ],
                    },
                    {
                        f: { f: 2, t: 2, p: 1 },
                        w: 1,
                        e: [
                            { c: EventBoxColor.WHITE, s: Brightness.TRIPLE },
                            { b: 0.125, i: TransitionType.EXTEND },
                            { b: 0.15625, s: 0 },
                            { b: 0.1875, c: EventBoxColor.RED, s: Brightness.EXTRA },
                            { b: 0.75, c: EventBoxColor.BLUE, f: 8, s: Brightness.ZERO, i: TransitionType.INTERPOLATE },
                        ],
                    },
                ],
            });
        }
        for (let g = 8; g < 12; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: rt + 5,
                    g,
                    e: [
                        {
                            f: { f: 2, t: 2 },
                            l: [{ r: 270 }],
                        },
                        {
                            f: { f: 2, t: 2, p: 1 },
                            l: [{ r: 135 }],
                        },
                        {
                            a: Axis.Y,
                            l: [{}],
                        },
                    ],
                },
                {
                    b: rt + 5.999,
                    g,
                    e: [
                        {
                            f: { f: 2, t: 2 },
                            l: [{ r: 270 }],
                        },
                        {
                            f: { f: 2, t: 2, p: 1 },
                            l: [{ r: 135 }],
                        },
                        {
                            a: Axis.Y,
                            l: [{}],
                        },
                    ],
                },
            );
            d.addLightColorEventBoxGroups({
                b: rt + 5,
                g,
                e: [
                    {
                        f: { f: 2, t: 2 },
                        w: 1,
                        e: [
                            { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                            { b: 0.125, i: TransitionType.EXTEND },
                            { b: 0.15625, s: 0 },
                            { b: 0.1875, c: EventBoxColor.RED, s: Brightness.EXTRA },
                            { b: 0.75, c: EventBoxColor.BLUE, f: 8, s: Brightness.ZERO, i: TransitionType.INTERPOLATE },
                        ],
                    },
                    {
                        f: { f: 2, t: 2, p: 1 },
                        w: 1,
                        e: [
                            { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                            { b: 0.125, i: TransitionType.EXTEND },
                            { b: 0.15625, s: 0 },
                            { b: 0.1875, c: EventBoxColor.RED, s: Brightness.EXTRA },
                            { b: 0.75, c: EventBoxColor.BLUE, f: 8, s: Brightness.ZERO, i: TransitionType.INTERPOLATE },
                        ],
                    },
                ],
            });
        }

        for (let g = 0; g < 4; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: rt + 6,
                    g: g,
                    e: [
                        {
                            f: { f: 2, t: 2 },
                            s: -45,
                            b: 1,
                            l: [{ r: 60, e: EaseType.NONE }],
                        },
                        {
                            f: { f: 2, p: 1, t: 2 },
                            s: 45,
                            b: 1,
                            l: [{ r: 300, e: EaseType.NONE }],
                        },
                    ],
                },
                {
                    b: rt + 7.999,
                    g: g,
                    e: [
                        {
                            f: { f: 2, t: 2 },
                            s: 135,
                            b: 1,
                            r: 1,
                            l: [{ r: 120 }],
                        },
                        {
                            f: { f: 2, p: 1, t: 2 },
                            s: -135,
                            b: 1,
                            r: 1,
                            l: [{ r: 150 }],
                        },
                    ],
                },
            );
            for (let i = 0; i < 4; i++) {
                d.addLightColorEventBoxGroups({
                    b: rt + 6 + i * 0.25,
                    g,
                    e: [
                        {
                            f: { f: 2, p: 0 + i * 2, t: 999, r: 1 },
                            e: [
                                {
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.DOUBLE,
                                },
                                { b: 0.125, i: TransitionType.EXTEND },
                                { b: 0.25, c: EventBoxColor.BLUE, s: Brightness.FULL, i: TransitionType.INTERPOLATE },
                                { b: 1, c: EventBoxColor.RED, s: Brightness.MODERATE, i: TransitionType.INTERPOLATE },
                                {
                                    b: 1.125,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.DOUBLE,
                                    i: TransitionType.INTERPOLATE,
                                },
                                {
                                    b: 1.25,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.ZERO,
                                },
                            ],
                        },
                        {
                            f: { f: 2, p: 1 + i * 2, t: 999, r: 1 },
                            e: [
                                {
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.DOUBLE,
                                },
                                { b: 0.125, i: TransitionType.EXTEND },
                                { b: 0.25, c: EventBoxColor.RED, s: Brightness.FULL, i: TransitionType.INTERPOLATE },
                                { b: 1, c: EventBoxColor.BLUE, s: Brightness.MODERATE, i: TransitionType.INTERPOLATE },
                                {
                                    b: 1.125,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.DOUBLE,
                                    i: TransitionType.INTERPOLATE,
                                },
                                {
                                    b: 1.25,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                });
            }
        }
        for (let g = 12; g < 14; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: rt + 6,
                    g,
                    e: [
                        {
                            l: [{ r: 120 }],
                        },
                        {
                            f: fltr,
                            a: Axis.Y,
                            b: 1,
                            s: -75,
                            l: [{ r: 240 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            b: 1,
                            s: 75,
                            l: [{ r: 120 }],
                        },
                    ],
                },
                {
                    b: rt + 7.999,
                    g,
                    e: [
                        {
                            l: [{ r: 60, e: EaseType.INOUT_QUAD }],
                        },
                        {
                            f: fltr,
                            a: Axis.Y,
                            b: 1,
                            s: -120,
                            l: [{ r: 180, e: EaseType.INOUT_QUAD }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            b: 1,
                            s: 120,
                            l: [{ r: 180, e: EaseType.INOUT_QUAD }],
                        },
                    ],
                },
            );
            d.addLightColorEventBoxGroups({
                b: rt + 6,
                g,
                e: [
                    {
                        f: fltr,
                        w: 2,
                        e: [
                            { f: 8, c: EventBoxColor.WHITE, s: Brightness.FULL },
                            { b: 0.5, c: EventBoxColor.BLUE, f: 8, s: Brightness.FLASH, i: TransitionType.INTERPOLATE },
                            { b: 1, f: 8, s: Brightness.EXTRA, i: TransitionType.INTERPOLATE },
                            { b: 1.5, c: EventBoxColor.WHITE, s: Brightness.ZERO, i: TransitionType.INTERPOLATE },
                        ],
                    },
                    {
                        f: fltrR,
                        w: 2,
                        e: [
                            { f: 8, c: EventBoxColor.WHITE, s: Brightness.FULL },
                            { b: 0.5, c: EventBoxColor.BLUE, f: 8, s: Brightness.FLASH, i: TransitionType.INTERPOLATE },
                            { b: 1, f: 8, s: Brightness.EXTRA, i: TransitionType.INTERPOLATE },
                            { b: 1.5, c: EventBoxColor.WHITE, s: Brightness.ZERO, i: TransitionType.INTERPOLATE },
                        ],
                    },
                ],
            });
        }
    }
};
