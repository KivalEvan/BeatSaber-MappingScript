import { logger, types } from '@bsmap';
import { environmentSave } from '../helpers.ts';

const info: types.external.IEnvironmentJSON = {
   version: '1.0.0',
   name: 'Prayers',
   author: 'Kival Evan',
   environmentVersion: '1.0.0',
   environmentName: 'BigMirrorEnvironment',
   description:
      'Original by Halcyon12, recreated in Chroma Environment. Vanilla-compatible but not recommended.',
   features: {},
   environment: [],
   materials: {},
};

export const roadCount = 5;
export const roadRepeat = 2;
export const idOffsetType0 = 101;
export const idOffsetType4 = 101;

export function generateEnvironment(): types.v3.IChromaEnvironment[] {
   const environment: types.v3.IChromaEnvironment[] = [];

   let internalIdOffsetType4 = idOffsetType4;
   // road
   const roadGap = 8; // how far between each gap of road
   const roadOffset = 6;

   // regex for environment enhancement
   const regexNearBuilding = `\\[\\d+\\]NearBuilding(Left|Right)$`;
   const regexBigRingLights =
      `\\[\\d+\\]BigTrackLaneRing\\(Clone\\)\\.\\[\\d+\\]NeonTubeBothSidesDirectional(.?\\(\\d+\\))?$`;
   const regexDoubleColorLaser = `\\[\\d+\\]DoubleColorLaser`;
   const regexFrontLights = `\\[\\d+\\]FrontLights$`;
   const regexSmoke = `\\[\\d+\\]BigSmokePS$`;

   // beyond you're on your own
   const posAddX = (posArr: types.Vector3, x: number): types.Vector3 => {
      const arr: types.Vector3 = [...posArr];
      arr[0] += x;
      return arr;
   };
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

   //#region yeet
   environment.push(
      {
         id: regexNearBuilding,
         lookupMethod: 'Regex',
         active: false,
      },
      // {
      //     id: regexFloor,
      //     lookupMethod: 'Regex',
      //     scale: [0.265, 1, 1],
      // },
      {
         id: regexDoubleColorLaser,
         lookupMethod: 'Regex',
         active: false,
      },
      {
         id: regexFrontLights,
         lookupMethod: 'Regex',
         active: false,
      },
      {
         id: regexSmoke,
         lookupMethod: 'Regex',
         scale: [1.5, 2, 7.5],
      },
      {
         id: regexSmoke,
         lookupMethod: 'Regex',
         duplicate: 1,
         scale: [1.5, 7.5, 2],
      },
      {
         id: regexSmoke,
         lookupMethod: 'Regex',
         duplicate: 1,
         scale: [0.75, 12.5, 1],
      },
      {
         geometry: {
            type: 'Cube',
            material: 'PrayersStandard',
         },
         // position: [2.125, -0.0625, 507.6875],
         position: [2.125, -0.0625, 0],
         scale: [0.1875, 0.1875, 2000],
      },
      {
         geometry: {
            type: 'Cube',
            material: 'PrayersStandard',
         },
         // position: [-2.125, -0.0625, 507.6875],
         position: [-2.125, -0.0625, 0],
         scale: [0.1875, 0.1875, 2000],
      },
      {
         geometry: {
            type: 'Cube',
            material: 'PrayersStandard',
         },
         position: [5.625, 0, 0],
         scale: [0.75, 0.375, 2000],
      },
      {
         geometry: {
            type: 'Cube',
            material: 'PrayersStandard',
         },
         position: [-5.625, 0, 0],
         scale: [0.75, 0.375, 2000],
      },
      {
         geometry: {
            type: 'Cube',
            material: 'PrayersOpaqueLight',
         },
         position: [5, -1, 0],
         scale: [0.0625, 0.0625, 2000],
         components: {
            TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
            ILightWithId: { type: 4 },
         },
      },
      {
         geometry: {
            type: 'Cube',
            material: 'PrayersOpaqueLight',
         },
         position: [-5, -1, 0],
         scale: [0.0625, 0.0625, 2000],
         components: {
            TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
            ILightWithId: { type: 4 },
         },
      },
      {
         geometry: {
            type: 'Cube',
            material: 'PrayersOpaqueLight',
         },
         position: [3.75, -3.25, 0],
         scale: [0.0625, 0.0625, 2000],
         components: {
            TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
            ILightWithId: { type: 4 },
         },
      },
      {
         geometry: {
            type: 'Cube',
            material: 'PrayersOpaqueLight',
         },
         position: [-3.75, -3.25, 0],
         scale: [0.0625, 0.0625, 2000],
         components: {
            TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
            ILightWithId: { type: 4 },
         },
      },
   );
   //#endregion
   //#region extra thicc ring
   environment.push({
      id: regexBigRingLights,
      lookupMethod: 'Regex',
      scale: [1, 2, 1],
      components: {
         TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
      },
   });
   //#endregion
   //#region road
   const roadLightPos: types.Vector3 = [7.25, 6.125, roadOffset];
   const roadLightScale: types.Vector3 = [0.09375, 12.5, 0.09375];
   const roadBlockPos: types.Vector3 = [7.4375, 5.75, roadOffset];
   const roadBlockScale: types.Vector3 = [0.25, 12, 0.75];
   const roadBlockBasePos: types.Vector3 = [5.6473, 0.141, roadOffset];
   const roadBlockBaseScale: types.Vector3 = [0.625, 0.5, 0.75];
   const roadBlockBase2Pos: types.Vector3 = [5.407125, 0.25, roadOffset];
   const roadBlockBase2Scale: types.Vector3 = [0.3125, 0.3125, 0.3125];
   const roadBlockTopPos: types.Vector3 = [8.735, 12.24, roadOffset];
   const roadBlockTopScale: types.Vector3 = [0.75, 0.0625, 0.75];
   const roadBlockTop2Pos: types.Vector3 = [8.985, 11.8875, roadOffset];
   const roadBlockTop2Scale: types.Vector3 = [0.25, 0.75, 0.75];
   const roadBlockTop3Pos: types.Vector3 = [8.86, 12.075, roadOffset];
   const roadBlockTop3Scale: types.Vector3 = [0.25, 0.25, 0.75];
   const roadBlockTop4Pos: types.Vector3 = [8.777, 12.169, roadOffset];
   const roadBlockTop4Scale: types.Vector3 = [0.1875, 0.1875, 0.75];
   const roadOuterBlockPos: types.Vector3 = [12, 6, roadOffset + roadGap / 2];
   const roadOuterBlockScale: types.Vector3 = [3, 1000, 3];
   for (let i = 0; i < roadCount * roadRepeat; i++) {
      environment.push(
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersOpaqueLight',
            },
            scale: roadLightScale,
            position: posMirrorX(posAddZ(roadLightPos, i * roadGap)),
            rotation: [0, 0, 15],
            components: {
               TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
               ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
            },
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersOpaqueLight',
            },
            scale: roadLightScale,
            position: posAddZ(roadLightPos, i * roadGap),
            rotation: [0, 0, -15],
            components: {
               TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
               ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
            },
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockScale,
            position: posMirrorX(posAddZ(roadBlockPos, i * roadGap)),
            rotation: [0, 0, 15],
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockScale,
            position: posAddZ(roadBlockPos, i * roadGap),
            rotation: [0, 0, -15],
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockBaseScale,
            position: posMirrorX(posAddZ(roadBlockBasePos, i * roadGap)),
            rotation: [0, 0, 45],
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockBaseScale,
            position: posAddZ(roadBlockBasePos, i * roadGap),
            rotation: [0, 0, -45],
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockBase2Scale,
            position: posMirrorX(posAddZ(roadBlockBase2Pos, i * roadGap)),
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockBase2Scale,
            position: posAddZ(roadBlockBase2Pos, i * roadGap),
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockTopScale,
            position: posMirrorX(posAddZ(roadBlockTopPos, i * roadGap)),
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockTopScale,
            position: posAddZ(roadBlockTopPos, i * roadGap),
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockTop2Scale,
            position: posMirrorX(posAddZ(roadBlockTop2Pos, i * roadGap)),
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockTop2Scale,
            position: posAddZ(roadBlockTop2Pos, i * roadGap),
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockTop3Scale,
            position: posMirrorX(posAddZ(roadBlockTop3Pos, i * roadGap)),
            rotation: [0, 0, 45],
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockTop3Scale,
            position: posAddZ(roadBlockTop3Pos, i * roadGap),
            rotation: [0, 0, 45],
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockTop4Scale,
            position: posMirrorX(posAddZ(roadBlockTop4Pos, i * roadGap)),
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadBlockTop4Scale,
            position: posAddZ(roadBlockTop4Pos, i * roadGap),
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadOuterBlockScale,
            position: posMirrorX(posAddZ(roadOuterBlockPos, i * roadGap)),
            rotation: [0, 0, 20],
         },
         {
            geometry: {
               type: 'Cube',
               material: 'PrayersStandard',
            },
            scale: roadOuterBlockScale,
            position: posAddZ(roadOuterBlockPos, i * roadGap),
            rotation: [0, 0, -20],
         },
      );
   }
   //#endregion
   //#region yeet backtop and replace
   const backTopFarPosNear: types.Vector3 = [1.5, 500, 80];
   const backTopFarScale: types.Vector3 = [0.125, 1000, 0.1225];
   for (let i = 0; i < 4; i++) {
      environment.push(
         {
            geometry: { type: 'Cube', material: 'PrayersTransparentLight' },
            position: posMirrorX(posAddX(posAddZ(backTopFarPosNear, i * 2), i * 1)),
            scale: backTopFarScale,
            components: {
               TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
               ILightWithId: { type: 0 },
            },
         },
         {
            geometry: { type: 'Cube', material: 'PrayersTransparentLight' },
            position: posAddX(posAddZ(backTopFarPosNear, i * 2), i * 1),
            scale: backTopFarScale,
            components: {
               TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
               ILightWithId: { type: 0 },
            },
         },
      );
   }
   //#endregion
   return environment;
}

export function generateMaterial() {
   return {
      PrayersStandard: { shader: 'Standard' },
      PrayersOpaqueLight: { shader: 'OpaqueLight' },
      PrayersTransparentLight: { shader: 'TransparentLight' },
   } as Record<string, types.v3.IChromaMaterial>;
}

export function insertEnvironment(d: types.wrapper.IWrapBeatmap) {
   if (d.difficulty.customData.environment?.length) {
      logger.warn('Environment enhancement previously existed, replacing');
   }
   d.difficulty.customData.environment = generateEnvironment();
   d.difficulty.customData.materials = generateMaterial();
}

export function save(path = import.meta.url) {
   environmentSave(
      { ...info, environment: generateEnvironment(), materials: generateMaterial() },
      path,
   );
}

if (import.meta.main) {
   save();
}
