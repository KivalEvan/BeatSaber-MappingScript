import { EaseType, EventBoxColor, TransitionType, v3 } from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

export default (d: v3.Difficulty) => {
    const repeatTiming = [102, 262];
    let ff = false;
    for (const rt of repeatTiming) {
        d.addColorBoostEvents({ b: rt, o: false }, { b: rt + 28, o: true });
        for (let b = rt, flipFlop = ff; b < rt + 32; b += 8, flipFlop = !flipFlop) {
            for (let p = 0; p < 4; p++) {
                for (let g = 8; g < 12; g += 2) {
                    d.addLightColorEventBoxGroups(
                        {
                            b: b + p / 2,
                            g: g + (flipFlop ? 1 : 0),
                            e: [
                                {
                                    f: { f: 2, p: p * 2, t: 999, r: 1 },
                                    e: [
                                        { c: EventBoxColor.WHITE, s: Brightness.ZERO },
                                        {
                                            b: 0.25,
                                            c: EventBoxColor.WHITE,
                                            s: Brightness.EXTRA,
                                            i: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            b: 0.75,
                                            c: EventBoxColor.BLUE,
                                            s: Brightness.FULL,
                                            i: TransitionType.INTERPOLATE,
                                        },
                                        { b: 1.875, i: TransitionType.EXTEND },
                                        {
                                            b: 2,
                                            c: EventBoxColor.WHITE,
                                            i: TransitionType.INTERPOLATE,
                                            s: Brightness.EXTRA,
                                        },
                                        {
                                            b: 2.25,
                                            c: EventBoxColor.WHITE,
                                            i: TransitionType.INTERPOLATE,
                                            s: Brightness.FULL,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            b: b + 2 + p / 2,
                            g: g + (flipFlop ? 1 : 0),
                            e: [
                                {
                                    f: { f: 2, p: 1 + p * 2, t: 999, r: 1 },
                                    e: [
                                        { c: EventBoxColor.WHITE, s: Brightness.ZERO },
                                        {
                                            b: 0.25,
                                            c: EventBoxColor.WHITE,
                                            s: Brightness.DOUBLE,
                                            i: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            b: 0.75,
                                            c: EventBoxColor.WHITE,
                                            s: Brightness.FULL,
                                            i: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            b: b + 4 + p,
                            g: g + (flipFlop ? 1 : 0),
                            e: [
                                {
                                    f: { f: 2, p: 1 + p * 2, t: 999 },
                                    e: [
                                        { i: TransitionType.EXTEND },
                                        {
                                            b: 0.25,
                                            c: b >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                            s: b >= rt + 24 ? 2.5 : 1.5,
                                            i: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            b: 0.75,
                                            c: b >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                            s: Brightness.ZERO,
                                            i: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            b: b + 4.5 + p,
                            g: g + (flipFlop ? 1 : 0),
                            e: [
                                {
                                    f: { f: 2, p: p * 2, t: 999 },
                                    e: [
                                        { i: TransitionType.EXTEND },
                                        {
                                            b: 0.25,
                                            c: b >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                            s: b >= rt + 24 ? 2.5 : 1.5,
                                            i: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            b: 0.75,
                                            c: b >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                            s: Brightness.ZERO,
                                            i: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                            ],
                        },
                    );
                    d.addLightRotationEventBoxGroups(
                        {
                            b: b + p / 2,
                            g: g + (flipFlop ? 1 : 0),
                            e: [
                                {
                                    f: { f: 2, p: p * 2, t: 999, r: 1 },
                                    l: [
                                        { r: 255 },
                                        { b: 1, r: 220, e: EaseType.OUT_QUAD },
                                        { b: 1.75, r: 222.5, e: EaseType.INOUT_QUAD },
                                        { b: 2.498, r: 165, e: EaseType.IN_QUAD },
                                        { b: 6.999 - p * 1.5, r: 120 + p * 15, e: EaseType.OUT_QUAD },
                                    ],
                                },
                            ],
                        },
                        {
                            b: b + 2 + p / 2,
                            g: g + (flipFlop ? 1 : 0),
                            e: [
                                {
                                    f: { f: 2, p: 1 + p * 2, t: 999, r: 1 },
                                    l: [
                                        { r: 135 },
                                        { b: 0.499, r: 225, e: EaseType.IN_QUAD },
                                        { b: 5.499 - p * 1.5, r: 260 - p * 10, e: EaseType.OUT_QUAD },
                                    ],
                                },
                            ],
                        },
                        {
                            b: b + 4 + p,
                            g: g + (flipFlop ? 1 : 0),
                            e: [
                                {
                                    f: { f: 2, p: 1 + p * 2, t: 999 },
                                    l: [{ p: 1 }, { b: 0.75, r: 45, e: EaseType.IN_QUAD }],
                                },
                            ],
                        },
                        {
                            b: b + 4.5 + p,
                            g: g + (flipFlop ? 1 : 0),
                            e: [
                                {
                                    f: { f: 2, p: p * 2, t: 999 },
                                    l: [{ p: 1 }, { b: 0.75, r: 315, e: EaseType.IN_QUAD }],
                                },
                            ],
                        },
                    );
                    if (b === rt + 24) {
                        d.addLightColorEventBoxGroups(
                            {
                                b: b + 2 + p / 2,
                                g: g + (flipFlop ? 0 : 1),
                                e: [
                                    {
                                        f: { f: 1, t: p, p: 4, r: 1 },
                                        e: [
                                            { c: EventBoxColor.WHITE, s: Brightness.ZERO },
                                            {
                                                b: 0.25,
                                                c: EventBoxColor.WHITE,
                                                s: Brightness.DOUBLE,
                                                i: TransitionType.INTERPOLATE,
                                            },
                                            {
                                                b: 0.75,
                                                c: EventBoxColor.WHITE,
                                                s: Brightness.FULL,
                                                i: TransitionType.INTERPOLATE,
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                b: b + 4 + p,
                                g: g + (flipFlop ? 0 : 1),
                                e: [
                                    {
                                        f: { f: 2, p: 1 + p * 2, t: 999 },
                                        e: [
                                            { i: TransitionType.EXTEND },
                                            {
                                                b: 0.25,
                                                c: b >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                                s: b >= rt + 24 ? 2.5 : 1.5,
                                                i: TransitionType.INTERPOLATE,
                                            },
                                            {
                                                b: 0.75,
                                                c: b >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                                s: Brightness.ZERO,
                                                i: TransitionType.INTERPOLATE,
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                b: b + 4.5 + p,
                                g: g + (flipFlop ? 0 : 1),
                                e: [
                                    {
                                        f: { f: 2, p: p * 2, t: 999 },
                                        e: [
                                            { i: TransitionType.EXTEND },
                                            {
                                                b: 0.25,
                                                c: b >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                                s: b >= rt + 24 ? 2.5 : 1.5,
                                                i: TransitionType.INTERPOLATE,
                                            },
                                            {
                                                b: 0.75,
                                                c: b >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                                s: Brightness.ZERO,
                                                i: TransitionType.INTERPOLATE,
                                            },
                                        ],
                                    },
                                ],
                            },
                        );
                        d.addLightRotationEventBoxGroups(
                            {
                                b: b + p / 2,
                                g: g + (flipFlop ? 0 : 1),
                                e: [
                                    {
                                        f: { f: 2, p: p * 2, t: 999, r: 1 },
                                        l: [
                                            { r: 255 },
                                            { b: 1, r: 220, e: EaseType.OUT_QUAD },
                                            { b: 1.75, r: 222.5, e: EaseType.INOUT_QUAD },
                                            { b: 2.498, r: 165, e: EaseType.IN_QUAD },
                                            { b: 6.999 - p * 1.5, r: 120 + p * 15, e: EaseType.OUT_QUAD },
                                        ],
                                    },
                                ],
                            },
                            {
                                b: b + 2 + p / 2,
                                g: g + (flipFlop ? 0 : 1),
                                e: [
                                    {
                                        f: { f: 2, p: 1 + p * 2, t: 999, r: 1 },
                                        l: [
                                            { r: 135 },
                                            { b: 0.499, r: 225, e: EaseType.IN_QUAD },
                                            { b: 5.499 - p * 1.5, r: 260 - p * 10, e: EaseType.OUT_QUAD },
                                        ],
                                    },
                                ],
                            },
                            {
                                b: b + 4 + p,
                                g: g + (flipFlop ? 0 : 1),
                                e: [
                                    {
                                        f: { f: 2, p: 1 + p * 2, t: 999 },
                                        l: [{ p: 1 }, { b: 0.75, r: 45, e: EaseType.IN_QUAD }],
                                    },
                                ],
                            },
                            {
                                b: b + 4.5 + p,
                                g: g + (flipFlop ? 0 : 1),
                                e: [
                                    {
                                        f: { f: 2, p: p * 2, t: 999 },
                                        l: [{ p: 1 }, { b: 0.75, r: 315, e: EaseType.IN_QUAD }],
                                    },
                                ],
                            },
                        );
                    }
                }
            }
        }
        for (let g = 0; g < 4; g++) {
            d.addLightColorEventBoxGroups({
                b: rt,
                g,
                e: [
                    {
                        w: 0.999,
                        e: [
                            { c: EventBoxColor.WHITE, s: 2.5 },
                            { b: 0.09375, s: Brightness.ZERO, c: EventBoxColor.WHITE },
                            { b: 0.125, c: EventBoxColor.RED },
                        ],
                    },
                ],
            });
            for (
                let b = rt, flipFlop = false, first = true;
                b <= rt + 24;
                b += 12, flipFlop = !flipFlop, first = false
            ) {
                d.addLightRotationEventBoxGroups({
                    b,
                    g,
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
            for (let i = 0; i < 16; i++) {
                if (i % 4 > 1) {
                    continue;
                }
                d.addLightColorEventBoxGroups(
                    {
                        b: rt + 1 + i * 2,
                        g,
                        e: [
                            {
                                f: { r: 1 },
                                w: 0.499,
                                e: [
                                    { c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                                    { b: 0.28125, s: Brightness.ZERO, c: EventBoxColor.BLUE },
                                ],
                            },
                        ],
                    },
                    // {
                    //     b: rt + 1.5 + i * 2,
                    //     g,
                    //     e: [
                    //         {
                    //             e: [{ b: 1, c: EventBoxColor.BLUE, s: Brightness.FULL, i: TransitionType.INTERPOLATE }],
                    //         },
                    //     ],
                    // }
                );
            }
        }
        ff = !ff;
    }
};
