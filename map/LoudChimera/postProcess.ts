import { ext, logger, v3 } from '../../depsLocal.ts';

const { NE } = ext;

export function postProcess(data: v3.Difficulty) {
    logger.info('Run Post Process');
    NE.setUninteractible(data.obstacles, true);
    NE.setUninteractible(data.bombNotes, true);
}
