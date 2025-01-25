import { ext, logger, types, v3 } from '@bsmap';

const { ne: NE } = ext;

export function postProcess(data: types.wrapper.IWrapBeatmap) {
   logger.info('Run Post Process');
   NE.setUninteractible(data.obstacles, true);
   NE.setUninteractible(data.bombNotes, true);
}
