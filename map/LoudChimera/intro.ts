import { at } from '../../../BeatSaber-Deno/extensions/selector/time.ts';
import { BeatPerMinute, ext, logger, NoteDirectionAngle, NoteJumpSpeed, v3 } from '../../depsLocal.ts';
import { connectSlider } from './helpers.ts';
const { NE } = ext;
const { between } = ext.selector;

export function intro(data: v3.Difficulty, BPM: BeatPerMinute, NJS: NoteJumpSpeed) {
    logger.info('Run Intro');
    connectSlider(data, between(data.colorNotes, 70, 72));
    for (let t = 10; t < 130; t += 4) {
        if (t === 70) {
            continue;
        }
        data.customData.fakeColorNotes?.push(
            ...at(data.colorNotes, t).map((n) =>
                n
                    .clone()
                    .func((m) => (m.time += 2.002))
                    .setDirection(8)
                    .addCustomData({
                        uninteractable: true,
                        spawnEffect: true,
                        localRotation: [0, 0, (180 + (NoteDirectionAngle[n.direction] || 0)) % 360],
                        noteJumpMovementSpeed: 10,
                        noteJumpStartBeatOffset: -NoteJumpSpeed.HJD_START + 2,
                        animation: {
                            definitePosition: 'slashPosition',
                            dissolve: 'slashGlitch',
                            dissolveArrow: 'pZero',
                        },
                    })
                    .toJSON()
            ),
        );
    }
}
