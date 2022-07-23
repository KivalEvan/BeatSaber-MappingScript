import * as bsmap from '../../depsLocal.ts';
const { noodleExtensions: NE } = bsmap.ext;
const { between } = bsmap.ext.selector;

export function color(
    data: bsmap.v3.DifficultyData,
    BPM: bsmap.BeatPerMinute,
    NJS: bsmap.NoteJumpSpeed,
) {
    if (!data.fileName.includes('OneSaber')) {
        bsmap.logger.info('Not One Saber, skipping color');
        return;
    }
    bsmap.logger.info('Run Color');
}
