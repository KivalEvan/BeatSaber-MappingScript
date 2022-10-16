import logger from '../../../BeatSaber-Deno/logger.ts';
import { Axis, BeatPerMinute, EventBoxColor, v3 } from '../../depsLocal.ts';

export function fixRot(d: v3.Difficulty) {
    for (let g = 0; g < 16; g++) {
        d.addLightRotationEventBoxGroups({
            b: 0,
            g,
            e: [
                {
                    l: [{}],
                },
                { a: Axis.Y, l: [{}] },
            ],
        });
    }
}

export function rotation(d: v3.Difficulty) {
    d.lightColorEventBoxGroups = [];
    for (let g = 0; g < 16; g++) {
        d.addLightColorEventBoxGroups({
            b: 0,
            g,
            e: [
                {
                    e: [{ c: g < 4 ? EventBoxColor.RED : g < 8 ? EventBoxColor.BLUE : EventBoxColor.WHITE }],
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
                d.lightColorEventBoxGroups[i].groupID === d.lightColorEventBoxGroups[j].groupID &&
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
                d.lightRotationEventBoxGroups[i].groupID === d.lightRotationEventBoxGroups[j].groupID &&
                d.lightRotationEventBoxGroups[j].time - d.lightRotationEventBoxGroups[i].time === 0
            ) {
                lightRotationAry.push(d.lightRotationEventBoxGroups[i]);
            }
        }
    }
    if (lightColorAry.length) {
        logger.error(
            'Stacked Light Color Event Box Group',
            lightColorAry.map((n) => [n.time, n.groupID]),
        );
    }
    if (lightRotationAry.length) {
        logger.error(
            'Stacked Light Rotation Event Box Group',
            lightRotationAry.map((n) => [n.time, n.groupID]),
        );
    }
}
