import { EaseType, EventBoxColor, TransitionType, utils, v3 } from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

export default (d: v3.Difficulty) => {
    const repeatTiming = [166, 326];
    for (const rt of repeatTiming) {
        for (let i = 0; i < 2; i++) {
            d.addLightColorEventBoxGroups(
                {
                    time: rt,
                    id: 10 + i,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 1,
                            events: [
                                { color: EventBoxColor.WHITE, brightness: 2.5 },
                                { time: 0.0625, transition: TransitionType.EXTEND },
                                { time: 0.5, transition: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                },
                {
                    time: rt,
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
                                    color: EventBoxColor.WHITE,
                                    transition: TransitionType.INTERPOLATE,
                                    brightness: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                },
                {
                    time: rt,
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
                                    color: EventBoxColor.WHITE,
                                    transition: TransitionType.INTERPOLATE,
                                    brightness: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 4,
                    id: 10 + i,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 1,
                            events: [
                                { transition: TransitionType.EXTEND },
                                {
                                    time: 0.5,
                                    transition: TransitionType.INTERPOLATE,
                                    brightness: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 8,
                    id: 10 + i,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 1,
                            events: [
                                { color: EventBoxColor.WHITE, brightness: 2.5 },
                                { time: 0.0625, transition: TransitionType.EXTEND },
                                { time: 0.5, transition: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 8,
                    id: 0 + i,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 1,
                            events: [
                                { color: EventBoxColor.WHITE, brightness: 2.5 },
                                { time: 0.0625, transition: TransitionType.EXTEND },
                                { time: 0.5, transition: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 8,
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
                                    color: EventBoxColor.WHITE,
                                    transition: TransitionType.INTERPOLATE,
                                    brightness: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 12,
                    id: 10 + i,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 1,
                            events: [
                                { transition: TransitionType.EXTEND },
                                {
                                    time: 0.5,
                                    transition: TransitionType.INTERPOLATE,
                                    brightness: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 12,
                    id: 0 + i,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 1,
                            events: [
                                { transition: TransitionType.EXTEND },
                                {
                                    time: 0.5,
                                    transition: TransitionType.INTERPOLATE,
                                    brightness: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 16,
                    id: 10 + i,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 1,
                            events: [
                                { color: EventBoxColor.WHITE, brightness: 2.5 },
                                { time: 0.0625, transition: TransitionType.EXTEND },
                                { time: 0.5, transition: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 16,
                    id: 0 + i,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 1,
                            events: [
                                { color: EventBoxColor.WHITE, brightness: 2.5 },
                                { time: 0.0625, transition: TransitionType.EXTEND },
                                { time: 0.5, transition: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 16,
                    id: 4 + i,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 1,
                            events: [
                                { color: EventBoxColor.WHITE, brightness: 2.5 },
                                { time: 0.0625, transition: TransitionType.EXTEND },
                                { time: 0.5, transition: TransitionType.INTERPOLATE },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 20,
                    id: 10 + i,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 1,
                            events: [
                                { transition: TransitionType.EXTEND },
                                {
                                    time: 0.5,
                                    transition: TransitionType.INTERPOLATE,
                                    brightness: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 20,
                    id: 0 + i,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 1,
                            events: [
                                { transition: TransitionType.EXTEND },
                                {
                                    time: 0.5,
                                    transition: TransitionType.INTERPOLATE,
                                    brightness: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                },
                {
                    time: rt + 20,
                    id: 4 + i,
                    boxes: [
                        {
                            filter: { reverse: 1 },
                            beatDistribution: 1,
                            events: [
                                { transition: TransitionType.EXTEND },
                                {
                                    time: 0.5,
                                    transition: TransitionType.INTERPOLATE,
                                    brightness: Brightness.ZERO,
                                },
                            ],
                        },
                    ],
                }
            );
            d.addLightRotationEventBoxGroups(
                {
                    time: rt,
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
                    time: rt - 6 + 7 + 0.125,
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
                    time: rt - 6 + 10.5 + 0.125,
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
                    time: rt - 6 + 17.5 + 0.125,
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
                    time: rt - 6 + 24.5 + 0.125,
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
                    time: rt - 6 + 31.5 + 0.125,
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
                    time: rt - 6 + 35 + 0.125,
                    id: 0 + i,
                    boxes: [
                        {
                            rotationDistribution: -60 - utils.pRandom(0, 5),
                            beatDistribution: 2,
                            affectFirst: 1,
                            events: [{ rotation: 262.5 + utils.pRandom(-5, 5), easing: EaseType.IN_QUAD }],
                        },
                    ],
                },
                {
                    time: rt,
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
                    time: rt - 6 + 7 + 0.25,
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
                    time: rt - 6 + 11 + 0.25,
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
                    time: rt - 6 + 19 + 0.25,
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
                    time: rt - 6 + 27 + 0.25,
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
                    time: rt - 6 + 35 + 0.25,
                    id: 4 + i,
                    boxes: [
                        {
                            rotationDistribution: -45 - utils.pRandom(0, 5),
                            beatDistribution: 2,
                            affectFirst: 1,
                            events: [{ rotation: 230 + utils.pRandom(-5, 5), easing: EaseType.OUT_QUAD }],
                        },
                    ],
                },
                {
                    time: rt,
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
                    time: rt - 6 + 7,
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
                    time: rt - 6 + 10,
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
                    time: rt - 6 + 16,
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
                    time: rt - 6 + 22,
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
                    time: rt - 6 + 28,
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
                    time: rt - 6 + 34,
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
                }
            );
        }
    }
};
