import { ext, globals, load, save, types, utils, v3 } from '../../depsLocal.ts';

globals.directory =
    'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/GhostsPlayToTheAudience';

const { where, at, between } = ext.selector;

const lightshow = load.difficultySync('Expert.dat');
const osExpertP = load.difficultySync('HardOneSaber.dat').setFileName('ExpertPlusOneSaber.dat');
const osExpert = load.difficultySync('NormalOneSaber.dat').setFileName('ExpertOneSaber.dat');

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
        d: { duration: 0, track: 'ghostTrack', color: [[0.875, 0.875, 0.875, 1, 0]] },
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

osExpertP.basicEvents = lightshow.basicEvents;
osExpertP.colorBoostEvents = lightshow.colorBoostEvents;
osExpertP.customData.environment = lightshow.customData.environment;
osExpertP.customData.pointDefinitions = pointDefinitions;
osExpertP.customData.customEvents = customEvents;

osExpert.basicEvents = lightshow.basicEvents;
osExpert.colorBoostEvents = lightshow.colorBoostEvents;
osExpert.customData.environment = lightshow.customData.environment;
osExpert.customData.pointDefinitions = pointDefinitions;
osExpert.customData.customEvents = customEvents;

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
        between(osExpertP.colorNotes, it + bt[0], it + bt[1]).forEach((n) => (n.customData.track = 'ghostTrack'));
        between(osExpert.colorNotes, it + bt[0], it + bt[1]).forEach((n) => (n.customData.track = 'ghostTrack'));
        const walls = i % 2
            ? v3.Obstacle.create(
                { b: it + bt[0], d: 0.125, x: 3, y: 0 },
                { b: it + bt[0] + 0.25, d: 0.125, x: 4, y: 2 },
                { b: it + bt[0] + 0.5, d: 0.125, x: 5, y: 1, w: 2 },
                { b: it + bt[0] + 1, d: 0.125, x: 0, y: 0 },
                { b: it + bt[0] + 1.25, d: 0.125, x: -1, y: 2 },
                { b: it + bt[0] + 1.5, d: 0.125, x: -3, y: 1, w: 2 },
            )
            : v3.Obstacle.create(
                { b: it + bt[0], d: 0.125, x: 2, y: 2 },
                { b: it + bt[0] + 0.25, d: 0.125, x: 3, y: 0 },
                { b: it + bt[0] + 0.5, d: 0.125, x: 4, y: 1, w: 2 },
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
            let temp = v3.Obstacle.create(
                { b: it + bt[0] + 2, d: 1, x: 5, y: 1, w: 2 },
                { b: it + bt[0] + 3, d: 1, x: 4, y: 0 },
                { b: it + bt[0] + 3, d: 1, x: 4, y: 2 },
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
        osExpertP.obstacles.push(...walls);
        osExpert.obstacles.push(...walls);
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
    osExpertP.addSliders(
        { b: it + 6, tb: it + 6.5, c: 1, d: 6, tc: 3, x: 0, y: 0, tx: 0, ty: 2, m: 0 },
        { b: it + 7, tb: it + 7.5, c: 1, d: 6, tc: 3, x: 0, y: 0, tx: 0, ty: 2, m: 0 },
        { b: it + 14, tb: it + 14.5, c: 1, d: 2, tc: 4, x: 2, y: 0, tx: 3, ty: 2 },
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
    );
    osExpert.addSliders(
        { b: it + 6, tb: it + 6.5, c: 1, d: 6, tc: 3, x: 0, y: 0, tx: 0, ty: 2, m: 0 },
        { b: it + 7, tb: it + 7.5, c: 1, d: 6, tc: 3, x: 0, y: 0, tx: 0, ty: 2, m: 0 },
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
    );
    flipFlop = !flipFlop;
}
for (const ct of chorusTime) {
    let walls = v3.Obstacle.create(
        {
            b: ct - 1,
            d: 0.5,
            x: 6,
            y: 2,
            w: 3,
            h: 1,
            customData: { color: [0.25, 0.25, 0.25, 1] },
        },
        {
            b: ct - 0.5,
            d: 0.25,
            x: 5,
            y: 1,
            w: 1,
            h: 3,
            customData: { color: [0.5, 0.5, 0.5, 1] },
        },
        {
            b: ct - 0.25,
            d: 0.25,
            x: 4,
            y: 0,
            w: 1,
            h: 5,
            customData: { color: [1, 1, 1, 1] },
        },
    );
    walls = walls.concat(walls.concat(walls.map((w) => w.clone().mirror())));
    const arr = [0, 1, 2, 3];
    utils.shuffle(arr);
    for (let i = 0; i < 3; i++) {
        for (const a in arr) {
            walls.push(
                v3.Obstacle.create({
                    b: ct - 4 + i + parseInt(a) * 0.25,
                    d: 0.25,
                    x: arr[a],
                    y: 0,
                    customData: { color: [0, 0, 0, 1] },
                })[0],
            );
        }
        utils.shuffle(arr);
    }
    osExpertP.obstacles.push(...walls);
    osExpert.obstacles.push(...walls);
}

for (const _ of chorus2Time) {
    flipFlop = !flipFlop;
}
for (let i = 0; i < 6; i++) {
    // setGradientColor(between(notes, 472 + i * 4, 474 + i * 4), [315, 1, 0.875], [360, 1, 1]);
    flipFlop = !flipFlop;
}

{
    const walls = v3.Obstacle.create(
        {
            b: 404,
            d: 4,
            x: 0,
            y: 0,
            customData: { color: [0, 0, 0, 1] },
        },
        {
            b: 408,
            d: 4,
            x: 1,
            y: 0,
            customData: { color: [0, 0, 0, 1] },
        },
        {
            b: 412,
            d: 4,
            x: 3,
            y: 0,
            customData: { color: [0, 0, 0, 1] },
        },
        {
            b: 416,
            d: 4,
            x: 2,
            y: 0,
            customData: { color: [0, 0, 0, 1] },
        },
        {
            b: 420,
            d: 4,
            x: 0,
            y: 0,
            customData: { color: [0, 0, 0, 1] },
        },
        {
            b: 424,
            d: 4,
            x: 1,
            y: 0,
            customData: { color: [0, 0, 0, 1] },
        },
        {
            b: 428,
            d: 4,
            x: 3,
            y: 0,
            customData: { color: [0, 0, 0, 1] },
        },
    );
    osExpertP.obstacles.push(...walls);
    osExpert.obstacles.push(...walls);
}

osExpertP.addBurstSliders(
    { b: 11.5, tb: 11.625, c: 1, d: 5, tx: 1, ty: 2, s: 0.75, sc: 4 },
    { b: 17.5, tb: 17.625, c: 1, d: 7, x: 2, y: 1, tx: 3, sc: 4 },
    { b: 543.5, tb: 543.625, c: 1, d: 6, x: 3, y: 2, tx: 2, s: 0.75, sc: 4 },
    { b: 549.5, tb: 549.625, c: 1, d: 5, x: 2, tx: 3, ty: 1, sc: 4 },
);
osExpertP.addSliders(
    { b: 179, tb: 180, c: 1, d: 2, tc: 2, x: 1, tx: 1, m: 1 },
    { b: 339, tb: 340, c: 1, d: 2, tc: 3, y: 1, tx: 1, ty: 1 },
    { b: 500, tb: 502, c: 1, d: 2, tc: 2, x: 1, y: 1, tx: 1, ty: 2, m: 2 },
);
osExpert.addBurstSliders(
    { b: 11.5, tb: 11.625, c: 1, d: 5, tx: 1, ty: 2, s: 0.75, sc: 4 },
    { b: 17.5, tb: 17.625, c: 1, d: 7, x: 2, y: 1, tx: 3, sc: 4 },
    { b: 543.5, tb: 543.625, c: 1, d: 6, x: 3, y: 2, tx: 2, s: 0.75, sc: 4 },
    { b: 549.5, tb: 549.625, c: 1, d: 5, x: 2, tx: 3, ty: 1, sc: 4 },
);
osExpert.addSliders(
    { b: 179, tb: 180, c: 1, d: 2, tc: 2, x: 1, tx: 1, m: 1 },
    { b: 339, tb: 340, c: 1, d: 2, tc: 3, y: 1, tx: 1, ty: 1 },
    { b: 500, tb: 502, c: 1, d: 2, tc: 2, x: 1, y: 1, tx: 1, ty: 2, m: 2 },
);

const sliderApplyColor = (s: v3.Slider | v3.BurstSlider) => {
    const note = osExpert.colorNotes.filter((n) => n.time === s.time && n.posX === s.posX && n.posY === s.posY);
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
where(at(osExpert.colorNotes, 551), { include: { x: 0 } })
    .concat(where(at(osExpertP.colorNotes, 551), { include: { x: 0 } }))
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
where(at(osExpert.colorNotes, 551), { include: { x: 1 } })
    .concat(where(at(osExpertP.colorNotes, 551), { include: { x: 1 } }))
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
where(at(osExpert.colorNotes, 551), { include: { x: 2 } })
    .concat(where(at(osExpertP.colorNotes, 551), { include: { x: 2 } }))
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
where(at(osExpert.colorNotes, 551), { include: { x: 3 } })
    .concat(where(at(osExpertP.colorNotes, 551), { include: { x: 3 } }))
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

osExpert.sliders.forEach(sliderApplyColor);
osExpert.burstSliders.forEach(sliderApplyColor);
osExpertP.sliders.forEach(sliderApplyColor);
osExpertP.burstSliders.forEach(sliderApplyColor);

save.difficultySync(osExpertP);
save.difficultySync(osExpert);
