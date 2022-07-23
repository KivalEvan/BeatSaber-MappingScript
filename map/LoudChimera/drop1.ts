import * as bsmap from '../../depsLocal.ts';
import { getRepeatArray } from './helpers.ts';
const { normalize, lerp, random } = bsmap.utils;
const { noodleExtensions: NE } = bsmap.ext;
const { at, between } = bsmap.ext.selector;

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
                    dissolve: 'pZero',
                    dissolveArrow: 'pqOne',
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

export function drop1(
    data: bsmap.v3.DifficultyData,
    BPM: bsmap.BeatPerMinute,
    NJS: bsmap.NoteJumpSpeed,
) {
    bsmap.logger.info('Run Drop 1');
    const fakeNotes: bsmap.v3.ColorNote[] = [];

    const fastPewPew: number[] = [
        ...getRepeatArray(394, 16, 8),
        ...getRepeatArray(906, 16, 8),
    ];
    let flipFlop = true;
    for (const fpp of fastPewPew) {
        for (let min = 0, max = 4, x = min; x < max; x++) {
            const bomb = bsmap.v3.BombNote.create({
                b: fpp -
                    2 +
                    1.5 -
                    lerp(
                        normalize(x, min, max),
                        0,
                        0.25,
                        bsmap.utils.easings.easeInCirc,
                    ),
                customData: {
                    coordinates: [
                        x,
                        -0.25 -
                        lerp(
                            normalize(x, min, max),
                            0,
                            1.25,
                            bsmap.utils.easings.easeInQuad,
                        ),
                    ],
                    color: [1, 1, 1],
                    noteJumpMovementSpeed: NJS.value,
                    noteJumpStartBeatOffset: lerp(
                        normalize(x, min, max),
                        0,
                        8 - bsmap.NoteJumpSpeed.HJD_START - NJS.calcHJDRaw(),
                        bsmap.utils.easings.easeInCirc,
                    ),
                    spawnEffect: true,
                    uninteractable: true,
                    animation: {
                        color: [
                            [0, 0, 0, 1, 0],
                            [0, 0, 0, 1, 0.25],
                            flipFlop
                                ? [
                                    lerp(normalize(x, min, max), 1, 0),
                                    0,
                                    0,
                                    1,
                                    lerp(
                                        normalize(x, min, max),
                                        0,
                                        8 -
                                            bsmap.NoteJumpSpeed.HJD_START -
                                            NJS.calcHJDRaw(),
                                        bsmap.utils.easings.easeInCirc,
                                    ) * 0.375,
                                    'easeOutQuad',
                                ]
                                : [
                                    0,
                                    0,
                                    lerp(normalize(x, min, max), 1, 0),
                                    1,
                                    lerp(
                                        normalize(x, min, max),
                                        0,
                                        8 -
                                            bsmap.NoteJumpSpeed.HJD_START -
                                            NJS.calcHJDRaw(),
                                        bsmap.utils.easings.easeInCirc,
                                    ) * 0.375,
                                    'easeOutQuad',
                                ],
                        ],
                        offsetPosition: [
                            [(2 + x) * 2, 0, 0, 0],
                            [
                                0,
                                0,
                                0,
                                lerp(
                                    normalize(x, min, max),
                                    0,
                                    8 -
                                        bsmap.NoteJumpSpeed.HJD_START -
                                        NJS.calcHJDRaw(),
                                    bsmap.utils.easings.easeInCirc,
                                ) * 0.1875,
                                'easeInCirc',
                            ],
                        ],
                    },
                },
            });
            data.customData.fakeBombNotes?.push(
                bomb.toObject(),
                bomb.clone().mirror().toObject(),
            );
        }
        flipFlop = !flipFlop;

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
        // data.customData.fakeObstacles!.push(
        //     obs.toObject(),
        //     obs.clone().mirror().toObject()
        // );

        const fastPewPewNotes = between(data.colorNotes, fpp, fpp + 5.999);
        fakeNotes.push(
            ...fastPewPewNotes.map((n) => {
                const randX = bsmap.utils.random(4, 6, true);
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
                                [
                                    n.time % 1 ? randX : -randX,
                                    randY,
                                    0,
                                    0.125,
                                    'easeOutQuart',
                                ],
                                [
                                    0,
                                    0,
                                    bsmap.NoteJumpSpeed.create(
                                        BPM,
                                        n.customData.noteJumpMovementSpeed,
                                    ).calcDistance(0.0024),
                                    0.375,
                                    'easeInElastic',
                                ],
                            ],
                        },
                    });
            }),
            ...fastPewPewNotes.map((n) => {
                const randX = bsmap.utils.random(4, 6, true);
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
                                [
                                    n.time % 1 ? -randX : randX,
                                    randY,
                                    0,
                                    0.125,
                                    'easeOutQuart',
                                ],
                                [
                                    0,
                                    0,
                                    bsmap.NoteJumpSpeed.create(
                                        BPM,
                                        n.customData.noteJumpMovementSpeed,
                                    ).calcDistance(0.0074),
                                    0.375,
                                    'easeInElastic',
                                ],
                            ],
                        },
                    });
            }),
            ...doArrowthing(fastPewPewNotes, 0.495),
            ...doArrowthing(
                fastPewPewNotes.map((n) => n.clone().setTime(n.time + 0.03125)),
                0.485 - 0.03125,
            ),
            ...doArrowthing(
                fastPewPewNotes.map((n) => n.clone().setTime(n.time + 0.0625)),
                0.475 - 0.0625,
            ),
            ...doArrowthing(
                fastPewPewNotes.map((n) => n.clone().setTime(n.time + 0.09375)),
                0.465 - 0.09375,
            ),
            ...doArrowthing(
                fastPewPewNotes.map((n) => n.clone().setTime(n.time + 0.125)),
                0.455 - 0.125,
            ),
        );
        fastPewPewNotes.forEach((n) => {
            const noteNJS = bsmap.NoteJumpSpeed.create(
                BPM,
                n.customData.noteJumpMovementSpeed,
                n.customData.noteJumpStartBeatOffset,
            );
            n.angleOffset = bsmap.NoteCutAngle[n.direction] || 0;
            n.direction = 8;
            n.addCustomData({
                animation: {
                    dissolveArrow: 'pZero',
                    dissolve: [
                        [0, 0],
                        [1, 1 / 32],
                    ],
                    offsetPosition: [
                        [0, 0, NJS.calcJD() - noteNJS.calcJD(), 0],
                        [0, 0, 0, 1 / 8, 'easeOutElastic'],
                    ],
                    scale: [
                        [1, 1, 1, 0],
                        [4, 0.75, 0.75, 1 / 64, 'easeOutElastic'],
                        [1, 1, 1, 1 / 32, 'easeInElastic'],
                    ],
                },
            });
        });
    }

    data.customData.fakeColorNotes?.push(...fakeNotes.map((n) => n.toObject()));
}
