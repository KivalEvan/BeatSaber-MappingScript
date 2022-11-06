import { Axis, EaseType, EventBoxColor, TransitionType, types, utils, v3 } from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

export default (d: v3.Difficulty) => {
    const synthGroup = [0, 1, 4, 3, 1, 2, 5, 4, 2, 3, 6, 5, 7, 4, 5, 2];

    const kGroup = [0, 1, 4, 5, 10, 11];
    const kTiming = [8.5, 10, 11.5, 24.5, 26, 27.5];
    const repeatTiming = [38, 422];
    for (const rt of repeatTiming) {
        d.addColorBoostEvents({ b: rt, o: true });
        //#region clap
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
                    b: rt,
                    g,
                    e: [
                        {
                            l: [{ e: EaseType.NONE, r: 90 }],
                        },
                        {
                            f: fltr,
                            a: Axis.Y,
                            r: 1,
                            l: [{ e: EaseType.NONE, r: 270 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            r: 1,
                            l: [{ e: EaseType.NONE, r: 90 }],
                        },
                    ],
                },
                {
                    b: rt + 31,
                    g,
                    e: [
                        {
                            l: [{ e: EaseType.NONE, r: 90 }],
                        },
                        {
                            f: fltr,
                            a: Axis.Y,
                            r: 1,
                            l: [{ e: EaseType.NONE, r: 270 }],
                        },
                        {
                            f: fltrR,
                            a: Axis.Y,
                            r: 1,
                            l: [{ e: EaseType.NONE, r: 90 }],
                        },
                    ],
                },
            );
            const e = [
                { c: EventBoxColor.WHITE, s: Brightness.FULL },
                {
                    c: EventBoxColor.WHITE,
                    s: Brightness.ZERO,
                    i: TransitionType.INTERPOLATE,
                    b: 0.25,
                },
            ] as Partial<types.v3.ILightColorBase>[];
            for (let b = rt; b <= rt + 28; b++) {
                d.addLightColorEventBoxGroups({
                    b,
                    g,
                    e: [
                        { f: fltr, e, w: 0.5, r: -0.5 },
                        { f: fltrR, e, w: 0.5, r: -0.5 },
                    ],
                });
            }
        }
        //#endregion
        for (const kt of kTiming) {
            for (const kg of kGroup) {
                d.addLightColorEventBoxGroups({
                    b: rt + kt,
                    g: kg,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [
                                { s: Brightness.EXTRA, c: EventBoxColor.WHITE },
                                { b: 0.125, i: TransitionType.EXTEND },
                                {
                                    b: 0.375,
                                    s: Brightness.FULL,
                                    i: TransitionType.INTERPOLATE,
                                },
                                {
                                    b: 0.499,
                                    c: EventBoxColor.BLUE,
                                    s: Brightness.HALF,
                                    i: TransitionType.INTERPOLATE,
                                },
                                { b: 0.5, s: Brightness.EXTRA },
                                { b: 0.625, i: TransitionType.EXTEND },
                                {
                                    b: 0.999,
                                    c: EventBoxColor.BLUE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                },
                            ],
                        },
                        {
                            f: { f: 2, t: 2, p: 0 },
                            e: [
                                { s: Brightness.EXTRA, c: EventBoxColor.WHITE },
                                { b: 0.125, i: TransitionType.EXTEND },
                                {
                                    b: 0.375,
                                    s: Brightness.FULL,
                                    i: TransitionType.INTERPOLATE,
                                },
                                {
                                    b: 0.5,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                    ],
                });
                const startRandom = (utils.random(-7, 7, true) * 45) % 360;
                d.addLightRotationEventBoxGroups(
                    {
                        b: rt + kt - 0.125,
                        g: kg,
                        e: [
                            {
                                s: Math.random() > 0.5 ? 45 : -45,
                                t: 2,
                                b: 1,
                                l: [
                                    {
                                        e: EaseType.NONE,
                                        r: startRandom,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        b: rt + kt,
                        g: kg,
                        e: [
                            {
                                s: Math.random() > 0.5 ? 45 : -45,
                                t: 2,
                                b: 1,
                                l: [
                                    {
                                        e: EaseType.NONE,
                                        r: startRandom,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        b: rt + kt + 0.5,
                        g: kg,
                        e: [
                            {
                                s: Math.random() > 0.5 ? 90 : -90,
                                t: 2,
                                b: 1,
                                l: [
                                    {
                                        e: EaseType.NONE,
                                        p: 1,
                                    },
                                    {
                                        b: 0.125,
                                        e: EaseType.IN_QUAD,
                                        r: (utils.random(-3, 3, true) * 90) % 360,
                                    },
                                ],
                            },
                        ],
                    },
                );
            }
        }
        for (let g = 6; g <= 7; g++) {
            d.addLightRotationEventBoxGroups(
                {
                    b: rt - 1,
                    g,
                    e: [{ l: [{ p: 1 }] }, { a: Axis.Y, l: [{ p: 1 }] }],
                },
                {
                    b: rt,
                    g,
                    e: [
                        { l: [{ r: -90 }] },
                        { a: Axis.Y, s: 180, t: 2, b: 1, l: [{}] },
                    ],
                },
            );
            for (let i = 0; i < (rt === 38 ? 56 : 60); i++) {
                d.addLightColorEventBoxGroups({
                    b: rt + i * 0.5,
                    g,
                    e: [
                        {
                            f: { f: 2, p: synthGroup[i % synthGroup.length], t: 999 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.ZERO },
                                {
                                    b: 0.0625,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.MODERATE,
                                },
                                { b: 0.1875, i: TransitionType.EXTEND },
                                {
                                    b: 0.25,
                                    s: Brightness.FULL,
                                    i: TransitionType.INTERPOLATE,
                                },
                                {
                                    b: 0.4375,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                    ],
                });
            }
        }

        for (let i = 0; i < 2; i++) {
            d.addLightColorEventBoxGroups(
                {
                    b: rt - 1,
                    g: 0 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [
                                { i: TransitionType.EXTEND },
                                { b: 0.874, i: TransitionType.INTERPOLATE },
                                { b: 0.875, s: Brightness.ZERO },
                            ],
                        },
                        {
                            f: { f: 2, t: 2 },
                            w: 1,
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                {
                                    b: 0.25,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 1,
                    g: 4 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [
                                { i: TransitionType.EXTEND },
                                { b: 0.874, i: TransitionType.INTERPOLATE },
                                { b: 0.875, s: Brightness.ZERO },
                            ],
                        },
                        {
                            f: { f: 2, t: 2 },
                            w: 1,
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                {
                                    b: 0.25,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 1,
                    g: 10 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [
                                { i: TransitionType.EXTEND },
                                { b: 0.874, i: TransitionType.INTERPOLATE },
                                { b: 0.875, s: Brightness.ZERO },
                            ],
                        },
                        {
                            f: { f: 2, t: 2 },
                            w: 1,
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                {
                                    b: 0.25,
                                    c: EventBoxColor.WHITE,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 0 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.DOUBLE,
                                    f: 12,
                                },
                                {
                                    b: 6,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                    f: 6,
                                },
                            ],
                        },
                        {
                            f: { f: 2, t: 2, p: 0 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.DOUBLE,
                                    f: 12,
                                },
                                {
                                    b: 6,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                    f: 6,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 4 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.DOUBLE,
                                    f: 12,
                                },
                                {
                                    b: 6,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                    f: 6,
                                },
                            ],
                        },
                        {
                            f: { f: 2, t: 2, p: 0 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.DOUBLE,
                                    f: 12,
                                },
                                {
                                    b: 6,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                    f: 6,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 10 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.DOUBLE,
                                    f: 12,
                                },
                                {
                                    b: 6,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                    f: 6,
                                },
                            ],
                        },
                        {
                            f: { f: 2, t: 2, p: 0 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.DOUBLE,
                                    f: 12,
                                },
                                {
                                    b: 6,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                    f: 6,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 8 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 4.375,
                            e: [
                                { b: 0, c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                { b: 0.25, c: EventBoxColor.WHITE },
                                {
                                    b: 4,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                },
            );
            d.addLightRotationEventBoxGroups(
                {
                    b: rt - 1,
                    g: 0 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            w: 1,
                            s: 180,
                            t: 2,
                            l: [{ e: EaseType.NONE, p: 1 }, { b: 0.25 }],
                        },
                        {
                            f: { f: 2, t: 2 },
                            w: 1,
                            s: 45,
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, r: 180 },
                                { b: 0.25, r: 180 },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 1,
                    g: 4 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            w: 1,
                            s: 180,
                            t: 2,
                            l: [{ e: EaseType.NONE, p: 1 }, { b: 0.25 }],
                        },
                        {
                            f: { f: 2, t: 2 },
                            w: 1,
                            s: 45,
                            t: 2,
                            b: 1,
                            l: [{ e: EaseType.NONE }, { b: 0.25 }],
                        },
                    ],
                },
                {
                    b: rt - 1,
                    g: 10 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            w: 1,
                            s: 180,
                            t: 2,
                            l: [{ e: EaseType.NONE, p: 1 }, { b: 0.25 }],
                        },
                        {
                            f: { f: 2, t: 2 },
                            w: 1,
                            s: 45,
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, r: 90 },
                                { b: 0.25, r: 90 },
                            ],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 0 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            s: -45,
                            t: 2,
                            b: 1,
                            r: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 45 },
                            ],
                        },
                        {
                            f: { f: 2, t: 4, p: 0 },
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 225 },
                            ],
                        },
                        {
                            f: { f: 2, t: 4, p: 2 },
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 180 },
                            ],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 4 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            s: -45,
                            t: 2,
                            b: 1,
                            r: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 45 },
                            ],
                        },
                        {
                            f: { f: 2, t: 4, p: 0 },
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 225 },
                            ],
                        },
                        {
                            f: { f: 2, t: 4, p: 2 },
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 180 },
                            ],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 10 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            s: -45,
                            t: 2,
                            b: 1,
                            r: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 45 },
                            ],
                        },
                        {
                            f: { f: 2, t: 4, p: 0 },
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 225 },
                            ],
                        },
                        {
                            f: { f: 2, t: 4, p: 2 },
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 180 },
                            ],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 8 + i,
                    e: [
                        { a: Axis.Y, l: [{}] },
                        {
                            f: { f: 2, t: 2, p: 0, r: 1 },
                            l: [{ r: 135 }],
                        },
                        {
                            f: { f: 2, t: 2, p: 1, r: 1 },
                            l: [{ r: 135 }],
                        },
                    ],
                },
                {
                    b: rt + 4,
                    g: 8 + i,
                    e: [
                        { a: Axis.Y, l: [{}] },
                        {
                            f: { f: 2, t: 2, p: 0, r: 1 },
                            b: 1,
                            s: -45,
                            l: [{ r: 135, e: EaseType.OUT_QUAD }],
                        },
                        {
                            f: { f: 2, t: 2, p: 1, r: 1 },
                            b: 1,
                            s: 45,
                            l: [{ r: 135, e: EaseType.OUT_QUAD }],
                        },
                    ],
                },
            );

            d.addLightColorEventBoxGroups(
                {
                    b: rt + 16,
                    g: 0 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [
                                { b: 0, s: Brightness.DOUBLE, f: 12 },
                                {
                                    b: 6,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                    f: 6,
                                },
                            ],
                        },
                        {
                            f: { f: 2, t: 2, p: 0 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.DOUBLE,
                                    f: 12,
                                },
                                {
                                    b: 6,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                    f: 6,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt + 16,
                    g: 4 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [
                                { b: 0, s: Brightness.DOUBLE, f: 12 },
                                {
                                    b: 6,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                    f: 6,
                                },
                            ],
                        },
                        {
                            f: { f: 2, t: 2, p: 0 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.DOUBLE,
                                    f: 12,
                                },
                                {
                                    b: 6,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                    f: 6,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt + 16,
                    g: 10 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [
                                { b: 0, s: Brightness.DOUBLE, f: 12 },
                                {
                                    b: 6,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                    f: 6,
                                },
                            ],
                        },
                        {
                            f: { f: 2, t: 2, p: 0 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.DOUBLE,
                                    f: 12,
                                },
                                {
                                    b: 6,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                    f: 6,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt + 16,
                    g: 8 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 4.375,
                            e: [
                                { b: 0, c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                                { b: 0.25, c: EventBoxColor.WHITE },
                                {
                                    b: 4,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                },
            );
            d.addLightRotationEventBoxGroups(
                {
                    b: rt + 16,
                    g: 0 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            s: 45,
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 135 },
                            ],
                        },
                        {
                            f: { f: 2, t: 4, p: 0 },
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 180 },
                            ],
                        },
                        {
                            f: { f: 2, t: 4, p: 2 },
                            t: 2,
                            b: 1,
                            l: [{ e: EaseType.NONE, p: 1 }, { b: 0.25 }],
                        },
                    ],
                },
                {
                    b: rt + 16,
                    g: 4 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            s: 45,
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 135 },
                            ],
                        },
                        {
                            f: { f: 2, t: 4, p: 0 },
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 180 },
                            ],
                        },
                        {
                            f: { f: 2, t: 4, p: 2 },
                            t: 2,
                            b: 1,
                            l: [{ e: EaseType.NONE, p: 1 }, { b: 0.25 }],
                        },
                    ],
                },
                {
                    b: rt + 16,
                    g: 10 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            s: 45,
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 135 },
                            ],
                        },
                        {
                            f: { f: 2, t: 4, p: 0 },
                            t: 2,
                            b: 1,
                            l: [
                                { e: EaseType.NONE, p: 1 },
                                { b: 0.25, r: 180 },
                            ],
                        },
                        {
                            f: { f: 2, t: 4, p: 2 },
                            t: 2,
                            b: 1,
                            l: [{ e: EaseType.NONE, p: 1 }, { b: 0.25 }],
                        },
                    ],
                },
                {
                    b: rt + 16,
                    g: 8 + i,
                    e: [
                        { a: Axis.Y, l: [{}] },
                        {
                            f: { f: 2, t: 2, p: 0, r: 1 },
                            l: [{ r: 135 }],
                        },
                        {
                            f: { f: 2, t: 2, p: 1, r: 1 },
                            l: [{ r: 135 }],
                        },
                    ],
                },
                {
                    b: rt + 20,
                    g: 8 + i,
                    e: [
                        { a: Axis.Y, l: [{}] },
                        {
                            f: { f: 2, t: 2, p: 0, r: 1 },
                            b: 1,
                            s: -45,
                            l: [{ r: 135, e: EaseType.OUT_QUAD }],
                        },
                        {
                            f: { f: 2, t: 2, p: 1, r: 1 },
                            b: 1,
                            s: 45,
                            l: [{ r: 135, e: EaseType.OUT_QUAD }],
                        },
                    ],
                },
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
        d.addLightRotationEventBoxGroups(
            {
                b: rt,
                g: 13,
                e: [
                    { b: 1, l: [{ r: 180 }, { b: 30, p: 1 }] },
                    {
                        f: fltr,
                        a: Axis.Y,
                        l: [{ r: 90 }, { b: 30, p: 1 }],
                    },
                    {
                        f: fltrR,
                        a: Axis.Y,
                        l: [{ r: 90 }, { b: 30, p: 1 }],
                    },
                ],
            },
            {
                b: rt + 1,
                g: 13,
                e: [
                    { f: { f: 2, t: 999 }, a: Axis.Y, l: [{ r: 90 }, { b: 30, p: 1 }] },
                    {
                        f: { f: 2, r: 1, t: 999 },
                        a: Axis.Y,
                        l: [{ r: 270 }, { b: 30, p: 1 }],
                    },
                    { f: { f: 2, t: 999 }, l: [{ r: 270 }, { b: 30, p: 1 }] },
                    { f: { f: 2, r: 1, t: 999 }, l: [{ r: 270 }, { b: 30, p: 1 }] },
                    {
                        f: { f: 2, p: 5, t: 999 },
                        a: Axis.Y,
                        l: [{ r: 270 }, { b: 30, p: 1 }],
                    },
                    {
                        f: { f: 2, p: 5, r: 1, t: 999 },
                        a: Axis.Y,
                        l: [{ r: 90 }, { b: 30, p: 1 }],
                    },
                    { f: { f: 2, p: 5, t: 999 }, l: [{ r: 270 }, { b: 30, p: 1 }] },
                    {
                        f: { f: 2, p: 5, r: 1, t: 999 },
                        l: [{ r: 270 }, { b: 30, p: 1 }],
                    },
                ],
            },
            {
                b: rt,
                g: 12,
                e: [
                    {
                        f: fltr,
                        a: Axis.Y,
                        l: [{ r: 90 }, { b: 30, p: 1 }],
                    },
                    {
                        f: fltrR,
                        a: Axis.Y,
                        l: [{ r: 90 }, { b: 30, p: 1 }],
                    },
                    {
                        f: fltr,
                        l: [{ r: 90 }, { b: 30, p: 1 }],
                    },
                    {
                        r: 1,
                        f: fltrR,
                        l: [{ r: 90 }, { b: 30, p: 1 }],
                    },
                ],
            },
        );
        d.addLightColorEventBoxGroups({
            b: rt + 22,
            g: 12,
            e: [
                {
                    f: { f: 2, p: 6, t: 1 },
                    d: 2,
                    w: 1 / 3,
                    r: -0.5,
                    b: 1,
                    e: [
                        { c: EventBoxColor.WHITE },
                        {
                            b: 1 / 6,
                            c: EventBoxColor.WHITE,
                            s: Brightness.ZERO,
                            i: TransitionType.INTERPOLATE,
                        },
                    ],
                },
                {
                    f: { f: 2, p: 6, t: 1, r: 1 },
                    d: 2,
                    w: 1 / 3,
                    r: -0.5,
                    b: 1,
                    e: [
                        { c: EventBoxColor.WHITE },
                        {
                            b: 1 / 6,
                            c: EventBoxColor.WHITE,
                            s: Brightness.ZERO,
                            i: TransitionType.INTERPOLATE,
                        },
                    ],
                },
            ],
        });
        for (let t = rt + 4; rt === 38 ? t < rt + 28 : t <= rt + 28; t += 8) {
            d.addLightColorEventBoxGroups({
                b: t,
                g: 13,
                e: [
                    {
                        f: { f: 2, t: 999 },
                        e: [{ f: 8 }, { b: 1.999, s: Brightness.ZERO }],
                    },
                    {
                        f: { f: 2, r: 1, t: 999 },
                        e: [{ f: 8 }, { b: 1.999, s: Brightness.ZERO }],
                    },
                    {
                        f: { f: 2, p: 5, t: 999 },
                        e: [{ f: 8 }, { b: 1.999, s: Brightness.ZERO }],
                    },
                    {
                        f: { f: 2, r: 1, p: 5, t: 999 },
                        e: [{ f: 8 }, { b: 1.999, s: Brightness.ZERO }],
                    },
                ],
            });
            if (t === 450) {
                continue;
            }
            d.addLightColorEventBoxGroups(
                {
                    b: t + 2,
                    g: 13,
                    e: [
                        {
                            f: { f: 2, p: 4, t: 999 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                {
                                    b: 0.125,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.FULL,
                                },
                                {
                                    b: 0.4375,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                        {
                            f: { f: 2, p: 4, t: 999, r: 1 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                {
                                    b: 0.125,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.FULL,
                                },
                                {
                                    b: 0.4375,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: t + 2.5,
                    g: 13,
                    e: [
                        {
                            f: { f: 2, p: 2, t: 999 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                {
                                    b: 0.125,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.FULL,
                                },
                                {
                                    b: 0.4375,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                        {
                            f: { f: 2, p: 2, t: 999, r: 1 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                {
                                    b: 0.125,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.FULL,
                                },
                                {
                                    b: 0.4375,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: t + 3,
                    g: 13,
                    e: [
                        {
                            f: { f: 2, p: 3, t: 999 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                {
                                    b: 0.125,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.FULL,
                                },
                                {
                                    b: 0.4375,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                        {
                            f: { f: 2, p: 3, t: 999, r: 1 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                {
                                    b: 0.125,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.FULL,
                                },
                                {
                                    b: 0.4375,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: t + 3.5,
                    g: 13,
                    e: [
                        {
                            f: { f: 2, p: 1, t: 999 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                {
                                    b: 0.125,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.FULL,
                                },
                                {
                                    b: 0.4375,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                        {
                            f: { f: 2, p: 1, t: 999, r: 1 },
                            e: [
                                { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                {
                                    b: 0.125,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.FULL,
                                },
                                {
                                    b: 0.4375,
                                    s: Brightness.ZERO,
                                    i: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                    ],
                },
            );
        }
    }
};
