import * as bsmap from '../../depsLocal.ts';
import { getRepeatArray } from './helpers.ts';
const { noodleExtensions: NE } = bsmap.ext;
const { between } = bsmap.ext.selector;

function doArrowthing(fakeNotes: bsmap.v3.ColorNote[], duration: number) {
    if (duration < 0.25) {
        throw new Error('re');
    }
    return fakeNotes.map((n) => {
        return n
            .clone()
            .setTime(n.time + duration)
            .setPosX(0)
            .setPosY(0)
            .addCustomData({
                uninteractable: true,
                disableNoteGravity: true,
                disableNoteLook: true,
                spawnEffect: false,
                noteJumpMovementSpeed: 10,
                noteJumpStartBeatOffset: -4 + duration,
                animation: {
                    dissolve: [[0, 0]],
                    dissolveArrow: [
                        [0, 0],
                        [1, 1 / 64],
                    ],
                    scale: [[3, 3, 3, 0]],
                    definitePosition: [
                        [1.5, -3.5, 16, 0],
                        [1.5, -3.5, 12, 0.0625],
                        [1.5, -3.5, -999, 0.5, 'easeStep'],
                    ],
                },
            });
    });
}

export function drop1(data: bsmap.v3.DifficultyData, BPM: bsmap.BeatPerMinute, NJS: bsmap.NoteJumpSpeed, nerf = false) {
    bsmap.logger.info('Run Drop 1');
    const fakeNotes: bsmap.v3.ColorNote[] = [];

    const fastPewPew: number[] = [...getRepeatArray(394, 16, 8), ...getRepeatArray(906, 16, 8)];
    for (const fpp of fastPewPew) {
        const obs = bsmap.v3.Obstacle.create({
            b: fpp - 1.5,
            customData: {
                uninteractible: true,
                size: [3, 4, 2],
                color: [100, 100, 100, 1],
                noteJumpMovementSpeed: 10,
                noteJumpStartBeatOffset: -2.5,
                animation: {
                    dissolve: [
                        [0, 0],
                        [1, 1 / 64],
                        [0, 0.5, 'easeStep'],
                    ],
                    definitePosition: [
                        [6, -2, 0, 0],
                        [6, -2, 0, 0.25, 'easeStep'],
                        [6, -2, 100, 0.5, 'easeInExpo'],
                    ],
                    scale: [
                        [1, 1, 1, 0],
                        [1, 1, 0.5, 0.125, 'easeOutExpo'],
                        [1, 1, 100, 0.25, 'easeOutExpo'],
                        [0.25, 0.25, 1, 0.5, 'easeInExpo'],
                    ],
                },
            },
        });
        data.customData.fakeObstacles!.push(obs, obs.clone().mirror());
        const notes = between(data.colorNotes, fpp, fpp + 5.999);
        fakeNotes.push(
            ...notes.map((n) => {
                const randX = bsmap.utils.random(3, 5, true);
                const randY = bsmap.utils.random(-1, 1, true);
                return n
                    .clone()
                    .setTime(n.time - 0.0025)
                    .addCustomData({
                        spawnEffect: false,
                        animation: {
                            dissolve: [
                                [1, 0],
                                [0, 0.125, 'easeInOutBounce'],
                            ],
                            offsetPosition: [
                                [0, 0, 0, 0],
                                [n.getPosition()[0] + (n.time % 1 ? randX : -randX), randY, 0, 0.125, 'easeOutQuart'],
                                [
                                    0,
                                    0,
                                    bsmap.NoteJumpSpeed.create(BPM, n.customData.noteJumpMovementSpeed).calcDistance(
                                        0.0024,
                                    ),
                                    0.3125,
                                    'easeInElastic',
                                ],
                            ],
                        },
                    });
            }),
            ...notes.map((n) => {
                const randX = bsmap.utils.random(3, 5, true);
                const randY = bsmap.utils.random(-1, 1, true);
                return n
                    .clone()
                    .setTime(n.time - 0.0075)
                    .addCustomData({
                        spawnEffect: false,
                        animation: {
                            dissolve: [
                                [1, 0],
                                [0, 0.125, 'easeInOutBounce'],
                            ],
                            offsetPosition: [
                                [0, 0, 0, 0],
                                [n.getPosition()[0] + (n.time % 1 ? -randX : randX), randY, 0, 0.125, 'easeOutQuart'],
                                [
                                    0,
                                    0,
                                    bsmap.NoteJumpSpeed.create(BPM, n.customData.noteJumpMovementSpeed).calcDistance(
                                        0.0074,
                                    ),
                                    0.3125,
                                    'easeInElastic',
                                ],
                            ],
                        },
                    });
            }),
            ...doArrowthing(notes, 0.495),
            ...doArrowthing(
                notes.map((n) => n.clone().setTime(n.time + 0.03125)),
                0.485 - 0.03125,
            ),
            ...doArrowthing(
                notes.map((n) => n.clone().setTime(n.time + 0.0625)),
                0.475 - 0.0625,
            ),
            ...doArrowthing(
                notes.map((n) => n.clone().setTime(n.time + 0.09375)),
                0.465 - 0.09375,
            ),
            ...doArrowthing(
                notes.map((n) => n.clone().setTime(n.time + 0.125)),
                0.455 - 0.125,
            ),
        );
        notes.forEach((n) => {
            n.angleOffset = bsmap.NoteCutAngle[n.direction] || 0;
            n.direction = 8;
            n.addCustomData({
                animation: {
                    dissolveArrow: [[0, 0]],
                    dissolve: [
                        [0, 0],
                        [1, 0.0625, 'easeInOutBounce'],
                    ],
                },
            });
        });
    }

    data.colorNotes.push(...fakeNotes);
}
