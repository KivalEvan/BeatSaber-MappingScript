import * as bsmap from '../../depsLocal.ts';
const { noodleExtensions: NE } = bsmap.ext;

export function postProcess(data: bsmap.v3.DifficultyData) {
    bsmap.logger.info('Run Post Process');
    NE.setUninteractible(data.obstacles, true);
    NE.setUninteractible(data.bombNotes, true);
}
