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
    FILTER_QUARTET_1_DIV,
    FILTER_QUARTET_2_DIV,
    FILTER_QUARTET_3_DIV,
    FILTER_QUARTET_4_DIV,
    SMALL_RINGS_DRUM_INNER,
    SMALL_RINGS_DRUM_OUTER,
    Brightness,
} from '../_common.ts';
import { objectTimeScale } from '../_helpers.ts';
import { START_TIME } from './_time.ts';

export default function (data: v3.Difficulty) {
    // ring
    data.addLightColorEventBoxGroups({
        time: START_TIME,
        id: Group.BIG_RINGS,
        boxes: [
            {
                filter: { reverse: 1 },
                beatDistribution: 1.25,
                events: [
                    { color: EventBoxColor.WHITE, brightness: Brightness.FLASH },
                    {
                        time: 0.25,
                        transition: TransitionType.EXTEND,
                    },
                    {
                        time: 1,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.OFF,
                        transition: TransitionType.INTERPOLATE,
                        frequency: 8,
                    },
                ],
            },
        ],
    });
}
