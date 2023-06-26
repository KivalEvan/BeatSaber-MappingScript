import { BeatPerMinute, ext, logger, NoteJumpSpeed, v3 } from '../../depsLocal.ts';

const { NE } = ext;
const { between } = ext.selector;

export function color(data: v3.Difficulty, BPM: BeatPerMinute, NJS: NoteJumpSpeed) {
   if (!data.filename.includes('OneSaber')) {
      logger.info('Not One Saber, skipping color');
      return;
   }
   logger.info('Run Color');
}
