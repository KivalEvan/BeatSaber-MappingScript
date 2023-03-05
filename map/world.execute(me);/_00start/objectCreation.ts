import {
    Axis,
    DistributionType,
    EaseType,
    EventBoxColor,
    EventLightValue,
    LightRotationDirection,
    TransitionType,
    utils,
    v3,
} from '../../../depsLocal.ts';
import {
    Group,
    FILTER_HALF_1_STEP,
    FILTER_HALF_2_STEP,
    FILTER_TRIPLET_1_STEP,
    FILTER_TRIPLET_2_STEP,
    FILTER_TRIPLET_3_STEP,
    FILTER_TWELVE_4_STEP,
    FILTER_TWELVE_5_STEP,
    FILTER_TWELVE_6_STEP,
    FILTER_TWELVE_10_STEP,
    FILTER_TWELVE_11_STEP,
    FILTER_TWELVE_12_STEP,
    FILTER_TWELVE_3_STEP,
    FILTER_TWELVE_1_STEP,
    FILTER_TWELVE_2_STEP,
    FILTER_TWELVE_7_STEP,
    FILTER_TWELVE_8_STEP,
    FILTER_TWELVE_9_STEP,
    FILTER_QUARTET_4_DIV,
    FILTER_QUARTET_1_DIV,
    FILTER_QUARTET_2_DIV,
    FILTER_QUARTET_3_DIV,
    FILTER_HALF_1_DIV,
    SMALL_RINGS_DRUM_INNER,
    SMALL_RINGS_DRUM_OUTER,
    Brightness,
} from '../_common.ts';
import { objectTimeScale } from '../_helpers.ts';
import { START_TIME } from './_time.ts';

export default function (data: v3.Difficulty) {
    data.addColorBoostEvents(
        { time: START_TIME + 13.5, toggle: true },
        { time: START_TIME + 16, toggle: false }
    );
    for (let repeat = 8; repeat <= 13; repeat++) {
        data.addLightColorEventBoxGroups({
            time: START_TIME + repeat,
            id: Group.SMALL_RINGS_C,
            boxes: [
                {
                    filter: FILTER_QUARTET_1_DIV,
                    beatDistribution: 0.03125,
                    beatDistributionType: DistributionType.STEP,
                    events: SMALL_RINGS_DRUM_OUTER,
                },
                {
                    filter: FILTER_QUARTET_2_DIV,
                    beatDistribution: 0.03125,
                    beatDistributionType: DistributionType.STEP,
                    events: SMALL_RINGS_DRUM_OUTER,
                },
                {
                    filter: FILTER_QUARTET_3_DIV,
                    beatDistribution: 0.03125,
                    beatDistributionType: DistributionType.STEP,
                    events: SMALL_RINGS_DRUM_INNER,
                },
                {
                    filter: FILTER_QUARTET_4_DIV,
                    beatDistribution: 0.03125,
                    beatDistributionType: DistributionType.STEP,
                    events: SMALL_RINGS_DRUM_INNER,
                },
            ],
        });
    }
    data.addBasicEvents(
        {
            time: START_TIME + 13.5,
            type: 4,
            value: EventLightValue.WHITE_ON,
            floatValue: Brightness.OFF,
        },
        {
            time: START_TIME + 16,
            type: 4,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: Brightness.OFF,
        }
    );
    for (let repeat = 14; repeat <= 15.5; repeat += 0.5) {
        data.addBasicEvents(
            {
                time: START_TIME + repeat,
                type: 4,
                value: EventLightValue.WHITE_TRANSITION,
                floatValue: Brightness.MODERATE,
            },
            {
                time: START_TIME + repeat + 7 / 16,
                type: 4,
                value: EventLightValue.WHITE_TRANSITION,
                floatValue: Brightness.DIM,
            }
        );
        data.addLightColorEventBoxGroups({
            time: START_TIME + repeat,
            id: Group.SMALL_RINGS_C,
            boxes: [
                {
                    filter: FILTER_QUARTET_1_DIV.clone().setChunks(48),
                    beatDistribution: 0.03125,
                    beatDistributionType: DistributionType.STEP,
                    events: objectTimeScale(utils.deepCopy(SMALL_RINGS_DRUM_INNER), 0.5),
                },
                {
                    filter: FILTER_QUARTET_2_DIV.clone().setChunks(48),
                    beatDistribution: 0.03125,
                    beatDistributionType: DistributionType.STEP,
                    events: objectTimeScale(utils.deepCopy(SMALL_RINGS_DRUM_INNER), 0.5),
                },
            ],
        });
    }

    data.addLightRotationEventBoxGroups(
        {
            time: START_TIME + 8,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ previous: 1 }],
                },
            ],
        },
        {
            time: START_TIME + 9,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    filter: FILTER_TWELVE_1_STEP,
                    events: [
                        {
                            rotation: 30 + 45,
                            easing: EaseType.INOUT_QUAD,
                            direction: LightRotationDirection.CLOCKWISE,
                        },
                    ],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_TWELVE_2_STEP,
                    events: [
                        {
                            rotation: 0 + 45,
                            easing: EaseType.INOUT_QUAD,
                            direction: LightRotationDirection.CLOCKWISE,
                        },
                    ],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_TWELVE_3_STEP,
                    events: [
                        {
                            rotation: 330 + 45,
                            easing: EaseType.INOUT_QUAD,
                            direction: LightRotationDirection.CLOCKWISE,
                        },
                    ],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_TWELVE_4_STEP,
                    events: [
                        {
                            rotation: 30 - 45,
                            easing: EaseType.INOUT_QUAD,
                            direction: LightRotationDirection.COUNTER_CLOCKWISE,
                        },
                    ],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_TWELVE_5_STEP,
                    events: [
                        {
                            rotation: 0 - 45,
                            easing: EaseType.INOUT_QUAD,
                            direction: LightRotationDirection.COUNTER_CLOCKWISE,
                        },
                    ],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_TWELVE_6_STEP,
                    events: [
                        {
                            rotation: 330 - 45,
                            easing: EaseType.INOUT_QUAD,
                            direction: LightRotationDirection.COUNTER_CLOCKWISE,
                        },
                    ],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_TWELVE_7_STEP,
                    events: [
                        {
                            rotation: 210 + 45 + 22.5,
                            easing: EaseType.INOUT_QUAD,
                            direction: LightRotationDirection.CLOCKWISE,
                        },
                    ],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_TWELVE_8_STEP,
                    events: [
                        {
                            rotation: 180 + 45 + 22.5,
                            easing: EaseType.INOUT_QUAD,
                            direction: LightRotationDirection.CLOCKWISE,
                        },
                    ],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_TWELVE_9_STEP,
                    events: [
                        {
                            rotation: 150 + 45 + 22.5,
                            easing: EaseType.INOUT_QUAD,
                            direction: LightRotationDirection.CLOCKWISE,
                        },
                    ],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_TWELVE_10_STEP,
                    events: [
                        {
                            rotation: 210 - 45 + 22.5,
                            easing: EaseType.INOUT_QUAD,
                            direction: LightRotationDirection.COUNTER_CLOCKWISE,
                        },
                    ],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_TWELVE_11_STEP,
                    events: [
                        {
                            rotation: 180 - 45 + 22.5,
                            easing: EaseType.INOUT_QUAD,
                            direction: LightRotationDirection.COUNTER_CLOCKWISE,
                        },
                    ],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_TWELVE_12_STEP,
                    events: [
                        {
                            rotation: 150 - 45 + 22.5,
                            easing: EaseType.INOUT_QUAD,
                            direction: LightRotationDirection.COUNTER_CLOCKWISE,
                        },
                    ],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
            ],
        },
        {
            time: START_TIME + 9.125,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ previous: 1 }],
                },
            ],
        },
        {
            time: START_TIME + 10.75,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    filter: FILTER_HALF_1_STEP,
                    events: [{ rotation: 225, easing: EaseType.INOUT_QUAD }],
                    rotationDistribution: 75,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_HALF_2_STEP,
                    events: [{ rotation: 45, easing: EaseType.INOUT_QUAD }],
                    rotationDistribution: 75,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
            ],
        },
        {
            time: START_TIME + 11,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ previous: 1 }],
                },
            ],
        },
        {
            time: START_TIME + 12,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
                    rotationDistribution: 15,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
            ],
        },
        {
            time: START_TIME + 12.5,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ rotation: 315, easing: EaseType.INOUT_QUAD }],
                    rotationDistribution: 30,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
            ],
        },
        {
            time: START_TIME + 13,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ previous: 1 }],
                    rotationDistribution: 30,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
            ],
        },
        {
            time: START_TIME + 13.5,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ rotation: 225, easing: EaseType.INOUT_QUAD }],
                    rotationDistribution: 45,
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
            ],
        },
        {
            time: START_TIME + 13.75,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    filter: FILTER_HALF_1_STEP,
                    axis: Axis.Z,
                    beatDistribution: 0.25,
                    events: [{ rotation: 120, easing: EaseType.INOUT_QUAD }],
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
                {
                    filter: FILTER_HALF_2_STEP,
                    axis: Axis.Z,
                    beatDistribution: 0.25,
                    events: [{ rotation: 60, easing: EaseType.INOUT_QUAD }],
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
            ],
        },
        {
            time: START_TIME + 14.25,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    filter: FILTER_HALF_1_STEP,
                    axis: Axis.Z,
                    beatDistribution: 0.25,
                    events: [{ rotation: 60, easing: EaseType.INOUT_QUAD }],
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
                {
                    filter: FILTER_HALF_2_STEP,
                    axis: Axis.Z,
                    beatDistribution: 0.25,
                    events: [{ rotation: 120, easing: EaseType.INOUT_QUAD }],
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
            ],
        },
        {
            time: START_TIME + 14.75,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    filter: FILTER_HALF_1_STEP,
                    axis: Axis.Z,
                    beatDistribution: 0.25,
                    events: [{ rotation: 120, easing: EaseType.INOUT_QUAD }],
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
                {
                    filter: FILTER_HALF_2_STEP,
                    axis: Axis.Z,
                    beatDistribution: 0.25,
                    events: [{ rotation: 60, easing: EaseType.INOUT_QUAD }],
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
            ],
        },
        {
            time: START_TIME + 15.25,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    filter: FILTER_HALF_1_STEP,
                    axis: Axis.Z,
                    beatDistribution: 0.25,
                    events: [{ rotation: 60, easing: EaseType.INOUT_QUAD }],
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
                {
                    filter: FILTER_HALF_2_STEP,
                    axis: Axis.Z,
                    beatDistribution: 0.25,
                    events: [{ rotation: 120, easing: EaseType.INOUT_QUAD }],
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
            ],
        },
        {
            time: START_TIME + 15.75,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    filter: FILTER_HALF_1_STEP,
                    axis: Axis.Z,
                    beatDistribution: 0.25,
                    events: [{ rotation: 120, easing: EaseType.INOUT_QUAD }],
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
                {
                    filter: FILTER_HALF_2_STEP,
                    axis: Axis.Z,
                    beatDistribution: 0.25,
                    events: [{ rotation: 60, easing: EaseType.INOUT_QUAD }],
                    rotationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                    flip: 1,
                },
            ],
        }
    );
    data.addLightTranslationEventBoxGroups(
        {
            time: START_TIME + 8,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ previous: 1 }],
                },
            ],
        },
        {
            time: START_TIME + 8.75,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    filter: FILTER_QUARTET_1_DIV,
                    events: [
                        {
                            translation: -3,
                            easing: EaseType.INOUT_QUAD,
                        },
                    ],
                    translationDistribution: 0.16,
                    translationDistributionType: DistributionType.WAVE,
                    flip: 1,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_QUARTET_2_DIV,
                    events: [
                        {
                            translation: -3.2,
                            easing: EaseType.INOUT_QUAD,
                        },
                    ],
                    translationDistribution: 0.16,
                    translationDistributionType: DistributionType.WAVE,
                    flip: 1,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_QUARTET_3_DIV,
                    events: [
                        {
                            translation: -3.3,
                            easing: EaseType.INOUT_QUAD,
                        },
                    ],
                    translationDistribution: 0.16,
                    translationDistributionType: DistributionType.WAVE,
                    flip: 1,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_QUARTET_4_DIV,
                    events: [
                        {
                            translation: -3.5,
                            easing: EaseType.INOUT_QUAD,
                        },
                    ],
                    translationDistribution: 0.16,
                    translationDistributionType: DistributionType.WAVE,
                    flip: 1,
                    affectFirst: 1,
                },
            ],
        },
        {
            time: START_TIME + 9,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    filter: FILTER_QUARTET_1_DIV,
                    events: [{ translation: -1.25, easing: EaseType.IN_QUAD }],
                    translationDistribution: 0.2,
                    translationDistributionType: DistributionType.WAVE,
                    flip: 1,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_QUARTET_2_DIV,
                    events: [{ time: 0.0625, translation: -0.75, easing: EaseType.IN_QUAD }],
                    translationDistribution: 0.2,
                    translationDistributionType: DistributionType.WAVE,
                    flip: 1,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_QUARTET_3_DIV,
                    events: [{ time: 0.125, translation: -0.5, easing: EaseType.IN_QUAD }],
                    translationDistribution: 0.2,
                    translationDistributionType: DistributionType.WAVE,
                    flip: 1,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_QUARTET_4_DIV,
                    events: [{ time: 0.1875, translation: -0.25, easing: EaseType.IN_QUAD }],
                    translationDistribution: 0.2,
                    translationDistributionType: DistributionType.WAVE,
                    flip: 1,
                    affectFirst: 1,
                },
            ],
        },
        {
            time: START_TIME + 9.375,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    filter: FILTER_QUARTET_1_DIV,
                    events: [{ translation: -1.5, easing: EaseType.OUT_QUAD }],
                    translationDistribution: 0.16,
                    translationDistributionType: DistributionType.WAVE,
                    flip: 1,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_QUARTET_2_DIV,
                    events: [{ time: 0.0625, translation: -1, easing: EaseType.OUT_QUAD }],
                    translationDistribution: 0.16,
                    translationDistributionType: DistributionType.WAVE,
                    flip: 1,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_QUARTET_3_DIV,
                    events: [{ time: 0.125, translation: -0.75, easing: EaseType.OUT_QUAD }],
                    translationDistribution: 0.16,
                    translationDistributionType: DistributionType.WAVE,
                    flip: 1,
                    affectFirst: 1,
                },
                {
                    axis: Axis.Z,
                    filter: FILTER_QUARTET_4_DIV,
                    events: [{ time: 0.1875, translation: -0.5, easing: EaseType.OUT_QUAD }],
                    translationDistribution: 0.16,
                    translationDistributionType: DistributionType.WAVE,
                    flip: 1,
                    affectFirst: 1,
                },
            ],
        },
        {
            time: START_TIME + 9.75,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ translation: 2.25, easing: EaseType.INOUT_QUAD }],
                    beatDistribution: 0.375,
                },
            ],
        },
        {
            time: START_TIME + 10.5,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ translation: -2, easing: EaseType.INOUT_QUAD }],
                    beatDistribution: 0.5,
                    translationDistribution: 0.1,
                    translationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
            ],
        },
        {
            time: START_TIME + 11.25,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ translation: 0.5, easing: EaseType.INOUT_QUAD }],
                    translationDistribution: 0.02,
                    translationDistributionType: DistributionType.STEP,
                    flip: 1,
                    affectFirst: 1,
                },
            ],
        },
        {
            time: START_TIME + 12,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ translation: -1, easing: EaseType.IN_QUAD }],
                    translationDistribution: 0.05,
                    translationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
            ],
        },
        {
            time: START_TIME + 12.75,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ translation: 0, easing: EaseType.OUT_QUAD }],
                    affectFirst: 1,
                },
            ],
        },
        {
            time: START_TIME + 13,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ translation: -1, easing: EaseType.IN_QUAD }],
                    translationDistribution: 0.05,
                    translationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
            ],
        },
        {
            time: START_TIME + 13.75,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ translation: 0, easing: EaseType.OUT_QUAD }],
                    affectFirst: 1,
                },
            ],
        },
        {
            time: START_TIME + 14,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ translation: 0, easing: EaseType.IN_QUAD }],
                    translationDistribution: 0.01,
                    translationDistributionType: DistributionType.STEP,
                    flip: 1,
                    affectFirst: 1,
                },
            ],
        },
        {
            time: START_TIME + 15.75,
            id: Group.SMALL_RINGS_RT,
            boxes: [
                {
                    axis: Axis.Z,
                    events: [{ translation: -1, easing: EaseType.OUT_QUAD }],
                    translationDistribution: 0.01,
                    translationDistributionType: DistributionType.STEP,
                    affectFirst: 1,
                },
            ],
        }
    );
}
