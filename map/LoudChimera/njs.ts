import * as bsmap from '../../depsLocal.ts';
import { getRepeatArray } from './helpers.ts';
const { noodleExtensions: NE } = bsmap.ext;
const { between } = bsmap.ext.selector;

export function njsVibe(
    data: bsmap.v3.DifficultyData,
    BPM: bsmap.BeatPerMinute,
    NJS: bsmap.NoteJumpSpeed,
    nerf = false,
) {
    bsmap.logger.info('Run NJS Vibe');
    data.colorNotes.forEach((o) => {
        o.customData.noteJumpMovementSpeed = NJS.value;
        o.customData.noteJumpStartBeatOffset = NJS.offset;
    });
    data.sliders.forEach((s) => {
        s.customData.noteJumpMovementSpeed = NJS.value;
        s.customData.noteJumpStartBeatOffset = NJS.offset;
    });
    data.burstSliders.forEach((bs) => {
        bs.customData.noteJumpMovementSpeed = NJS.value;
        bs.customData.noteJumpStartBeatOffset = NJS.offset;
    });
    data.bombNotes.forEach((b) => {
        b.customData.noteJumpMovementSpeed = NJS.value;
        b.customData.noteJumpStartBeatOffset = NJS.offset;
    });
    data.obstacles.forEach((o) => {
        o.customData.noteJumpMovementSpeed = NJS.value;
        o.customData.noteJumpStartBeatOffset = NJS.offset;
    });

    const slowBuildSection = [264, 776];
    for (const t of slowBuildSection) {
        NE.setNJS(between(data.colorNotes, t - 64, t + 64), {
            bpm: BPM,
            njs: NJS.value * 0.9375,
            jd: NJS.jd,
        });
        NE.setNJS(between(data.colorNotes, t + 112, t + 126), {
            bpm: BPM,
            njs: NJS.value * 1.0625,
            jd: NJS.jd,
        });
        NE.setNJS(between(data.colorNotes, t + 72, t + 96), {
            bpm: BPM,
            njs: NJS.value * 0.9375,
            jd: NJS.jd,
        });
        NE.gradientNJS(between(data.colorNotes, t + 64, t + 72), {
            bpm: BPM,
            njsStart: NJS.value * 0.9375,
            njsEnd: NJS.value * 0.875,
            jd: NJS.jd,
        });
        NE.gradientNJS(between(data.colorNotes, t + 96, t + 112), {
            bpm: BPM,
            njsStart: NJS.value * 0.875,
            njsEnd: NJS.value * 1.0625,
            jd: NJS.jd,
        });
    }

    const fastPewPew: number[] = [...getRepeatArray(394, 16, 8), ...getRepeatArray(906, 16, 8)];
    const fppNJS = bsmap.NoteJumpSpeed.create(BPM, NJS.value * 0.875);
    for (const fpp of fastPewPew) {
        const notes = between(data.colorNotes, fpp, fpp + 6);
        NE.setNoteGravity(notes, false);
        NE.setNJS(notes, { bpm: BPM, njs: fppNJS, jd: NJS.jd });
        NE.simultaneousSpawn(notes, 4, -2);
        NE.gradientNJS(between(data.colorNotes, fpp + 6.01, fpp + 10), {
            bpm: BPM,
            njsStart: NJS.value * 0.9,
            njsEnd: NJS.value,
            jd: NJS.calcJD() + 0.5,
        });
    }

    const slowPart = [136, 648];
    for (const sp of slowPart) {
        NE.gradientNJS(between(data.colorNotes, sp + 0.001, sp + 16), {
            bpm: BPM,
            njsStart: NJS.value * 0.975,
            njsEnd: NJS.value * 0.625,
            jd: NJS.calcJD(),
        });
        NE.gradientNJS(between(data.obstacles, sp + 0.001, sp + 16), {
            bpm: BPM,
            njsStart: NJS.value * 0.975,
            njsEnd: NJS.value * 0.625,
            jd: NJS.calcJD(),
        });
        NE.setNJS(between(data.colorNotes, sp + 16.001, sp + 63.999), {
            bpm: BPM,
            njs: NJS.value * 0.625,
        });
        NE.setNJS(between(data.obstacles, sp + 16.001, sp + 63.999), {
            bpm: BPM,
            njs: NJS.value * 0.625,
        });
        NE.simultaneousSpawn(
            between(data.colorNotes, sp + 16.001, sp + 63.999),
            1.03125,
            bsmap.NoteJumpSpeed.create(BPM, NJS.value * 0.625, 0),
        );
        NE.simultaneousSpawn(
            between(data.obstacles, sp + 16.001, sp + 63.999),
            1.03125,
            bsmap.NoteJumpSpeed.create(BPM, NJS.value * 0.625, 0),
        );
    }
    NE.setNJS(between(data.colorNotes, 8, 70), {
        bpm: BPM,
        njs: NJS.value * 0.9375,
        jd: NJS.jd,
    });
    NE.gradientNJS(between(data.colorNotes, 72, 120), {
        bpm: BPM,
        njsStart: NJS.value * 0.9375,
        njsEnd: NJS.value,
        jd: NJS.jd,
    });
    NE.setNJS(between(data.colorNotes, 1160, 1288), {
        bpm: BPM,
        njs: NJS.value * 0.9375,
        jd: NJS.jd,
    });
    NE.gradientNJS(between(data.colorNotes, 1160, 1176), {
        bpm: BPM,
        njsStart: NJS.value,
        njsEnd: NJS.value * 0.9375,
        jd: NJS.jd,
    });
    NE.gradientNJS(between(data.colorNotes, 1224, 1256), {
        bpm: BPM,
        njsStart: NJS.value * 0.9375,
        njsEnd: NJS.value,
        jd: NJS.jd,
    });
    NE.setNJS(between(data.colorNotes, 1256, 1288), {
        bpm: BPM,
        njs: NJS.value,
        jd: NJS.jd,
    });
}
