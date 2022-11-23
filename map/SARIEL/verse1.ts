import { Axis, EaseType, EventBoxColor, IndexFilterType, TransitionType, v3 } from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

export default (d: v3.Difficulty) => {
    const repeatTiming = [102, 262];
    let ff = false;
    for (const rt of repeatTiming) {
        d.addColorBoostEvents({ time: rt, toggle: false }, { time: rt + 28, toggle: true });
        for (let time = rt, flipFlop = ff; time < rt + 32; time += 8, flipFlop = !flipFlop) {
            for (let p = 0; p < 4; p++) {
                for (let id = 8; id < 12; id += 2) {
                    d.addLightColorEventBoxGroups(
                        {
                            time: time + p / 2,
                            id: id + (flipFlop ? 1 : 0),
                            boxes: [
                                {
                                    filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: p * 2, p1: 999, reverse: 1 },
                                    events: [
                                        { color: EventBoxColor.WHITE, brightness: Brightness.ZERO },
                                        {
                                            time: 0.25,
                                            color: EventBoxColor.WHITE,
                                            brightness: Brightness.EXTRA,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.75,
                                            color: EventBoxColor.BLUE,
                                            brightness: Brightness.FULL,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        { time: 1.875, transition: TransitionType.EXTEND },
                                        {
                                            time: 2,
                                            color: EventBoxColor.WHITE,
                                            transition: TransitionType.INTERPOLATE,
                                            brightness: Brightness.EXTRA,
                                        },
                                        {
                                            time: 2.25,
                                            color: EventBoxColor.WHITE,
                                            transition: TransitionType.INTERPOLATE,
                                            brightness: Brightness.FULL,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            time: time + 2 + p / 2,
                            id: id + (flipFlop ? 1 : 0),
                            boxes: [
                                {
                                    filter: {
                                        type: IndexFilterType.STEP_AND_OFFSET,
                                        p0: 1 + p * 2,
                                        p1: 999,
                                        reverse: 1,
                                    },
                                    events: [
                                        { color: EventBoxColor.WHITE, brightness: Brightness.ZERO },
                                        {
                                            time: 0.25,
                                            color: EventBoxColor.WHITE,
                                            brightness: Brightness.DOUBLE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.75,
                                            color: EventBoxColor.WHITE,
                                            brightness: Brightness.FULL,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            time: time + 4 + p,
                            id: id + (flipFlop ? 1 : 0),
                            boxes: [
                                {
                                    filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1 + p * 2, p1: 999 },
                                    events: [
                                        { transition: TransitionType.EXTEND },
                                        {
                                            time: 0.25,
                                            color: time >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                            brightness: time >= rt + 24 ? 2.5 : 1.5,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.75,
                                            color: time >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                            brightness: Brightness.ZERO,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            time: time + 4.5 + p,
                            id: id + (flipFlop ? 1 : 0),
                            boxes: [
                                {
                                    filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: p * 2, p1: 999 },
                                    events: [
                                        { transition: TransitionType.EXTEND },
                                        {
                                            time: 0.25,
                                            color: time >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                            brightness: time >= rt + 24 ? 2.5 : 1.5,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.75,
                                            color: time >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                            brightness: Brightness.ZERO,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                            ],
                        }
                    );
                    d.addLightRotationEventBoxGroups(
                        {
                            time: time + p / 2,
                            id: id + (flipFlop ? 1 : 0),
                            boxes: [
                                {
                                    filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: p * 2, p1: 999, reverse: 1 },
                                    events: [
                                        { rotation: 255 },
                                        { time: 1, rotation: 220, easing: EaseType.OUT_QUAD },
                                        { time: 1.75, rotation: 222.5, easing: EaseType.INOUT_QUAD },
                                        { time: 2.498, rotation: 165, easing: EaseType.IN_QUAD },
                                        { time: 6.999 - p * 1.5, rotation: 120 + p * 15, easing: EaseType.OUT_QUAD },
                                    ],
                                },
                            ],
                        },
                        {
                            time: time + 2 + p / 2,
                            id: id + (flipFlop ? 1 : 0),
                            boxes: [
                                {
                                    filter: {
                                        type: IndexFilterType.STEP_AND_OFFSET,
                                        p0: 1 + p * 2,
                                        p1: 999,
                                        reverse: 1,
                                    },
                                    events: [
                                        { rotation: 135 },
                                        { time: 0.499, rotation: 225, easing: EaseType.IN_QUAD },
                                        { time: 5.499 - p * 1.5, rotation: 260 - p * 10, easing: EaseType.OUT_QUAD },
                                    ],
                                },
                            ],
                        },
                        {
                            time: time + 4 + p,
                            id: id + (flipFlop ? 1 : 0),
                            boxes: [
                                {
                                    filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1 + p * 2, p1: 999 },
                                    events: [{ previous: 1 }, { time: 0.75, rotation: 45, easing: EaseType.IN_QUAD }],
                                },
                            ],
                        },
                        {
                            time: time + 4.5 + p,
                            id: id + (flipFlop ? 1 : 0),
                            boxes: [
                                {
                                    filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: p * 2, p1: 999 },
                                    events: [{ previous: 1 }, { time: 0.75, rotation: 315, easing: EaseType.IN_QUAD }],
                                },
                            ],
                        }
                    );
                    if (time === rt + 24) {
                        d.addLightColorEventBoxGroups(
                            {
                                time: time + 2 + p / 2,
                                id: id + (flipFlop ? 0 : 1),
                                boxes: [
                                    {
                                        filter: { type: IndexFilterType.DIVISION, p1: p, p0: 4, reverse: 1 },
                                        events: [
                                            { color: EventBoxColor.WHITE, brightness: Brightness.ZERO },
                                            {
                                                time: 0.25,
                                                color: EventBoxColor.WHITE,
                                                brightness: Brightness.DOUBLE,
                                                transition: TransitionType.INTERPOLATE,
                                            },
                                            {
                                                time: 0.75,
                                                color: EventBoxColor.WHITE,
                                                brightness: Brightness.FULL,
                                                transition: TransitionType.INTERPOLATE,
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                time: time + 4 + p,
                                id: id + (flipFlop ? 0 : 1),
                                boxes: [
                                    {
                                        filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1 + p * 2, p1: 999 },
                                        events: [
                                            { transition: TransitionType.EXTEND },
                                            {
                                                time: 0.25,
                                                color: time >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                                brightness: time >= rt + 24 ? 2.5 : 1.5,
                                                transition: TransitionType.INTERPOLATE,
                                            },
                                            {
                                                time: 0.75,
                                                color: time >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                                brightness: Brightness.ZERO,
                                                transition: TransitionType.INTERPOLATE,
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                time: time + 4.5 + p,
                                id: id + (flipFlop ? 0 : 1),
                                boxes: [
                                    {
                                        filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: p * 2, p1: 999 },
                                        events: [
                                            { transition: TransitionType.EXTEND },
                                            {
                                                time: 0.25,
                                                color: time >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                                brightness: time >= rt + 24 ? 2.5 : 1.5,
                                                transition: TransitionType.INTERPOLATE,
                                            },
                                            {
                                                time: 0.75,
                                                color: time >= rt + 24 ? EventBoxColor.RED : EventBoxColor.WHITE,
                                                brightness: Brightness.ZERO,
                                                transition: TransitionType.INTERPOLATE,
                                            },
                                        ],
                                    },
                                ],
                            }
                        );
                        d.addLightRotationEventBoxGroups(
                            {
                                time: time + p / 2,
                                id: id + (flipFlop ? 0 : 1),
                                boxes: [
                                    {
                                        filter: {
                                            type: IndexFilterType.STEP_AND_OFFSET,
                                            p0: p * 2,
                                            p1: 999,
                                            reverse: 1,
                                        },
                                        events: [
                                            { rotation: 255 },
                                            { time: 1, rotation: 220, easing: EaseType.OUT_QUAD },
                                            { time: 1.75, rotation: 222.5, easing: EaseType.INOUT_QUAD },
                                            { time: 2.498, rotation: 165, easing: EaseType.IN_QUAD },
                                            {
                                                time: 6.999 - p * 1.5,
                                                rotation: 120 + p * 15,
                                                easing: EaseType.OUT_QUAD,
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                time: time + 2 + p / 2,
                                id: id + (flipFlop ? 0 : 1),
                                boxes: [
                                    {
                                        filter: {
                                            type: IndexFilterType.STEP_AND_OFFSET,
                                            p0: 1 + p * 2,
                                            p1: 999,
                                            reverse: 1,
                                        },
                                        events: [
                                            { rotation: 135 },
                                            { time: 0.499, rotation: 225, easing: EaseType.IN_QUAD },
                                            {
                                                time: 5.499 - p * 1.5,
                                                rotation: 260 - p * 10,
                                                easing: EaseType.OUT_QUAD,
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                time: time + 4 + p,
                                id: id + (flipFlop ? 0 : 1),
                                boxes: [
                                    {
                                        filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1 + p * 2, p1: 999 },
                                        events: [
                                            { previous: 1 },
                                            { time: 0.75, rotation: 45, easing: EaseType.IN_QUAD },
                                        ],
                                    },
                                ],
                            },
                            {
                                time: time + 4.5 + p,
                                id: id + (flipFlop ? 0 : 1),
                                boxes: [
                                    {
                                        filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: p * 2, p1: 999 },
                                        events: [
                                            { previous: 1 },
                                            { time: 0.75, rotation: 315, easing: EaseType.IN_QUAD },
                                        ],
                                    },
                                ],
                            }
                        );
                    }
                }
            }
            for (let id = 4; id < 8; id++) {
                d.addLightColorEventBoxGroups(
                    {
                        time: time + 1,
                        id,
                        boxes: [
                            {
                                filter: { reverse: 1 },
                                beatDistribution: 0.999,
                                events: [
                                    { color: EventBoxColor.WHITE, brightness: 2 },
                                    {
                                        time: 0.125,
                                        color: EventBoxColor.BLUE,
                                    },
                                    {
                                        time: 0.5,
                                        brightness: Brightness.ZERO,
                                        color: EventBoxColor.BLUE,
                                        transition: TransitionType.INTERPOLATE,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        time: time + 3,
                        id,
                        boxes: [
                            {
                                filter: { reverse: 1 },
                                beatDistribution: 0.999,
                                events: [
                                    { color: EventBoxColor.WHITE, brightness: 2 },
                                    {
                                        time: 0.125,
                                        color: EventBoxColor.BLUE,
                                    },
                                    {
                                        time: 0.5,
                                        brightness: Brightness.ZERO,
                                        color: EventBoxColor.BLUE,
                                        transition: TransitionType.INTERPOLATE,
                                    },
                                ],
                            },
                        ],
                    }
                );
                d.addLightRotationEventBoxGroups(
                    {
                        time: time + 1,
                        id,
                        boxes: [
                            {
                                filter: { type: 2, p1: 2 },
                                events: [{ rotation: 90 }, { time: 0.999, previous: 1 }],
                            },
                            {
                                filter: { type: 2, p0: 1, p1: 2 },
                                affectFirst: 1,
                                rotationDistribution: -15,
                                events: [{ rotation: -30 }, { time: 0.999, previous: 1 }],
                            },
                        ],
                    },
                    {
                        time: time + 3,
                        id,
                        boxes: [
                            {
                                filter: { type: 2, p1: 2 },
                                affectFirst: 1,
                                rotationDistribution: -15,
                                events: [{ rotation: 225 }, { time: 0.999, previous: 1 }],
                            },
                            {
                                filter: { type: 2, p0: 1, p1: 2 },
                                events: [{ rotation: -15 }, { time: 0.999, previous: 1 }],
                            },
                            {
                                axis: Axis.Y,
                                events: [{}],
                            },
                        ],
                    }
                );
            }
            if (time < rt + 24) {
                for (let id = 4; id < 8; id++) {
                    d.addLightColorEventBoxGroups(
                        {
                            time: time + 4,
                            id,
                            boxes: [
                                {
                                    beatDistribution: 0.999,
                                    events: [
                                        { color: EventBoxColor.WHITE, brightness: 2 },
                                        {
                                            time: 0.125,
                                            color: EventBoxColor.RED,
                                        },
                                        {
                                            time: 0.5,
                                            brightness: Brightness.ZERO,
                                            color: EventBoxColor.RED,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            time: time + 5,
                            id,
                            boxes: [
                                {
                                    filter: { type: 2, p0: 0, p1: 999 },
                                    events: [
                                        { color: EventBoxColor.WHITE, brightness: Brightness.HALF },
                                        {
                                            time: 0.25,
                                            brightness: Brightness.DOUBLE,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.5,
                                            brightness: Brightness.FULL,
                                            color: EventBoxColor.WHITE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.75,
                                            brightness: Brightness.HALF,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.875,
                                            brightness: Brightness.ZERO,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                                {
                                    filter: { type: 2, p0: 1, p1: 999 },
                                    events: [
                                        {
                                            time: 0.125,
                                            color: EventBoxColor.WHITE,
                                            brightness: Brightness.HALF,
                                        },
                                        {
                                            time: 0.375,
                                            brightness: Brightness.DOUBLE,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.625,
                                            brightness: Brightness.FULL,
                                            color: EventBoxColor.WHITE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.875,
                                            brightness: Brightness.HALF,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.999,
                                            brightness: Brightness.ZERO,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            time: time + 6,
                            id,
                            boxes: [
                                {
                                    filter: { type: 2, p0: 3, p1: 999 },
                                    events: [
                                        { color: EventBoxColor.WHITE, brightness: Brightness.HALF },
                                        {
                                            time: 0.25,
                                            brightness: Brightness.DOUBLE,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.5,
                                            brightness: Brightness.FULL,
                                            color: EventBoxColor.WHITE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.75,
                                            brightness: Brightness.HALF,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.875,
                                            brightness: Brightness.ZERO,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                                {
                                    filter: { type: 2, p0: 4, p1: 999 },
                                    events: [
                                        {
                                            time: 0.125,
                                            color: EventBoxColor.WHITE,
                                            brightness: Brightness.HALF,
                                        },
                                        {
                                            time: 0.375,
                                            brightness: Brightness.DOUBLE,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.625,
                                            brightness: Brightness.FULL,
                                            color: EventBoxColor.WHITE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.875,
                                            brightness: Brightness.HALF,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.999,
                                            brightness: Brightness.ZERO,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            time: time + 7,
                            id,
                            boxes: [
                                {
                                    filter: { type: 2, p0: 6, p1: 999 },
                                    events: [
                                        { color: EventBoxColor.WHITE, brightness: Brightness.HALF },
                                        {
                                            time: 0.25,
                                            brightness: Brightness.DOUBLE,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.5,
                                            brightness: Brightness.FULL,
                                            color: EventBoxColor.WHITE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.75,
                                            brightness: Brightness.HALF,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.875,
                                            brightness: Brightness.ZERO,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                                {
                                    filter: { type: 2, p0: 7, p1: 999 },
                                    events: [
                                        {
                                            time: 0.125,
                                            color: EventBoxColor.WHITE,
                                            brightness: Brightness.HALF,
                                        },
                                        {
                                            time: 0.375,
                                            brightness: Brightness.DOUBLE,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.625,
                                            brightness: Brightness.FULL,
                                            color: EventBoxColor.WHITE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.875,
                                            brightness: Brightness.HALF,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                        {
                                            time: 0.999,
                                            brightness: Brightness.ZERO,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                            ],
                        }
                    );
                    d.addLightRotationEventBoxGroups(
                        {
                            time: time + 4,
                            id,
                            boxes: [
                                {
                                    filter: { type: 2, p1: 2 },
                                    events: [{ rotation: 90 }, { time: 0.999, previous: 1 }],
                                },
                                {
                                    filter: { type: 2, p0: 1, p1: 2 },
                                    events: [{ rotation: 255 }, { time: 0.999, previous: 1 }],
                                },
                            ],
                        },
                        {
                            time: time + 5,
                            id,
                            boxes: [
                                {
                                    events: [
                                        {
                                            rotation: flipFlop
                                                ? id === 4 || id === 7
                                                    ? 55
                                                    : 125
                                                : id === 4 || id === 7
                                                ? 125
                                                : 55,
                                        },
                                        { time: 0.999, previous: 1 },
                                    ],
                                },
                            ],
                        },
                        {
                            time: time + 6,
                            id,
                            boxes: [
                                {
                                    events: [
                                        {
                                            rotation: flipFlop
                                                ? id === 4 || id === 7
                                                    ? 50
                                                    : 130
                                                : id === 4 || id === 7
                                                ? 130
                                                : 50,
                                        },
                                        { time: 0.999, previous: 1 },
                                    ],
                                },
                            ],
                        },
                        {
                            time: time + 7,
                            id,
                            boxes: [
                                {
                                    events: [
                                        {
                                            rotation: flipFlop
                                                ? id === 4 || id === 7
                                                    ? 45
                                                    : 135
                                                : id === 4 || id === 7
                                                ? 135
                                                : 45,
                                        },
                                        { time: 0.999, previous: 1 },
                                    ],
                                },
                            ],
                        }
                    );
                }
            }
            if (time > rt) {
                for (let id = 4; id < 6; id++) {
                    d.addLightColorEventBoxGroups(
                        {
                            time: time,
                            id,
                            boxes: [
                                {
                                    filter: { type: 2, p0: 1, p1: 999 },
                                    events: [
                                        { color: EventBoxColor.BLUE, brightness: Brightness.FLASH },
                                        {
                                            time: 0.1875,
                                            brightness: Brightness.ZERO,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                                {
                                    filter: { type: 2, p0: 2, p1: 999 },
                                    events: [
                                        {
                                            time: 0.0625,
                                            color: EventBoxColor.BLUE,
                                            brightness: Brightness.FLASH,
                                        },
                                        {
                                            time: 0.25,
                                            brightness: Brightness.ZERO,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            time: time + 0.5,
                            id,
                            boxes: [
                                {
                                    filter: { type: 2, p0: 5, p1: 999 },
                                    events: [
                                        { color: EventBoxColor.BLUE, brightness: Brightness.FLASH },
                                        {
                                            time: 0.1875,
                                            brightness: Brightness.ZERO,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                                {
                                    filter: { type: 2, p0: 6, p1: 999 },
                                    events: [
                                        {
                                            time: 0.0625,
                                            color: EventBoxColor.BLUE,
                                            brightness: Brightness.FLASH,
                                        },
                                        {
                                            time: 0.25,
                                            brightness: Brightness.ZERO,
                                            color: EventBoxColor.BLUE,
                                            transition: TransitionType.INTERPOLATE,
                                        },
                                    ],
                                },
                            ],
                        }
                    );
                    d.addLightRotationEventBoxGroups({
                        time: time,
                        id,
                        boxes: [
                            {
                                events: [{ rotation: 210 }, { time: 0.999, previous: 1 }],
                            },
                        ],
                    });
                }
            }
            for (let id = 4; id < 6; id++) {
                d.addLightColorEventBoxGroups({
                    time: time + 2,
                    id,
                    boxes: [
                        {
                            filter: { type: 2, p0: 0, p1: 2 },
                            beatDistribution: 0.749,
                            events: [
                                { color: EventBoxColor.BLUE, brightness: Brightness.FLASH },
                                {
                                    time: 0.375,
                                    brightness: Brightness.ZERO,
                                    color: EventBoxColor.BLUE,
                                    transition: TransitionType.INTERPOLATE,
                                },
                            ],
                        },
                    ],
                });
                d.addLightRotationEventBoxGroups({
                    time: time + 2,
                    id,
                    boxes: [
                        {
                            rotationDistribution: -45,
                            affectFirst: 1,
                            events: [{ rotation: 240 }, { time: 0.999, previous: 1 }],
                        },
                        {
                            axis: Axis.Y,
                            rotationDistribution: 90,
                            affectFirst: 1,
                            events: [
                                { rotation: -90, easing: EaseType.NONE },
                                { time: 0.999, previous: 1 },
                            ],
                        },
                    ],
                });
            }
        }
        for (let id = 0; id < 4; id++) {
            d.addLightColorEventBoxGroups({
                time: rt,
                id,
                boxes: [
                    {
                        beatDistribution: 0.999,
                        events: [
                            { color: EventBoxColor.WHITE, brightness: 2.5 },
                            { time: 0.09375, brightness: Brightness.ZERO, color: EventBoxColor.WHITE },
                            { time: 0.125, color: EventBoxColor.RED },
                        ],
                    },
                ],
            });
            for (
                let time = rt, flipFlop = false, first = true;
                time <= rt + 24;
                time += 12, flipFlop = !flipFlop, first = false
            ) {
                d.addLightRotationEventBoxGroups({
                    time,
                    id,
                    boxes: [
                        {
                            filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                            flip: 1,
                            rotationDistribution: flipFlop ? -15 : 15,
                            affectFirst: 1,
                            events: [{ rotation: flipFlop ? 150 : 120, easing: first ? 2 : 3 }],
                        },
                        {
                            filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
                            flip: 1,
                            rotationDistribution: flipFlop ? 15 : -15,
                            affectFirst: 1,
                            events: [{ rotation: flipFlop ? 120 : 150, easing: first ? 2 : 3 }],
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
                        time: rt + 1 + i * 2,
                        id,
                        boxes: [
                            {
                                filter: { reverse: 1 },
                                beatDistribution: 0.499,
                                events: [
                                    { color: EventBoxColor.WHITE, brightness: Brightness.EXTRA },
                                    { time: 0.28125, brightness: Brightness.ZERO, color: EventBoxColor.BLUE },
                                ],
                            },
                        ],
                    }
                    // {
                    //     time: rt + 1.5 + i * 2,
                    //     g,
                    //     e: [
                    //         {
                    //             e: [{ b: 1, color: EventBoxColor.BLUE, brightness: Brightness.FULL, transition: TransitionType.INTERPOLATE }],
                    //         },
                    //     ],
                    // }
                );
            }
        }
        for (let id = 4; id < 8; id++) {
            d.addLightColorEventBoxGroups(
                {
                    time: rt,
                    id,
                    boxes: [
                        {
                            beatDistribution: 0.749,
                            events: [
                                { color: EventBoxColor.WHITE, brightness: 2.5 },
                                { time: 0.09375, brightness: Brightness.ZERO, color: EventBoxColor.WHITE },
                                { time: 0.125, color: EventBoxColor.RED },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 0.5,
                    id,
                    boxes: [
                        {
                            beatDistribution: 0.249,
                            events: [
                                {
                                    frequency: 8,
                                    transition: TransitionType.INTERPOLATE,
                                    brightness: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                }
            );
            d.addLightRotationEventBoxGroups({
                time: rt,
                id,
                boxes: [
                    {
                        rotationDistribution: -90,
                        affectFirst: 1,
                        events: [{ rotation: 180 }, { time: 0.999, previous: 1 }],
                    },
                ],
            });
        }
        ff = !ff;
    }
};
