import { BeatPerMinute, ext, logger, NoteJumpSpeed, v3 } from '../../depsLocal.ts';

const { NE } = ext;
const { between } = ext.selector;

export function build1(
   data: v3.Difficulty,
   BPM: BeatPerMinute,
   NJS: NoteJumpSpeed,
) {
   logger.info('Run Build 1');
}
