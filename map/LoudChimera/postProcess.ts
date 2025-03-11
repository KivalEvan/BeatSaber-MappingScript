import { Beatmap, ext, logger } from '@bsmap';

const { noodle: NE } = ext.heck;

export function postProcess(data: Beatmap) {
   logger.info('Run Post Process');
   NE.setUninteractible(data.obstacles, true);
   NE.setUninteractible(data.bombNotes, true);
}
