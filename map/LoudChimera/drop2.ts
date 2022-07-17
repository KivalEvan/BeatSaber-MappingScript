import * as bsmap from '../../depsLocal.ts';
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
            .addCustomData({
                track: 'trackDrop2PewPew',
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
    nerf = false,
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
            ).map((n) => {
                n.customData.coordinates = n.getPosition();
                return n;
            });
            glitchNotes.forEach((n) => {
                data.addBurstSliders({
                    b: n.time,
                    tb: n.time,
                    c: n.color,
                    d: n.direction,
                    x: n.posX,
                    y: n.posY,
                    tx: n.posX + (bsmap.NoteCutDirectionSpace[n.direction][0] || 0),
                    ty: n.posY + (bsmap.NoteCutDirectionSpace[n.direction][1] || 0),
                    sc: 3,
                    s: 0.5,
                    customData: {
                        noteJumpMovementSpeed: n.customData.noteJumpMovementSpeed,
                        noteJumpStartBeatOffset: n.customData.noteJumpStartBeatOffset,
                        coordinates: n.getPosition(),
                        tailCoordinates: [
                            n.getPosition()[0] +
                            (bsmap.NoteCutDirectionSpace[n.direction][0] || 0),
                            n.getPosition()[1] +
                            (bsmap.NoteCutDirectionSpace[n.direction][1] || 0),
                        ],
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
                    data.addBurstSliders({
                        b: n.time,
                        tb: n.time,
                        c: n.color,
                        d: n.direction,
                        x: n.posX,
                        y: n.posY,
                        tx: n.posX + (bsmap.NoteCutDirectionSpace[n.direction][0] || 0),
                        ty: n.posY + (bsmap.NoteCutDirectionSpace[n.direction][1] || 0),
                        sc: 5,
                        s: 0.625,
                        customData: {
                            noteJumpMovementSpeed: n.customData.noteJumpMovementSpeed,
                            noteJumpStartBeatOffset: n.customData.noteJumpStartBeatOffset,
                            coordinates: n.getPosition(),
                            tailCoordinates: [
                                n.getPosition()[0] +
                                (bsmap.NoteCutDirectionSpace[n.direction][0] || 0) *
                                    2,
                                n.getPosition()[1] +
                                (bsmap.NoteCutDirectionSpace[n.direction][1] || 0) *
                                    2,
                            ],
                        },
                    });
                });
                fakeNotes.push(...slashGlitchHit(glitchNotesLong, 2));
            }
            for (const nsb of noteSwapBullshit) {
                const ns = between(
                    data.colorNotes,
                    dt + repeat + nsb,
                    dt + repeat + nsb + 3,
                );
                NE.simultaneousSpawn(ns, { bpm: BPM, njs: NJS, speed: 2 });

                const makeArc = at(data.colorNotes, dt + repeat + nsb - 2);
                const meetEnd = at(data.colorNotes, dt + repeat + nsb);
                for (let i = 0; i < 12; i++) {
                    fakeNotes.push(
                        ...makeArc.map((n) =>
                            n
                                .clone()
                                .setTime(n.time + 0.01 + i / 8)
                                .setDirection(8)
                                .addCustomData({
                                    uninteractable: true,
                                    spawnEffect: false,
                                    animation: {
                                        dissolve: [
                                            [random(0.1, 0.15), 0],
                                            [0, 1, 'easeInElastic'],
                                        ],
                                        dissolveArrow: 'pZero',
                                    },
                                })
                        ),
                    );
                }
                const arcRed = where([...makeArc, ...meetEnd], {
                    include: { c: 0 },
                }).sort((a, b) => a.time - b.time);
                const arcBlue = where([...makeArc, ...meetEnd], {
                    include: { c: 1 },
                }).sort((a, b) => a.time - b.time);
                if (arcRed.length) {
                    if (arcRed.length < 2) {
                        throw new Error('wtf');
                    }
                    data.addSliders({
                        b: arcRed[0].time,
                        tb: arcRed[1].time,
                        c: arcRed[0].color,
                        d: arcRed[0].direction,
                        tc: arcRed[1].direction,
                        x: arcRed[0].posX,
                        y: arcRed[0].posY,
                        tx: arcRed[1].posX,
                        ty: arcRed[1].posY,
                        customData: {
                            noteJumpMovementSpeed: arcRed[0].customData.noteJumpMovementSpeed,
                            noteJumpStartBeatOffset: arcRed[0].customData.noteJumpStartBeatOffset,
                            coordinates: arcRed[0].getPosition(),
                            tailCoordinates: arcRed[1].getPosition(),
                        },
                    });
                }
                if (arcBlue.length) {
                    if (arcBlue.length < 2) {
                        throw new Error('wtf');
                    }
                    data.addSliders({
                        b: arcBlue[0].time,
                        tb: arcBlue[1].time,
                        c: arcBlue[0].color,
                        d: arcBlue[0].direction,
                        tc: arcBlue[1].direction,
                        x: arcBlue[0].posX,
                        y: arcBlue[0].posY,
                        tx: arcBlue[1].posX,
                        ty: arcBlue[1].posY,
                        customData: {
                            noteJumpMovementSpeed: arcBlue[0].customData.noteJumpMovementSpeed,
                            noteJumpStartBeatOffset: arcBlue[0].customData.noteJumpStartBeatOffset,
                            coordinates: arcBlue[0].getPosition(),
                            tailCoordinates: arcBlue[1].getPosition(),
                        },
                    });
                }
            }
        }
    }

    data.customData.fakeColorNotes?.push(...fakeNotes.map((n) => n.toObject()));
}
