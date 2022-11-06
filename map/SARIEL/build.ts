import { EaseType, EventBoxColor, TransitionType, utils, v3 } from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

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
                                { c: EventBoxColor.WHITE, s: 2.5 },
                                { b: 0.0625, i: TransitionType.EXTEND },
                                { b: 0.5, i: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 4 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [
                                { c: EventBoxColor.WHITE, s: 2.5 },
                                { b: 0.0625, i: TransitionType.EXTEND },
                                {
                                    b: 0.5,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
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
                            f: { r: 1 },
                            w: 1,
                            e: [
                                { c: EventBoxColor.WHITE, s: 2.5 },
                                { b: 0.0625, i: TransitionType.EXTEND },
                                {
                                    b: 0.5,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                },
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
                            e: [
                                { i: TransitionType.EXTEND },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                },
                            ],
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
                                { c: EventBoxColor.WHITE, s: 2.5 },
                                { b: 0.0625, i: TransitionType.EXTEND },
                                { b: 0.5, i: TransitionType.INTERPOLATE },
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
                                { c: EventBoxColor.WHITE, s: 2.5 },
                                { b: 0.0625, i: TransitionType.EXTEND },
                                { b: 0.5, i: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                },
                {
                    b: rt + 8,
                    g: 4 + i,
                    e: [
                        {
                            f: { r: 1 },
                            w: 1,
                            e: [
                                { c: EventBoxColor.WHITE, s: 2.5 },
                                { b: 0.0625, i: TransitionType.EXTEND },
                                {
                                    b: 0.5,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                },
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
                            e: [
                                { i: TransitionType.EXTEND },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                },
                            ],
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
                            e: [
                                { i: TransitionType.EXTEND },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
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
                            f: { r: 1 },
                            w: 1,
                            e: [
                                { c: EventBoxColor.WHITE, s: 2.5 },
                                { b: 0.0625, i: TransitionType.EXTEND },
                                { b: 0.5, i: TransitionType.INTERPOLATE },
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
                                { c: EventBoxColor.WHITE, s: 2.5 },
                                { b: 0.0625, i: TransitionType.EXTEND },
                                { b: 0.5, i: TransitionType.INTERPOLATE },
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
                                { c: EventBoxColor.WHITE, s: 2.5 },
                                { b: 0.0625, i: TransitionType.EXTEND },
                                { b: 0.5, i: TransitionType.INTERPOLATE },
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
                            e: [
                                { i: TransitionType.EXTEND },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                },
                            ],
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
                            e: [
                                { i: TransitionType.EXTEND },
                                {
                                    b: 0.5,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.ZERO,
                                },
                            ],
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
                            e: [
                                { i: TransitionType.EXTEND },
                                {
                                    b: 0.5,
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
                    b: rt,
                    g: 0 + i,
                    e: [{ s: -45, b: 1, l: [{ r: 165, e: EaseType.INOUT_QUAD }] }],
                },
                {
                    b: rt - 6 + 7 + 0.125,
                    g: 0 + i,
                    e: [
                        {
                            s: -60 - utils.random(0, 5),
                            w: 3.5,
                            b: 1,
                            l: [
                                {
                                    r: 270 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 10.5 + 0.125,
                    g: 0 + i,
                    e: [
                        {
                            s: -60 - utils.random(0, 5),
                            w: 7,
                            b: 1,
                            l: [
                                {
                                    r: 255 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 17.5 + 0.125,
                    g: 0 + i,
                    e: [
                        {
                            s: -60 - utils.random(0, 5),
                            w: 7,
                            b: 1,
                            l: [
                                {
                                    r: 270 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 24.5 + 0.125,
                    g: 0 + i,
                    e: [
                        {
                            s: -60 - utils.random(0, 5),
                            w: 7,
                            b: 1,
                            l: [
                                {
                                    r: 255 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 31.5 + 0.125,
                    g: 0 + i,
                    e: [
                        {
                            s: -60 - utils.random(0, 5),
                            w: 7,
                            b: 1,
                            l: [
                                {
                                    r: 270 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 35 + 0.125,
                    g: 0 + i,
                    e: [
                        {
                            s: -60 - utils.random(0, 5),
                            w: 2,
                            b: 1,
                            l: [
                                { r: 262.5 + utils.random(-5, 5), e: EaseType.IN_QUAD },
                            ],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 4 + i,
                    e: [{ s: -30, b: 1, l: [{ r: 165, e: EaseType.INOUT_QUAD }] }],
                },
                {
                    b: rt - 6 + 7 + 0.25,
                    g: 4 + i,
                    e: [
                        {
                            s: -45 - utils.random(0, 5),
                            w: 4,
                            b: 1,
                            l: [
                                {
                                    r: 240 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 11 + 0.25,
                    g: 4 + i,
                    e: [
                        {
                            s: -45 - utils.random(0, 5),
                            w: 8,
                            b: 1,
                            l: [
                                {
                                    r: 225 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 19 + 0.25,
                    g: 4 + i,
                    e: [
                        {
                            s: -45 - utils.random(0, 5),
                            w: 8,
                            b: 1,
                            l: [
                                {
                                    r: 240 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 27 + 0.25,
                    g: 4 + i,
                    e: [
                        {
                            s: -45 - utils.random(0, 5),
                            w: 8,
                            b: 1,
                            l: [
                                {
                                    r: 225 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 35 + 0.25,
                    g: 4 + i,
                    e: [
                        {
                            s: -45 - utils.random(0, 5),
                            w: 2,
                            b: 1,
                            l: [{ r: 230 + utils.random(-5, 5), e: EaseType.OUT_QUAD }],
                        },
                    ],
                },
                {
                    b: rt,
                    g: 10 + i,
                    e: [{ s: 45, b: 1, l: [{ r: 285, e: EaseType.INOUT_QUAD }] }],
                },
                {
                    b: rt - 6 + 7,
                    g: 10 + i,
                    e: [
                        {
                            s: 75 + utils.random(0, 5),
                            w: 3,
                            b: 1,
                            l: [
                                {
                                    r: 150 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 10,
                    g: 10 + i,
                    e: [
                        {
                            s: 75 + utils.random(0, 5),
                            w: 6,
                            b: 1,
                            l: [
                                {
                                    r: 165 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 16,
                    g: 10 + i,
                    e: [
                        {
                            s: 75 + utils.random(0, 5),
                            w: 6,
                            b: 1,
                            l: [
                                {
                                    r: 150 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 22,
                    g: 10 + i,
                    e: [
                        {
                            s: 75 + utils.random(0, 5),
                            w: 6,
                            b: 1,
                            l: [
                                {
                                    r: 165 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 28,
                    g: 10 + i,
                    e: [
                        {
                            s: 75 + utils.random(0, 5),
                            w: 6,
                            b: 1,
                            l: [
                                {
                                    r: 150 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
                {
                    b: rt - 6 + 34,
                    g: 10 + i,
                    e: [
                        {
                            s: 75 + utils.random(0, 5),
                            w: 6,
                            b: 1,
                            l: [
                                {
                                    r: 165 + utils.random(-5, 5),
                                    e: EaseType.INOUT_QUAD,
                                },
                            ],
                        },
                    ],
                },
            );
        }
    }
};
