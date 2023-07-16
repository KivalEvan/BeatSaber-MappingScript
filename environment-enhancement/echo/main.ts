import { logger, types, utils, v3 } from '../../depsLocal.ts';
import { environmentSave } from '../helpers.ts';

const info: types.external.IEnvironmentJSON = {
   version: '1.0.0',
   name: 'ECHO',
   author: 'Kival Evan',
   environmentVersion: '1.0.0',
   environmentName: 'KDAEnvironment',
   description: 'Vanilla-compatible but not recommended.',
   features: {},
   environment: [],
   materials: {},
};

export const backtopOrder = [1, 3, 5, 6, 4, 2];
export const roadOrder: number[] = [
   24, 21, 39, 44, 65, 48, 76, 42, 30, 28, 36, 53, 60, 45, 17, 34, 43, 41, 23, 15, 49, 37, 26, 47,
   68, 66, 40, 77, 19, 62, 50, 67, 64, 46, 74, 71, 78, 69, 57, 72, 29, 54, 56, 75, 33, 63, 70, 55,
   73, 79, 51, 38, 59, 16, 31, 32, 52, 61, 58, 80, 35, 27, 7, 6, 22, 14, 12, 9, 8, 5, 25, 18, 11,
   10, 13, 20,
];
const screenX = 32;
const screenY = 18;
let idOffsetType0 = 200;
let idOffsetType4 = 200;
export const crystalLeftOrder = [1, 2, 3, 4, 5, 6].map((i) => i * 2 + idOffsetType0);
export const crystalRightOrder = [1, 2, 3, 4, 5, 6].map((i) => i * 2 + idOffsetType0 + 1);
const screenStartID = idOffsetType4 + 1;
const screenEndID = idOffsetType4 + screenX * screenY;
export const chevronOrder = [3, 4];

const temp = [];
for (let y = 0, i = idOffsetType4; y < screenY; y++) {
   for (let x = 0; x < screenX; x++) {
      temp.push(++i);
   }
}
export const screenOrder = temp;

export const centerOrder = [
   screenEndID + 1,
   screenEndID + 2,
   1,
   2,
   screenEndID + 3,
   screenEndID + 4,
];

export function generateEnvironment(drawScreen = false): types.v3.IChromaEnvironment[] {
   const pRandom = utils.pRandomFn('ECHO');
   const environment: types.v3.IChromaEnvironment[] = [];

   //#region environment and events order declaration stuff
   // regex for environment enhancement
   const regexConstruction = `Environment\.\\[\\d+\\]Construction$`;
   const regexTentacleLeft = `\\[\\d+\\]TentacleLeft$`;
   const regexTentacleRight = `\\[\\d+\\]TentacleRight$`;
   const regexGlowTopLine = `\\[\\d+\\]GlowTopLine$`;
   const regexGlowLine = `\\[\\d+\\]GlowLine$`;
   const regexGlowLineL = `\\[\\d+\\]GlowLineLVisible$`;
   const regexGlowLineR = `\\[\\d+\\]GlowLineRVisible$`;
   const regexLaser = `Environment\.\\[\\d+\\]Laser$`;
   const regexRotatingLasersPair = `\\[\\d+\\]RotatingLasersPair$`;
   environment.push(
      {
         id: '\\[\\d+\\]FloorMirror$',
         lookupMethod: 'Regex',
         active: false,
      },
      {
         id: regexTentacleLeft,
         lookupMethod: 'Regex',
         position: [-10, 7, 48],
         components: { ILightWithId: { type: 0, lightID: ++idOffsetType0 } },
      },
      {
         id: regexTentacleRight,
         lookupMethod: 'Regex',
         position: [10, 7, 48],
         components: { ILightWithId: { type: 0, lightID: ++idOffsetType0 } },
      },
      {
         id: '\\[\\d+\\]EnergyPanel$',
         lookupMethod: 'Regex',
         position: [0, 7, 34.1666],
         scale: [0.033, 0.033, 0.033],
      },
      {
         id: '\\[\\d+\\]RightPanel$',
         lookupMethod: 'Regex',
         position: [7.5, -1.25, 36],
         scale: [1.69, 1.69, 1],
      },
      {
         id: '\\[\\d+\\]LeftPanel$',
         lookupMethod: 'Regex',
         position: [-7.5, -1.25, 36],
         scale: [1.69, 1.69, 1],
      }
   );

   const screenLight: { [key: number]: number } = {};
   const screenXOffset = 0;
   const screenYOffset = 18;
   const screenSize = 0.4;
   const screenGap = 0;
   if (drawScreen) {
      for (let y = 0; y < screenY; y++) {
         for (let x = 0; x < screenX; x++) {
            const posX =
               screenXOffset + -(((screenX - 1) / 2) * screenSize) + x * (screenSize + screenGap);
            const posY =
               screenYOffset + -((screenY / 2) * screenSize) - y * (screenSize + screenGap);
            const posZ = 32 - Math.tan(345 * (Math.PI / 180)) * screenSize * y;
            environment.push({
               id: regexGlowLine,
               lookupMethod: 'Regex',
               duplicate: 1,
               position: [posX, posY, posZ],
               rotation: [345, 0, 0],
               scale: [48 / 8, 2 / 8, 1],
               components: {
                  TubeBloomPrePassLight: { bloomFogIntensityMultiplier: 2 },
                  ILightWithId: { lightID: ++idOffsetType4 },
               },
            });
            screenLight[idOffsetType4] = 0;
         }
      }
   }

   for (let i = 0, offset = 0; i < 77; i++) {
      if (i === 26) {
         offset++;
         continue;
      }
      const posZ = 1.75 + (i - offset) * 1.25 + pRandom() * 0.5;
      environment.push({
         id: i ? regexGlowLine.replace('$', ` \\(${i}\\)$`) : regexGlowLine,
         lookupMethod: 'Regex',
         position: [
            (i - offset) % 2
               ? 0.5 + pRandom() * 0.5 + (i - offset) / 48
               : -(0.5 + pRandom() * 0.5 + (i - offset) / 48),
            -0.25,
            posZ,
         ],
         scale: i - offset ? [1, 1.25 + pRandom() * 0.75, 1] : [1, 1, 1],
         rotation: [0, 0, (i - offset) % 2 ? 90 : -90],
      });
   }
   for (let i = 0; i < 5; i++) {
      environment.push({
         id: i ? regexGlowTopLine.replace('$', ` \\(${i}\\)$`) : regexGlowTopLine,
         lookupMethod: 'Regex',
         position: [-20 + i * 10, i % 2 ? 16 : 20, 7.5],
      });
   }
   for (let i = 0; i < 7; i++) {
      const id = i ? regexRotatingLasersPair.replace('$', ` \\(${i}\\)$`) : regexRotatingLasersPair;
      environment.push(
         {
            id: id.replace('$', '\\.\\[\\d+\\]BaseL$'),
            lookupMethod: 'Regex',
            position: [-8 - i * 4, -2.5, 64 + i * 4],
         },
         {
            id: id.replace('$', '\\.\\[\\d+\\]BaseR$'),
            lookupMethod: 'Regex',
            position: [8 + i * 4, -2.5, 64 + i * 4],
         },
         {
            id: id.replace('$', '\\.\\[\\d+\\]BaseL\\.\\[\\d+\\]Laser$'),
            lookupMethod: 'Regex',
            rotation: [60 + i * 4, -135 - i * 5, 0],
         },
         {
            id: id.replace('$', '\\.\\[\\d+\\]BaseR\\.\\[\\d+\\]Laser$'),
            lookupMethod: 'Regex',
            rotation: [60 + i * 4, 135 + i * 5, 0],
         }
      );
   }
   for (let i = 0; i < 6; i++) {
      const fixed = i <= 2 ? i + 2 : i + 4;
      environment.push({
         id: fixed ? regexLaser.replace('$', ` \\(${fixed}\\)$`) : regexLaser,
         lookupMethod: 'Regex',
         position: [
            (i > 2 ? -1 : 1) * (8 + (i > 2 ? i - 3 : i) * 3),
            -3,
            48 - (i > 2 ? i - 3 : i) * 3,
         ],
         rotation: [0, 0, 0],
      });
   }
   environment.push(
      {
         id: regexConstruction,
         lookupMethod: 'Regex',
         position: [0, 6.5, 22.5],
      },
      {
         id: regexConstruction,
         lookupMethod: 'Regex',
         duplicate: 1,
         scale: [1.25, 1.25, 1.25],
         position: [0, 12, 24],
         rotation: [0, 0, 180],
      },
      {
         id: regexConstruction,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: [-18, -4, 18],
         rotation: [0, 315, 180],
      },
      {
         id: regexConstruction,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: [18, -4, 18],
         rotation: [0, 45, 180],
      },
      {
         id: regexGlowLineL,
         lookupMethod: 'Regex',
         position: [-3.3125, 6.5, 35],
         rotation: [180, 0, 0],
      },
      {
         id: regexGlowLineR,
         lookupMethod: 'Regex',
         position: [3.3125, 6.5, 35],
         rotation: [180, 0, 0],
      },
      {
         id: regexGlowLineL,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: [-29.1875, -3.875, 24.46875],
         rotation: [0, 45, 0],
         components: { ILightWithId: { lightID: ++idOffsetType4 } },
      },
      {
         id: regexGlowLineR,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: [-24.421875, -3.875, 29.171875],
         rotation: [0, 45, 0],
         components: { ILightWithId: { lightID: ++idOffsetType4 } },
      },
      {
         id: regexGlowLineL,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: [24.421875, -3.875, 29.171875],
         rotation: [0, 45, 0],
         components: { ILightWithId: { lightID: ++idOffsetType4 } },
      },
      {
         id: regexGlowLineR,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: [29.1875, -3.875, 24.46875],
         rotation: [0, 45, 0],
         components: { ILightWithId: { lightID: ++idOffsetType4 } },
      },
      // {
      //     id: regexGlowLineBoxLight,
      //     lookupMethod: 'Regex',
      //     scale: [4.125, 2.5, 0.03125],
      //     position: [
      //         0,
      //         screenYOffset +
      //             1 +
      //             -(((screenY + 1) / 2) * screenSize) -
      //             (screenY / 2 + 1) * (screenSize + screenGap),
      //         32 - Math.tan(345 * (Math.PI / 180)) * screenSize * (screenY / 2),
      //     ],
      //     rotation: [345, 0, 0],
      // },
      {
         id: regexTentacleLeft,
         lookupMethod: 'Regex',
         duplicate: 1,
         active: true,
         position: [-3, -10, 22.5],
         rotation: [285, 0, 180],
         components: { ILightWithId: { type: 0, lightID: ++idOffsetType0 } },
      },
      {
         id: regexTentacleRight,
         lookupMethod: 'Regex',
         duplicate: 1,
         active: true,
         position: [3, -10, 22.5],
         rotation: [285, 0, 180],
         components: { ILightWithId: { type: 0, lightID: ++idOffsetType0 } },
      },
      {
         id: regexTentacleLeft,
         lookupMethod: 'Regex',
         duplicate: 1,
         active: true,
         position: [-25, -12.5, 44],
         rotation: [285, 180, 180],
         components: { ILightWithId: { type: 0, lightID: ++idOffsetType0 } },
      },
      {
         id: regexTentacleRight,
         lookupMethod: 'Regex',
         duplicate: 1,
         active: true,
         position: [25, -12.5, 44],
         rotation: [285, 180, 180],
         components: { ILightWithId: { type: 0, lightID: ++idOffsetType0 } },
      },
      {
         id: regexTentacleLeft,
         lookupMethod: 'Regex',
         duplicate: 1,
         active: true,
         position: [-17.5, -17.5, 42],
         rotation: [292.5, 180, 180],
         components: { ILightWithId: { type: 0, lightID: ++idOffsetType0 } },
      },
      {
         id: regexTentacleRight,
         lookupMethod: 'Regex',
         duplicate: 1,
         active: true,
         position: [17.5, -17.5, 42],
         rotation: [292.5, 180, 180],
         components: { ILightWithId: { type: 0, lightID: ++idOffsetType0 } },
      },
      {
         id: regexTentacleLeft,
         lookupMethod: 'Regex',
         duplicate: 1,
         active: true,
         position: [-19, -1, 45],
         rotation: [0, 180, 180],
         components: { ILightWithId: { type: 0, lightID: ++idOffsetType0 } },
      },
      {
         id: regexTentacleRight,
         lookupMethod: 'Regex',
         duplicate: 1,
         active: true,
         position: [19, -1, 45],
         rotation: [0, 180, 180],
         components: { ILightWithId: { type: 0, lightID: ++idOffsetType0 } },
      },
      {
         id: regexTentacleLeft,
         lookupMethod: 'Regex',
         duplicate: 1,
         active: true,
         position: [-24, 2, 50],
         rotation: [0, 150, 315],
         components: { ILightWithId: { type: 0, lightID: ++idOffsetType0 } },
      },
      {
         id: regexTentacleRight,
         lookupMethod: 'Regex',
         duplicate: 1,
         active: true,
         position: [24, 2, 50],
         rotation: [0, 210, 45],
         components: { ILightWithId: { type: 0, lightID: ++idOffsetType0 } },
      }
   );

   // v3 patch for old v2 pos
   // this was designed in v2 position, need to update
   environment.forEach((e) => {
      if (e.position) {
         e.position = e.position.map((n) => n * 0.6) as typeof e.position;
      }
      if (e.localPosition) {
         e.localPosition = e.localPosition.map((n) => n * 0.6) as typeof e.localPosition;
      }
   });

   return environment;
}

export function insertEnvironment(d: v3.Difficulty) {
   if (d.customData.environment?.length) {
      logger.warn('Environment enhancement previously existed, replacing');
   }
   d.customData.environment = generateEnvironment();
}

if (import.meta.main) {
   environmentSave({ ...info, environment: generateEnvironment() }, import.meta.url);
}
