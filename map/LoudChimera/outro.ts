import { BeatPerMinute, ext, logger, NoteJumpSpeed, v3 } from '../../depsLocal.ts';
import { connectSlider } from './helpers.ts';
const { NE } = ext;
const { between } = ext.selector;

export function outro(data: v3.Difficulty, BPM: BeatPerMinute, NJS: NoteJumpSpeed) {
    logger.info('Run Outro');
    connectSlider(data, between(data.colorNotes, 1222, 1224));
    connectSlider(data, between(data.colorNotes, 1286, 1288));
}
