import {
   ext,
   globals,
   load,
   NoteDirectionAngle,
   NoteJumpSpeed,
   range,
   remap,
   save,
   types,
   v3,
} from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';
const { between, at } = ext.selector;

globals.directory = wipPath('Girly Cupid');

const lightshow = load.difficultySync('ExpertPlusLegacy.dat', 3);

function makeBlackWhite(n: types.wrapper.IWrapBaseNote) {
   if (n.color === 0) n.customData.color = [0.25, 0.25, 0.25];
   if (n.color === 1) n.customData.color = [0.625, 0.625, 0.625];
}

function leaveTrail(d: v3.Difficulty, start: number, end: number) {
   between(d.colorNotes, start, end).forEach((n) => {
      let i = 0;
      for (const step of range(0.09, 0.49, 0.05)) {
         const json = n.toJSON();
         json.b += step;
         json.customData.uninteractable = true;
         json.customData.animation = {};
         json.customData.animation.dissolveArrow = 'none';
         d.customData.pointDefinitions!['trail' + i] ||= [
            [remap(step, 0.09, 0.49, 0.12, 0.02), 0],
         ];
         json.customData.animation.dissolve = 'trail' + i;
         d.customData.fakeColorNotes!.push(json);
         i++;
      }
   });
}

function drawNote(d: v3.Difficulty, start: number, end: number) {
   between(d.colorNotes, start, end).forEach((n) => {
      let i = 0;
      const json = n.toJSON();
      json.b += 0.49;
      json.customData.noteJumpMovementSpeed = 50;
      json.customData.noteJumpStartBeatOffset = -0.5;
      json.customData.uninteractable = true;
      json.customData.coordinates = [0, 0];
      json.customData.animation = {};
      json.customData.animation.dissolve = 'none';
      json.customData.animation.scale = [[3, 3, 0.1, 0]];
      json.customData.animation.definitePosition = [[0, -2, 10, 0]];
      d.customData.fakeColorNotes!.push(json);
      i++;
   });
}

function makeItAppear(n: types.wrapper.IWrapBaseNote) {
   if (n.color === 0) n.customData.color = [0.25, 0.25, 0.25];
   if (n.color === 1) n.customData.color = [0.625, 0.625, 0.625];
   n.customData.animation = {};
   n.customData.animation.dissolve = 'popIntoExistence';
}

function funstuff(d: v3.Difficulty) {
   const allthestuff = [...d.arcs, ...d.chains, ...d.colorNotes];
   allthestuff.forEach((n) => n.resetCustomData());
   d.customData.fakeColorNotes = [];
   d.customData.customEvents = [];
   return;
   d.customData.pointDefinitions = {
      none: [[0, 0]],
      popIntoExistence: [
         [0, 0],
         [1, 0.25, 'easeOutQuad'],
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
   between(allthestuff, 101, 161).forEach(makeItAppear);
   between(allthestuff, 180.5, 182).forEach(makeBlackWhite);
   between(allthestuff, 196, 198 - 0.001).forEach(makeBlackWhite);
   between(allthestuff, 212, 214).forEach(makeBlackWhite);
   between(allthestuff, 228, 229 - 0.001).forEach(makeBlackWhite);

   between(allthestuff, 325, 388).forEach(makeBlackWhite);
   between(allthestuff, 325, 385).forEach(makeItAppear);
   between(allthestuff, 396, 397 - 0.001).forEach(makeBlackWhite);
   between(allthestuff, 404.5, 406).forEach(makeBlackWhite);
   between(allthestuff, 420, 422 - 0.001).forEach(makeBlackWhite);
   between(allthestuff, 436, 438).forEach(makeBlackWhite);
   between(allthestuff, 452, 453 - 0.001).forEach(makeBlackWhite);

   between(allthestuff, 389, 395.5).forEach((n) => {
      if (n.color === 0) n.customData.color = [1, 0.5, 0.0625];
      if (n.color === 1) n.customData.color = [0.375, 0.125, 0.875];
   });

   leaveTrail(d, 101, 131.5);
   leaveTrail(d, 325, 355.5);
   drawNote(d, 449.5, 451.5);
   drawNote(d, 225.5, 227.5);
   d.customData.pointDefinitions.slashPosition = [
      [0, 0, 8, 0],
      [0, 0, 7, 1 / 32, 'easeStep'],
      [0, 0, 9.5, 0.5, 'easeOutQuad'],
      [0, 0, -999, 0.501, 'easeStep'],
   ];
   d.customData.pointDefinitions.slashExpand = [
      [1, 0.75, 0.75, 0],
      [0, 36, 0, 0.5, 'easeInQuad'],
   ];
   d.customData.pointDefinitions.slashGlitchEffect = [
      [0, 0],
      [0.75, 1 / 32, 'easeStep'],
      [0, 0.375],
   ];
   d.customData.customEvents.push({
      b: 0,
      t: 'AssignPathAnimation',
      d: {
         track: 'trackDrop2PewPew',
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
         ...range(453, 509, 8),
      ]
   ) {
      at(d.chains, time).forEach((c) => {
         const json = new v3.ColorNote(c).toJSON();
         json.b += 0.865;
         json.customData.coordinates = [json.c ? 2 : -2, json.y];
         json.customData.noteJumpMovementSpeed = 50;
         json.customData.noteJumpStartBeatOffset = 0.375;
         json.customData.uninteractable = true;
         json.customData.track = 'trackDrop2PewPew';
         json.customData.localRotation = [
            0,
            0,
            (180 + (NoteDirectionAngle[json.d as 0] || 0)) % 360,
         ];
         d.customData.fakeColorNotes!.push(json);
      });
   }
}

const info = load.infoSync(2);
info.song.title = '_Girly Cupid';
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
for (const [_, d] of info.listMap()) {
   const difficulty = load.difficultySync(d.filename, 3);
   difficulty.customData.bookmarks = lightshow.customData.bookmarks;
   difficulty.basicEvents = lightshow.basicEvents.filter(
      (e) => !e.isBpmEvent(),
   );
   difficulty.customData.fakeObstacles = lightshow.customData.fakeObstacles;
   difficulty.obstacles = [];

   if (d.characteristic === 'Standard') {
      funstuff(difficulty);
      if (d.difficulty === 'Easy') d.customData._difficultyLabel = 'Move Me';
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
      funstuff(difficulty);
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
   save.difficultySync(difficulty);

   d.copyColorScheme(info.colorSchemes[0]);
}

save.infoSync(info);
