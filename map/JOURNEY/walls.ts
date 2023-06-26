import { utils, v3 } from '../../depsLocal.ts';

export function walls(data: v3.Difficulty) {
   let tempWall = v3.Obstacle.create(
      {
         b: 68.75,
         d: 0.09375,
         x: 3,
         y: 0,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 68.875,
         d: 0.09375,
         x: 3,
         y: 0,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 69,
         d: 0.5,
         x: 3,
         y: 0,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 69.25,
         d: 0.09375,
         x: 3,
         y: 0,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 69.375,
         d: 0.09375,
         x: 3,
         y: 0,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 69.3125,
         d: 0.125,
         w: 2,
         h: 1,
         x: 5,
         y: 2,
         customData: { color: [0.75, 0.75, 0.75] },
      },
      {
         b: 69.5,
         d: 0.1875,
         w: 1,
         h: 3,
         x: 4,
         y: 1,
         customData: { color: [0.5, 0.5, 0.5] },
      },
      {
         b: 69.75,
         d: 0.25,
         w: 1,
         h: 3,
         x: 4,
         y: 1,
         customData: { color: [0.375, 0.375, 0.375] },
      },
   );
   tempWall = tempWall.concat(tempWall.map((w) => w.clone().mirror()));
   data.obstacles.push(...tempWall);

   tempWall = v3.Obstacle.create(
      {
         b: 195,
         d: 0.9375,
         w: 1,
         h: 2,
         x: 5,
         y: 1,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 196,
         d: 0.4375,
         w: 1,
         h: 2,
         x: 5,
         y: 1,
         customData: { color: [0.3125, 0.3125, 0.3125] },
      },
      {
         b: 196.5,
         d: 0.1875,
         w: 1,
         h: 2,
         x: 5,
         y: 1,
         customData: { color: [0.375, 0.375, 0.375] },
      },
      {
         b: 196.75,
         d: 0.125,
         w: 1,
         h: 2,
         x: 5,
         y: 1,
         customData: { color: [0.375, 0.375, 0.375] },
      },
      {
         b: 196.5,
         d: 1.5,
         w: 1,
         h: 4,
         x: 6,
         y: 0,
         customData: { color: [0.625, 0.625, 0.625] },
      },
   );
   tempWall = tempWall.concat(tempWall.map((w) => w.clone().mirror()));
   data.obstacles.push(...tempWall);

   tempWall = v3.Obstacle.create(
      {
         b: 245.5,
         d: 0.1875,
         w: 1,
         h: 2,
         x: 5,
         y: 0,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 245.75,
         d: 0.1875,
         w: 1,
         h: 3,
         x: 4,
         y: 1,
         customData: { color: [0.3125, 0.3125, 0.3125] },
      },
      {
         b: 246,
         d: 0.25,
         w: 1,
         h: 5,
         x: 3,
         y: 0,
         customData: { color: [0.75, 0.75, 0.75] },
      },
      {
         b: 246.25,
         d: 1.75,
         w: 1,
         h: 2,
         x: 4,
         y: 2,
         customData: { color: [0.375, 0.375, 0.375] },
      },
   );
   tempWall = tempWall.concat(tempWall.map((w) => w.clone().mirror()));
   data.obstacles.push(...tempWall);

   tempWall = v3.Obstacle.create(
      {
         b: 258,
         d: 0.875,
         x: 3,
         y: 0,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 259,
         d: 0.375,
         x: 5,
         y: 0,
         customData: { color: [0.3125, 0.3125, 0.3125] },
      },
      {
         b: 259.5,
         d: 0.375,
         x: 4,
         y: 0,
         customData: { color: [0.375, 0.375, 0.375] },
      },
      {
         b: 260,
         d: 0.375,
         x: 7,
         y: 0,
         customData: { color: [0.4375, 0.4375, 0.4375] },
      },
      {
         b: 260.5,
         d: 0.375,
         x: 6,
         y: 0,
         customData: { color: [0.5, 0.5, 0.5] },
      },
      {
         b: 261,
         d: 0.375,
         x: 9,
         y: 0,
         customData: { color: [0.5625, 0.5625, 0.5625] },
      },
      {
         b: 261.5,
         d: 0.375,
         x: 7,
         y: 0,
         customData: { color: [0.5625, 0.5625, 0.5625] },
      },
   );
   tempWall = tempWall.concat(tempWall.map((w) => w.clone().mirror()));
   data.obstacles.push(...tempWall);

   tempWall = v3.Obstacle.create(
      {
         b: 261.5,
         d: 0.25,
         w: 1,
         h: 3,
         x: 5,
         y: 1,
         customData: { track: 'preJourneyWall1', color: [0.25, 0.25, 0.25] },
      },
      {
         b: 261.75,
         d: 0.25,
         w: 1,
         h: 5,
         x: 4,
         y: 0,
         customData: { track: 'preJourneyWall2', color: [0.25, 0.25, 0.25] },
      },
      {
         b: 262,
         d: 0.09375,
         w: 2,
         h: 1,
         x: 6,
         y: 1,
         customData: { track: 'journeyWall' },
      },
      {
         b: 262.125,
         d: 0.09375,
         w: 2,
         h: 1,
         x: 6,
         y: 1,
         customData: { track: 'journeyWall' },
      },
      {
         b: 262.25,
         d: 0.1875,
         w: 2,
         h: 1,
         x: 6,
         y: 1,
         customData: { track: 'journeyWall' },
      },
      {
         b: 262.5,
         d: 1,
         w: 2,
         h: 1,
         x: 6,
         y: 1,
         customData: { track: 'journeyWall' },
      },
      {
         b: 263.5,
         d: 0.1875,
         w: 2,
         h: 1,
         x: 6,
         y: 1,
         customData: { track: 'journeyWall' },
      },
      {
         b: 263.75,
         d: 0.09375,
         w: 2,
         h: 1,
         x: 6,
         y: 1,
         customData: { track: 'journeyWall' },
      },
      {
         b: 263.875,
         d: 0.09375,
         w: 2,
         h: 1,
         x: 6,
         y: 1,
         customData: { track: 'journeyWall' },
      },
   );
   tempWall = tempWall.concat(tempWall.map((w) => w.clone().mirror()));
   data.obstacles.push(...tempWall);
   data.customData.customEvents?.push(
      {
         b: 259.75,
         t: 'AnimateTrack',
         d: {
            track: 'preJourneyWall1',
            duration: 2,
            color: [
               [0.25, 0.25, 0.25, 1, 0],
               [0, 0, 0, 1, 0.249, 'easeOutQuad'],
               [0.5, 0.5, 0.5, 1, 0.25],
               [0.125, 0.125, 0.125, 1, 0.49, 'easeOutQuad'],
               [0.75, 0.75, 0.75, 1, 0.5],
               [0.25, 0.25, 0.25, 1, 0.749, 'easeOutQuad'],
               [1, 1, 1, 1, 0.75],
               [0.375, 0.375, 0.375, 1, 0.999, 'easeOutQuad'],
               [0.5, 0.5, 0.5, 1, 1],
            ],
         },
      },
      {
         b: 260,
         t: 'AnimateTrack',
         d: {
            track: 'preJourneyWall2',
            duration: 2,
            color: [
               [0.25, 0.25, 0.25, 1, 0],
               [0, 0, 0, 1, 0.249, 'easeOutQuad'],
               [0.5, 0.5, 0.5, 1, 0.25],
               [0.125, 0.125, 0.125, 1, 0.49, 'easeOutQuad'],
               [0.75, 0.75, 0.75, 1, 0.5],
               [0.25, 0.25, 0.25, 1, 0.749, 'easeOutQuad'],
               [1, 1, 1, 1, 0.75],
               [0.375, 0.375, 0.375, 1, 0.999, 'easeOutQuad'],
               [0.5, 0.5, 0.5, 1, 1],
            ],
         },
      },
      {
         b: 262,
         t: 'AnimateTrack',
         d: {
            track: 'journeyWall',
            duration: 4,
            color: [
               [2, 2, 2, 1, 0],
               [1, 1, 1, 1, 0.5, 'easeOutQuad'],
               [0.312, 0.625, 0.719, 1, 1],
            ],
         },
      },
   );

   tempWall = v3.Obstacle.create(
      {
         b: 270.25,
         d: 0.09375,
         w: 1,
         h: 2,
         x: 2,
         y: 2,
         customData: { color: [1, 1, 1] },
      },
      {
         b: 270.375,
         d: 0.09375,
         w: 1,
         h: 2,
         x: 2,
         y: 2,
         customData: { color: [0.75, 0.75, 0.75] },
      },
      {
         b: 270.5,
         d: 0.1875,
         w: 1,
         h: 2,
         x: 2,
         y: 2,
         customData: { color: [0.5, 0.5, 0.5] },
      },
      {
         b: 270.75,
         d: 0.5,
         w: 1,
         h: 2,
         x: 2,
         y: 2,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 270.5,
         d: 1.5,
         w: 2,
         h: 1,
         x: 5,
         y: 0,
         customData: { color: [1, 1, 1] },
      },
      {
         b: 270.625,
         d: 0.09375,
         w: 2,
         h: 1,
         x: 5,
         y: 0,
         customData: { color: [0.75, 0.75, 0.75] },
      },
      {
         b: 270.75,
         d: 0.09375,
         w: 2,
         h: 1,
         x: 5,
         y: 0,
         customData: { color: [0.5, 0.5, 0.5] },
      },
      {
         b: 271,
         d: 0.1875,
         w: 2,
         h: 1,
         x: 5,
         y: 0,
         customData: { color: [0.375, 0.375, 0.375] },
      },
      {
         b: 271.25,
         d: 1,
         w: 2,
         h: 1,
         x: 5,
         y: 0,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 270.75,
         d: 0.1875,
         w: 1,
         h: 2,
         x: 3,
         y: 1,
         customData: { color: [0.5, 0.5, 0.5] },
      },
      {
         b: 271,
         d: 2,
         w: 1,
         h: 2,
         x: 3,
         y: 1,
         customData: { color: [0.25, 0.25, 0.25] },
      },
   );
   data.obstacles.push(
      ...tempWall,
      ...tempWall.map((w) =>
         w
            .clone()
            .mirror()
            .setTime(w.time + 4)
      ),
      ...tempWall.map((w) => w.clone().setTime(w.time + 16)),
      ...tempWall.map((w) =>
         w
            .clone()
            .mirror()
            .setTime(w.time + 20)
      ),
   );

   tempWall = v3.Obstacle.create(
      {
         b: 277.75,
         d: 0.25,
         x: 5,
         y: 1,
         h: 3,
         customData: { color: [1.25, 1.25, 1.25] },
      },
      {
         b: 278,
         d: 0.09375,
         x: 4,
         y: 2,
         customData: { color: [1, 1, 1] },
      },
      {
         b: 278.125,
         d: 0.09375,
         x: 4,
         y: 2,
         customData: { color: [1, 1, 1] },
      },
      {
         b: 278.25,
         d: 0.09375,
         x: 4,
         y: 2,
         customData: { color: [0.75, 0.75, 0.75] },
      },
      {
         b: 278.375,
         d: 0.09375,
         x: 4,
         y: 2,
         customData: { color: [0.5, 0.5, 0.5] },
      },
      {
         b: 278.5,
         d: 0.375,
         x: 4,
         y: 2,
         customData: { color: [0.375, 0.375, 0.375] },
      },
      {
         b: 279,
         d: 1.5,
         x: 4,
         y: 2,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 278.25,
         d: 1.5,
         w: 1,
         h: 3,
         x: 6,
         y: 1,
         customData: { color: [0.375, 0.375, 0.375] },
      },
      {
         b: 279.8125,
         d: 0.25,
         w: 1,
         h: 2,
         x: 6,
         y: 2,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 280.125,
         d: 0.125,
         w: 1,
         h: 2,
         x: 6,
         y: 0,
         customData: { color: [0.25, 0.25, 0.25] },
      },
      {
         b: 280.3125,
         d: 0.125,
         x: 6,
         y: 1,
         customData: { color: [0.125, 0.125, 0.125] },
      },
   );
   tempWall = tempWall.concat(tempWall.map((w) => w.clone().mirror()));
   data.obstacles.push(...tempWall);

   tempWall = v3.Obstacle.create(
      {
         b: 317.25,
         d: 0.125,
         w: 1,
         h: 3,
         x: 3,
         y: 1,
         customData: { color: [1, 1, 1] },
      },
      {
         b: 317.5,
         d: 0.125,
         w: 1,
         h: 3,
         x: 3,
         y: 0,
         customData: { color: [1, 1, 1] },
      },
      {
         b: 317.75,
         d: 0.125,
         w: 1,
         h: 3,
         x: 3,
         y: 2,
         customData: { color: [1, 1, 1] },
      },
      {
         b: 317.375,
         d: 0.0625,
         w: 1,
         h: 3,
         x: 5,
         y: 1,
         customData: { color: [0.75, 0.75, 0.75] },
      },
      {
         b: 317.625,
         d: 0.0625,
         w: 1,
         h: 3,
         x: 5,
         y: 2,
         customData: { color: [0.75, 0.75, 0.75] },
      },
      {
         b: 317.875,
         d: 0.0625,
         w: 1,
         h: 3,
         x: 5,
         y: 0,
         customData: { color: [0.75, 0.75, 0.75] },
      },
      {
         b: 318,
         d: 7.5,
         w: 1,
         h: 2,
         x: 4,
         y: 1,
         customData: { color: [0.5, 0.5, 0.5] },
      },
      {
         b: 318.5,
         d: 7.5,
         x: 9,
         y: 0,
         customData: { color: [0.125, 0.125, 0.125] },
      },
      {
         b: 325.5,
         d: 0.5,
         x: 4,
         y: 0,
         h: 5,
         customData: { color: [0.5, 0.5, 0.5] },
      },
   );
   tempWall = tempWall.concat(tempWall.map((w) => w.clone().mirror()));
   data.obstacles.push(...tempWall);

   tempWall = v3.Obstacle.create(
      {
         b: 834.5,
         d: 0.1875,
         x: -5,
         y: 0,
         customData: {
            color: utils.colorFrom([0, 1, 1], 'hsva'),
         },
      },
      {
         b: 835,
         d: 0.1875,
         x: -4,
         y: 1,
         customData: {
            color: utils.colorFrom([30, 1, 1], 'hsva'),
         },
      },
      {
         b: 835.5,
         d: 0.1875,
         x: -3,
         y: 2,
         customData: {
            color: utils.colorFrom([90, 1, 1], 'hsva'),
         },
      },
      {
         b: 834.75,
         d: 0.1875,
         x: -3,
         y: 0,
         customData: {
            color: utils.colorFrom([60, 1, 1], 'hsva'),
         },
      },
      {
         b: 835.25,
         d: 0.1875,
         x: -2,
         y: 1,
         customData: {
            color: utils.colorFrom([120, 1, 1], 'hsva'),
         },
      },
      {
         b: 835.75,
         d: 0.1875,
         x: -1,
         y: 2,
         customData: {
            color: utils.colorFrom([120, 1, 1], 'hsva'),
         },
      },
      {
         b: 835.75,
         d: 0.1875,
         x: 4,
         y: 2,
         customData: {
            color: utils.colorFrom([180, 1, 1], 'hsva'),
         },
      },
      {
         b: 835.25,
         d: 0.1875,
         x: 5,
         y: 1,
         customData: {
            color: utils.colorFrom([210, 1, 1], 'hsva'),
         },
      },
      {
         b: 834.75,
         d: 0.1875,
         x: 6,
         y: 0,
         customData: {
            color: utils.colorFrom([270, 1, 1], 'hsva'),
         },
      },
      {
         b: 835.5,
         d: 0.1875,
         x: 6,
         y: 2,
         customData: {
            color: utils.colorFrom([240, 1, 1], 'hsva'),
         },
      },
      {
         b: 835,
         d: 0.1875,
         x: 7,
         y: 1,
         customData: {
            color: utils.colorFrom([300, 1, 1], 'hsva'),
         },
      },
      {
         b: 834.5,
         d: 0.1875,
         x: 8,
         y: 0,
         customData: {
            color: utils.colorFrom([330, 1, 1], 'hsva'),
         },
      },
   );
   data.obstacles.push(
      ...tempWall.map((w) =>
         w.setTime(utils.lerp(utils.normalize(w.time, 834.5, 835.75), 835, 836))
      ),
   );

   tempWall = v3.Obstacle.create(
      {
         b: 836.75,
         d: 0.125,
         w: 1,
         h: 3,
         x: 7,
         y: 1,
         customData: { color: [1, 1, 1] },
      },
      {
         b: 837,
         d: 0.125,
         w: 1,
         h: 5,
         x: 6,
         y: 0,
         customData: { color: [1, 1, 1] },
      },
      {
         b: 837.25,
         d: 0.125,
         w: 1,
         h: 3,
         x: 3,
         y: 1,
         customData: { color: [1, 1, 1] },
      },
      {
         b: 837.5,
         d: 0.125,
         w: 1,
         h: 3,
         x: 3,
         y: 0,
         customData: { color: [1, 1, 1] },
      },
      {
         b: 837.75,
         d: 0.125,
         w: 1,
         h: 3,
         x: 3,
         y: 2,
         customData: { color: [1, 1, 1] },
      },
      {
         b: 837.375,
         d: 0.0625,
         w: 1,
         h: 3,
         x: 5,
         y: 1,
         customData: { color: [0.75, 0.75, 0.75] },
      },
      {
         b: 837.625,
         d: 0.0625,
         w: 1,
         h: 3,
         x: 5,
         y: 2,
         customData: { color: [0.75, 0.75, 0.75] },
      },
      {
         b: 837.875,
         d: 0.0625,
         w: 1,
         h: 3,
         x: 5,
         y: 0,
         customData: { color: [0.75, 0.75, 0.75] },
      },
   );
   tempWall = tempWall.concat(tempWall.map((w) => w.clone().mirror()));
   data.obstacles.push(...tempWall);

   const wallTime: [number, boolean][] = [
      [471, true],
      [503, false],
      [663, false],
      [695, true],
      [790, true],
      [919, true],
      [951, false],
      [983, true],
   ];
   for (const wt of wallTime) {
      tempWall = v3.Obstacle.create(
         {
            b: wt[0],
            d: 0.25,
            x: 4,
            y: 0,
            w: 1,
            h: 5,
            customData: { color: [0.625, 0.625, 0.625] },
         },
         {
            b: wt[0] - 0.25,
            d: 0.25,
            x: 5,
            y: 1,
            w: 1,
            h: 3,
            customData: { color: [0.25, 0.25, 0.25] },
         },
      );
      tempWall = tempWall.concat(
         tempWall.map((w) =>
            w
               .clone()
               .mirror()
               .setTime(w.time + 2)
         ),
         tempWall.map((w) => w.clone().setTime(w.time + 4)),
         tempWall.map((w) =>
            w
               .clone()
               .mirror()
               .setTime(w.time + 6)
         ),
      );
      if (wt[1]) {
         tempWall.forEach((w) => w.mirror());
      }
      data.obstacles.push(...tempWall);
      data.obstacles.forEach((w) => {
         if (!w.customData.color) w.customData.color = [0.312, 0.625, 0.719, 1];
      });
   }
}
