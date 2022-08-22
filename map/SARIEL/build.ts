import { utils, v3 } from '../../depsLocal.ts';

export default (d: v3.Difficulty) => {
    const repeatTiming = [166, 326];
    for (const rt of repeatTiming) {
        for (let i = 0; i < 2; i++) {
            d.addLightColorEventBoxGroups(
                {
                    b: rt,
                    g: 10 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [
                                { c: 2, s: 2.5 },
                                { b: 0.5, i: 1 },
                            ],
                        },
                    ],
                },
                {
                    b: rt + 4,
                    g: 10 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [{ i: 2 }, { b: 0.5, i: 1, s: 0 }],
                        },
                    ],
                },
                {
                    b: rt + 8,
                    g: 10 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [
                                { c: 2, s: 2.5 },
                                { b: 0.5, i: 1 },
                            ],
                        },
                    ],
                },
                {
                    b: rt + 8,
                    g: 0 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [
                                { c: 2, s: 2.5 },
                                { b: 0.5, i: 1 },
                            ],
                        },
                    ],
                },
                {
                    b: rt + 12,
                    g: 10 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [{ i: 2 }, { b: 0.5, i: 1, s: 0 }],
                        },
                    ],
                },
                {
                    b: rt + 12,
                    g: 0 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [{ i: 2 }, { b: 0.5, i: 1, s: 0 }],
                        },
                    ],
                },
                {
                    b: rt + 16,
                    g: 10 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [
                                { c: 2, s: 2.5 },
                                { b: 0.5, i: 1 },
                            ],
                        },
                    ],
                },
                {
                    b: rt + 16,
                    g: 0 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [
                                { c: 2, s: 2.5 },
                                { b: 0.5, i: 1 },
                            ],
                        },
                    ],
                },
                {
                    b: rt + 16,
                    g: 4 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [
                                { c: 2, s: 2.5 },
                                { b: 0.5, i: 1 },
                            ],
                        },
                    ],
                },
                {
                    b: rt + 20,
                    g: 10 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [{ i: 2 }, { b: 0.5, i: 1, s: 0 }],
                        },
                    ],
                },
                {
                    b: rt + 20,
                    g: 0 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [{ i: 2 }, { b: 0.5, i: 1, s: 0 }],
                        },
                    ],
                },
                {
                    b: rt + 20,
                    g: 4 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [{ i: 2 }, { b: 0.5, i: 1, s: 0 }],
                        },
                    ],
                },
            );
            d.addLightRotationEventBoxGroups(
                { b: rt - 7 + 0.125, g: 0 + i, e: [{ s: -45, w: 1, l: [{ r: 180 }, { b: 0.5, r: 165, e: 2 }] }] },
                {
                    b: rt - 6 + 7 + 0.125,
                    g: 0 + i,
                    e: [{ s: -60 - utils.random(0, 5), w: 3.5, b: 1, l: [{ r: 270 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 10.5 + 0.125,
                    g: 0 + i,
                    e: [{ s: -60 - utils.random(0, 5), w: 7, b: 1, l: [{ r: 255 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 17.5 + 0.125,
                    g: 0 + i,
                    e: [{ s: -60 - utils.random(0, 5), w: 7, b: 1, l: [{ r: 270 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 24.5 + 0.125,
                    g: 0 + i,
                    e: [{ s: -60 - utils.random(0, 5), w: 7, b: 1, l: [{ r: 255 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 31.5 + 0.125,
                    g: 0 + i,
                    e: [{ s: -60 - utils.random(0, 5), w: 7, b: 1, l: [{ r: 270 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 35 + 0.125,
                    g: 0 + i,
                    e: [{ s: -60 - utils.random(0, 5), w: 2, b: 1, l: [{ r: 262.5 + utils.random(-5, 5), e: 1 }] }],
                },
                { b: rt - 6 + 5 + 0.25, g: 4 + i, e: [{ s: -30, w: 0.75, l: [{ r: 180 }, { b: 0.5, r: 165, e: 2 }] }] },
                {
                    b: rt - 6 + 7 + 0.25,
                    g: 4 + i,
                    e: [{ s: -45 - utils.random(0, 5), w: 4, b: 1, l: [{ r: 240 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 11 + 0.25,
                    g: 4 + i,
                    e: [{ s: -45 - utils.random(0, 5), w: 8, b: 1, l: [{ r: 225 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 19 + 0.25,
                    g: 4 + i,
                    e: [{ s: -45 - utils.random(0, 5), w: 8, b: 1, l: [{ r: 240 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 27 + 0.25,
                    g: 4 + i,
                    e: [{ s: -45 - utils.random(0, 5), w: 8, b: 1, l: [{ r: 225 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 35 + 0.25,
                    g: 4 + i,
                    e: [{ s: -45 - utils.random(0, 5), w: 2, b: 1, l: [{ r: 230 + utils.random(-5, 5), e: 2 }] }],
                },
                { b: rt - 6 + 5, g: 10 + i, e: [{ s: 45, w: 0.5, l: [{ r: 270 }, { b: 0.5, r: 285, e: 2 }] }] },
                {
                    b: rt - 6 + 7,
                    g: 10 + i,
                    e: [{ s: 75 + utils.random(0, 5), w: 3, b: 1, l: [{ r: 150 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 10,
                    g: 10 + i,
                    e: [{ s: 75 + utils.random(0, 5), w: 6, b: 1, l: [{ r: 165 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 16,
                    g: 10 + i,
                    e: [{ s: 75 + utils.random(0, 5), w: 6, b: 1, l: [{ r: 150 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 22,
                    g: 10 + i,
                    e: [{ s: 75 + utils.random(0, 5), w: 6, b: 1, l: [{ r: 165 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 28,
                    g: 10 + i,
                    e: [{ s: 75 + utils.random(0, 5), w: 6, b: 1, l: [{ r: 150 + utils.random(-5, 5), e: 3 }] }],
                },
                {
                    b: rt - 6 + 34,
                    g: 10 + i,
                    e: [{ s: 75 + utils.random(0, 5), w: 6, b: 1, l: [{ r: 165 + utils.random(-5, 5), e: 3 }] }],
                },
            );
        }
    }
};
