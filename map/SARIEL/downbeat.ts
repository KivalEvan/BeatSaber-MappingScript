import { Axis, EventBoxColor, IndexFilterType, TransitionType, types, v3 } from '../../depsLocal.ts';
import { Brightness, eventBoxSwapColor, eventBoxTimeScale } from './helpers.ts';

export default (d: v3.Difficulty) => {
    const downbeatTiming: [number, number, number, boolean?, boolean?][] = [
        [70, 20, 2, false, true],
        [102, 26, 1, true],
        [134, 26, 1],
        [198, 24, 2, false, true],
        [230, 20, 2, false, true],
        [262, 26, 1, true],
        [294, 26, 1],
        [358, 24, 2, false, true],
        [390, 20, 2, false, true],
        [486, 24, 2, false, true],
        [518, 20, 2, false, true],
    ];

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
        { color: EventBoxColor.WHITE, brightness: 1.25 },
        {
            time: 0.1875,
            color: EventBoxColor.WHITE,
            brightness: Brightness.FULL,
            transition: TransitionType.INTERPOLATE,
        },
        { color: EventBoxColor.BLUE, time: 0.25, brightness: Brightness.FULL },
        { time: 0.375, transition: TransitionType.EXTEND },
        { color: EventBoxColor.BLUE, time: 0.5, brightness: Brightness.ZERO, transition: TransitionType.INTERPOLATE },
    ];
    const fastBeat = [
        [0, 0],
        [0.5, 0],
        [1, 0],
        [1, 1],
        [1.5, 1],
    ];
    for (const dbt of downbeatTiming) {
        for (let id = 14; id < 16; id++) {
            d.addLightRotationEventBoxGroups(
                {
                    time: dbt[0] === 70 ? dbt[0] + 1 : dbt[0],
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
                    time: dbt[0] + dbt[1] - 0.001,
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
                {
                    time: dbt[0] + dbt[1],
                    id,
                    boxes: [
                        {
                            events: [{ previous: 1 }, { time: 1, rotation: 90 }],
                        },
                        {
                            filter: fltr,
                            axis: Axis.Y,
                            events: [{ previous: 1 }, { time: 1, rotation: 270 }],
                        },
                        {
                            filter: fltrR,
                            axis: Axis.Y,
                            events: [{ previous: 1 }, { time: 1, rotation: 90 }],
                        },
                    ],
                },
                {
                    time: dbt[0] + dbt[1] + dbt[2] * 2 - 0.001,
                    id,
                    boxes: [
                        {
                            events: [{ rotation: 90 }],
                        },
                        {
                            filter: fltr,
                            axis: Axis.Y,
                            events: [{ rotation: 270 }],
                        },
                        {
                            filter: fltrR,
                            axis: Axis.Y,
                            events: [{ rotation: 90 }],
                        },
                    ],
                }
            );
        }
        for (let id = 12; id < 14; id++) {
            d.addLightRotationEventBoxGroups(
                {
                    time: dbt[0] === 70 ? dbt[0] + 1 : dbt[0],
                    id,
                    boxes: [
                        {
                            filter: fltr,
                            axis: Axis.Y,
                            events: [{ rotation: 90 }],
                        },
                        {
                            filter: fltrR,
                            axis: Axis.Y,
                            events: [{ rotation: 90 }],
                        },
                        {
                            filter: fltr,
                            events: [{ rotation: 270 }],
                        },
                        {
                            flip: 1,
                            filter: fltrR,
                            events: [{ rotation: 270 }],
                        },
                    ],
                },
                {
                    time: dbt[0] + dbt[1] + dbt[2] * 2 - 0.001,
                    id,
                    boxes: [
                        {
                            rotationDistribution: 15,
                            filter: fltr,
                            axis: Axis.Y,
                            events: [{ rotation: 90 }],
                        },
                        {
                            rotationDistribution: -15,
                            filter: fltrR,
                            axis: Axis.Y,
                            events: [{ rotation: 90 }],
                        },
                        {
                            rotationDistribution: -90,
                            filter: fltr,
                            events: [{ rotation: 270 }],
                        },
                        {
                            rotationDistribution: -90,
                            flip: 1,
                            filter: fltrR,
                            events: [{ rotation: 270 }],
                        },
                    ],
                }
            );
            for (let time = dbt[0]; time < dbt[0] + dbt[1]; time++) {
                let en = e;
                if (time === 70) {
                    continue;
                }
                // if (dbt[3] && (time - dbt[0]) % 8 > 4) {
                //     continue;
                // }
                if (time === 86) {
                    en = eventBoxSwapColor(en);
                }
                const doubleHit = !dbt[3] && (time - dbt[0]) % 4 === 2 && dbt[4];
                d.addLightColorEventBoxGroups({
                    time,
                    id: dbt[3]
                        ? (time - dbt[0]) % 8 === 1 || (time - dbt[0]) % 8 === 3
                            ? id + 2
                            : id
                        : time % 2
                        ? id + 2
                        : id,
                    boxes: [
                        {
                            filter: fltrR,
                            beatDistribution: doubleHit ? 0.375 : 0.75,
                            events: doubleHit ? eventBoxTimeScale(en, 0.5) : en,
                        },
                        {
                            filter: fltr,
                            beatDistribution: doubleHit ? 0.375 : 0.75,
                            events: doubleHit ? eventBoxTimeScale(en, 0.5) : en,
                        },
                    ],
                });
                if (doubleHit) {
                    d.addLightColorEventBoxGroups({
                        time: time + 0.5,
                        id: dbt[3]
                            ? (time - dbt[0]) % 8 === 1 || (time - dbt[0]) % 8 === 3
                                ? id + 2
                                : id
                            : time % 2
                            ? id + 2
                            : id,
                        boxes: [
                            {
                                filter: fltrR,
                                beatDistribution: 0.375,
                                events: eventBoxTimeScale(en, 0.5),
                            },
                            {
                                filter: fltr,
                                beatDistribution: 0.375,
                                events: eventBoxTimeScale(en, 0.5),
                            },
                        ],
                    });
                }
            }
            for (let i = 0; i < dbt[2]; i++) {
                for (const fb of fastBeat) {
                    d.addLightColorEventBoxGroups({
                        time: dbt[0] + dbt[1] + fb[0] + i * 2,
                        id: id + fb[1] * 2,
                        boxes: [
                            {
                                filter: fltrR,
                                beatDistribution: 0.375,
                                events: eventBoxTimeScale(e, 0.5),
                            },
                            {
                                filter: fltr,
                                beatDistribution: 0.375,
                                events: eventBoxTimeScale(e, 0.5),
                            },
                        ],
                    });
                }
            }
        }
    }
};
