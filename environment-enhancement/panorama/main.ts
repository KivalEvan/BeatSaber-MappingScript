import { genCircle } from '../../utility/circ.ts';
import { degToRad, ext, logger, range, types, vectorMul } from '../../depsLocal.ts';
import { environmentSave } from '../helpers.ts';
const EnvGrab = ext.chroma.EnvironmentGrab;
const { EnvironmentGroup } = ext.chroma;

const info: types.external.IEnvironmentJSON = {
   version: '1.0.0',
   name: 'Panorama',
   author: 'Kival Evan',
   environmentVersion: '1.0.0',
   environmentName: 'PyroEnvironment',
   description: 'Vanilla-compatible but not recommended.',
   features: {},
   environment: [],
   materials: {},
};

const mirrorBaseScale = 14.25;

export function generateEnvironment(): types.v3.IChromaEnvironment[] {
   const envAry: types.v3.IChromaEnvironment[] = [];
   const baseAry: types.v3.IChromaEnvironment[] = [];

   const cubeBlock = ext.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cube', material: 'PanoramaStandard' },
      },
      [0, 0, 0],
   );

   envAry.push(
      {
         lookupMethod: 'EndsWith',
         id: 'EnergyPanel',
         position: [0, 0.125, 6],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LeftPanel',
         position: [-5.125, 0.75, 12.25],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'RightPanel',
         position: [5.125, 0.75, 12.25],
      },
      {
         lookupMethod: 'Regex',
         id: EnvGrab.create('PlayerSetup')
            .child()
            .name('ScafoldTriangular')
            .id(null, true)
            .end().regex,
         active: false,
      },
      {
         lookupMethod: 'EndsWith',
         id: 'VideoBackground',
         active: false,
      },
      {
         lookupMethod: 'EndsWith',
         id: 'Video',
         active: false,
      },
      {
         lookupMethod: 'EndsWith',
         id: 'CrowdFlipbookGroup',
         position: [-4.83, -0.5, -3.8],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'Stairs',
         position: [0, -2, 51.5],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'Stairs',
         duplicate: 1,
         position: [51.5, -2, 0],
         rotation: [0, 90, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'Stairs',
         duplicate: 1,
         position: [-51.5, -2, 0],
         rotation: [0, 270, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'Stairs',
         duplicate: 1,
         position: [0, -2, -51.5],
         rotation: [0, 180, 0],
      },
      // {
      //    lookupMethod: 'EndsWith',
      //    id: 'Stairs',
      //    duplicate: 1,
      //    position: [51.5, -2, 0],
      //    rotation: [0, 90, 0],
      // },
      // {
      //    lookupMethod: 'EndsWith',
      //    id: 'Stairs',
      //    duplicate: 1,
      //    position: [-51.5, -2, 0],
      //    rotation: [0, 270, 0],
      // },
      // {
      //    lookupMethod: 'EndsWith',
      //    id: 'PyroLogo',
      //    duplicate: 1,
      //    position: [66.47, 15.1, -0.11],
      //    rotation: [0, 90, 0],
      //    scale: [19.73, 19.73, 19.73],
      // },
      // {
      //    lookupMethod: 'EndsWith',
      //    id: 'PyroLogo',
      //    duplicate: 1,
      //    position: [-66.47, 15.1, 0.11],
      //    rotation: [0, 270, 0],
      //    scale: [19.73, 19.73, 19.73],
      // },
      {
         lookupMethod: 'Contains',
         id: 'RunwayLaser',
         active: false,
      },
      {
         lookupMethod: 'EndsWith',
         id: 'VerticalPipe',
         active: false,
      },
      {
         lookupMethod: 'Regex',
         id: 'PixelatedImage(BG|Dark)?$',
         active: false,
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LightBoxesScaffoldingLeft',
         position: [-35, -1.5, 35],
         rotation: [0, 135, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LightBoxesScaffoldingRight',
         position: [35, -1.5, 35],
         rotation: [0, 225, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LightBoxesScaffoldingLeft',
         duplicate: 1,
         position: [35, -1.5, -35],
         rotation: [0, 315, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LightBoxesScaffoldingRight',
         duplicate: 1,
         position: [-35, -1.5, -35],
         rotation: [0, 45, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LightGroupCloserLeft',
         position: [-37.5, 0, 67.5],
         rotation: [0, 0, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LightGroupCloserRight',
         position: [37.5, 0, 67.5],
         rotation: [0, 0, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LightGroupCloserLeft',
         duplicate: 1,
         position: [37.5, 0, -67.5],
         rotation: [0, 180, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LightGroupCloserRight',
         duplicate: 1,
         position: [-37.5, 0, -67.5],
         rotation: [0, 180, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LightGroupCloserLeft',
         duplicate: 1,
         position: [-67.5, 0, -37.5],
         rotation: [0, 90, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LightGroupCloserRight',
         duplicate: 1,
         position: [-67.5, 0, 37.5],
         rotation: [0, 90, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LightGroupCloserLeft',
         duplicate: 1,
         position: [67.5, 0, 37.5],
         rotation: [0, 270, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: 'LightGroupCloserRight',
         duplicate: 1,
         position: [67.5, 0, -37.5],
         rotation: [0, 270, 0],
      },
      {
         lookupMethod: 'EndsWith',
         id: EnvGrab.create('TrackMirror').end().string,
         position: [
            -(mirrorBaseScale - 0.5) / 2 - 0.25,
            -0.01,
            -mirrorBaseScale / 2,
         ],
         scale: [0.2222 * mirrorBaseScale, 1, 0.00333 * mirrorBaseScale],
      },
   );

   let circ = genCircle(6, 10, [0, 0], -18 + 90);
   for (const i of range(5)) {
      const leftProjector = EnvGrab.create('LeftGroup')
         .child()
         .name('Projector')
         .id(i * 2 + 1);
      const rightProjector = EnvGrab.create('RightGroup')
         .child()
         .name('Projector');
      const leftLoop = EnvGrab.create('Fire')
         .child()
         .name('Left')
         .child()
         .name('FlameLoopable');
      const rightLoop = EnvGrab.create('Fire')
         .child()
         .name('Right')
         .child()
         .name('FlameLoopable');
      const leftBurst = EnvGrab.create('Fire')
         .child()
         .name('Left')
         .child((i + 1) * 2)
         .name('FlameBurst');
      const rightBurst = EnvGrab.create('Fire')
         .child()
         .name('Right')
         .child((i + 1) * 2)
         .name('FlameBurst');
      if (i) {
         rightProjector.id(i * 2);
         leftLoop.id(i);
         rightLoop.id(i);
      }
      const leftGroup = EnvironmentGroup.create([
         {
            lookupMethod: 'Regex',
            id: leftLoop.end().regex,
            position: [3.09, 0, 0],
            rotation: [0, 180, 7.5],
         },
         {
            lookupMethod: 'Regex',
            id: leftBurst.end().regex,
            position: [2.6, 0.375, 0],
            rotation: [0, 180, 0],
         },
         {
            lookupMethod: 'Regex',
            id: leftProjector.regex + '$',
            position: [0, 6.275, -2],
            rotation: [0, 0, 0],
            scale: [0.75, 0.75, 0.75],
         },
      ]);
      const rightGroup = EnvironmentGroup.create([
         {
            lookupMethod: 'Regex',
            id: rightLoop.end().regex,
            position: [-3.09, 0, 0],
            rotation: [0, 0, 7.5],
         },
         {
            lookupMethod: 'Regex',
            id: rightBurst.end().regex,
            position: [-2.6, 0.375, 0],
            rotation: [0, 0, 0],
         },
         {
            lookupMethod: 'Regex',
            id: rightProjector.regex + '$',
            position: [0, 6.275, -2],
            rotation: [0, 0, 0],
            scale: [0.75, 0.75, 0.75],
         },
      ]);
      envAry.push(
         ...leftGroup.place({
            position: [-circ[i][0], 0, circ[i][1]],
            rotation: [0, 180 + -(18 + i * 36), 0],
         }),
         ...rightGroup.place({
            position: [circ[i][0], 0, circ[i][1]],
            rotation: [0, 180 + (18 + i * 36), 0],
         }),
      );
   }

   circ = genCircle(6.25, 8, [0, 0], -22.5 + 90);
   for (const i of range(4)) {
      const leftProjector = EnvGrab.create('LightGroupLeft')
         .child(i)
         .name('LaserProjector')
         .end();
      const rightProjector = EnvGrab.create('LightGroupRight')
         .child(i)
         .name('LaserProjector')
         .end();
      const leftGroup = EnvironmentGroup.create([
         {
            lookupMethod: 'Regex',
            id: leftProjector.regex,
            position: [0, 0, 1],
            rotation: [0, 0, 0],
            scale: [0.25, 0.25, 0.25],
         },
      ]);
      const rightGroup = EnvironmentGroup.create([
         {
            lookupMethod: 'Regex',
            id: rightProjector.regex,
            position: [0, 0, 1],
            rotation: [0, 0, 0],
            scale: [0.25, 0.25, 0.25],
         },
      ]);
      envAry.push(
         ...rightGroup.place({
            position: [circ[i][0], 0, circ[i][1]],
            rotation: [0, 22.5 + i * 45, 0],
         }),
         ...leftGroup.place({
            position: [-circ[i][0], 0, circ[i][1]],
            rotation: [0, -(22.5 + i * 45), 0],
         }),
      );
   }

   circ = genCircle(9.75, 4, [0, 0], 45);
   for (const pos of circ) {
      cubeBlock.place(
         { position: [pos[0], -49.75, pos[1]], scale: [1, 100, 1] },
         envAry,
      );
      cubeBlock.place(
         { position: [pos[0], 0, pos[1]], scale: [7, 0.25, 0.5] },
         envAry,
      );
      cubeBlock.place(
         { position: [pos[0], 0, pos[1]], scale: [0.5, 0.25, 7] },
         envAry,
      );
   }

   circ = genCircle(8.75, 4, [0, 0], 45);
   for (const i of range(4)) {
      cubeBlock.place(
         {
            position: [circ[i][0], -0.125, circ[i][1]],
            scale: [3.875, 0.25, 2.05],
            rotation: [0, 45 + i * 90, 0],
         },
         envAry,
      );
   }

   circ = genCircle(8, 3, [0, 0], 90);
   for (const i of range(3)) {
      envAry.push(
         {
            lookupMethod: 'EndsWith',
            id: `ProjectorC (${i + 2})`,
            position: [circ[i][0], 6.3, circ[i][1]],
            rotation: [0, 180, 0],
            scale: [0.25, 0.25, 0.25],
         },
         // {
         //    lookupMethod: 'Regex',
         //    id:
         //       EnvGrab.create('ProjectorC')
         //          .id(i + 2)
         //          .child().regex + 'Projector(Handle)?$',
         //    rotation: [0, 180 + i * (360 / 3), 0],
         // }
      );
   }

   circ = genCircle(1, 24);
   for (const i of range(24)) {
      const r1 = 3,
         s1 = 0.1,
         r2 = 6,
         s2 = 0.1,
         r3 = 7,
         s3 = 0.1,
         rb = 7.5625,
         sb = 0.875;
      // rf = 26,
      // sf = 0.125,
      // rf2 = 24,
      // sf2 = 0.125;
      envAry.push(
         {
            geometry: { type: 'Cube', material: 'PanoramaOpaqueLight' },
            scale: [2 * r1 * Math.sin(degToRad(180 / 24)) + s1 / 3, s1, s1],
            position: [circ[i][0] * r1, -0.05, circ[i][1] * r1],
            rotation: [270, 90 + i * (360 / 24), 0],
            components: {
               ILightWithId: { type: 4 },
               TubeBloomPrePassLight: {
                  colorAlphaMultiplier: 2,
                  bloomFogIntensityMultiplier: 0.25,
               },
            },
         },
         {
            geometry: { type: 'Cube', material: 'PanoramaOpaqueLight' },
            scale: [2 * r2 * Math.sin(degToRad(180 / 24)) + s2 / 3, s2, s2],
            position: [circ[i][0] * r2, -0.05, circ[i][1] * r2],
            rotation: [270, 90 + i * (360 / 24), 0],
            components: {
               ILightWithId: { type: 4 },
               TubeBloomPrePassLight: {
                  colorAlphaMultiplier: 2,
                  bloomFogIntensityMultiplier: 0.25,
               },
            },
         },
         {
            geometry: { type: 'Cube', material: 'PanoramaOpaqueLight' },
            scale: [2 * r3 * Math.sin(degToRad(180 / 24)) + s3 / 3, s3, s3],
            position: [circ[i][0] * r3, -0.05, circ[i][1] * r3],
            rotation: [270, 90 + i * (360 / 24), 0],
            components: {
               ILightWithId: { type: 4 },
               TubeBloomPrePassLight: {
                  colorAlphaMultiplier: 2,
                  bloomFogIntensityMultiplier: 0.25,
               },
            },
         },
         {
            geometry: { type: 'Cube', material: 'PanoramaStandard' },
            scale: [2 * rb * Math.sin(degToRad(180 / 24)) + sb / 5, sb, 25],
            position: [circ[i][0] * rb, -12.45, circ[i][1] * rb],
            rotation: [270, 90 + i * (360 / 24), 0],
         },
         // {
         //    geometry: { type: 'Plane', material: 'PanoramaOpaqueLight' },
         //    scale: [
         //       (2 * rf * Math.sin(degToRad(180 / 24)) + sf / 4) * 0.095,
         //       sf,
         //       sf,
         //    ],
         //    position: [circ[i][0] * rf, 8, circ[i][1] * rf],
         //    rotation: [270, 90 + i * (360 / 24), 0],
         //    components: {
         //       ILightWithId: { type: 4 },
         //       TubeBloomPrePassLight: {
         //          colorAlphaMultiplier: 2,
         //          bloomFogIntensityMultiplier: 0.25,
         //       },
         //    },
         // },
         // {
         //    geometry: { type: 'Plane', material: 'PanoramaOpaqueLight' },
         //    scale: [
         //       (2 * rf2 * Math.sin(degToRad(180 / 24)) + sf2 / 4) * 0.095,
         //       sf2,
         //       sf2,
         //    ],
         //    position: [circ[i][0] * rf2, 12, circ[i][1] * rf2],
         //    rotation: [270, 90 + i * (360 / 24), 0],
         //    components: {
         //       ILightWithId: { type: 4 },
         //       TubeBloomPrePassLight: {
         //          colorAlphaMultiplier: 2,
         //          bloomFogIntensityMultiplier: 0.25,
         //       },
         //    },
         // }
      );
   }
   circ = genCircle(1, 24, [0, 0], -7.5);
   // for (const i of range(24)) {
   //    const rf = 25,
   //       sf = 0.125;
   //    envAry.push({
   //       geometry: { type: 'Plane', material: 'PanoramaOpaqueLight' },
   //       scale: [
   //          (2 * rf * Math.sin(degToRad(180 / 24)) + sf / 4) * 0.095,
   //          sf,
   //          sf,
   //       ],
   //       position: [circ[i][0] * rf, 10, circ[i][1] * rf],
   //       rotation: [270, 97.5 + i * (360 / 24), 0],
   //       components: {
   //          ILightWithId: { type: 4 },
   //          TubeBloomPrePassLight: {
   //             colorAlphaMultiplier: 2,
   //             bloomFogIntensityMultiplier: 0.25,
   //          },
   //       },
   //    });
   // }

   envAry.push(
      {
         lookupMethod: 'EndsWith',
         id: 'StageRing.[0]ScafoldCirclular',
         position: [0, 8, 0],
         scale: vectorMul([1, 1, 1], 0.79),
      },
      {
         lookupMethod: 'EndsWith',
         id: 'StageRing.[0]ScafoldCirclular',
         duplicate: 1,
         position: [0, 8, 0],
         rotation: [0, 180, 0],
         scale: vectorMul([1, 1, 1], 0.79),
      },
      {
         lookupMethod: 'EndsWith',
         id: 'StageRing.[0]ScafoldCirclular',
         duplicate: 1,
         position: [0, 7.1, 0],
         scale: vectorMul([1, 1, 1], 0.4375),
      },
      {
         lookupMethod: 'EndsWith',
         id: 'StageRing.[0]ScafoldCirclular',
         duplicate: 1,
         position: [0, 7.1, 0],
         rotation: [0, 180, 0],
         scale: vectorMul([1, 1, 1], 0.4375),
      },
      {
         lookupMethod: 'EndsWith',
         id: 'StageRing.[0]ScafoldCirclular',
         duplicate: 1,
         position: [0, 18.5, 0],
         scale: vectorMul([1, 1, 1], 2.75),
      },
      {
         lookupMethod: 'EndsWith',
         id: 'StageRing.[0]ScafoldCirclular',
         duplicate: 1,
         position: [0, 18.5, 0],
         rotation: [0, 180, 0],
         scale: vectorMul([1, 1, 1], 2.75),
      },
   );
   circ = genCircle(13.8125, 8, [0, 0], 45 + 22.5);
   for (const i of range(-1, 4)) {
      envAry.push(
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [-circ[0][0], 1 + i * 2.575, circ[0][1]],
            rotation: [0, 180, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [-circ[1][0], 1 + i * 2.575, circ[1][1]],
            rotation: [0, 90, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [circ[0][0], 1 + i * 2.575, circ[0][1]],
            rotation: [0, 180, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [circ[1][0], 1 + i * 2.575, circ[1][1]],
            rotation: [0, 270, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [-circ[0][0], 1 + i * 2.575, -circ[0][1]],
            rotation: [0, 0, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [-circ[1][0], 1 + i * 2.575, -circ[1][1]],
            rotation: [0, 90, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [circ[0][0], 1 + i * 2.575, -circ[0][1]],
            rotation: [0, 0, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [circ[1][0], 1 + i * 2.575, -circ[1][1]],
            rotation: [0, 270, 0],
         },
      );
   }
   for (const i of range(0, 24, 3.75)) {
      envAry.push(
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [i, 8, 12.77],
            rotation: [90, 90, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [-i, 8, 12.77],
            rotation: [90, 270, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [i, 8, -12.77],
            rotation: [90, 90, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [-i, 8, -12.77],
            rotation: [90, 270, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [12.77, 8, i],
            rotation: [90, 0, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [12.77, 8, -i],
            rotation: [90, 180, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [-12.77, 8, i],
            rotation: [90, 0, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [-12.77, 8, -i],
            rotation: [90, 180, 0],
            scale: [1.25, 1.25, 1.25],
         },
      );
   }
   for (const i of range(0, 20, 3.75)) {
      envAry.push(
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [i, 7.999, 5.3],
            rotation: [90, 90, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [-i, 7.999, 5.3],
            rotation: [90, 270, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [i, 7.999, -5.3],
            rotation: [90, 90, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [-i, 7.999, -5.3],
            rotation: [90, 270, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [5.3, 8, i],
            rotation: [90, 0, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [5.3, 8, -i],
            rotation: [90, 180, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [-5.3, 8, i],
            rotation: [90, 0, 0],
            scale: [1.25, 1.25, 1.25],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[5]ScafoldTriangularMid',
            duplicate: 1,
            position: [-5.3, 8, -i],
            rotation: [90, 180, 0],
            scale: [1.25, 1.25, 1.25],
         },
      );
   }

   circ = genCircle(20.95, 24, [0, 0], 360 / 24 / 2 + (360 / 24) * 3);
   for (const i of range(-1, 4)) {
      envAry.push(
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [-circ[0][0], 1 + i * 2.575, circ[0][1]],
            rotation: [0, 180, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [-circ[1][0], 1 + i * 2.575, circ[1][1]],
            rotation: [0, 90, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [circ[0][0], 1 + i * 2.575, circ[0][1]],
            rotation: [0, 180, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [circ[1][0], 1 + i * 2.575, circ[1][1]],
            rotation: [0, 270, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [-circ[0][0], 1 + i * 2.575, -circ[0][1]],
            rotation: [0, 0, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [-circ[1][0], 1 + i * 2.575, -circ[1][1]],
            rotation: [0, 90, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [circ[0][0], 1 + i * 2.575, -circ[0][1]],
            rotation: [0, 0, 0],
         },
         {
            lookupMethod: 'EndsWith',
            id: 'MainStageSetup.[0]ScafoldTriangularLeft',
            duplicate: 1,
            scale: vectorMul([5, 3.44, 5], 0.25),
            position: [circ[1][0], 1 + i * 2.575, -circ[1][1]],
            rotation: [0, 270, 0],
         },
      );
   }

   circ = genCircle(20.4375, 24, [0, 0], 360 / 24 / 2 + (360 / 24) * 3);
   const remapSkip = [0, 1, 6, 7, 12, 13, 18, 19];
   for (const i of range(8)) {
      const xdd = remapSkip[i];
      for (const id of range(8, 11)) {
         envAry.push({
            lookupMethod: 'EndsWith',
            id: `MainStageSetup.[${id}]4SlotBox`,
            duplicate: 1,
            position: [circ[xdd][0], 1.5 + (id - 8) * 2.25, circ[xdd][1]],
            rotation: [
               0,
               270 - (360 / 24 / 2 + (360 / 24) * 3) + xdd * (360 / 24),
               270,
            ],
            scale: [3, 3, 3],
         });
      }
   }

   circ = genCircle(13, 8, [0, 0], 45 + 22.5);
   for (const i of range(8)) {
      envAry.push({
         lookupMethod: 'EndsWith',
         id: 'SpeakerHigh' + (i ? ` (${i})` : ''),
         position: [circ[i][0], 4, circ[i][1]],
         rotation: [8, 200.5 + i * (360 / 8), 0],
         scale: [1.125, 1.125, 1.125],
      });
   }

   circ = genCircle(12.965, 8, [0, 0], 45 + 22.5);
   for (const i of range(8)) {
      envAry.push(
         cubeBlock.place({
            position: [circ[i][0], 4.9, circ[i][1]],
            rotation: [8, 200.5 + i * (360 / 8), 0],
            scale: [0.8, 1.785, 0.275],
         }),
      );
   }

   circ = genCircle(14.5, 8, [0, 0], 45 + 22.5);
   for (const i of range(8)) {
      envAry.push({
         lookupMethod: 'EndsWith',
         id: 'SpeakerHigh' + (i ? ` (${i})` : ''),
         duplicate: 1,
         position: [circ[i][0], 4, circ[i][1]],
         rotation: [8, 22.5 + i * (360 / 8), 0],
         scale: [1.125, 1.125, 1.125],
      });
   }

   circ = genCircle(14.535, 8, [0, 0], 45 + 22.5);
   for (const i of range(8)) {
      envAry.push(
         cubeBlock.place({
            position: [circ[i][0], 4.9, circ[i][1]],
            rotation: [8, 22.5 + i * (360 / 8), 0],
            scale: [0.8, 1.785, 0.275],
         }),
      );
   }

   circ = genCircle(8.125, 24, [0, 0], -90 - 360 / 24 / 2);
   for (const i of range(24)) {
      cubeBlock.place(
         {
            position: [circ[i][0], -10.25, circ[i][1]],
            rotation: [0, 360 / 24 / 2 + i * (360 / 24), 0],
            scale: [0.25, 20, 0.25],
         },
         envAry,
      );
      cubeBlock.place(
         {
            position: [circ[i][0], -9.875, circ[i][1]],
            rotation: [0, 360 / 24 / 2 + i * (360 / 24), 0],
            scale: [0.1, 20, 0.4],
         },
         envAry,
      );
   }

   circ = genCircle(14.4, 16, [0, 0], 360 / 16 / 2);
   for (const i of range(16)) {
      envAry.push({
         lookupMethod: 'Regex',
         id: 'PlayerSetup\\.\\[\\d+\\]Projector \\(3\\)$',
         duplicate: 1,
         position: [circ[i][0], 6.85, circ[i][1]],
         rotation: [0, 90 - 360 / 16 / 2 + i * (360 / 16), 0],
      });
   }

   circ = genCircle(14.4, 8);
   for (const i of range(8)) {
      envAry.push({
         lookupMethod: 'Regex',
         id: 'PlayerSetup\\.\\[\\d+\\]Projector \\(4\\)$',
         duplicate: 1,
         position: [circ[i][0], 6.85, circ[i][1]],
         rotation: [0, 90 + i * (360 / 8), 0],
      });
   }

   circ = genCircle(14.375, 16, [0, 0], 360 / 8 / 8);
   for (const i of range(16)) {
      envAry.push({
         lookupMethod: 'Regex',
         id: 'PlayerSetup\\.\\[\\d+\\]Projector \\(5\\)$',
         duplicate: 1,
         position: [circ[i][0], 6.8, circ[i][1]],
         rotation: [0, 270 - 360 / 8 / 4 + i * (360 / 16), 0],
      });
   }

   circ = genCircle(14.375, 16, [0, 0], -360 / 8 / 8);
   for (const i of range(16)) {
      envAry.push({
         lookupMethod: 'Regex',
         id: 'PlayerSetup\\.\\[\\d+\\]Projector \\(6\\)$',
         duplicate: 1,
         position: [circ[i][0], 6.8, circ[i][1]],
         rotation: [0, 270 + 360 / 8 / 4 + i * (360 / 16), 0],
      });
   }

   circ = genCircle(49, 4, [0, 0], 15);
   for (const i of range(4)) {
      envAry.push({
         lookupMethod: 'Regex',
         id: `MainStageSetup\\.\\[\\d+\\]SpeakerSetupLeft$`,
         duplicate: 1,
         position: [circ[i][0], 12, circ[i][1]],
         rotation: [0, 90 - 15 + i * (360 / 4), 0],
      });
   }

   circ = genCircle(49, 4, [0, 0], -15);
   for (const i of range(4)) {
      envAry.push({
         lookupMethod: 'Regex',
         id: `MainStageSetup\\.\\[\\d+\\]SpeakerSetupLeft$`,
         duplicate: 1,
         position: [circ[i][0], 12, circ[i][1]],
         rotation: [0, 90 + 15 + i * (360 / 4), 0],
      });
   }

   // yeet
   envAry.push(
      {
         lookupMethod: 'Regex',
         id: `MainStageSetup\\.\\[\\d+\\]SpeakerSetupLeft( \\(\\d+\\))?$`,
         active: false,
      },
      {
         lookupMethod: 'Regex',
         id: `MainStageSetup\\.\\[\\d+\\]ScafoldTriangular(Left|Right|Mid)$`,
         active: false,
      },
      {
         lookupMethod: 'Regex',
         id: `MainStageSetup\\.\\[\\d+\\]4SlotBox$`,
         position: [0, -999999, 0],
      },
      {
         lookupMethod: 'Regex',
         id: `PlayerSetup\\.\\[\\d+\\]Projector \\(\\d+\\)$`,
         active: false,
      },
   );

   circ = genCircle(16, 24, [0, 0], -90);
   // for (const i of range(24)) {
   //    continue;
   //    envAry.push({
   //       geometry: {
   //          type: 'Cube',
   //          material: {
   //             shader: 'BTSPillar',
   //             color: colorFrom(i * (360 / 24), 1, 2, 1, 'hsva'),
   //          },
   //       },
   //       position: [circ[i][0], 0 + i * 0.001, circ[i][1]],
   //       rotation: [0, i * (360 / 24), 0],
   //       scale: [LANE_SIZE * 4, 0.125, 20],
   //    });
   // }

   return envAry.concat(baseAry);
}

export function generateMaterial() {
   return {
      PanoramaStandard: { shader: 'Standard' },
      PanoramaOpaqueLight: { shader: 'OpaqueLight' },
      PanoramaTransparentLight: { shader: 'TransparentLight' },
   } as Record<string, types.v3.IChromaMaterial>;
}

export const insertEnvironment = (d: types.wrapper.IWrapBeatmap) => {
   if (d.difficulty.customData.environment?.length) {
      logger.warn('Environment enhancement previously existed, replacing');
   }
   d.difficulty.customData.environment = generateEnvironment();
   d.difficulty.customData.materials = generateMaterial();
};

export function save(path = import.meta.url) {
   environmentSave(
      {
         ...info,
         environment: generateEnvironment(),
         materials: generateMaterial(),
      },
      path,
   );
}

if (import.meta.main) {
   save();
}
