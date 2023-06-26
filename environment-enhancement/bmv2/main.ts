import { logger, types, v3 } from '../../depsLocal.ts';

export const roadCount = 5;
export const roadRepeat = 4;
export const idOffsetType0 = 101;
export const idOffsetType4 = 101;

export function generateEnvironment(): types.v3.IChromaEnvironment[] {
   const environment: types.v3.IChromaEnvironment[] = [];

   let internalIdOffsetType0 = idOffsetType0;
   let internalIdOffsetType4 = idOffsetType4;
   // road
   const roadGap = 6; // how far between each gap of road
   const roadOffset = 8;

   // extra light
   const extraMirrorLightOffset = roadOffset + roadGap * 2;
   const extraMirrorLightGap = roadGap;
   const extraMirrorLightMirrorOffsetX = 8;
   const extraMirrorLightMirrorOffsetY = -4;

   // regex for environment enhancement
   const regexSpectrogram = `(\\[\\d+\\]Spectrogram(s|\\.|\\d)?)+$`;
   const regexFloor = `\\[\\d+\\]Floor(\\.\\[\\d+\\]FloorSetDepth)?$`;
   const regexConstruction = `Environment.\\[\\d+\\]Construction$`;
   const regexNearBuilding = `\\[\\d+\\]NearBuilding(Left|Right)$`;
   const regexBigRingLights =
      `\\[\\d+\\]BigTrackLaneRing\\(Clone\\)\\.\\[\\d+\\]NeonTubeBothSidesDirectional(.?\\(\\d+\\))?$`;
   const regexDoubleColorLaser = `\\[\\d+\\]DoubleColorLaser$`;
   const regexNeonTubeL = `\\[\\d+\\]NeonTubeDirectionalL$`;
   const regexNeonTubeR = `\\[\\d+\\]NeonTubeDirectionalR$`;
   const regexNeonTubeFL = `\\[\\d+\\]NeonTubeDirectionalFL$`;
   const regexNeonTubeFR = `\\[\\d+\\]NeonTubeDirectionalFR$`;

   // beyond you're on your own
   const posAddY = (posArr: types.Vector3, y: number): types.Vector3 => {
      const arr: types.Vector3 = [...posArr];
      arr[1] += y;
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
         position: [0, -0.3125, -7.5],
         scale: [1.1875, 1.1875, 1.1875],
      },
      {
         id: regexNearBuilding,
         lookupMethod: 'Regex',
         active: false,
      },
      // {
      //     geometry: {
      //         type: 'Cube',
      //         material: { shader: 'Standard' },
      //     },
      //     position: [7.375, -1, 0],
      //     scale: [4.5625, 0.015625, 1000],
      // },
      // {
      //     geometry: {
      //         type: 'Cube',
      //         material: { shader: 'Standard' },
      //     },
      //     position: [-7.375, -1, 0],
      //     scale: [4.5625, 0.015625, 1000],
      // }
   );
   //#endregion
   //#region extra thicc ring
   environment.push({
      id: regexBigRingLights,
      lookupMethod: 'Regex',
      scale: [1, 2, 1],
   });
   //#endregion
   //#region road
   const centerRoadPos: types.Vector3 = [1.71875, -2.5, roadOffset];
   const centerRoadScale: types.Vector3 = [1.4375, 0.125, 0.125];
   const farRoadPos: types.Vector3 = [4.4375, -1.375, roadOffset];
   const farRoadScale: types.Vector3 = [1.46875, 0.125, 0.125];
   for (let i = 0; i < roadCount * roadRepeat; i++) {
      environment.push(
         {
            geometry: {
               type: 'Cube',
               material: { shader: 'OpaqueLight' },
            },
            scale: centerRoadScale,
            position: posMirrorX(posAddZ(centerRoadPos, i * roadGap)),
            rotation: [0, 0, 18],
            components: {
               TubeBloomPrePassLight: { colorAlphaMultiplier: 1.5 },
               ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
            },
         },
         {
            geometry: {
               type: 'Cube',
               material: { shader: 'OpaqueLight' },
            },
            scale: centerRoadScale,
            position: posAddZ(centerRoadPos, i * roadGap),
            rotation: [0, 0, -18],
            components: {
               TubeBloomPrePassLight: { colorAlphaMultiplier: 1.5 },
               ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
            },
         },
      );
   }
   for (let i = 0; i < roadCount * roadRepeat; i++) {
      environment.push(
         {
            geometry: {
               type: 'Cube',
               material: { shader: 'OpaqueLight' },
            },
            scale: farRoadScale,
            position: posMirrorX(posAddZ(farRoadPos, i * roadGap)),
            rotation: [0, 0, -25],
            components: {
               TubeBloomPrePassLight: { colorAlphaMultiplier: 1.5 },
               ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
            },
         },
         {
            geometry: {
               type: 'Cube',
               material: { shader: 'OpaqueLight' },
            },
            scale: farRoadScale,
            position: posAddZ(farRoadPos, i * roadGap),
            rotation: [0, 0, 25],
            components: {
               TubeBloomPrePassLight: { colorAlphaMultiplier: 1.5 },
               ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
            },
         },
      );
   }
   //#endregion
   //#region road other lights
   const farLaneLightPos: types.Vector3 = [5.0625, -1, 0];
   const farLaneLightScale: types.Vector3 = [2, 1, 2];
   const midLaneLightPos: types.Vector3 = [3.75, -1.625, -255];
   const midLaneLightScale: types.Vector3 = [2.5, 4, 2.5];
   const botLaneLightPos: types.Vector3 = [3.375, -2.5, -255];
   const botLaneLightScale: types.Vector3 = [0.09375, 0.09375, 1000];
   const centerLaneLightPos: types.Vector3 = [1, -2.25, -255];
   const centerLaneLightScale: types.Vector3 = [0.125, 0.125, 1000];
   environment.push(
      {
         geometry: {
            type: 'Cube',
            material: { shader: 'Standard' },
         },
         scale: botLaneLightScale,
         position: posMirrorX(botLaneLightPos),
      },
      {
         geometry: {
            type: 'Cube',
            material: { shader: 'Standard' },
         },
         scale: botLaneLightScale,
         position: botLaneLightPos,
      },
      {
         geometry: {
            type: 'Cube',
            material: { shader: 'Standard' },
         },
         scale: centerLaneLightScale,
         position: posMirrorX(centerLaneLightPos),
      },
      {
         geometry: {
            type: 'Cube',
            material: { shader: 'Standard' },
         },
         scale: centerLaneLightScale,
         position: centerLaneLightPos,
      },
      {
         id: regexNeonTubeL,
         lookupMethod: 'Regex',
         scale: midLaneLightScale,
         position: posMirrorX(midLaneLightPos),
      },
      {
         id: regexNeonTubeR,
         lookupMethod: 'Regex',
         scale: midLaneLightScale,
         position: midLaneLightPos,
      },
      {
         id: regexNeonTubeFL,
         lookupMethod: 'Regex',
         scale: farLaneLightScale,
         position: posMirrorX(farLaneLightPos),
      },
      {
         id: regexNeonTubeFR,
         lookupMethod: 'Regex',
         scale: farLaneLightScale,
         position: farLaneLightPos,
      },
   );
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
   const backTopFarPosNear: types.Vector3 = [5.0625, -1, 96];
   const backTopFarPos: types.Vector3 = [3.75, -1.625, 96];
   const backTopFarScale: types.Vector3 = [1.5, 1, 1.5];
   for (let i = 0; i < 5; i++) {
      environment.push(
         {
            id: i
               ? regexDoubleColorLaser.replace(/\$$/, '') + `.?\\(${i}\\)$`
               : regexDoubleColorLaser,
            lookupMethod: 'Regex',
            position: posMirrorX(posAddZ(backTopFarPosNear, (i + 1) * -8)),
            rotation: [-7.5, 180, -345],
         },
         {
            id: regexDoubleColorLaser.replace(/\$$/, '') + `.?\\(${i + 5}\\)$`,
            lookupMethod: 'Regex',
            position: posAddZ(backTopFarPosNear, (i + 1) * -8),
            rotation: [-7.5, 180, -15],
         },
      );
   }
   for (let i = 0; i < 5; i++) {
      environment.push(
         {
            id: regexDoubleColorLaser,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: backTopFarScale,
            position: posMirrorX(posAddZ(backTopFarPos, i * 16)),
            rotation: [60 - i * 5, 0, 195 + i * 6],
         },
         {
            id: regexDoubleColorLaser,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: backTopFarScale,
            position: posAddZ(backTopFarPos, i * 16),
            rotation: [60 - i * 5, 0, 165 - i * 6],
         },
      );
   }
   //#endregion
   //#region fabled extra light
   const extraMirrorLightPos: types.Vector3 = [
      extraMirrorLightMirrorOffsetX,
      -1,
      extraMirrorLightOffset,
   ];
   const extraMirrorLightScale: types.Vector3 = [0.5, 0.5, 0.5];
   for (let i = 0; i < 5; i++) {
      environment.push(
         {
            id: regexDoubleColorLaser,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: extraMirrorLightScale,
            position: posMirrorX(
               posAddZ(extraMirrorLightPos, i * extraMirrorLightGap),
            ),
            rotation: [0 + i * 2.5, 0, 320 + i * 11],
            components: {
               ILightWithId: { type: 0, lightID: internalIdOffsetType0++ },
            },
         },
         {
            id: regexDoubleColorLaser,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: extraMirrorLightScale,
            position: posMirrorX(
               posAddY(
                  posAddZ(extraMirrorLightPos, i * extraMirrorLightGap),
                  extraMirrorLightMirrorOffsetY,
               ),
            ),
            rotation: [0 - i * 2.5, 0, 220 - i * 11],
            components: {
               ILightWithId: { type: 0, lightID: internalIdOffsetType0++ },
            },
         },
         {
            id: regexDoubleColorLaser,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: extraMirrorLightScale,
            position: posAddY(
               posAddZ(extraMirrorLightPos, i * extraMirrorLightGap),
               extraMirrorLightMirrorOffsetY,
            ),
            rotation: [0 - i * 2.5, 0, 140 + i * 11],
            components: {
               ILightWithId: { type: 0, lightID: internalIdOffsetType0++ },
            },
         },
         {
            id: regexDoubleColorLaser,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: extraMirrorLightScale,
            position: posAddZ(extraMirrorLightPos, i * extraMirrorLightGap),
            rotation: [0 + i * 2.5, 0, 40 - i * 11],
            components: {
               ILightWithId: { type: 0, lightID: internalIdOffsetType0++ },
            },
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

if (import.meta.main) {
   Deno.writeTextFileSync(
      import.meta.url.replace('file://', '').replace(
         'environment.ts',
         './BMv2.dat',
      ),
      JSON.stringify({
         version: '1.0.0',
         name: 'Big Mirror V2',
         author: 'Kival Evan',
         environmentVersion: '1.0.0',
         environmentName: 'BigMirrorEnvironment',
         description:
            'Original by Liquid Popsicle, recreated in Chroma Environment. Vanilla-compatible but not recommended.',
         features: {},
         environment: generateEnvironment(),
      } as types.external.IEnvironmentJSON),
   );
   console.log('Written BMv2 environment JSON');
}
