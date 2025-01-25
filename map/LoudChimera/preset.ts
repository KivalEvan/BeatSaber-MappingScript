import { logger, types, v3 } from '@bsmap';
import UFO from './ufo.ts';

export function preset(data: types.wrapper.IWrapBeatmap) {
   logger.info('Run Preset');
   data.difficulty.customData.pointDefinitions = data.difficulty.customData.pointDefinitions ?? {};
   data.difficulty.customData.customEvents = data.difficulty.customData.customEvents ?? [];
   data.difficulty.customData.environment = [];
   data.difficulty.customData.materials = {};
   data.difficulty.customData.fakeColorNotes = [];
   data.difficulty.customData.fakeBombNotes = [];
   data.difficulty.customData.fakeObstacles = [];
   data.difficulty.customData.fakeBurstSliders = [];
   data.bombNotes = [];
   UFO.reset();

   data.difficulty.customData.materials.lightMaterial = { shader: 'TransparentLight' };
   data.difficulty.customData.materials.lightMaterialOpaque = { shader: 'OpaqueLight' };
   data.difficulty.customData.pointDefinitions.pZero = [[0, 0]];
   data.difficulty.customData.pointDefinitions.pqOne = [
      [0, 0],
      [1, 1 / 64],
   ];
}
