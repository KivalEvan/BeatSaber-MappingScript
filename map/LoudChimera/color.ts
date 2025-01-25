import { ext, logger, NoteJumpSpeed, TimeProcessor, types, v3 } from '@bsmap';

const { ne: NE } = ext;
const { between } = ext.selector;

export function color(
   data: types.wrapper.IWrapBeatmap,
   BPM: TimeProcessor,
   NJS: NoteJumpSpeed,
) {
   if (!data.filename.includes('OneSaber')) {
      logger.info('Not One Saber, skipping color');
      return;
   }
   logger.info('Run Color');
}
