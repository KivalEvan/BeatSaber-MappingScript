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

between(where(lightshow.events, { include: { _type: 4 } }), 2, 6).forEach(
    (ev, i, _) => ((ev.floatValue = i / (_.length * 2)), makeWhite(ev)),
);
where(between(lightshow.events, 34, 37.99), { exclude: { _type: 1 } }).forEach(
    (ev, i, _) => (ev.floatValue = i / (_.length * 2) + 0.75),
);
where(between(lightshow.events, 386, 389.99), { exclude: { _type: 4 } }).forEach(
    (ev, i, _) => (ev.floatValue = i / _.length + 0.25),
);
where(between(lightshow.events, 68.75, 69.99), { include: { _type: 0 } }).forEach((ev) => makeWhite(ev, 0.75));

where(between(lightshow.events, 101, 101.99), { include: { _type: 4 } }).forEach((ev) => makeWhite(ev, 0.75));
where(between(lightshow.events, 129, 129.99), { include: { _type: 4 } }).forEach((ev) => makeWhite(ev, 0.75));
where(between(lightshow.events, 134, 162), { include: { _type: 4 } })
    .filter((ev) => ev.isBlue())
    .forEach((ev) => makeWhite(ev, 0.75));
where(at(lightshow.events, 162), { include: { _type: 1 } }).forEach((ev) => makeWhite(ev));

where(between(lightshow.events, 261, 261.99), { include: { _type: 4 } }).forEach((ev) => makeWhite(ev, 0.75));
where(between(lightshow.events, 289, 289.99), { include: { _type: 4 } }).forEach((ev) => makeWhite(ev, 0.75));
where(between(lightshow.events, 294, 322), { include: { _type: 4 } })
    .filter((ev) => ev.isBlue())
    .forEach((ev) => makeWhite(ev, 0.75));
where(at(lightshow.events, 322), { include: { _type: 1 } }).forEach((ev) => makeWhite(ev));

for (let i = 0; i < 2; i++) {
    where(between(lightshow.events, 390 + i * 32, 420 + i * 32), {
        include: { _type: [2, 3] },
    })
        .filter((ev) => ev.isBlue())
        .forEach((ev) => makeWhite(ev));
    where(between(lightshow.events, 396 + i * 32, 397.99 + i * 32), {
        include: { _type: 4 },
    }).forEach((ev) => makeWhite(ev));
    where(between(lightshow.events, 412 + i * 32, 413.99 + i * 32), {
        include: { _type: 4 },
    }).forEach((ev) => makeWhite(ev));
}
where(at(lightshow.events, 454), { include: { _type: 4 } }).forEach((ev) => makeWhite(ev));

const preChorusTime = [166, 326, 462];
for (const pct of preChorusTime) {
    where(between(lightshow.events, pct, pct + 1.99), {
        include: { _type: 4 },
    }).forEach((ev, i, _) => makeWhite(ev, 1 - utils.normalize(i, 0, _.length) * 0.5));
    where(between(lightshow.events, pct + 24, pct + 24.99), {
        include: { _type: 1 },
    }).forEach((ev) => makeWhite(ev, 0.75));
    where(between(lightshow.events, pct + 26, pct + 26.99), {
        include: { _type: 1 },
    }).forEach((ev) => makeWhite(ev, 0.75));
    where(between(lightshow.events, pct + 28, pct + 28.99), {
        include: { _type: 1 },
    }).forEach((ev) => makeWhite(ev, 0.75));
    where(between(lightshow.events, pct + 30, pct + 31.99), {
        include: { _type: 1 },
    }).forEach((ev) => makeWhite(ev, 0.75));
}

const chorusTime = [198, 358, 494];
for (const ct of chorusTime) {
    where(between(lightshow.events, ct + 24, ct + 24.99), {
        include: { _type: 1 },
    }).forEach((ev) => makeWhite(ev, 0.75));
    where(between(lightshow.events, ct + 26, ct + 26.99), {
        include: { _type: 1 },
    }).forEach((ev) => makeWhite(ev, 0.75));
    where(between(lightshow.events, ct + 28, ct + 28.99), {
        include: { _type: 1 },
    }).forEach((ev) => makeWhite(ev, 0.75));
    where(between(lightshow.events, ct + 30, ct + 31.99), {
        include: { _type: 1 },
    }).forEach((ev) => makeWhite(ev, 0.75));
}

where(between(lightshow.events, 550, 550.99), {
    include: { _type: 1 },
}).forEach((ev) => makeWhite(ev, 0.75));
where(between(lightshow.events, 552, 552.99), {
    include: { _type: 1 },
}).forEach((ev) => makeWhite(ev, 0.75));
where(between(lightshow.events, 554, 554.99), {
    include: { _type: 1 },
}).forEach((ev) => makeWhite(ev, 0.75));
for (let i = 0; i < 2; i++) {
    where(between(lightshow.events, 556 + i * 32, 557.99 + i * 32), {
        include: { _type: 1 },
    }).forEach((ev) => makeWhite(ev, 0.75));
}

const flashIt = [38, 70, 102, 198, 230, 262, 358, 494, 526, 558];
for (const fi of flashIt) {
    at(where(lightshow.events, { include: { _type: 4 } }), fi).forEach((ev) => makeWhite(ev));
}

const info = load.infoSync();
for (const set of info._difficultyBeatmapSets) {
    for (const d of set._difficultyBeatmaps) {
        console.log(`Copying lightshow to ${set._beatmapCharacteristicName} ${d._difficulty}`);
        const difficulty = load.difficultySync(d._beatmapFilename, 2);

        difficulty.customData._bookmarks = lightshow.customData!._bookmarks;
        difficulty.events = lightshow.events;

        save.difficultySync(difficulty);
        if (d._customData) {
            delete d._customData._requirements;
            delete d._customData._suggestions;
            d._customData._colorLeft = { r: 0.8125, g: 0.5, b: 0.125 };
            d._customData._colorRight = { r: 0.5, g: 0.125, b: 0.8125 };
            d._customData._envColorLeft = { r: 0.625, g: 0.4375, b: 0.03125 };
            d._customData._envColorRight = { r: 0.03125, g: 0.5625, b: 0.40625 };
            d._customData._envColorLeftBoost = { r: 0.75, g: 0.03125, b: 0.28125 };
            d._customData._envColorRightBoost = { r: 0.15625, g: 0.4375, b: 0.75 };
            d._customData._obstacleColor = { r: 0.125, g: 0.25, b: 0.4375 };
        }
    }
}

save.infoSync(info);
