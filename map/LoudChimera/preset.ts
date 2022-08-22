import { logger, v3 } from '../../depsLocal.ts';
import UFO from './ufo.ts';

export function preset(data: v3.Difficulty) {
    logger.info('Run Preset');
    data.customData.pointDefinitions = data.customData.pointDefinitions ?? {};
    data.customData.customEvents = data.customData.customEvents ?? [];
    data.customData.environment = [];
    data.customData.materials = {};
    data.customData.fakeColorNotes = [];
    data.customData.fakeBombNotes = [];
    data.customData.fakeObstacles = [];
    data.customData.fakeBurstSliders = [];
    data.bombNotes = [];
    UFO.reset();

    data.customData.materials.lightMaterial = { shader: 'TransparentLight' };
    data.customData.materials.lightMaterialOpaque = { shader: 'OpaqueLight' };
    data.customData.pointDefinitions.pZero = [[0, 0]];
    data.customData.pointDefinitions.pqOne = [
        [0, 0],
        [1, 1 / 64],
    ];
}
