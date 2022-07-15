import * as bsmap from '../../depsLocal.ts';
const { noodleExtensions: NE } = bsmap.ext;
const { between, at } = bsmap.ext.selector;
const { random } = bsmap.utils;

export function drop2(data: bsmap.v3.DifficultyData, BPM: bsmap.BeatPerMinute, NJS: bsmap.NoteJumpSpeed, nerf = false) {
    bsmap.logger.info('Run Drop 2');
    const fakeNotes: bsmap.v3.ColorNote[] = [];
    data.customData.pointDefinitions!.slashPosition = [
        [0, 0, 4, 0],
        [0, 0, 2, 1 / 64, 'easeStep'],
        [0, 0, 4.5, 1, 'easeOutQuad'],
    ];
    data.customData.pointDefinitions!.slashExpand = [
        [1, 0.75, 0.75, 0],
        [0, 36, 0, 0.875, 'easeInOutQuad'],
    ];
    data.customData.pointDefinitions!.slashGlitch = [
        [0, 0],
        [0.75, 1 / 64, 'easeStep'],
        [0, 0.375],
    ];
    data.customData.customEvents?.push({
        b: 0,
        t: 'AssignPathAnimation',
        d: {
            track: 'trackDrop2PewPew',
            dissolve: 'slashGlitch',
            dissolveArrow: 'pointZero',
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
    const noteSwapBullshit = [8, 40];

    for (const dt of dropTiming) {
        fakeNotes.push(
            ...at(data.colorNotes, dt, BPM).map((n) =>
                n
                    .clone()
                    .setTime(n.time + 1.99)
                    .setDirection(8)
                    .addCustomData({
                        track: 'trackDrop2PewPew',
                        noteJumpStartBeatOffset: 0,
                        uninteractable: true,
                        localRotation: [0, 0, (180 + (bsmap.NoteCutAngle[n.direction] || 0)) % 360],
                    })
            ),
        );
        for (let repeat = 0; repeat <= 64; repeat += 64) {
            fakeNotes.push(
                ...at(
                    data.colorNotes,
                    glitchShort.map((n) => n + dt + repeat),
                    BPM,
                ).map((n) => {
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
                                n.getPosition()[0] + (bsmap.NoteCutDirectionSpace[n.direction][0] || 0),
                                n.getPosition()[1] + (bsmap.NoteCutDirectionSpace[n.direction][1] || 0),
                            ],
                        },
                    });
                    return n
                        .clone()
                        .setTime(n.time + 0.99)
                        .setDirection(8)
                        .addCustomData({
                            track: 'trackDrop2PewPew',
                            uninteractable: true,
                            noteJumpStartBeatOffset: -1,
                            localRotation: [0, 0, (180 + (bsmap.NoteCutAngle[n.direction] || 0)) % 360],
                        });
                }),
            );
            for (const gl of glitchLong) {
                if (!repeat && !gl) {
                    continue;
                }
                fakeNotes.push(
                    ...at(data.colorNotes, dt + gl + repeat, BPM).map((n) => {
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
                                    n.getPosition()[0] + (bsmap.NoteCutDirectionSpace[n.direction][0] || 0) * 2,
                                    n.getPosition()[1] + (bsmap.NoteCutDirectionSpace[n.direction][1] || 0) * 2,
                                ],
                            },
                        });
                        return n
                            .clone()
                            .setTime(n.time + 1.99)
                            .setDirection(8)
                            .addCustomData({
                                track: 'trackDrop2PewPew',
                                uninteractable: true,
                                noteJumpStartBeatOffset: 0,
                                localRotation: [0, 0, (180 + (bsmap.NoteCutAngle[n.direction] || 0)) % 360],
                            });
                    }),
                );
            }
            for (const nsb of noteSwapBullshit) {
                const ns = between(data.colorNotes, dt + repeat + nsb, dt + repeat + nsb + 3);
                NE.simultaneousSpawn(ns, 2, 0);

                const notes = at(data.colorNotes, dt + repeat + nsb - 2);
                fakeNotes.push(
                    ...notes.map((n) =>
                        n.clone().addCustomData({
                            animation: {
                                dissolve: [
                                    [random(0, 0.1), 0],
                                    [random(0, 0.1), 0.025],
                                    [random(0, 0.1), 0.05],
                                    [random(0, 0.1), 0.075],
                                    [random(0, 0.1), 0.1],
                                    [random(0, 0.1), 0.125],
                                    [random(0, 0.1), 0.15],
                                    [random(0, 0.1), 0.175],
                                    [random(0, 0.1), 0.2],
                                    [random(0, 0.1), 0.225],
                                    [random(0, 0.1), 0.25],
                                    [random(0, 0.1), 0.275],
                                    [random(0, 0.1), 0.3],
                                    [random(0, 0.1), 0.325],
                                    [random(0, 0.1), 0.35],
                                    [random(0, 0.1), 0.375],
                                    [random(0, 0.1), 0.4],
                                    [random(0, 0.1), 0.425],
                                    [random(0, 0.1), 0.45],
                                    [random(0, 0.1), 0.475],
                                    [0, 0.5],
                                ],
                            },
                        })
                    ),
                );
            }
        }
    }

    data.colorNotes.push(...fakeNotes);
}
