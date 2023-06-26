import { ext, globals, load, save, utils, v2 } from '../../depsLocal.ts';

globals.directory = Deno.build.os === 'linux'
   ? '/home/kival/CustomWIPLevels/VENTEN/'
   : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/VENTEN';

const { between, where, at } = ext.selector;

const INPUT_FILE = 'Lightshow.dat';

const lightshow = load.difficultySync(INPUT_FILE, 2);
const bookmarks = lightshow.customData._bookmarks;
if (bookmarks) {
   for (const b of bookmarks) {
      b._color = utils.interpolateColor(
         [195, 1, 1],
         [60, 1, 1],
         utils.normalize(b._time, bookmarks.at(0)!._time, bookmarks.at(-1)!._time),
         'hsva',
      );
   }
}

const makeWhite = (e: v2.Event, mult = 1) => {
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

between(where(lightshow.basicEvents, { include: { type: 4 } }), 2, 6).forEach(
   (ev, i, _) => ((ev.floatValue = i / (_.length * 2)), makeWhite(ev)),
);
where(between(lightshow.basicEvents, 34, 37.99), { exclude: { type: 1 } }).forEach(
   (ev, i, _) => (ev.floatValue = i / (_.length * 2) + 0.75),
);
where(between(lightshow.basicEvents, 386, 389.99), { exclude: { type: 4 } }).forEach(
   (ev, i, _) => (ev.floatValue = i / _.length + 0.25),
);
where(between(lightshow.basicEvents, 68.75, 69.99), { include: { type: 0 } }).forEach((ev) =>
   makeWhite(ev, 0.75)
);

where(between(lightshow.basicEvents, 101, 101.99), { include: { type: 4 } }).forEach((ev) =>
   makeWhite(ev, 0.75)
);
where(between(lightshow.basicEvents, 129, 129.99), { include: { type: 4 } }).forEach((ev) =>
   makeWhite(ev, 0.75)
);
where(between(lightshow.basicEvents, 134, 162), { include: { type: 4 } })
   .filter((ev) => ev.isBlue())
   .forEach((ev) => makeWhite(ev, 0.75));
where(at(lightshow.basicEvents, 162), { include: { type: 1 } }).forEach((ev) => makeWhite(ev));

where(between(lightshow.basicEvents, 261, 261.99), { include: { type: 4 } }).forEach((ev) =>
   makeWhite(ev, 0.75)
);
where(between(lightshow.basicEvents, 289, 289.99), { include: { type: 4 } }).forEach((ev) =>
   makeWhite(ev, 0.75)
);
where(between(lightshow.basicEvents, 294, 322), { include: { type: 4 } })
   .filter((ev) => ev.isBlue())
   .forEach((ev) => makeWhite(ev, 0.75));
where(at(lightshow.basicEvents, 322), { include: { type: 1 } }).forEach((ev) => makeWhite(ev));

for (let i = 0; i < 2; i++) {
   where(between(lightshow.basicEvents, 390 + i * 32, 420 + i * 32), {
      include: { type: [2, 3] },
   })
      .filter((ev) => ev.isBlue())
      .forEach((ev) => makeWhite(ev));
   where(between(lightshow.basicEvents, 396 + i * 32, 397.99 + i * 32), {
      include: { type: 4 },
   }).forEach((ev) => makeWhite(ev));
   where(between(lightshow.basicEvents, 412 + i * 32, 413.99 + i * 32), {
      include: { type: 4 },
   }).forEach((ev) => makeWhite(ev));
}
where(at(lightshow.basicEvents, 454), { include: { type: 4 } }).forEach((ev) => makeWhite(ev));

const preChorusTime = [166, 326, 462];
for (const pct of preChorusTime) {
   where(between(lightshow.basicEvents, pct, pct + 1.99), {
      include: { type: 4 },
   }).forEach((ev, i, _) => makeWhite(ev, 1 - utils.normalize(i, 0, _.length) * 0.5));
   where(between(lightshow.basicEvents, pct + 24, pct + 24.99), {
      include: { type: 1 },
   }).forEach((ev) => makeWhite(ev, 0.75));
   where(between(lightshow.basicEvents, pct + 26, pct + 26.99), {
      include: { type: 1 },
   }).forEach((ev) => makeWhite(ev, 0.75));
   where(between(lightshow.basicEvents, pct + 28, pct + 28.99), {
      include: { type: 1 },
   }).forEach((ev) => makeWhite(ev, 0.75));
   where(between(lightshow.basicEvents, pct + 30, pct + 31.99), {
      include: { type: 1 },
   }).forEach((ev) => makeWhite(ev, 0.75));
}

const chorusTime = [198, 358, 494];
for (const ct of chorusTime) {
   where(between(lightshow.basicEvents, ct + 24, ct + 24.99), {
      include: { type: 1 },
   }).forEach((ev) => makeWhite(ev, 0.75));
   where(between(lightshow.basicEvents, ct + 26, ct + 26.99), {
      include: { type: 1 },
   }).forEach((ev) => makeWhite(ev, 0.75));
   where(between(lightshow.basicEvents, ct + 28, ct + 28.99), {
      include: { type: 1 },
   }).forEach((ev) => makeWhite(ev, 0.75));
   where(between(lightshow.basicEvents, ct + 30, ct + 31.99), {
      include: { type: 1 },
   }).forEach((ev) => makeWhite(ev, 0.75));
}

where(between(lightshow.basicEvents, 550, 550.99), {
   include: { type: 1 },
}).forEach((ev) => makeWhite(ev, 0.75));
where(between(lightshow.basicEvents, 552, 552.99), {
   include: { type: 1 },
}).forEach((ev) => makeWhite(ev, 0.75));
where(between(lightshow.basicEvents, 554, 554.99), {
   include: { type: 1 },
}).forEach((ev) => makeWhite(ev, 0.75));
for (let i = 0; i < 2; i++) {
   where(between(lightshow.basicEvents, 556 + i * 32, 557.99 + i * 32), {
      include: { type: 1 },
   }).forEach((ev) => makeWhite(ev, 0.75));
}

const flashIt = [38, 70, 102, 198, 230, 262, 358, 494, 526, 558];
for (const fi of flashIt) {
   at(where(lightshow.basicEvents, { include: { type: 4 } }), fi).forEach((ev) => makeWhite(ev));
}

const info = load.infoSync();
for (const [_, d] of info.listMap()) {
   console.log(`Copying lightshow to ${d.characteristic} ${d.difficulty}`);
   const difficulty = load.difficultySync(d.filename, 2);

   difficulty.customData._bookmarks = lightshow.customData!._bookmarks;
   difficulty.basicEvents = lightshow.basicEvents;

   save.difficultySync(difficulty);
   delete d.customData._requirements;
   delete d.customData._suggestions;
   d.customData._colorLeft = { r: 0.8125, g: 0.5, b: 0.125 };
   d.customData._colorRight = { r: 0.5, g: 0.125, b: 0.8125 };
   d.customData._envColorLeft = { r: 0.625, g: 0.4375, b: 0.03125 };
   d.customData._envColorRight = { r: 0.03125, g: 0.5625, b: 0.40625 };
   d.customData._envColorLeftBoost = { r: 0.75, g: 0.03125, b: 0.28125 };
   d.customData._envColorRightBoost = { r: 0.15625, g: 0.4375, b: 0.75 };
   d.customData._obstacleColor = { r: 0.125, g: 0.25, b: 0.4375 };
}

save.infoSync(info);
