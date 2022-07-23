import * as bsmap from '../../depsLocal.ts';
import { connectSlider } from './helpers.ts';
const { noodleExtensions: NE } = bsmap.ext;
const { between } = bsmap.ext.selector;

export function intro(
    data: bsmap.v3.DifficultyData,
    BPM: bsmap.BeatPerMinute,
    NJS: bsmap.NoteJumpSpeed,
) {
    bsmap.logger.info('Run Intro');
    connectSlider(data, between(data.colorNotes, 70, 72));
}
