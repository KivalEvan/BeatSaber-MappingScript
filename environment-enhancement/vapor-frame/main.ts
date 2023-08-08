import { logger, types, v3 } from '../../depsLocal.ts';
import { environmentSave } from '../helpers.ts';

const info: types.external.IEnvironmentJSON = {
   version: '1.0.0',
   name: 'Vapor Frame',
   author: 'Kival Evan',
   environmentVersion: '1.0.0',
   environmentName: 'BigMirrorEnvironment',
   description:
      'Original by Liquid Popsicle, recreated in Chroma Environment. Vanilla-compatible but not recommended.',
   features: {},
   environment: [],
   materials: {},
};

export const ringCount = 5;
export const ringRepeat = 2;
export const idOffsetType4 = 101;

export function generateEnvironment(): types.v3.IChromaEnvironment[] {
   const environment: types.v3.IChromaEnvironment[] = [];

   let internalIdOffsetType4 = idOffsetType4;
   const ringGap = 8; // how far between each gap of road

   const scaleSizeMult = 0.875;
   const posOffset: types.Vector3 = [0, 2, 12];

   // regex for environment enhancement
   const regexSpectrogram = `(\\[\\d+\\]Spectrogram(s|\\.|\\d)?)+$`;
   const regexFloor = `\\[\\d+\\]Floor(\\.\\[\\d+\\]FloorSetDepth)?$`;
   const regexConstruction = `Environment\.\\[\\d+\\]Construction$`;
   const regexNearBuilding = `\\[\\d+\\]NearBuilding(Left|Right)$`;
   const regexNeonTubeDirectional = `\\[\\d+\\]NeonTubeDirectionalF(L|R)$`;
   const regexBigRingLight =
      `^GameCore\\.\\[\\d+\\]BigTrackLaneRing\\(Clone\\)\\.\\[\\d+\\]NeonTubeBothSidesDirectional(.?\\(\\d+\\))?$`;
   const regexNeonTubeL = `\\[\\d+\\]NeonTubeDirectionalL$`;
   const regexNeonTubeR = `\\[\\d+\\]NeonTubeDirectionalR$`;
   const regexFrontLights = `\\[\\d+\\]FrontLights$`;
   const regexDoubleColorLaser = `\\[\\d+\\]DoubleColorLaser$`;

   // beyond you're on your own
   const posAddZ = (posArr: types.Vector3, z: number): types.Vector3 => {
      const arr: types.Vector3 = [...posArr];
      arr[2] += z;
      return arr;
   };
   const posMirrorX = (posArr: types.Vector3): types.Vector3 => {
      const arr: types.Vector3 = [...posArr];
      arr[0] = -arr[0];
      return arr;
   };
   const posMirrorY = (posArr: types.Vector3): types.Vector3 => {
      const arr: types.Vector3 = [...posArr];
      arr[1] = -arr[1];
      return arr;
   };
   const translatePos = (posArr: types.Vector3, translate = [0, 0, 0]): types.Vector3 => {
      const arr: types.Vector3 = [...posArr];
      arr[0] += translate[0];
      arr[1] += translate[1];
      arr[2] += translate[2];
      return arr;
   };
   const scaleArray = (posArr: types.Vector3, mult = 1): types.Vector3 => {
      return posArr.map((elem) => elem * mult) as types.Vector3;
   };

   //#region yeet
   environment.push(
      {
         id: regexSpectrogram,
         lookupMethod: 'Regex',
         active: false,
      },
      {
         id: regexFloor,
         lookupMethod: 'Regex',
         active: false,
      },
      {
         id: regexConstruction,
         lookupMethod: 'Regex',
         active: false,
         // position: [0, -1.25, -8],
      },
      {
         id: regexNearBuilding,
         lookupMethod: 'Regex',
         active: false,
      },
      {
         id: regexNeonTubeDirectional,
         lookupMethod: 'Regex',
         active: false,
      },
   );
   //#endregion
   //#region extra thicc ring
   environment.push({
      id: regexBigRingLight,
      lookupMethod: 'Regex',
      scale: [1, 2, 1],
   });
   //#endregion
   //#region center light thingy
   const centerLightScale: types.Vector3 = [0.125, 0.125, 1000];
   const rightCenterLightPos: types.Vector3 = scaleArray([11.5, 2, 0], scaleSizeMult);
   const topCenterLightPos: types.Vector3 = scaleArray([2, 11.5, 0], scaleSizeMult);
   const bigStuffScale: types.Vector3 = [0.25, 0.25, 1000];
   const rightBigStuffPos: types.Vector3 = scaleArray([11.5, 0, 0], scaleSizeMult);
   const topBigStuffPos: types.Vector3 = scaleArray([0, 11.5, 0], scaleSizeMult);
   environment.push(
      {
         id: regexNeonTubeL,
         lookupMethod: 'Regex',
         active: false,
      },
      {
         id: regexNeonTubeR,
         lookupMethod: 'Regex',
         active: false,
      },
      {
         geometry: { type: 'Cube', material: { shader: 'OpaqueLight' } },
         scale: centerLightScale,
         position: translatePos(posMirrorX(rightCenterLightPos), posOffset),
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 0.25,
               colorAlphaMultiplier: 1.5,
            },
            ILightWithId: { type: 4 },
         },
      },
      {
         geometry: { type: 'Cube', material: { shader: 'OpaqueLight' } },
         scale: centerLightScale,
         position: translatePos(posMirrorX(posMirrorY(rightCenterLightPos)), posOffset),
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 0.25,
               colorAlphaMultiplier: 1.5,
            },
            ILightWithId: { type: 4 },
         },
      },
      {
         geometry: { type: 'Cube', material: { shader: 'OpaqueLight' } },
         scale: centerLightScale,
         position: translatePos(rightCenterLightPos, posOffset),
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 0.25,
               colorAlphaMultiplier: 1.5,
            },
            ILightWithId: { type: 4 },
         },
      },
      {
         geometry: { type: 'Cube', material: { shader: 'OpaqueLight' } },
         scale: centerLightScale,
         position: translatePos(posMirrorY(rightCenterLightPos), posOffset),
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 0.25,
               colorAlphaMultiplier: 1.5,
            },
            ILightWithId: { type: 4 },
         },
      },
      {
         geometry: { type: 'Cube', material: { shader: 'OpaqueLight' } },
         scale: centerLightScale,
         position: translatePos(posMirrorX(topCenterLightPos), posOffset),
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 0.25,
               colorAlphaMultiplier: 1.5,
            },
            ILightWithId: { type: 4 },
         },
      },
      {
         geometry: { type: 'Cube', material: { shader: 'OpaqueLight' } },
         scale: centerLightScale,
         position: translatePos(topCenterLightPos, posOffset),
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 0.25,
               colorAlphaMultiplier: 1.5,
            },
            ILightWithId: { type: 4 },
         },
      },
      {
         geometry: { type: 'Cube', material: { shader: 'OpaqueLight' } },
         scale: centerLightScale,
         position: translatePos(posMirrorX(posMirrorY(topCenterLightPos)), posOffset),
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 0.25,
               colorAlphaMultiplier: 1.5,
            },
            ILightWithId: { type: 4 },
         },
      },
      {
         geometry: { type: 'Cube', material: { shader: 'OpaqueLight' } },
         scale: centerLightScale,
         position: translatePos(posMirrorY(topCenterLightPos), posOffset),
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 0.25,
               colorAlphaMultiplier: 1.5,
            },
            ILightWithId: { type: 4 },
         },
      },
   );
   environment.push(
      {
         id: regexFrontLights,
         lookupMethod: 'Regex',
         position: translatePos([0, 0, 0 - posOffset[2]], posOffset),
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 0.5,
            },
         },
      },
      {
         id: regexFrontLights,
         lookupMethod: 'Regex',
         duplicate: 1,
         rotation: [180, 180, 0],
         position: translatePos([0, 0, 0 - posOffset[2]], posOffset),
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 0.5,
            },
         },
      },
      {
         id: regexFrontLights,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: translatePos([0, 0, 64 - posOffset[2]], posOffset),
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 0.5,
            },
         },
      },
      {
         id: regexFrontLights,
         lookupMethod: 'Regex',
         duplicate: 1,
         rotation: [180, 180, 0],
         position: translatePos([0, 0, 64 - posOffset[2]], posOffset),
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 0.5,
            },
         },
      },
   );
   environment.push(
      {
         geometry: { type: 'Cube', material: { shader: 'Standard' } },
         scale: bigStuffScale,
         position: translatePos(
            translatePos(posMirrorX(rightBigStuffPos), [0, 2.21875 * scaleSizeMult, 0]),
            posOffset,
         ),
      },
      {
         geometry: { type: 'Cube', material: { shader: 'Standard' } },
         scale: scaleArray(bigStuffScale, 2),
         position: translatePos(posMirrorX(rightBigStuffPos), posOffset),
      },
      {
         geometry: { type: 'Cube', material: { shader: 'Standard' } },
         scale: bigStuffScale,
         position: translatePos(
            translatePos(posMirrorX(rightBigStuffPos), [0, -2.21875 * scaleSizeMult, 0]),
            posOffset,
         ),
      },
   );
   environment.push(
      {
         geometry: { type: 'Cube', material: { shader: 'Standard' } },
         scale: bigStuffScale,
         position: translatePos(
            translatePos(rightBigStuffPos, [0, 2.21875 * scaleSizeMult, 0]),
            posOffset,
         ),
      },
      {
         geometry: { type: 'Cube', material: { shader: 'Standard' } },
         scale: scaleArray(bigStuffScale, 2),
         position: translatePos(rightBigStuffPos, posOffset),
      },
      {
         geometry: { type: 'Cube', material: { shader: 'Standard' } },
         scale: bigStuffScale,
         position: translatePos(
            translatePos(rightBigStuffPos, [0, -2.21875 * scaleSizeMult, 0]),
            posOffset,
         ),
      },
   );
   environment.push(
      {
         geometry: { type: 'Cube', material: { shader: 'Standard' } },
         scale: bigStuffScale,
         position: translatePos(
            translatePos(topBigStuffPos, [2.21875 * scaleSizeMult, 0, 0]),
            posOffset,
         ),
      },
      {
         geometry: { type: 'Cube', material: { shader: 'Standard' } },
         scale: scaleArray(bigStuffScale, 2),
         position: translatePos(topBigStuffPos, posOffset),
      },
      {
         geometry: { type: 'Cube', material: { shader: 'Standard' } },
         scale: bigStuffScale,
         position: translatePos(
            translatePos(topBigStuffPos, [-2.21875 * scaleSizeMult, 0, 0]),
            posOffset,
         ),
      },
   );
   environment.push(
      {
         geometry: { type: 'Cube', material: { shader: 'Standard' } },
         scale: bigStuffScale,
         position: translatePos(
            translatePos(posMirrorY(topBigStuffPos), [2.21875 * scaleSizeMult, 0, 0]),
            posOffset,
         ),
      },
      {
         geometry: { type: 'Cube', material: { shader: 'Standard' } },
         scale: scaleArray(bigStuffScale, 2),
         position: translatePos(posMirrorY(topBigStuffPos), posOffset),
      },
      {
         geometry: { type: 'Cube', material: { shader: 'Standard' } },
         scale: bigStuffScale,
         position: translatePos(
            translatePos(posMirrorY(topBigStuffPos), [-2.21875 * scaleSizeMult, 0, 0]),
            posOffset,
         ),
      },
   );
   //#endregion
   //#region static ring
   const ringPos = scaleArray([5.65625, 5.65625, 0], scaleSizeMult);
   const ringScale = scaleArray([4, 0.34375, 0.34375], scaleSizeMult);
   const outerRingPos = scaleArray([5.875, 5.875, 0], scaleSizeMult);
   const outerRingScale = scaleArray([16.25, 0.3125, 0.3125], scaleSizeMult);
   for (let i = 0; i < ringCount * ringRepeat; i++) {
      environment.push(
         {
            geometry: { type: 'Cube', material: { shader: 'OpaqueLight' } },
            scale: ringScale,
            position: translatePos(posAddZ(posMirrorX(ringPos), i * ringGap), posOffset),
            rotation: [0, 0, -135],
            components: {
               TubeBloomPrePassLight: {
                  bloomFogIntensityMultiplier: 0.5,
                  colorAlphaMultiplier: 1.5,
               },
               ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
            },
         },
         {
            geometry: { type: 'Cube', material: { shader: 'OpaqueLight' } },
            scale: ringScale,
            position: translatePos(
               posAddZ(posMirrorY(posMirrorX(ringPos)), i * ringGap),
               posOffset,
            ),
            rotation: [0, 0, -45],
            components: {
               TubeBloomPrePassLight: {
                  bloomFogIntensityMultiplier: 0.5,
                  colorAlphaMultiplier: 1.5,
               },
               ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
            },
         },
         {
            geometry: { type: 'Cube', material: { shader: 'OpaqueLight' } },
            scale: ringScale,
            position: translatePos(posAddZ(ringPos, i * ringGap), posOffset),
            rotation: [0, 0, 135],
            components: {
               TubeBloomPrePassLight: {
                  bloomFogIntensityMultiplier: 0.5,
                  colorAlphaMultiplier: 1.5,
               },
               ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
            },
         },
         {
            geometry: { type: 'Cube', material: { shader: 'OpaqueLight' } },
            scale: ringScale,
            position: translatePos(posAddZ(posMirrorY(ringPos), i * ringGap), posOffset),
            rotation: [0, 0, 45],
            components: {
               TubeBloomPrePassLight: {
                  bloomFogIntensityMultiplier: 0.5,
                  colorAlphaMultiplier: 1.5,
               },
               ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
            },
         },
      );
   }
   for (let i = 0; i < ringCount * ringRepeat; i++) {
      environment.push(
         {
            geometry: { type: 'Cube', material: { shader: 'Standard' } },
            scale: outerRingScale,
            position: translatePos(posAddZ(posMirrorX(outerRingPos), i * ringGap), posOffset),
            rotation: [0, 0, 45],
         },
         {
            geometry: { type: 'Cube', material: { shader: 'Standard' } },
            scale: outerRingScale,
            position: translatePos(
               posAddZ(posMirrorY(posMirrorX(outerRingPos)), i * ringGap),
               posOffset,
            ),
            rotation: [0, 0, 135],
         },
         {
            geometry: { type: 'Cube', material: { shader: 'Standard' } },
            scale: outerRingScale,
            position: translatePos(posAddZ(outerRingPos, i * ringGap), posOffset),
            rotation: [0, 0, -45],
         },
         {
            geometry: { type: 'Cube', material: { shader: 'Standard' } },
            scale: outerRingScale,
            position: translatePos(posAddZ(posMirrorY(outerRingPos), i * ringGap), posOffset),
            rotation: [0, 0, -135],
         },
      );
   }
   //#endregion
   //#region yeet center light backtop thing
   environment.push({
      id: regexDoubleColorLaser.replace(/\$$/, '') +
         `(.?\\(\\d+\\))?.\\[\\d+\\](BottomBoxLight|BottomBakedBloom)$`,
      lookupMethod: 'Regex',
      active: false,
   });
   //#endregion
   //#region replace with chad backtop thing
   const backTopFarPos: types.Vector3 = [3.5, 8.25, ringCount * ringGap + ringGap / 1.35];
   for (let i = 0; i < 5; i++) {
      environment.push(
         {
            id: i
               ? regexDoubleColorLaser.replace(/\$$/, '') + `.?\\(${i}\\)$`
               : regexDoubleColorLaser,
            lookupMethod: 'Regex',
            position: translatePos(
               scaleArray(
                  translatePos(posMirrorX(backTopFarPos), [-i * 1.625, -i * 1.625, 0]),
                  scaleSizeMult,
               ),
               translatePos(posOffset, [0, 0, i * ringGap]),
            ),
            rotation: [12 - i * 8, 180, 348 - i * 8],
         },
         {
            id: regexDoubleColorLaser.replace(/\$$/, '') + `.?\\(${i + 5}\\)$`,
            lookupMethod: 'Regex',
            position: translatePos(
               scaleArray(translatePos(backTopFarPos, [i * 1.625, -i * 1.625, 0]), scaleSizeMult),
               translatePos(posOffset, [0, 0, i * ringGap]),
            ),
            rotation: [12 - i * 8, 180, 12 + i * 8],
         },
      );
   }
   for (let i = 0; i < 5; i++) {
      environment.push(
         {
            id: regexDoubleColorLaser,
            lookupMethod: 'Regex',
            duplicate: 1,
            position: translatePos(
               scaleArray(
                  translatePos(posMirrorX(posMirrorY(backTopFarPos)), [-i * 1.625, i * 1.625, 0]),
                  scaleSizeMult,
               ),
               translatePos(posOffset, [0, 0, i * ringGap]),
            ),
            rotation: [12 - i * 8, 0, 168 - i * 8],
         },
         {
            id: regexDoubleColorLaser,
            lookupMethod: 'Regex',
            duplicate: 1,
            position: translatePos(
               scaleArray(
                  translatePos(posMirrorY(backTopFarPos), [i * 1.625, i * 1.625, 0]),
                  scaleSizeMult,
               ),
               translatePos(posOffset, [0, 0, i * ringGap]),
            ),
            rotation: [12 - i * 8, 0, 192 + i * 8],
         },
      );
   }
   //#endregion
   return environment;
}

export function insertEnvironment(d: v3.Difficulty) {
   if (d.customData.environment?.length) {
      logger.warn('Environment enhancement previously existed, replacing');
   }
   d.customData.environment = generateEnvironment();
}

export function save(path = import.meta.url) {
   environmentSave({ ...info, environment: generateEnvironment() }, path);
}

if (import.meta.main) {
   save();
}
