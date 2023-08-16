// why the fuck do i still need noodle extensions for parenting geometry, it would makes my life so much easier
// than having to preprocess 1000+ animation for "optimisation" reason or some shit
import logger from '../../../BeatSaber-Deno/logger.ts';
import { v3, ext, utils, types } from '../../depsLocal.ts';

const butterflyCount = 100;
const bopZOffset = 100;
const loopDuration = 0.75;
const loopRepeat = 128;
const motionJitterCount = 80;
const motionduration = 64;
export default function (data: v3.Difficulty) {
   data.customData.environment ??= [];
   data.customData.customEvents ??= [];
   data.customData.pointDefinitions ??= {};
   data.customData.pointDefinitions.flapR = [
      [0, 0, 40, 0],
      [0, 0, 340, 0.5, 'easeInOutCubic'],
      [0, 0, 40, 1, 'easeInOutCubic'],
   ];
   data.customData.pointDefinitions.flapL = [
      [0, 0, 320, 0],
      [0, 0, 20, 0.5, 'easeInOutCubic'],
      [0, 0, 320, 1, 'easeInOutCubic'],
   ];
   data.customData.pointDefinitions.bop = [
      [1, 1, 1, 0],
      [1, 1.0004, 1, 0.5, 'easeInOutCubic'],
      [1, 1, 1, 1, 'easeInOutCubic'],
   ];

   for (let count = 0; count < butterflyCount; count++) {
      let prevX = count % 2 ? 2 : -2;
      let prevY = 0;
      const butterfly = ext.chroma.EnvironmentGroup.create([
         {
            // body
            geometry: { type: 'Cube', material: 'RailwayTransparentLight' },
            components: { ILightWithId: { type: 4 } },
            scale: [1 / 20, 1 / 20, 1 / 6],
            position: [0, 0, 0],
            track: `bfly_body_${count}`,
         },
         {
            // wing
            geometry: { type: 'Plane', material: 'RailwayTransparentLight' },
            components: { ILightWithId: { type: 4 } },
            scale: [1 / 32, 1 / 64, 1 / 40],
            rotation: [0, 0, 0],
            position: [0.175, 0, 0.09],
            track: `bfly_r_1_${count}`,
         },
         {
            geometry: { type: 'Plane', material: 'RailwayTransparentLight' },
            components: { ILightWithId: { type: 4 } },
            scale: [1 / 48, 1 / 64, 1 / 48],
            rotation: [0, 5, 0],
            position: [0.125, 0, -0.15],
            track: `bfly_r_2_${count}`,
         },
         {
            geometry: { type: 'Plane', material: 'RailwayTransparentLight' },
            components: { ILightWithId: { type: 4 } },
            scale: [1 / 32, 1 / 64, 1 / 40],
            rotation: [0, 0, 0],
            position: [-0.175, 0, 0.09],
            track: `bfly_l_1_${count}`,
         },
         {
            geometry: { type: 'Plane', material: 'RailwayTransparentLight' },
            components: { ILightWithId: { type: 4 } },
            scale: [1 / 48, 1 / 64, 1 / 48],
            rotation: [0, 355, 0],
            position: [-0.125, 0, -0.15],
            track: `bfly_l_2_${count}`,
         },
         {
            // some thing to parent so i dont have to do some weird shit body rotation without using the body itself
            geometry: { type: 'Plane', material: 'RailwayTransparentLight' },
            track: `bfly_r_root_${count}`,
            scale: [0, 0, 0],
         },
         {
            geometry: { type: 'Plane', material: 'RailwayTransparentLight' },
            track: `bfly_l_root_${count}`,
            scale: [0, 0, 0],
         },
         {
            // the only way i can bop this is to literally move this all the way down and scale this on y
            geometry: { type: 'Plane', material: 'RailwayTransparentLight' },
            track: `bfly_${count}`,
            scale: [0, 0, 0],
         },
      ]);

      data.customData.customEvents.push(
         {
            b: 0,
            t: 'AssignTrackParent',
            d: {
               parentTrack: `bfly_r_root_${count}`,
               childrenTracks: [`bfly_r_1_${count}`, `bfly_r_2_${count}`],
               worldPositionStays: true,
            },
         },
         {
            b: 0,
            t: 'AssignTrackParent',
            d: {
               parentTrack: `bfly_l_root_${count}`,
               childrenTracks: [`bfly_l_1_${count}`, `bfly_l_2_${count}`],
               worldPositionStays: true,
            },
         },
         {
            b: 0,
            t: 'AssignTrackParent',
            d: {
               parentTrack: `bfly_body_${count}`,
               childrenTracks: [`bfly_r_root_${count}`, `bfly_l_root_${count}`],
               worldPositionStays: true,
            },
         },
         // this is genuinely stupid because i have no idea how parenting works
         // and it's stupid that i have to move this position in animation first so that rotation doesnt get extra fucked
         {
            b: 0,
            t: 'AnimateTrack',
            d: {
               track: `bfly_body_${count}`,
               duration: 1,
               position: [
                  [0, bopZOffset, 0, 0],
                  [0, bopZOffset, 0, 1, 'easeInOutCubic'],
               ],
            },
         },
         {
            b: 0,
            t: 'AssignTrackParent',
            d: {
               parentTrack: `bfly_${count}`,
               childrenTracks: [`bfly_body_${count}`],
            },
         },
         {
            b: count / (butterflyCount / 2),
            t: 'AnimateTrack',
            d: {
               track: `bfly_r_root_${count}`,
               duration: loopDuration,
               repeat: loopRepeat,
               rotation: 'flapR',
            },
         },
         {
            b: count / (butterflyCount / 2),
            t: 'AnimateTrack',
            d: {
               track: `bfly_l_root_${count}`,
               duration: loopDuration,
               repeat: loopRepeat,
               rotation: 'flapL',
            },
         },
         {
            b: count / (butterflyCount / 2),
            t: 'AnimateTrack',
            d: {
               track: `bfly_${count}`,
               duration: loopDuration,
               repeat: loopRepeat,
               scale: 'bop',
            },
         },
         // move
         // {
         //    // debug some boppyness
         //    b: count / (butterflyCount / 2),
         //    t: 'AnimateTrack',
         //    d: {
         //       track: `bfly_${count}`,
         //       duration: 64,
         //       position: [
         //          [prevX, -bopZOffset + 0.5 + prevY, -(count / 4) + 2, 0],
         //          [prevX, -bopZOffset + 0.5 + prevY, -(count / 4) + 2, 1],
         //       ],
         //    },
         // },
         {
            b: count / (butterflyCount / 2),
            t: 'AnimateTrack',
            d: {
               track: `bfly_${count}`,
               duration: motionduration,
               position: new Array(motionJitterCount).fill(0).map((_, i) => {
                  prevX += utils.random(-0.375, 0.375);
                  prevY += utils.random(-0.375, 0.375);
                  return i
                     ? [
                          prevX,
                          -bopZOffset + 0.5 + prevY,
                          -(count / 4) + 2 + i / 4,
                          utils.normalize(i, 0, motionJitterCount - 1),
                          'splineCatmullRom',
                       ]
                     : [-(count / 4) + 2, -bopZOffset + 1, 0, 0];
               }) as types.Vector3PointDefinition[],
            },
         }
      );
      data.customData.environment.push(...butterfly.place({ scale: [0.25, 0.25, 0.25] }));
   }
}
