import { clamp, ext, pRandomFn, shortRotDistance, types } from '@bsmap';
import * as three from 'jsr:@3d/three';
import { Materials } from './materials.ts';
import { lookAt } from '../../utils.ts';

export const FABRIC_INIT_SIZE = 16;
export const FABRIC_ITERATION = 18;
const FABRIC_BRANCH_PROBABILITY = 0.5;
const FABRIC_BRANCH_LOSS = 0.5;
const FABRIC_MIN_LENGTH = 0.375;
const FABRIC_MAX_LENGTH = 4.25;
const FABRIC_MIN_ROTATION = 5;
const FABRIC_MAX_ROTATION = 31;
const FABRIC_SCATTER = 0.42;
const FABRIC_SCATTER_MULT = 1.75;
const FABRIC_SCATTER_MAX = 1;
const FABRIC_WIDTH = 0.05;
const FABRIC_SCALE = 2;

const FABRIC_ID_START = 666;
export const FABRIC_SEQUENCES: [root: number, iteration: number, id: number][] = [];
export const FABRIC_MODEL_DATA: types.v3.IChromaEnvironment[] = [];

export function create(): types.wrapper.ICustomDataDifficulty {
   const pRandom = pRandomFn('Fabric');
   const environment: types.v3.IChromaEnvironment[] = [];
   FABRIC_SEQUENCES.length = 0;
   FABRIC_MODEL_DATA.length = 0;

   const cubeLight = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cube', material: Materials.TRANSPARENT_LIGHT },
         components: {
            ILightWithId: { type: 6 },
            TubeBloomPrePassLight: {
               colorAlphaMultiplier: 2,
               bloomFogIntensityMultiplier: 0.125,
            },
         },
      },
      [0, 0, 0],
   );

   const fabrics: {
      root: number;
      origin: types.Vector3;
      position: types.Vector3;
      iteration: number;
      branch: number;
      scatter: number;
   }[] = [];
   for (let i = 0; i < FABRIC_INIT_SIZE; i++) {
      const x = Math.cos((i / FABRIC_INIT_SIZE) * Math.PI * 2);
      const y = Math.sin((i / FABRIC_INIT_SIZE) * Math.PI * 2);
      const offset = pRandom();
      const size = pRandom(FABRIC_MIN_LENGTH, FABRIC_MAX_LENGTH);
      const position: types.Vector3 = [
         x * offset + x * size,
         y * offset + y * size,
         0,
      ];
      const origin: types.Vector3 = [x * offset, y * offset, offset / 3];
      fabrics.push({
         root: i,
         origin,
         position,
         iteration: FABRIC_ITERATION,
         branch: FABRIC_BRANCH_PROBABILITY,
         scatter: FABRIC_SCATTER,
      });
   }

   let fabricCounter = FABRIC_ID_START;
   const fabricAry: types.v3.IChromaEnvironment[] = [];
   while (fabrics.length) {
      const fabric = fabrics.pop()!;
      if (fabric.iteration === 0) {
         continue;
      }
      const origin = new three.Vector3(...fabric.origin);
      const position = new three.Vector3(...fabric.position);

      const distance = origin.distanceTo(position);
      const rotation = lookAt(fabric.origin, fabric.position);

      cubeLight.place(
         {
            position: position.toArray() as types.Vector3,
            rotation,
            scale: [FABRIC_WIDTH, FABRIC_WIDTH, distance * 2],
            type: 6,
            id: fabricCounter,
         },
         fabricAry,
      );
      FABRIC_SEQUENCES.push([fabric.root, fabric.iteration, fabricCounter++]);

      const newOrigin = origin
         .addScaledVector(position.subVectors(position, origin), 2)
         .toArray() as types.Vector3;
      let newPos: types.Vector3 = [0, 0, 0];
      let difference = 1000;
      while (
         difference < FABRIC_MIN_ROTATION ||
         difference > FABRIC_MAX_ROTATION
      ) {
         newPos = newOrigin.map(
            (x) =>
               x +
               ((pRandom(FABRIC_MIN_LENGTH, FABRIC_MAX_LENGTH) *
                     (pRandom() > 0.5 ? 1 : -1)) /
                     2) *
                  fabric.scatter,
         ) as types.Vector3;
         const newRotation = lookAt(newOrigin, newPos);
         difference = Math.max(
            ...newRotation.map((x, i) => shortRotDistance(x, rotation[i], 360)),
         );
      }

      fabrics.push({
         root: fabric.root,
         origin: newOrigin,
         position: newPos,
         branch: fabric.branch,
         iteration: fabric.iteration - 1,
         scatter: clamp(
            fabric.scatter * FABRIC_SCATTER_MULT,
            0,
            FABRIC_SCATTER_MAX,
         ),
      });
      if (pRandom() < fabric.branch) {
         fabrics.push({
            root: fabric.root,
            origin: newOrigin,
            position: newPos,
            branch: fabric.branch * FABRIC_BRANCH_LOSS,
            iteration: Math.round(fabric.iteration * FABRIC_BRANCH_LOSS),
            scatter: clamp(
               fabric.scatter * FABRIC_SCATTER_MULT,
               0,
               FABRIC_SCATTER_MAX,
            ),
         });
      }
   }

   const fabricGroup = ext.heck.chroma.EnvironmentGroup.create(fabricAry);
   fabricGroup.place(
      {
         position: [0, 11, 50.25],
         scale: [FABRIC_SCALE, FABRIC_SCALE, FABRIC_SCALE],
      },
      environment,
   );

   FABRIC_MODEL_DATA.push(...environment);
   return { environment };
}
