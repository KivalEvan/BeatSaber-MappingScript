import { ext, types } from '@bsmap';
import { Materials } from './materials.ts';

const TORII_WIDTH = 8;
const TORII_WIDTH_EXTEND = 6;
const TORII_HEIGHT = 9;
const TORII_SCALE = 1;
const TORII_POSITION: types.Vector3 = [0, 0, -12];

export const TORII_MODEL_DATA: types.v3.IChromaEnvironment[] = [];

export function create(): types.wrapper.ICustomDataDifficulty {
   const environment: types.v3.IChromaEnvironment[] = [];
   TORII_MODEL_DATA.length = 0;

   const cubeBlock = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cube', material: Materials.STANDARD },
      },
      [0, 0, 0],
   );
   const cubeToriiBlock = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cube', material: Materials.TORII_STANDARD },
      },
      [0, 0, 0],
   );
   const pillarBlock = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cylinder', material: Materials.STANDARD },
      },
      [0, 0, 0],
   );
   const pillarToriiBlock = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cylinder', material: Materials.TORII_STANDARD },
      },
      [0, 0, 0],
   );

   const torii: types.v3.IChromaEnvironment[] = [];
   for (let mirror = -1; mirror <= 1; mirror += 2) {
      pillarToriiBlock.place(
         {
            position: [(mirror * TORII_WIDTH) / 2, TORII_HEIGHT / 2, 0],
            scale: [1, TORII_HEIGHT / 2, 1],
         },
         torii,
      );
      cubeToriiBlock.place(
         {
            position: [(mirror * TORII_WIDTH) / 2, TORII_HEIGHT - 1 + 0.25, 0],
            scale: [1.75, 0.5, 0.125],
         },
         torii,
      );
      cubeBlock.place(
         {
            position: [
               (mirror * TORII_WIDTH) / 2 +
               (mirror * TORII_WIDTH_EXTEND) / 2 +
               mirror * 0.625,
               TORII_HEIGHT + 1.0625,
               0,
            ],
            scale: [1.1875, 0.5, 1],
            rotation: [0, 0, mirror * 15],
         },
         torii,
      );
      pillarToriiBlock.place(
         {
            position: [(mirror * TORII_WIDTH) / 2, TORII_HEIGHT + 0.125, 0],
            scale: [1.25, 0.125, 1.25],
         },
         torii,
      );
      pillarToriiBlock.place(
         {
            position: [
               (mirror * TORII_WIDTH) / 2,
               TORII_HEIGHT - 1 + 0.0625,
               0,
            ],
            scale: [1.125, 0.0625, 1.125],
         },
         torii,
      );
      pillarToriiBlock.place(
         {
            position: [
               (mirror * TORII_WIDTH) / 2,
               TORII_HEIGHT - 2 + 0.1875,
               0,
            ],
            scale: [1.125, 0.0625, 1.125],
         },
         torii,
      );
      pillarBlock.place(
         {
            position: [(mirror * TORII_WIDTH) / 2, 0.25, 0],
            scale: [1.25, 0.125, 1.25],
         },
         torii,
      );
      pillarBlock.place(
         {
            position: [(mirror * TORII_WIDTH) / 2, -0.375, 0],
            scale: [1.375, 0.375, 1.375],
         },
         torii,
      );
      cubeBlock.place(
         {
            position: [(mirror * TORII_WIDTH) / 2, -0.5, 0],
            scale: [1, 0.5, 1],
         },
         torii,
      );
      cubeBlock.place(
         {
            position: [(mirror * TORII_WIDTH) / 2, -0.625, 0],
            scale: [1.25, 0.375, 12],
         },
         torii,
      );
      cubeBlock.place(
         {
            position: [mirror * (TORII_WIDTH / 2 + 1.5), -1.5, -4],
            scale: [1, 0.375, 10],
         },
         torii,
      );
      cubeToriiBlock.place(
         {
            position: [(mirror * TORII_WIDTH) / 2, TORII_HEIGHT / 2 - 1.75, 0],
            scale: [0.1875, 0.5, 7.5],
         },
         torii,
      );
      cubeToriiBlock.place(
         {
            position: [
               (mirror * TORII_WIDTH) / 2,
               TORII_HEIGHT / 2 - 1.75 + 0.28125,
               0,
            ],
            scale: [0.3125, 0.08375, 7.625],
         },
         torii,
      );
      cubeToriiBlock.place(
         {
            position: [(mirror * TORII_WIDTH) / 2, TORII_HEIGHT / 2 - 3.75, 0],
            scale: [0.1875, 0.5, 7.5],
         },
         torii,
      );
      cubeToriiBlock.place(
         {
            position: [
               (mirror * TORII_WIDTH) / 2,
               TORII_HEIGHT / 2 - 3.75 + 0.28125,
               0,
            ],
            scale: [0.3125, 0.08375, 7.625],
         },
         torii,
      );
      cubeToriiBlock.place(
         {
            position: [
               (mirror * TORII_WIDTH) / 2,
               TORII_HEIGHT / 2 - 1.625 + 0.28125,
               0,
            ],
            scale: [0.1875, 0.25, 1.25],
         },
         torii,
      );
      cubeToriiBlock.place(
         {
            position: [
               (mirror * TORII_WIDTH) / 2,
               TORII_HEIGHT / 2 - 3.625 + 0.28125,
               0,
            ],
            scale: [0.1875, 0.25, 1.25],
         },
         torii,
      );
      for (let z = -1; z <= 1; z += 2) {
         cubeToriiBlock.place(
            {
               position: [
                  (mirror * TORII_WIDTH) / 2,
                  TORII_HEIGHT / 2 - 1.625 + 0.28125,
                  z * 3,
               ],
               scale: [0.1875, 0.25, 0.875],
            },
            torii,
         );
         cubeToriiBlock.place(
            {
               position: [
                  (mirror * TORII_WIDTH) / 2,
                  TORII_HEIGHT / 2 - 3.625 + 0.28125,
                  z * 3,
               ],
               scale: [0.1875, 0.25, 0.875],
            },
            torii,
         );
         cubeToriiBlock.place(
            {
               position: [
                  (mirror * TORII_WIDTH) / 2,
                  (TORII_HEIGHT / 5) * 2 + 0.1875 / 2,
                  z * 3,
               ],
               scale: [0.75, 0.1875, 0.75],
            },
            torii,
         );
         cubeBlock.place(
            {
               position: [
                  (mirror * TORII_WIDTH) / 2,
                  (TORII_HEIGHT / 5) * 2 + 0.1875 + 0.03125,
                  z * 3,
               ],
               scale: [1, 0.0625, 1],
            },
            torii,
         );
         cubeBlock.place(
            {
               position: [
                  (mirror * TORII_WIDTH) / 2,
                  (TORII_HEIGHT / 5) * 2 + 0.1875 + 0.03125 * 3,
                  z * 3,
               ],
               scale: [0.75, 0.0625, 0.75],
            },
            torii,
         );
         cubeBlock.place(
            {
               position: [
                  (mirror * TORII_WIDTH) / 2,
                  (TORII_HEIGHT / 5) * 2 + 0.1875 + 0.03125 * 5,
                  z * 3,
               ],
               scale: [0.375, 0.0625, 0.375],
            },
            torii,
         );
         cubeBlock.place(
            {
               position: [
                  (mirror * TORII_WIDTH) / 2,
                  (TORII_HEIGHT / 5) * 2 + 0.1875 + 0.03125 * 7,
                  z * 3,
               ],
               scale: [0.0625, 0.0625, 0.0625],
            },
            torii,
         );
         pillarToriiBlock.place(
            {
               position: [(mirror * TORII_WIDTH) / 2, TORII_HEIGHT / 5, z * 3],
               scale: [0.6875, TORII_HEIGHT / 5, 0.6875],
            },
            torii,
         );
         pillarBlock.place(
            {
               position: [(mirror * TORII_WIDTH) / 2, 0.125, z * 3],
               scale: [0.75, 0.0625, 0.75],
            },
            torii,
         );
         pillarBlock.place(
            {
               position: [(mirror * TORII_WIDTH) / 2, -0.375, z * 3],
               scale: [0.875, 0.375, 0.875],
            },
            torii,
         );
         cubeBlock.place(
            {
               position: [(mirror * TORII_WIDTH) / 2, -0.5, z * 3],
               scale: [1, 0.5, 1],
            },
            torii,
         );
      }
      // cubeBlock.place(
      //    {
      //       position: [0, toriiHeight - 1 + 0.5, mirror * 0.4375],
      //       scale: [1.25, 1.75, 0.125],
      //       rotation: [mirror * 5, 0, 0],
      //    },
      //    torii
      // );
   }
   cubeBlock.place(
      {
         position: [0, TORII_HEIGHT + 0.9375, 0],
         scale: [TORII_WIDTH + TORII_WIDTH_EXTEND + 0.25, 0.5, 1],
      },
      torii,
   );
   cubeToriiBlock.place(
      {
         position: [0, TORII_HEIGHT + 0.625, 0],
         scale: [TORII_WIDTH + TORII_WIDTH_EXTEND + 1, 0.5, 0.25],
      },
      torii,
   );
   cubeToriiBlock.place(
      {
         position: [0, TORII_HEIGHT + 0.4375, 0],
         scale: [TORII_WIDTH + TORII_WIDTH_EXTEND, 0.5, 0.5],
      },
      torii,
   );
   cubeToriiBlock.place(
      {
         position: [0, TORII_HEIGHT - 2 + 0.625, 0],
         scale: [TORII_WIDTH + TORII_WIDTH_EXTEND, 0.75, 0.5],
      },
      torii,
   );
   cubeToriiBlock.place(
      {
         position: [0, TORII_HEIGHT - 2 + 0.9375, 0],
         scale: [TORII_WIDTH + TORII_WIDTH_EXTEND + 0.125, 0.125, 0.5625],
      },
      torii,
   );
   cubeToriiBlock.place(
      {
         position: [0, TORII_HEIGHT - 1 + 0.5625 + 0.03125, 0],
         scale: [1, 1.18755, 0.25],
      },
      torii,
   );

   const toriiGroup = ext.heck.chroma.EnvironmentGroup.create(torii, [0, 0, 0]);
   toriiGroup.place(
      {
         position: TORII_POSITION,
         scale: [TORII_SCALE, TORII_SCALE, TORII_SCALE],
      },
      environment,
   );

   TORII_MODEL_DATA.push(...environment);
   return { environment };
}
