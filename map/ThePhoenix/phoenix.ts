import { Beatmap, mod, radToDeg, randomNormal, range, vectorAdd } from '@bsmap';
import { pRandomFn } from '@bsmap';
import { isVector4, types, vectorMul } from '@bsmap';
import phoenixModel from './phoenix.json' with { type: 'json' };

const DEBRI_COUNT = 125;
const EFFECT_DURATION = 2.5625;
export default function (bm: Beatmap, is360?: boolean) {
   const pRand = pRandomFn('Phoenix');
   const envAry: types.v3.IChromaEnvironment[] = [];
   bm.difficulty.customData.customEvents = [];
   bm.difficulty.customData.environment ??= [];
   bm.difficulty.customData.pointDefinitions = {};
   bm.difficulty.customData.pointDefinitions.hide = [[0, -999, 0, 0]];
   bm.difficulty.customData.pointDefinitions.logoScale = [[10, 10, 10, 0]];
   bm.difficulty.customData.pointDefinitions.logoOriPos = [[0.11, 12, 56, 0]];
   bm.difficulty.customData.pointDefinitions.logoOriScale = [[20, 20, 20, 0]];
   phoenixModel.nodes.forEach((node, i) => {
      const track = `phoenix_${i}`;
      const position = vectorAdd(
         vectorMul(
            [
               node.translation[0] + 0.0125,
               node.translation[1],
               -node.translation[2],
            ],
            [10, 10, 4],
         ),
         [0, 10.5, 66.3],
      );
      const angle = isVector4(node.rotation) ? convertangles(node.rotation) : [0, 0, 0];
      envAry.push({
         track,
         geometry: {
            type: 'Cube',
            material: 'PanoramaOpaqueLight',
            // material:'PanoramaStandard'
         },
         position: [position[0], position[1] - 999, position[2]],
         rotation: [angle[2], angle[1], angle[0]],
         scale: vectorMul([node.scale[0], node.scale[1], node.scale[2]], 20),
         components: {
            ILightWithId: { type: 1 },
            TubeBloomPrePassLight: {
               colorAlphaMultiplier: 2.5,
               bloomFogIntensityMultiplier: 0.75,
            },
         },
      });
      bm.difficulty.customData.pointDefinitions![track + 'pos'] = [
         [position[0] * 0.25, position[1] * 0.25 - 4, position[2], 0],
         [position[0], position[1], position[2], 1, 'easeOutExpo'],
      ];
      if (is360) {
         bm.difficulty.customData.pointDefinitions![track + 'posflip'] = [
            [position[0] * 0.25, position[1] * 0.25 - 4, position[2] * -1, 0],
            [position[0], position[1], position[2] * -1, 1, 'easeOutExpo'],
         ];
      }
      bm.difficulty.customData.customEvents!.push({
         t: 'AnimateTrack',
         b: 558,
         d: {
            track,
            position: [[...position, 0]],
         },
      });
   });
   envAry.push(
      {
         track: 'logoOrig',
         lookupMethod: 'EndsWith',
         id: 'PyroLogo',
         // duplicate: 1,
         position: [0.11, 12, 56],
         rotation: [0, 0, 0],
         scale: [20, 20, 20],
      },
      {
         track: 'logo0',
         lookupMethod: 'EndsWith',
         id: 'PyroLogo',
         duplicate: 1,
         position: [0, -999, 0],
         rotation: [0, 0, 180],
         scale: [10, 10, 10],
      },
      {
         track: 'logo1',
         lookupMethod: 'EndsWith',
         id: 'PyroLogo',
         duplicate: 1,
         position: [0, -999, 0],
         rotation: [0, 0, 180],
         scale: [10, 10, 10],
      },
   );
   bm.difficulty.customData.customEvents!.push(
      {
         t: 'AnimateTrack',
         b: 558,
         d: {
            track: 'logoOrig',
            position: [[0.11, 13.875, 66.47, 0]],
            scale: 'logoScale',
         },
      },
      {
         t: 'AnimateTrack',
         b: 558,
         d: {
            track: 'logo0',
            position: [[0, 7.125, 66.47, 0]],
         },
      },
      {
         t: 'AnimateTrack',
         b: 558,
         d: {
            track: 'logo1',
            position: [[0, 0.875, 66.47, 0]],
         },
      },
   );
   bm.difficulty.customData.pointDefinitions.logoOrigPos = [
      [0.11 * 0.25, 13.875 * 0.25 - 4, 66.47, 0],
      [0.11, 13.875, 66.47, 1, 'easeOutExpo'],
   ];
   bm.difficulty.customData.pointDefinitions.logo0Pos = [
      [0.11 * 0.25, 7.125 * 0.25 - 4, 66.47, 0],
      [0.11, 7.125, 66.47, 1, 'easeOutExpo'],
   ];
   bm.difficulty.customData.pointDefinitions.logo1Pos = [
      [0.11 * 0.25, 0.875 * 0.25 - 4, 66.47, 0],
      [0.11, 0.875, 66.47, 1, 'easeOutExpo'],
   ];
   if (is360) {
      bm.difficulty.customData.pointDefinitions.logoOrigPosflip = [
         [0.11 * 0.25, 13.875 * 0.25 - 4, -66.47, 0],
         [0.11, 13.875, -66.47, 1, 'easeOutExpo'],
      ];
      bm.difficulty.customData.pointDefinitions.logo0Posflip = [
         [0.11 * 0.25, 7.125 * 0.25 - 4, -66.47, 0],
         [0.11, 7.125, -66.47, 1, 'easeOutExpo'],
      ];
      bm.difficulty.customData.pointDefinitions.logo1Posflip = [
         [0.11 * 0.25, 0.875 * 0.25 - 4, -66.47, 0],
         [0.11, 0.875, -66.47, 1, 'easeOutExpo'],
      ];
   }
   for (const i of range(DEBRI_COUNT)) {
      const track = `debri_${i}`;
      envAry.push({
         track,
         geometry: {
            material: 'PanoramaStandard',
            type: i > DEBRI_COUNT / 2 ? 'Cube' : 'Triangle',
         },
         position: [
            randomNormal(0, 10, 0, pRand),
            Math.abs(randomNormal(0, 5, 0, pRand)) - 2.5,
            64 + pRand(5, -5),
         ],
         rotation: [pRand(0, 360, true), pRand(0, 360, true), 0],
         scale: vectorMul([pRand(0.25, 1), pRand(0.5, 2), pRand(0.0625, 0.25)], 1.875),
      });
      bm.difficulty.customData.customEvents!.push({
         t: 'AnimateTrack',
         b: 0,
         d: {
            track,
            position: 'hide',
         },
      });
   }
   // for (const i of [-1, 1]) {
   //    envAry!.push(
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [4 * i, 13.25, 66.47],
   //          rotation: [0, 180, 45 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [7 * i, 15.75, 66.47],
   //          rotation: [0, 180, 30 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [10 * i, 18, 66.47],
   //          rotation: [0, 180, 35 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [13 * i, 20.25, 66.47],
   //          rotation: [0, 180, 30 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [16 * i, 22.5, 66.47],
   //          rotation: [0, 180, 25 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [5 * i, 8.375, 66.47],
   //          rotation: [0, 180, 160 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [7.5 * i, 9, 66.47],
   //          rotation: [0, 180, 155 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [10 * i, 10, 66.47],
   //          rotation: [0, 180, 150 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [9.5 * i, 12, 66.47],
   //          rotation: [0, 180, 150 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [12.5 * i, 11, 66.47],
   //          rotation: [0, 180, 140 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [12 * i, 13, 66.47],
   //          rotation: [0, 180, 140 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [15 * i, 12.375, 66.47],
   //          rotation: [0, 180, 130 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [14.5 * i, 15, 66.47],
   //          rotation: [0, 180, 130 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [17.5 * i, 13.75, 66.47],
   //          rotation: [0, 180, 120 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [17 * i, 16, 66.47],
   //          rotation: [0, 180, 120 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [20 * i, 16.375, 66.47],
   //          rotation: [0, 180, 110 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [18.75 * i, 18, 66.47],
   //          rotation: [0, 180, 90 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [19.375 * i, 20.75, 66.47],
   //          rotation: [0, 180, 75 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [2.875 * i, 4.125, 66.47],
   //          rotation: [0, 180, 120 * i],
   //          scale: [10, 10, 10],
   //       },
   //       {
   //          lookupMethod: 'EndsWith',
   //          id: 'PyroLogo',
   //          duplicate: 1,
   //          position: [5.625 * i, 2.25, 66.47],
   //          rotation: [0, 180, 105 * i],
   //          scale: [10, 10, 10],
   //       }
   //    );
   // }
   bm.difficulty.customData.environment!.push(...envAry);

   let flip = is360;
   let c = 0;
   for (const repeatTime of [202, 342, 542]) {
      for (const i of range(DEBRI_COUNT)) {
         const track = `debri_${i}`;
         bm.difficulty.customData.customEvents!.push(
            {
               t: 'AnimateTrack',
               b: repeatTime - EFFECT_DURATION,
               d: {
                  track,
                  duration: EFFECT_DURATION,
                  position: [
                     [0, -4, flip ? -65 : 65, 0],
                     [
                        randomNormal(0, 8, 0, pRand),
                        Math.abs(randomNormal(0, 5, 0, pRand)) - 2.5,
                        (65 + pRand(-8, 0)) * (flip ? -1 : 1),
                        1,
                        'easeOutCirc',
                     ],
                  ],
                  rotation: [
                     [0, 0, 0, 0],
                     [
                        pRand(0, 360, true),
                        pRand(0, 360, true),
                        pRand(0, 360, true),
                        1,
                        'easeOutQuad',
                     ],
                  ],
               },
            },
            {
               t: 'AnimateTrack',
               b: repeatTime,
               d: {
                  track,
                  position: 'hide',
               },
            },
         );
      }
      bm.difficulty.customData.customEvents!.push(
         {
            t: 'AnimateTrack',
            b: repeatTime - EFFECT_DURATION,
            d: {
               track: 'logoOrig',
               duration: EFFECT_DURATION,
               position: 'logoOrigPos' + (flip ? 'flip' : ''),
               scale: 'logoScale',
            },
         },
         {
            t: 'AnimateTrack',
            b: repeatTime - EFFECT_DURATION,
            d: {
               track: 'logo0',
               duration: EFFECT_DURATION,
               position: 'logo0Pos' + (flip ? 'flip' : ''),
            },
         },
         {
            t: 'AnimateTrack',
            b: repeatTime - EFFECT_DURATION,
            d: {
               track: 'logo1',
               duration: EFFECT_DURATION,
               position: 'logo1Pos' + (flip ? 'flip' : ''),
            },
         },
         {
            t: 'AnimateTrack',
            b: repeatTime,
            d: {
               track: 'logoOrig',
               position: 'logoOriPos',
               scale: 'logoOriScale',
            },
         },
         {
            t: 'AnimateTrack',
            b: repeatTime,
            d: {
               track: 'logo0',
               position: 'hide',
            },
         },
         {
            t: 'AnimateTrack',
            b: repeatTime,
            d: {
               track: 'logo1',
               position: 'hide',
            },
         },
      );
      phoenixModel.nodes.forEach((_, i) => {
         const track = `phoenix_${i}`;
         bm.difficulty.customData.customEvents!.push(
            {
               t: 'AnimateTrack',
               b: repeatTime - EFFECT_DURATION,
               d: {
                  track,
                  duration: EFFECT_DURATION,
                  position: track + 'pos' + (flip ? 'flip' : ''),
               },
            },
            {
               t: 'AnimateTrack',
               b: repeatTime,
               d: {
                  track,
                  position: 'hide',
               },
            },
         );
      });

      c++;
      if (c === 2) {
         flip = false;
      }
   }
}

// convert quaternion to euler angles
function convertangles(quaternion: types.Vector4): types.Vector3 {
   const x = Math.atan2(
      2 * quaternion[0] * quaternion[1] + 2 * quaternion[2] * quaternion[3],
      1 - 2 * quaternion[1] * quaternion[1] - 2 * quaternion[2] * quaternion[2],
   );
   const y = Math.asin(
      2 * quaternion[0] * quaternion[2] - 2 * quaternion[3] * quaternion[1],
   );
   const z = Math.atan2(
      2 * quaternion[0] * quaternion[3] + 2 * quaternion[1] * quaternion[2],
      1 - 2 * quaternion[2] * quaternion[2] - 2 * quaternion[3] * quaternion[3],
   );
   return [x, y, z].map((e) => mod(radToDeg(-e), 360)) as types.Vector3;
}
