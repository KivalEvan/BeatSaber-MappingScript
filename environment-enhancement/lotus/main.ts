import { ext, logger, types, utils, v3 } from '../../depsLocal.ts';
import { environmentSave } from '../helpers.ts';

const info: types.external.IEnvironmentJSON = {
   version: '1.0.0',
   name: 'Lotus',
   author: 'Kival Evan',
   environmentVersion: '1.0.1',
   environmentName: 'BTSEnvironment',
   description: 'Vanilla-compatible environment.',
   features: { basicBeatmapEvents: [{ b: 0, et: 0, i: 0, f: 0 }] },
   environment: [],
   materials: {},
};

export function generateEnvironment(includeFELT = false): types.v3.IChromaEnvironment[] {
   const pRandom = utils.pRandomFn('Lotus');
   const environment: types.v3.IChromaEnvironment[] = [];

   // environment related
   // regex for environment enhancement
   const regexRingRight = `\\[\\d+\\]PillarTrackLaneRingsR$`;
   const regexRingLeft = `\\[\\d+\\]PillarTrackLaneRingsR.?\\(1\\)$`;
   const regexGlowLine = `\\[\\d+\\]GlowLineL$`;
   const regexSideLaser = '\\[42\\]SideLaser$';
   const regexPillarL = `\\[\\d+\\]PillarPair\\.\\[\\d+\\]PillarL$`;
   const regexPillarR = `\\[\\d+\\]PillarPair\\.\\[\\d+\\]PillarR$`;
   const regexDoor = `\\[\\d+\\]MagicDoorSprite$`;
   const regexCloudGeometry = '\\[\\d+\\]HighCloudsGenerator.\\[\\d+\\]OpaqueGeometry$';

   //#region haha ring go brr; remove this if u dont want ring tower (this was made specifically for FELT - Journey)
   // resize default column box
   environment.push(
      {
         id: regexRingRight,
         lookupMethod: 'Regex',
         position: [64, 48, 128],
         rotation: [90, 0, 45],
         scale: [0.25, 0.25, 1],
      },
      {
         id: regexRingLeft,
         lookupMethod: 'Regex',
         position: [-64, 48, 128],
         rotation: [90, 0, 45],
         scale: [0.25, 0.25, 1],
      },
   );
   // duplicate this shit everywhere
   for (let z = 0; z < 5; z++) {
      for (let i = 0; i < 10; i++) {
         const posXRight = (i + 1) * 12 + 96 - z * 8;
         const posZRight = 32 + pRandom(64);
         const posYRight = Math.max(-36 + pRandom(32) + posXRight / 8 + posZRight / 1.25, 2);
         const posXLeft = (i + 1) * 12 + 96 - z * 8;
         const posZLeft = 32 + pRandom(64);
         const posYLeft = Math.max(-36 + pRandom(32) + posXLeft / 8 + posZLeft / 1.25, 2);
         environment.push(
            {
               id: regexRingRight,
               lookupMethod: 'Regex',
               duplicate: 1,
               position: [posXRight, posYRight, -96 + posZRight + z * 64],
               rotation: [90, 0, 45],
            },
            {
               id: regexRingLeft,
               lookupMethod: 'Regex',
               duplicate: 1,
               position: [-posXLeft, posYLeft, -96 + posZLeft + z * 64],
               rotation: [90, 0, 45],
            },
         );
      }
   }

   for (let i = 0; i < 12; i++) {
      // environment.push({
      //     id: regexCloudGeometry,
      //     lookupMethod: 'Regex',
      //     duplicate: 1,
      //     position: [0, 16, -112 + i * 24],
      //     rotation: [i % 2 ? 270 : 90, 0, 0],
      //     scale: [
      //         0.125 + 0.375 * Math.cos(utils.degToRad(i * 8)),
      //         0.25 + pRandom(0.375),
      //         0.125 + 0.375 * Math.cos(utils.degToRad(i * 8)),
      //     ],
      // });
   }

   environment.push(
      {
         id: regexCloudGeometry,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: [0, -12, 0],
         rotation: [0, 0, 0],
         scale: [0.75, 0.75, 0.75],
      },
      {
         id: regexRingRight,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: [48, -4, 144],
         rotation: [0, 180, 45],
         scale: [0.25, 0.25, 1],
      },
      {
         id: regexRingLeft,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: [-48, -4, 144],
         rotation: [0, 180, 45],
         scale: [0.25, 0.25, 1],
      },
      {
         id: regexRingRight,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: [64, 10, 160],
         rotation: [0, 180, 45],
         scale: [0.25, 0.25, 1],
      },
      {
         id: regexRingLeft,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: [-64, 10, 160],
         rotation: [0, 180, 45],
         scale: [0.25, 0.25, 1],
      },
   );
   //#endregion
   //#region side
   for (let i = 0; i < 2; i++) {
      const posX = i * 1.5 + 4;
      const posY = i * 0.5 - 0.5;
      const posZ = -511;
      environment.push(
         {
            id: regexGlowLine,
            lookupMethod: 'Regex',
            duplicate: 1,
            position: [posX, posY, posZ],
            rotation: [90, 0, 0],
            scale: [1.5, 1.5, 1.5],
         },
         {
            id: regexGlowLine,
            lookupMethod: 'Regex',
            duplicate: 1,
            position: [-posX, posY, posZ],
            rotation: [90, 0, 0],
            scale: [1.5, 1.5, 1.5],
         },
      );
   }
   //#endregion
   //#region front
   // for (let i = 0; i < 5; i++) {
   //     const posX = 16 + i * 4;
   //     const posY = 0;
   //     const posZ = i * 8 + 24;
   //     environment.push(
   //         {
   //             geometry: { type: 'Cube', material: { shader: 'TransparentLight' } },
   //             position: [posX, posY, posZ],
   //             rotation: [15 + i * 2.5, 0, -16 - i * 8],
   //             components: {
   //                 ILightWithId: {
   //                     type: 6,
   //                 },
   //             },
   //         },
   //         {
   //             geometry: { type: 'Cube', material: { shader: 'TransparentLight' } },
   //             position: [-posX, posY, posZ],
   //             rotation: [15 + i * 2.5, 0, 16 + i * 8],
   //             components: {
   //                 ILightWithId: {
   //                     type: 6,
   //                 },
   //             },
   //         },
   //     );
   // }
   //#endregion
   //#region backtop
   // for (let i = 0; i < 5; i++) {
   //     const posX = 54 + i * 4;
   //     const posY = i * 2;
   //     const posZ = i * 4 + 80;
   //     environment.push(
   //         {
   //             geometry: { type: 'Cube', material: { shader: 'TransparentLight' } },
   //             position: [posX, posY, posZ],
   //             rotation: [-15, 0, 60 - i * 2.5],
   //             components: {
   //                 ILightWithId: {
   //                     type: 7,
   //                 },
   //             },
   //         },
   //         {
   //             geometry: { type: 'Cube', material: { shader: 'TransparentLight' } },
   //             position: [-posX, posY, posZ],
   //             rotation: [-15, 0, -60 + i * 2.5],
   //             components: {
   //                 ILightWithId: {
   //                     type: 7,
   //                 },
   //             },
   //         },
   //     );
   // }
   //#endregion
   //#region pillar
   for (let i = 0; i < 5; i++) {
      environment.push(
         {
            id: i ? regexPillarL.replace('PillarPair', `PillarPair \\(${i}\\)`) : regexPillarL,
            lookupMethod: 'Regex',
            rotation: [15, 45, 0 - i * 7.5],
            position: [-32 + i * 4, 5 + i * 4 + Math.pow(i, i / 3), 64 + i * 12],
         },
         {
            id: i ? regexPillarR.replace('PillarPair', `PillarPair \\(${i}\\)`) : regexPillarR,
            lookupMethod: 'Regex',
            rotation: [15, -45, 0 + i * 7.5],
            position: [32 - i * 4, 5 + i * 4 + Math.pow(i, i / 3), 64 + i * 12],
         },
      );
   }
   //#endregion
   //#region door
   environment.push(
      {
         id: regexDoor,
         lookupMethod: 'Regex',
         rotation: [0, 0, 60],
         position: [-4.625, 33, 240],
         scale: [1, 1.5, 1],
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 12,
            },
         },
      },
      {
         id: regexDoor,
         lookupMethod: 'Regex',
         duplicate: 1,
         rotation: [0, 0, -60],
         position: [4.625, 33, 240],
         scale: [1, 1.5, 1],
         components: {
            TubeBloomPrePassLight: {
               bloomFogIntensityMultiplier: 12,
            },
         },
      },
   );
   //#endregion

   const lightBlock = ext.chroma.EnvironmentBlock.create(
      {
         id: regexSideLaser,
         lookupMethod: 'Regex',
         duplicate: 1,
         scale: [10, 0.0004, 10],
         rotation: [0, 0, 0],
         components: { ILightWithId: { type: 0 } },
      },
      [0, 0, 0],
   );
   const logo: types.v3.IChromaEnvironment[] = [];
   //F
   lightBlock.place({ position: [-(151 / 2) + 4, 4, 0], scale: [8, 8, 0.015625] }, logo);
   lightBlock.place({ position: [-(151 / 2) + 4, 14.5, 0], scale: [8, 11, 0.015625] }, logo);
   lightBlock.place({ position: [-(151 / 2) + 14.5, 24, 0], scale: [29, 8, 0.015625] }, logo);
   lightBlock.place({ position: [-(151 / 2) + 4, 32.5, 0], scale: [8, 7, 0.015625] }, logo);
   lightBlock.place({ position: [-(151 / 2) + 15.5, 40, 0], scale: [31, 8, 0.015625] }, logo);
   //E
   lightBlock.place(
      {
         position: [-(151 / 2) + 40 + 15.5, 4, 0],
         scale: [31, 8, 0.015625],
      },
      logo,
   );
   lightBlock.place(
      {
         position: [-(151 / 2) + 40 + 4, 14.5, 0],
         scale: [8, 11, 0.015625],
      },
      logo,
   );
   lightBlock.place(
      {
         position: [-(151 / 2) + 40 + 13.5, 24, 0],
         scale: [27, 8, 0.015625],
      },
      logo,
   );
   lightBlock.place(
      {
         position: [-(151 / 2) + 40 + 4, 32.5, 0],
         scale: [8, 7, 0.015625],
      },
      logo,
   );
   lightBlock.place(
      {
         position: [-(151 / 2) + 40 + 14.5, 40, 0],
         scale: [29, 8, 0.015625],
      },
      logo,
   );
   //L
   lightBlock.place(
      {
         position: [-(151 / 2) + 81 + 15, 4, 0],
         scale: [30, 8, 0.015625],
      },
      logo,
   );
   lightBlock.place(
      {
         position: [-(151 / 2) + 81 + 4, 26, 0],
         scale: [8, 36, 0.015625],
      },
      logo,
   );
   //T
   lightBlock.place(
      {
         position: [-(151 / 2) + 113 + 18, 40, 0],
         scale: [38, 8, 0.015625],
      },
      logo,
   );
   lightBlock.place(
      {
         position: [-(151 / 2) + 127 + 4, 18, 0],
         scale: [8, 36, 0.015625],
      },
      logo,
   );

   // v3 patch for old v2 pos
   environment.forEach((e) => {
      if (e.position) {
         e.position = e.position.map((n) => n * 0.6) as typeof e.position;
      }
      if (e.localPosition) {
         e.localPosition = e.localPosition.map((n) => n * 0.6) as typeof e.localPosition;
      }
   });

   const logoGroup = ext.chroma.EnvironmentGroup.create(logo, [0, 0, 0]);
   if (includeFELT) {
      logoGroup.place(
         {
            position: [0, 1, 180],
            scale: [0.0625, 0.0625, 0.0625],
         },
         environment,
      );
   }
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
