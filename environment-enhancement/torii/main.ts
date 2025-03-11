import { ext, logger, pickRandom, pRandomFn, types, vectorAdd, vectorMul } from '@bsmap';
import { environmentSave } from '../helpers.ts';

const info: types.external.IEnvironmentJSON = {
   version: '1.0.0',
   name: 'Torii',
   author: 'Kival Evan',
   environmentVersion: '1.1.1',
   environmentName: 'BillieEnvironment',
   description: 'Vanilla-compatible environment.',
   features: {},
   environment: [],
   materials: {},
};

const EnvGrab = ext.heck.chroma.EnvironmentGrab;

const MOON_SIZE = 250;
const MOON_Y_OFFSET = 310;

const SUN_SIZE = 6;

const TORII_WIDTH = 8;
const TORII_WIDTH_EXTEND = 6;
const TORII_HEIGHT = 8;
const TORII_SCALE = 1.5;
const TORII_POS_OFFSET = [0, 0.75, 0];
const TORII_Z_OFFSET = 48;
const TORII_COUNT = 7;
const TORII_GAP = 80;
const TORII_GAP_INCREMENT = 40;
const TORII_SKIP_INCREMENT = 1;

const LANTERN_POST_PLAYFIELD = 7;
const LATERN_POST_OFFSET = -2;
const LANTERN_POST_SECTION = 4;
const LANTERN_POST_SCALE = 0.875;

const LANTERN_BASE_SIZE = 0.4375;
const LANTERN_BASE_HEIGHT = 0.03125;
const LANTERN_SIZE = 0.3;
const LANTERN_HEIGHT = 0.4375;
const LANTERN_GAP = 0.0625;
const LANTERN_BORDER = 0.01875;
const LANTERN_SCALE = 1.125;

const WATERFALL_ORDER = [1, 6, 7, 0];

// regex for environment enhancement
const regexMountains = EnvGrab.create().child().name('Mountains').end().regex;
const regexClouds = EnvGrab.create().child().name('Clouds').end().regex;
const regexSun = EnvGrab.create('DayAndNight').child().name('Day').end().regex;
const regexMoon = EnvGrab.create('DayAndNight')
   .child()
   .name('Night')
   .end().regex;
const regexTunnelLaser = EnvGrab.create()
   .child()
   .name('TunnelRotatingLasersPair')
   .id(null, true)
   .end().regex;
const regexSmoke = EnvGrab.create().child().name('BigSmokePS').end().regex;

const LANTERN_REROLL = 12_727;
const LANTERN_POST_PLAYFIELD_GAP = LANTERN_POST_PLAYFIELD / 2;
export function generateEnvironment(): types.v3.IChromaEnvironment[] {
   const environment: types.v3.IChromaEnvironment[] = [];
   const pRandom = pRandomFn('Torii');

   environment.push(
      {
         id: EnvGrab.Preset.ENVIRONMENT.regex,
         lookupMethod: 'Regex',
         components: { BloomFogEnvironment: { startY: -22.5, height: 15 } },
      },
      {
         id: EnvGrab.create('NarrowGameHUD').child().name('EnergyPanel').end()
            .regex,
         lookupMethod: 'Regex',
         position: [0, 0.09375, 6.5],
      },
      {
         // really want to use this but hardcoded limitation has me need to disable
         id: EnvGrab.create().child().name('WaterRainRipples').end().regex,
         lookupMethod: 'Regex',
         active: false,
      },
      {
         id: regexSmoke,
         lookupMethod: 'Regex',
         scale: [10, 25, 12.5],
      },
      {
         id: regexMoon,
         lookupMethod: 'Regex',
         position: [0, -(MOON_SIZE * 16) + MOON_Y_OFFSET, 2048],
         scale: [MOON_SIZE, MOON_SIZE, 1],
         components: {
            TubeBloomPrePassLight: {
               colorAlphaMultiplier: 256,
               bloomFogIntensityMultiplier: 1,
            },
         },
      },
      {
         id: regexSun,
         lookupMethod: 'Regex',
         position: [0, 0, 1024],
         scale: [SUN_SIZE, SUN_SIZE, 1],
         components: {
            TubeBloomPrePassLight: {
               colorAlphaMultiplier: 128,
               bloomFogIntensityMultiplier: 1,
            },
         },
      },
      {
         id: regexTunnelLaser,
         lookupMethod: 'Regex',
         scale: [10, 10, 10],
      },
      {
         id: regexMountains,
         lookupMethod: 'Regex',
         duplicate: 1,
         scale: [0.75, 0.75, 1],
         rotation: [0, 180, 0],
      },
      {
         id: regexMountains,
         lookupMethod: 'Regex',
         duplicate: 1,
         scale: [0.5, 0.5, 1],
      },
      {
         id: regexMountains,
         lookupMethod: 'Regex',
         duplicate: 1,
         scale: [0.1875, 0.0625, 1],
         rotation: [0, 180, 0],
      },
      {
         id: '\\[\\d+\\]Waterfall$',
         lookupMethod: 'Regex',
         position: [0, 0, -88],
         scale: [50, 1.25, 1.25],
      },
      {
         geometry: { type: 'Plane', material: { shader: 'BaseWater' } },
         position: [0, -0.001, 0],
         scale: [100, 1, 100],
         rotation: [0, 180, 0],
      },
      {
         id: regexClouds,
         lookupMethod: 'Regex',
         scale: [16, 16, 16],
      },
      {
         id: '\\[\\d+\\](Left|Right)?(Far)?Rail(1|2)?$',
         lookupMethod: 'Regex',
         active: false,
      },
      {
         id: '\\[\\d+\\](Last)?Railing(Full(Back|Front)?)?$',
         lookupMethod: 'Regex',
         active: false,
      },
      {
         id: '\\[\\d+\\]LightRailingSegment(\\s\\(\\d+\\))?$',
         lookupMethod: 'Regex',
         active: false,
      },
   );

   const cubeBlock = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cube', material: 'ToriiStandard' },
      },
      [0, 0, 0],
   );
   const cubeLight = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cube', material: 'ToriiOpaqueLight' },
         components: {
            ILightWithId: { type: 0 },
            TubeBloomPrePassLight: {
               colorAlphaMultiplier: 2,
               bloomFogIntensityMultiplier: 0.25,
            },
         },
      },
      [0, 0, 0],
   );
   const pillarBlock = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cylinder', material: 'ToriiStandard' },
      },
      [0, 0, 0],
   );
   const pillarLight = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Cylinder', material: 'ToriiTransparentLight' },
         components: {
            ILightWithId: { type: 0 },
            TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
         },
      },
      [0, 0, 0],
   );
   const sphereBlock = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Sphere', material: 'ToriiStandard' },
      },
      [0, 0, 0],
   );

   const torii: types.v3.IChromaEnvironment[] = [];
   pillarBlock.place(
      {
         position: [TORII_WIDTH / 2, TORII_HEIGHT / 2, 0],
         scale: [1, TORII_HEIGHT / 2, 1],
      },
      torii,
   );
   pillarBlock.place(
      {
         position: [-TORII_WIDTH / 2, TORII_HEIGHT / 2, 0],
         scale: [1, TORII_HEIGHT / 2, 1],
      },
      torii,
   );

   cubeBlock.place(
      {
         position: [0, TORII_HEIGHT + 0.875, 0],
         scale: [TORII_WIDTH + TORII_WIDTH_EXTEND + 0.25, 0.5, 1],
      },
      torii,
   );
   cubeBlock.place(
      {
         position: [0, TORII_HEIGHT + 0.625, 0],
         scale: [TORII_WIDTH + TORII_WIDTH_EXTEND + 1, 0.5, 0.25],
      },
      torii,
   );
   cubeBlock.place(
      {
         position: [0, TORII_HEIGHT + 0.375, 0],
         scale: [TORII_WIDTH + TORII_WIDTH_EXTEND, 0.5, 0.5],
      },
      torii,
   );
   cubeBlock.place(
      {
         position: [0, TORII_HEIGHT - 2 + 0.625, 0],
         scale: [TORII_WIDTH + TORII_WIDTH_EXTEND, 0.75, 0.5],
      },
      torii,
   );

   cubeBlock.place(
      {
         position: [0, TORII_HEIGHT - 1 + 0.5625, 0],
         scale: [1.25, 1.125, 0.25],
      },
      torii,
   );
   cubeBlock.place(
      {
         position: [TORII_WIDTH / 2, TORII_HEIGHT - 1 + 0.25, 0],
         scale: [1.75, 0.5, 0.125],
      },
      torii,
   );
   cubeBlock.place(
      {
         position: [-TORII_WIDTH / 2, TORII_HEIGHT - 1 + 0.25, 0],
         scale: [1.75, 0.5, 0.125],
      },
      torii,
   );
   375;
   cubeBlock.place(
      {
         position: [
            -TORII_WIDTH / 2 - TORII_WIDTH_EXTEND / 2 - 0.625,
            TORII_HEIGHT + 1.02,
            0,
         ],
         scale: [1.1875, 0.5, 1],
         rotation: [0, 0, -15],
      },
      torii,
   );
   cubeBlock.place(
      {
         position: [
            TORII_WIDTH / 2 + TORII_WIDTH_EXTEND / 2 + 0.625,
            TORII_HEIGHT + 1.02,
            0,
         ],
         scale: [1.1875, 0.5, 1],
         rotation: [0, 0, 15],
      },
      torii,
   );

   pillarBlock.place(
      {
         position: [TORII_WIDTH / 2, TORII_HEIGHT + 0.125, 0],
         scale: [1.25, 0.125, 1.25],
         rotation: [0, 0, 0],
      },
      torii,
   );
   pillarBlock.place(
      {
         position: [TORII_WIDTH / 2, TORII_HEIGHT - 1 + 0.0625, 0],
         scale: [1.125, 0.0625, 1.125],
         rotation: [0, 0, 0],
      },
      torii,
   );
   pillarBlock.place(
      {
         position: [TORII_WIDTH / 2, TORII_HEIGHT - 2 + 0.1875, 0],
         scale: [1.125, 0.0625, 1.125],
         rotation: [0, 0, 0],
      },
      torii,
   );
   pillarBlock.place(
      {
         position: [TORII_WIDTH / 2, 0.25, 0],
         scale: [1.25, 0.125, 1.25],
         rotation: [0, 0, 0],
      },
      torii,
   );
   pillarBlock.place(
      {
         position: [TORII_WIDTH / 2, -128, 0],
         scale: [1.375, 128, 1.375],
         rotation: [0, 0, 0],
      },
      torii,
   );
   pillarBlock.place(
      {
         position: [-TORII_WIDTH / 2, TORII_HEIGHT + 0.125, 0],
         scale: [1.25, 0.125, 1.25],
         rotation: [0, 0, 0],
      },
      torii,
   );
   pillarBlock.place(
      {
         position: [-TORII_WIDTH / 2, TORII_HEIGHT - 1 + 0.0625, 0],
         scale: [1.125, 0.0625, 1.125],
         rotation: [0, 0, 0],
      },
      torii,
   );
   pillarBlock.place(
      {
         position: [-TORII_WIDTH / 2, TORII_HEIGHT - 2 + 0.1875, 0],
         scale: [1.125, 0.0625, 1.125],
         rotation: [0, 0, 0],
      },
      torii,
   );
   pillarBlock.place(
      {
         position: [-TORII_WIDTH / 2, 0.25, 0],
         scale: [1.25, 0.125, 1.25],
         rotation: [0, 0, 0],
      },
      torii,
   );
   pillarBlock.place(
      {
         position: [-TORII_WIDTH / 2, -128, 0],
         scale: [1.375, 128, 1.375],
         rotation: [0, 0, 0],
      },
      torii,
   );

   const toriiGroup = ext.heck.chroma.EnvironmentGroup.create(torii, [0, 0, 0]);
   toriiGroup.place(
      {
         position: vectorAdd(
            [0, 0, TORII_Z_OFFSET - TORII_GAP],
            TORII_POS_OFFSET,
         ),
         scale: vectorMul([1, 1, 1], TORII_SCALE),
      },
      environment,
   );
   for (let z = 0; z < TORII_COUNT; z++) {
      toriiGroup.place(
         {
            position: vectorAdd(
               [
                  0,
                  0,
                  TORII_Z_OFFSET +
                  z *
                     (TORII_GAP +
                        (z <= TORII_SKIP_INCREMENT ? 0 : TORII_GAP_INCREMENT *
                           (z - TORII_SKIP_INCREMENT))),
               ],
               TORII_POS_OFFSET,
            ),
            scale: vectorMul([1, 1, 1], TORII_SCALE),
         },
         environment,
      );
   }

   const lanternPost: types.v3.IChromaEnvironment[] = [];
   cubeBlock.place(
      { position: [0, 0.125, 0], scale: [1, 0.25, 0.3125] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 0.125, 0], scale: [0.3125, 0.25, 1] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 0.375, 0], scale: [0.75, 0.25, 0.3125] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 0.375, 0], scale: [0.3125, 0.25, 0.75] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 0.75, 0], scale: [0.4375, 1.5, 0.4375] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 1.53125, 0], scale: [0.625, 0.0625, 0.625] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 1.625, 0], scale: [0.75, 0.125, 0.75] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 1.75, 0], scale: [0.625, 0.125, 0.625] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0.25, 2, 0.25], scale: [0.125, 0.375, 0.125] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0.25, 2, -0.25], scale: [0.125, 0.375, 0.125] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [-0.25, 2, 0.25], scale: [0.125, 0.375, 0.125] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [-0.25, 2, -0.25], scale: [0.125, 0.375, 0.125] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 2, 0], scale: [0.03125, 0.5625, 0.5625] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 2, 0], scale: [0.5625, 0.03125, 0.5625] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 2, 0], scale: [0.5625, 0.5625, 0.03125] },
      lanternPost,
   );
   cubeLight.place(
      { position: [0, 2, 0], scale: [0.5, 0.375, 0.5] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 2.21875, 0], scale: [0.625, 0.0625, 0.625] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 2.28125, 0], scale: [0.75, 0.0625, 0.75] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 2.34375, 0], scale: [0.875, 0.0625, 0.875] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 2.40625, 0], scale: [0.625, 0.0625, 0.625] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 2.46875, 0], scale: [0.375, 0.0625, 0.375] },
      lanternPost,
   );
   cubeBlock.place(
      { position: [0, 2.53125, 0], scale: [0.25, 0.0625, 0.25] },
      lanternPost,
   );
   pillarBlock.place(
      { position: [0, 2.578125, 0], scale: [0.125, 0.03125 / 2, 0.125] },
      lanternPost,
   );
   pillarBlock.place(
      { position: [0, 2.625, 0], scale: [0.1875, 0.125 / 4, 0.1875] },
      lanternPost,
   );
   sphereBlock.place(
      { position: [0, 2.65625, 0], scale: [0.1875, 0.1875, 0.1875] },
      lanternPost,
   );

   pillarLight.place(
      {
         position: [-(LANTERN_POST_PLAYFIELD_GAP - 0.75), 0.03125, -250],
         rotation: [90, 0, 0],
         scale: [0.25, 257, 0.25],
         type: 1,
      },
      environment,
   );
   pillarLight.place(
      {
         position: [LANTERN_POST_PLAYFIELD_GAP - 0.75, 0.03125, -250],
         rotation: [90, 0, 0],
         scale: [0.25, 257, 0.25],
         type: 1,
      },
      environment,
   );
   const lanternPostGroup = ext.heck.chroma.EnvironmentGroup.create(
      lanternPost,
      [0, 0, 0],
   );
   for (let z = 0; z < TORII_COUNT * LANTERN_POST_SECTION; z++) {
      const toriiZ = Math.floor(
         Math.abs((LATERN_POST_OFFSET + z) / LANTERN_POST_SECTION),
      );
      const lanternZ = Math.floor((LATERN_POST_OFFSET + z) / LANTERN_POST_SECTION) + 1;
      const distance = (TORII_GAP +
         (lanternZ <= TORII_SKIP_INCREMENT
            ? 0
            : TORII_GAP_INCREMENT * (lanternZ - TORII_SKIP_INCREMENT + 1))) /
         LANTERN_POST_SECTION;
      pillarLight.place(
         {
            position: [
               -(LANTERN_POST_PLAYFIELD_GAP - 0.75),
               0.03125,
               TORII_Z_OFFSET +
               toriiZ *
                  (TORII_GAP +
                     (toriiZ <= TORII_SKIP_INCREMENT ? 0 : TORII_GAP_INCREMENT *
                        (toriiZ - TORII_SKIP_INCREMENT))) +
               ((LATERN_POST_OFFSET + z) % LANTERN_POST_SECTION) * distance +
               distance / 2,
            ],
            rotation: [90, 0, 0],
            scale: [0.25, distance / 2 - 1, 0.25],
            type: WATERFALL_ORDER[(z + 1) % 4],
         },
         environment,
      );
      lanternPostGroup.place(
         {
            position: [
               -LANTERN_POST_PLAYFIELD_GAP,
               0,
               TORII_Z_OFFSET +
               toriiZ *
                  (TORII_GAP +
                     (toriiZ <= TORII_SKIP_INCREMENT ? 0 : TORII_GAP_INCREMENT *
                        (toriiZ - TORII_SKIP_INCREMENT))) +
               ((z + LATERN_POST_OFFSET) % LANTERN_POST_SECTION) * distance,
            ],
            type: WATERFALL_ORDER[z % 4],
            scale: [LANTERN_POST_SCALE, LANTERN_POST_SCALE, LANTERN_POST_SCALE],
         },
         environment,
      );
      pillarLight.place(
         {
            position: [
               LANTERN_POST_PLAYFIELD_GAP - 0.75,
               0.03125,
               TORII_Z_OFFSET +
               toriiZ *
                  (TORII_GAP +
                     (toriiZ <= TORII_SKIP_INCREMENT ? 0 : TORII_GAP_INCREMENT *
                        (toriiZ - TORII_SKIP_INCREMENT))) +
               ((z + LATERN_POST_OFFSET) % LANTERN_POST_SECTION) * distance +
               distance / 2,
            ],
            rotation: [90, 0, 0],
            scale: [0.25, distance / 2 - 1, 0.25],
            type: WATERFALL_ORDER[(z + 1) % 4],
         },
         environment,
      );
      lanternPostGroup.place(
         {
            position: [
               LANTERN_POST_PLAYFIELD_GAP,
               0,
               TORII_Z_OFFSET +
               toriiZ *
                  (TORII_GAP +
                     (toriiZ <= TORII_SKIP_INCREMENT ? 0 : TORII_GAP_INCREMENT *
                        (toriiZ - TORII_SKIP_INCREMENT))) +
               ((z + LATERN_POST_OFFSET) % LANTERN_POST_SECTION) * distance,
            ],
            type: WATERFALL_ORDER[z % 4],
            scale: [LANTERN_POST_SCALE, LANTERN_POST_SCALE, LANTERN_POST_SCALE],
         },
         environment,
      );
   }

   const lantern: types.v3.IChromaEnvironment[] = [];
   // base
   cubeBlock.place(
      {
         position: [0, LANTERN_BASE_HEIGHT / 2, 0],
         scale: [LANTERN_BASE_SIZE, LANTERN_BASE_HEIGHT, LANTERN_BASE_SIZE],
      },
      lantern,
   );
   // border vertical
   cubeBlock.place(
      {
         position: [
            LANTERN_SIZE / 2,
            LANTERN_BASE_HEIGHT / 2 +
            LANTERN_HEIGHT / 2 +
            LANTERN_GAP / 4 +
            LANTERN_BORDER / 2,
            LANTERN_SIZE / 2,
         ],
         scale: [
            LANTERN_BORDER,
            LANTERN_HEIGHT + LANTERN_GAP / 2 + LANTERN_BORDER / 2,
            LANTERN_BORDER,
         ],
      },
      lantern,
   );
   cubeBlock.place(
      {
         position: [
            LANTERN_SIZE / 2,
            LANTERN_BASE_HEIGHT / 2 +
            LANTERN_HEIGHT / 2 +
            LANTERN_GAP / 4 +
            LANTERN_BORDER / 2,
            -LANTERN_SIZE / 2,
         ],
         scale: [
            LANTERN_BORDER,
            LANTERN_HEIGHT + LANTERN_GAP / 2 + LANTERN_BORDER / 2,
            LANTERN_BORDER,
         ],
      },
      lantern,
   );
   cubeBlock.place(
      {
         position: [
            -LANTERN_SIZE / 2,
            LANTERN_BASE_HEIGHT / 2 +
            LANTERN_HEIGHT / 2 +
            LANTERN_GAP / 4 +
            LANTERN_BORDER / 2,
            LANTERN_SIZE / 2,
         ],
         scale: [
            LANTERN_BORDER,
            LANTERN_HEIGHT + LANTERN_GAP / 2 + LANTERN_BORDER / 2,
            LANTERN_BORDER,
         ],
      },
      lantern,
   );
   cubeBlock.place(
      {
         position: [
            -LANTERN_SIZE / 2,
            LANTERN_BASE_HEIGHT / 2 +
            LANTERN_HEIGHT / 2 +
            LANTERN_GAP / 4 +
            LANTERN_BORDER / 2,
            -LANTERN_SIZE / 2,
         ],
         scale: [
            LANTERN_BORDER,
            LANTERN_HEIGHT + LANTERN_GAP / 2 + LANTERN_BORDER / 2,
            LANTERN_BORDER,
         ],
      },
      lantern,
   );
   // border horizontal
   cubeBlock.place(
      {
         position: [
            LANTERN_SIZE / 2,
            LANTERN_BASE_HEIGHT + LANTERN_HEIGHT + LANTERN_GAP / 2,
            0,
         ],
         scale: [LANTERN_BORDER, LANTERN_BORDER, LANTERN_SIZE + LANTERN_BORDER],
      },
      lantern,
   );
   cubeBlock.place(
      {
         position: [
            -LANTERN_SIZE / 2,
            LANTERN_BASE_HEIGHT + LANTERN_HEIGHT + LANTERN_GAP / 2,
            0,
         ],
         scale: [LANTERN_BORDER, LANTERN_BORDER, LANTERN_SIZE + LANTERN_BORDER],
      },
      lantern,
   );
   cubeBlock.place(
      {
         position: [
            0,
            LANTERN_BASE_HEIGHT + LANTERN_HEIGHT + LANTERN_GAP / 2,
            LANTERN_SIZE / 2,
         ],
         scale: [LANTERN_SIZE + LANTERN_BORDER, LANTERN_BORDER, LANTERN_BORDER],
      },
      lantern,
   );
   cubeBlock.place(
      {
         position: [
            0,
            LANTERN_BASE_HEIGHT + LANTERN_HEIGHT + LANTERN_GAP / 2,
            -LANTERN_SIZE / 2,
         ],
         scale: [LANTERN_SIZE + LANTERN_BORDER, LANTERN_BORDER, LANTERN_BORDER],
      },
      lantern,
   );
   // light itself
   cubeLight.place(
      {
         position: [
            0,
            LANTERN_BASE_HEIGHT + LANTERN_GAP / 2 + LANTERN_HEIGHT / 2,
            0,
         ],
         scale: [LANTERN_SIZE, LANTERN_HEIGHT, LANTERN_SIZE],
      },
      lantern,
   );

   for (let reroll = 0; reroll++ < LANTERN_REROLL;) {
      pRandom();
   }
   const lanternGroup = ext.heck.chroma.EnvironmentGroup.create(lantern, [0, 0, 0]);
   const lanternYGap = 8;
   for (let z = 0; z < 10; z++) {
      let pos: types.Vector3 = [
         pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 0.75,
            LANTERN_POST_PLAYFIELD_GAP + 3,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         -pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 0.75,
            LANTERN_POST_PLAYFIELD_GAP + 3,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 3,
            LANTERN_POST_PLAYFIELD_GAP + 4,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         -pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 3,
            LANTERN_POST_PLAYFIELD_GAP + 4,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 4,
            LANTERN_POST_PLAYFIELD_GAP + 6,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         -pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 4,
            LANTERN_POST_PLAYFIELD_GAP + 6,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 6,
            LANTERN_POST_PLAYFIELD_GAP + 8,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         -pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 6,
            LANTERN_POST_PLAYFIELD_GAP + 8,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 8,
            LANTERN_POST_PLAYFIELD_GAP + 12,
         ),
         0,
         -32 + z * lanternYGap + pRandom(2),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         -pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 8,
            LANTERN_POST_PLAYFIELD_GAP + 12,
         ),
         0,
         -32 + z * lanternYGap + pRandom(2),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 12,
            LANTERN_POST_PLAYFIELD_GAP + 16,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         -pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 12,
            LANTERN_POST_PLAYFIELD_GAP + 16,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 16,
            LANTERN_POST_PLAYFIELD_GAP + 28,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         -pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 16,
            LANTERN_POST_PLAYFIELD_GAP + 28,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 28,
            LANTERN_POST_PLAYFIELD_GAP + 46,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
      pos = [
         -pRandom(
            LANTERN_POST_PLAYFIELD_GAP + 28,
            LANTERN_POST_PLAYFIELD_GAP + 46,
         ),
         0,
         -32 + z * lanternYGap + pRandom(lanternYGap),
      ];
      lanternGroup.place(
         {
            position: pos,
            rotation: [0, pRandom(0, 360, true), 0],
            type: pickRandom([0, 1, 6, 7], pRandom),
            scale: vectorMul([1, 1, 1], LANTERN_SCALE),
         },
         environment,
      );
   }

   for (let i = 0; i < 9; i++) {
      let regexPillarL, regexPillarR;
      if (i === 0) {
         regexPillarL = EnvGrab.create('BottomPairLasers')
            .child()
            .name('PillarL')
            .end().regex;
         regexPillarR = EnvGrab.create('BottomPairLasers')
            .child()
            .name('PillarR')
            .end().regex;
      } else {
         regexPillarL = EnvGrab.create('BottomPairLasers')
            .id(i)
            .child()
            .name('PillarL')
            .end().regex;
         regexPillarR = EnvGrab.create('BottomPairLasers')
            .id(i)
            .child()
            .name('PillarR')
            .end().regex;
      }
      environment.push(
         {
            id: regexPillarL,
            lookupMethod: 'Regex',
            position: [-25 + i * 2, 1.25 - i * 0.1875, 32 + i * 4],
            rotation: [-25 + i * 5, 27 - i * 3, 300],
            components: {
               TubeBloomPrePassLight: {
                  colorAlphaMultiplier: 2.5,
                  bloomFogIntensityMultiplier: 1,
               },
            },
         },
         {
            id: regexPillarR,
            lookupMethod: 'Regex',
            position: [25 - i * 2, 1.25 - i * 0.1875, 32 + i * 4],
            rotation: [-25 + i * 5, 333 + i * 3, 60],
            components: {
               TubeBloomPrePassLight: {
                  colorAlphaMultiplier: 2.5,
                  bloomFogIntensityMultiplier: 1,
               },
            },
         },
      );
   }

   return environment;
}

export function generateMaterial() {
   return {
      ToriiStandard: { shader: 'Standard' },
      ToriiOpaqueLight: { shader: 'OpaqueLight' },
      ToriiTransparentLight: { shader: 'TransparentLight' },
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
