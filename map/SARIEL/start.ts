import { Axis, EaseType, EventBoxColor, TransitionType, utils, v3 } from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

export default (d: v3.Difficulty) => {
    for (let i = 0; i < 2; i++) {
        d.addLightColorEventBoxGroups(
            {
                b: 6,
                g: 0 + i,
                e: [
                    {
                        f: { r: 1 },
                        w: 2,
                        e: [
                            { c: EventBoxColor.WHITE, s: 2.5 },
                            { b: 0.5, c: EventBoxColor.BLUE, i: TransitionType.INTERPOLATE },
                        ],
                    },
                ],
            },
            {
                b: 6,
                g: 4 + i,
                e: [
                    {
                        f: { r: 1 },
                        w: 2,
                        e: [
                            { c: EventBoxColor.WHITE, s: 2.5 },
                            { b: 0.5, c: EventBoxColor.BLUE, i: TransitionType.INTERPOLATE },
                        ],
                    },
                ],
            },
            {
                b: 6,
                g: 10 + i,
                e: [
                    {
                        f: { r: 1 },
                        w: 2,
                        e: [
                            { c: EventBoxColor.WHITE, s: 2.5 },
                            { b: 0.5, c: EventBoxColor.BLUE, i: TransitionType.INTERPOLATE },
                        ],
                    },
                ],
            },
        );
        for (let x = 7.75; x < 36; x += 0.5) {
            d.addLightColorEventBoxGroups(
                {
                    b: x + utils.random(0, 0.375),
                    g: 0 + i,
                    e: [
                        {
                            f: { f: 2, p: utils.random(0, 7, true), t: 8 },
                            e: [
                                { i: TransitionType.EXTEND },
                                {
                                    b: 0.125,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.FLASH,
                                },
                                { b: 0.375, c: EventBoxColor.BLUE, i: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                },
                {
                    b: x + utils.random(0, 0.375),
                    g: 4 + i,
                    e: [
                        {
                            f: { f: 2, p: utils.random(0, 7, true), t: 8 },
                            e: [
                                { i: TransitionType.EXTEND },
                                {
                                    b: 0.125,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.FLASH,
                                },
                                { b: 0.375, c: EventBoxColor.BLUE, i: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                },
                {
                    b: x + utils.random(0, 0.375),
                    g: 10 + i,
                    e: [
                        {
                            f: { f: 2, p: utils.random(0, 7, true), t: 8 },
                            e: [
                                { i: TransitionType.EXTEND },
                                {
                                    b: 0.125,
                                    c: EventBoxColor.WHITE,
                                    i: TransitionType.INTERPOLATE,
                                    s: Brightness.FLASH,
                                },
                                { b: 0.375, c: EventBoxColor.BLUE, i: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                },
            );
        }
        d.addLightRotationEventBoxGroups(
            {
                b: 5 + 0.125,
                g: 0 + i,
                e: [{ s: -45, w: 1, l: [{ r: 180 }, { b: 0.5, r: 165, e: EaseType.OUT_QUAD }] }],
            },
            {
                b: 7 + 0.125,
                g: 0 + i,
                e: [
                    {
                        s: -60 - utils.random(0, 5),
                        w: 3.5,
                        b: 1,
                        l: [{ r: 270 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 10.5 + 0.125,
                g: 0 + i,
                e: [
                    {
                        s: -60 - utils.random(0, 5),
                        w: 7,
                        b: 1,
                        l: [{ r: 255 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 17.5 + 0.125,
                g: 0 + i,
                e: [
                    {
                        s: -60 - utils.random(0, 5),
                        w: 7,
                        b: 1,
                        l: [{ r: 270 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 24.5 + 0.125,
                g: 0 + i,
                e: [
                    {
                        s: -60 - utils.random(0, 5),
                        w: 7,
                        b: 1,
                        l: [{ r: 255 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 31.5 + 0.125,
                g: 0 + i,
                e: [
                    {
                        s: -60 - utils.random(0, 5),
                        w: 7,
                        b: 1,
                        l: [{ r: 270 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 35 + 0.125,
                g: 0 + i,
                e: [
                    {
                        s: -60 - utils.random(0, 5),
                        w: 2,
                        b: 1,
                        l: [{ r: 262.5 + utils.random(-5, 5), e: EaseType.IN_QUAD }],
                    },
                ],
            },
            {
                b: 5 + 0.25,
                g: 4 + i,
                e: [{ s: -30, w: 0.75, l: [{ r: 180 }, { b: 0.5, r: 165, e: EaseType.OUT_QUAD }] }],
            },
            {
                b: 7 + 0.25,
                g: 4 + i,
                e: [
                    {
                        s: -45 - utils.random(0, 5),
                        w: 4,
                        b: 1,
                        l: [{ r: 240 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 11 + 0.25,
                g: 4 + i,
                e: [
                    {
                        s: -45 - utils.random(0, 5),
                        w: 8,
                        b: 1,
                        l: [{ r: 225 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 19 + 0.25,
                g: 4 + i,
                e: [
                    {
                        s: -45 - utils.random(0, 5),
                        w: 8,
                        b: 1,
                        l: [{ r: 240 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 27 + 0.25,
                g: 4 + i,
                e: [
                    {
                        s: -45 - utils.random(0, 5),
                        w: 8,
                        b: 1,
                        l: [{ r: 225 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 35 + 0.25,
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
            { b: 5, g: 10 + i, e: [{ s: 45, w: 0.5, l: [{ r: 270 }, { b: 0.5, r: 285, e: EaseType.OUT_QUAD }] }] },
            {
                b: 7,
                g: 10 + i,
                e: [
                    {
                        s: 75 + utils.random(0, 5),
                        w: 3,
                        b: 1,
                        l: [{ r: 150 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 10,
                g: 10 + i,
                e: [
                    {
                        s: 75 + utils.random(0, 5),
                        w: 6,
                        b: 1,
                        l: [{ r: 165 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 16,
                g: 10 + i,
                e: [
                    {
                        s: 75 + utils.random(0, 5),
                        w: 6,
                        b: 1,
                        l: [{ r: 150 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 22,
                g: 10 + i,
                e: [
                    {
                        s: 75 + utils.random(0, 5),
                        w: 6,
                        b: 1,
                        l: [{ r: 165 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 28,
                g: 10 + i,
                e: [
                    {
                        s: 75 + utils.random(0, 5),
                        w: 6,
                        b: 1,
                        l: [{ r: 150 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                b: 34,
                g: 10 + i,
                e: [
                    {
                        s: 75 + utils.random(0, 5),
                        w: 6,
                        b: 1,
                        l: [{ r: 165 + utils.random(-5, 5), e: EaseType.INOUT_QUAD }],
                    },
                ],
            },
        );

        d.addLightColorEventBoxGroups(
            {
                b: 5,
                g: 8 + i,
                e: [
                    {
                        f: { f: 1, p: 4, t: 0 },
                        e: [{}, { b: 0.5, s: Brightness.ZERO, i: TransitionType.INTERPOLATE }],
                    },
                ],
            },
            {
                b: 5.25,
                g: 8 + i,
                e: [
                    {
                        f: { f: 1, p: 4, t: 1 },
                        e: [{}, { b: 0.5, s: Brightness.ZERO, i: TransitionType.INTERPOLATE }],
                    },
                ],
            },
            {
                b: 5.5,
                g: 8 + i,
                e: [
                    {
                        f: { f: 1, p: 4, t: 2 },
                        e: [{}, { b: 0.5, s: Brightness.ZERO, i: TransitionType.INTERPOLATE }],
                    },
                ],
            },
            {
                b: 5.75,
                g: 8 + i,
                e: [
                    {
                        f: { f: 1, p: 4, t: 3 },
                        e: [{}, { b: 0.5, s: Brightness.ZERO, i: TransitionType.INTERPOLATE }],
                    },
                ],
            },
        );
        d.addLightRotationEventBoxGroups(
            {
                b: 5,
                g: 8 + i,
                e: [
                    {
                        a: Axis.Y,
                        b: 1,
                        s: 45,
                        l: [{ r: 45 }],
                    },
                    {
                        f: { f: 2, p: 1, t: 2 },
                        b: 1,
                        s: 45,
                        l: [{ r: 270 }],
                    },
                    {
                        f: { f: 2, t: 2 },
                        b: 1,
                        s: 45,
                        l: [{ r: 90 }],
                    },
                ],
            },
            {
                b: 6,
                g: 8 + i,
                e: [
                    {
                        a: Axis.Y,
                        b: 1,
                        s: 45,
                        l: [{ r: 45 }],
                    },
                    {
                        f: { f: 2, p: 1, t: 2 },
                        b: 1,
                        s: 45,
                        l: [{ r: 270 }],
                    },
                    {
                        f: { f: 2, t: 2 },
                        b: 1,
                        s: 45,
                        l: [{ r: 90 }],
                    },
                ],
            },
        );

        d.addLightColorEventBoxGroups({
            b: 6,
            g: 6 + i,
            e: [
                {
                    f: { f: 2, t: 2, r: 1 },
                    w: 2.25,
                    e: [
                        { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                        { b: 0.25, c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                        { b: 1.5, c: EventBoxColor.WHITE, i: TransitionType.INTERPOLATE, s: Brightness.ZERO },
                    ],
                },
            ],
        });
        d.addLightRotationEventBoxGroups({
            b: 6,
            g: 6 + i,
            e: [
                {
                    f: { f: 2, t: 2, r: 1 },
                    a: Axis.Y,
                    l: [{ r: 90 }],
                },
                {
                    f: { f: 2, t: 2, r: 1 },
                    s: 15,
                    l: [{ r: 315 }, { b: 1.625, r: 75 }],
                },
            ],
        });

        d.addLightColorEventBoxGroups({
            b: 11.5,
            g: 8 + i,
            e: [
                {
                    f: { r: 1 },
                    w: 3.5,
                    e: [
                        { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                        { b: 0.25, c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                        { b: 1.5, i: TransitionType.INTERPOLATE, s: Brightness.FULL },
                        { b: 2.5, i: TransitionType.INTERPOLATE, s: Brightness.ZERO },
                    ],
                },
            ],
        });
        d.addLightRotationEventBoxGroups({
            b: 11.5,
            g: 8 + i,
            e: [
                { a: Axis.Y, b: 1, s: -30, l: [{ r: 120 }] },
                {
                    f: { r: 1 },
                    s: -45,
                    w: 3.5,
                    l: [
                        { e: EaseType.NONE, r: 270 },
                        { b: 2.5, r: 225 },
                    ],
                },
            ],
        });

        d.addLightColorEventBoxGroups({
            b: 13.5,
            g: 2 + i,
            e: [
                {
                    w: 3.75,
                    e: [
                        { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                        { b: 0.25, c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                        { b: 1.5, i: TransitionType.INTERPOLATE, s: Brightness.FULL },
                        { b: 2.5, i: TransitionType.INTERPOLATE, s: Brightness.ZERO },
                    ],
                },
            ],
        });
        d.addLightRotationEventBoxGroups({
            b: 13.5,
            g: 2 + i,
            e: [
                { a: Axis.Y, l: [{ r: 270 }] },
                {
                    f: { f: 2, t: 2 },
                    w: 3.5,
                    l: [{ r: 270 }, { b: 2.5, r: 225 }],
                },
                {
                    f: { f: 2, p: 1, t: 2 },
                    w: 3.5,
                    l: [{ r: 270 }, { b: 2.5, r: 315 }],
                },
            ],
        });

        d.addLightColorEventBoxGroups({
            b: 22,
            g: 8 + i,
            e: [
                {
                    w: 3.75,
                    e: [
                        { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                        { b: 0.25, c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                        { b: 1.5, i: TransitionType.INTERPOLATE, s: Brightness.FULL },
                        { b: 2.5, i: TransitionType.INTERPOLATE, s: Brightness.ZERO },
                    ],
                },
            ],
        });
        d.addLightRotationEventBoxGroups({
            b: 22,
            g: 8 + i,
            e: [
                { a: Axis.Y, l: [{ r: 90 }] },
                {
                    f: { f: 2, t: 2 },
                    w: 3.5,
                    l: [{ r: 270 }, { b: 2.5, r: 225 }],
                },
                {
                    f: { f: 2, p: 1, t: 2 },
                    w: 3.5,
                    l: [{ r: 270 }, { b: 2.5, r: 315 }],
                },
            ],
        });

        d.addLightColorEventBoxGroups({
            b: 30,
            g: 6 + i,
            e: [
                {
                    w: 3.75,
                    e: [
                        { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                        { b: 0.25, c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                        { b: 1.5, i: TransitionType.INTERPOLATE, s: Brightness.FULL },
                        { b: 2.5, i: TransitionType.INTERPOLATE, s: Brightness.ZERO },
                    ],
                },
            ],
        });
        d.addLightRotationEventBoxGroups({
            b: 30,
            g: 6 + i,
            e: [
                { a: Axis.Y, s: 60, l: [{ r: 270 }, { r: 240 }] },
                {
                    f: { f: 2, t: 2 },
                    w: 3.5,
                    l: [{ r: 270 }, { b: 2.5, r: 225 }],
                },
                {
                    f: { f: 2, p: 1, t: 2 },
                    w: 3.5,
                    l: [{ r: 270 }, { b: 2.5, r: 315 }],
                },
            ],
        });

        d.addLightColorEventBoxGroups(
            {
                b: 34,
                g: 2 + i,
                e: [
                    {
                        w: 3.75,
                        e: [
                            { c: EventBoxColor.WHITE, s: Brightness.DOUBLE },
                            { b: 0.25, c: EventBoxColor.WHITE, s: Brightness.EXTRA },
                            { b: 1.5, i: TransitionType.INTERPOLATE, s: Brightness.FULL },
                            { b: 2.5, i: TransitionType.INTERPOLATE, s: Brightness.ZERO },
                        ],
                    },
                ],
            },
            {
                b: 34,
                g: 8 + i,
                e: [
                    {
                        w: 0.749,
                        e: [{ s: Brightness.EXTRA }, { b: 0.5, i: TransitionType.INTERPOLATE, s: Brightness.ZERO }],
                    },
                ],
            },
            {
                b: 34.75,
                g: 8 + i,
                e: [
                    {
                        w: 0.749,
                        e: [{ s: Brightness.EXTRA }, { b: 0.5, i: TransitionType.INTERPOLATE, s: Brightness.ZERO }],
                    },
                ],
            },
            {
                b: 35.5,
                g: 8 + i,
                e: [
                    {
                        w: 0.749,
                        e: [{ s: Brightness.EXTRA }, { b: 0.5, i: TransitionType.INTERPOLATE, s: Brightness.ZERO }],
                    },
                ],
            },
        );
        d.addLightRotationEventBoxGroups(
            {
                b: 34,
                g: 2 + i,
                e: [
                    { a: Axis.Y, s: -60, l: [{ r: 270 }, { r: 300 }] },
                    {
                        f: { f: 2, t: 2 },
                        w: 3.5,
                        l: [{ r: 270 }, { b: 2.5, r: 225 }],
                    },
                    {
                        f: { f: 2, p: 1, t: 2 },
                        w: 3.5,
                        l: [{ r: 270 }, { b: 2.5, r: 315 }],
                    },
                ],
            },
            {
                b: 34,
                g: 8 + i,
                e: [
                    { a: Axis.Y, l: [{ r: 90 }] },
                    {
                        l: [{ r: 270 }],
                    },
                ],
            },
            {
                b: 36,
                g: 8 + i,
                e: [
                    {
                        f: { f: 2, t: 2 },
                        a: Axis.Y,
                        s: -15,
                        b: 1,
                        l: [{ r: 90, e: EaseType.INOUT_QUAD }],
                    },
                    {
                        f: { f: 2, p: 1, t: 2 },
                        a: Axis.Y,
                        s: 15,
                        b: 1,
                        l: [{ r: 90, e: EaseType.INOUT_QUAD }],
                    },
                    {
                        l: [{ r: 270 }],
                    },
                ],
            },
        );
    }
};
