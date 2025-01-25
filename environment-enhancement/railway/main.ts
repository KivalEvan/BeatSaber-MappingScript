import { ext, lerp, logger, normalize, pRandomFn, types, vectorAdd, vectorMul } from '@bsmap';
import { environmentSave } from '../helpers.ts';

const info: types.external.IEnvironmentJSON = {
   version: '1.0.0',
   name: 'Railway',
   author: 'Kival Evan',
   environmentVersion: '1.0.0',
   environmentName: 'WeaveEnvironment',
   description: 'Vanilla-compatible environment.',
   features: {},
   environment: [],
   materials: {},
};

const EnvGrab = ext.chroma.EnvironmentGrab;

const pillarHeight = 12;
const pillarScale = 0.5;
const pillarCount = 9;
const pillarGap = 4;
const pillarOffsetZ = -11.5;

const trackOffset = [0, -1, 0];
const structureOffset = [0, 0.75, 0];

export function generateEnvironment(): types.v3.IChromaEnvironment[] {
   const envAry: types.v3.IChromaEnvironment[] = [];
   const trackAry: types.v3.IChromaEnvironment[] = [];
   const structureAry: types.v3.IChromaEnvironment[] = [];
   const trainAry: types.v3.IChromaEnvironment[] = [];
   const pRandom = pRandomFn('Railway');

   envAry.push(
      {
         id: EnvGrab.Preset.ENVIRONMENT.regex,
         lookupMethod: 'Regex',
         // components: { BloomFogEnvironment: { startY: -22.5, height: 15 } },
      },
      {
         id: EnvGrab.create().child().name('LightGroup0').end().regex,
         lookupMethod: 'Regex',
         position: [-4, -0.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup1').end().regex,
         lookupMethod: 'Regex',
         position: [4, -0.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup2').end().regex,
         lookupMethod: 'Regex',
         position: [-4, 6.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup3').end().regex,
         lookupMethod: 'Regex',
         position: [4, 6.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup4').end().regex,
         lookupMethod: 'Regex',
         position: [-2.25, -1.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup5').end().regex,
         lookupMethod: 'Regex',
         position: [2.25, -1.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup6').end().regex,
         lookupMethod: 'Regex',
         position: [-3, 9.25, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup7').end().regex,
         lookupMethod: 'Regex',
         position: [3, 9.25, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup8').end().regex,
         lookupMethod: 'Regex',
         position: [-4.75, 1.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup9').end().regex,
         lookupMethod: 'Regex',
         position: [4.75, 1.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup10').end().regex,
         lookupMethod: 'Regex',
         position: [-4.75, 3.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup11').end().regex,
         lookupMethod: 'Regex',
         position: [4.75, 3.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup12').end().regex,
         lookupMethod: 'Regex',
         position: [0, 9.5, 20.2],
      },
      {
         id: EnvGrab.create().child().name('LightGroup13').end().regex,
         lookupMethod: 'Regex',
         position: [0, 5.125, 20.2],
      },
      {
         id: EnvGrab.create().child().name('LightGroup14').end().regex,
         lookupMethod: 'Regex',
         position: [-4.125, 2.25, 20],
      },
      {
         id: EnvGrab.create().child().name('LightGroup15').end().regex,
         lookupMethod: 'Regex',
         position: [4.125, 2.25, 20],
      },
      // {
      //    id: EnvGrab.create()
      //       .child()
      //       .name('LightGroup\\d+')
      //       .child()
      //       .name('Laser(Long)?')
      //       .child()
      //       .name('StaticBase')
      //       .end().regex,
      //    lookupMethod: 'Regex',
      //    active: false,
      // }
   );
   for (let i = 0; i < 12; i++) {
      envAry.push({
         id: EnvGrab.create().child().name('LightGroup13').child(i).name('LaserLong').end().regex,
         lookupMethod: 'Regex',
         localPosition: [lerp(normalize(i, 0, 11), -4.25, 4.25), 0, 0],
      });
   }

   const cubeBlock = ext.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cube', material: 'RailwayStandard' },
      },
      [0, 0, 0],
   );
   const cubeLight = ext.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cube', material: 'RailwayTransparentLight' },
         components: {
            ILightWithId: { type: 4 },
            TubeBloomPrePassLight: {
               colorAlphaMultiplier: 2,
               bloomFogIntensityMultiplier: 0.25,
            },
         },
      },
      [0, 0, 0],
   );
   const pillarBlock = ext.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cylinder', material: 'RailwayStandard' },
      },
      [0, 0, 0],
   );

   const pillarPart = ext.chroma.EnvironmentGroup.create([
      cubeBlock.place({
         position: [0, 0, 0.75],
         scale: [1, 2, 0.75],
         rotation: [20, 0, 0],
      }),
      cubeBlock.place({
         position: [0, 1.6, 1.7],
         scale: [1, 2, 0.75],
         rotation: [40, 0, 0],
      }),
      cubeBlock.place({
         position: [0, 2.8, 3.1],
         scale: [1, 2, 0.75],
         rotation: [60, 0, 0],
      }),
   ]);
   const pillarGroup = ext.chroma.EnvironmentGroup.create([
      pillarBlock.place({
         position: [0, -1 / 8 - 1 / 8 - 1 / 2 - 1 / 4, 0],
         scale: [2, 1 / 4, 2],
      }),
      pillarBlock.place({
         position: [0, -1 / 16 - 1 / 8 - 1 / 2, 0],
         scale: [1.6875, 1 / 16, 1.6875],
      }),
      pillarBlock.place({
         position: [0, -1 / 4 - 1 / 8, 0],
         scale: [1.4375, 1 / 4, 1.4375],
      }),
      pillarBlock.place({
         position: [0, -1 / 16, 0],
         scale: [1.6875, 1 / 16, 1.6875],
      }),
      pillarBlock.place({
         position: [0, pillarHeight / 2, 0],
         scale: [1.24, pillarHeight / 2, 1.24],
      }),
      cubeBlock.place({
         position: [0, pillarHeight / 2, 0],
         scale: [1, pillarHeight, 1],
         rotation: [0, 0, 0],
      }),
      cubeBlock.place({
         position: [0, pillarHeight / 2, 0],
         scale: [1, pillarHeight, 1],
         rotation: [0, 30, 0],
      }),
      cubeBlock.place({
         position: [0, pillarHeight / 2, 0],
         scale: [1, pillarHeight, 1],
         rotation: [0, 60, 0],
      }),
      pillarBlock.place({
         position: [0, pillarHeight + 1 / 16, 0],
         scale: [1.6875, 1 / 16, 1.6875],
      }),
      pillarBlock.place({
         position: [0, pillarHeight + 1 / 8 + 1 / 4, 0],
         scale: [1.4375, 1 / 4, 1.4375],
      }),
      pillarBlock.place({
         position: [0, pillarHeight + 1 / 8 + 1 / 2 + 1 / 16, 0],
         scale: [1.6875, 1 / 16, 1.6875],
      }),
      pillarBlock.place({
         position: [0, pillarHeight + 1 / 8 + 1 / 2 + 1 / 8 + 1 / 4, 0],
         scale: [2, 1 / 4, 2],
      }),
      cubeBlock.place({
         position: [0, pillarHeight + 1.25, 0],
         scale: [2.25, 1 / 4, 2.25],
      }),
      ...pillarPart.place({ position: [0, pillarHeight + 2, 0], rotation: [0, 0, 0] }),
      ...pillarPart.place({ position: [0, pillarHeight + 2, 0], rotation: [0, 90, 0] }),
      ...pillarPart.place({ position: [0, pillarHeight + 2, 0], rotation: [0, 180, 0] }),
      ...pillarPart.place({ position: [0, pillarHeight + 2, 0], rotation: [0, 270, 0] }),
   ]);
   const domePart = ext.chroma.EnvironmentGroup.create([
      cubeBlock.place({
         position: [-9.2, -1.4, 0],
         scale: [2.5, 0.25, 0.375],
         rotation: [0, 0, 10],
      }),
      cubeBlock.place({
         position: [-6.775, -0.85, 0],
         scale: [2.5, 0.25, 0.375],
         rotation: [0, 0, 15],
      }),
      cubeBlock.place({
         position: [-4.4, -0.1, 0],
         scale: [2.5, 0.25, 0.375],
         rotation: [0, 0, 20],
      }),
      cubeBlock.place({
         position: [-2.125, 0.5125, 0],
         scale: [2.5, 0.25, 0.375],
         rotation: [0, 0, 10],
      }),
   ]);
   const domeGroup = ext.chroma.EnvironmentGroup.create([
      ...domePart.place({}),
      ...domePart.place({ rotation: [0, 180, 0] }),
      cubeBlock.place({
         position: [0, 0.725, 0],
         scale: [2, 0.25, 0.375],
         rotation: [0, 0, 0],
      }),
   ]);

   for (let sign = -1; sign < 2; sign += 2) {
      for (let i = 1; i <= pillarCount / 2; i++) {
         pillarGroup.place(
            {
               position: [5 * sign, 0, pillarOffsetZ - pillarGap * i * 2],
               scale: vectorMul([1, 1, 1], pillarScale),
            },
            structureAry,
         );
         cubeBlock.place(
            {
               position: [10.5 * sign, 0, pillarOffsetZ - pillarGap * i * 2],
               scale: [1 / 2, 1024, 1 / 2],
            },
            structureAry,
         );
         cubeBlock.place(
            {
               position: [
                  60.5 * sign,
                  pillarHeight * pillarScale + 0.125,
                  pillarOffsetZ - pillarGap * i * 2,
               ],
               scale: [100, 1 / 4, 1 / 4],
            },
            structureAry,
         );
         if (sign === -1) {
            domeGroup.place(
               {
                  position: [
                     0,
                     pillarHeight * pillarScale + 4.5,
                     pillarOffsetZ - pillarGap * i * 2,
                  ],
               },
               structureAry,
            );
            cubeBlock.place(
               {
                  position: [
                     0,
                     pillarHeight * pillarScale + 3.25,
                     pillarOffsetZ - pillarGap * i * 2,
                  ],
                  scale: [16, 1 / 2, 1 / 4],
               },
               structureAry,
            );
            cubeBlock.place(
               {
                  position: [0, -12, pillarOffsetZ - pillarGap * i * 2],
                  scale: [512, 1, 1 / 4],
               },
               structureAry,
            );
         }
      }

      // pillar
      for (let i = 0; i < pillarCount; i++) {
         pillarGroup.place(
            {
               position: [5 * sign, 0, pillarOffsetZ + i * pillarGap],
               scale: vectorMul([1, 1, 1], pillarScale),
            },
            structureAry,
         );
         cubeBlock.place(
            {
               position: [10.5 * sign, 0, pillarOffsetZ + i * pillarGap],
               scale: [1 / 2, 1024, 1 / 2],
            },
            structureAry,
         );
         cubeBlock.place(
            {
               position: [
                  60.5 * sign,
                  pillarHeight * pillarScale + 0.125,
                  pillarOffsetZ + i * pillarGap,
               ],
               scale: [100, 1 / 4, 1 / 4],
            },
            structureAry,
         );
         if (sign === -1) {
            domeGroup.place(
               { position: [0, pillarHeight * pillarScale + 4.5, pillarOffsetZ + i * pillarGap] },
               structureAry,
            );
            cubeBlock.place(
               {
                  position: [0, pillarHeight * pillarScale + 3.25, pillarOffsetZ + i * pillarGap],
                  scale: [16, 1 / 2, 1 / 4],
               },
               structureAry,
            );
            cubeBlock.place(
               {
                  position: [0, -12, pillarOffsetZ + i * pillarGap],
                  scale: [512, 1, 1 / 4],
               },
               structureAry,
            );
         }
      }

      // structure
      cubeBlock.place(
         {
            position: [5 * sign, -(1 / 8 + 1 / 2 + 1 / 8 + 1 / 4) * pillarScale - 1, 0],
            scale: [1.25, 1 / 4, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [5 * sign, -(1 / 8 + 1 / 2 + 1 / 8 + 1 / 4) * pillarScale - 1 / 4, 0],
            scale: [1.25, 1 / 4, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         { position: [3.25 * sign, -1.75, 0], scale: [1 / 2, 1 / 8, 1024] },
         structureAry,
      );
      cubeBlock.place(
         { position: [3.25 * sign, -2.25, 0], scale: [1 / 2, 1 / 8, 1024] },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [5 * sign, pillarHeight * pillarScale - 1.5, 0],
            scale: [1 / 2, 1 / 8, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [5 * sign, 0.125, 0],
            scale: [1 / 8, 1 / 8, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [5 * sign, pillarHeight * pillarScale + 0.5, 0],
            scale: [1 / 2, 1 / 8, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [5 * sign, pillarHeight * pillarScale + 2.75, 0],
            scale: [1 / 2, 1 / 8, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [3 * sign, pillarHeight * pillarScale + 2.75, 0],
            scale: [1 / 4, 1 / 2, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [7 * sign, pillarHeight * pillarScale + 2.75, 0],
            scale: [1 / 4, 1 / 2, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [10.5 * sign, 4, 0],
            scale: [1 / 4, 1 / 4, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [10.5 * sign, 1.5, 0],
            scale: [1 / 4, 1 / 4, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [3 * sign, -7, 0],
            scale: [1 / 4, 1 / 4, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [6 * sign, -5.5, 0],
            scale: [1 / 4, 1 / 4, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [9 * sign, -4, 0],
            scale: [1 / 4, 1 / 4, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [5.5 * sign, 2, 546],
            scale: [1 / 8, 1 / 8, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [5 * sign, 2.5, 548],
            scale: [1 / 6, 1 / 6, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [5 * sign, 1.5, 548],
            scale: [1 / 6, 1 / 6, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [6 * sign, 0.5, 544],
            scale: [1 / 6, 1 / 6, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [6 * sign, 3.5, 544],
            scale: [1 / 6, 1 / 6, 1024],
         },
         structureAry,
      );
      for (let i = 0; i < 12; i++) {
         cubeBlock.place(
            {
               position: [
                  11 * sign,
                  pillarHeight * pillarScale + 1,
                  pillarOffsetZ + i * 2 * pillarGap + 1.5 ** i,
               ],
               scale: [100, 1 / 4, 1 / 4],
               rotation: [0, 0, 330 * sign],
            },
            structureAry,
         );
         cubeBlock.place(
            {
               position: [11 * sign, -3, pillarOffsetZ + i * 2 * pillarGap + 1.5 ** i],
               scale: [100, 1 / 4, 1 / 4],
               rotation: [0, 0, 30 * sign],
            },
            structureAry,
         );
      }
      for (let i = 0; i < 6; i++) {
         cubeBlock.place(
            {
               position: [
                  4 * sign,
                  -1.5,
                  pillarOffsetZ + (pillarCount - 4) * 2 * pillarGap + i * 6 * pillarGap + 2 ** i,
               ],
               scale: [2, 1 / 3, 1 / 8],
               rotation: [0, 0, 45 * sign],
            },
            structureAry,
         );
         cubeBlock.place(
            {
               position: [
                  4 * sign,
                  -1.5,
                  pillarOffsetZ +
                  0.5 +
                  (pillarCount - 4) * 2 * pillarGap +
                  i * 6 * pillarGap +
                  2 ** i,
               ],
               scale: [2, 1 / 3, 1 / 8],
               rotation: [0, 0, 45 * sign],
            },
            structureAry,
         );
         cubeBlock.place(
            {
               position: [
                  4 * sign,
                  2,
                  pillarOffsetZ + (pillarCount - 1) * 2 * pillarGap + i * 6 * pillarGap + 3 ** i,
               ],
               scale: [100, 1 / 4, 1 / 4],
               rotation: [0, 0, 300 * sign],
            },
            structureAry,
         );
         cubeBlock.place(
            {
               position: [
                  4 * sign,
                  -2,
                  pillarOffsetZ + (pillarCount - 1) * 2 * pillarGap + i * 6 * pillarGap + 3 ** i,
               ],
               scale: [100, 1 / 4, 1 / 4],
               rotation: [0, 0, 45 * sign],
            },
            structureAry,
         );
      }

      // railway
      cubeBlock.place({ position: [0.875 * sign, 0, 0], scale: [1 / 24, 1 / 4, 1024] }, trackAry);
      cubeBlock.place(
         { position: [0.875 * sign, 3 / 16, 0], scale: [1 / 8, 1 / 8, 1024] },
         trackAry,
      );

      // outer field thingy
      for (let i = 0; i < 192; i++) {
         if (i < 92) continue;
         cubeLight.place(
            {
               position: [pRandom(11, 25) * sign, pRandom(-4, 22), -180 + i + 1.03 ** i],
               scale: [1 / 24, 1 / 24, pRandom(8, 12)],
            },
            envAry,
         );
         cubeLight.place(
            {
               position: [pRandom(11, 25) * sign, pRandom(-4, 22), -175 + i + 1.03 ** i],
               scale: [1 / 24, 1 / 24, pRandom(2, 4)],
               track: `railwayField${pRandom(0, 9, true)}`,
            },
            envAry,
         );
      }

      for (let i = 0; i < 100; i++) {
         cubeBlock.place(
            {
               position: [(8 + pRandom()) * sign, -42 + pRandom(), -104 + i * 3],
               scale: [2 + pRandom(), 64 + pRandom(42), 2 + pRandom()],
               rotation: [0, 0, (pRandom(10) + 340) * sign],
            },
            envAry,
         );
         cubeBlock.place(
            {
               position: [(8 + pRandom()) * sign, -32 + pRandom(), -102.5 + i * 3],
               scale: [2 + pRandom(), 80 + pRandom(80), 2 + pRandom()],
               rotation: [0, 0, (pRandom(10) + 320) * sign],
            },
            envAry,
         );
         cubeBlock.place(
            {
               position: [(8 + pRandom()) * sign, 64 - pRandom(), -104 + i * 3],
               scale: [2 + pRandom(), 64 + pRandom(42), 2 + pRandom()],
               rotation: [0, 0, -(pRandom(10) + 20) * sign],
            },
            envAry,
         );
         cubeBlock.place(
            {
               position: [(8 + pRandom()) * sign, 48 - pRandom(), -102.5 + i * 3],
               scale: [2 + pRandom(), 80 + pRandom(80), 2 + pRandom()],
               rotation: [0, 0, -(pRandom(10) + 40) * sign],
            },
            envAry,
         );
         cubeBlock.place(
            {
               position: [-(5 + pRandom()) * sign, 50 - pRandom(), -104 + i * 3],
               scale: [2 + pRandom(), 40 + pRandom(40), 2 + pRandom()],
               rotation: [0, 0, -(pRandom(10) + 5) * sign],
            },
            envAry,
         );
         if (sign === -1) {
            cubeBlock.place(
               {
                  position: [pRandom(-2, 2), 50 - pRandom(), -102.5 + i * 3],
                  scale: [2 + pRandom(), 40 + pRandom(10), 2 + pRandom()],
                  rotation: [0, 0, pRandom(-10, 10)],
               },
               envAry,
            );
         }
      }
   }
   cubeBlock.place(
      {
         position: [0, pillarHeight * pillarScale + 5.3125, 0],
         scale: [1 / 2, 1 / 4, 1024],
      },
      structureAry,
   );
   cubeBlock.place(
      {
         position: [0, 3.75, pillarOffsetZ + (pillarCount - 1) * pillarGap],
         scale: [21, 1 / 2, 1 / 4],
      },
      structureAry,
   );
   cubeBlock.place(
      {
         position: [0, 5, pillarOffsetZ + (pillarCount - 1) * pillarGap],
         scale: [21, 1 / 4, 1 / 4],
      },
      structureAry,
   );
   cubeBlock.place(
      {
         position: [0, 6.75, pillarOffsetZ + (pillarCount - 1) * pillarGap],
         scale: [10, 1 / 8, 1 / 8],
      },
      structureAry,
   );
   for (let i = -2; i < 3; i++) {
      cubeBlock.place(
         {
            position: [i * 1.5, 5.9375, pillarOffsetZ + (pillarCount - 1) * pillarGap],
            scale: [1 / 8, 1.625, 1 / 8],
         },
         structureAry,
      );
   }

   for (let i = 0; i < 32; i++) {
      if (i < 16) {
         cubeBlock.place(
            {
               position: [0.875, -0.125, i + 1.15 ** i + 1],
               scale: [0.25, 0.125, 0.125],
            },
            trackAry,
         );
         cubeBlock.place(
            {
               position: [-0.875, -0.125, i + 1.15 ** i + 1],
               scale: [0.25, 0.125, 0.125],
            },
            trackAry,
         );
      }
      cubeBlock.place(
         {
            position: [1 / 16 - pRandom(1 / 8), -3 / 16, i + 1.15 ** i + 1],
            scale: [3 + pRandom(1 / 4), 0.125, 0.375],
         },
         trackAry,
      );
      cubeBlock.place(
         {
            position: [1 / 16 - pRandom(1 / 8), -3 / 16, -(i + 1.15 ** i + 1)],
            scale: [3 + pRandom(1 / 4), 0.125, 0.375],
         },
         trackAry,
      );
   }

   // funny gizmo
   // cubeLight.place({ position: [0, 0, 8], scale: [1, 1 / 16, 1 / 16] }, envAry);
   // cubeLight.place({ position: [0, 0, 8], scale: [1 / 16, 1, 1 / 16] }, envAry);
   // cubeLight.place({ position: [0, 0, 8], scale: [1 / 16, 1 / 16, 1] }, envAry);

   // train lol
   const trainWidth = 3.25;
   const trainHeight = 3.5;
   const trainLength = 18;
   const trainOffsetZ = -8;

   const trainFacade = 1 / 16;
   const trainWindowSize = 0.875;
   const trainDoorSize = [1.1, 3];
   const trainLampSize = 0.375;

   //base
   cubeBlock.place(
      {
         position: [0, trainHeight / 2, -trainLength / 2],
         scale: [trainWidth, trainHeight, trainLength],
      },
      trainAry,
   );
   cubeBlock.place(
      {
         position: [0, 0.125, trainFacade / 2],
         scale: [trainDoorSize[0], 0.25, trainFacade],
      },
      trainAry,
   );
   cubeBlock.place(
      {
         position: [0, trainDoorSize[1] + (trainHeight - trainDoorSize[1]) / 2, trainFacade / 2],
         scale: [trainWidth, trainHeight - trainDoorSize[1], trainFacade],
      },
      trainAry,
   );
   cubeBlock.place(
      {
         position: [0, trainHeight + 0.1875, -trainLength / 2],
         scale: [trainWidth / 3 + 0.125, 0.375, trainLength + trainFacade * 2],
      },
      trainAry,
   );
   cubeBlock.place(
      {
         position: [0, trainHeight + 0.2125, -2.5],
         scale: [trainWidth / 2 + 0.125, 0.4375, 2],
      },
      trainAry,
   );
   cubeBlock.place(
      {
         position: [0, trainHeight + 0.2125, -trainLength + 2.5],
         scale: [trainWidth / 2 + 0.125, 0.4375, 2],
      },
      trainAry,
   );
   for (let sign = -1; sign < 2; sign += 2) {
      cubeBlock.place(
         {
            position: [(trainWidth / 2) * sign, trainHeight - 0.25, -trainLength / 2],
            scale: [1 / 32, 1 / 8, trainLength + trainFacade],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [(trainWidth / 2) * sign, trainHeight / 2 - 0.375, -trainLength / 2],
            scale: [1 / 32, 1 / 8, trainLength + trainFacade],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [(trainWidth / 2) * sign, 0.25, -trainLength / 2],
            scale: [1 / 32, 1 / 8, trainLength + trainFacade],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [(trainWidth / 2) * sign, 0.5, -trainLength / 2],
            scale: [1 / 32, 1 / 8, trainLength + trainFacade],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [
               (trainDoorSize[0] / 2.5) * sign,
               trainHeight + 1 / 3 + 1 / 32,
               -trainLength / 2,
            ],
            scale: [1 / 32, 1 / 12, trainLength + trainFacade * 2],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [0.75 * sign, trainHeight + 1 / 4.5, -trainLength / 2],
            scale: [1 / 32, 1 / 16, trainLength - trainFacade * 2],
            rotation: [0, 0, 345 * sign],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [1 * sign, trainHeight + 1 / 6.5, -trainLength / 2],
            scale: [1 / 32, 1 / 16, trainLength - trainFacade * 2],
            rotation: [0, 0, 345 * sign],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [1.25 * sign, trainHeight + 1 / 11, -trainLength / 2],
            scale: [1 / 32, 1 / 16, trainLength - trainFacade * 2],
            rotation: [0, 0, 345 * sign],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [1.5 * sign, trainHeight + 1 / 42, -trainLength / 2],
            scale: [1 / 32, 1 / 16, trainLength - trainFacade * 2],
            rotation: [0, 0, 345 * sign],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [(trainWidth / 3 - 0.03125) * sign, trainHeight - 0.03125, -trainLength / 2],
            scale: [trainWidth / 3, 0.375, trainLength + trainFacade * 2],
            rotation: [0, 0, 345 * sign],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [
               (trainWidth / 2 - trainDoorSize[0] / 2) * sign,
               trainDoorSize[1] / 2 - trainWindowSize / 2 - 0.25,
               trainFacade / 2,
            ],
            scale: [
               trainWidth / 2 - trainDoorSize[0] / 2,
               trainDoorSize[1] / 2 + 0.125,
               trainFacade,
            ],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [(trainWidth / 2 - 1 / 24) * sign, trainHeight / 2, trainFacade / 2],
            scale: [1 / 12, trainHeight, trainFacade],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [(trainDoorSize[0] / 2 - 1 / 24) * sign, trainHeight / 2, trainFacade / 2],
            scale: [1 / 12, trainHeight, trainFacade],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [
               (trainWidth / 2 - trainDoorSize[0] / 2 + 0.08) * sign,
               -0.0625,
               trainFacade / 2,
            ],
            scale: [trainWidth / 2 - trainDoorSize[0] / 2 - 0.125, 0.125, trainFacade],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [
               (trainWidth / 2 - trainDoorSize[0] / 2 - 0.375) * sign,
               0.05,
               trainFacade / 2,
            ],
            scale: [0.25, 0.25, trainFacade],
            rotation: [0, 0, 45],
         },
         trainAry,
      );
   }

   // door
   cubeBlock.place(
      {
         position: [0, trainDoorSize[1] - 0.125, trainFacade / 8],
         scale: [trainDoorSize[0] - 0.3125, 1 / 24, trainFacade / 4],
      },
      trainAry,
   );
   cubeBlock.place(
      {
         position: [0, trainDoorSize[1] - 1.3125, trainFacade / 8],
         scale: [trainDoorSize[0] - 0.3125, 1 / 24, trainFacade / 4],
      },
      trainAry,
   );
   cubeBlock.place(
      {
         position: [
            -(trainDoorSize[0] / 2 - trainDoorSize[0] / 4),
            trainDoorSize[1] / 2,
            trainFacade / 8,
         ],
         scale: [trainDoorSize[0] / 5, 1 / 20, trainFacade / 4],
      },
      trainAry,
   );
   for (let sign = -1; sign < 2; sign += 2) {
      cubeBlock.place(
         {
            position: [
               (trainDoorSize[0] / 2 - 0.125 - 1 / 24) * sign,
               trainDoorSize[1] - 0.7125,
               trainFacade / 8,
            ],
            scale: [1 / 24, trainWindowSize * 1.375, trainFacade / 4],
         },
         trainAry,
      );
   }

   // base wheel
   cubeBlock.place(
      {
         position: [0, -0.1875, -trainLength / 2 - 0.125],
         scale: [0.625, 0.3125, trainLength - 0.25],
      },
      trainAry,
   );
   for (let i = 0; i < trainLength; i += 2) {
      cubeBlock.place(
         {
            position: [0, -0.5, -0.5 - i],
            scale: [trainWidth - (i % 3 ? 1 / 8 : 0), 0.25, 1],
         },
         trainAry,
      );
   }
   for (let sign = -1; sign < 2; sign += 2) {
      cubeBlock.place(
         {
            position: [0.875 * sign, -0.1875, -trainLength / 2 - 0.25],
            scale: [0.6875, 0.4375, trainLength - 0.5],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [1.4375 * sign, -0.1875, -trainLength / 2 - 0.125],
            scale: [0.25, 0.625, trainLength - 0.25],
         },
         trainAry,
      );
      cubeBlock.place(
         {
            position: [(trainWidth / 2 - 0.375) * sign, -0.3125, -0.5],
            scale: [0.75, 0.125, 1],
         },
         trainAry,
      );
      pillarBlock.place(
         {
            position: [0.375 * sign, -0.1875, -trainLength / 2],
            scale: [0.1875, trainLength / 2 + 0.1875, 0.1875],
            rotation: [90, 0, 0],
         },
         trainAry,
      );
      pillarBlock.place(
         {
            position: [0.375 * sign, -0.1875, 0.1875],
            scale: [0.4375, 1 / 64, 0.4375],
            rotation: [90, 0, 0],
         },
         trainAry,
      );
   }

   // wheel
   for (let i = 0; i < 2; i++) {
      for (let sign = -1; sign < 2; sign += 2) {
         //front
         pillarBlock.place(
            {
               position: [0.875 * sign, -0.3125, -1.5 - i * 2],
               scale: [0.875, 1 / 16, 0.875],
               rotation: [0, 0, 90],
            },
            trainAry,
         );
         pillarBlock.place(
            {
               position: [0.95 * sign, -0.3125, -1.5 - i * 2],
               scale: [0.9375, 1 / 100, 0.9375],
               rotation: [0, 0, 90],
            },
            trainAry,
         );
         pillarBlock.place(
            {
               position: [0.8125 * sign, -0.3125, -1.5 - i * 2],
               scale: [0.95, 1 / 100, 0.9375],
               rotation: [0, 0, 90],
            },
            trainAry,
         );

         //back
         pillarBlock.place(
            {
               position: [0.875 * sign, -0.3125, -trainLength + 2 + i * 2],
               scale: [0.875, 1 / 16, 0.875],
               rotation: [0, 0, 90],
            },
            trainAry,
         );
         pillarBlock.place(
            {
               position: [0.95 * sign, -0.3125, -trainLength + 2 + i * 2],
               scale: [0.9375, 1 / 100, 0.9375],
               rotation: [0, 0, 90],
            },
            trainAry,
         );
         pillarBlock.place(
            {
               position: [0.8125 * sign, -0.3125, -trainLength + 1.5 + i * 2],
               scale: [0.95, 1 / 100, 0.9375],
               rotation: [0, 0, 90],
            },
            trainAry,
         );
      }
   }

   // decorative
   cubeBlock.place(
      {
         position: [0, trainDoorSize[1] + 0.4375, trainFacade],
         scale: [trainDoorSize[0] - 0.25, 0.5, trainFacade],
      },
      trainAry,
   );
   for (let sign = -1; sign < 2; sign += 2) {
      cubeBlock.place(
         {
            position: [
               (trainWidth / 2 - trainDoorSize[0] / 2) * sign,
               trainDoorSize[1] + 0.3125,
               trainFacade,
            ],
            scale: [trainWidth / 2 - trainDoorSize[0] / 2 - 0.375, 0.25, trainFacade],
         },
         trainAry,
      );
      pillarBlock.place(
         {
            position: [-1.125 * sign, trainHeight / 2 - 0.4375, 1 / 64 + trainFacade],
            scale: [trainLampSize, 1 / 64, trainLampSize],
            rotation: [90, 0, 0],
         },
         trainAry,
      );
      pillarBlock.place(
         {
            position: [-1.125 * sign, trainHeight / 2 - 1.125, 1 / 64 + trainFacade],
            scale: [trainLampSize - 0.0625, 1 / 64, trainLampSize - 0.0625],
            rotation: [90, 0, 0],
         },
         trainAry,
      );
   }
   const trainGroup = ext.chroma.EnvironmentGroup.create(trainAry);
   for (let i = 0; i < 6; i++) {
      trainGroup.place({ position: [0, 0, trainOffsetZ - i * trainLength - i] }, envAry);
   }

   trackAry.forEach((e) => {
      if (e.position) e.position = vectorAdd(e.position, trackOffset);
   });
   structureAry.forEach((e) => {
      if (e.position) e.position = vectorAdd(e.position, structureOffset);
   });
   return envAry.concat(trackAry, structureAry);
}

export function generateMaterial() {
   return {
      RailwayStandard: { shader: 'Standard' },
      RailwayOpaqueLight: { shader: 'OpaqueLight' },
      RailwayTransparentLight: { shader: 'TransparentLight' },
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
      { ...info, environment: generateEnvironment(), materials: generateMaterial() },
      path,
   );
}

if (import.meta.main) {
   save();
}
