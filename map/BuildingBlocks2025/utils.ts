import { logger, radToDeg, types, vectorNormalize, vectorSub } from '@bsmap';
import * as three from 'jsr:@3d/three';

function crossProduct(array1: types.Vector3, array2: types.Vector3) {
   const [a, b, c] = array1;
   const [d, e, f] = array2;
   return [b * f - c * e, c * d - a * f, a * e - b * d] as types.Vector3;
}

export function lookAt(eye: types.Vector3, target: types.Vector3) {
   const forward = vectorNormalize(vectorSub(target, eye));
   let up = [0, 1, 0] as types.Vector3;
   const right = crossProduct(up, forward);
   up = crossProduct(forward, right);
   const m = matrixFromBasisVectors(right, up, forward);
   return getTransformFromMatrix(m).rot;
}

function matrixFromBasisVectors(
   basisX: types.Vector3,
   basisY: types.Vector3,
   basisZ: types.Vector3,
) {
   return new three.Matrix4().set(
      basisX[0],
      basisY[0],
      basisZ[0],
      0,
      basisX[1],
      basisY[1],
      basisZ[1],
      0,
      basisX[2],
      basisY[2],
      basisZ[2],
      0,
      0,
      0,
      0,
      1,
   );
}

function eulerFromQuaternion(q: three.Quaternion) {
   let euler = new three.Euler(0, 0, 0, 'YXZ')
      .setFromQuaternion(q)
      .toArray() as number[];
   euler.pop();
   euler = euler.map(radToDeg);
   return euler as types.Vector3;
}

function getTransformFromMatrix(matrix: three.Matrix4) {
   const pos = new three.Vector3();
   const q = new three.Quaternion();
   const scale = new three.Vector3();
   matrix.decompose(pos, q, scale);
   const rot = eulerFromQuaternion(q);
   return {
      pos: threeClassToArray(pos),
      rot: rot,
      scale: threeClassToArray(scale),
   };
}

function threeClassToArray(v: three.Vector3 | three.Euler) {
   return [v.x, v.y, v.z] as types.Vector3;
}

export function chunkify<T>(array: T[], size: number): T[][] {
   const chunks: T[][] = [];
   for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
   }
   return chunks;
}

export function divideArray<T>(array: T[], divide: number): T[][] {
   const ary: T[][] = [];
   const size = array.length / divide;
   for (let i = 0; i < array.length; i += size) {
      ary.push(array.slice(i, i + size));
   }
   return ary;
}

export function aggregateCustomData(
   ...data: types.wrapper.ICustomDataDifficulty[]
) {
   const newCustomData: types.wrapper.ICustomDataDifficulty = {};

   for (const customData of data) {
      for (const key in customData) {
         if (!(key in newCustomData)) {
            newCustomData[key] = customData[key];
            continue;
         }

         if (Array.isArray(newCustomData[key])) {
            if (!Array.isArray(customData[key])) {
               throw new Error('customData is not an array');
            }
            newCustomData[key].push(...customData[key]);
            continue;
         }

         if (typeof newCustomData[key] === 'object') {
            if (typeof customData[key] !== 'object') {
               throw new Error('customData is not an object');
            }
            for (const key2 in customData[key]) {
               if (key2 in newCustomData[key]) {
                  logger.warn(
                     `Possible duplication in customData: ${key}.${key2}`,
                  );
               }
               newCustomData[key][key2] = customData[key][key2];
            }
            continue;
         }

         logger.warn(`Possible duplication in customData: ${key}`);
      }
   }

   return newCustomData;
}

export function sortCustomData(
   customData: types.wrapper.ICustomDataDifficulty,
): types.wrapper.ICustomDataDifficulty {
   customData.bookmarks?.sort((a, b) => a.b - b.b);
   customData.customEvents?.sort((a, b) => a.b - b.b);
   return customData;
}
