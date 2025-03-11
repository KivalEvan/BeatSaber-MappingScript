import { ext, types } from '@bsmap';
import { Materials } from './materials.ts';

const YIN_YANG_SIZE = 12;
const YIN_YANG_BORDER_SIZE = 0.25;

export const YIN_YANG_LIGHT_ID: number[] = [42, 69, 96];
export const YIN_YANG_MODEL_DATA: types.v3.IChromaEnvironment[] = [];

export function create(): types.wrapper.ICustomDataDifficulty {
   const environment: types.v3.IChromaEnvironment[] = [];
   YIN_YANG_MODEL_DATA.length = 0;

   const sphereBlock = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Sphere', material: Materials.STANDARD },
      },
      [0, 0, 0],
   );
   const sphereLight = ext.heck.chroma.EnvironmentBlock.create(
      {
         geometry: { type: 'Sphere', material: Materials.OPAQUE_LIGHT },
         components: {
            ILightWithId: { type: 6 },
            TubeBloomPrePassLight: {
               colorAlphaMultiplier: 2,
               bloomFogIntensityMultiplier: 0.125,
            },
         },
      },
      [0, 0, 0],
   );

   const yinYang: types.v3.IChromaEnvironment[] = [];
   // base
   sphereBlock.place(
      {
         position: [0, 0, 0.001],
         scale: [
            YIN_YANG_SIZE + YIN_YANG_BORDER_SIZE,
            YIN_YANG_SIZE + YIN_YANG_BORDER_SIZE,
            0.0001,
         ],
      },
      yinYang,
   );

   sphereBlock.place(
      {
         position: [0, 0, 0],
         scale: [YIN_YANG_SIZE, YIN_YANG_SIZE, 0.0001],
         rotation: [0, 0.1, 0],
      },
      yinYang,
   );
   sphereLight.place(
      {
         position: [0, 0, 0],
         scale: [YIN_YANG_SIZE, YIN_YANG_SIZE, 0.0001],
         rotation: [0, -0.1, 0],
         type: 6,
         id: 42,
      },
      yinYang,
   );

   sphereLight.place(
      {
         position: [0, YIN_YANG_SIZE / 4, -0.005],
         scale: [YIN_YANG_SIZE / 2, YIN_YANG_SIZE / 2, 0.0001],
         rotation: [0, 0.1, 0],
         type: 6,
         id: 69,
      },
      yinYang,
   );
   sphereBlock.place(
      {
         position: [0, -YIN_YANG_SIZE / 4, -0.005],
         scale: [YIN_YANG_SIZE / 2, YIN_YANG_SIZE / 2, 0.0001],
         rotation: [0, -0.1, 0],
      },
      yinYang,
   );

   sphereBlock.place(
      {
         position: [0, YIN_YANG_SIZE / 4, -0.0125],
         scale: [YIN_YANG_SIZE / 6, YIN_YANG_SIZE / 6, 0.0001],
      },
      yinYang,
   );
   sphereLight.place(
      {
         position: [0, -YIN_YANG_SIZE / 4, -0.0125],
         scale: [YIN_YANG_SIZE / 6, YIN_YANG_SIZE / 6, 0.0001],
         type: 6,
         id: 96,
      },
      yinYang,
   );

   const yinYangGroup = ext.heck.chroma.EnvironmentGroup.create(yinYang, [0, 0, 0]);
   yinYangGroup.place({ position: [0, 11, 48] }, environment);

   YIN_YANG_MODEL_DATA.push(...environment);
   return { environment };
}
