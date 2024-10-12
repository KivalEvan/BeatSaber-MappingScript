import { ext, logger, NoteJumpSpeed, TimeProcessor, v3 } from '../../depsLocal.ts';

const { NE } = ext;
const { between } = ext.selector;

export function color(data: types.wrapper.IWrapBeatmap, BPM: TimeProcessor, NJS: NoteJumpSpeed) {
   if (!data.filename.includes('OneSaber')) {
      logger.info('Not One Saber, skipping color');
      return;
   }
   logger.info('Run Color');
}
