import * as bsmap from '../../depsLocal.ts';
const { noodleExtensions: NE } = bsmap.ext;

export function slow(
    data: bsmap.v3.DifficultyData,
    BPM: bsmap.BeatPerMinute,
    NJS: bsmap.NoteJumpSpeed,
    nerf = false,
) {
    bsmap.logger.info('Run Slow');
    const slowTiming = [136, 648];
}
