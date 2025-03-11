import { Beatmap, ext, logger, NoteJumpSpeed, TimeProcessor, types, v3 } from '@bsmap';

const { noodle: NE } = ext.heck;
const { between } = ext.selector;

export function color(
   data: Beatmap,
   BPM: TimeProcessor,
   NJS: NoteJumpSpeed,
) {
   if (!data.filename.includes('OneSaber')) {
      logger.info('Not One Saber, skipping color');
      return;
   }
   logger.info('Run Color');
}
