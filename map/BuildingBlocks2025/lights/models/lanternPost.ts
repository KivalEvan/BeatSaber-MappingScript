import { ext, pickRandom, pRandomFn, types, vectorAdd, vectorMul } from '@bsmap';
import { Materials } from './materials.ts';

export function create(): types.v3.IChromaEnvironment[] {
   const environment: types.v3.IChromaEnvironment[] = [];

   const cubeBlock = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cube', material: Materials.STANDARD },
      },
      [0, 0, 0],
   );
   const cubeLight = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cube', material: Materials.OPAQUE_LIGHT },
         components: {
            ILightWithId: { type: 0 },
            TubeBloomPrePassLight: {
               colorAlphaMultiplier: 2,
               bloomFogIntensityMultiplier: 0.25,
            },
         },
      },
      [0, 0, 0],
   );
   const pillarBlock = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cylinder', material: 'ToriiStandard' },
      },
      [0, 0, 0],
   );
   const sphereBlock = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Sphere', material: 'ToriiStandard' },
      },
      [0, 0, 0],
   );

   const lanternPost: types.v3.IChromaEnvironment[] = [];
   cubeBlock.place({ position: [0, 0.125, 0], scale: [1, 0.25, 0.3125] }, lanternPost);
   cubeBlock.place({ position: [0, 0.125, 0], scale: [0.3125, 0.25, 1] }, lanternPost);
   cubeBlock.place({ position: [0, 0.375, 0], scale: [0.75, 0.25, 0.3125] }, lanternPost);
   cubeBlock.place({ position: [0, 0.375, 0], scale: [0.3125, 0.25, 0.75] }, lanternPost);
   cubeBlock.place({ position: [0, 0.75, 0], scale: [0.4375, 1.5, 0.4375] }, lanternPost);
   cubeBlock.place({ position: [0, 1.53125, 0], scale: [0.625, 0.0625, 0.625] }, lanternPost);
   cubeBlock.place({ position: [0, 1.625, 0], scale: [0.75, 0.125, 0.75] }, lanternPost);
   cubeBlock.place({ position: [0, 1.75, 0], scale: [0.625, 0.125, 0.625] }, lanternPost);
   cubeBlock.place({ position: [0.25, 2, 0.25], scale: [0.125, 0.375, 0.125] }, lanternPost);
   cubeBlock.place({ position: [0.25, 2, -0.25], scale: [0.125, 0.375, 0.125] }, lanternPost);
   cubeBlock.place({ position: [-0.25, 2, 0.25], scale: [0.125, 0.375, 0.125] }, lanternPost);
   cubeBlock.place({ position: [-0.25, 2, -0.25], scale: [0.125, 0.375, 0.125] }, lanternPost);
   cubeBlock.place({ position: [0, 2, 0], scale: [0.03125, 0.5625, 0.5625] }, lanternPost);
   cubeBlock.place({ position: [0, 2, 0], scale: [0.5625, 0.03125, 0.5625] }, lanternPost);
   cubeBlock.place({ position: [0, 2, 0], scale: [0.5625, 0.5625, 0.03125] }, lanternPost);
   cubeLight.place({ position: [0, 2, 0], scale: [0.5, 0.375, 0.5] }, lanternPost);
   cubeBlock.place({ position: [0, 2.21875, 0], scale: [0.625, 0.0625, 0.625] }, lanternPost);
   cubeBlock.place({ position: [0, 2.28125, 0], scale: [0.75, 0.0625, 0.75] }, lanternPost);
   cubeBlock.place({ position: [0, 2.34375, 0], scale: [0.875, 0.0625, 0.875] }, lanternPost);
   cubeBlock.place({ position: [0, 2.40625, 0], scale: [0.625, 0.0625, 0.625] }, lanternPost);
   cubeBlock.place({ position: [0, 2.46875, 0], scale: [0.375, 0.0625, 0.375] }, lanternPost);
   cubeBlock.place({ position: [0, 2.53125, 0], scale: [0.25, 0.0625, 0.25] }, lanternPost);
   pillarBlock.place(
      { position: [0, 2.578125, 0], scale: [0.125, 0.03125 / 2, 0.125] },
      lanternPost,
   );
   pillarBlock.place({ position: [0, 2.625, 0], scale: [0.1875, 0.125 / 4, 0.1875] }, lanternPost);
   sphereBlock.place({ position: [0, 2.65625, 0], scale: [0.1875, 0.1875, 0.1875] }, lanternPost);

   const lanternPostGroup = ext.heck.chroma.EnvironmentGroup.create(lanternPost, [0, 0, 0]);

   return environment;
}
