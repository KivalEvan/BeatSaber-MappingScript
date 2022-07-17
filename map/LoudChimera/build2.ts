import * as bsmap from '../../depsLocal.ts';
const { noodleExtensions: NE } = bsmap.ext;
const { between } = bsmap.ext.selector;

export function build2(
    data: bsmap.v3.DifficultyData,
    BPM: bsmap.BeatPerMinute,
    NJS: bsmap.NoteJumpSpeed,
    nerf = false
) {
    bsmap.logger.info('Run Build 2');
    const fakeNotes = [];
    const slowBuildTiming = [264, 778];

    for (const sbt of slowBuildTiming) {
        const notes = between(data.colorNotes, sbt, sbt + 112);

        notes.forEach((n) => n.addCustomData({ track: 'tBuild' }));

        for (let t = sbt; t < sbt + 64; t += 2) {
            data.customData.customEvents?.push({
                b: t,
                t: 'AnimateTrack',
                d: {
                    track: 'tBuild',
                    duration: 0.75,
                    dissolve: [
                        [bsmap.utils.random(0.8, 0.9), 0],
                        [1, 1],
                    ],
                    dissolveArrow: [
                        [bsmap.utils.random(0.45, 0.55), 0],
                        [1, 1],
                    ],
                },
            });
        }
        for (let t = sbt + 64; t < sbt + 112; t += 2) {
            data.customData.customEvents?.push(
                {
                    b: t,
                    t: 'AnimateTrack',
                    d: {
                        track: 'tBuild',
                        duration: 0.75,
                        dissolve: [
                            [
                                bsmap.utils.random(0.8, 0.9) -
                                    bsmap.utils.normalize(t, sbt + 64, sbt + 112) *
                                        0.25,
                                0,
                            ],
                            [1, 1],
                        ],
                        dissolveArrow: [
                            [
                                bsmap.utils.random(0.45, 0.55) -
                                    bsmap.utils.normalize(t, sbt + 64, sbt + 112) *
                                        0.25,
                                0,
                            ],
                            [1, 1],
                        ],
                    },
                },
                {
                    b: t + 1,
                    t: 'AnimateTrack',
                    d: {
                        track: 'tBuild',
                        duration: 0.75,
                        dissolve: [
                            [
                                bsmap.utils.random(0.95, 1) -
                                    bsmap.utils.normalize(t, sbt + 64, sbt + 112) *
                                        0.25,
                                0,
                            ],
                            [1, 1],
                        ],
                        dissolveArrow: [
                            [
                                bsmap.utils.random(0.95, 1) -
                                    bsmap.utils.normalize(t, sbt + 64, sbt + 112) *
                                        0.75,
                                0,
                            ],
                            [1, 1],
                        ],
                    },
                }
            );
        }

        // fakeNotes.push(...notes)
    }

    data.customData.fakeColorNotes!.push(...fakeNotes.map((n) => n.toObject()));
}
