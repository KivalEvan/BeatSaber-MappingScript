import { ext, logger, types, utils, v3 } from '../../depsLocal.ts';

const EnvGrab = ext.chroma.EnvironmentGrab;

const moonSize = 250;
const moonYOffset = 310;

const sunSize = 6;

const toriiWidth = 8;
const toriiWidthExt = 6;
const toriiHeight = 8;
const toriiScale = 1.5;
const toriiPosOffset = [0, 0.75, 0];
const toriiYOffset = 48;
const toriiCount = 6;
const toriiGap = 80;
const toriiGapIncrement = 80;
const toriiSkipIncrement = 1;

const lanternPostPlayfield = 7;
const lanternPostOffset = -2;
const lanternPostSection = 4;
const lanternPostScale = 0.875;

const lanternBaseSize = 0.4375;
const lanternBaseHeight = 0.03125;
const lanternSize = 0.3;
const lanternHeight = 0.4375;
const lanternGap = 0.0625;
const lanternBorder = 0.01875;
const lanternScale = 1.125;

const waterfallOrder = [1, 6, 7, 0];

// regex for environment enhancement
const regexMountains = EnvGrab.create().child().name('Mountains').end().regex;
const regexClouds = EnvGrab.create().child().name('Clouds').end().regex;
const regexSun = EnvGrab.create('DayAndNight').child().name('Day').end().regex;
const regexMoon = EnvGrab.create('DayAndNight').child().name('Night').end().regex;
const regexTunnelLaser = EnvGrab.create()
    .child()
    .name('TunnelRotatingLasersPair')
    .id(null, true)
    .end().regex;
const regexSmoke = EnvGrab.create().child().name('BigSmokePS').end().regex;

const LANTERN_REROLL = 12_727;
const LANTERN_POST_PLAYFIELD_GAP = lanternPostPlayfield / 2;
export const generateEnvironment = (): types.v3.IChromaEnvironment[] => {
    const environment: types.v3.IChromaEnvironment[] = [];
    const pRandom = utils.pRandomFn('Torii');

    environment.push(
        {
            id: EnvGrab.Preset.ENVIRONMENT.regex,
            lookupMethod: 'Regex',
            components: { BloomFogEnvironment: { startY: -22.5, height: 15 } },
        },
        {
            id: EnvGrab.create('NarrowGameHUD').child().name('EnergyPanel').end().regex,
            lookupMethod: 'Regex',
            position: [0, 0.09375, 6.5],
        },
        {
            // really want to use this but hardcoded limitation has me need to disable
            id: EnvGrab.create().child().name('WaterRainRipples').end().regex,
            lookupMethod: 'Regex',
            active: false,
        },
        {
            id: regexSmoke,
            lookupMethod: 'Regex',
            scale: [10, 25, 12.5],
        },
        {
            id: regexMoon,
            lookupMethod: 'Regex',
            position: [0, -(moonSize * 16) + moonYOffset, 2048],
            scale: [moonSize, moonSize, 1],
            components: {
                TubeBloomPrePassLight: {
                    colorAlphaMultiplier: 256,
                    bloomFogIntensityMultiplier: 1,
                },
            },
        },
        {
            id: regexSun,
            lookupMethod: 'Regex',
            position: [0, 0, 1024],
            scale: [sunSize, sunSize, 1],
            components: {
                TubeBloomPrePassLight: {
                    colorAlphaMultiplier: 128,
                    bloomFogIntensityMultiplier: 1,
                },
            },
        },
        {
            id: regexTunnelLaser,
            lookupMethod: 'Regex',
            scale: [10, 10, 10],
        },
        {
            id: regexMountains,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: [0.75, 0.75, 1],
            rotation: [0, 180, 0],
        },
        {
            id: regexMountains,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: [0.5, 0.5, 1],
        },
        {
            id: regexMountains,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: [0.1875, 0.0625, 1],
            rotation: [0, 180, 0],
        },
        {
            id: '\\[\\d+\\]Waterfall$',
            lookupMethod: 'Regex',
            position: [0, 0, -88],
            scale: [50, 1.25, 1.25],
        },
        {
            geometry: { type: 'Plane', material: { shader: 'BaseWater' } },
            position: [0, -0.001, 0],
            scale: [100, 1, 100],
            rotation: [0, 180, 0],
        },
        {
            id: regexClouds,
            lookupMethod: 'Regex',
            scale: [16, 16, 16],
        },
        {
            id: '\\[\\d+\\](Left|Right)?(Far)?Rail(1|2)?$',
            lookupMethod: 'Regex',
            active: false,
        },
        {
            id: '\\[\\d+\\](Last)?Railing(Full(Back|Front)?)?$',
            lookupMethod: 'Regex',
            active: false,
        },
        {
            id: '\\[\\d+\\]LightRailingSegment(\\s\\(\\d+\\))?$',
            lookupMethod: 'Regex',
            active: false,
        }
    );

    const cubeBlock = ext.chroma.EnvironmentBlock.create(
        {
            geometry: { type: 'Cube', material: 'ToriiStandard' },
        },
        [0, 0, 0]
    );
    const cubeLight = ext.chroma.EnvironmentBlock.create(
        {
            geometry: { type: 'Cube', material: 'ToriiOpaqueLight' },
            components: {
                ILightWithId: { type: 0 },
                TubeBloomPrePassLight: {
                    colorAlphaMultiplier: 2,
                    bloomFogIntensityMultiplier: 0.25,
                },
            },
        },
        [0, 0, 0]
    );
    const pillarBlock = ext.chroma.EnvironmentBlock.create(
        {
            geometry: { type: 'Cylinder', material: 'ToriiStandard' },
        },
        [0, 0, 0]
    );
    const pillarLight = ext.chroma.EnvironmentBlock.create(
        {
            geometry: { type: 'Cylinder', material: 'ToriiTransparentLight' },
            components: {
                ILightWithId: { type: 0 },
                TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
            },
        },
        [0, 0, 0]
    );
    const sphereBlock = ext.chroma.EnvironmentBlock.create(
        {
            geometry: { type: 'Sphere', material: 'ToriiStandard' },
        },
        [0, 0, 0]
    );

    const torii: types.v3.IChromaEnvironment[] = [];
    pillarBlock.place(
        {
            position: [toriiWidth / 2, toriiHeight / 2, 0],
            scale: [1, toriiHeight / 2, 1],
        },
        torii
    );
    pillarBlock.place(
        {
            position: [-toriiWidth / 2, toriiHeight / 2, 0],
            scale: [1, toriiHeight / 2, 1],
        },
        torii
    );

    cubeBlock.place(
        {
            position: [0, toriiHeight + 0.875, 0],
            scale: [toriiWidth + toriiWidthExt + 0.25, 0.5, 1],
        },
        torii
    );
    cubeBlock.place(
        {
            position: [0, toriiHeight + 0.625, 0],
            scale: [toriiWidth + toriiWidthExt + 1, 0.5, 0.25],
        },
        torii
    );
    cubeBlock.place(
        {
            position: [0, toriiHeight + 0.375, 0],
            scale: [toriiWidth + toriiWidthExt, 0.5, 0.5],
        },
        torii
    );
    cubeBlock.place(
        {
            position: [0, toriiHeight - 2 + 0.625, 0],
            scale: [toriiWidth + toriiWidthExt, 0.75, 0.5],
        },
        torii
    );

    cubeBlock.place(
        { position: [0, toriiHeight - 1 + 0.5625, 0], scale: [1.25, 1.125, 0.25] },
        torii
    );
    cubeBlock.place(
        {
            position: [toriiWidth / 2, toriiHeight - 1 + 0.25, 0],
            scale: [1.75, 0.5, 0.125],
        },
        torii
    );
    cubeBlock.place(
        {
            position: [-toriiWidth / 2, toriiHeight - 1 + 0.25, 0],
            scale: [1.75, 0.5, 0.125],
        },
        torii
    );
    375;
    cubeBlock.place(
        {
            position: [-toriiWidth / 2 - toriiWidthExt / 2 - 0.625, toriiHeight + 1.02, 0],
            scale: [1.1875, 0.5, 1],
            rotation: [0, 0, -15],
        },
        torii
    );
    cubeBlock.place(
        {
            position: [toriiWidth / 2 + toriiWidthExt / 2 + 0.625, toriiHeight + 1.02, 0],
            scale: [1.1875, 0.5, 1],
            rotation: [0, 0, 15],
        },
        torii
    );

    pillarBlock.place(
        {
            position: [toriiWidth / 2, toriiHeight + 0.125, 0],
            scale: [1.25, 0.125, 1.25],
            rotation: [0, 0, 0],
        },
        torii
    );
    pillarBlock.place(
        {
            position: [toriiWidth / 2, toriiHeight - 1 + 0.0625, 0],
            scale: [1.125, 0.0625, 1.125],
            rotation: [0, 0, 0],
        },
        torii
    );
    pillarBlock.place(
        {
            position: [toriiWidth / 2, toriiHeight - 2 + 0.1875, 0],
            scale: [1.125, 0.0625, 1.125],
            rotation: [0, 0, 0],
        },
        torii
    );
    pillarBlock.place(
        {
            position: [toriiWidth / 2, 0.25, 0],
            scale: [1.25, 0.125, 1.25],
            rotation: [0, 0, 0],
        },
        torii
    );
    pillarBlock.place(
        {
            position: [toriiWidth / 2, -128, 0],
            scale: [1.375, 128, 1.375],
            rotation: [0, 0, 0],
        },
        torii
    );
    pillarBlock.place(
        {
            position: [-toriiWidth / 2, toriiHeight + 0.125, 0],
            scale: [1.25, 0.125, 1.25],
            rotation: [0, 0, 0],
        },
        torii
    );
    pillarBlock.place(
        {
            position: [-toriiWidth / 2, toriiHeight - 1 + 0.0625, 0],
            scale: [1.125, 0.0625, 1.125],
            rotation: [0, 0, 0],
        },
        torii
    );
    pillarBlock.place(
        {
            position: [-toriiWidth / 2, toriiHeight - 2 + 0.1875, 0],
            scale: [1.125, 0.0625, 1.125],
            rotation: [0, 0, 0],
        },
        torii
    );
    pillarBlock.place(
        {
            position: [-toriiWidth / 2, 0.25, 0],
            scale: [1.25, 0.125, 1.25],
            rotation: [0, 0, 0],
        },
        torii
    );
    pillarBlock.place(
        {
            position: [-toriiWidth / 2, -128, 0],
            scale: [1.375, 128, 1.375],
            rotation: [0, 0, 0],
        },
        torii
    );

    const toriiGroup = ext.chroma.EnvironmentGroup.create(torii, [0, 0, 0]);
    toriiGroup.place(
        {
            position: utils.vectorTranslate([0, 0, toriiYOffset - toriiGap], toriiPosOffset),
            scale: utils.vectorScale([1, 1, 1], toriiScale),
        },
        environment
    );
    for (let z = 0; z < toriiCount; z++) {
        toriiGroup.place(
            {
                position: utils.vectorTranslate(
                    [
                        0,
                        0,
                        toriiYOffset +
                            z *
                                (toriiGap +
                                    (z <= toriiSkipIncrement
                                        ? 0
                                        : toriiGapIncrement * (z - toriiSkipIncrement))),
                    ],
                    toriiPosOffset
                ),
                scale: utils.vectorScale([1, 1, 1], toriiScale),
            },
            environment
        );
    }

    const lanternPost: types.v3.IChromaEnvironment[] = [];
    cubeBlock.place({ position: [0, 0.125, 0], scale: [1, 0.25, 0.3125] }, lanternPost);
    cubeBlock.place({ position: [0, 0.125, 0], scale: [0.3125, 0.25, 1] }, lanternPost);
    cubeBlock.place({ position: [0, 0.375, 0], scale: [0.75, 0.25, 0.3125] }, lanternPost);
    cubeBlock.place({ position: [0, 0.375, 0], scale: [0.3125, 0.25, 0.75] }, lanternPost);
    cubeBlock.place({ position: [0, 0.75, 0], scale: [0.4375, 1.5, 0.4375] }, lanternPost);
    cubeBlock.place({ position: [0, 1.53125, 0], scale: [0.625, 0.0625, 0.625] }, lanternPost);
    cubeBlock.place({ position: [0, 1.625, 0], scale: [0.75, 0.125, 0.75] }, lanternPost);
    cubeBlock.place({ position: [0, 1.75, 0], scale: [0.625, 0.125, 0.625] }, lanternPost);
    cubeBlock.place({ position: [0.25, 2, 0.25], scale: [0.125, 0.375, 0.125] }, lanternPost);
    cubeBlock.place({ position: [0.25, 2, -0.25], scale: [0.125, 0.375, 0.125] }, lanternPost);
    cubeBlock.place({ position: [-0.25, 2, 0.25], scale: [0.125, 0.375, 0.125] }, lanternPost);
    cubeBlock.place({ position: [-0.25, 2, -0.25], scale: [0.125, 0.375, 0.125] }, lanternPost);
    cubeBlock.place({ position: [0, 2, 0], scale: [0.03125, 0.5625, 0.5625] }, lanternPost);
    cubeBlock.place({ position: [0, 2, 0], scale: [0.5625, 0.03125, 0.5625] }, lanternPost);
    cubeBlock.place({ position: [0, 2, 0], scale: [0.5625, 0.5625, 0.03125] }, lanternPost);
    cubeLight.place({ position: [0, 2, 0], scale: [0.5, 0.375, 0.5] }, lanternPost);
    cubeBlock.place({ position: [0, 2.21875, 0], scale: [0.625, 0.0625, 0.625] }, lanternPost);
    cubeBlock.place({ position: [0, 2.28125, 0], scale: [0.75, 0.0625, 0.75] }, lanternPost);
    cubeBlock.place({ position: [0, 2.34375, 0], scale: [0.875, 0.0625, 0.875] }, lanternPost);
    cubeBlock.place({ position: [0, 2.40625, 0], scale: [0.625, 0.0625, 0.625] }, lanternPost);
    cubeBlock.place({ position: [0, 2.46875, 0], scale: [0.375, 0.0625, 0.375] }, lanternPost);
    cubeBlock.place({ position: [0, 2.53125, 0], scale: [0.25, 0.0625, 0.25] }, lanternPost);
    pillarBlock.place(
        { position: [0, 2.578125, 0], scale: [0.125, 0.03125 / 2, 0.125] },
        lanternPost
    );
    pillarBlock.place({ position: [0, 2.625, 0], scale: [0.1875, 0.125 / 4, 0.1875] }, lanternPost);
    sphereBlock.place({ position: [0, 2.65625, 0], scale: [0.1875, 0.1875, 0.1875] }, lanternPost);

    pillarLight.place(
        {
            position: [-(LANTERN_POST_PLAYFIELD_GAP - 0.75), 0.03125, -250],
            rotation: [90, 0, 0],
            scale: [0.25, 257, 0.25],
            type: 1,
        },
        environment
    );
    pillarLight.place(
        {
            position: [LANTERN_POST_PLAYFIELD_GAP - 0.75, 0.03125, -250],
            rotation: [90, 0, 0],
            scale: [0.25, 257, 0.25],
            type: 1,
        },
        environment
    );
    const lanternPostGroup = ext.chroma.EnvironmentGroup.create(lanternPost, [0, 0, 0]);
    for (let z = 0; z < toriiCount * lanternPostSection; z++) {
        const toriiZ = Math.floor(Math.abs((lanternPostOffset + z) / lanternPostSection));
        const lanternZ = Math.floor((lanternPostOffset + z) / lanternPostSection) + 1;
        const distance =
            (toriiGap +
                (lanternZ <= toriiSkipIncrement
                    ? 0
                    : toriiGapIncrement * (lanternZ - toriiSkipIncrement + 1))) /
            lanternPostSection;
        pillarLight.place(
            {
                position: [
                    -(LANTERN_POST_PLAYFIELD_GAP - 0.75),
                    0.03125,
                    toriiYOffset +
                        toriiZ *
                            (toriiGap +
                                (toriiZ <= toriiSkipIncrement
                                    ? 0
                                    : toriiGapIncrement * (toriiZ - toriiSkipIncrement))) +
                        ((lanternPostOffset + z) % lanternPostSection) * distance +
                        distance / 2,
                ],
                rotation: [90, 0, 0],
                scale: [0.25, distance / 2 - 1, 0.25],
                type: waterfallOrder[(z + 1) % 4],
            },
            environment
        );
        lanternPostGroup.place(
            {
                position: [
                    -LANTERN_POST_PLAYFIELD_GAP,
                    0,
                    toriiYOffset +
                        toriiZ *
                            (toriiGap +
                                (toriiZ <= toriiSkipIncrement
                                    ? 0
                                    : toriiGapIncrement * (toriiZ - toriiSkipIncrement))) +
                        ((z + lanternPostOffset) % lanternPostSection) * distance,
                ],
                type: waterfallOrder[z % 4],
                scale: [lanternPostScale, lanternPostScale, lanternPostScale],
            },
            environment
        );
        pillarLight.place(
            {
                position: [
                    LANTERN_POST_PLAYFIELD_GAP - 0.75,
                    0.03125,
                    toriiYOffset +
                        toriiZ *
                            (toriiGap +
                                (toriiZ <= toriiSkipIncrement
                                    ? 0
                                    : toriiGapIncrement * (toriiZ - toriiSkipIncrement))) +
                        ((z + lanternPostOffset) % lanternPostSection) * distance +
                        distance / 2,
                ],
                rotation: [90, 0, 0],
                scale: [0.25, distance / 2 - 1, 0.25],
                type: waterfallOrder[(z + 1) % 4],
            },
            environment
        );
        lanternPostGroup.place(
            {
                position: [
                    LANTERN_POST_PLAYFIELD_GAP,
                    0,
                    toriiYOffset +
                        toriiZ *
                            (toriiGap +
                                (toriiZ <= toriiSkipIncrement
                                    ? 0
                                    : toriiGapIncrement * (toriiZ - toriiSkipIncrement))) +
                        ((z + lanternPostOffset) % lanternPostSection) * distance,
                ],
                type: waterfallOrder[z % 4],
                scale: [lanternPostScale, lanternPostScale, lanternPostScale],
            },
            environment
        );
    }

    const lantern: types.v3.IChromaEnvironment[] = [];
    // base
    cubeBlock.place(
        {
            position: [0, lanternBaseHeight / 2, 0],
            scale: [lanternBaseSize, lanternBaseHeight, lanternBaseSize],
        },
        lantern
    );
    // border vertical
    cubeBlock.place(
        {
            position: [
                lanternSize / 2,
                lanternBaseHeight / 2 + lanternHeight / 2 + lanternGap / 4 + lanternBorder / 2,
                lanternSize / 2,
            ],
            scale: [
                lanternBorder,
                lanternHeight + lanternGap / 2 + lanternBorder / 2,
                lanternBorder,
            ],
        },
        lantern
    );
    cubeBlock.place(
        {
            position: [
                lanternSize / 2,
                lanternBaseHeight / 2 + lanternHeight / 2 + lanternGap / 4 + lanternBorder / 2,
                -lanternSize / 2,
            ],
            scale: [
                lanternBorder,
                lanternHeight + lanternGap / 2 + lanternBorder / 2,
                lanternBorder,
            ],
        },
        lantern
    );
    cubeBlock.place(
        {
            position: [
                -lanternSize / 2,
                lanternBaseHeight / 2 + lanternHeight / 2 + lanternGap / 4 + lanternBorder / 2,
                lanternSize / 2,
            ],
            scale: [
                lanternBorder,
                lanternHeight + lanternGap / 2 + lanternBorder / 2,
                lanternBorder,
            ],
        },
        lantern
    );
    cubeBlock.place(
        {
            position: [
                -lanternSize / 2,
                lanternBaseHeight / 2 + lanternHeight / 2 + lanternGap / 4 + lanternBorder / 2,
                -lanternSize / 2,
            ],
            scale: [
                lanternBorder,
                lanternHeight + lanternGap / 2 + lanternBorder / 2,
                lanternBorder,
            ],
        },
        lantern
    );
    // border horizontal
    cubeBlock.place(
        {
            position: [lanternSize / 2, lanternBaseHeight + lanternHeight + lanternGap / 2, 0],
            scale: [lanternBorder, lanternBorder, lanternSize + lanternBorder],
        },
        lantern
    );
    cubeBlock.place(
        {
            position: [-lanternSize / 2, lanternBaseHeight + lanternHeight + lanternGap / 2, 0],
            scale: [lanternBorder, lanternBorder, lanternSize + lanternBorder],
        },
        lantern
    );
    cubeBlock.place(
        {
            position: [0, lanternBaseHeight + lanternHeight + lanternGap / 2, lanternSize / 2],
            scale: [lanternSize + lanternBorder, lanternBorder, lanternBorder],
        },
        lantern
    );
    cubeBlock.place(
        {
            position: [0, lanternBaseHeight + lanternHeight + lanternGap / 2, -lanternSize / 2],
            scale: [lanternSize + lanternBorder, lanternBorder, lanternBorder],
        },
        lantern
    );
    // light itself
    cubeLight.place(
        {
            position: [0, lanternBaseHeight + lanternGap / 2 + lanternHeight / 2, 0],
            scale: [lanternSize, lanternHeight, lanternSize],
        },
        lantern
    );

    for (let reroll = 0; reroll++ < LANTERN_REROLL; ) {
        pRandom();
    }
    const lanternGroup = ext.chroma.EnvironmentGroup.create(lantern, [0, 0, 0]);
    const lanternYGap = 8;
    for (let z = 0; z < 10; z++) {
        let pos: types.Vector3 = [
            pRandom(LANTERN_POST_PLAYFIELD_GAP + 0.75, LANTERN_POST_PLAYFIELD_GAP + 3),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            -pRandom(LANTERN_POST_PLAYFIELD_GAP + 0.75, LANTERN_POST_PLAYFIELD_GAP + 3),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            pRandom(LANTERN_POST_PLAYFIELD_GAP + 3, LANTERN_POST_PLAYFIELD_GAP + 4),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            -pRandom(LANTERN_POST_PLAYFIELD_GAP + 3, LANTERN_POST_PLAYFIELD_GAP + 4),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            pRandom(LANTERN_POST_PLAYFIELD_GAP + 4, LANTERN_POST_PLAYFIELD_GAP + 6),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            -pRandom(LANTERN_POST_PLAYFIELD_GAP + 4, LANTERN_POST_PLAYFIELD_GAP + 6),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            pRandom(LANTERN_POST_PLAYFIELD_GAP + 6, LANTERN_POST_PLAYFIELD_GAP + 8),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            -pRandom(LANTERN_POST_PLAYFIELD_GAP + 6, LANTERN_POST_PLAYFIELD_GAP + 8),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            pRandom(LANTERN_POST_PLAYFIELD_GAP + 8, LANTERN_POST_PLAYFIELD_GAP + 12),
            0,
            -32 + z * lanternYGap + pRandom(2),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            -pRandom(LANTERN_POST_PLAYFIELD_GAP + 8, LANTERN_POST_PLAYFIELD_GAP + 12),
            0,
            -32 + z * lanternYGap + pRandom(2),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            pRandom(LANTERN_POST_PLAYFIELD_GAP + 12, LANTERN_POST_PLAYFIELD_GAP + 16),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            -pRandom(LANTERN_POST_PLAYFIELD_GAP + 12, LANTERN_POST_PLAYFIELD_GAP + 16),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            pRandom(LANTERN_POST_PLAYFIELD_GAP + 16, LANTERN_POST_PLAYFIELD_GAP + 28),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            -pRandom(LANTERN_POST_PLAYFIELD_GAP + 16, LANTERN_POST_PLAYFIELD_GAP + 28),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            pRandom(LANTERN_POST_PLAYFIELD_GAP + 28, LANTERN_POST_PLAYFIELD_GAP + 46),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
        pos = [
            -pRandom(LANTERN_POST_PLAYFIELD_GAP + 28, LANTERN_POST_PLAYFIELD_GAP + 46),
            0,
            -32 + z * lanternYGap + pRandom(lanternYGap),
        ];
        lanternGroup.place(
            {
                position: pos,
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
                scale: [lanternScale, lanternScale, lanternScale],
            },
            environment
        );
    }

    for (let i = 0; i < 9; i++) {
        let regexPillarL, regexPillarR;
        if (i === 0) {
            regexPillarL = EnvGrab.create('BottomPairLasers').child().name('PillarL').end().regex;
            regexPillarR = EnvGrab.create('BottomPairLasers').child().name('PillarR').end().regex;
        } else {
            regexPillarL = EnvGrab.create('BottomPairLasers')
                .id(i)
                .child()
                .name('PillarL')
                .end().regex;
            regexPillarR = EnvGrab.create('BottomPairLasers')
                .id(i)
                .child()
                .name('PillarR')
                .end().regex;
        }
        environment.push(
            {
                id: regexPillarL,
                lookupMethod: 'Regex',
                position: [-25 + i * 2, 1.25 - i * 0.1875, 32 + i * 4],
                rotation: [-25 + i * 5, 27 - i * 3, 300],
                components: {
                    TubeBloomPrePassLight: {
                        colorAlphaMultiplier: 2.5,
                        bloomFogIntensityMultiplier: 1,
                    },
                },
            },
            {
                id: regexPillarR,
                lookupMethod: 'Regex',
                position: [25 - i * 2, 1.25 - i * 0.1875, 32 + i * 4],
                rotation: [-25 + i * 5, 333 + i * 3, 60],
                components: {
                    TubeBloomPrePassLight: {
                        colorAlphaMultiplier: 2.5,
                        bloomFogIntensityMultiplier: 1,
                    },
                },
            }
        );
    }

    return environment;
};

export function generateMaterial() {
    return {
        ToriiStandard: { shader: 'Standard' },
        ToriiOpaqueLight: { shader: 'OpaqueLight' },
        ToriiTransparentLight: { shader: 'TransparentLight' },
    } as Record<string, types.v3.IChromaMaterial>;
}

export const insertEnvironment = (d: v3.Difficulty) => {
    if (d.customData.environment?.length) {
        logger.warn('Environment enhancement previously existed, replacing');
    }
    d.customData.environment = generateEnvironment();
    d.customData.materials = generateMaterial();
};

if (import.meta.main) {
    Deno.writeTextFileSync(
        import.meta.url.replace('file://', '').replace('environment.ts', './Torii.dat'),
        JSON.stringify({
            version: '1.0.0',
            name: 'Torii',
            author: 'Kival Evan',
            environmentVersion: '1.1.0',
            environmentName: 'BillieEnvironment',
            description: 'Vanilla-compatible environment.',
            features: {},
            environment: generateEnvironment(),
            materials: generateMaterial(),
        } as types.external.IEnvironmentJSON)
    );
    console.log('Written Torii environment JSON');
}
