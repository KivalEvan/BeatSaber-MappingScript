import {
   colorFrom,
   ColorNote,
   deepCopy,
   ext,
   globals,
   lerpColor,
   NoteDirectionAngle,
   productAry,
   random,
   range,
   readDifficultyFileSync,
   readInfoFileSync,
   remap,
   types,
   v3,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '../../depsLocal.ts';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import copyToCustomColor from '../../utility/copyToCustomColor.ts';
const { between, at } = ext.selector;

globals.directory = beatmapWipPath('Girly Cupid');

const lightshow = readDifficultyFileSync('ExpertPlusLegacy.dat', 3);

function makeBlackWhite(n: types.wrapper.IWrapBaseNote) {
   if (n.color === 0) n.customData.color = colorFrom(0.25);
   if (n.color === 1) n.customData.color = colorFrom(0.5625);
}

function leaveTrail(d: types.wrapper.IWrapBeatmap, start: number, end: number) {
   between(d.colorNotes, start, end).forEach((n) => {
      let i = 0;
      for (const step of range(0.09, 0.25, 0.05)) {
         const json = v3.colorNote.serialize(n);
         json.b! += step;
         json.customData!.uninteractable = true;
         json.customData!.animation = {};
         json.customData!.animation.dissolveArrow = 'none';
         d.difficulty.customData.pointDefinitions!['trail' + i] ||= [
            [remap(step, 0.09, 0.24, 0.05, 0.01), 0],
         ];
         json.customData!.animation.dissolve = 'trail' + i;
         d.difficulty.customData.fakeColorNotes!.push(json);
         i++;
      }
   });
}

function drawNote(d: types.wrapper.IWrapBeatmap, start: number, end: number) {
   d.difficulty.customData.pointDefinitions!.drawNoteScale = [[3, 3, 0.1, 0]];
   d.difficulty.customData.pointDefinitions!.drawNoteDefPos = [
      [0, -2, 10, 0],
      [0, -9999, -9999, 0.5, 'easeStep'],
   ];
   between(d.colorNotes, start, end).forEach((n) => {
      const json = v3.colorNote.serialize(n);
      json.b! += 0.49;
      json.customData!.noteJumpMovementSpeed = 16;
      json.customData!.noteJumpStartBeatOffset = -1.5;
      json.customData!.uninteractable = true;
      json.customData!.coordinates = [-0.5, 0];
      json.customData!.animation = {};
      json.customData!.animation.dissolve = 'none';
      json.customData!.animation.scale = 'drawNoteScale';
      json.customData!.animation.definitePosition = 'drawNoteDefPos';
      d.difficulty.customData.fakeColorNotes!.push(json);
   });
}

function makeItAppear(n: types.wrapper.IWrapBaseNote) {
   n.customData.animation = {};
   n.customData.animation.dissolve = 'popIntoExistence';
}

function funstuff(d: types.wrapper.IWrapBeatmap) {
   const allthestuff = [...d.arcs, ...d.chains, ...d.colorNotes];
   allthestuff.forEach((n) => n.resetCustomData());
   d.difficulty.customData.fakeColorNotes = [];
   d.difficulty.customData.customEvents = [];
   d.difficulty.customData.pointDefinitions = {
      none: [[0, 0]],
      popIntoExistence: [
         [0, 0],
         [1, 0.2, 'easeOutQuad'],
      ],
   };
   allthestuff.forEach((n) => {
      if (n.color === 0) n.customData.color = [0.875, 0.125, 0.125];
      if (n.color === 1) n.customData.color = [0.375, 0.5625, 0.875];
   });

   at(allthestuff, 260).forEach(makeBlackWhite);
   between(allthestuff, 69, 93).forEach((n) => {
      if (n.direction !== 8) return;
      if (n.color === 0) n.customData.color = [0.5, 0.5, 0.5];
      if (n.color === 1) n.customData.color = [0.5, 0.5, 0.5];
   });
   between(allthestuff, 101, 164).forEach(makeBlackWhite);
   between(allthestuff, 101, 132).forEach(makeItAppear);
   between(allthestuff, 180.5, 182).forEach(makeBlackWhite);
   between(allthestuff, 196, 198 - 0.001).forEach(makeBlackWhite);
   between(allthestuff, 212, 214).forEach(makeBlackWhite);
   between(allthestuff, 228, 229 - 0.001).forEach(makeBlackWhite);

   between(allthestuff, 325, 388).forEach(makeBlackWhite);
   between(allthestuff, 325, 356).forEach(makeItAppear);
   between(allthestuff, 396, 397 - 0.001).forEach(makeBlackWhite);
   between(allthestuff, 404.5, 406).forEach(makeBlackWhite);
   between(allthestuff, 420, 422 - 0.001).forEach(makeBlackWhite);
   between(allthestuff, 436, 438).forEach(makeBlackWhite);
   between(allthestuff, 452, 453 - 0.001).forEach(makeBlackWhite);

   between(allthestuff, 389, 395.5).forEach((n) => {
      if (n.color === 0) n.customData.color = [1, 0.5, 0.125];
      if (n.color === 1) n.customData.color = [0.375, 0.125, 0.875];
   });

   leaveTrail(d, 101, 132.5);
   leaveTrail(d, 325, 356.5);
   drawNote(d, 449.5, 451.5);
   drawNote(d, 225.5, 227.5);
   d.difficulty.customData.pointDefinitions.slashPosition = [
      [0, 0, 4, 0],
      [0, 0, 4, 0.001, 'easeStep'],
      [0, 0, 5.5, 0.5, 'easeOutQuad'],
      [0, 0, -999, 0.501, 'easeStep'],
   ];
   d.difficulty.customData.pointDefinitions.slashExpand = [
      [0.5, 1, 0.5, 0],
      [0, 36, 0, 0.5, 'easeInQuad'],
   ];
   d.difficulty.customData.pointDefinitions.slashGlitchEffect = [
      [0, 0],
      [0.75, 0.001, 'easeStep'],
      [0, 0.375],
   ];
   d.difficulty.customData.customEvents.push({
      b: 0,
      t: 'AssignPathAnimation',
      d: {
         track: 'pewPew',
         dissolve: 'slashGlitchEffect',
         dissolveArrow: 'none',
         definitePosition: 'slashPosition',
         scale: 'slashExpand',
      },
   });
   for (
      const time of [
         165,
         173,
         189,
         190,
         192,
         205,
         221,
         222,
         224,
         ...[165, 173, 189, 190, 192, 205, 221, 222, 224].map((e) => e + 224),
         ...range(453, 510, 8),
      ]
   ) {
      at(d.chains, time).forEach((c) => {
         const json = v3.colorNote.serialize(new ColorNote(c));
         json.b! += 0.99;
         json.customData!.coordinates = [json.x! - 2, json.y!];
         json.customData!.noteJumpMovementSpeed = 16;
         json.customData!.noteJumpStartBeatOffset = -1;
         json.customData!.uninteractable = true;
         json.customData!.track = 'pewPew';
         json.customData!.localRotation = [
            0,
            0,
            (180 + (NoteDirectionAngle[json.d as 0] || 0)) % 360,
         ];
         d.difficulty.customData.fakeColorNotes!.push(json);
      });
   }

   d.difficulty.customData.fakeObstacles = d.difficulty.customData.fakeObstacles!.filter(
      (e) =>
         !(
            (e.b! > 45.49 && e.b! < 45.52) ||
            (e.b! > 77.49 && e.b! < 77.52) ||
            (e.b! > 269.49 && e.b! < 269.52) ||
            (e.b! > 301.49 && e.b! < 301.52)
         ),
   );

   const wa = d.difficulty.customData.fakeObstacles!.filter(
      (o) =>
         ((o.b! > 150 && o.b! < 160.875) || (o.b! > 374 && o.b! < 384.875)) &&
         o.customData!.coordinates!.every((e) => e > -7 && e < 7),
   );
   d.difficulty.customData.pointDefinitions.waDefPos = [
      [0, 0, 32, 0],
      [0, 0, -4, 0.45],
      [0, 0, -64, 1],
   ];
   wa.forEach((o) => {
      o.b! -= 1.75;
      o.b! += 2;
      o.customData!.noteJumpStartBeatOffset = 0;
      o.customData!.animation = {
         definitePosition: 'waDefPos',
         dissolve: 'moveMeFade',
      };
   });

   const night = d.difficulty.customData.fakeObstacles!.filter(
      (o) =>
         ((o.b! > 38 && o.b! < 39) ||
            (o.b! > 70 && o.b! < 71) ||
            (o.b! > 262 && o.b! < 263) ||
            (o.b! > 294 && o.b! < 295)) &&
         o.customData!.color!.every((e, i) => e === 0 || i === 3) &&
         productAry(o.customData!.size as types.Vector2) > 0.001,
   );
   d.difficulty.customData.pointDefinitions.nightPos = [
      [0, 1, 16, 0],
      [-0.5, 1, 16, 0.499],
      [-0.5, -9999, -9999, 0.5, 'easeStep'],
   ];
   d.difficulty.customData.pointDefinitions.nightFade = [
      [0, 0],
      [1, 1 / 64],
      [1, 0.5 - 1 / 64],
      [0, 0.5],
   ];
   night.forEach((o) => {
      o.b! -= 1.75;
      o.b! += 6;
      o.customData!.noteJumpStartBeatOffset = 4;
      o.customData!.animation = {
         definitePosition: 'nightPos',
         dissolve: 'nightFade',
      };
   });

   const and = d.difficulty.customData.fakeObstacles!.filter(
      (o) =>
         ((o.b! > 39 && o.b! < 40) ||
            (o.b! > 71 && o.b! < 72) ||
            (o.b! > 263 && o.b! < 264) ||
            (o.b! > 295 && o.b! < 296)) &&
         o.customData!.color!.every((e, i) => e === 0 || i === 3) &&
         productAry(o.customData!.size as types.Vector2) > 0.001,
   );
   d.difficulty.customData.pointDefinitions.andPos = [
      [0, 0.5, 16.5, 0],
      [0, 0.5, 17, 0.499],
      [0, -9999, -9999, 0.5, 'easeStep'],
   ];
   d.difficulty.customData.pointDefinitions.andFade = [
      [0, 0],
      [1, 1 / 32],
      [1, 0.5 - 1 / 32],
      [0, 0.5],
   ];
   and.forEach((o) => {
      o.b! -= 1.75;
      o.b! += 5;
      o.customData!.noteJumpStartBeatOffset = 3;
      o.customData!.animation = {
         definitePosition: 'andPos',
         dissolve: 'andFade',
      };
   });

   const day = d.difficulty.customData.fakeObstacles!.filter(
      (o) =>
         ((o.b! > 40 && o.b! < 41) ||
            (o.b! > 72 && o.b! < 73) ||
            (o.b! > 264 && o.b! < 265) ||
            (o.b! > 296 && o.b! < 297)) &&
         o.customData!.color!.every((e, i) => e === 0 || i === 3) &&
         productAry(o.customData!.size as types.Vector2) > 0.001,
   );
   d.difficulty.customData.pointDefinitions.dayPos = [
      [0, 0, 16, 0],
      [0.5, 0, 16, 0.499],
      [0.5, -9999, -9999, 0.5, 'easeStep'],
   ];
   d.difficulty.customData.pointDefinitions.dayFade = [
      [0, 0],
      [1, 1 / 16],
      [1, 0.5 - 1 / 16],
      [0, 0.5],
   ];
   day.forEach((o) => {
      o.b! -= 1.75;
      o.b! += 4;
      o.customData!.noteJumpStartBeatOffset = 2;
      o.customData!.animation = {
         definitePosition: 'dayPos',
         dissolve: 'dayFade',
      };
   });

   const tune = d.difficulty.customData.fakeObstacles!.filter(
      (o) =>
         ((o.b! > 45.24 && o.b! < 45.26) ||
            (o.b! > 77.24 && o.b! < 77.26) ||
            (o.b! > 269.24 && o.b! < 269.26) ||
            (o.b! > 301.24 && o.b! < 301.26)) &&
         o.customData!.color!.every((e, i) => e === 0 || i === 3) &&
         productAry(o.customData!.size as types.Vector2) > 0.001,
   );
   d.difficulty.customData.pointDefinitions.tuneFade = [
      [0, 0],
      [1, 0.1],
      [1, 0.5],
      [0, 0.625],
   ];
   tune.forEach((o) => {
      o.b! += 0.75;
      o.customData!.noteJumpStartBeatOffset! += 0.75;
      o.customData!.animation = {
         definitePosition: [
            [0, 0, 16, 0],
            [0, 0.5, 16, 0.5, 'easeOutQuad'],
            [o.customData!.coordinates![0] * 5, 0, 16, 0.625, 'easeInQuad'],
         ],
         dissolve: 'tuneFade',
      };
   });

   const heart = d.difficulty.customData.fakeObstacles!.filter(
      (o) =>
         ((o.b! > 48.24 && o.b! < 48.26) ||
            (o.b! > 80.24 && o.b! < 80.26) ||
            (o.b! > 272.24 && o.b! < 272.26) ||
            (o.b! > 304.24 && o.b! < 304.26)) &&
         o.customData!.color!.every((e, i) => e === 0 || i === 3) &&
         productAry(o.customData!.size as types.Vector2) > 0.001,
   );
   d.difficulty.customData.pointDefinitions.heartFade = [
      [0, 0],
      [1, 0.0125],
      [1, 0.485],
      [0, 0.55],
   ];
   heart.forEach((o) => {
      o.b! += 3.5;
      o.customData!.noteJumpStartBeatOffset = 2.5;
      o.customData!.animation = {
         definitePosition: [
            [0, -0.25, 0, 0],
            [0, 0.5, 16, random(0.4875, 0.5125), 'easeOutCirc'],
            [0, -32, 16, 0.75, 'easeInQuad'],
         ],
         dissolve: 'heartFade',
      };
   });

   const moveMe = d.difficulty.customData.fakeObstacles!.filter(
      (o) =>
         ((o.b! > 54.5 && o.b! < 55.5) || (o.b! > 278.5 && o.b! < 279.5)) &&
         o.customData!.color!.every((e, i) => e === 0 || i === 3) &&
         productAry(o.customData!.size as types.Vector2) > 0.001,
   );
   d.difficulty.customData.pointDefinitions.moveMeFade = [
      [0, 0],
      [1, 0.1],
      [1, 0.95],
      [0, 0.975],
   ];
   moveMe.forEach((o) => {
      o.b! += 2.75;
      o.customData!.noteJumpStartBeatOffset = 3;
      o.customData!.animation = {
         definitePosition: [
            [0, 0.5, 16, 0],
            [0, 0.5, 18, 0.95],
            [
               Math.sign(o.customData!.coordinates![0] - 0.8) +
               (o.customData!.coordinates![0] - 0.8) * 5,
               0.5,
               18,
               1,
               'easeInQuad',
            ],
         ],
         dissolve: 'moveMeFade',
      };
   });

   const yourBody = d.difficulty.customData.fakeObstacles!.filter(
      (o) =>
         ((o.b! > 64 && o.b! < 65) || (o.b! > 288 && o.b! < 289)) &&
         o.customData!.color!.every((e, i) => e === 0 || i === 3) &&
         productAry(o.customData!.size as types.Vector2) > 0.001,
   );
   d.difficulty.customData.pointDefinitions.yourBodyDefPos = [
      [0, 0, 24, 0],
      [0, 0.5, 25, 1, 'easeOutSine'],
   ];
   d.difficulty.customData.pointDefinitions.yourBodyFade = [
      [0, 0],
      [1, 0.05],
      [1, 0.75],
      [0, 1],
   ];
   yourBody.forEach((o) => {
      o.b! += 0.75;
      o.customData!.noteJumpStartBeatOffset = 0.75;
      o.customData!.animation = {
         definitePosition: 'yourBodyDefPos',
         dissolve: 'yourBodyFade',
      };
   });

   const jumpAround = d.difficulty.customData.fakeObstacles!.filter(
      (o) =>
         ((o.b! > 86.5 && o.b! < 92) || (o.b! > 310.5 && o.b! < 316)) &&
         o.customData!.color!.every((e, i) => e === 0 || i === 3) &&
         productAry(o.customData!.size as types.Vector2) > 0.001,
   );
   d.difficulty.customData.pointDefinitions.jumpAroundDefPos = [
      [0.5, -7, 25, 0],
      [0.5, 0, 25, 0.125, 'easeInCirc'],
      [0.5, 1, 25, 0.25, 'easeOutElastic'],
      [0.5, 1.25, 25.5, 1, 'easeInQuad'],
   ];
   d.difficulty.customData.pointDefinitions.jumpAroundFade = [
      [0, 0],
      [0, 0.05],
      [1, 0.15],
      [1, 0.5],
      [0, 0.75],
   ];
   jumpAround.forEach((o) => {
      o.customData!.animation = {
         definitePosition: 'jumpAroundDefPos',
         dissolve: 'jumpAroundFade',
      };
   });

   const heartLogo = d.difficulty.customData.fakeObstacles!.filter(
      (o) =>
         o.b! > 354.5 &&
         o.b! < 357 &&
         o.customData!.color!.every((e, i) => e === 0 || i === 3) &&
         o.customData!.coordinates![1] !== 0,
   );
   d.difficulty.customData.pointDefinitions.heartLogoDefPos = [
      [0, 0, 21, 0],
      [0, 0, 20, 0.5, 'easeInOutQuad'],
   ];
   d.difficulty.customData.pointDefinitions.heartLogoFade = [
      [0, 0],
      [1, 0.125],
      [1, 0.45],
      [0, 0.5],
   ];
   heartLogo.forEach((o) => {
      if (o.b! > 354.74 && o.b! < 354.76) {
         o.b! += 4;
         o.customData!.noteJumpStartBeatOffset = 2;
      } else {
         o.b! += 2;
         o.customData!.noteJumpStartBeatOffset = 0;
      }
      o.b! -= 1.75;
      o.customData!.animation = {
         definitePosition: 'heartLogoDefPos',
         dissolve: 'heartLogoFade',
      };
   });
}

const info = readInfoFileSync();
info.song.title = 'Girly Cupid';
info.colorSchemes = [
   {
      useOverride: true,
      name: 'Girly Cupid',
      saberLeftColor: { r: 0.875, g: 0.125, b: 0.125, a: 1 },
      saberRightColor: { r: 0.375, g: 0.5625, b: 0.875, a: 1 },
      environment0Color: { r: 0.375, g: 0.375, b: 0.375, a: 1 },
      environment1Color: { r: 0.625, g: 0.75, b: 0.875, a: 1 },
      environment0ColorBoost: { r: 0.375, g: 0.375, b: 0.375, a: 1 },
      environment1ColorBoost: { r: 0.625, g: 0.75, b: 0.875, a: 1 },
      obstaclesColor: { r: 0.75, g: 0.75, b: 0.75, a: 1 },
   },
];
for (const d of info.difficulties) {
   const bm = readDifficultyFileSync(d.filename, 3);
   if (d.characteristic !== 'Legacy') {
      bm.difficulty.customData.fakeObstacles = deepCopy(
         lightshow.difficulty.customData.fakeObstacles,
      );
      bm.difficulty.customData.bookmarks = deepCopy(
         lightshow.difficulty.customData.bookmarks,
      );
      bm.difficulty.customData.bookmarks!.forEach(
         (bookmark, i) => (bookmark.c = lerpColor(
            [0.875, 0.125, 0.125],
            [0.375, 0.125, 0.875],
            i / bm.difficulty.customData.bookmarks!.length,
         )),
      );
      bm.basicEvents = lightshow.basicEvents.filter(
         (e) => !e.isBpmEvent(),
      );
      bm.obstacles = [];
      funstuff(bm);
   }

   d.customData._information = [
      'Submission #41',
      '3rd place in Building Block 2020',
      '5th track of album city hop',
   ];
   if (d.characteristic === 'Standard') {
      if (d.difficulty === 'Easy') {
         d.customData._difficultyLabel = 'Move Me';
      }
      if (d.difficulty === 'Normal') {
         d.customData._difficultyLabel = "Jumpin' Around";
      }
      if (d.difficulty === 'Hard') {
         d.customData._difficultyLabel = 'On The Beat';
      }
      if (d.difficulty === 'Expert') {
         d.customData._difficultyLabel = "Groovin' Heart";
      }
      if (d.difficulty === 'ExpertPlus') {
         d.customData._difficultyLabel = 'Leave Everything Behind!';
      }
   }

   if (d.characteristic === 'OneSaber') {
      if (d.difficulty === 'Normal') {
         d.customData._difficultyLabel = 'Tune Never Stops';
      }
      if (d.difficulty === 'Expert') {
         d.customData._difficultyLabel = 'Overflowing Heart';
      }
      if (d.difficulty === 'ExpertPlus') {
         d.customData._difficultyLabel = "Don't Forget About Me!";
      }
   }
   writeDifficultyFileSync(bm);

   copyToCustomColor(d, info.colorSchemes[0]);
}

writeInfoFileSync(info);
