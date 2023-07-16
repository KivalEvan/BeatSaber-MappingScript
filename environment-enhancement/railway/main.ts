import { ext, logger, types, utils, v3 } from '../../depsLocal.ts';
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
   const pRandom = utils.pRandomFn('Railway');

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
         position: [-3, 9.25, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup3').end().regex,
         lookupMethod: 'Regex',
         position: [3, 9.25, 5.5],
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
         position: [-4.75, 7, 5.5],
         rotation: [315, 90, 180],
      },
      {
         id: EnvGrab.create().child().name('LightGroup7').end().regex,
         lookupMethod: 'Regex',
         position: [4.75, 7, 5.5],
         rotation: [315, 270, 180],
      },
      {
         id: EnvGrab.create().child().name('LightGroup8').end().regex,
         lookupMethod: 'Regex',
         position: [-5, 1.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup9').end().regex,
         lookupMethod: 'Regex',
         position: [5, 1.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup10').end().regex,
         lookupMethod: 'Regex',
         position: [-5, 3.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup11').end().regex,
         lookupMethod: 'Regex',
         position: [5, 3.5, 5.5],
      },
      {
         id: EnvGrab.create().child().name('LightGroup12').end().regex,
         lookupMethod: 'Regex',
         position: [0, 9.5, 20.2],
      },
      {
         id: EnvGrab.create().child().name('LightGroup13').end().regex,
         lookupMethod: 'Regex',
         position: [0, 5, 20.2],
      },
      {
         id: EnvGrab.create().child().name('LightGroup14').end().regex,
         lookupMethod: 'Regex',
         position: [-4, 2.25, 20],
      },
      {
         id: EnvGrab.create().child().name('LightGroup15').end().regex,
         lookupMethod: 'Regex',
         position: [4, 2.25, 20],
      },
   );

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
   const pillarLight = ext.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cylinder', material: 'RailwayTransparentLight' },
         components: {
            ILightWithId: { type: 4 },
            TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
         },
      },
      [0, 0, 0],
   );
   const sphereBlock = ext.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Sphere', material: 'RailwayStandard' },
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

   for (let x = -1; x < 2; x++) {
      if (x === 0) continue;

      // pillar
      for (let i = 0; i < pillarCount; i++) {
         pillarGroup.place(
            {
               position: [5 * x, 0, pillarOffsetZ + i * pillarGap],
               scale: utils.vectorMul([1, 1, 1], pillarScale),
            },
            structureAry,
         );
         cubeBlock.place(
            {
               position: [10.5 * x, 0, pillarOffsetZ + i * pillarGap],
               scale: [1 / 2, 1024, 1 / 2],
            },
            structureAry,
         );
         cubeBlock.place(
            {
               position: [
                  60.5 * x,
                  pillarHeight * pillarScale + 0.125,
                  pillarOffsetZ + i * pillarGap,
               ],
               scale: [100, 1 / 4, 1 / 4],
            },
            structureAry,
         );
         if (x === -1) {
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
            position: [5 * x, -(1 / 8 + 1 / 2 + 1 / 8 + 1 / 4) * pillarScale - 1, 0],
            scale: [1.25, 1 / 4, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [5 * x, -(1 / 8 + 1 / 2 + 1 / 8 + 1 / 4) * pillarScale - 1 / 4, 0],
            scale: [1.25, 1 / 4, 1024],
         },
         structureAry,
      );
      cubeBlock.place({ position: [3.25 * x, -2, 0], scale: [1 / 4, 1.25, 1024] }, structureAry);
      cubeBlock.place(
         {
            position: [5 * x, pillarHeight * pillarScale - 1.5, 0],
            scale: [1 / 2, 1 / 8, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [5 * x, 0.125, 0],
            scale: [1 / 8, 1 / 8, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [5 * x, pillarHeight * pillarScale + 0.5, 0],
            scale: [1 / 2, 1 / 8, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [5 * x, pillarHeight * pillarScale + 2.75, 0],
            scale: [1 / 2, 1 / 8, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [3 * x, pillarHeight * pillarScale + 2.75, 0],
            scale: [1 / 4, 1 / 2, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [7 * x, pillarHeight * pillarScale + 2.75, 0],
            scale: [1 / 4, 1 / 2, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [10.5 * x, 4, 0],
            scale: [1 / 4, 1 / 4, 1024],
         },
         structureAry,
      );
      cubeBlock.place(
         {
            position: [10.5 * x, 1.5, 0],
            scale: [1 / 4, 1 / 4, 1024],
         },
         structureAry,
      );

      // railway
      cubeBlock.place({ position: [0.875 * x, 0, 0], scale: [1 / 24, 1 / 4, 1024] }, trackAry);
      cubeBlock.place({ position: [0.875 * x, 3 / 16, 0], scale: [1 / 8, 1 / 8, 1024] }, trackAry);

      // outer field thingy
      for (let i = 0; i < 128; i++) {
         if (i < 32) continue;
         cubeLight.place(
            {
               position: [pRandom(11, 22) * x, pRandom(-2, 20), -96 + i * 1.5 + 1.04 ** i],
               scale: [1 / 24, 1 / 24, 4],
            },
            envAry,
         );
      }

      for (let i = 0; i < 80; i++) {
         cubeBlock.place(
            {
               position: [(8 + pRandom()) * x, -42 + pRandom(), -64 + i * 3],
               scale: [2 + pRandom(), 64 + pRandom(42), 2 + pRandom()],
               rotation: [0, 0, (pRandom(10) + 340) * x],
            },
            envAry,
         );
         cubeBlock.place(
            {
               position: [(8 + pRandom()) * x, -32 + pRandom(), -62.5 + i * 3],
               scale: [2 + pRandom(), 80 + pRandom(80), 2 + pRandom()],
               rotation: [0, 0, (pRandom(10) + 320) * x],
            },
            envAry,
         );
         cubeBlock.place(
            {
               position: [(8 + pRandom()) * x, 64 - pRandom(), -64 + i * 3],
               scale: [2 + pRandom(), 64 + pRandom(42), 2 + pRandom()],
               rotation: [0, 0, -(pRandom(10) + 20) * x],
            },
            envAry,
         );
         cubeBlock.place(
            {
               position: [(8 + pRandom()) * x, 48 - pRandom(), -62.5 + i * 3],
               scale: [2 + pRandom(), 80 + pRandom(80), 2 + pRandom()],
               rotation: [0, 0, -(pRandom(10) + 40) * x],
            },
            envAry,
         );
      }
   }
   cubeBlock.place(
      {
         position: [0, pillarHeight * pillarScale + 5.25, 0],
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
      cubeBlock.place(
         {
            position: [0.875, -0.125, i + 1.15 ** i + 2],
            scale: [0.25, 0.125, 0.125],
         },
         trackAry,
      );
      cubeBlock.place(
         {
            position: [-0.875, -0.125, i + 1.15 ** i + 2],
            scale: [0.25, 0.125, 0.125],
         },
         trackAry,
      );
      cubeBlock.place(
         {
            position: [1 / 16 - pRandom(1 / 8), -3 / 16, i + 1.15 ** i + 2],
            scale: [3 + pRandom(1 / 4), 0.125, 0.375],
         },
         trackAry,
      );
      cubeBlock.place(
         {
            position: [1 / 16 - pRandom(1 / 8), -3 / 16, -(i + 1.15 ** i + 2)],
            scale: [3 + pRandom(1 / 4), 0.125, 0.375],
         },
         trackAry,
      );
   }

   // cubeLight.place({ position: [0, 0, 8], scale: [1, 1 / 16, 1 / 16] }, envAry);
   // cubeLight.place({ position: [0, 0, 8], scale: [1 / 16, 1, 1 / 16] }, envAry);
   // cubeLight.place({ position: [0, 0, 8], scale: [1 / 16, 1 / 16, 1] }, envAry);

   trackAry.forEach((e) => {
      if (e.position) e.position = utils.vectorAdd(e.position, trackOffset);
   });
   structureAry.forEach((e) => {
      if (e.position) e.position = utils.vectorAdd(e.position, structureOffset);
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

export const insertEnvironment = (d: v3.Difficulty) => {
   if (d.customData.environment?.length) {
      logger.warn('Environment enhancement previously existed, replacing');
   }
   d.customData.environment = generateEnvironment();
   d.customData.materials = generateMaterial();
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
