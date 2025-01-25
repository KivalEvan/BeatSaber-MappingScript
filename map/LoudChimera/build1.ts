import { ext, logger, NoteJumpSpeed, TimeProcessor, types, v3 } from '@bsmap';

const { ne: NE } = ext;
const { between } = ext.selector;

export function build1(
   data: types.wrapper.IWrapBeatmap,
   BPM: TimeProcessor,
   NJS: NoteJumpSpeed,
) {
   logger.info('Run Build 1');
}
