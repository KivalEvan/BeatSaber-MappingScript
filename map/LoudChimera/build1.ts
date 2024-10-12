import { ext, logger, NoteJumpSpeed, TimeProcessor, v3 } from '../../depsLocal.ts';

const { NE } = ext;
const { between } = ext.selector;

export function build1(
   data: types.wrapper.IWrapBeatmap,
   BPM: TimeProcessor,
   NJS: NoteJumpSpeed,
) {
   logger.info('Run Build 1');
}
