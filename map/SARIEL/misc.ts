import { Axis, EaseType, EventBoxColor, IndexFilterType, TransitionType, types, v3 } from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

export default (d: v3.Difficulty) => {
    //#region ding sound
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
        326,
        334,
        342,
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
    ];
    for (const dt of dingTiming) {
        for (let id = 0; id < 2; id++) {
            d.addLightColorEventBoxGroups({
                time: dt,
                id: 2 + id,
                boxes: [
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p1: 2,
                            reverse: 1,
                        },
                        beatDistribution: 0.5,
                        events: [
                            {
                                color: EventBoxColor.WHITE,
                                brightness: Brightness.DOUBLE,
                            },
                            {
                                time: 0.25,
                                color: EventBoxColor.WHITE,
                                brightness: Brightness.OFF,
                                transition: TransitionType.INTERPOLATE,
                            },
                        ],
                    },
                ],
            });
            d.addLightRotationEventBoxGroups({
                time: dt,
                id: 2 + id,
                boxes: [
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p1: 2,
                            reverse: 1,
                        },
                        events: [{ rotation: 270 }],
                    },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p1: 2,
                            reverse: 1,
                        },
                        axis: Axis.Y,
                        events: [{}],
                    },
                ],
            });
        }
    }
    //#endregion

    //#region glitch effect 1
    for (let id = 0; id < 12; id++) {
        d.addLightRotationEventBoxGroups({
            time: 66.5 + id * 0.0625,
            id,
            boxes: [
                {
                    filter: { reverse: 1 },
                    axis: Axis.Y,
                    events: [{ previous: 1 }, { time: 0.25 }],
                },
                {
                    filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        reverse: 1,
                    },
                    events: [
                        {
                            easing: EaseType.NONE,
                            rotation: id < 8
                                ? id % 4 > 1 ? id % 2 ? 90 : 270 : id % 2 ? 270 : 90
                                : id % 4 > 1
                                ? id % 2 ? 0 : 180
                                : id % 2
                                ? 180
                                : 0,
                        },
                        {
                            time: 0.5,
                            easing: EaseType.OUT_QUAD,
                            rotation: id >= 8
                                ? id % 4 > 1 ? id % 2 ? 0 : 180 : id % 2 ? 180 : 0
                                : id % 4 > 1
                                ? id % 2 ? 90 : 270
                                : id % 2
                                ? 270
                                : 90,
                        },
                        {
                            time: 3.499 - id * 0.0625,
                            easing: EaseType.IN_QUAD,
                            rotation: 22.5 +
                                (id >= 8
                                    ? id % 4 > 1 ? id % 2 ? 0 : 180 : id % 2 ? 180 : 0
                                    : id % 4 > 1
                                    ? id % 2 ? 90 : 270
                                    : id % 2
                                    ? 270
                                    : 90),
                        },
                    ],
                },
                {
                    filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                        reverse: 1,
                    },
                    events: [
                        {
                            easing: EaseType.NONE,
                            rotation: id < 8
                                ? id % 4 > 1 ? id % 2 ? 270 : 90 : id % 2 ? 90 : 270
                                : id % 4 > 1
                                ? id % 2 ? 180 : 0
                                : id % 2
                                ? 0
                                : 180,
                        },
                        {
                            time: 0.5,
                            easing: EaseType.OUT_QUAD,
                            rotation: id >= 8
                                ? id % 4 > 1 ? id % 2 ? 180 : 0 : id % 2 ? 0 : 180
                                : id % 4 > 1
                                ? id % 2 ? 270 : 90
                                : id % 2
                                ? 90
                                : 270,
                        },
                        {
                            time: 3.499 - id * 0.0625,
                            easing: EaseType.IN_QUAD,
                            rotation: 22.5 +
                                (id >= 8
                                    ? id % 4 > 1 ? id % 2 ? 180 : 0 : id % 2 ? 0 : 180
                                    : id % 4 > 1
                                    ? id % 2 ? 270 : 90
                                    : id % 2
                                    ? 90
                                    : 270),
                        },
                    ],
                },
            ],
        });
        d.addLightColorEventBoxGroups(
            {
                time: 66.5 + id * 0.09375,
                id,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 2.78125,
                        events: [
                            {
                                color: EventBoxColor.WHITE,
                                brightness: Brightness.DOUBLE,
                            },
                            { time: 0.03125, frequency: 6 },
                            { time: 1.5, frequency: 6, brightness: Brightness.HALF },
                            {
                                time: 2,
                                frequency: 6,
                                transition: TransitionType.INTERPOLATE,
                            },
                            { time: 2.5, frequency: 6, brightness: Brightness.HALF },
                        ],
                    },
                ],
            },
            {
                time: 69.25 + id * 0.03125,
                id,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 0.125,
                        events: [
                            {
                                color: EventBoxColor.WHITE,
                                brightness: Brightness.DOUBLE,
                            },
                            { time: 0.03125, brightness: Brightness.OFF },
                        ],
                    },
                ],
            },
        );
    }
    for (let time = 66; time < 68; time++) {
        for (let id = 12; id < 14; id++) {
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
            const events = [
                {
                    color: EventBoxColor.WHITE,
                    brightness: Brightness.EXTRA,
                    frequency: 12,
                },
                { time: 0.25, transition: TransitionType.EXTEND },
                {
                    color: EventBoxColor.RED,
                    brightness: Brightness.ON,
                    transition: TransitionType.INTERPOLATE,
                    frequency: 8,
                    time: 0.5,
                },
                {
                    color: EventBoxColor.RED,
                    brightness: Brightness.OFF,
                    transition: TransitionType.INTERPOLATE,
                    frequency: 8,
                    time: 0.75,
                },
            ] as Partial<types.wrapper.IWrapLightColorBase>[];
            d.addLightRotationEventBoxGroups(
                {
                    time,
                    id,
                    boxes: [
                        {
                            filter: fltr,
                            rotationDistribution: -30,
                            affectFirst: 1,
                            events: [{ easing: EaseType.NONE, rotation: 90 }],
                        },
                        {
                            filter: fltrR,
                            rotationDistribution: -30,
                            flip: 1,
                            affectFirst: 1,
                            events: [{ easing: EaseType.NONE, rotation: 90 }],
                        },
                        {
                            filter: fltr,
                            axis: Axis.Y,
                            flip: 1,
                            rotationDistribution: -30,
                            affectFirst: 1,
                            events: [
                                {
                                    easing: EaseType.NONE,
                                    rotation: 270 + (time - 66) * 30,
                                },
                            ],
                        },
                        {
                            filter: fltrR,
                            axis: Axis.Y,
                            rotationDistribution: -30,
                            affectFirst: 1,
                            events: [
                                {
                                    easing: EaseType.NONE,
                                    rotation: 90 + (time - 66) * 30,
                                },
                            ],
                        },
                    ],
                },
                {
                    time: time + 0.999,
                    id,
                    boxes: [
                        {
                            filter: fltr,
                            rotationDistribution: -45,
                            affectFirst: 1,
                            events: [{ easing: EaseType.OUT_QUAD, rotation: 90 }],
                        },
                        {
                            filter: fltrR,
                            rotationDistribution: -45,
                            flip: 1,
                            affectFirst: 1,
                            events: [{ easing: EaseType.OUT_QUAD, rotation: 90 }],
                        },
                        {
                            filter: fltr,
                            axis: Axis.Y,
                            flip: 1,
                            rotationDistribution: -45,
                            affectFirst: 1,
                            events: [
                                {
                                    easing: EaseType.OUT_QUAD,
                                    rotation: 270 + (time - 66) * 30,
                                },
                            ],
                        },
                        {
                            filter: fltrR,
                            axis: Axis.Y,
                            rotationDistribution: -45,
                            affectFirst: 1,
                            events: [
                                {
                                    easing: EaseType.OUT_QUAD,
                                    rotation: 90 + (time - 66) * 30,
                                },
                            ],
                        },
                    ],
                },
            );
            d.addLightColorEventBoxGroups({
                time,
                id,
                boxes: [
                    { filter: fltr, events, beatDistribution: 0.999 },
                    { filter: fltrR, events, beatDistribution: 0.999 },
                ],
            });
        }
    }
    for (let time = 68; time < 70; time++) {
        for (let id = 14; id < 16; id++) {
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
            const events = [
                {
                    color: EventBoxColor.WHITE,
                    brightness: Brightness.DOUBLE,
                    frequency: 12,
                },
                { time: 0.25, transition: TransitionType.EXTEND },
                { time: 0.375, brightness: Brightness.OFF },
                {
                    color: EventBoxColor.RED,
                    brightness: Brightness.ON,
                    frequency: 8,
                    time: 0.5,
                },
                {
                    color: EventBoxColor.RED,
                    brightness: Brightness.OFF,
                    transition: TransitionType.INTERPOLATE,
                    frequency: 8,
                    time: 0.75,
                },
            ] as Partial<types.wrapper.IWrapLightColorBase>[];
            d.addLightRotationEventBoxGroups(
                {
                    time,
                    id,
                    boxes: [
                        {
                            filter: fltr,
                            rotationDistribution: -30,
                            affectFirst: 1,
                            events: [{ easing: EaseType.NONE, rotation: 90 }],
                        },
                        {
                            filter: fltrR,
                            rotationDistribution: -30,
                            flip: 1,
                            affectFirst: 1,
                            events: [{ easing: EaseType.NONE, rotation: 90 }],
                        },
                        {
                            filter: fltr,
                            axis: Axis.Y,
                            flip: 1,
                            rotationDistribution: -30,
                            affectFirst: 1,
                            events: [
                                {
                                    easing: EaseType.NONE,
                                    rotation: 270 - (time - 68) * 30,
                                },
                            ],
                        },
                        {
                            filter: fltrR,
                            axis: Axis.Y,
                            rotationDistribution: -30,
                            affectFirst: 1,
                            events: [
                                {
                                    easing: EaseType.NONE,
                                    rotation: 90 - (time - 68) * 30,
                                },
                            ],
                        },
                    ],
                },
                {
                    time: time + 0.999,
                    id,
                    boxes: [
                        {
                            filter: fltr,
                            rotationDistribution: -45,
                            affectFirst: 1,
                            events: [{ easing: EaseType.OUT_QUAD, rotation: 90 }],
                        },
                        {
                            filter: fltrR,
                            rotationDistribution: -45,
                            flip: 1,
                            affectFirst: 1,
                            events: [{ easing: EaseType.OUT_QUAD, rotation: 90 }],
                        },
                        {
                            filter: fltr,
                            axis: Axis.Y,
                            flip: 1,
                            rotationDistribution: -45,
                            affectFirst: 1,
                            events: [
                                {
                                    easing: EaseType.OUT_QUAD,
                                    rotation: 270 - (time - 68) * 30,
                                },
                            ],
                        },
                        {
                            filter: fltrR,
                            axis: Axis.Y,
                            rotationDistribution: -45,
                            affectFirst: 1,
                            events: [
                                {
                                    easing: EaseType.OUT_QUAD,
                                    rotation: 90 - (time - 68) * 30,
                                },
                            ],
                        },
                    ],
                },
            );
            d.addLightColorEventBoxGroups({
                time,
                id,
                boxes: [
                    { filter: fltr, events, beatDistribution: 0.999 },
                    { filter: fltrR, events, beatDistribution: 0.999 },
                ],
            });
        }
    }
    //#endregion

    //#region glitch effect 2
    const repeatGlitch2 = [196, 356, 452, 484];
    for (const time of repeatGlitch2) {
        for (let id = 0; id < 12; id++) {
            d.addLightRotationEventBoxGroups({
                time: time + id * 0.03125,
                id: id,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        axis: Axis.Y,
                        events: [{ previous: 1 }, { time: 0.25 }],
                    },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p1: 4,
                            reverse: 1,
                        },
                        events: [
                            {
                                easing: EaseType.NONE,
                                rotation: id < 8
                                    ? id % 4 > 1 ? id % 2 ? 90 : 270 : id % 2 ? 270 : 90
                                    : id % 4 > 1
                                    ? id % 2 ? 0 : 180
                                    : id % 2
                                    ? 180
                                    : 0,
                            },
                            {
                                time: 0.5,
                                easing: EaseType.OUT_QUAD,
                                rotation: id >= 8
                                    ? id % 4 > 1 ? id % 2 ? 0 : 180 : id % 2 ? 180 : 0
                                    : id % 4 > 1
                                    ? id % 2 ? 90 : 270
                                    : id % 2
                                    ? 270
                                    : 90,
                            },
                            { time: 1.999 - id * 0.03125, previous: 1 },
                        ],
                    },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p0: 1,
                            p1: 4,
                            reverse: 1,
                        },
                        events: [
                            {
                                easing: EaseType.NONE,
                                rotation: id < 8
                                    ? id % 4 > 1 ? id % 2 ? 0 : 180 : id % 2 ? 0 : 180
                                    : id % 4 > 1
                                    ? id % 2 ? 270 : 90
                                    : id % 2
                                    ? 270
                                    : 90,
                            },
                            {
                                time: 0.5,
                                easing: EaseType.OUT_QUAD,
                                rotation: id >= 8
                                    ? id % 4 > 1 ? id % 2 ? 270 : 90 : id % 2 ? 270 : 90
                                    : id % 4 > 1
                                    ? id % 2 ? 0 : 180
                                    : id % 2
                                    ? 0
                                    : 180,
                            },
                            { time: 1.999 - id * 0.03125, previous: 1 },
                        ],
                    },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p0: 2,
                            p1: 4,
                            reverse: 1,
                        },
                        events: [
                            {
                                easing: EaseType.NONE,
                                rotation: id < 8
                                    ? id % 4 > 1 ? id % 2 ? 270 : 90 : id % 2 ? 90 : 270
                                    : id % 4 > 1
                                    ? id % 2 ? 180 : 0
                                    : id % 2
                                    ? 0
                                    : 180,
                            },
                            {
                                time: 0.5,
                                easing: EaseType.OUT_QUAD,
                                rotation: id >= 8
                                    ? id % 4 > 1 ? id % 2 ? 180 : 0 : id % 2 ? 0 : 180
                                    : id % 4 > 1
                                    ? id % 2 ? 270 : 90
                                    : id % 2
                                    ? 90
                                    : 270,
                            },
                            { time: 1.999 - id * 0.03125, previous: 1 },
                        ],
                    },
                    {
                        filter: {
                            type: IndexFilterType.STEP_AND_OFFSET,
                            p0: 3,
                            p1: 4,
                            reverse: 1,
                        },
                        events: [
                            {
                                easing: EaseType.NONE,
                                rotation: id < 8
                                    ? id % 4 > 1 ? id % 2 ? 180 : 0 : id % 2 ? 180 : 0
                                    : id % 4 > 1
                                    ? id % 2 ? 90 : 270
                                    : id % 2
                                    ? 90
                                    : 270,
                            },
                            {
                                time: 0.5,
                                easing: EaseType.OUT_QUAD,
                                rotation: id >= 8
                                    ? id % 4 > 1 ? id % 2 ? 90 : 270 : id % 2 ? 90 : 270
                                    : id % 4 > 1
                                    ? id % 2 ? 180 : 0
                                    : id % 2
                                    ? 180
                                    : 0,
                            },
                            { time: 1.999 - id * 0.03125, previous: 1 },
                        ],
                    },
                ],
            });
            d.addLightColorEventBoxGroups(
                {
                    time: time + id * 0.0625,
                    id: id,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 0.28125,
                            events: [
                                { color: EventBoxColor.WHITE, brightness: 2.5 },
                                { time: 0.03125, frequency: 6 },
                            ],
                        },
                    ],
                },
                {
                    time: time + 0.999 + id * 0.0625,
                    id: id,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 0.28125,
                            events: [
                                { color: EventBoxColor.WHITE, brightness: 2.5 },
                                { time: 0.03125, brightness: Brightness.OFF },
                            ],
                        },
                    ],
                },
            );
        }
    }
    //#endregion
};
