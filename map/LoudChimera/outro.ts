import * as bsmap from '../../depsLocal.ts';
const { noodleExtensions: NE } = bsmap.ext;
const { between } = bsmap.ext.selector;

export function outro(data: bsmap.v3.DifficultyData, BPM: bsmap.BeatPerMinute, NJS: bsmap.NoteJumpSpeed, nerf = false) {
    bsmap.logger.info('Run Outro');
}
