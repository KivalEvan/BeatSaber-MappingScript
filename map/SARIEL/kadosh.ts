import { types, utils, v3 } from '../../depsLocal.ts';

export default (d: v3.Difficulty) => {
    const synthGroup = [0, 1, 4, 3, 1, 2, 5, 4, 2, 3, 6, 5, 7, 4, 5, 2];

    const kGroup = [0, 1, 4, 5, 10, 11];
    const kTiming = [8.5, 10, 11.5, 24.5, 26, 27.5];
    const repeatTiming = [38, 422];
    for (const rt of repeatTiming) {
        //#region clap
        {
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
                    g: 14,
                    e: [
                        {
                            l: [{ e: -1, r: 90 }],
                        },
                        {
                            f: fltr,
                            a: 1,
                            r: 1,
                            l: [{ e: -1, r: 270 }],
                        },
                        {
                            f: fltrR,
                            a: 1,
                            r: 1,
                            l: [{ e: -1, r: 90 }],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 15,
                    e: [
                        {
                            l: [{ e: -1, r: 90 }],
                        },
                        {
                            f: fltr,
                            a: 1,
                            r: 1,
                            l: [{ e: -1, r: 270 }],
                        },
                        {
                            f: fltrR,
                            a: 1,
                            r: 1,
                            l: [{ e: -1, r: 90 }],
                        },
                    ],
                },
            );
            const e = [
                { c: 2, s: 1 },
                { c: 2, s: 0, i: 1, b: 0.25 },
            ] as Partial<types.v3.ILightColorBase>[];
            for (let b = rt; b <= rt + 28; b++) {
                d.addLightColorEventBoxGroups(
                    {
                        b,
                        g: 14,
                        e: [
                            { f: fltr, e, w: 0.5, r: -0.5 },
                            { f: fltrR, e, w: 0.5, r: -0.5 },
                        ],
                    },
                    {
                        b,
                        g: 15,
                        e: [
                            { f: fltr, e, w: 0.5, r: -0.5 },
                            { f: fltrR, e, w: 0.5, r: -0.5 },
                        ],
                    },
                );
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
                                { s: 1.5, c: 2 },
                                { b: 0.125, i: 2 },
                                { b: 0.499, s: 0.5, i: 1 },
                                { b: 0.5, s: 1.5 },
                                { b: 0.625, i: 2 },
                                { b: 0.999, i: 1, s: 0 },
                            ],
                        },
                    ],
                });
                d.addLightRotationEventBoxGroups(
                    {
                        b: rt + kt,
                        g: kg,
                        e: [
                            {
                                f: { f: 2, t: 2, p: 1 },
                                s: Math.random() > 0.5 ? 45 : -45,
                                t: 2,
                                b: 1,
                                l: [{ e: -1, r: (utils.random(-7, 7, true) * 45) % 360 }],
                            },
                        ],
                    },
                    {
                        b: rt + kt + 0.5,
                        g: kg,
                        e: [
                            {
                                f: { f: 2, t: 2, p: 1 },
                                s: Math.random() > 0.5 ? 90 : -90,
                                t: 2,
                                b: 1,
                                l: [{ p: 1 }, { b: 0.125, r: (utils.random(-3, 3, true) * 90) % 360 }],
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
                    e: [{ l: [{ p: 1 }] }, { a: 1, l: [{ p: 1 }] }],
                },
                {
                    b: rt,
                    g,
                    e: [{ l: [{ r: -90 }] }, { a: 1, s: 180, t: 2, b: 1, l: [{}] }],
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
                                { c: 2, s: 0 },
                                { b: 0.0625, c: 2, s: 0.75 },
                                { b: 0.1875, i: 2 },
                                { b: 0.25, s: 1, i: 1 },
                                { b: 0.4375, s: 0, i: 1 },
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
                            f: { f: 2, t: 2 },
                            w: 1,
                            e: [
                                { c: 2, s: 2 },
                                { b: 0.25, c: 2, s: 0, i: 1 },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 1,
                    g: 4 + i,
                    e: [
                        {
                            f: { f: 2, t: 2 },
                            w: 1,
                            e: [
                                { c: 2, s: 2 },
                                { b: 0.25, c: 2, s: 0, i: 1 },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 1,
                    g: 10 + i,
                    e: [
                        {
                            f: { f: 2, t: 2 },
                            w: 1,
                            e: [
                                { c: 2, s: 2 },
                                { b: 0.25, c: 2, s: 0, i: 1 },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 1,
                    g: 0 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [{ i: 2 }, { b: 0.874, i: 1 }, { b: 0.875, s: 0 }],
                        },
                    ],
                },
                {
                    b: rt - 1,
                    g: 4 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [{ i: 2 }, { b: 0.874, i: 1 }, { b: 0.875, s: 0 }],
                        },
                    ],
                },
                {
                    b: rt - 1,
                    g: 10 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            e: [{ i: 2 }, { b: 0.874, i: 1 }, { b: 0.875, s: 0 }],
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
                                { c: 2, s: 2 },
                                { b: 0.5, i: 1, s: 2, f: 12 },
                                { b: 6, i: 1, s: 0, f: 6 },
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
                                { c: 2, s: 2 },
                                { b: 0.5, i: 1, s: 2, f: 12 },
                                { b: 6, i: 1, s: 0, f: 6 },
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
                                { c: 2, s: 2 },
                                { b: 0.5, i: 1, s: 2, f: 12 },
                                { b: 6, i: 1, s: 0, f: 6 },
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
                                { b: 0, c: 2, s: 2 },
                                { b: 0.25, c: 2 },
                                { b: 4, c: 2, i: 1, s: 0 },
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
                            f: { f: 2, t: 2 },
                            w: 1,
                            s: 45,
                            t: 2,
                            b: 1,
                            l: [
                                { e: -1, r: 180 },
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
                            f: { f: 2, t: 2 },
                            w: 1,
                            s: 45,
                            t: 2,
                            b: 1,
                            l: [{ e: -1 }, { b: 0.25 }],
                        },
                    ],
                },
                {
                    b: rt - 1,
                    g: 10 + i,
                    e: [
                        {
                            f: { f: 2, t: 2 },
                            w: 1,
                            s: 45,
                            t: 2,
                            b: 1,
                            l: [
                                { e: -1, r: 90 },
                                { b: 0.25, r: 90 },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 1,
                    g: 0 + i,
                    e: [
                        {
                            f: { f: 2, t: 2, p: 1 },
                            w: 1,
                            s: 180,
                            t: 2,
                            l: [{ e: -1, p: 1 }, { b: 0.25 }],
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
                            l: [{ e: -1, p: 1 }, { b: 0.25 }],
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
                            l: [{ e: -1, p: 1 }, { b: 0.25 }],
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
                                { e: -1, p: 1 },
                                { b: 0.25, r: 45 },
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
                                { e: -1, p: 1 },
                                { b: 0.25, r: 45 },
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
                                { e: -1, p: 1 },
                                { b: 0.25, r: 45 },
                            ],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 8 + i,
                    e: [
                        { a: 1, l: [{}] },
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
                        { a: 1, l: [{}] },
                        {
                            f: { f: 2, t: 2, p: 0, r: 1 },
                            b: 1,
                            s: -45,
                            l: [{ r: 135, e: 2 }],
                        },
                        {
                            f: { f: 2, t: 2, p: 1, r: 1 },
                            b: 1,
                            s: 45,
                            l: [{ r: 135, e: 2 }],
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
                                { b: 0, s: 2, f: 12 },
                                { b: 6, i: 1, s: 0, f: 6 },
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
                                { b: 0, s: 2, f: 12 },
                                { b: 6, i: 1, s: 0, f: 6 },
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
                                { b: 0, s: 2, f: 12 },
                                { b: 6, i: 1, s: 0, f: 6 },
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
                                { b: 0, c: 2, s: 2 },
                                { b: 0.25, c: 2 },
                                { b: 4, c: 2, i: 1, s: 0 },
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
                                { e: -1, p: 1 },
                                { b: 0.25, r: 135 },
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
                            s: 45,
                            t: 2,
                            b: 1,
                            l: [
                                { e: -1, p: 1 },
                                { b: 0.25, r: 135 },
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
                            s: 45,
                            t: 2,
                            b: 1,
                            l: [
                                { e: -1, p: 1 },
                                { b: 0.25, r: 135 },
                            ],
                        },
                    ],
                },
                {
                    b: rt + 16,
                    g: 8 + i,
                    e: [
                        { a: 1, l: [{}] },
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
                        { a: 1, l: [{}] },
                        {
                            f: { f: 2, t: 2, p: 0, r: 1 },
                            b: 1,
                            s: -45,
                            l: [{ r: 135, e: 2 }],
                        },
                        {
                            f: { f: 2, t: 2, p: 1, r: 1 },
                            b: 1,
                            s: 45,
                            l: [{ r: 135, e: 2 }],
                        },
                    ],
                },
            );
        }
    }
};
