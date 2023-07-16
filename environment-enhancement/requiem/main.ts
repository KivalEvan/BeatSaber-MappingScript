import { logger, types, v3 } from '../../depsLocal.ts';
import { environmentSave } from '../helpers.ts';

const info: types.external.IEnvironmentJSON = {
   version: '1.0.0',
   name: 'Requiem',
   author: 'Kival Evan',
   environmentVersion: '1.0.0',
   environmentName: 'PanicEnvironment',
   description: 'Vanilla-compatible environment. One of my first hands-on environment enhancement.',
   features: {},
   environment: [],
   materials: {},
};

export function generateEnvironment(): types.v3.IChromaEnvironment[] {
   const environment: types.v3.IChromaEnvironment[] = [];

   // regex for environment enhancement
   const regexSpectrogram = `(\\[\\d+\\]Spectrogram(s|\\.|\\d)?)+$`;
   const regexRing = `\\[\\d+\\]Panels4TrackLaneRing\\(Clone\\)$`;
   const regexWindow = `\\[\\d+\\]Window$`;
   const regexTopCone = `\\[\\d+\\]TopCones$`;
   const regexBottomCone = `\\[\\d+\\]BottomCones$`;
   const regexConstGlowLineRing = `\\[\\d+\\]ConstructionGlowLine.?\\(5\\)$`;
   const regexConstGlowLineBacktop = `\\[\\d+\\]ConstructionGlowLine.?\\(7\\)$`;

   //#region helper
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
   //#endregion

   //#region yeet
   // linux user be like
   environment.push({
      id: regexWindow,
      lookupMethod: 'Regex',
      active: false,
   });
   // remove this if u want window, this is done for cinema-compatibility
   //#endregion
   //#region kone
   environment.push(
      {
         id: regexTopCone,
         lookupMethod: 'Regex',
         rotation: [0, 0, 90],
         position: [-80, -63.671875, 12].map((p) => p / 0.6) as types.Vector3,
      },
      {
         id: regexTopCone,
         lookupMethod: 'Regex',
         duplicate: 1,
         rotation: [0, 0, -90],
         position: [80, 73, 12].map((p) => p / 0.6) as types.Vector3,
      }
   );
   //#endregion
   //#region extra thicc ring
   environment.push({
      id: regexRing,
      lookupMethod: 'Regex',
      scale: [4, 4, 1],
   });
   //#endregion
   //#region test
   const posGlowLine1: types.Vector3 = [40, 14, 0].map((p) => p / 0.6) as types.Vector3;
   const posGlowLine2: types.Vector3 = [36, 18, 0].map((p) => p / 0.6) as types.Vector3;
   environment.push(
      {
         id: regexConstGlowLineRing,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: posMirrorX(posGlowLine1),
      },
      {
         id: regexConstGlowLineRing,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: posMirrorX(posGlowLine2),
      },
      {
         id: regexConstGlowLineRing,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: posGlowLine2,
      },
      {
         id: regexConstGlowLineRing,
         lookupMethod: 'Regex',
         duplicate: 1,
         position: posGlowLine1,
      }
   );
   //#endregion
   //#region test
   const posGlowLine3: types.Vector3 = [20, -8, 0].map((p) => p / 0.6) as types.Vector3;
   environment.push(
      {
         id: regexConstGlowLineBacktop,
         lookupMethod: 'Regex',
         duplicate: 1,
         rotation: [90, 0, 0],
         position: posMirrorX(posGlowLine3),
      },
      {
         id: regexConstGlowLineBacktop,
         lookupMethod: 'Regex',
         duplicate: 1,
         rotation: [90, 0, 0],
         position: posGlowLine3,
      }
   );
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
   environmentSave({ ...info, environment: generateEnvironment() }, import.meta.url);
}
