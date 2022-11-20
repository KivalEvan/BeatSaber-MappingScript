import { Axis, EaseType, EventBoxColor, TransitionType, v3 } from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

export default (d: v3.Difficulty) => {
    const dingTiming = [
        38, 46.5, 48, 49.5, 54, 55.5, 57, 62.5, 64, 65.5, 166, 174, 182, 190, 326, 334, 342, 350, 422, 430, 431.5, 433,
        438, 439.5, 441, 446.5, 448, 449.5, 454, 462, 470, 478,
    ];
    for (const dt of dingTiming) {
        for (let id = 0; id < 2; id++) {
            d.addLightColorEventBoxGroups({
                time: dt,
                id: 2 + id,
                boxes: [
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
                id: 2 + id,
                boxes: [
                    {
                        filter: { type: 2, p1: 2, reverse: 1 },
                        events: [{ rotation: 270 }],
                    },
                    {
                        filter: { type: 2, p1: 2, reverse: 1 },
                        axis: Axis.Y,
                        events: [{}],
                    },
                ],
            });
        }
    }

    for (let id = 0; id < 12; id++) {
        d.addLightRotationEventBoxGroups({
            time: 66.5 + id * 0.0625,
            id: id,
            boxes: [
                {
                    filter: { reverse: 1 },
                    axis: Axis.Y,
                    events: [{ previous: 1 }, { time: 0.25 }],
                },
                {
                    filter: { type: 2, p1: 2, reverse: 1 },
                    events: [
                        {
                            easing: EaseType.NONE,
                            rotation:
                                id < 8
                                    ? id % 4 > 1
                                        ? id % 2
                                            ? 90
                                            : 270
                                        : id % 2
                                        ? 270
                                        : 90
                                    : id % 4 > 1
                                    ? id % 2
                                        ? 0
                                        : 180
                                    : id % 2
                                    ? 180
                                    : 0,
                        },
                        {
                            time: 0.5,
                            easing: EaseType.OUT_QUAD,
                            rotation:
                                id >= 8
                                    ? id % 4 > 1
                                        ? id % 2
                                            ? 0
                                            : 180
                                        : id % 2
                                        ? 180
                                        : 0
                                    : id % 4 > 1
                                    ? id % 2
                                        ? 90
                                        : 270
                                    : id % 2
                                    ? 270
                                    : 90,
                        },
                        { time: 3.499 - id * 0.0625, previous: 1 },
                    ],
                },
                {
                    filter: { type: 2, p0: 1, p1: 2, reverse: 1 },
                    events: [
                        {
                            easing: EaseType.NONE,
                            rotation:
                                id < 8
                                    ? id % 4 > 1
                                        ? id % 2
                                            ? 270
                                            : 90
                                        : id % 2
                                        ? 90
                                        : 270
                                    : id % 4 > 1
                                    ? id % 2
                                        ? 180
                                        : 0
                                    : id % 2
                                    ? 0
                                    : 180,
                        },
                        {
                            time: 0.5,
                            easing: EaseType.OUT_QUAD,
                            rotation:
                                id >= 8
                                    ? id % 4 > 1
                                        ? id % 2
                                            ? 180
                                            : 0
                                        : id % 2
                                        ? 0
                                        : 180
                                    : id % 4 > 1
                                    ? id % 2
                                        ? 270
                                        : 90
                                    : id % 2
                                    ? 90
                                    : 270,
                        },
                        { time: 3.499 - id * 0.0625, previous: 1 },
                    ],
                },
            ],
        });
        d.addLightColorEventBoxGroups({
            time: 66.5 + id * 0.09375,
            id: id,
            boxes: [
                {
                    filter: { reverse: 1 },
                    beatDistribution: 3.28125,
                    events: [
                        { color: EventBoxColor.WHITE, brightness: Brightness.DOUBLE },
                        { time: 0.03125, frequency: 6 },
                        { time: 1.5, frequency: 6, brightness: Brightness.HALF },
                        { time: 2, frequency: 6, transition: TransitionType.INTERPOLATE },
                        { time: 2.5, frequency: 6, brightness: Brightness.HALF },
                        { time: 3, frequency: 6, transition: TransitionType.INTERPOLATE },
                    ],
                },
            ],
        });

        d.addLightRotationEventBoxGroups({
            time: 452 + id * 0.03125,
            id: id,
            boxes: [
                {
                    filter: { reverse: 1 },
                    axis: Axis.Y,
                    events: [{ previous: 1 }, { time: 0.25 }],
                },
                {
                    filter: { type: 2, p1: 4, reverse: 1 },
                    events: [
                        {
                            easing: EaseType.NONE,
                            rotation:
                                id < 8
                                    ? id % 4 > 1
                                        ? id % 2
                                            ? 90
                                            : 270
                                        : id % 2
                                        ? 270
                                        : 90
                                    : id % 4 > 1
                                    ? id % 2
                                        ? 0
                                        : 180
                                    : id % 2
                                    ? 180
                                    : 0,
                        },
                        {
                            time: 0.5,
                            easing: EaseType.OUT_QUAD,
                            rotation:
                                id >= 8
                                    ? id % 4 > 1
                                        ? id % 2
                                            ? 0
                                            : 180
                                        : id % 2
                                        ? 180
                                        : 0
                                    : id % 4 > 1
                                    ? id % 2
                                        ? 90
                                        : 270
                                    : id % 2
                                    ? 270
                                    : 90,
                        },
                        { time: 1.999 - id * 0.03125, previous: 1 },
                    ],
                },
                {
                    filter: { type: 2, p0: 1, p1: 4, reverse: 1 },
                    events: [
                        {
                            easing: EaseType.NONE,
                            rotation:
                                id < 8
                                    ? id % 4 > 1
                                        ? id % 2
                                            ? 0
                                            : 180
                                        : id % 2
                                        ? 0
                                        : 180
                                    : id % 4 > 1
                                    ? id % 2
                                        ? 270
                                        : 90
                                    : id % 2
                                    ? 270
                                    : 90,
                        },
                        {
                            time: 0.5,
                            easing: EaseType.OUT_QUAD,
                            rotation:
                                id >= 8
                                    ? id % 4 > 1
                                        ? id % 2
                                            ? 270
                                            : 90
                                        : id % 2
                                        ? 270
                                        : 90
                                    : id % 4 > 1
                                    ? id % 2
                                        ? 0
                                        : 180
                                    : id % 2
                                    ? 0
                                    : 180,
                        },
                        { time: 1.999 - id * 0.03125, previous: 1 },
                    ],
                },
                {
                    filter: { type: 2, p0: 2, p1: 4, reverse: 1 },
                    events: [
                        {
                            easing: EaseType.NONE,
                            rotation:
                                id < 8
                                    ? id % 4 > 1
                                        ? id % 2
                                            ? 270
                                            : 90
                                        : id % 2
                                        ? 90
                                        : 270
                                    : id % 4 > 1
                                    ? id % 2
                                        ? 180
                                        : 0
                                    : id % 2
                                    ? 0
                                    : 180,
                        },
                        {
                            time: 0.5,
                            easing: EaseType.OUT_QUAD,
                            rotation:
                                id >= 8
                                    ? id % 4 > 1
                                        ? id % 2
                                            ? 180
                                            : 0
                                        : id % 2
                                        ? 0
                                        : 180
                                    : id % 4 > 1
                                    ? id % 2
                                        ? 270
                                        : 90
                                    : id % 2
                                    ? 90
                                    : 270,
                        },
                        { time: 1.999 - id * 0.03125, previous: 1 },
                    ],
                },
                {
                    filter: { type: 2, p0: 3, p1: 4, reverse: 1 },
                    events: [
                        {
                            easing: EaseType.NONE,
                            rotation:
                                id < 8
                                    ? id % 4 > 1
                                        ? id % 2
                                            ? 180
                                            : 0
                                        : id % 2
                                        ? 180
                                        : 0
                                    : id % 4 > 1
                                    ? id % 2
                                        ? 90
                                        : 270
                                    : id % 2
                                    ? 90
                                    : 270,
                        },
                        {
                            time: 0.5,
                            easing: EaseType.OUT_QUAD,
                            rotation:
                                id >= 8
                                    ? id % 4 > 1
                                        ? id % 2
                                            ? 90
                                            : 270
                                        : id % 2
                                        ? 90
                                        : 270
                                    : id % 4 > 1
                                    ? id % 2
                                        ? 180
                                        : 0
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
                time: 452 + id * 0.0625,
                id: id,
                boxes: [
                    {
                        filter: { reverse: 1 },
                        beatDistribution: 0.28125,
                        events: [{ brightness: 2.5 }, { time: 0.03125, frequency: 6 }],
                    },
                ],
            },
            {
                time: 454,
                id: id,
                boxes: [
                    {
                        events: [{ brightness: 0 }],
                    },
                ],
            }
        );
    }
};
