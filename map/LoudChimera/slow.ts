import * as bsmap from '../../depsLocal.ts';
import { lerpVec3 } from './helpers.ts';
import UFO from './ufo.ts';
const { noodleExtensions: NE, selector } = bsmap.ext;
const { normalize } = bsmap.utils;
const { between } = selector;

export function slow(
    data: bsmap.v3.DifficultyData,
    BPM: bsmap.BeatPerMinute,
    NJS: bsmap.NoteJumpSpeed,
    nerf = false
) {
    bsmap.logger.info('Run Slow');
    const slowTiming = [136, 648];
    const ufoSlow = new UFO(data, 'Slow');
    ufoSlow.hide(0);

    for (const st of slowTiming) {
        const notes = between(data.colorNotes, st + 0.001, st + 63.999);
        const obstacles = between(data.obstacles, st + 0.001, st + 63.999);
        notes.forEach((n) => {
            const noteNJS = bsmap.NoteJumpSpeed.create(
                BPM,
                n.customData.noteJumpMovementSpeed,
                n.customData.noteJumpStartBeatOffset
            );
            ufoSlow.beam(n.time - noteNJS.calcHJD(), n.color);
            n.customData.animation = {
                offsetPosition: [
                    [
                        -(n.getPosition()[0] + 0.5) * 0.6 +
                            lerpVec3(
                                normalize(
                                    n.time - noteNJS.calcHJD(),
                                    st - noteNJS.calcHJD(),
                                    st + 60 + noteNJS.calcHJD()
                                ),
                                [
                                    [0, 2, 16, 0],
                                    [2, 2, 16, 0.25, 'easeOutCubic'],
                                    [0, 2, 16, 0.5, 'easeInCubic'],
                                    [-2, 2, 16, 0.75, 'easeOutCubic'],
                                    [0, 2, 16, 1, 'easeInCubic'],
                                ]
                            )[0] /
                                0.6,
                        -(n.getPosition()[1] - 2) * 0.6 + 5.5,
                        14 / 0.6 - noteNJS.calcJD(),
                        0,
                    ],
                    [0, 0, 0, 0.25, 'easeOutQuad'],
                ],
                localRotation: [
                    [0, 0, 180, 0],
                    [0, 0, 0, 0.25, 'easeOutCubic'],
                ],
                dissolve: [
                    [0, 0],
                    [0, 1 / 64, 'easeStep'],
                    [0.5, 1 / 32, 'easeOutCubic'],
                    [1, 0.25, 'easeInCubic'],
                ],
                dissolveArrow: [
                    [0, 0],
                    [1, 1 / 64, 'easeStep'],
                    [1, 0.25, 'easeInCubic'],
                ],
            };
        });
        obstacles.forEach((o) => {
            const noteNJS = bsmap.NoteJumpSpeed.create(
                BPM,
                o.customData.noteJumpMovementSpeed,
                o.customData.noteJumpStartBeatOffset
            );
            o.customData.animation = {
                offsetPosition: [
                    [
                        -(o.getPosition()[0] + 0.5) * 0.6 +
                            lerpVec3(
                                normalize(
                                    o.time - noteNJS.calcHJD(),
                                    st - noteNJS.calcHJD(),
                                    st + 60 + noteNJS.calcHJD()
                                ),
                                [
                                    [0, 2, 16, 0],
                                    [2, 2, 16, 0.25, 'easeOutCubic'],
                                    [0, 2, 16, 0.5, 'easeInCubic'],
                                    [-2, 2, 16, 0.75, 'easeOutCubic'],
                                    [0, 2, 16, 1, 'easeInCubic'],
                                ]
                            )[0] /
                                0.6,
                        -(o.getPosition()[1] - 2) * 0.6 + 5.5,
                        18 / 0.6 - noteNJS.calcJD(),
                        0,
                    ],
                    [0, 0, 0, 0.25, 'easeOutQuad'],
                ],
                scale: [
                    [0.5, 0, 0, 0],
                    [1, 1, 1, 0.5, 'easeOutCubic'],
                ],
                dissolve: [
                    [0, 0],
                    [0, 1 / 64, 'easeStep'],
                    [0.5, 1 / 32, 'easeOutCubic'],
                    [1, 0.25, 'easeInCubic'],
                ],
            };
        });

        ufoSlow.animate(st - 4, st - 2, {
            position: [
                [-64, 2.25, 16, 0],
                [0, 2.25, 16, 1, 'easeOutCubic'],
            ],
            localRotation: [
                [-60, -20, 0, 0],
                [0, 0, 0, 1, 'easeOutCubic'],
            ],
        });
        ufoSlow.animate(st - 2, st + 29, {
            position: [
                [0, 2.25, 16, 0],
                [2, 2.25, 16, 0.5, 'easeOutCubic'],
                [0, 2.25, 16, 1, 'easeInCubic'],
            ],
            localRotation: 'ufoSpinLoop',
        });
        ufoSlow.animate(st + 29, st + 60, {
            position: [
                [0, 2.25, 16, 0],
                [-2, 2.25, 16, 0.5, 'easeOutCubic'],
                [0, 2.25, 16, 1, 'easeInCubic'],
            ],
            localRotation: 'ufoSpinLoop',
        });
        ufoSlow.animate(st + 60, st + 64, {
            position: [
                [0, 2.25, 16, 0],
                [64, 2.25, 16, 1, 'easeInExpo'],
            ],
            localRotation: [
                [0, 0, 0, 0],
                [60, 30, 0, 1, 'easeInExpo'],
            ],
        });
        ufoSlow.animate(
            st - 8,
            st + 72,
            {
                color: [
                    [0, 0, 1, 1, 0],
                    [1, 0, 1, 1, 1 / 6],
                    [1, 0, 0, 1, 2 / 6],
                    [1, 1, 0, 1, 3 / 6],
                    [0, 1, 0, 1, 4 / 6],
                    [0, 1, 1, 1, 5 / 6],
                    [0, 0, 1, 1, 1],
                ],
            },
            true
        );
        ufoSlow.hide(st + 64);
    }
}
