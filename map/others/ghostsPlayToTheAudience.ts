import {
   ext,
   globals,
   Obstacle,
   readDifficultyFileSync,
   shuffle,
   types,
   v3,
   writeDifficultyFileSync,
} from '@bsmap';

globals.directory =
   'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/GhostsPlayToTheAudience';

const { where, at, between } = ext.selector;

const lightshow = readDifficultyFileSync('Expert.dat', 3);
const osExpertP = readDifficultyFileSync('HardOneSaber.dat', 3);
osExpertP.filename = 'ExpertPlusOneSaber.dat';
const osExpert = readDifficultyFileSync('NormalOneSaber.dat', 3);
osExpert.filename = 'ExpertOneSaber.dat';

const pointDefinitions: types.v3.IPointDefinition = {
   ghostPoint: [
      [0.875, 0.875, 0.875, 1, 0],
      [0.3125, 0.3125, 0.3125, 1, 0.25],
      [0.875, 0.875, 0.875, 1, 0.5],
      [0.3125, 0.3125, 0.3125, 1, 0.75],
      [0.875, 0.875, 0.875, 1, 1],
   ],
   ghostPointR: [
      [0.3125, 0.3125, 0.3125, 1, 0],
      [0.875, 0.875, 0.875, 1, 0.25],
      [0.3125, 0.3125, 0.3125, 1, 0.5],
      [0.875, 0.875, 0.875, 1, 0.75],
      [0.3125, 0.3125, 0.3125, 1, 1],
   ],
};
const customEvents: types.v3.ICustomEvent[] = [
   {
      b: 0,
      t: 'AnimateTrack',
      d: {
         duration: 0,
         track: 'ghostTrack',
         color: [[0.875, 0.875, 0.875, 1, 0]],
      },
   },
   {
      b: 0,
      t: 'AnimateTrack',
      d: {
         duration: 0,
         track: 'ghostTrackR',
         color: [[0.3125, 0.3125, 0.3125, 1, 0]],
      },
   },
];

osExpertP.lightshow.basicEvents = lightshow.lightshow.basicEvents;
osExpertP.lightshow.colorBoostEvents = lightshow.lightshow.colorBoostEvents;
osExpertP.difficulty.customData.environment = lightshow.difficulty.customData.environment;
osExpertP.difficulty.customData.pointDefinitions = pointDefinitions;
osExpertP.difficulty.customData.customEvents = customEvents;

osExpert.lightshow.basicEvents = lightshow.lightshow.basicEvents;
osExpert.lightshow.colorBoostEvents = lightshow.lightshow.colorBoostEvents;
osExpert.difficulty.customData.environment = lightshow.difficulty.customData.environment;
osExpert.difficulty.customData.pointDefinitions = pointDefinitions;
osExpert.difficulty.customData.customEvents = customEvents;

const introTime = [20, 180, 504];
const chorusTime = [116, 276];
const chorus2Time = [148, 308, 440];

let flipFlop = false;
for (const it of introTime) {
   const booTime = [
      [6, 7.5],
      [14, 15.5],
      [22, 23.5],
      [28, 31.75],
   ];
   let i = 0;
   for (const bt of booTime) {
      between(osExpertP.difficulty.colorNotes, it + bt[0], it + bt[1]).forEach(
         (n) => (n.customData.track = 'ghostTrack'),
      );
      between(osExpert.difficulty.colorNotes, it + bt[0], it + bt[1]).forEach(
         (n) => (n.customData.track = 'ghostTrack'),
      );
      const walls = i % 2
         ? Obstacle.create(
            { time: it + bt[0], duration: 0.125, posX: 3, posY: 0 },
            { time: it + bt[0] + 0.25, duration: 0.125, posX: 4, posY: 2 },
            {
               time: it + bt[0] + 0.5,
               duration: 0.125,
               posX: 5,
               posY: 1,
               width: 2,
            },
            { time: it + bt[0] + 1, duration: 0.125, posX: 0, posY: 0 },
            {
               time: it + bt[0] + 1.25,
               duration: 0.125,
               posX: -1,
               posY: 2,
            },
            {
               time: it + bt[0] + 1.5,
               duration: 0.125,
               posX: -3,
               posY: 1,
               width: 2,
            },
         )
         : Obstacle.create(
            { time: it + bt[0], duration: 0.125, posX: 2, posY: 2 },
            { time: it + bt[0] + 0.25, duration: 0.125, posX: 3, posY: 0 },
            {
               time: it + bt[0] + 0.5,
               duration: 0.125,
               posX: 4,
               posY: 1,
               width: 2,
            },
         );
      if (!(i % 2)) {
         walls.push(
            ...walls.map((w) =>
               w
                  .clone()
                  .setTime(w.time + 1)
                  .setPosX(w.posX + 1)
            ),
         );
      }
      if (i === 2) {
         walls.forEach((w) => w.mirror());
      }
      if (i === 3) {
         let temp = Obstacle.create(
            { time: it + bt[0] + 2, duration: 1, posX: 5, posY: 1, width: 2 },
            { time: it + bt[0] + 3, duration: 1, posX: 4, posY: 0 },
            { time: it + bt[0] + 3, duration: 1, posX: 4, posY: 2 },
         );
         temp = temp.concat(temp.map((t) => t.clone().mirror()));
         walls.push(...temp);
      }
      walls.forEach(
         (w) => (w.customData = {
            track: 'ghostTrackR',
            color: [0.3125, 0.3125, 0.3125],
         }),
      );
      osExpertP.difficulty.obstacles.push(...walls);
      osExpert.difficulty.obstacles.push(...walls);
      customEvents.push(
         {
            b: it + bt[0],
            t: 'AnimateTrack',
            d: { duration: 2, track: 'ghostTrack', color: 'ghostPoint' },
         },
         {
            b: it + bt[0],
            t: 'AnimateTrack',
            d: { duration: 2, track: 'ghostTrackR', color: 'ghostPointR' },
         },
      );
      i++;
   }
   customEvents.push(
      {
         b: it + 30,
         t: 'AnimateTrack',
         d: {
            duration: 2,
            track: 'ghostTrack',
            color: [
               [0.875, 0.875, 0.875, 1, 0],
               [0.3125, 0.3125, 0.3125, 1, 0.125],
               [0.875, 0.875, 0.875, 1, 0.25],
               [0.3125, 0.3125, 0.3125, 1, 0.375],
               [0.875, 0.875, 0.875, 1, 0.5],
               [1, 0, 0, 1, 0.875],
               [0.875, 0.875, 0.875, 1, 1, 'easeStep'],
            ],
         },
      },
      {
         b: it + 30,
         t: 'AnimateTrack',
         d: {
            duration: 2,
            track: 'ghostTrackR',
            color: [
               [0.3125, 0.3125, 0.3125, 1, 0],
               [0.875, 0.875, 0.875, 1, 0.125],
               [0.3125, 0.3125, 0.3125, 1, 0.25],
               [0.875, 0.875, 0.875, 1, 0.375],
               [0.3125, 0.3125, 0.3125, 1, 0.5],
               [1, 0, 0, 1, 0.875],
               [0.3125, 0.3125, 0.3125, 1, 1, 'easeStep'],
            ],
         },
      },
   );
   osExpertP.difficulty.arcs.push(
      ...[
         {
            b: it + 6,
            tb: it + 6.5,
            c: 1,
            d: 6,
            tc: 3,
            x: 0,
            y: 0,
            tx: 0,
            ty: 2,
            m: 0,
         },
         {
            b: it + 7,
            tb: it + 7.5,
            c: 1,
            d: 6,
            tc: 3,
            x: 0,
            y: 0,
            tx: 0,
            ty: 2,
            m: 0,
         },
         {
            b: it + 14,
            tb: it + 14.5,
            c: 1,
            d: 2,
            tc: 4,
            x: 2,
            y: 0,
            tx: 3,
            ty: 2,
         },
         {
            b: it + 15,
            tb: it + 15.5,
            c: 1,
            d: 3,
            tc: 5,
            x: 1,
            y: 0,
            tx: 0,
            ty: 2,
            m: 0,
         },
         {
            b: it + 22,
            tb: it + 22.5,
            c: 1,
            d: 7,
            tc: 2,
            x: 3,
            y: 0,
            tx: 3,
            ty: 2,
            m: 0,
         },
         {
            b: it + 23,
            tb: it + 23.5,
            c: 1,
            d: 7,
            tc: 2,
            x: 3,
            y: 0,
            tx: 3,
            ty: 2,
            m: 0,
         },
         {
            b: it + 28,
            tb: it + 28.5,
            c: 1,
            d: 5,
            tc: 6,
            x: 3,
            y: 2,
            tx: 0,
            ty: flipFlop ? 0 : 1,
            m: 0,
         },
         {
            b: it + 29,
            tb: it + 29.5,
            c: 1,
            d: 4,
            tc: 7,
            x: 0,
            y: 2,
            tx: 3,
            ty: flipFlop ? 0 : 1,
            m: 0,
         },
      ].map((x) => v3.arc.deserialize(x as types.v3.IArc)),
   );
   osExpert.difficulty.arcs.push(
      ...[
         {
            b: it + 6,
            tb: it + 6.5,
            c: 1,
            d: 6,
            tc: 3,
            x: 0,
            y: 0,
            tx: 0,
            ty: 2,
            m: 0,
         },
         {
            b: it + 7,
            tb: it + 7.5,
            c: 1,
            d: 6,
            tc: 3,
            x: 0,
            y: 0,
            tx: 0,
            ty: 2,
            m: 0,
         },
         {
            b: it + 14,
            tb: it + 14.5,
            c: 1,
            d: 2,
            tc: 4,
            x: 2,
            y: 0,
            tx: 3,
            ty: 2,
            m: 0,
         },
         {
            b: it + 15,
            tb: it + 15.5,
            c: 1,
            d: 3,
            tc: 5,
            x: 1,
            y: 0,
            tx: 0,
            ty: 2,
            m: 0,
         },
         {
            b: it + 22,
            tb: it + 22.5,
            c: 1,
            d: 7,
            tc: 2,
            x: 3,
            y: 0,
            tx: 3,
            ty: 2,
            m: 0,
         },
         {
            b: it + 23,
            tb: it + 23.5,
            c: 1,
            d: 7,
            tc: 2,
            x: 3,
            y: 0,
            tx: 3,
            ty: 2,
            m: 0,
         },
         {
            b: it + 28,
            tb: it + 28.5,
            c: 1,
            d: 5,
            tc: 6,
            x: 3,
            y: 2,
            tx: 0,
            ty: flipFlop ? 0 : 1,
            m: 0,
         },
         {
            b: it + 29,
            tb: it + 29.5,
            c: 1,
            d: 4,
            tc: 7,
            x: 0,
            y: 2,
            tx: 3,
            ty: flipFlop ? 0 : 1,
            m: 0,
         },
      ].map((x) => v3.arc.deserialize(x as types.v3.IArc)),
   );
   flipFlop = !flipFlop;
}
for (const ct of chorusTime) {
   let walls = Obstacle.create(
      ...[
         {
            b: ct - 1,
            d: 0.5,
            x: 6,
            y: 2,
            w: 3,
            h: 1,
            customData: { color: [0.25, 0.25, 0.25, 1] as types.ColorArray },
         },
         {
            b: ct - 0.5,
            d: 0.25,
            x: 5,
            y: 1,
            w: 1,
            h: 3,
            customData: { color: [0.5, 0.5, 0.5, 1] as types.ColorArray },
         },
         {
            b: ct - 0.25,
            d: 0.25,
            x: 4,
            y: 0,
            w: 1,
            h: 5,
            customData: { color: [1, 1, 1, 1] as types.ColorArray },
         },
      ].map((x) => v3.obstacle.deserialize(x)),
   );
   walls = walls.concat(walls.concat(walls.map((w) => w.clone().mirror())));
   const arr = [0, 1, 2, 3];
   shuffle(arr);
   for (let i = 0; i < 3; i++) {
      for (const a in arr) {
         walls.push(
            Obstacle.create({
               time: ct - 4 + i + parseInt(a) * 0.25,
               duration: 0.25,
               posX: arr[a],
               posY: 0,
               customData: { color: [0, 0, 0, 1] },
            })[0],
         );
      }
      shuffle(arr);
   }
   osExpertP.difficulty.obstacles.push(...walls);
   osExpert.difficulty.obstacles.push(...walls);
}

for (const _ of chorus2Time) {
   flipFlop = !flipFlop;
}
for (let i = 0; i < 6; i++) {
   // setGradientColor(between(notes, 472 + i * 4, 474 + i * 4), [315, 1, 0.875], [360, 1, 1]);
   flipFlop = !flipFlop;
}

{
   const walls = [
      {
         b: 404,
         d: 4,
         x: 0,
         y: 0,
         customData: { color: [0, 0, 0, 1] as types.ColorArray },
      },
      {
         b: 408,
         d: 4,
         x: 1,
         y: 0,
         customData: { color: [0, 0, 0, 1] as types.ColorArray },
      },
      {
         b: 412,
         d: 4,
         x: 3,
         y: 0,
         customData: { color: [0, 0, 0, 1] as types.ColorArray },
      },
      {
         b: 416,
         d: 4,
         x: 2,
         y: 0,
         customData: { color: [0, 0, 0, 1] as types.ColorArray },
      },
      {
         b: 420,
         d: 4,
         x: 0,
         y: 0,
         customData: { color: [0, 0, 0, 1] as types.ColorArray },
      },
      {
         b: 424,
         d: 4,
         x: 1,
         y: 0,
         customData: { color: [0, 0, 0, 1] as types.ColorArray },
      },
      {
         b: 428,
         d: 4,
         x: 3,
         y: 0,
         customData: { color: [0, 0, 0, 1] as types.ColorArray },
      },
   ]
      .map((x) => v3.obstacle.deserialize(x))
      .map(Obstacle.createOne);
   osExpertP.difficulty.obstacles.push(...walls);
   osExpert.difficulty.obstacles.push(...walls);
}

osExpertP.difficulty.chains.push(
   ...[
      { b: 11.5, tb: 11.625, c: 1, d: 5, tx: 1, ty: 2, s: 0.75, sc: 4 },
      { b: 17.5, tb: 17.625, c: 1, d: 7, x: 2, y: 1, tx: 3, sc: 4 },
      { b: 543.5, tb: 543.625, c: 1, d: 6, x: 3, y: 2, tx: 2, s: 0.75, sc: 4 },
      { b: 549.5, tb: 549.625, c: 1, d: 5, x: 2, tx: 3, ty: 1, sc: 4 },
   ].map((x) => v3.chain.deserialize(x as types.v3.IChain)),
);
osExpertP.difficulty.arcs.push(
   ...[
      { b: 179, tb: 180, c: 1, d: 2, tc: 2, x: 1, tx: 1, m: 1 },
      { b: 339, tb: 340, c: 1, d: 2, tc: 3, y: 1, tx: 1, ty: 1 },
      { b: 500, tb: 502, c: 1, d: 2, tc: 2, x: 1, y: 1, tx: 1, ty: 2, m: 2 },
   ].map((x) => v3.arc.deserialize(x as types.v3.IArc)),
);
osExpert.difficulty.chains.push(
   ...[
      { b: 11.5, tb: 11.625, c: 1, d: 5, tx: 1, ty: 2, s: 0.75, sc: 4 },
      { b: 17.5, tb: 17.625, c: 1, d: 7, x: 2, y: 1, tx: 3, sc: 4 },
      { b: 543.5, tb: 543.625, c: 1, d: 6, x: 3, y: 2, tx: 2, s: 0.75, sc: 4 },
      { b: 549.5, tb: 549.625, c: 1, d: 5, x: 2, tx: 3, ty: 1, sc: 4 },
   ].map((x) => v3.chain.deserialize(x as types.v3.IChain)),
);
osExpert.difficulty.arcs.push(
   ...[
      { b: 179, tb: 180, c: 1, d: 2, tc: 2, x: 1, tx: 1, m: 1 },
      { b: 339, tb: 340, c: 1, d: 2, tc: 3, y: 1, tx: 1, ty: 1 },
      { b: 500, tb: 502, c: 1, d: 2, tc: 2, x: 1, y: 1, tx: 1, ty: 2, m: 2 },
   ].map((x) => v3.arc.deserialize(x as types.v3.IArc)),
);

const sliderApplyColor = (
   s: types.wrapper.IWrapArc | types.wrapper.IWrapChain,
) => {
   const note = osExpert.difficulty.colorNotes.filter(
      (n) => n.time === s.time && n.posX === s.posX && n.posY === s.posY,
   );
   if (note.length > 1) {
      throw new Error('too many result');
   }
   if (note.length !== 1) {
      throw new Error(`no notes found at ${s.time}`);
   }
   const n = note[0];
   s.customData.color = n.customData.color;
};

let done = false;
where(at(osExpert.difficulty.colorNotes, 551), { include: { posX: 0 } })
   .concat(
      where(at(osExpertP.difficulty.colorNotes, 551), { include: { posX: 0 } }),
   )
   .forEach((n) => {
      n.customData.track = 'baaaaaaaaa0';
      if (!done) {
         customEvents.push({
            b: n.time - 1.25,
            t: 'AnimateTrack',
            d: {
               track: 'baaaaaaaaa0',
               duration: 0.5,
               color: [
                  [
                     n.customData.color?.[0] ?? 1,
                     n.customData.color?.[1] ?? 1,
                     n.customData.color?.[2] ?? 1,
                     1,
                     0,
                  ],
                  [0.3125, 0.3125, 0.3125, 1, 0.5],
                  [
                     n.customData.color?.[0] ?? 1,
                     n.customData.color?.[1] ?? 1,
                     n.customData.color?.[2] ?? 1,
                     1,
                     1,
                  ],
               ],
            },
         });
      }
      done = true;
   });
done = false;
where(at(osExpert.difficulty.colorNotes, 551), { include: { posX: 1 } })
   .concat(
      where(at(osExpertP.difficulty.colorNotes, 551), { include: { posX: 1 } }),
   )
   .forEach((n) => {
      n.customData.track = 'baaaaaaaaa1';
      if (!done) {
         customEvents.push({
            b: n.time - 1.125,
            t: 'AnimateTrack',
            d: {
               track: 'baaaaaaaaa1',
               duration: 0.5,
               color: [
                  [
                     n.customData.color?.[0] ?? 1,
                     n.customData.color?.[1] ?? 1,
                     n.customData.color?.[2] ?? 1,
                     1,
                     0,
                  ],
                  [0.3125, 0.3125, 0.3125, 1, 0.5],
                  [
                     n.customData.color?.[0] ?? 1,
                     n.customData.color?.[1] ?? 1,
                     n.customData.color?.[2] ?? 1,
                     1,
                     1,
                  ],
               ],
            },
         });
      }
      done = true;
   });
done = false;
where(at(osExpert.difficulty.colorNotes, 551), { include: { posX: 2 } })
   .concat(
      where(at(osExpertP.difficulty.colorNotes, 551), { include: { posX: 2 } }),
   )
   .forEach((n) => {
      n.customData.track = 'baaaaaaaaa2';
      if (!done) {
         customEvents.push({
            b: n.time - 1,
            t: 'AnimateTrack',
            d: {
               track: 'baaaaaaaaa2',
               duration: 0.5,
               color: [
                  [
                     n.customData.color?.[0] ?? 1,
                     n.customData.color?.[1] ?? 1,
                     n.customData.color?.[2] ?? 1,
                     1,
                     0,
                  ],
                  [0.3125, 0.3125, 0.3125, 1, 0.5],
                  [
                     n.customData.color?.[0] ?? 1,
                     n.customData.color?.[1] ?? 1,
                     n.customData.color?.[2] ?? 1,
                     1,
                     1,
                  ],
               ],
            },
         });
      }
      done = true;
   });
done = false;
where(at(osExpert.difficulty.colorNotes, 551), { include: { posX: 3 } })
   .concat(
      where(at(osExpertP.difficulty.colorNotes, 551), { include: { posX: 3 } }),
   )
   .forEach((n) => {
      n.customData.track = 'baaaaaaaaa3';
      if (!done) {
         customEvents.push({
            b: n.time - 0.875,
            t: 'AnimateTrack',
            d: {
               track: 'baaaaaaaaa3',
               duration: 0.5,
               color: [
                  [
                     n.customData.color?.[0] ?? 1,
                     n.customData.color?.[1] ?? 1,
                     n.customData.color?.[2] ?? 1,
                     1,
                     0,
                  ],
                  [0.3125, 0.3125, 0.3125, 1, 0.5],
                  [
                     n.customData.color?.[0] ?? 1,
                     n.customData.color?.[1] ?? 1,
                     n.customData.color?.[2] ?? 1,
                     1,
                     1,
                  ],
               ],
            },
         });
      }
      done = true;
   });

osExpert.difficulty.arcs.forEach(sliderApplyColor);
osExpert.difficulty.chains.forEach(sliderApplyColor);
osExpertP.difficulty.arcs.forEach(sliderApplyColor);
osExpertP.difficulty.chains.forEach(sliderApplyColor);

writeDifficultyFileSync(osExpertP);
writeDifficultyFileSync(osExpert);
