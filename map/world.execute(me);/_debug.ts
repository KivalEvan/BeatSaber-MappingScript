import logger from '../../../BeatSaber-Deno/logger.ts';
import { Axis, BeatPerMinute, EventBoxColor, v3 } from '../../depsLocal.ts';

export function fixRotation(d: v3.Difficulty) {
    const rot = [0, 3, 9, 10, 11, 12];
    for (const id of rot) {
        d.addLightRotationEventBoxGroups({
            time: 0,
            id,
            boxes: [
                {
                    events: [{}],
                },
                { axis: Axis.Y, events: [{}] },
                { axis: Axis.Z, events: [{}] },
            ],
        });
    }
}

export function fixTranslation(d: v3.Difficulty) {
    const tra = [0, 2];
    for (const id of tra) {
        d.addLightTranslationEventBoxGroups({
            time: 0,
            id,
            boxes: [
                {
                    events: [{}],
                },
                { axis: Axis.Y, events: [{}] },
                { axis: Axis.Z, events: [{}] },
            ],
        });
    }
}

export function rotation(d: v3.Difficulty) {
    const skip = [0, 2];
    d.lightColorEventBoxGroups = [];
    for (let id = 0; id <= 12; id++) {
        if (!skip.includes(id))
            d.addLightColorEventBoxGroups({
                time: 0,
                id,
                boxes: [
                    {
                        events: [
                            {
                                color:
                                    id < 4
                                        ? EventBoxColor.RED
                                        : id < 8
                                        ? EventBoxColor.BLUE
                                        : EventBoxColor.WHITE,
                            },
                        ],
                    },
                ],
            });
    }
}

export function stackedEvent(d: v3.Difficulty, bpm: BeatPerMinute) {
    const lightColorAry: v3.LightColorEventBoxGroup[] = [];
    const lightRotationAry: v3.LightRotationEventBoxGroup[] = [];
    for (let i = 0, len = d.lightColorEventBoxGroups.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (
                bpm.toRealTime(d.lightColorEventBoxGroups[j].time) >
                bpm.toRealTime(d.lightColorEventBoxGroups[i].time) + 1
            ) {
                break;
            }
            if (
                d.lightColorEventBoxGroups[i].id === d.lightColorEventBoxGroups[j].id &&
                d.lightColorEventBoxGroups[j].time - d.lightColorEventBoxGroups[i].time === 0
            ) {
                lightColorAry.push(d.lightColorEventBoxGroups[i]);
            }
        }
    }
    for (let i = 0, len = d.lightRotationEventBoxGroups.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (
                bpm.toRealTime(d.lightRotationEventBoxGroups[j].time) >
                bpm.toRealTime(d.lightRotationEventBoxGroups[i].time) + 1
            ) {
                break;
            }
            if (
                d.lightRotationEventBoxGroups[i].id === d.lightRotationEventBoxGroups[j].id &&
                d.lightRotationEventBoxGroups[j].time - d.lightRotationEventBoxGroups[i].time === 0
            ) {
                lightRotationAry.push(d.lightRotationEventBoxGroups[i]);
            }
        }
    }
    if (lightColorAry.length) {
        logger.error(
            'Stacked Light Color Event Box Group',
            lightColorAry.map((n) => [n.time, n.id])
        );
    }
    if (lightRotationAry.length) {
        logger.error(
            'Stacked Light Rotation Event Box Group',
            lightRotationAry.map((n) => [n.time, n.id])
        );
    }
}
