import {
    Axis,
    DistributionType,
    EaseType,
    EventBoxColor,
    IndexFilterType,
    TransitionType,
    types,
    utils,
    v3,
} from '../../depsLocal.ts';
import { Brightness, objectTimeShift } from './helpers.ts';

export default (d: v3.Difficulty) => {
    for (let i = 0; i < 2; i++) {
        d.addLightColorEventBoxGroups(
            {
                time: 454,
                id: 10 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 1,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.0625, transition: TransitionType.EXTEND },
                            {
                                time: 0.5,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.EXTRA,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454,
                id: 0 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 1,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.0625, transition: TransitionType.EXTEND },
                            {
                                time: 0.5,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.EXTRA,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454,
                id: 4 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 1,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.0625, transition: TransitionType.EXTEND },
                            {
                                time: 0.5,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.EXTRA,
                            },
                        ],
                    },
                ],
            },
            {
                time: 462,
                id: 10 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 1,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.0625, transition: TransitionType.EXTEND },
                            {
                                time: 0.5,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.EXTRA,
                            },
                        ],
                    },
                ],
            },
            {
                time: 462,
                id: 0 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 1,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.0625, transition: TransitionType.EXTEND },
                            {
                                time: 0.5,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.EXTRA,
                            },
                        ],
                    },
                ],
            },
            {
                time: 462,
                id: 4 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 1,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.0625, transition: TransitionType.EXTEND },
                            {
                                time: 0.5,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.EXTRA,
                            },
                        ],
                    },
                ],
            },
            {
                time: 470,
                id: 10 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 1,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.0625, transition: TransitionType.EXTEND },
                            {
                                time: 0.5,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.EXTRA,
                            },
                        ],
                    },
                ],
            },
            {
                time: 470,
                id: 0 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 1,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.0625, transition: TransitionType.EXTEND },
                            {
                                time: 0.5,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.EXTRA,
                            },
                        ],
                    },
                ],
            },
            {
                time: 470,
                id: 4 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 1,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.0625, transition: TransitionType.EXTEND },
                            {
                                time: 0.5,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.EXTRA,
                            },
                        ],
                    },
                ],
            },
            {
                time: 472,
                id: 10 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 1,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.0625, transition: TransitionType.EXTEND },
                            {
                                time: 0.5,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.OFF,
                            },
                        ],
                    },
                ],
            },
            {
                time: 474,
                id: 0 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 1,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.0625, transition: TransitionType.EXTEND },
                            {
                                time: 0.5,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.OFF,
                            },
                        ],
                    },
                ],
            },
            {
                time: 476,
                id: 4 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 1,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.0625, transition: TransitionType.EXTEND },
                            {
                                time: 0.5,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.OFF,
                            },
                        ],
                    },
                ],
            },
        );
        d.addLightRotationEventBoxGroups(
            {
                time: 454,
                id: 0 + i,
                boxes: [
                    {
                        rotationDistribution: -45,
                        affectFirst: 1,
                        events: [{ rotation: 165, easing: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                time: 454 - 6 + 7 + 0.125,
                id: 0 + i,
                boxes: [
                    {
                        rotationDistribution: -60 - utils.pRandom(0, 5),
                        beatDistribution: 3.5,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 270 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 - 6 + 10.5 + 0.125,
                id: 0 + i,
                boxes: [
                    {
                        rotationDistribution: -60 - utils.pRandom(0, 5),
                        beatDistribution: 7,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 255 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 - 6 + 17.5 + 0.125,
                id: 0 + i,
                boxes: [
                    {
                        rotationDistribution: -60 - utils.pRandom(0, 5),
                        beatDistribution: 7,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 270 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 - 6 + 24.5 + 0.125,
                id: 0 + i,
                boxes: [
                    {
                        rotationDistribution: -60 - utils.pRandom(0, 5),
                        beatDistribution: 7,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 255 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454,
                id: 4 + i,
                boxes: [
                    {
                        rotationDistribution: -30,
                        affectFirst: 1,
                        events: [{ rotation: 165, easing: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                time: 454 - 6 + 7 + 0.25,
                id: 4 + i,
                boxes: [
                    {
                        rotationDistribution: -45 - utils.pRandom(0, 5),
                        beatDistribution: 4,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 240 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 - 6 + 11 + 0.25,
                id: 4 + i,
                boxes: [
                    {
                        rotationDistribution: -45 - utils.pRandom(0, 5),
                        beatDistribution: 8,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 225 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 - 6 + 19 + 0.25,
                id: 4 + i,
                boxes: [
                    {
                        rotationDistribution: -45 - utils.pRandom(0, 5),
                        beatDistribution: 8,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 240 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 - 6 + 27 + 0.25,
                id: 4 + i,
                boxes: [
                    {
                        rotationDistribution: -45 - utils.pRandom(0, 5),
                        beatDistribution: 8,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 225 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454,
                id: 10 + i,
                boxes: [
                    {
                        rotationDistribution: 45,
                        affectFirst: 1,
                        events: [{ rotation: 285, easing: EaseType.INOUT_QUAD }],
                    },
                ],
            },
            {
                time: 454 - 6 + 7,
                id: 10 + i,
                boxes: [
                    {
                        rotationDistribution: 75 + utils.pRandom(0, 5),
                        beatDistribution: 3,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 150 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 - 6 + 10,
                id: 10 + i,
                boxes: [
                    {
                        rotationDistribution: 75 + utils.pRandom(0, 5),
                        beatDistribution: 6,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 165 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 - 6 + 16,
                id: 10 + i,
                boxes: [
                    {
                        rotationDistribution: 75 + utils.pRandom(0, 5),
                        beatDistribution: 6,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 150 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 - 6 + 22,
                id: 10 + i,
                boxes: [
                    {
                        rotationDistribution: 75 + utils.pRandom(0, 5),
                        beatDistribution: 6,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 165 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 - 6 + 28,
                id: 10 + i,
                boxes: [
                    {
                        rotationDistribution: 75 + utils.pRandom(0, 5),
                        beatDistribution: 6,
                        affectFirst: 1,
                        events: [
                            {
                                rotation: 150 + utils.pRandom(-5, 5),
                                easing: EaseType.INOUT_QUAD,
                            },
                        ],
                    },
                ],
            },
        );

        d.addLightColorEventBoxGroups(
            {
                time: 470,
                id: 8 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 4.5,
                        events: [
                            {
                                time: 0,
                                color: EventBoxColor.WHITE,
                                brightness: Brightness.DOUBLE,
                            },
                            { time: 0.25, color: EventBoxColor.WHITE },
                            {
                                time: 4,
                                color: EventBoxColor.WHITE,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.OFF,
                            },
                        ],
                    },
                ],
            },
            {
                time: 474,
                id: 2 + i,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 4.5,
                        events: [
                            {
                                time: 0,
                                color: EventBoxColor.WHITE,
                                brightness: Brightness.DOUBLE,
                            },
                            { time: 0.25, color: EventBoxColor.WHITE },
                            {
                                time: 4,
                                color: EventBoxColor.WHITE,
                                transition: TransitionType.INTERPOLATE,
                                brightness: Brightness.OFF,
                            },
                        ],
                    },
                ],
            },
        );
        d.addLightRotationEventBoxGroups(
            {
                time: 454 + 16,
                id: 8 + i,
                boxes: [
                    { axis: Axis.Y, events: [{}] },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p1: 2,
                            p0: 0,
                            reverse: 1,
                        },
                        events: [{ rotation: 135 }],
                    },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p1: 2,
                            p0: 1,
                            reverse: 1,
                        },
                        events: [{ rotation: 135 }],
                    },
                ],
            },
            {
                time: 454 + 19.999,
                id: 8 + i,
                boxes: [
                    { axis: Axis.Y, events: [{}] },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p1: 2,
                            p0: 0,
                            reverse: 1,
                        },
                        affectFirst: 1,
                        rotationDistribution: -45,
                        events: [{ rotation: 135, easing: EaseType.OUT_QUAD }],
                    },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p1: 2,
                            p0: 1,
                            reverse: 1,
                        },
                        affectFirst: 1,
                        rotationDistribution: 45,
                        events: [{ rotation: 135, easing: EaseType.OUT_QUAD }],
                    },
                ],
            },
            {
                time: 454 + 20,
                id: 2 + i,
                boxes: [
                    { axis: Axis.Y, events: [{}] },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p1: 2,
                            p0: 0,
                            reverse: 1,
                        },
                        events: [{ rotation: 270 }],
                    },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p1: 2,
                            p0: 1,
                            reverse: 1,
                        },
                        events: [{ rotation: 270 }],
                    },
                ],
            },
            {
                time: 454 + 23.999,
                id: 2 + i,
                boxes: [
                    { axis: Axis.Y, events: [{}] },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p1: 2,
                            p0: 0,
                            reverse: 1,
                        },
                        affectFirst: 1,
                        rotationDistribution: -15,
                        events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
                    },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p1: 2,
                            p0: 1,
                            reverse: 1,
                        },
                        affectFirst: 1,
                        rotationDistribution: 15,
                        events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
                    },
                ],
            },
        );
    }

    const fltr = {
        type: IndexFilterType.DIVISION,
        p0: 2,
        p1: 1,
        reverse: 1,
    } as types.wrapper.IWrapIndexFilter;
    const fltrR = {
        type: IndexFilterType.DIVISION,
        p0: 2,
        p1: 1,
        reverse: 0,
    } as types.wrapper.IWrapIndexFilter;

    const e: Partial<types.wrapper.IWrapLightColorBase>[] = [
        { color: EventBoxColor.WHITE, brightness: Brightness.DOUBLE },
        {
            time: 0.25,
            color: EventBoxColor.WHITE,
            brightness: Brightness.ON,
            transition: TransitionType.INTERPOLATE,
        },
        { time: 0.375, transition: TransitionType.EXTEND },
        {
            color: EventBoxColor.WHITE,
            time: 0.625,
            brightness: Brightness.HALF,
            transition: TransitionType.INTERPOLATE,
        },
    ];

    const en: Partial<types.wrapper.IWrapLightColorBase>[] = [
        { color: EventBoxColor.WHITE, brightness: Brightness.DOUBLE },
        {
            time: 0.125,
            color: EventBoxColor.WHITE,
            brightness: Brightness.ON,
            transition: TransitionType.INTERPOLATE,
        },
        { time: 0.25, transition: TransitionType.EXTEND },
        {
            color: EventBoxColor.WHITE,
            time: 0.5,
            brightness: Brightness.OFF,
            transition: TransitionType.INTERPOLATE,
        },
    ];

    for (let id = 14; id < 16; id++) {
        d.addLightRotationEventBoxGroups(
            {
                time: 454,
                id,
                boxes: [
                    {
                        events: [{ rotation: 120 }],
                    },
                    {
                        filter: fltr,
                        axis: Axis.Y,
                        affectFirst: 1,
                        rotationDistribution: -60,
                        events: [{ rotation: 225 }],
                    },
                    {
                        filter: fltrR,
                        axis: Axis.Y,
                        affectFirst: 1,
                        rotationDistribution: 60,
                        events: [{ rotation: 135 }],
                    },
                ],
            },
            {
                time: 454 + 23.999,
                id,
                boxes: [
                    {
                        events: [{ rotation: 150 }],
                    },
                    {
                        filter: fltr,
                        axis: Axis.Y,
                        affectFirst: 1,
                        rotationDistribution: -75,
                        events: [{ rotation: 210 }],
                    },
                    {
                        filter: fltrR,
                        axis: Axis.Y,
                        affectFirst: 1,
                        rotationDistribution: 75,
                        events: [{ rotation: 150 }],
                    },
                ],
            },
        );
        const tm = [0, 1.5, 3, 4.5, 6, 7];
        for (const t of tm) {
            for (let i = 0; i < 2; i++) {
                d.addLightColorEventBoxGroups({
                    time: 454 + t + i * 8,
                    id,
                    boxes: [
                        {
                            filter: fltrR,
                            beatDistribution: 0.875,
                            events: en,
                        },
                        {
                            filter: fltr,
                            beatDistribution: 0.875,
                            events: en,
                        },
                    ],
                });
            }
        }
        for (let time = 454 + 16; time < 454 + 24; time++) {
            d.addLightColorEventBoxGroups({
                time,
                id,
                boxes: [
                    {
                        filter: fltrR,
                        beatDistribution: 0.875,
                        events: en,
                    },
                    {
                        filter: fltr,
                        beatDistribution: 0.875,
                        events: en,
                    },
                ],
            });
        }
    }

    for (let time = 470, id = 0; time < 478; time += 0.5, id = ++id % 2) {
        switch (id) {
            case 0:
                d.addLightColorEventBoxGroups(
                    {
                        time,
                        id: 12,
                        boxes: [
                            {
                                filter: {
                                    type: IndexFilterType.DIVISION,
                                    p0: 6,
                                    p1: 0,
                                },
                                events: e,
                            },
                            {
                                filter: {
                                    type: IndexFilterType.DIVISION,
                                    p0: 6,
                                    p1: 0,
                                    reverse: 1,
                                },
                                events: e,
                            },
                        ],
                    },
                    {
                        time,
                        id: 13,
                        boxes: [
                            {
                                filter: {
                                    type: IndexFilterType.STEP_AND_OFFSET,
                                    p0: 3,
                                    p1: 999,
                                },
                                events: e,
                            },
                            {
                                filter: {
                                    type: IndexFilterType.STEP_AND_OFFSET,
                                    p0: 4,
                                    p1: 999,
                                },
                                events: e,
                            },
                            {
                                filter: {
                                    type: IndexFilterType.STEP_AND_OFFSET,
                                    p0: 3,
                                    p1: 999,
                                    reverse: 1,
                                },
                                events: e,
                            },
                            {
                                filter: {
                                    type: IndexFilterType.STEP_AND_OFFSET,
                                    p0: 4,
                                    p1: 999,
                                    reverse: 1,
                                },
                                events: e,
                            },
                        ],
                    },
                );
                break;
            case 1:
                d.addLightColorEventBoxGroups(
                    {
                        time,
                        id: 12,
                        boxes: [
                            {
                                filter: {
                                    type: IndexFilterType.DIVISION,
                                    p0: 6,
                                    p1: 1,
                                },
                                events: e,
                            },
                            {
                                filter: {
                                    type: IndexFilterType.DIVISION,
                                    p0: 6,
                                    p1: 1,
                                    reverse: 1,
                                },
                                events: e,
                            },
                        ],
                    },
                    {
                        time,
                        id: 13,
                        boxes: [
                            {
                                filter: {
                                    type: IndexFilterType.STEP_AND_OFFSET,
                                    p0: 0,
                                    p1: 999,
                                },
                                events: objectTimeShift(e, 3 / 16),
                            },
                            {
                                filter: {
                                    type: IndexFilterType.STEP_AND_OFFSET,
                                    p0: 1,
                                    p1: 999,
                                },
                                events: objectTimeShift(e, 2 / 16),
                            },
                            {
                                filter: {
                                    type: IndexFilterType.STEP_AND_OFFSET,
                                    p0: 2,
                                    p1: 999,
                                },
                                events: objectTimeShift(e, 1 / 16),
                            },
                            {
                                filter: {
                                    type: IndexFilterType.STEP_AND_OFFSET,
                                    p0: 5,
                                    p1: 999,
                                },
                                events: e,
                            },
                            {
                                filter: {
                                    type: IndexFilterType.STEP_AND_OFFSET,
                                    p0: 0,
                                    p1: 999,
                                    reverse: 1,
                                },
                                events: objectTimeShift(e, 3 / 16),
                            },
                            {
                                filter: {
                                    type: IndexFilterType.STEP_AND_OFFSET,
                                    p0: 1,
                                    p1: 999,
                                    reverse: 1,
                                },
                                events: objectTimeShift(e, 2 / 16),
                            },
                            {
                                filter: {
                                    type: IndexFilterType.STEP_AND_OFFSET,
                                    p0: 2,
                                    p1: 999,
                                    reverse: 1,
                                },
                                events: objectTimeShift(e, 1 / 16),
                            },
                            {
                                filter: {
                                    type: IndexFilterType.STEP_AND_OFFSET,
                                    p0: 5,
                                    p1: 999,
                                    reverse: 1,
                                },
                                events: e,
                            },
                        ],
                    },
                );
                break;
        }
    }
    d.addLightRotationEventBoxGroups(
        {
            time: 454 - 0.001,
            id: 12,
            boxes: [
                { events: [{ rotation: 90, easing: EaseType.NONE }] },
                {
                    axis: Axis.Y,
                    events: [{ easing: EaseType.NONE }],
                },
            ],
        },
        {
            time: 454 - 0.001,
            id: 13,
            boxes: [
                { events: [{ rotation: 270, easing: EaseType.NONE }] },
                {
                    axis: Axis.Y,
                    events: [{ easing: EaseType.NONE }],
                },
            ],
        },
        {
            time: 454,
            id: 12,
            boxes: [
                {
                    filter: { type: IndexFilterType.DIVISION, p0: 6, p1: 0 },
                    axis: Axis.Y,
                    rotationDistribution: -15,
                    affectFirst: 1,
                    events: [{ rotation: 120 }],
                },
                {
                    filter: {
                        type: IndexFilterType.DIVISION,
                        p0: 6,
                        p1: 0,
                        reverse: 1,
                    },
                    axis: Axis.Y,
                    rotationDistribution: 15,
                    affectFirst: 1,
                    events: [{ rotation: 240 }],
                },
                {
                    filter: { type: IndexFilterType.DIVISION, p0: 6, p1: 1 },
                    axis: Axis.Y,
                    rotationDistribution: 15,
                    affectFirst: 1,
                    events: [{ rotation: 45 }],
                },
                {
                    filter: {
                        type: IndexFilterType.DIVISION,
                        p0: 6,
                        p1: 1,
                        reverse: 1,
                    },
                    axis: Axis.Y,
                    rotationDistribution: -15,
                    affectFirst: 1,
                    events: [{ rotation: 315 }],
                },
            ],
        },
        {
            time: 454,
            id: 13,
            boxes: [
                {
                    filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 0, p1: 999 },
                    axis: Axis.Y,
                    events: [{ rotation: 330 }],
                },
                {
                    filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 999 },
                    axis: Axis.Y,
                    events: [{ rotation: 300 }],
                },
                {
                    filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 2, p1: 999 },
                    axis: Axis.Y,
                    events: [{ rotation: 15 }],
                },
                {
                    filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 3, p1: 999 },
                    axis: Axis.Y,
                    events: [{ rotation: 75 }],
                },
                {
                    filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 4, p1: 999 },
                    axis: Axis.Y,
                    events: [{ rotation: 285 }],
                },
                {
                    filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 5, p1: 999 },
                    axis: Axis.Y,
                    events: [{ rotation: 345 }],
                },
                {
                    filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0,
                        p1: 999,
                        reverse: 1,
                    },
                    axis: Axis.Y,
                    events: [{ rotation: 30 }],
                },
                {
                    filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 999,
                        reverse: 1,
                    },
                    axis: Axis.Y,
                    events: [{ rotation: 60 }],
                },
                {
                    filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 2,
                        p1: 999,
                        reverse: 1,
                    },
                    axis: Axis.Y,
                    events: [{ rotation: 345 }],
                },
                {
                    filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 3,
                        p1: 999,
                        reverse: 1,
                    },
                    axis: Axis.Y,
                    events: [{ rotation: 285 }],
                },
                {
                    filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 4,
                        p1: 999,
                        reverse: 1,
                    },
                    axis: Axis.Y,
                    events: [{ rotation: 75 }],
                },
                {
                    filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 5,
                        p1: 999,
                        reverse: 1,
                    },
                    axis: Axis.Y,
                    events: [{ rotation: 15 }],
                },
            ],
        },
        {
            time: 454 + 24,
            id: 12,
            boxes: [
                { events: [{}] },
                {
                    axis: Axis.Y,
                    events: [{ easing: EaseType.NONE }],
                },
            ],
        },
        {
            time: 454 + 24,
            id: 13,
            boxes: [
                { events: [{}] },
                {
                    axis: Axis.Y,
                    events: [{ easing: EaseType.NONE }],
                },
            ],
        },
    );
    d.addLightColorEventBoxGroups(
        {
            time: 454 + 24,
            id: 12,
            boxes: [
                {
                    events: [
                        {
                            brightness: 0,
                            transition: TransitionType.INTERPOLATE,
                            color: EventBoxColor.BLUE,
                        },
                    ],
                },
            ],
        },
        {
            time: 454 + 24,
            id: 13,
            boxes: [
                {
                    events: [
                        {
                            brightness: 0,
                            transition: TransitionType.INTERPOLATE,
                            color: EventBoxColor.BLUE,
                        },
                    ],
                },
            ],
        },
    );

    for (let id = 0; id < 12; id++) {
        d.addLightRotationEventBoxGroups(
            {
                time: 454 + 24,
                id,
                boxes: [
                    {
                        rotationDistribution: -15,
                        rotationDistributionType: DistributionType.STEP,
                        affectFirst: 1,
                        events: [{ rotation: 180, easing: EaseType.NONE }],
                    },
                    {
                        axis: Axis.Y,
                        events: [{ easing: EaseType.NONE }],
                    },
                ],
            },
            {
                time: 454 + 28,
                id,
                boxes: [
                    {
                        rotationDistribution: 45,
                        rotationDistributionType: DistributionType.STEP,
                        affectFirst: 1,
                        events: [{ rotation: 360 }],
                    },
                    {
                        axis: Axis.Y,
                        events: [{}],
                    },
                ],
            },
        );
        d.addLightColorEventBoxGroups({
            time: 454 + 28,
            id,
            boxes: [
                {
                    beatDistribution: 1.25,
                    events: [
                        { color: EventBoxColor.WHITE, brightness: Brightness.DOUBLE },
                        { time: 0.125, brightness: Brightness.OFF },
                        {
                            time: 0.25,
                            brightness: Brightness.ON,
                            transition: TransitionType.INTERPOLATE,
                        },
                        {
                            time: 0.75,
                            brightness: Brightness.OFF,
                            transition: TransitionType.INTERPOLATE,
                            color: EventBoxColor.BLUE,
                        },
                    ],
                },
            ],
        });
    }
    for (let i = 0; i < 4; i++) {
        d.addLightColorEventBoxGroups(
            {
                time: 454 + 24 + i * 0.5,
                id: 11 - i,
                boxes: [
                    {
                        filter: { type: 2, p1: 2 },
                        beatDistribution: 0.499,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: Brightness.QUAD },
                            {
                                time: 0.0625,
                                brightness: Brightness.OFF,
                                color: EventBoxColor.BLUE,
                            },
                            {
                                time: 0.1875,
                                transition: TransitionType.INTERPOLATE,
                                frequency: 12,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 + 24.25 + i * 0.5,
                id: 0 + i,
                boxes: [
                    {
                        filter: { type: 2, p1: 2 },
                        beatDistribution: 0.499,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: Brightness.QUAD },
                            {
                                time: 0.0625,
                                brightness: Brightness.OFF,
                                color: EventBoxColor.BLUE,
                            },
                            {
                                time: 0.1875,
                                transition: TransitionType.INTERPOLATE,
                                frequency: 12,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 + 26 + i * 0.5,
                id: 11 - i,
                boxes: [
                    {
                        filter: { type: 2, p0: 1, p1: 2 },
                        beatDistribution: 0.499,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: Brightness.QUAD },
                            {
                                time: 0.0625,
                                brightness: Brightness.OFF,
                                color: EventBoxColor.BLUE,
                            },
                            {
                                time: 0.1875,
                                transition: TransitionType.INTERPOLATE,
                                frequency: 12,
                            },
                        ],
                    },
                ],
            },
            {
                time: 454 + 26.25 + i * 0.5,
                id: 0 + i,
                boxes: [
                    {
                        filter: { type: 2, p0: 1, p1: 2 },
                        beatDistribution: i === 3 ? 0.249 : 0.499,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: Brightness.QUAD },
                            {
                                time: 0.0625,
                                brightness: Brightness.OFF,
                                color: EventBoxColor.BLUE,
                            },
                            {
                                time: 0.1875,
                                transition: TransitionType.INTERPOLATE,
                                frequency: 12,
                            },
                        ],
                    },
                ],
            },
        );
    }
};
