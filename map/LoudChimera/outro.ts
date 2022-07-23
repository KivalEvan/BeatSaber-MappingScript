import * as bsmap from '../../depsLocal.ts';
import { connectSlider } from './helpers.ts';
const { noodleExtensions: NE } = bsmap.ext;
const { between } = bsmap.ext.selector;

export function outro(
    data: bsmap.v3.DifficultyData,
    BPM: bsmap.BeatPerMinute,
    NJS: bsmap.NoteJumpSpeed,
) {
    bsmap.logger.info('Run Outro');
    connectSlider(data, between(data.colorNotes, 1222, 1224));
    connectSlider(data, between(data.colorNotes, 1286, 1288));
}
