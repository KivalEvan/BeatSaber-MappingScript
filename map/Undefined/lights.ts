import { types, v3 } from '../../depsLocal.ts';

export default (d: v3.Difficulty) => {
    //#region intro
    d.addColorBoostEvents({ b: 0, o: true });
    for (let i = 0; i < 8; i++) {
        const e: Partial<types.v3.ILightColorBase>[] = [
            {
                b: 0,
                c: 2,
                s: 1,
            },
            {
                b: 0.0625,
                c: 1,
                s: 0,
                f: 12,
            },
            {
                b: 0.5,
                i: 1,
                c: 0,
                s: 0.75,
            },
            {
                b: 2,
                i: 1,
                c: 0,
                s: 1.25,
            },
            {
                b: 2.5,
                i: 0,
                c: 1,
                s: 1.5,
            },
            {
                b: 2.5625,
                i: 0,
                c: 1,
                s: 0.375,
            },
            {
                b: 2.75,
                i: 1,
                c: 1,
                s: 0,
            },
        ];
        if (i % 4 < 2) {
            d.addLightColorEventBoxGroups(
                {
                    b: 2 + i * 4,
                    g: (i % 4 ? 6 : 2) - Math.floor(i / 4) * 2,
                    e: [
                        {
                            w: 3,
                            e,
                        },
                    ],
                },
                {
                    b: 2 + i * 4,
                    g: (i % 4 ? 7 : 3) - Math.floor(i / 4) * 2,
                    e: [
                        {
                            w: 3,
                            e,
                        },
                    ],
                },
            );
            d.addLightRotationEventBoxGroups(
                {
                    b: 2 + i * 4,
                    g: (i % 4 ? 6 : 2) - Math.floor(i / 4) * 2,
                    e: [
                        {
                            s: -90,
                            w: 3.25,
                            l: [
                                {
                                    e: -1,
                                    r: 225,
                                },
                                {
                                    b: 3,
                                    e: 2,
                                    r: 270,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: 2 + i * 4,
                    g: (i % 4 ? 7 : 3) - Math.floor(i / 4) * 2,
                    e: [
                        {
                            s: -90,
                            w: 3.25,
                            l: [
                                {
                                    e: -1,
                                    r: 225,
                                },
                                {
                                    b: 3,
                                    e: 2,
                                    r: 270,
                                },
                            ],
                        },
                    ],
                },
            );
        }
        if (i % 4 === 2) {
            d.addLightColorEventBoxGroups(
                {
                    b: 2 + i * 4,
                    g: 0 + Math.floor(i / 4) * 2,
                    e: [
                        {
                            w: 3,
                            e,
                        },
                    ],
                },
                {
                    b: 2 + i * 4,
                    g: 1 + Math.floor(i / 4) * 2,
                    e: [
                        {
                            w: 3,
                            e,
                        },
                    ],
                },
                {
                    b: 2 + i * 4,
                    g: 8 + Math.floor(i / 4) * 2,
                    e: [
                        {
                            w: 3,
                            e,
                        },
                    ],
                },
                {
                    b: 2 + i * 4,
                    g: 9 + Math.floor(i / 4) * 2,
                    e: [
                        {
                            w: 3,
                            e,
                        },
                    ],
                },
            );
            d.addLightRotationEventBoxGroups(
                {
                    b: 2 + i * 4,
                    g: 0 + Math.floor(i / 4) * 2,
                    e: [
                        {
                            s: -45,
                            w: 3.25,
                            l: [
                                {
                                    e: -1,
                                    r: 255,
                                },
                                {
                                    b: 3,
                                    e: 2,
                                    r: 315,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: 2 + i * 4,
                    g: 1 + Math.floor(i / 4) * 2,
                    e: [
                        {
                            s: -45,
                            w: 3.25,
                            l: [
                                {
                                    e: -1,
                                    r: 255,
                                },
                                {
                                    b: 3,
                                    e: 2,
                                    r: 315,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: 2 + i * 4,
                    g: 8 + Math.floor(i / 4) * 2,
                    e: [
                        {
                            s: 45,
                            w: 3.25,
                            l: [
                                {
                                    e: -1,
                                    r: 105,
                                },
                                {
                                    b: 3,
                                    e: 2,
                                    r: 45,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: 2 + i * 4,
                    g: 9 + Math.floor(i / 4) * 2,
                    e: [
                        {
                            s: 45,
                            w: 3.25,
                            l: [
                                {
                                    e: -1,
                                    r: 105,
                                },
                                {
                                    b: 3,
                                    e: 2,
                                    r: 45,
                                },
                            ],
                        },
                    ],
                },
            );
        }
        if (i % 4 === 3) {
            d.addLightColorEventBoxGroups(
                {
                    b: 2 + i * 4,
                    g: 6 - Math.floor(i / 4) * 2,
                    e: [
                        {
                            w: 3,
                            e,
                        },
                    ],
                },
                {
                    b: 2 + i * 4,
                    g: 7 - Math.floor(i / 4) * 2,
                    e: [
                        {
                            w: 3,
                            e,
                        },
                    ],
                },
            );
            d.addLightRotationEventBoxGroups(
                {
                    b: 2 + i * 4,
                    g: 6 - Math.floor(i / 4) * 2,
                    e: [
                        {
                            s: -90,
                            w: 3.25,
                            l: [
                                {
                                    e: -1,
                                    r: 135,
                                },
                                {
                                    b: 3,
                                    e: 2,
                                    r: 180,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: 2 + i * 4,
                    g: 7 - Math.floor(i / 4) * 2,
                    e: [
                        {
                            s: -90,
                            w: 3.25,
                            l: [
                                {
                                    e: -1,
                                    r: 135,
                                },
                                {
                                    b: 3,
                                    e: 2,
                                    r: 180,
                                },
                            ],
                        },
                    ],
                },
            );
        }
    }
    for (let i = 0; i < 2; i++) {
        for (let t = 0; t < 4; t++) {
            d.addLightColorEventBoxGroups(
                {
                    b: 32 + i,
                    g: t > 1 ? 4 + t : 2 + t,
                    e: [
                        {
                            f: { r: i ? 0 : 1, f: 2, t: 2, p: 1 },
                            w: 0.375,
                            e: [
                                {
                                    b: 0,
                                    c: 2,
                                    s: i ? 2 : 1.5,
                                },
                                {
                                    b: 1 / 16,
                                    c: 2,
                                    s: i ? 1.25 : 0.75,
                                },
                                {
                                    b: 0.25,
                                    i: 1,
                                    c: 2,
                                    s: 0,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: 32.125 + i,
                    g: 8 + t,
                    e: [
                        {
                            f: {
                                p: 4,
                                t: i,
                            },
                            e: [
                                { b: 0, c: 2, s: 0 },
                                { b: 0.0625, i: 1, c: 2, s: 0.125 },
                                {
                                    b: 0.125,
                                    i: 1,
                                    c: 2,
                                    s: 2,
                                },
                                {
                                    b: 0.3125,
                                    c: 2,
                                    i: 1,
                                    s: 0.25,
                                },
                                {
                                    b: 0.375,
                                    c: 2,
                                    s: 0,
                                },
                            ],
                        },
                        {
                            f: {
                                p: 4,
                                t: 1 + i,
                            },
                            e: [
                                { b: 0 + 0.25, c: 2, s: 0 },
                                { b: 0.0625 + 0.25, i: 1, c: 2, s: 0.125 },
                                {
                                    b: 0.125 + 0.25,
                                    i: 1,
                                    c: 2,
                                    s: 2,
                                },
                                {
                                    b: 0.3125 + 0.25,
                                    c: 2,
                                    i: 1,
                                    s: 0.25,
                                },
                                {
                                    b: 0.375 + 0.25,
                                    c: 2,
                                    s: 0,
                                },
                            ],
                        },
                        {
                            f: {
                                p: 4,
                                t: 2 + i,
                            },
                            e: [
                                { b: 0 + 0.5, c: 2, s: 0 },
                                { b: 0.0625 + 0.5, i: 1, c: 2, s: 0.125 },
                                {
                                    b: 0.125 + 0.5,
                                    i: 1,
                                    c: 2,
                                    s: 2,
                                },
                                {
                                    b: 0.3125 + 0.5,
                                    c: 2,
                                    i: 1,
                                    s: 0.25,
                                },
                                {
                                    b: 0.375 + 0.5,
                                    c: 2,
                                    s: 0,
                                },
                            ],
                        },
                    ],
                },
            );
            d.addLightRotationEventBoxGroups(
                {
                    b: 32 + i,
                    g: 8 + t,
                    e: [
                        {
                            l: [
                                {
                                    e: -1,
                                    p: 0,
                                    r: -90 - 45 * i,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: 32 + i,
                    g: t > 1 ? 4 + t : 2 + t,
                    e: [
                        {
                            f: { r: i ? 0 : 1, f: 2, t: 2, p: 1 },
                            l: [
                                {
                                    e: -1,
                                    p: 0,
                                    r: t > 1 ? 60 - i * 60 : 0 - i * 90,
                                },
                            ],
                        },
                    ],
                },
            );
        }
    }
    for (let i = 0; i < 2; i++) {
        d.addLightColorEventBoxGroups(
            {
                b: 33,
                g: 12 + i,
                e: [
                    {
                        w: 0.874,
                        e: [{ c: 0 }, { b: 1 / 12, c: 0, s: 0 }],
                    },
                ],
            },
            {
                b: 65,
                g: 12 + i,
                e: [
                    {
                        f: { r: 1 },
                        w: 0.874,
                        e: [{ c: 0 }, { b: 1 / 12, c: 0, s: 0 }],
                    },
                ],
            },
        );
        d.addLightRotationEventBoxGroups(
            {
                b: 33,
                g: 12 + i,
                e: [
                    {
                        s: 90,
                        b: 1,
                        l: [
                            {
                                e: -1,
                                r: 135,
                            },
                        ],
                    },
                    {
                        b: 1,
                        a: 1,
                        l: [
                            {
                                e: -1,
                                r: 90,
                            },
                        ],
                    },
                ],
            },
            {
                b: 34,
                g: 12 + i,
                e: [
                    {
                        l: [
                            {
                                e: -1,
                            },
                        ],
                    },
                ],
            },
            {
                b: 65,
                g: 12 + i,
                e: [
                    {
                        f: { r: 1 },
                        s: 90,
                        b: 1,
                        r: 1,
                        l: [
                            {
                                e: -1,
                                r: 135,
                            },
                        ],
                    },
                    {
                        f: { r: 1 },
                        b: 1,
                        a: 1,
                        l: [
                            {
                                e: -1,
                                r: 90,
                            },
                        ],
                    },
                ],
            },
            {
                b: 66,
                g: 12 + i,
                e: [
                    {
                        f: { r: 1 },
                        l: [
                            {
                                e: -1,
                            },
                        ],
                    },
                ],
            },
        );
    }
    //#endregion
    //#region drop flashes
    for (let i = 0; i < 3; i++) {
        if (i !== 2) {
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
                    b: 34 + i * 32,
                    g: 14,
                    e: [
                        {
                            l: [{ e: -1, r: 90 }],
                        },
                        {
                            s: -15,
                            f: fltr,
                            a: 1,
                            r: 1,
                            w: 1.999,
                            l: [
                                { e: -1, r: 90 },
                                { b: 1.75, e: 2, r: 120 },
                            ],
                        },
                        {
                            s: 15,
                            f: fltrR,
                            a: 1,
                            r: 1,
                            w: 1.999,
                            l: [
                                { e: -1, r: 270 },
                                { b: 1.75, e: 2, r: 240 },
                            ],
                        },
                    ],
                },
                {
                    b: 34 + i * 32,
                    g: 15,
                    e: [
                        {
                            l: [{ e: -1, r: 90 }],
                        },
                        {
                            s: -15,
                            f: fltr,
                            a: 1,
                            r: 1,
                            w: 1.999,
                            l: [
                                { e: -1, r: 90 },
                                { b: 1.75, e: 2, r: 120 },
                            ],
                        },
                        {
                            s: 15,
                            f: fltrR,
                            a: 1,
                            r: 1,
                            w: 1.999,
                            l: [
                                { e: -1, r: 270 },
                                { b: 1.75, e: 2, r: 240 },
                            ],
                        },
                    ],
                },
                {
                    b: 36 + i * 32,
                    g: 14,
                    e: [
                        {
                            l: [{ e: -1 }],
                        },
                        { a: 1, l: [{ e: -1 }] },
                    ],
                },
                {
                    b: 36 + i * 32,
                    g: 15,
                    e: [
                        {
                            l: [{ e: -1 }],
                        },
                        { a: 1, l: [{ e: -1 }] },
                    ],
                },
            );
            const e = [
                { c: 2, s: 2 },
                { c: 2, s: 1, i: 1, b: 1 / 8 },
                { c: 2, s: 0, i: 1, b: 1.5 },
            ] as Partial<types.v3.ILightColorBase>[];
            d.addLightColorEventBoxGroups(
                {
                    b: 34 + i * 32,
                    g: 14,
                    e: [
                        { f: fltr, e, w: 1.999 },
                        { f: fltrR, e, w: 1.999 },
                    ],
                },
                {
                    b: 34 + i * 32,
                    g: 15,
                    e: [
                        { f: fltr, e, w: 1.999 },
                        { f: fltrR, e, w: 1.999 },
                    ],
                },
            );
        }
        if (i === 2) {
            d.addLightColorEventBoxGroups(
                {
                    b: 98,
                    g: 6,
                    e: [
                        {
                            f: { r: 1, f: 2, p: 0, t: 2 },
                            w: 2.75,
                            e: [
                                { c: 2, s: 4 },
                                { c: 2, b: 0.125, s: 2 },
                                { c: 2, b: 0.25, i: 1, s: 1 },
                                { c: 2, b: 1, i: 1, s: 1 },
                                { c: 2, b: 2.5, i: 1, s: 0 },
                            ],
                        },
                    ],
                },
                {
                    b: 98,
                    g: 7,
                    e: [
                        {
                            f: { r: 1, f: 2, p: 0, t: 2 },
                            w: 2.75,
                            e: [
                                { c: 2, s: 4 },
                                { c: 2, b: 0.125, s: 2 },
                                { c: 2, b: 0.25, i: 1, s: 1 },
                                { c: 2, b: 1, i: 1, s: 1 },
                                { c: 2, b: 2.5, i: 1, s: 0 },
                            ],
                        },
                    ],
                },
            );
            d.addLightRotationEventBoxGroups(
                {
                    b: 98,
                    g: 6,
                    e: [
                        {
                            f: { r: 1, f: 2, p: 0, t: 2 },
                            l: [{ e: -1, r: 270 }],
                        },
                        {
                            f: { r: 1, f: 2, p: 0, t: 2 },
                            a: 1,
                            s: 45,
                            l: [
                                { e: -1, r: 90 },
                                { b: 2.5, e: 2, r: 90 - 22.5 },
                            ],
                        },
                    ],
                },
                {
                    b: 98,
                    g: 7,
                    e: [
                        {
                            f: { r: 1, f: 2, p: 0, t: 2 },
                            l: [{ e: -1, r: 270 }],
                        },
                        {
                            f: { r: 1, f: 2, p: 0, t: 2 },
                            a: 1,
                            s: 45,
                            l: [
                                { e: -1, r: 90 },
                                { b: 2.5, e: 2, r: 90 - 22.5 },
                            ],
                        },
                    ],
                },
            );
        }
        d.addLightColorEventBoxGroups(
            {
                b: 30 + i * 32,
                g: 0,
                e: [
                    {
                        f: { f: 2, p: 0, t: 2 },
                        w: 1,
                        e: [
                            {
                                c: 2,
                                s: 0,
                                f: 5,
                            },
                            {
                                c: 2,
                                i: 1,
                                b: 3,
                                f: 10,
                            },
                        ],
                    },
                ],
            },
            {
                b: 30 + i * 32,
                g: 1,
                e: [
                    {
                        f: { f: 2, p: 0, t: 2 },
                        w: 1,
                        e: [
                            {
                                c: 2,
                                s: 0,
                                f: 5,
                            },
                            {
                                c: 2,
                                i: 1,
                                b: 3,
                                f: 10,
                            },
                        ],
                    },
                ],
            },
            { b: 34 + i * 32, g: 0, e: [{ e: [{ s: 0 }] }] },
            { b: 34 + i * 32, g: 1, e: [{ e: [{ s: 0 }] }] },
        );
        d.addLightRotationEventBoxGroups(
            {
                b: 30 + i * 32,
                g: 0,
                e: [
                    {
                        s: i ? 90 : 30,
                        w: 1,
                        l: [
                            {
                                e: -1,
                                r: i ? 135 : 180,
                            },
                            {
                                b: 4,
                                e: 3,
                                r: i ? 90 : 210,
                            },
                        ],
                    },
                ],
            },
            {
                b: 30 + i * 32,
                g: 1,
                e: [
                    {
                        s: i ? 90 : 30,
                        w: 1,
                        l: [
                            {
                                e: -1,
                                r: i ? 135 : 180,
                            },
                            {
                                b: 4,
                                e: 3,
                                r: i ? 90 : 210,
                            },
                        ],
                    },
                ],
            },
        );
        d.addLightColorEventBoxGroups(
            {
                b: 34 + i * 32,
                g: 2,
                e: [
                    {
                        f: { r: 1, f: 2, p: 0, t: 2 },
                        w: 2.75,
                        e: [
                            { c: 2, s: 4 },
                            { c: 2, b: 0.125, s: 2 },
                            { c: 2, b: 0.25, i: 1, s: 1 },
                            { c: 2, b: 1, i: 1, s: 1 },
                            { c: 2, b: 2.5, i: 1, s: 0 },
                        ],
                    },
                ],
            },
            {
                b: 34 + i * 32,
                g: 3,
                e: [
                    {
                        f: { r: 1, f: 2, p: 0, t: 2 },
                        w: 2.75,
                        e: [
                            { c: 2, s: 4 },
                            { c: 2, b: 0.125, s: 2 },
                            { c: 2, b: 0.25, i: 1, s: 1 },
                            { c: 2, b: 1, i: 1, s: 1 },
                            { c: 2, b: 2.5, i: 1, s: 0 },
                        ],
                    },
                ],
            },
            {
                b: 34 + i * 32,
                g: 8,
                e: [
                    {
                        f: { r: 1, f: 2, p: 0, t: 2 },
                        w: 2.75,
                        e: [
                            { c: 2, s: 4 },
                            { c: 2, b: 0.125, s: 2 },
                            { c: 2, b: 0.25, i: 1, s: 1 },
                            { c: 2, b: 1, i: 1, s: 1 },
                            { c: 2, b: 2.5, i: 1, s: 0 },
                        ],
                    },
                ],
            },
            {
                b: 34 + i * 32,
                g: 9,
                e: [
                    {
                        f: { r: 1, f: 2, p: 0, t: 2 },
                        w: 2.75,
                        e: [
                            { c: 2, s: 4 },
                            { c: 2, b: 0.125, s: 2 },
                            { c: 2, b: 0.25, i: 1, s: 1 },
                            { c: 2, b: 1, i: 1, s: 1 },
                            { c: 2, b: 2.5, i: 1, s: 0 },
                        ],
                    },
                ],
            },
        );
        d.addLightRotationEventBoxGroups(
            {
                b: 34 + i * 32,
                g: 2,
                e: [
                    {
                        f: { r: 1, f: 2, p: 0, t: 2 },
                        s: 45,
                        l: [
                            { e: -1, r: 270 },
                            { b: 2.5, e: 2, r: 270 - 22.5 },
                        ],
                    },
                ],
            },
            {
                b: 34 + i * 32,
                g: 3,
                e: [
                    {
                        f: { r: 1, f: 2, p: 0, t: 2 },
                        s: 45,
                        l: [
                            { e: -1, r: 270 },
                            { b: 2.5, e: 2, r: 270 - 22.5 },
                        ],
                    },
                ],
            },
            {
                b: 34 + i * 32,
                g: 8,
                e: [
                    {
                        f: { r: 1, f: 2, p: 0, t: 2 },
                        s: 45,
                        l: [
                            { e: -1, r: 180 },
                            { b: 2.5, e: 2, r: 180 - 22.5 },
                        ],
                    },
                ],
            },
            {
                b: 34 + i * 32,
                g: 9,
                e: [
                    {
                        f: { r: 1, f: 2, p: 0, t: 2 },
                        s: 45,
                        l: [
                            { e: -1, r: 180 },
                            { b: 2.5, e: 2, r: 180 - 22.5 },
                        ],
                    },
                ],
            },
        );
    }
    for (let i = 0; i < 3; i++) {
        for (let g = 0; g < 4; g++) {
            d.addLightColorEventBoxGroups(
                {
                    b: 49.25 + i * 0.25,
                    g: 8 + g,
                    e: [
                        {
                            f: { f: 1, p: 4, t: 0 + i },
                            e: [{ s: 1.25 }, { b: 0.125, s: 0.75, i: 1 }, { b: 0.1875, s: 0 }],
                        },
                    ],
                },
                {
                    b: 65.25 + i * 0.25,
                    g: 8 + g,
                    e: [
                        {
                            f: { f: 1, p: 4, t: 0 + i },
                            e: [{ s: 1.25 }, { b: 0.125, s: 0.75, i: 1 }, { b: 0.1875, s: 0 }],
                        },
                    ],
                },
            );
            d.addLightRotationEventBoxGroups(
                {
                    b: 49.25 + i * 0.25,
                    g: 8 + g,
                    e: [
                        {
                            f: { f: 1, p: 4, t: 0 + i },
                            r: 1,
                            l: [{ e: -1, r: 135 }],
                        },
                    ],
                },
                {
                    b: 65.25 + i * 0.25,
                    g: 8 + g,
                    e: [
                        {
                            f: { f: 1, p: 4, t: 0 + i },
                            r: 1,
                            l: [{ e: -1, r: 135 }],
                        },
                    ],
                },
            );
        }
    }
    //#endregion
    //#region drum and kick
    for (let t = 34; t < 98; t++) {
        const fltr = {
            f: 1,
            p: t % 2 ? 2 : 8,
            t: t % 2 ? 1 : 4 - ((t - 98) % 16 > 7 ? 2 : 0),
            r: 1,
        } as types.v3.IIndexFilter;
        const fltrR = {
            f: 1,
            p: t % 2 ? 2 : 8,
            t: t % 2 ? 1 : 4 - ((t - 98) % 16 > 7 ? 2 : 0),
            r: 0,
        } as types.v3.IIndexFilter;
        const e = [
            { c: 2, s: t % 2 ? 1.25 : 1 },
            { b: 0.0625 + 0.03125, c: 2, s: t % 2 ? 1 : 0.75, i: 1 },
            { c: t % 2 ? 0 : 1, b: 0.125, s: 0.75 },
            { b: 0.25, i: 2 },
            { c: t % 2 ? 0 : 1, b: 0.3125 + 0.03125, s: 0.25, i: 1 },
            { c: t % 2 ? 0 : 1, b: 0.375, s: 0 },
        ] as Partial<types.v3.ILightColorBase>[];
        const w = t % 2 ? 0.5 : 0;
        d.addLightColorEventBoxGroups(
            {
                b: t,
                g: t % 4 > 1 ? 12 : 14,
                e: [
                    { f: fltr, e, w },
                    { f: fltrR, e, w },
                ],
            },
            {
                b: t,
                g: t % 4 > 1 ? 13 : 15,
                e: [
                    { f: fltr, e, w },
                    { f: fltrR, e, w },
                ],
            },
        );
    }
    for (let t = 98; t < 128; t++) {
        const fltr = {
            f: 1,
            p: t % 2 ? 2 : 8,
            t: t % 2 ? 1 : 4 - ((t - 128) % 16 > 7 ? 2 : 0),
            r: 1,
        } as types.v3.IIndexFilter;
        const fltrR = {
            f: 1,
            p: t % 2 ? 2 : 8,
            t: t % 2 ? 1 : 4 - ((t - 128) % 16 > 7 ? 2 : 0),
            r: 0,
        } as types.v3.IIndexFilter;
        const e = [
            { c: 2, s: t % 2 ? 1.25 : 1 },
            { b: 0.0625 + 0.03125, c: 2, s: t % 2 ? 1 : 0.75, i: 1 },
            { c: t % 2 ? 0 : 1, b: 0.125, s: 0.75 },
            { b: 0.25, i: 2 },
            { c: t % 2 ? 0 : 1, b: 0.3125 + 0.03125, s: 0.25, i: 1 },
            { c: t % 2 ? 0 : 1, b: 0.375, s: 0 },
        ] as Partial<types.v3.ILightColorBase>[];
        const w = t % 2 ? 0.5 : 0;
        d.addLightColorEventBoxGroups(
            {
                b: t,
                g: t % 4 > 1 ? 12 : 14,
                e: [
                    { f: fltr, e, w },
                    { f: fltrR, e, w },
                ],
            },
            {
                b: t,
                g: t % 4 > 1 ? 13 : 15,
                e: [
                    { f: fltr, e, w },
                    { f: fltrR, e, w },
                ],
            },
        );
    }
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
                b: 98,
                g: 12,
                e: [
                    {
                        s: 15,
                        f: fltr,
                        a: 1,
                        l: [
                            { e: -1, r: 90 },
                            { b: 16, e: 1, r: 180 },
                            { b: 32, e: 2, r: 90 },
                        ],
                    },
                    {
                        s: -15,
                        f: fltrR,
                        a: 1,
                        l: [
                            { e: -1, r: 90 },
                            { b: 16, e: 1, r: 0 },
                            { b: 32, e: 2, r: 90 },
                        ],
                    },
                    {
                        s: -30,
                        f: fltr,
                        l: [{ p: 1 }, { b: 16, r: 90, e: 1 }, { b: 32, r: 180, e: 2 }],
                    },
                    {
                        s: -30,
                        r: 1,
                        f: fltrR,
                        l: [{ p: 1 }, { b: 16, r: 90, e: 1 }, { b: 32, r: 180, e: 2 }],
                    },
                ],
            },
            {
                b: 98,
                g: 13,
                e: [
                    {
                        s: 15,
                        f: fltr,
                        a: 1,
                        l: [
                            { e: -1, r: 90 },
                            { b: 16, e: 1, r: 180 },
                            { b: 32, e: 2, r: 90 },
                        ],
                    },
                    {
                        s: -15,
                        f: fltrR,
                        a: 1,
                        l: [
                            { e: -1, r: 90 },
                            { b: 16, e: 1, r: 0 },
                            { b: 32, e: 2, r: 90 },
                        ],
                    },
                    {
                        s: -30,
                        f: fltr,
                        l: [{ p: 1 }, { b: 16, r: 90, e: 1 }, { b: 32, r: 180, e: 2 }],
                    },
                    {
                        s: -30,
                        r: 1,
                        f: fltrR,
                        l: [{ p: 1 }, { b: 16, r: 90, e: 1 }, { b: 32, r: 180, e: 2 }],
                    },
                ],
            },
            {
                b: 98,
                g: 14,
                e: [
                    {
                        s: 15,
                        f: fltr,
                        a: 1,
                        l: [
                            { e: -1, r: 90 },
                            { b: 16, e: 1, r: 180 },
                            { b: 32, e: 2, r: 90 },
                        ],
                    },
                    {
                        s: -15,
                        f: fltrR,
                        a: 1,
                        l: [
                            { e: -1, r: 90 },
                            { b: 16, e: 1, r: 0 },
                            { b: 32, e: 2, r: 90 },
                        ],
                    },
                    {
                        s: -30,
                        f: fltr,
                        l: [{ p: 1 }, { b: 16, r: 90, e: 1 }, { b: 32, r: 180, e: 2 }],
                    },
                    {
                        s: -30,
                        r: 1,
                        f: fltrR,
                        l: [{ p: 1 }, { b: 16, r: 90, e: 1 }, { b: 32, r: 180, e: 2 }],
                    },
                ],
            },
            {
                b: 98,
                g: 15,
                e: [
                    {
                        s: 15,
                        f: fltr,
                        a: 1,
                        l: [
                            { e: -1, r: 90 },
                            { b: 16, e: 1, r: 180 },
                            { b: 32, e: 2, r: 90 },
                        ],
                    },
                    {
                        s: -15,
                        f: fltrR,
                        a: 1,
                        l: [
                            { e: -1, r: 90 },
                            { b: 16, e: 1, r: 0 },
                            { b: 32, e: 2, r: 90 },
                        ],
                    },
                    {
                        s: -30,
                        f: fltr,
                        l: [{ p: 1 }, { b: 16, r: 90, e: 1 }, { b: 32, r: 180, e: 2 }],
                    },
                    {
                        s: -30,
                        r: 1,
                        f: fltrR,
                        l: [{ p: 1 }, { b: 16, r: 90, e: 1 }, { b: 32, r: 180, e: 2 }],
                    },
                ],
            },
        );
    }
    //#endregion
    const mainG: number[][][] = [
        [
            [5, 135, -15],
            [1, 75, -15],
            [11, 195, -30],
            [4, 135, -15],
            [0, 75, -15],
            [10, 195, -30],
        ],
        [
            [9, 225, -45],
            [3, 120, -15],
            [5, 120, 30],
            [8, 225, -45],
            [2, 120, -15],
            [4, 120, 30],
        ],
        [
            [6, 60, 30],
            [9, 90, 45],
            [4, 210, -30],
            [7, 60, 30],
            [8, 90, 45],
            [5, 210, -30],
        ],
        [
            [7, 225, -45],
            [2, 90, 15],
            [9, 210, 30],
            [6, 225, -45],
            [3, 90, 15],
            [8, 210, 30],
        ],
        [
            [4, 135, -15],
            [0, 75, -15],
            [10, 195, -30],
            [5, 135, -15],
            [1, 75, -15],
            [11, 195, -30],
        ],
        [
            [8, 225, -45],
            [2, 120, -15],
            [4, 120, 30],
            [9, 225, -45],
            [3, 120, -15],
            [5, 120, 30],
        ],
        [
            [7, 60, 30],
            [8, 90, 45],
            [5, 210, -30],
            [6, 60, 30],
            [9, 90, 45],
            [4, 210, -30],
        ],
        [
            [6, 225, -45],
            [3, 90, 15],
            [8, 210, 30],
            [7, 225, -45],
            [2, 90, 15],
            [9, 210, 30],
        ], // next drop
        [
            [4, 135, -15],
            [1, 75, -15],
            [10, 195, -30],
            [5, 135, -15],
            [0, 75, -15],
            [11, 195, -30],
        ],
        [
            [8, 225, -45],
            [2, 120, -15],
            [4, 120, 30],
            [9, 225, -45],
            [3, 120, -15],
            [5, 120, 30],
        ],
        [
            [7, 60, 30],
            [8, 90, 45],
            [5, 210, -30],
            [6, 60, 30],
            [9, 90, 45],
            [4, 210, -30],
        ],
        [
            [6, 225, -45],
            [3, 90, 15],
            [8, 210, 30],
            [7, 225, -45],
            [2, 90, 15],
            [9, 210, 30],
        ],
        [
            [5, 135, -15],
            [0, 75, -15],
            [11, 195, -30],
            [4, 135, -15],
            [1, 75, -15],
            [10, 195, -30],
        ],
        [
            [9, 225, -45],
            [3, 120, -15],
            [5, 120, 30],
            [8, 225, -45],
            [2, 120, -15],
            [4, 120, 30],
        ],
        [
            [6, 60, 30],
            [9, 90, 45],
            [4, 210, -30],
            [7, 60, 30],
            [8, 90, 45],
            [5, 210, -30],
        ],
        [
            [7, 225, -45],
            [2, 90, 15],
            [9, 210, 30],
            [6, 225, -45],
            [3, 90, 15],
            [8, 210, 30],
        ],
    ];
    for (let x = 0; x < 16; x++) {
        const time = 34 + x * 4;
        d.addColorBoostEvents({ b: time, o: false }, { b: time + 3, o: true });
        const g = mainG[x].map((n) => n[0]);
        const r = mainG[x].map((n) => n[1]);
        const rEnd = mainG[x].map((n) => n[2]);
        if (x === 8 || x === 12) {
            const t = [0.25, 0.5, 0.75, 1.25, 1.5, 1.75];
            const td = t.map((n) => 3 - n);
            const e = [
                { c: 2 },
                { c: 2, b: 0.125 },
                { b: 0.1875, i: 1 },
                { b: 0.375, c: 1, i: 1, s: 0.75 },
            ] as Partial<types.v3.ILightColorBase>[];
            for (let i = 0; i < 3; i++) {
                d.addLightColorEventBoxGroups(
                    {
                        b: time + t[i],
                        g: g[i],
                        e: [{ e, w: 0.5 }],
                    },
                    {
                        b: time + 1.25,
                        g: g[i],
                        e: [
                            {
                                e: [
                                    { c: 2, f: 24 },
                                    { c: 2, s: 0, b: 0.0625 },
                                ],
                                w: 0.249,
                            },
                        ],
                    },
                );
                d.addLightRotationEventBoxGroups(
                    {
                        b: time + t[i],
                        g: g[i],
                        e: [
                            {
                                s: 90,
                                l: [
                                    { r: r[i], e: -1 },
                                    { b: td[i] - 1.75, r: r[i] + rEnd[i], e: 2 },
                                ],
                                w: 0.5,
                                r: 1,
                            },
                        ],
                    },
                    {
                        b: time + 1.25,
                        g: g[i],
                        e: [
                            {
                                w: 0.1874,
                                b: 1,
                                s: 90,
                                t: 2,
                                l: [{ r: 45, e: -1 }],
                            },
                        ],
                    },
                );
            }
            d.addLightColorEventBoxGroups(
                {
                    b: time + t[4],
                    g: g[4],
                    e: [{ e, w: 0.5 }],
                },
                {
                    b: time + t[5],
                    g: g[5],
                    e: [{ e, w: 0.5 }],
                },
                {
                    b: time + t[4],
                    g: g[1],
                    e: [{ e, w: 0.5 }],
                },
                {
                    b: time + t[5],
                    g: g[2],
                    e: [{ e, w: 0.5 }],
                },
                {
                    b: time + 2.25,
                    g: g[4],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.25,
                    g: g[1],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.5,
                    g: g[5],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.5,
                    g: g[2],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
            );
            d.addLightRotationEventBoxGroups(
                {
                    b: time + t[4],
                    g: g[4],
                    e: [
                        {
                            s: -45,
                            l: [
                                { r: 225, e: -1 },
                                { b: td[4], r: 225 + 22.5, e: 2 },
                            ],
                            w: 0.5,
                        },
                    ],
                },
                {
                    b: time + t[5],
                    g: g[5],
                    e: [
                        {
                            s: -45,
                            l: [
                                { r: 135, e: -1 },
                                { b: td[5], r: 135 + 22.5, e: 2 },
                            ],
                            w: 0.5,
                        },
                    ],
                },
                {
                    b: time + t[4],
                    g: g[1],
                    e: [
                        {
                            s: -45,
                            l: [
                                { r: 225, e: -1 },
                                { b: td[4], r: 225 + 22.5, e: 2 },
                            ],
                            w: 0.5,
                        },
                    ],
                },
                {
                    b: time + t[5],
                    g: g[2],
                    e: [
                        {
                            s: -45,
                            l: [
                                { r: 135, e: -1 },
                                { b: td[5], r: 135 + 22.5, e: 2 },
                            ],
                            w: 0.5,
                        },
                    ],
                },
            );
            continue;
        }
        if (x === 14) {
            const t = [0.25, 0.5, 0.75, 1.25, 1.5, 1.75];
            const td = t.map((n) => 3 - n);
            const e = [
                { c: 2 },
                { c: 2, b: 0.125 },
                { b: 0.1875, i: 1 },
                { b: 0.375, c: 1, i: 1, s: 0.75 },
            ] as Partial<types.v3.ILightColorBase>[];
            for (let i = 0; i < 3; i++) {
                d.addLightColorEventBoxGroups(
                    {
                        b: time + t[i],
                        g: g[i],
                        e: [{ e, w: 0.5 }],
                    },
                    {
                        b: time + 1.25,
                        g: g[i],
                        e: [
                            {
                                e: [
                                    { c: 2, f: 24 },
                                    { c: 2, s: 0, b: 0.0625 },
                                ],
                                w: 0.249,
                            },
                        ],
                    },
                    {
                        b: time + 1.25,
                        g: g[i + 3],
                        e: [
                            {
                                e: [
                                    { c: 2, f: 24 },
                                    { c: 2, s: 0, b: 0.0625 },
                                ],
                                w: 0.249,
                            },
                        ],
                    },
                );
                d.addLightRotationEventBoxGroups(
                    {
                        b: time + t[i],
                        g: g[i],
                        e: [
                            {
                                s: 90,
                                l: [
                                    { r: r[i], e: -1 },
                                    { b: td[i] - 1.75, r: r[i] + rEnd[i], e: 2 },
                                ],
                                w: 0.5,
                                r: 1,
                            },
                        ],
                    },
                    {
                        b: time + t[i],
                        g: g[i + 3],
                        e: [
                            {
                                s: 90,
                                l: [
                                    { r: r[i + 3], e: -1 },
                                    { b: td[i] - 1.75, r: r[i + 3] + rEnd[i + 3], e: 2 },
                                ],
                                w: 0.5,
                                r: 1,
                            },
                        ],
                    },
                );
            }
            d.addLightColorEventBoxGroups(
                {
                    b: time + t[4],
                    g: g[4],
                    e: [{ e, w: 0.5 }],
                },
                {
                    b: time + t[5],
                    g: g[5],
                    e: [{ e, w: 0.5 }],
                },
                {
                    b: time + t[4],
                    g: g[1],
                    e: [{ e, w: 0.5 }],
                },
                {
                    b: time + t[5],
                    g: g[2],
                    e: [{ e, w: 0.5 }],
                },
                {
                    b: time + 2.25,
                    g: g[4],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.25,
                    g: g[1],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.5,
                    g: g[5],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.5,
                    g: g[2],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
            );
            d.addLightRotationEventBoxGroups(
                {
                    b: time + t[4],
                    g: g[4],
                    e: [
                        {
                            s: -45,
                            l: [
                                { r: 225, e: -1 },
                                { b: td[4], r: 225 + 22.5, e: 2 },
                            ],
                            w: 0.5,
                        },
                    ],
                },
                {
                    b: time + t[5],
                    g: g[5],
                    e: [
                        {
                            s: -45,
                            l: [
                                { r: 135, e: -1 },
                                { b: td[5], r: 135 + 22.5, e: 2 },
                            ],
                            w: 0.5,
                        },
                    ],
                },
                {
                    b: time + t[4],
                    g: g[1],
                    e: [
                        {
                            s: -45,
                            l: [
                                { r: 225, e: -1 },
                                { b: td[4], r: 225 + 22.5, e: 2 },
                            ],
                            w: 0.5,
                        },
                    ],
                },
                {
                    b: time + t[5],
                    g: g[2],
                    e: [
                        {
                            s: -45,
                            l: [
                                { r: 135, e: -1 },
                                { b: td[5], r: 135 + 22.5, e: 2 },
                            ],
                            w: 0.5,
                        },
                    ],
                },
            );
            continue;
        }
        if (x === 9 || x === 13) {
            const t = [0.25, 0.5, 0.75, 1.25, 1.5, 1.75];
            const td = t.map((n) => 3 - n);
            const e = [
                { c: 2 },
                { c: 2, b: 0.125 },
                { b: 0.1875, i: 1 },
                { b: 0.375, c: 1, i: 1, s: 0.75 },
            ] as Partial<types.v3.ILightColorBase>[];
            for (let i = 0; i < 6; i++) {
                if (i === 0) {
                    d.addLightColorEventBoxGroups(
                        {
                            b: time + t[i],
                            g: g[i],
                            e: [
                                {
                                    f: { r: 1 },
                                    e: [
                                        { c: 2, f: 8 },
                                        { b: 0.25, c: 2, f: 12, i: 1 },
                                        { b: 0.3125, s: 0 },
                                    ],
                                    w: 0.5,
                                },
                            ],
                        },
                        {
                            b: time + t[i],
                            g: g[3],
                            e: [
                                {
                                    f: { r: 1 },
                                    e: [
                                        { c: 2, f: 8 },
                                        { b: 0.25, c: 2, f: 12, i: 1 },
                                        { b: 0.3125, s: 0 },
                                    ],
                                    w: 0.5,
                                },
                            ],
                        },
                    );
                    d.addLightRotationEventBoxGroups(
                        {
                            b: time + t[i],
                            g: g[i],
                            e: [
                                {
                                    f: { r: 1, f: 2, p: 0, t: 2 },
                                    l: [{ r: 30, e: -1 }],
                                    w: 0.125,
                                },
                                {
                                    f: { r: 1, f: 2, p: 1, t: 2 },
                                    l: [{ r: 210, e: -1 }],
                                    w: 0.125,
                                },
                            ],
                        },
                        {
                            b: time + t[i],
                            g: g[3],
                            e: [
                                {
                                    f: { r: 1, f: 2, p: 0, t: 2 },
                                    l: [{ r: -30, e: -1 }],
                                    w: 0.125,
                                },
                                {
                                    f: { r: 1, f: 2, p: 1, t: 2 },
                                    l: [{ r: -210, e: -1 }],
                                    w: 0.125,
                                },
                            ],
                        },
                    );
                    continue;
                }
                if (i === 3) {
                    d.addLightColorEventBoxGroups(
                        {
                            b: time + t[i],
                            g: g[0],
                            e: [{ f: { r: 1 }, e, w: 0.5 }],
                        },
                        {
                            b: time + t[i],
                            g: g[i],
                            e: [{ f: { r: 1 }, e, w: 0.5 }],
                        },
                    );
                    d.addLightRotationEventBoxGroups(
                        {
                            b: time + t[i],
                            g: g[0],
                            e: [
                                {
                                    f: { r: 1 },
                                    s: 60,
                                    l: [
                                        { r: r[i], e: -1 },
                                        { b: td[i], r: r[i] + rEnd[i], e: 2 },
                                    ],
                                    w: 0.5,
                                    r: 1,
                                },
                            ],
                        },
                        {
                            b: time + t[i],
                            g: g[i],
                            e: [
                                {
                                    f: { r: 1 },
                                    s: 60,
                                    l: [
                                        { r: r[i], e: -1 },
                                        { b: td[i], r: r[i] + rEnd[i], e: 2 },
                                    ],
                                    w: 0.5,
                                    r: 1,
                                },
                            ],
                        },
                    );
                    continue;
                }
                d.addLightColorEventBoxGroups({
                    b: time + t[i],
                    g: g[i],
                    e: [{ e, w: 0.5 }],
                });
                d.addLightRotationEventBoxGroups({
                    b: time + t[i],
                    g: g[i],
                    e: [
                        {
                            s: 60,
                            l: [
                                { r: r[i], e: -1 },
                                { b: td[i], r: r[i] + rEnd[i], e: 2 },
                            ],
                            w: 0.5,
                            r: 1,
                        },
                    ],
                });
            }
        } else {
            for (let i = 0; i < 6; i++) {
                const t = [0.25, 0.5, 0.75, 1.25, 1.5, 1.75];
                const td = t.map((n) => 3 - n);
                const e = [
                    { c: 2 },
                    { c: 2, b: 0.125 },
                    { b: 0.1875, i: 1 },
                    { b: 0.375, c: 1, i: 1, s: 0.75 },
                ] as Partial<types.v3.ILightColorBase>[];
                d.addLightColorEventBoxGroups({
                    b: time + t[i],
                    g: g[i],
                    e: [{ e, w: 0.5 }],
                });
                d.addLightRotationEventBoxGroups({
                    b: time + t[i],
                    g: g[i],
                    e: [
                        {
                            s: 60,
                            l: [
                                { r: r[i], e: -1 },
                                { b: td[i], r: r[i] + rEnd[i], e: 2 },
                            ],
                            w: 0.5,
                            r: 1,
                        },
                    ],
                });
                if (x === 11) {
                    d.addLightRotationEventBoxGroups({
                        b: time + t[i],
                        g: g[i] % 4 > 1 ? g[i] - 2 : g[i] + 2,
                        e: [
                            {
                                s: 60,
                                l: [
                                    { r: r[i], e: -1 },
                                    { b: td[i], r: r[i] + rEnd[i], e: 2 },
                                ],
                                w: 0.5,
                                r: 1,
                            },
                        ],
                    });
                }
            }
        }
        if (x === 11 || x === 15) {
            d.addLightColorEventBoxGroups(
                {
                    b: time + 2.25,
                    g: g[0],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.5,
                    g: g[2],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.75,
                    g: g[4],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.25,
                    g: g[1],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.5,
                    g: g[3],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.75,
                    g: g[5],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
            );
            if (x === 11) {
                d.addLightColorEventBoxGroups(
                    {
                        b: time + 2.25,
                        g: g[0] - 2,
                        e: [{ f: { r: 1 }, e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                    },
                    {
                        b: time + 2.5,
                        g: g[2] - 2,
                        e: [{ f: { r: 1 }, e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                    },
                    {
                        b: time + 2.75,
                        g: g[4] + 2,
                        e: [{ f: { r: 1 }, e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                    },
                    {
                        b: time + 2.25,
                        g: g[1] - 2,
                        e: [{ f: { r: 1 }, e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                    },
                    {
                        b: time + 2.5,
                        g: g[3] - 2,
                        e: [{ f: { r: 1 }, e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                    },
                    {
                        b: time + 2.75,
                        g: g[5] + 2,
                        e: [{ f: { r: 1 }, e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                    },
                );
            }
        } else {
            d.addLightColorEventBoxGroups(
                {
                    b: time + 2.25,
                    g: g[1],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.25,
                    g: g[4],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.5,
                    g: g[0],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.5,
                    g: g[2],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.5,
                    g: g[3],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.5,
                    g: g[5],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
            );
        }
    }
    for (let x = 0, t = 0; x < 8; x++, t = Math.floor(x / 2)) {
        const f = { f: 2, r: 1, p: 1, t: 2 } as Partial<types.v3.IIndexFilter>;
        if (!(x % 2)) {
            d.addLightColorEventBoxGroups(
                {
                    b: 36.75 + t * 16,
                    g: 8,
                    e: [{ f, e: [{ s: 0.75 }, { b: 0.0625, s: 0 }], w: 0.25, b: 1, r: 0.5 }],
                },
                {
                    b: 36.75 + t * 16,
                    g: 9,
                    e: [{ f, e: [{ s: 0.75 }, { b: 0.0625, s: 0 }], w: 0.25, b: 1, r: 0.5 }],
                },
                {
                    b: 37 + t * 16,
                    g: 8,
                    e: [{ f, e: [{ s: 0 }] }],
                },
                {
                    b: 37 + t * 16,
                    g: 9,
                    e: [{ f, e: [{ s: 0 }] }],
                },
                {
                    b: 37 + t * 16,
                    g: t % 2 ? 2 : 3,
                    e: [
                        {
                            f: { f: 1, p: 2, t: 1 },
                            e: [{ c: 2 }, { b: 1 / 16, i: 2 }, { b: 0.125, i: 1, s: 0.25 }, { b: 0.1875, s: 0 }],
                        },
                    ],
                },
                {
                    b: 37.25 + t * 16,
                    g: t % 2 ? 3 : 2,
                    e: [
                        {
                            f: { f: 1, p: 2, t: 1 },
                            e: [{ c: 2 }, { b: 1 / 16, i: 2 }, { b: 0.125, i: 1, s: 0.25 }, { b: 0.1875, s: 0 }],
                        },
                    ],
                },
                {
                    b: 37.5 + t * 16,
                    g: t % 2 ? 0 : 1,
                    e: [
                        {
                            f: { f: 1, p: 2, t: 1 },
                            e: [{ c: 2 }, { b: 1 / 16, i: 2 }, { b: 0.125, i: 1, s: 0.25 }, { b: 0.1875, s: 0 }],
                        },
                    ],
                },
                {
                    b: 37.75 + t * 16,
                    g: t % 2 ? 1 : 0,
                    e: [
                        {
                            f: { f: 1, p: 2, t: 1 },
                            e: [{ c: 2 }, { b: 1 / 16, i: 2 }, { b: 0.125, i: 1, s: 0.25 }, { b: 0.1875, s: 0 }],
                        },
                    ],
                },
            );
            d.addLightRotationEventBoxGroups(
                {
                    b: 36.75 + t * 16,
                    g: 8,
                    e: [{ f, s: 45, b: 1, l: [{ r: 0, e: -1 }] }],
                },
                {
                    b: 36.75 + t * 16,
                    g: 9,
                    e: [{ f, s: 45, b: 1, l: [{ r: 0, e: -1 }] }],
                },
                {
                    b: 37 + t * 16,
                    g: t % 2 ? 2 : 3,
                    e: [{ s: 90, t: 2, b: 1, l: [{ r: 0, e: -1 }] }],
                },
                {
                    b: 37.25 + t * 16,
                    g: t % 2 ? 3 : 2,
                    e: [{ s: 90, t: 2, b: 1, l: [{ r: 0, e: -1 }] }],
                },
                {
                    b: 37.5 + t * 16,
                    g: t % 2 ? 0 : 1,
                    e: [{ s: 90, t: 2, b: 1, l: [{ r: 0, e: -1 }] }],
                },
                {
                    b: 37.75 + t * 16,
                    g: t % 2 ? 1 : 0,
                    e: [{ s: 90, t: 2, b: 1, l: [{ r: 0, e: -1 }] }],
                },
            );
        } else {
            d.addLightColorEventBoxGroups(
                {
                    b: 40.75 + t * 16,
                    g: 6,
                    e: [{ f, e: [{ s: 0.75 }, { b: 0.0625, s: 0 }], w: 0.25, b: 1, r: 0.5 }],
                },
                {
                    b: 40.75 + t * 16,
                    g: 7,
                    e: [{ f, e: [{ s: 0.75 }, { b: 0.0625, s: 0 }], w: 0.25, b: 1, r: 0.5 }],
                },
                {
                    b: 41 + t * 16,
                    g: 6,
                    e: [{ f, e: [{ s: 0 }] }],
                },
                {
                    b: 41 + t * 16,
                    g: 7,
                    e: [{ f, e: [{ s: 0 }] }],
                },
                {
                    b: 41 + t * 16,
                    g: t % 2 ? 10 : 11,
                    e: [
                        {
                            f: { f: 1, p: 2, t: 1 },
                            e: [{ c: 2 }, { b: 1 / 16, i: 2 }, { b: 0.125, i: 1, s: 0.25 }, { b: 0.1875, s: 0 }],
                        },
                    ],
                },
                {
                    b: 41.25 + t * 16,
                    g: t % 2 ? 11 : 10,
                    e: [
                        {
                            f: { f: 1, p: 2, t: 1 },
                            e: [{ c: 2 }, { b: 1 / 16, i: 2 }, { b: 0.125, i: 1, s: 0.25 }, { b: 0.1875, s: 0 }],
                        },
                    ],
                },
                {
                    b: 41.5 + t * 16,
                    g: t % 2 ? 0 : 1,
                    e: [
                        {
                            f: { f: 1, p: 2, t: 1 },
                            e: [{ c: 2 }, { b: 1 / 16, i: 2 }, { b: 0.125, i: 1, s: 0.25 }, { b: 0.1875, s: 0 }],
                        },
                    ],
                },
                {
                    b: 41.75 + t * 16,
                    g: t % 2 ? 1 : 0,
                    e: [
                        {
                            f: { f: 1, p: 2, t: 1 },
                            e: [{ c: 2 }, { b: 1 / 16, i: 2 }, { b: 0.125, i: 1, s: 0.25 }, { b: 0.1875, s: 0 }],
                        },
                    ],
                },
            );
            d.addLightRotationEventBoxGroups(
                {
                    b: 40.75 + t * 16,
                    g: 6,
                    e: [{ f, s: -45, b: 1, l: [{ r: 112.5, e: -1 }] }],
                },
                {
                    b: 40.75 + t * 16,
                    g: 7,
                    e: [{ f, s: -45, b: 1, l: [{ r: 112.5, e: -1 }] }],
                },
                {
                    b: 41 + t * 16,
                    g: t % 2 ? 10 : 11,
                    e: [{ s: 90, t: 2, b: 1, l: [{ r: 0, e: -1 }] }],
                },
                {
                    b: 41.25 + t * 16,
                    g: t % 2 ? 11 : 10,
                    e: [{ s: 90, t: 2, b: 1, l: [{ r: 0, e: -1 }] }],
                },
                {
                    b: 41.5 + t * 16,
                    g: t % 2 ? 0 : 1,
                    e: [{ s: 90, t: 2, b: 1, l: [{ r: 0, e: -1 }] }],
                },
                {
                    b: 41.75 + t * 16,
                    g: t % 2 ? 1 : 0,
                    e: [{ s: 90, t: 2, b: 1, l: [{ r: 0, e: -1 }] }],
                },
            );
        }
    }
    for (let t = 0; t < 4; t++) {
        if (!(t % 2)) {
            for (let g = 0; g < 2; g++) {
                for (let i = 0; i < 3; i++) {
                    d.addLightColorEventBoxGroups({
                        b: 45 + i * 0.25 + t * 16,
                        g: 10 + g,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 3 - i },
                                e: [{ s: 1 }, { b: 0.125, s: 0.75, i: 1 }, { b: 0.1875, s: 0 }],
                            },
                        ],
                    });
                    d.addLightRotationEventBoxGroups({
                        b: 45 + i * 0.25 + t * 16,
                        g: 10 + g,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 3 - i },
                                r: 1,
                                l: [{ e: -1, r: 135 - i * 45 }],
                            },
                        ],
                    });
                }
                d.addLightColorEventBoxGroups({
                    b: 45.5 + t * 16,
                    g: 8 + g,
                    e: [
                        {
                            f: { f: 1, p: 4, t: 1 },
                            e: [
                                { s: 1, f: 12 },
                                { b: 0.125, s: 0.75, i: 1, f: 16 },
                                { b: 0.1875, s: 0 },
                            ],
                        },
                    ],
                });
                d.addLightRotationEventBoxGroups({
                    b: 45.5 + t * 16,
                    g: 8 + g,
                    e: [
                        {
                            f: { f: 1, p: 4, t: 1 },
                            l: [{ e: -1, r: 225 }],
                        },
                    ],
                });
                d.addLightColorEventBoxGroups(
                    {
                        b: 60.5 + t * 16,
                        g: 2 + g,
                        e: [
                            {
                                f: { f: 2, p: 4, t: 1, r: 1 },
                                w: 0.499,
                                e: [{}, { b: 0.4375, s: 0 }],
                            },
                        ],
                    },
                    {
                        b: 61 + t * 16,
                        g: 0 + g,
                        e: [
                            {
                                w: 0.499,
                                e: [{ s: 1.5 }, { b: 1 / 16, s: 1 }, { b: 0.1875, s: 0 }],
                            },
                        ],
                    },
                    {
                        b: 61.5 + t * 16,
                        g: 4 + g,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 0, r: 1 },
                                e: [{}, { b: 0.1875, s: 0 }],
                            },
                        ],
                    },
                    {
                        b: 61.75 + t * 16,
                        g: 4 + g,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 1, r: 1 },
                                e: [{}, { b: 0.1875, s: 0 }],
                            },
                        ],
                    },
                );
                d.addLightRotationEventBoxGroups(
                    {
                        b: 60.5 + t * 16,
                        g: 2 + g,
                        e: [
                            {
                                f: { f: 2, p: 4, t: 2, r: 1 },
                                l: [{ e: -1, r: 270 }],
                            },
                            {
                                f: { f: 2, p: 5, t: 2, r: 1 },
                                l: [{ e: -1, r: 0 }],
                            },
                        ],
                    },
                    {
                        b: 61 + t * 16,
                        g: 0 + g,
                        e: [
                            {
                                f: { f: 2, p: 0, t: 2 },
                                s: -30,
                                b: 1,
                                l: [{ e: -1, r: 285 }],
                            },
                            {
                                f: { f: 2, p: 1, t: 2 },
                                s: -30,
                                b: 1,
                                l: [{ e: -1, r: 105 }],
                            },
                        ],
                    },
                    {
                        b: 61.5 + t * 16,
                        g: 4 + g,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 0, r: 1 },
                                l: [{ e: -1, r: 225 }],
                            },
                        ],
                    },
                    {
                        b: 61.75 + t * 16,
                        g: 4 + g,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 1, r: 1 },
                                l: [{ e: -1, r: 270 }],
                            },
                        ],
                    },
                );
                d.addLightColorEventBoxGroups(
                    {
                        b: 64.5 + t * 16,
                        g: 10 + g,
                        e: [
                            {
                                f: { f: 2, p: 4, t: 1, r: 1 },
                                w: 0.499,
                                e: [{}, { b: 0.4375, s: 0 }],
                            },
                        ],
                    },
                    {
                        b: 65 + t * 16,
                        g: 4 + g,
                        e: [
                            {
                                w: 0.499,
                                e: [{ s: 1.5 }, { b: 1 / 16, s: 1 }, { b: 0.1875, s: 0 }],
                            },
                        ],
                    },
                    {
                        b: 65.5 + t * 16,
                        g: 2 + g,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 0, r: 1 },
                                e: [{}, { b: 0.1875, s: 0 }],
                            },
                        ],
                    },
                    {
                        b: 65.75 + t * 16,
                        g: 2 + g,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 1, r: 1 },
                                e: [{}, { b: 0.1875, s: 0 }],
                            },
                        ],
                    },
                );
                d.addLightRotationEventBoxGroups(
                    {
                        b: 60.5 + t * 16,
                        g: 10 + g,
                        e: [
                            {
                                f: { f: 2, p: 4, t: 2, r: 1 },
                                l: [{ e: -1, r: 270 }],
                            },
                            {
                                f: { f: 2, p: 5, t: 2, r: 1 },
                                l: [{ e: -1, r: 0 }],
                            },
                        ],
                    },
                    {
                        b: 65 + t * 16,
                        g: 4 + g,
                        e: [
                            {
                                f: { f: 2, p: 0, t: 2 },
                                s: -30,
                                b: 1,
                                l: [{ e: -1, r: 285 }],
                            },
                            {
                                f: { f: 2, p: 1, t: 2 },
                                s: -30,
                                b: 1,
                                l: [{ e: -1, r: 105 }],
                            },
                        ],
                    },
                    {
                        b: 65.5 + t * 16,
                        g: 2 + g,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 0, r: 1 },
                                l: [{ e: -1, r: 225 }],
                            },
                        ],
                    },
                    {
                        b: 65.75 + t * 16,
                        g: 2 + g,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 1, r: 1 },
                                l: [{ e: -1, r: 270 }],
                            },
                        ],
                    },
                );
            }
        }
    }
    for (let g = 0; g < 2; g++) {
        for (let t = 0; t < 2; t++) {
            for (let i = 0; i < 3; i++) {
                d.addLightColorEventBoxGroups(
                    {
                        b: 77 + i * 0.25 + t * 1,
                        g: 0 + g + t * 10,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 3 - i - t },
                                e: [
                                    { c: 2, s: 1 },
                                    { b: 0.125, c: 2, s: 0.75, i: 1 },
                                    { b: 0.1875, s: 0 },
                                ],
                            },
                        ],
                    },
                    {
                        b: 93 + i * 0.25 + t * 1,
                        g: 0 + g + t * 10,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 3 - i - t },
                                e: [
                                    { c: 2, s: 1 },
                                    { b: 0.125, c: 2, s: 0.75, i: 1 },
                                    { b: 0.1875, s: 0 },
                                ],
                            },
                        ],
                    },
                );
                d.addLightRotationEventBoxGroups(
                    {
                        b: 77 + i * 0.25 + t * 1,
                        g: 0 + g + t * 10,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 3 - i - t },
                                r: 1,
                                l: [{ e: -1, r: 90 + i * 45 - t * 45 }],
                            },
                        ],
                    },
                    {
                        b: 93 + i * 0.25 + t * 1,
                        g: 0 + g + t * 10,
                        e: [
                            {
                                f: { f: 1, p: 4, t: 3 - i - t },
                                r: 1,
                                l: [{ e: -1, r: 90 + i * 45 - t * 45 }],
                            },
                        ],
                    },
                );
            }
        }
        d.addLightColorEventBoxGroups(
            {
                b: 49,
                g: 0 + g,
                e: [
                    {
                        f: { f: 1, p: 2, t: 1, r: 1 },
                        w: 0.499,
                        e: [{}, { b: 0.4375, s: 0 }],
                    },
                ],
            },
            {
                b: 49.5,
                g: 0 + g,
                e: [
                    {
                        f: { f: 1, p: 2, t: 0, r: 1 },
                        w: 0.499,
                        e: [{}, { b: 0.4375, s: 0 }],
                    },
                ],
            },
            {
                b: 81,
                g: 0 + g,
                e: [
                    {
                        f: { f: 1, p: 2, t: 1, r: 1 },
                        w: 0.499,
                        e: [{}, { b: 0.4375, s: 0 }],
                    },
                ],
            },
            {
                b: 81.5,
                g: 0 + g,
                e: [
                    {
                        f: { f: 1, p: 4, t: 1, r: 1 },
                        w: 0.249,
                        e: [{}, { b: 0.1875, s: 0 }],
                    },
                ],
            },
            {
                b: 81.75,
                g: 0 + g,
                e: [
                    {
                        f: { f: 1, p: 4, t: 0, r: 1 },
                        w: 0.249,
                        e: [{}, { b: 0.1875, s: 0 }],
                    },
                ],
            },
        );
        d.addLightRotationEventBoxGroups(
            {
                b: 49,
                g: 0 + g,
                e: [
                    {
                        f: { f: 2, p: 4, t: 2 },
                        l: [{ e: -1, r: 90 }],
                    },
                    {
                        f: { f: 2, p: 5, t: 2 },
                        l: [{ e: -1, r: 0 }],
                    },
                ],
            },
            {
                b: 49.5,
                g: 0 + g,
                e: [
                    {
                        f: { f: 2, p: 4, t: 2, r: 1 },
                        l: [{ e: -1, r: 270 }],
                    },
                    {
                        f: { f: 2, p: 5, t: 2, r: 1 },
                        l: [{ e: -1, r: 180 }],
                    },
                ],
            },
            {
                b: 81,
                g: 0 + g,
                e: [
                    {
                        f: { f: 2, p: 4, t: 2 },
                        l: [{ e: -1, r: 90 }],
                    },
                    {
                        f: { f: 2, p: 5, t: 2 },
                        l: [{ e: -1, r: 0 }],
                    },
                ],
            },
            {
                b: 81.5,
                g: 0 + g,
                e: [
                    {
                        f: { f: 2, p: 0, t: 2, r: 1 },
                        l: [{ e: -1, r: 225 }],
                    },
                    {
                        f: { f: 2, p: 1, t: 2, r: 1 },
                        l: [{ e: -1, r: 135 }],
                    },
                ],
            },
            {
                b: 81.75,
                g: 0 + g,
                e: [
                    {
                        f: { f: 2, p: 0, t: 2, r: 1 },
                        l: [{ e: -1, r: 90 }],
                    },
                    {
                        f: { f: 2, p: 1, t: 2, r: 1 },
                        l: [{ e: -1, r: 0 }],
                    },
                ],
            },
        );
    }
    for (let g = 0; g < 2; g++) {
        for (let i = 0; i < 7; i++) {
            d.addLightColorEventBoxGroups({
                b: 71 + i * 0.25,
                g: 0 + g,
                e: [
                    {
                        f: { f: 2, p: 0 + i, t: 999 },
                        e: [{}, { b: 0.125, i: 2 }, { b: 0.249, s: 0, i: 1 }],
                    },
                ],
            });
            d.addLightRotationEventBoxGroups({
                b: 71 + i * 0.25,
                g: 0 + g,
                e: [
                    {
                        f: { f: 2, p: 0 + i, t: 999 },
                        l: [{ e: -1, r: 90 }],
                    },
                    {
                        f: { f: 2, p: 0 + i, t: 999 },
                        a: 1,
                        l: [{ e: -1, r: 90 }],
                    },
                ],
            });
        }
        for (let i = 0; i < 6; i++) {
            d.addLightColorEventBoxGroups({
                b: 87.5 + i * 0.25,
                g: 0 + g,
                e: [
                    {
                        f: { f: 2, p: 0 + i, t: 999 },
                        e: [{}, { b: 0.125, i: 2 }, { b: 0.249, s: 0, i: 1 }],
                    },
                ],
            });
            d.addLightRotationEventBoxGroups({
                b: 87.5 + i * 0.25,
                g: 0 + g,
                e: [
                    {
                        f: { f: 2, p: 0 + i, t: 999 },
                        l: [{ e: -1, r: 90 }],
                    },
                    {
                        f: { f: 2, p: 0 + i, t: 999 },
                        a: 1,
                        l: [{ e: -1, r: 90 }],
                    },
                ],
            });
        }
        for (let i = 0; i < 8; i++) {
            d.addLightColorEventBoxGroups(
                {
                    b: 76 + i * 0.125,
                    g: 0 + g,
                    e: [
                        {
                            f: { f: 2, p: 0 + i, t: 999 },
                            e: [{ c: 2 }, { b: 0.09375, i: 2 }, { b: 0.124, s: 0, i: 1 }],
                        },
                    ],
                },
                {
                    b: 92 + i * 0.125,
                    g: 0 + g,
                    e: [
                        {
                            f: { f: 2, p: 0 + i, t: 999 },
                            e: [{ c: 2 }, { b: 0.09375, i: 2 }, { b: 0.124, s: 0, i: 1 }],
                        },
                    ],
                },
            );
        }
        d.addLightColorEventBoxGroups(
            {
                b: 75.5,
                g: 0 + g,
                e: [
                    {
                        f: { r: 1 },
                        w: 0.499,
                        r: 0.5,
                        e: [{ s: 0 }, { b: 0.125, i: 1 }],
                    },
                ],
            },
            {
                b: 91.5,
                g: 0 + g,
                e: [
                    {
                        f: { r: 1 },
                        w: 0.499,
                        r: 0.5,
                        e: [{ s: 0 }, { b: 0.125, i: 1 }],
                    },
                ],
            },
        );
        d.addLightRotationEventBoxGroups(
            {
                b: 75,
                g: 0 + g,
                e: [
                    {
                        l: [{ e: -1, r: 90 }],
                    },
                    {
                        a: 1,
                        l: [{ e: -1, r: 90 }],
                    },
                ],
            },
            {
                b: 75.5,
                g: 0 + g,
                e: [
                    {
                        f: { f: 2, p: 0, t: 1, r: 1 },
                        a: 1,
                        w: 1.25,
                        l: [
                            { e: -1, r: 90 },
                            { b: 1, e: 3 },
                        ],
                    },
                    {
                        f: { f: 2, p: 0, t: 1, r: 1 },
                        w: 1.25,
                        s: 90,
                        t: 2,
                        l: [
                            { e: -1, r: 90 },
                            { b: 0.75, r: 45, e: 3 },
                        ],
                    },
                ],
            },
            {
                b: 91,
                g: 0 + g,
                e: [
                    {
                        l: [{ e: -1, r: 90 }],
                    },
                    {
                        a: 1,
                        l: [{ e: -1, r: 90 }],
                    },
                ],
            },
            {
                b: 91.5,
                g: 0 + g,
                e: [
                    {
                        f: { f: 2, p: 0, t: 1, r: 1 },
                        a: 1,
                        w: 1.25,
                        l: [
                            { e: -1, r: 90 },
                            { b: 1, e: 3 },
                        ],
                    },
                    {
                        f: { f: 2, p: 0, t: 1, r: 1 },
                        w: 1.25,
                        s: 90,
                        t: 2,
                        l: [
                            { e: -1, r: 90 },
                            { b: 0.75, r: 45, e: 3 },
                        ],
                    },
                ],
            },
        );
        d.addLightRotationEventBoxGroups(
            {
                b: 73,
                g: 0 + g,
                e: [
                    {
                        l: [{ e: -1 }],
                    },
                    {
                        a: 1,
                        l: [{ e: -1 }],
                    },
                ],
            },
            {
                b: 89,
                g: 0 + g,
                e: [
                    {
                        l: [{ e: -1 }],
                    },
                    {
                        a: 1,
                        l: [{ e: -1 }],
                    },
                ],
            },
        );
    }
    //#region outro
    const outroG: number[][] = [
        [5, 1, 11, 4, 0, 10],
        [9, 3, 5, 8, 2, 4],
        [6, 9, 4, 7, 8, 5],
        [7, 2, 9, 6, 3, 8],
        [4, 0, 10, 5, 1, 11],
        [8, 2, 4, 9, 3, 5],
        [7, 8, 5, 6, 9, 4],
        [1, 3, 11, 0, 2, 10],
    ];
    d.addColorBoostEvents({ b: 98, o: false });
    for (let j = 0; j < 8; j++) {
        const time = 98 + j * 4;
        const t = [0.25, 0.5, 0.75, 1.25, 1.5, 1.75];
        const g = outroG[j];
        for (let i = 0; i < 6; i++) {
            const e = [
                { c: 2 },
                { c: 2, b: 0.125 },
                { b: 0.1875, i: 1 },
                { b: 0.375, c: 1, i: 1, s: 0.75 },
            ] as Partial<types.v3.ILightColorBase>[];
            d.addLightColorEventBoxGroups({
                b: time + t[i],
                g: g[i],
                e: [{ e, w: 0.5 }],
            });
            d.addLightRotationEventBoxGroups({
                b: time + t[i],
                g: g[i],
                e: [
                    { a: 1, l: [{ r: 90, e: -1 }] },
                    { f: { f: 2, p: 0, t: 2 }, l: [{ r: 270, e: -1 }] },
                    { f: { f: 2, p: 1, t: 2 }, l: [{ r: 90, e: -1 }] },
                ],
            });
        }
        if (j === 7) {
            d.addLightColorEventBoxGroups(
                {
                    b: time + 2,
                    g: g[0],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2,
                    g: g[3],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.25,
                    g: g[1],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.25,
                    g: g[4],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.5,
                    g: g[2],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
                {
                    b: time + 2.5,
                    g: g[5],
                    e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
                },
            );
            continue;
        }
        d.addLightColorEventBoxGroups(
            {
                b: time + 2.25,
                g: g[1],
                e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
            },
            {
                b: time + 2.25,
                g: g[4],
                e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
            },
            {
                b: time + 2.5,
                g: g[0],
                e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
            },
            {
                b: time + 2.5,
                g: g[2],
                e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
            },
            {
                b: time + 2.5,
                g: g[3],
                e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
            },
            {
                b: time + 2.5,
                g: g[5],
                e: [{ e: [{ c: 2 }, { b: 0.0625, s: 0 }], w: 0.25 }],
            },
        );
    }
    //#endregion
};
