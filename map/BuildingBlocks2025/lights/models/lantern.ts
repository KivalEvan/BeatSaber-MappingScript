import { ext, types } from '@bsmap';
import { Materials } from './materials.ts';

const lanternBaseSize = 0.4375;
const lanternBaseHeight = 0.03125;
const lanternSize = 0.3;
const lanternHeight = 0.4375;
const lanternGap = 0.0625;
const lanternBorder = 0.01875;

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

   const lantern: types.v3.IChromaEnvironment[] = [];
   // base
   cubeBlock.place(
      {
         position: [0, lanternBaseHeight / 2, 0],
         scale: [lanternBaseSize, lanternBaseHeight, lanternBaseSize],
      },
      lantern,
   );
   // border vertical
   cubeBlock.place(
      {
         position: [
            lanternSize / 2,
            lanternBaseHeight / 2 + lanternHeight / 2 + lanternGap / 4 + lanternBorder / 2,
            lanternSize / 2,
         ],
         scale: [lanternBorder, lanternHeight + lanternGap / 2 + lanternBorder / 2, lanternBorder],
      },
      lantern,
   );
   cubeBlock.place(
      {
         position: [
            lanternSize / 2,
            lanternBaseHeight / 2 + lanternHeight / 2 + lanternGap / 4 + lanternBorder / 2,
            -lanternSize / 2,
         ],
         scale: [lanternBorder, lanternHeight + lanternGap / 2 + lanternBorder / 2, lanternBorder],
      },
      lantern,
   );
   cubeBlock.place(
      {
         position: [
            -lanternSize / 2,
            lanternBaseHeight / 2 + lanternHeight / 2 + lanternGap / 4 + lanternBorder / 2,
            lanternSize / 2,
         ],
         scale: [lanternBorder, lanternHeight + lanternGap / 2 + lanternBorder / 2, lanternBorder],
      },
      lantern,
   );
   cubeBlock.place(
      {
         position: [
            -lanternSize / 2,
            lanternBaseHeight / 2 + lanternHeight / 2 + lanternGap / 4 + lanternBorder / 2,
            -lanternSize / 2,
         ],
         scale: [lanternBorder, lanternHeight + lanternGap / 2 + lanternBorder / 2, lanternBorder],
      },
      lantern,
   );
   // border horizontal
   cubeBlock.place(
      {
         position: [lanternSize / 2, lanternBaseHeight + lanternHeight + lanternGap / 2, 0],
         scale: [lanternBorder, lanternBorder, lanternSize + lanternBorder],
      },
      lantern,
   );
   cubeBlock.place(
      {
         position: [-lanternSize / 2, lanternBaseHeight + lanternHeight + lanternGap / 2, 0],
         scale: [lanternBorder, lanternBorder, lanternSize + lanternBorder],
      },
      lantern,
   );
   cubeBlock.place(
      {
         position: [0, lanternBaseHeight + lanternHeight + lanternGap / 2, lanternSize / 2],
         scale: [lanternSize + lanternBorder, lanternBorder, lanternBorder],
      },
      lantern,
   );
   cubeBlock.place(
      {
         position: [0, lanternBaseHeight + lanternHeight + lanternGap / 2, -lanternSize / 2],
         scale: [lanternSize + lanternBorder, lanternBorder, lanternBorder],
      },
      lantern,
   );
   // light itself
   cubeLight.place(
      {
         position: [0, lanternBaseHeight + lanternGap / 2 + lanternHeight / 2, 0],
         scale: [lanternSize, lanternHeight, lanternSize],
      },
      lantern,
   );

   const lanternGroup = ext.heck.chroma.EnvironmentGroup.create(lantern, [0, 0, 0]);

   return environment;
}
