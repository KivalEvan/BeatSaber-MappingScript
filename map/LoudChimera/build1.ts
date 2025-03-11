import { Beatmap, ext, logger, NoteJumpSpeed, TimeProcessor, types, v3 } from '@bsmap';

const { noodle: NE } = ext.heck;
const { between } = ext.selector;

export function build1(
   data: Beatmap,
   BPM: TimeProcessor,
   NJS: NoteJumpSpeed,
) {
   logger.info('Run Build 1');
}
