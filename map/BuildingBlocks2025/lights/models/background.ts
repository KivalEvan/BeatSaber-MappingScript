import { ext, types } from '@bsmap';
import { Materials } from './materials.ts';

export const BACKGROUND_LIGHT_ID: number[] = [100, 101, 102, 103, 104, 105];

export function create(): types.wrapper.ICustomDataDifficulty {
   const environment: types.v3.IChromaEnvironment[] = [];

   const cubeLight = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cube', material: Materials.TRANSPARENT_LIGHT },
         components: {
            ILightWithId: { type: 6 },
            TubeBloomPrePassLight: {
               colorAlphaMultiplier: 1,
               bloomFogIntensityMultiplier: 0.001,
            },
         },
      },
      [0, 0, 0],
   );

   const bg: types.v3.IChromaEnvironment[] = [];
   cubeLight.place(
      {
         position: [0, 0, 120],
         scale: [69420, 69420, 0.001],
         type: 6,
         id: 100,
      },
      bg,
   );
   cubeLight.place(
      {
         position: [0, 0, -120],
         scale: [69420, 69420, 0.001],
         type: 6,
         id: 101,
      },
      bg,
   );
   cubeLight.place(
      {
         position: [120, 0, 0],
         scale: [0.001, 69420, 69420],
         type: 6,
         id: 102,
      },
      bg,
   );
   cubeLight.place(
      {
         position: [-120, 0, 0],
         scale: [0.001, 69420, 69420],
         type: 6,
         id: 103,
      },
      bg,
   );
   cubeLight.place(
      {
         position: [0, 200, 0],
         scale: [69420, 0.001, 69420],
         type: 6,
         id: 104,
      },
      bg,
   );
   cubeLight.place(
      {
         position: [0, -20, 0],
         scale: [69420, 0.001, 69420],
         type: 6,
         id: 105,
      },
      bg,
   );

   const bgGroup = ext.heck.chroma.EnvironmentGroup.create(bg, [0, 0, 0]);
   bgGroup.place({ position: [0, 0, 0] }, environment);

   return { environment };
}
