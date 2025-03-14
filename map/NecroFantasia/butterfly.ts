import { Beatmap, deepCopy, ext, normalize, pRandomFn, range as rangeEx, types } from '@bsmap';
function range(start: number, end?: number, step?: number): number[] {
   return rangeEx(start, end!, step!, true);
}

const bflyMax = 80;
const bflyScale = 1 / 4;
const timeStart = 678;
const motionJitterCount = 100;
const motionJitterAmount = 0.3125;
const motionduration = 68;
const loopDuration = 0.75;
const loopRepeat = 128;
const posHide: types.Vector3 = [0, -99999, -99999];

export default function (data: Beatmap) {
   const pRandom = pRandomFn('Necro Fantasia');
   data.difficulty.customData.environment ??= [];
   data.difficulty.customData.customEvents ??= [];
   data.difficulty.customData.pointDefinitions ??= {};
   data.difficulty.customData.pointDefinitions.flapR = [
      [0, 0, 40, 0],
      [0, 0, 340, 0.5, 'easeInOutCubic'],
      [0, 0, 40, 1, 'easeInOutCubic'],
   ];
   data.difficulty.customData.pointDefinitions.flapL = [
      [0, 0, 320, 0],
      [0, 0, 20, 0.5, 'easeInOutCubic'],
      [0, 0, 320, 1, 'easeInOutCubic'],
   ];

   for (const it of range(0, bflyMax - 1)) {
      let prevX = it % 2 ? 2 : -2;
      let prevY = 0;
      const butterfly = ext.heck.chroma.EnvironmentGroup.create([
         {
            // body
            geometry: { type: 'Cube', material: 'RailwayTransparentLight' },
            components: {
               ILightWithId: { type: 4 },
               TubeBloomPrePassLight: {
                  bloomFogIntensityMultiplier: 0.25,
                  colorAlphaMultiplier: 4,
               },
            },
            scale: [1 / 20, 1 / 20, 1 / 5],
            rotation: [0, 0, 45],
            position: posHide,
            track: `bfly_${it}`,
         },
         {
            // wing
            geometry: { type: 'Plane', material: 'RailwayTransparentLight' },
            components: {
               ILightWithId: { type: 4 },
               TubeBloomPrePassLight: {
                  bloomFogIntensityMultiplier: 0.25,
                  colorAlphaMultiplier: 4,
               },
            },
            scale: [1 / 32, 1 / 64, 1 / 40],
            position: posHide,
            track: `bfly_rf_${it}`,
         },
         {
            geometry: { type: 'Plane', material: 'RailwayTransparentLight' },
            components: {
               ILightWithId: { type: 4 },
               TubeBloomPrePassLight: {
                  bloomFogIntensityMultiplier: 0.25,
                  colorAlphaMultiplier: 4,
               },
            },
            scale: [1 / 48, 1 / 64, 1 / 48],
            position: posHide,
            track: `bfly_rb_${it}`,
         },
         {
            geometry: { type: 'Plane', material: 'RailwayTransparentLight' },
            components: {
               ILightWithId: { type: 4 },
               TubeBloomPrePassLight: {
                  bloomFogIntensityMultiplier: 0.25,
                  colorAlphaMultiplier: 4,
               },
            },
            scale: [1 / 32, 1 / 64, 1 / 40],
            position: posHide,
            track: `bfly_lf_${it}`,
         },
         {
            geometry: { type: 'Plane', material: 'RailwayTransparentLight' },
            components: {
               ILightWithId: { type: 4 },
               TubeBloomPrePassLight: {
                  bloomFogIntensityMultiplier: 0.25,
                  colorAlphaMultiplier: 4,
               },
            },
            scale: [1 / 48, 1 / 64, 1 / 48],
            rotation: [0, 90, 0],
            position: posHide,
            track: `bfly_lb_${it}`,
         },
      ]);

      const basePosition = new Array(motionJitterCount).fill(0).map((_, i) => {
         prevX += pRandom(-motionJitterAmount, motionJitterAmount);
         prevY += pRandom(-motionJitterAmount, motionJitterAmount);
         return i
            ? [
               prevX,
               1.125 + prevY,
               -(it / 4) + i / 4,
               normalize(i, 0, motionJitterCount - 1),
               'splineCatmullRom',
            ]
            : [-(it / 4) + 2, 1, 0, 0, 'easeStep'];
      }) as types.Vector3PointDefinitionBase;
      if (!(it % 9)) {
         data.difficulty.customData.customEvents.push(
            {
               b: 2 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: [`bfly_rf_${it}`, `bfly_rb_${it}`],
                  duration: loopDuration,
                  repeat: loopRepeat,
                  rotation: 'flapR',
               },
            },
            {
               b: 2 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: [`bfly_lf_${it}`, `bfly_lb_${it}`],
                  duration: loopDuration,
                  repeat: loopRepeat,
                  rotation: 'flapL',
               },
            },
            {
               b: 2 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: `bfly_rf_${it}`,
                  duration: motionduration,
                  position: deepCopy(basePosition).map((e) => {
                     if (typeof e === 'string') return e;
                     e[0] += 0.15 * bflyScale;
                     e[1] += 0.03 * bflyScale;
                     e[2] += 0.09 * bflyScale;
                     e[2] = -e[2] + 6;
                     return e;
                  }),
               },
            },
            {
               b: 2 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: `bfly_rb_${it}`,
                  duration: motionduration,
                  position: deepCopy(basePosition).map((e) => {
                     if (typeof e === 'string') return e;
                     e[0] += 0.12 * bflyScale;
                     e[1] += 0.02 * bflyScale;
                     e[2] += -0.15 * bflyScale;
                     e[2] = -e[2] + 6;
                     return e;
                  }),
               },
            },
            {
               b: 2 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: `bfly_lf_${it}`,
                  duration: motionduration,
                  position: deepCopy(basePosition).map((e) => {
                     if (typeof e === 'string') return e;
                     e[0] += -0.15 * bflyScale;
                     e[1] += 0.03 * bflyScale;
                     e[2] += 0.09 * bflyScale;
                     e[2] = -e[2] + 6;
                     return e;
                  }),
               },
            },
            {
               b: 2 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: `bfly_lb_${it}`,
                  duration: motionduration,
                  position: deepCopy(basePosition).map((e) => {
                     if (typeof e === 'string') return e;
                     e[0] += -0.12 * bflyScale;
                     e[1] += 0.02 * bflyScale;
                     e[2] += -0.15 * bflyScale;
                     e[2] = -e[2] + 6;
                     return e;
                  }),
               },
            },
            {
               b: 2 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: `bfly_${it}`,
                  duration: motionduration,
                  position: deepCopy(basePosition).map((e) => {
                     if (typeof e === 'string') return e;
                     e[2] = -e[2] + 6;
                     return e;
                  }),
               },
            },
            {
               b: 2 + motionduration + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: [
                     `bfly_${it}`,
                     `bfly_rf_${it}`,
                     `bfly_rb_${it}`,
                     `bfly_lf_${it}`,
                     `bfly_lb_${it}`,
                  ],
                  duration: 0,
                  position: [[...posHide, 0, 'easeStep']],
               },
            },
         );
      }
      if (!it) {
         data.difficulty.customData.customEvents.push(
            {
               b: 996 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: [`bfly_rf_${it}`, `bfly_rb_${it}`],
                  duration: loopDuration,
                  repeat: loopRepeat,
                  rotation: 'flapR',
               },
            },
            {
               b: 996 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: [`bfly_lf_${it}`, `bfly_lb_${it}`],
                  duration: loopDuration,
                  repeat: loopRepeat,
                  rotation: 'flapL',
               },
            },
            {
               b: 996 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: `bfly_rf_${it}`,
                  duration: motionduration,
                  position: deepCopy(basePosition).map((e) => {
                     if (typeof e === 'string') return e;
                     e[0] += 0.15 * bflyScale;
                     e[1] += 0.03 * bflyScale;
                     e[2] += 0.09 * bflyScale;
                     e[0] += 2;
                     e[2] = -e[2] + 12;
                     return e;
                  }),
               },
            },
            {
               b: 996 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: `bfly_rb_${it}`,
                  duration: motionduration,
                  position: deepCopy(basePosition).map((e) => {
                     if (typeof e === 'string') return e;
                     e[0] += 0.12 * bflyScale;
                     e[1] += 0.02 * bflyScale;
                     e[2] += -0.15 * bflyScale;
                     e[0] += 2;
                     e[2] = -e[2] + 12;
                     return e;
                  }),
               },
            },
            {
               b: 996 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: `bfly_lf_${it}`,
                  duration: motionduration,
                  position: deepCopy(basePosition).map((e) => {
                     if (typeof e === 'string') return e;
                     e[0] += -0.15 * bflyScale;
                     e[1] += 0.03 * bflyScale;
                     e[2] += 0.09 * bflyScale;
                     e[0] += 2;
                     e[2] = -e[2] + 12;
                     return e;
                  }),
               },
            },
            {
               b: 996 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: `bfly_lb_${it}`,
                  duration: motionduration,
                  position: deepCopy(basePosition).map((e) => {
                     if (typeof e === 'string') return e;
                     e[0] += -0.12 * bflyScale;
                     e[1] += 0.02 * bflyScale;
                     e[2] += -0.15 * bflyScale;
                     e[0] += 2;
                     e[2] = -e[2] + 12;
                     return e;
                  }),
               },
            },
            {
               b: 996 + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: `bfly_${it}`,
                  duration: motionduration,
                  position: deepCopy(basePosition).map((e) => {
                     if (typeof e === 'string') return e;
                     e[0] += 2;
                     e[2] = -e[2] + 12;
                     return e;
                  }),
               },
            },
            {
               b: 996 + motionduration + it / (bflyMax / 2),
               t: 'AnimateTrack',
               d: {
                  track: [
                     `bfly_${it}`,
                     `bfly_rf_${it}`,
                     `bfly_rb_${it}`,
                     `bfly_lf_${it}`,
                     `bfly_lb_${it}`,
                  ],
                  duration: 0,
                  position: [[...posHide, 0, 'easeStep']],
               },
            },
         );
      }
      data.difficulty.customData.customEvents.push(
         {
            b: timeStart + it / (bflyMax / 2),
            t: 'AnimateTrack',
            d: {
               track: [`bfly_rf_${it}`, `bfly_rb_${it}`],
               duration: loopDuration,
               repeat: loopRepeat,
               rotation: 'flapR',
            },
         },
         {
            b: timeStart + it / (bflyMax / 2),
            t: 'AnimateTrack',
            d: {
               track: [`bfly_lf_${it}`, `bfly_lb_${it}`],
               duration: loopDuration,
               repeat: loopRepeat,
               rotation: 'flapL',
            },
         },
         {
            b: timeStart + it / (bflyMax / 2),
            t: 'AnimateTrack',
            d: {
               track: `bfly_rf_${it}`,
               duration: motionduration,
               position: deepCopy(basePosition).map((e) => {
                  if (typeof e === 'string') return e;
                  e[0] += 0.15 * bflyScale;
                  e[1] += 0.03 * bflyScale;
                  e[2] += 0.09 * bflyScale;
                  return e;
               }),
            },
         },
         {
            b: timeStart + it / (bflyMax / 2),
            t: 'AnimateTrack',
            d: {
               track: `bfly_rb_${it}`,
               duration: motionduration,
               position: deepCopy(basePosition).map((e) => {
                  if (typeof e === 'string') return e;
                  e[0] += 0.12 * bflyScale;
                  e[1] += 0.02 * bflyScale;
                  e[2] += -0.15 * bflyScale;
                  return e;
               }),
            },
         },
         {
            b: timeStart + it / (bflyMax / 2),
            t: 'AnimateTrack',
            d: {
               track: `bfly_lf_${it}`,
               duration: motionduration,
               position: deepCopy(basePosition).map((e) => {
                  if (typeof e === 'string') return e;
                  e[0] += -0.15 * bflyScale;
                  e[1] += 0.03 * bflyScale;
                  e[2] += 0.09 * bflyScale;
                  return e;
               }),
            },
         },
         {
            b: timeStart + it / (bflyMax / 2),
            t: 'AnimateTrack',
            d: {
               track: `bfly_lb_${it}`,
               duration: motionduration,
               position: deepCopy(basePosition).map((e) => {
                  if (typeof e === 'string') return e;
                  e[0] += -0.12 * bflyScale;
                  e[1] += 0.02 * bflyScale;
                  e[2] += -0.15 * bflyScale;
                  return e;
               }),
            },
         },
         {
            b: timeStart + it / (bflyMax / 2),
            t: 'AnimateTrack',
            d: {
               track: `bfly_${it}`,
               duration: motionduration,
               position: basePosition,
            },
         },
         {
            b: timeStart + motionduration + it / (bflyMax / 2),
            t: 'AnimateTrack',
            d: {
               track: [
                  `bfly_${it}`,
                  `bfly_rf_${it}`,
                  `bfly_rb_${it}`,
                  `bfly_lf_${it}`,
                  `bfly_lb_${it}`,
               ],
               duration: 0,
               position: [[...posHide, 0]],
            },
         },
      );
      data.difficulty.customData.environment.push(
         ...butterfly.place({ scale: [bflyScale, bflyScale, bflyScale] }),
      );
   }
}
