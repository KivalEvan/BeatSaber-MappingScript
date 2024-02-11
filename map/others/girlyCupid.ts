import { ext, globals, load, save, types, v3 } from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';

globals.directory = wipPath('Girly Cupid');

const lightshow = load.difficultySync('ExpertPlusLegacy.dat', 3);

function makeBlackWhite(n: types.wrapper.IWrapBaseNote) {
   if (n.color === 0) n.customData.color = [0.25, 0.25, 0.25];
   if (n.color === 1) n.customData.color = [0.625, 0.625, 0.625];
}

const { between, at } = ext.selector;
function funstuff(d: v3.Difficulty) {
   const allthestuff = [...d.arcs, ...d.chains, ...d.colorNotes];
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
   between(allthestuff, 180.5, 182).forEach(makeBlackWhite);
   between(allthestuff, 196, 198 - 0.001).forEach(makeBlackWhite);
   between(allthestuff, 212, 214).forEach(makeBlackWhite);
   between(allthestuff, 228, 229 - 0.001).forEach(makeBlackWhite);

   between(allthestuff, 325, 388).forEach(makeBlackWhite);
   between(allthestuff, 396, 397 - 0.001).forEach(makeBlackWhite);
   between(allthestuff, 404.5, 406).forEach(makeBlackWhite);
   between(allthestuff, 420, 422 - 0.001).forEach(makeBlackWhite);
   between(allthestuff, 436, 438).forEach(makeBlackWhite);
   between(allthestuff, 452, 453 - 0.001).forEach(makeBlackWhite);

   between(allthestuff, 389, 395.5).forEach((n) => {
      if (n.color === 0) n.customData.color = [0.8125, 0.375, 0.0625];
      if (n.color === 1) n.customData.color = [0.375, 0.125, 0.875];
   });
}

const info = load.infoSync(2);
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
