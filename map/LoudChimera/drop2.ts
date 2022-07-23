import * as bsmap from '../../depsLocal.ts';
import { connectSlider } from './helpers.ts';
const { noodleExtensions: NE } = bsmap.ext;
const { between, at, where } = bsmap.ext.selector;
const { random } = bsmap.utils;

function slashGlitchHit(fakeNotes: bsmap.v3.ColorNote[], duration: number) {
    if (duration < bsmap.NoteJumpSpeed.HJD_MIN) {
        throw new Error('re');
    }
    return fakeNotes.map((n) => {
        return n
            .clone()
            .setTime(n.time + duration - 0.02)
            .setDirection(8)
            .removeCustomData('animation')
            .addCustomData({
                track: 'trackDrop2PewPew',
                spawnEffect: true,
                noteJumpMovementSpeed: 10,
                noteJumpStartBeatOffset: -bsmap.NoteJumpSpeed.HJD_START + duration,
                uninteractable: true,
                localRotation: [
                    0,
                    0,
                    (180 + (bsmap.NoteCutAngle[n.direction] || 0)) % 360,
                ],
            });
    });
}

export function drop2(
    data: bsmap.v3.DifficultyData,
    BPM: bsmap.BeatPerMinute,
    NJS: bsmap.NoteJumpSpeed,
) {
    bsmap.logger.info('Run Drop 2');
    const fakeNotes: bsmap.v3.ColorNote[] = [];
    data.customData.pointDefinitions!.slashPosition = [
        [0, 0, 3, 0],
        [0, 0, 2, 1 / 32, 'easeStep'],
        [0, 0, 4.5, 0.5, 'easeOutQuad'],
        [0, 0, -999, 0.501, 'easeStep'],
    ];
    data.customData.pointDefinitions!.slashExpand = [
        [1, 0.75, 0.75, 0],
        [0, 36, 0, 0.5, 'easeInQuad'],
    ];
    data.customData.pointDefinitions!.slashGlitchEffect = [
        [0, 0],
        [0.75, 1 / 32, 'easeStep'],
        [0, 0.375],
    ];
    data.customData.customEvents?.push({
        b: 0,
        t: 'AssignPathAnimation',
        d: {
            track: 'trackDrop2PewPew',
            dissolve: 'slashGlitchEffect',
            dissolveArrow: 'pZero',
            definitePosition: 'slashPosition',
            scale: 'slashExpand',
        },
    });

    const dropTiming = [520, 1032];
    const glitchShort = [
        2,
        3,
        4,
        5,
        8,
        9,
        10,
        11,
        18,
        19,
        20,
        21,
        24,
        25,
        26,
        34,
        35,
        36,
        37,
        40,
        41,
        42,
        43,
        50,
        51,
        52,
        53,
    ];
    const glitchLong = [0, 16, 32, 48];
    const noteSwapBullshit = [8, 16, 40, 48];

    for (const dt of dropTiming) {
        fakeNotes.push(...slashGlitchHit(at(data.colorNotes, dt, BPM), 2));
        for (let repeat = 0; repeat <= 64; repeat += 64) {
            const glitchNotes = at(
                data.colorNotes,
                glitchShort.map((n) => n + dt + repeat),
                BPM,
            );
            glitchNotes.forEach((n) => {
                const noteNJS = bsmap.NoteJumpSpeed.create(
                    BPM,
                    n.customData.noteJumpMovementSpeed,
                    n.customData.noteJumpStartBeatOffset!,
                );
                n.customData.noteJumpStartBeatOffset = noteNJS.offset + noteNJS.calcHJD();
                n.customData.spawnEffect = false;
                n.customData.animation = {
                    dissolve: [
                        [0, 0],
                        [1, 0.375],
                    ],
                    offsetPosition: [
                        [
                            ...(bsmap.NoteCutDirectionSpace[n.direction].map(
                                (n) => -n * 24,
                            ) as bsmap.types.Vector2),
                            0,
                            0,
                        ],
                        [0, 0, 0, 0.28125, 'easeInOutCirc'],
                    ],
                    localRotation: [
                        [0, 0, (180 + (bsmap.NoteCutAngle[n.direction] || 0)) % 360, 0],
                        [0, 0, 0, 0.3125, 'easeInOutCirc'],
                    ],
                };
                data.addBurstSliders({
                    b: n.time,
                    tb: n.time + 1 / 32,
                    c: n.color,
                    d: n.direction,
                    x: n.posX,
                    y: n.posY,
                    tx: n.posX + (bsmap.NoteCutDirectionSpace[n.direction][0] || 0),
                    ty: n.posY + (bsmap.NoteCutDirectionSpace[n.direction][1] || 0),
                    sc: 3,
                    s: 0.375,
                    customData: {
                        noteJumpMovementSpeed: n.customData.noteJumpMovementSpeed,
                        noteJumpStartBeatOffset: n.customData.noteJumpStartBeatOffset,
                        tailCoordinates: [
                            n.getPosition()[0] +
                            (bsmap.NoteCutDirectionSpace[n.direction][0] || 0),
                            n.getPosition()[1] +
                            (bsmap.NoteCutDirectionSpace[n.direction][1] || 0),
                        ],
                        animation: n.customData.animation,
                    },
                });
            });
            fakeNotes.push(...slashGlitchHit(glitchNotes, 1));
            for (const gl of glitchLong) {
                if (!repeat && !gl) {
                    continue;
                }
                const glitchNotesLong = at(data.colorNotes, dt + gl + repeat, BPM);
                glitchNotesLong.forEach((n) => {
                    const noteNJS = bsmap.NoteJumpSpeed.create(
                        BPM,
                        n.customData.noteJumpMovementSpeed,
                        n.customData.noteJumpStartBeatOffset!,
                    );
                    n.customData.noteJumpStartBeatOffset = noteNJS.offset + noteNJS.calcHJD();
                    n.customData.spawnEffect = false;
                    n.customData.animation = {
                        dissolve: [
                            [0, 0],
                            [1, 0.375],
                        ],
                        offsetPosition: [
                            [
                                ...(bsmap.NoteCutDirectionSpace[n.direction].map(
                                    (n) => -n * 24,
                                ) as bsmap.types.Vector2),
                                0,
                                0,
                            ],
                            [0, 0, 0, 0.28125, 'easeInOutCirc'],
                        ],
                        localRotation: [
                            [
                                0,
                                0,
                                (180 + (bsmap.NoteCutAngle[n.direction] || 0)) % 360,
                                0,
                            ],
                            [0, 0, 0, 0.3125, 'easeInOutCirc'],
                        ],
                    };
                    data.addBurstSliders({
                        b: n.time,
                        tb: n.time + 1 / 24,
                        c: n.color,
                        d: n.direction,
                        x: n.posX,
                        y: n.posY,
                        tx: n.posX + (bsmap.NoteCutDirectionSpace[n.direction][0] || 0),
                        ty: n.posY + (bsmap.NoteCutDirectionSpace[n.direction][1] || 0),
                        sc: 6,
                        s: 0.625,
                        customData: {
                            noteJumpMovementSpeed: n.customData.noteJumpMovementSpeed,
                            noteJumpStartBeatOffset: n.customData.noteJumpStartBeatOffset,
                            tailCoordinates: [
                                n.getPosition()[0] +
                                (bsmap.NoteCutDirectionSpace[n.direction][0] || 0) *
                                    2,
                                n.getPosition()[1] +
                                (bsmap.NoteCutDirectionSpace[n.direction][1] || 0) *
                                    2,
                            ],
                            animation: n.customData.animation,
                        },
                    });
                });
                fakeNotes.push(...slashGlitchHit(glitchNotesLong, 2));
            }
            for (const nsb of noteSwapBullshit) {
                connectSlider(
                    data,
                    between(data.colorNotes, dt + repeat + nsb - 2, dt + repeat + nsb),
                );
            }
        }
    }

    data.customData.fakeColorNotes?.push(...fakeNotes.map((n) => n.toObject()));
}
