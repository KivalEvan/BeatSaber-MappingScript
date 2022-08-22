import { utils, v3 } from '../../depsLocal.ts';

export default (d: v3.Difficulty) => {
    for (let g = 0; g < 12; g++) {
        d.addLightColorEventBoxGroups(
            {
                b: 69.999,
                g,
                e: [
                    {
                        e: [{ s: 0 }],
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
                            { c: 2, s: 2.5 },
                            { b: 0.09375, s: 0 },
                            { b: 0.125, c: 1 },
                        ],
                    },
                ],
            },
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
                        l: [{ r: 135, e: -1 }],
                    },
                    {
                        a: 1,
                        w: -30,
                        b: 1,
                        l: [{ r: 300, e: -1 }],
                    },
                ],
            },
            {
                b: 78,
                g: g,
                e: [{ a: 1, l: [{ e: 2 }] }],
            },
        );
        for (let b = 70.5, flipFlop = false, first = true; b < 102; b += 12, flipFlop = !flipFlop, first = false) {
            d.addLightRotationEventBoxGroups({
                b,
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
        for (let b = 71; b < 102; b += 2) {
            d.addLightColorEventBoxGroups(
                {
                    b,
                    g,
                    e: [
                        {
                            f: { r: 1 },
                            w: 0.499,
                            e: [
                                { c: 2, s: 1.5 },
                                { b: 0.28125, s: 0, c: 1 },
                            ],
                        },
                    ],
                },
                {
                    b: b + 0.5,
                    g,
                    e: [
                        {
                            e: [{ b: 1, c: 1, s: 1, i: 1 }],
                        },
                    ],
                },
            );
        }
    }
    for (let g = 4; g < 8; g++) {
        d.addLightRotationEventBoxGroups(
            {
                b: 70,
                g: g,
                e: [
                    { l: [{ r: 225 }] },
                    {
                        a: 1,
                        l: [{ r: 180, e: -1 }],
                    },
                ],
            },
            {
                b: 75,
                g: g,
                e: [{ l: [{ r: 270, e: 2 }] }],
            },
            {
                b: 100,
                g: g,
                e: [{ l: [{ r: 270 }] }],
            },
        );
        for (let b = 71, flipFlop = false, first = true; b < 102; b += 12, flipFlop = !flipFlop, first = false) {
            d.addLightRotationEventBoxGroups({
                b,
                g: g,
                e: [
                    {
                        f: { f: 2, t: 2 },
                        a: 1,
                        l: [{ r: flipFlop ? 240 : 120, e: first ? 2 : 3 }],
                    },
                    {
                        f: { f: 2, p: 1, t: 2 },
                        a: 1,
                        l: [{ r: flipFlop ? 120 : 240, e: first ? 2 : 3 }],
                    },
                ],
            });
        }
        for (let b = 71; b < 102; b += 0.5) {
            d.addLightColorEventBoxGroups({
                b: b + utils.random(0, 0.375),
                g,
                e: [
                    {
                        f: { f: 2, p: utils.random(0, 7, true), t: 8 },
                        e: [{ i: 2 }, { b: 0.125, c: 2, i: 1, s: 1.5 }, { b: 0.375, c: 1, i: 1 }],
                    },
                ],
            });
        }
    }
    for (let g = 8; g < 12; g++) {
        d.addLightRotationEventBoxGroups(
            {
                b: 70,
                g: g,
                e: [
                    {
                        r: 1,
                        l: [{ r: 172.5, e: -1 }],
                    },
                    {
                        a: 1,
                        r: 1,
                        l: [{ r: 300, e: -1 }],
                    },
                ],
            },
            {
                b: 76,
                g: g,
                e: [{ a: 1, r: 1, l: [{ e: 2 }] }],
            },
            {
                b: 100,
                g: g,
                e: [{ l: [{ r: 270 }] }],
            },
        );
        for (let b = 72, flipFlop = false, first = true; b < 102; b += 12, flipFlop = !flipFlop, first = false) {
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
        for (let b = 70, flipFlop = false; b < 102; b += 4, flipFlop = !flipFlop) {
            if (flipFlop ? g % 2 : !(g % 2)) {
                d.addLightColorEventBoxGroups({
                    b: b + 0.5,
                    g,
                    e: [
                        {
                            w: 0.999,
                            e: [
                                { c: 2, s: 1.5 },
                                { b: 0.28125, c: 2, s: 0 },
                                { b: 0.78125, c: 1, i: 1 },
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
                                { c: 2, s: 1.5 },
                                { b: 0.28125, c: 2, s: 0 },
                                { b: 0.78125, c: 1, i: 1 },
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
                                { c: 2, s: 1.5 },
                                { b: 0.28125, c: 2, s: 0 },
                                { b: 0.78125, c: 1, i: 1 },
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
                                { c: 2, s: 1.5 },
                                { b: 0.28125, c: 2, s: 0 },
                                { b: 0.78125, c: 1, i: 1 },
                            ],
                        },
                    ],
                });
            }
            d.addLightColorEventBoxGroups({
                b: b + 3.5,
                g,
                e: [
                    {
                        f: { r: 1 },
                        w: 0.999,
                        e: [
                            { c: 2, s: 1.5 },
                            { b: 0.25, c: 2, s: 0 },
                            { b: 0.75, c: 1, i: 1 },
                        ],
                    },
                ],
            });
        }
    }
};
