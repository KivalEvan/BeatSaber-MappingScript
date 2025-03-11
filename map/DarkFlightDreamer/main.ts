import {
   BasicEvent,
   Beatmap,
   ext,
   globals,
   lerp,
   lerpColor,
   normalize,
   readDifficultyFileSync,
   readInfoFileSync,
   types,
   writeDifficultyFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';

globals.directory = beatmapWipPath('Dark Flight Dreamer');

const { between, where } = ext.selector;

const environmentBM = readDifficultyFileSync('env.dat', 2, {
   directory: './map/DarkFlightDreamer',
});
const lightshow = Beatmap.createOne(readDifficultyFileSync('Lightshow.dat', 2));
environmentBM.difficulty.customData
   ._environment!.filter(
      (ev) =>
         !ev._duplicate &&
         typeof ev._active !== 'boolean' &&
         ev._id?.includes('Ring') &&
         ev._id.includes('NeonTube'),
   )
   .forEach((ev) => (ev._scale = [1.25, 2.5, 1.25]));

lightshow.difficulty.customData._environment = environmentBM.difficulty.customData._environment;
const bookmarks = lightshow.difficulty.customData._bookmarks;
if (bookmarks) {
   for (const b of bookmarks) {
      b._color = lerpColor(
         [405, 1, 1],
         [225, 1, 1],
         normalize(b._time, bookmarks.at(0)!._time, bookmarks.at(-1)!._time),
         'hsva',
      );
   }
}

where(between(lightshow.basicEvents, 597, 605), {
   include: { type: [2, 3] },
}).forEach((ev, i, _) => (ev.floatValue -= i / (_.length * 3)));

const makeWhite = (e: BasicEvent, mult = 1) => {
   if (e.isLightEvent() && !e.isOff()) {
      if (e.isRed()) {
         e.value += 4;
      }
      if (e.isBlue()) {
         e.value += 8;
      }
      e.floatValue *= mult;
   }
};
const whiteLightCandidate = where(lightshow.basicEvents, {
   include: { value: [1, 2, 3, 4] },
}).filter((ev) => ev.isLightEvent());

const introTime = [10, 206, 370, 566];
for (const it of introTime) {
   between(whiteLightCandidate, it + 27.5, it + 28.499).forEach((e) => makeWhite(e));
   between(
      where(whiteLightCandidate, { include: { type: 1 } }),
      it + 28.5,
      it + 30,
   ).forEach((e) => makeWhite(e));
}

const verseOrSomething = [74, 270];
for (const vos of verseOrSomething) {
   between(whiteLightCandidate, vos, vos + 1.999).forEach((e) => makeWhite(e));
   between(
      where(lightshow.basicEvents, { include: { type: [2, 3] } }),
      vos + 7,
      vos + 7.999,
   ).forEach((e) => makeWhite(e));
   between(whiteLightCandidate, vos + 2, vos + 2.999).forEach((e) => makeWhite(e));
   between(whiteLightCandidate, vos + 10, vos + 10.999).forEach((e) => makeWhite(e));
   between(whiteLightCandidate, vos + 8, vos + 9.999).forEach((e) => makeWhite(e));
   between(
      where(whiteLightCandidate, { include: { type: 0 } }),
      vos + 28,
      vos + 30,
   ).forEach((e) => makeWhite(e, 0.75));
   between(
      where(whiteLightCandidate, { include: { type: 0 } }),
      vos + 30,
      vos + 31.999,
   ).forEach((e, i, _) => makeWhite(e, lerp(normalize(i, 0, _.length - 1), 0.75, 1.25)));
   between(whiteLightCandidate, vos + 35, vos + 35.999).forEach((e) => makeWhite(e));
}

const aaaaaaaaaaaaaaaaaaaaTime = [190, 386, 550];
for (const ct of aaaaaaaaaaaaaaaaaaaaTime) {
   between(
      where(whiteLightCandidate, { include: { type: 0 } }),
      ct,
      ct + 7.999,
   ).forEach((e, i, _) => makeWhite(e, lerp(normalize(i, 0, _.length - 1), 0.625, 0.75)));
   between(whiteLightCandidate, ct + 9, ct + 10).forEach((e) => makeWhite(e));
}

const boopboopTime = [57, 125, 157, 253, 321, 353, 485, 517];
for (const bbt of boopboopTime) {
   between(whiteLightCandidate, bbt, bbt + 0.999).forEach((e) => makeWhite(e, 0.75));
}

const flashIt = [
   10,
   42,
   58,
   70,
   71.5,
   90,
   110,
   126,
   134,
   137.5,
   138.5,
   140,
   142,
   158,
   166,
   169.5,
   170.5,
   172,
   174,
   198,
   201,
   201.5,
   202,
   206,
   238,
   254,
   266,
   267.5,
   434,
   566,
   90 + 196,
   110 + 196,
   126 + 196,
   134 + 196,
   137.5 + 196,
   138.5 + 196,
   140 + 196,
   142 + 196,
   158 + 196,
   166 + 196,
   169.5 + 196,
   170.5 + 196,
   172 + 196,
   174 + 196,
   198 + 196,
   201 + 196,
   201.5 + 196,
   202 + 196,
   110 + 360,
   126 + 360,
   134 + 360,
   137.5 + 360,
   138.5 + 360,
   140 + 360,
   142 + 360,
   158 + 360,
   166 + 360,
   169.5 + 360,
   170.5 + 360,
   172 + 360,
   174 + 360,
   198 + 360,
   201 + 360,
   201.5 + 360,
   202 + 360,
];
for (const fi of flashIt) {
   between(
      where(lightshow.basicEvents, { include: { type: 4 } }),
      fi,
      fi + 0.499,
   ).forEach((ev) => makeWhite(ev));
}

between(
   where(whiteLightCandidate, { include: { type: 1 } }),
   97.5,
   98.5,
).forEach((e, i, _) => makeWhite(e, lerp(normalize(i, 0, _.length - 1), 1, 0.5)));
between(
   where(whiteLightCandidate, { include: { type: 1 } }),
   293.5,
   294.5,
).forEach((e, i, _) => makeWhite(e, lerp(normalize(i, 0, _.length - 1), 1, 0.5)));
between(where(whiteLightCandidate, { include: { type: 4 } }), 108, 109).forEach(
   (e) => makeWhite(e),
);
between(where(whiteLightCandidate, { include: { type: 4 } }), 304, 305).forEach(
   (e) => makeWhite(e),
);
between(where(whiteLightCandidate, { include: { type: 1 } }), 440, 442).forEach(
   (e) => makeWhite(e),
);
between(where(whiteLightCandidate, { include: { type: 1 } }), 448, 450).forEach(
   (e) => makeWhite(e),
);

const burstTime = [6, 86, 282];
for (const bt of burstTime) {
   between(whiteLightCandidate, bt, bt + 2).forEach((e) => makeWhite(e, 0.40625));
   between(whiteLightCandidate, bt + 2, bt + 3.999).forEach((e, i, _) =>
      makeWhite(e, lerp(normalize(i, 0, _.length - 1), 0.5, 1))
   );
}

between(
   whiteLightCandidate.filter((ev) => ev.type !== 0),
   458,
   465.999,
).forEach((e, i, _) => makeWhite(e, lerp(normalize(i, 0, _.length - 1), 0.25, 1)));
between(whiteLightCandidate, 469, 469.999).forEach((e, i, _) =>
   makeWhite(e, lerp(normalize(i, 0, _.length - 1), 2, 1.25))
);
between(
   where(lightshow.basicEvents, { include: { type: 4 } }),
   468,
   468.999,
).forEach((e) => makeWhite(e));

const info = readInfoFileSync();
info.environmentBase.normal = 'NiceEnvironment';
for (const d of info.difficulties) {
   const beatmap = Beatmap.createOne(readDifficultyFileSync(d.filename, 3));
   try {
      const bombBeat = Beatmap.createOne(
         readDifficultyFileSync(d.filename, 3, {
            directory: beatmapWipPath('Dark Flight Dreamer/dfd'),
         }),
      );
      beatmap.bombNotes = bombBeat.bombNotes;
   } catch (e) {}

   // beatmap.difficulty.customData._bookmarks = lightshow.difficulty.customData!._bookmarks;
   // beatmap.difficulty.customData._environment = lightshow.difficulty.customData!._environment;
   // beatmap.basicEvents = lightshow.basicEvents;

   writeDifficultyFileSync(beatmap);
   delete d.customData._requirements;
   d.customData._suggestions = ['Chroma'];
   d.customData._envColorLeft = { r: 0.8125, g: 0.0625, b: 0.1875 };
   d.customData._envColorRight = { r: 0.6875, g: 0.03125, b: 0.6875 };
   d.customData._envColorLeftBoost = {
      r: 0.8125,
      g: 0.53125,
      b: 0.03125,
   };
   d.customData._envColorRightBoost = { r: 0.0625, g: 0.25, b: 0.75 };
   d.customData._obstacleColor = { r: 0.25, g: 0.125, b: 0.5 };
}

// writeInfoFileSync(info);
