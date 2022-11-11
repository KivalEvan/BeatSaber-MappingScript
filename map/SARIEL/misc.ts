import { Axis, EaseType, EventBoxColor, TransitionType, v3 } from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

export default (d: v3.Difficulty) => {
    const dingTiming = [
        38,
        46.5,
        48,
        49.5,
        54,
        55.5,
        57,
        62.5,
        64,
        65.5,
        166,
        174,
        182,
        190,
        326,
        334,
        342,
        350,
        422,
        430,
        431.5,
        433,
        438,
        439.5,
        441,
        446.5,
        448,
        449.5,
        454,
        462,
        470,
        478,
    ];
    for (const dt of dingTiming) {
        for (let g = 0; g < 2; g++) {
            d.addLightColorEventBoxGroups({
                time: dt,
                id: 2 + g,
                events: [
                    {
                        filter: { type: 2, p1: 2, reverse: 1 },
                        beatDistribution: 0.5,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: Brightness.DOUBLE },
                            {
                                time: 0.25,
                                color: EventBoxColor.WHITE,
                                brightness: Brightness.ZERO,
                                transition: TransitionType.INTERPOLATE,
                            },
                        ],
                    },
                ],
            });
            d.addLightRotationEventBoxGroups({
                time: dt,
                id: 2 + g,
                e: [
                    {
                        f: { f: 2, t: 2, r: 1 },
                        l: [{ r: 270 }],
                    },
                    {
                        f: { f: 2, t: 2, r: 1 },
                        a: Axis.Y,
                        l: [{}],
                    },
                ],
            });
        }
    }

    for (let g = 0; g < 12; g++) {
        d.addLightRotationEventBoxGroups({
            time: 66.5 + g * 0.0625,
            id: g,
            e: [
                {
                    f: { r: 1 },
                    a: Axis.Y,
                    l: [{ p: 1 }, { b: 0.25 }],
                },
                {
                    f: { f: 2, t: 2, r: 1 },
                    l: [
                        {
                            e: EaseType.NONE,
                            r: g < 8
                                ? g % 4 > 1 ? g % 2 ? 90 : 270 : g % 2 ? 270 : 90
                                : g % 4 > 1
                                ? g % 2 ? 0 : 180
                                : g % 2
                                ? 180
                                : 0,
                        },
                        {
                            b: 0.5,
                            e: EaseType.OUT_QUAD,
                            r: g >= 8
                                ? g % 4 > 1 ? g % 2 ? 0 : 180 : g % 2 ? 180 : 0
                                : g % 4 > 1
                                ? g % 2 ? 90 : 270
                                : g % 2
                                ? 270
                                : 90,
                        },
                        { b: 3.499 - g * 0.0625, p: 1 },
                    ],
                },
                {
                    f: { f: 2, p: 1, t: 2, r: 1 },
                    l: [
                        {
                            e: EaseType.NONE,
                            r: g < 8
                                ? g % 4 > 1 ? g % 2 ? 270 : 90 : g % 2 ? 90 : 270
                                : g % 4 > 1
                                ? g % 2 ? 180 : 0
                                : g % 2
                                ? 0
                                : 180,
                        },
                        {
                            b: 0.5,
                            e: EaseType.OUT_QUAD,
                            r: g >= 8
                                ? g % 4 > 1 ? g % 2 ? 180 : 0 : g % 2 ? 0 : 180
                                : g % 4 > 1
                                ? g % 2 ? 270 : 90
                                : g % 2
                                ? 90
                                : 270,
                        },
                        { b: 3.499 - g * 0.0625, p: 1 },
                    ],
                },
            ],
        });
        d.addLightColorEventBoxGroups({
            time: 66.5 + g * 0.09375,
            id: g,
            e: [
                {
                    f: { r: 1 },
                    w: 3.28125,
                    e: [
                        { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                        { b: 0.03125, f: 6 },
                        { b: 1.5, f: 6, s: Brightness.HALF },
                        { b: 2, f: 6, i: TransitionType.INTERPOLATE },
                        { b: 2.5, f: 6, s: Brightness.HALF },
                        { b: 3, f: 6, i: TransitionType.INTERPOLATE },
                    ],
                },
            ],
        });

        d.addLightRotationEventBoxGroups({
            time: 452 + g * 0.03125,
            id: g,
            e: [
                {
                    f: { r: 1 },
                    a: Axis.Y,
                    l: [{ p: 1 }, { b: 0.25 }],
                },
                {
                    f: { f: 2, t: 4, r: 1 },
                    l: [
                        {
                            e: EaseType.NONE,
                            r: g < 8
                                ? g % 4 > 1 ? g % 2 ? 90 : 270 : g % 2 ? 270 : 90
                                : g % 4 > 1
                                ? g % 2 ? 0 : 180
                                : g % 2
                                ? 180
                                : 0,
                        },
                        {
                            b: 0.5,
                            e: EaseType.OUT_QUAD,
                            r: g >= 8
                                ? g % 4 > 1 ? g % 2 ? 0 : 180 : g % 2 ? 180 : 0
                                : g % 4 > 1
                                ? g % 2 ? 90 : 270
                                : g % 2
                                ? 270
                                : 90,
                        },
                        { b: 1.999 - g * 0.03125, p: 1 },
                    ],
                },
                {
                    f: { f: 2, p: 1, t: 4, r: 1 },
                    l: [
                        {
                            e: EaseType.NONE,
                            r: g < 8
                                ? g % 4 > 1 ? g % 2 ? 0 : 180 : g % 2 ? 0 : 180
                                : g % 4 > 1
                                ? g % 2 ? 270 : 90
                                : g % 2
                                ? 270
                                : 90,
                        },
                        {
                            b: 0.5,
                            e: EaseType.OUT_QUAD,
                            r: g >= 8
                                ? g % 4 > 1 ? g % 2 ? 270 : 90 : g % 2 ? 270 : 90
                                : g % 4 > 1
                                ? g % 2 ? 0 : 180
                                : g % 2
                                ? 0
                                : 180,
                        },
                        { b: 1.999 - g * 0.03125, p: 1 },
                    ],
                },
                {
                    f: { f: 2, p: 2, t: 4, r: 1 },
                    l: [
                        {
                            e: EaseType.NONE,
                            r: g < 8
                                ? g % 4 > 1 ? g % 2 ? 270 : 90 : g % 2 ? 90 : 270
                                : g % 4 > 1
                                ? g % 2 ? 180 : 0
                                : g % 2
                                ? 0
                                : 180,
                        },
                        {
                            b: 0.5,
                            e: EaseType.OUT_QUAD,
                            r: g >= 8
                                ? g % 4 > 1 ? g % 2 ? 180 : 0 : g % 2 ? 0 : 180
                                : g % 4 > 1
                                ? g % 2 ? 270 : 90
                                : g % 2
                                ? 90
                                : 270,
                        },
                        { b: 1.999 - g * 0.03125, p: 1 },
                    ],
                },
                {
                    f: { f: 2, p: 3, t: 4, r: 1 },
                    l: [
                        {
                            e: EaseType.NONE,
                            r: g < 8
                                ? g % 4 > 1 ? g % 2 ? 180 : 0 : g % 2 ? 180 : 0
                                : g % 4 > 1
                                ? g % 2 ? 90 : 270
                                : g % 2
                                ? 90
                                : 270,
                        },
                        {
                            b: 0.5,
                            e: EaseType.OUT_QUAD,
                            r: g >= 8
                                ? g % 4 > 1 ? g % 2 ? 90 : 270 : g % 2 ? 90 : 270
                                : g % 4 > 1
                                ? g % 2 ? 180 : 0
                                : g % 2
                                ? 180
                                : 0,
                        },
                        { b: 1.999 - g * 0.03125, p: 1 },
                    ],
                },
            ],
        });
        d.addLightColorEventBoxGroups(
            {
                time: 452 + g * 0.0625,
                id: g,
                e: [
                    {
                        f: { r: 1 },
                        w: 0.28125,
                        e: [{ s: 2.5 }, { b: 0.03125, f: 6 }],
                    },
                ],
            },
            {
                time: 454,
                id: g,
                e: [
                    {
                        e: [{ s: 0 }],
                    },
                ],
            },
        );
    }
};
