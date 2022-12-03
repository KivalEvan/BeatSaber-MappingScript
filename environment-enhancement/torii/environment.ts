import { ext, logger, types, utils, v3 } from '../../depsLocal.ts';

const EnvGrab = ext.chroma.EnvironmentGrab;

const toriiWidth = 8;
const toriiWidthExt = 6;
const toriiHeight = 8;
const toriiScale = 2;
const toriiPosOffset = [0, 0.75, 0];

const lanternBaseSize = 0.5;
const lanternBaseHeight = 0.0625;
const lanternSize = 0.375;
const lanternHeight = 0.5;
const lanternGap = 0.09375;
const lanternBorder = 0.03125;

// regex for environment enhancement
const regexMountains = EnvGrab.create().child().name('Mountains').end().regex;
const regexClouds = EnvGrab.create().child().name('Clouds').end().regex;
const regexSun = EnvGrab.create('DayAndNight').child().name('Day').end().regex;
const regexMoon = EnvGrab.create('DayAndNight').child().name('Night').end().regex;
const regexTunnelLaser = EnvGrab.create().child().name('TunnelRotatingLasersPair').id(null, true).end().regex;
const regexSmoke = EnvGrab.create().child().name('BigSmokePS').end().regex;

export const generateEnvironment = (): types.v3.IChromaEnvironment[] => {
    const environment: types.v3.IChromaEnvironment[] = [];
    const pRandom = utils.pRandomFn('Torii');

    environment.push(
        {
            id: EnvGrab.create().child().name('Environment').end().regex,
            lookupMethod: 'Regex',
            components: { BloomFogEnvironment: { startY: -22.5, height: 15 } },
        },
        {
            id: EnvGrab.create('NarrowGameHUD').child().name('EnergyPanel').end().regex,
            lookupMethod: 'Regex',
            position: [0, 0.09375, 6.5],
        },
        {
            // really  want to use this but hardcoded limitation has me need to disable
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
            position: [0, -1475, 512],
            scale: [100, 100, 1],
            components: {
                TubeBloomPrePassLight: { colorAlphaMultiplier: 64, bloomFogIntensityMultiplier: 1 },
            },
        },
        {
            id: regexSun,
            lookupMethod: 'Regex',
            position: [0, 0, 512],
            scale: [4, 4, 1],
            components: {
                TubeBloomPrePassLight: { colorAlphaMultiplier: 64, bloomFogIntensityMultiplier: 1 },
            },
        },
        {
            id: regexTunnelLaser,
            lookupMethod: 'Regex',
            scale: [15, 15, 15],
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
            position: [0, 0, -48],
            scale: [50, 1, 1],
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
        },
    );

    const cubeBlock = ext.chroma.EnvironmentBlock.create(
        {
            geometry: { type: 'Cube', material: 'ToriiStandard' },
        },
        [0, 0, 0],
    );
    const cubeLight = ext.chroma.EnvironmentBlock.create(
        {
            geometry: { type: 'Cube', material: 'ToriiOpaqueLight' },
            components: {
                ILightWithId: { type: 0 },
                TubeBloomPrePassLight: { colorAlphaMultiplier: 2, bloomFogIntensityMultiplier: 0.25 },
            },
        },
        [0, 0, 0],
    );
    const pillarBlock = ext.chroma.EnvironmentBlock.create(
        {
            geometry: { type: 'Cylinder', material: 'ToriiStandard' },
        },
        [0, 0, 0],
    );
    const pillarLight = ext.chroma.EnvironmentBlock.create(
        {
            geometry: { type: 'Cylinder', material: 'ToriiTransparentLight' },
            components: {
                ILightWithId: { type: 0 },
                TubeBloomPrePassLight: { colorAlphaMultiplier: 2 },
            },
        },
        [0, 0, 0],
    );
    const sphereBlock = ext.chroma.EnvironmentBlock.create(
        {
            geometry: { type: 'Sphere', material: 'ToriiStandard' },
        },
        [0, 0, 0],
    );

    const torii: types.v3.IChromaEnvironment[] = [];
    pillarBlock.place({ position: [toriiWidth / 2, toriiHeight / 2, 0], scale: [1, toriiHeight / 2, 1] }, torii);
    pillarBlock.place({ position: [-toriiWidth / 2, toriiHeight / 2, 0], scale: [1, toriiHeight / 2, 1] }, torii);

    cubeBlock.place(
        { position: [0, toriiHeight + 0.875, 0], scale: [toriiWidth + toriiWidthExt + 0.25, 0.5, 1] },
        torii,
    );
    cubeBlock.place(
        { position: [0, toriiHeight + 0.625, 0], scale: [toriiWidth + toriiWidthExt + 1, 0.5, 0.25] },
        torii,
    );
    cubeBlock.place({ position: [0, toriiHeight + 0.375, 0], scale: [toriiWidth + toriiWidthExt, 0.5, 0.5] }, torii);
    cubeBlock.place(
        { position: [0, toriiHeight - 2 + 0.625, 0], scale: [toriiWidth + toriiWidthExt, 0.75, 0.5] },
        torii,
    );

    cubeBlock.place({ position: [0, toriiHeight - 1 + 0.5625, 0], scale: [1.25, 1.125, 0.25] }, torii);
    cubeBlock.place({ position: [toriiWidth / 2, toriiHeight - 1 + 0.25, 0], scale: [1.75, 0.5, 0.125] }, torii);
    cubeBlock.place({ position: [-toriiWidth / 2, toriiHeight - 1 + 0.25, 0], scale: [1.75, 0.5, 0.125] }, torii);
    375;
    cubeBlock.place(
        {
            position: [-toriiWidth / 2 - toriiWidthExt / 2 - 0.625, toriiHeight + 1.02, 0],
            scale: [1.1875, 0.5, 1],
            rotation: [0, 0, -15],
        },
        torii,
    );
    cubeBlock.place(
        {
            position: [toriiWidth / 2 + toriiWidthExt / 2 + 0.625, toriiHeight + 1.02, 0],
            scale: [1.1875, 0.5, 1],
            rotation: [0, 0, 15],
        },
        torii,
    );

    pillarBlock.place(
        { position: [toriiWidth / 2, toriiHeight + 0.125, 0], scale: [1.25, 0.125, 1.25], rotation: [0, 0, 0] },
        torii,
    );
    pillarBlock.place(
        { position: [toriiWidth / 2, toriiHeight - 1 + 0.0625, 0], scale: [1.125, 0.0625, 1.125], rotation: [0, 0, 0] },
        torii,
    );
    pillarBlock.place(
        { position: [toriiWidth / 2, toriiHeight - 2 + 0.1875, 0], scale: [1.125, 0.0625, 1.125], rotation: [0, 0, 0] },
        torii,
    );
    pillarBlock.place({ position: [toriiWidth / 2, 0.25, 0], scale: [1.25, 0.125, 1.25], rotation: [0, 0, 0] }, torii);
    pillarBlock.place({ position: [toriiWidth / 2, -128, 0], scale: [1.375, 128, 1.375], rotation: [0, 0, 0] }, torii);
    pillarBlock.place(
        { position: [-toriiWidth / 2, toriiHeight + 0.125, 0], scale: [1.25, 0.125, 1.25], rotation: [0, 0, 0] },
        torii,
    );
    pillarBlock.place(
        {
            position: [-toriiWidth / 2, toriiHeight - 1 + 0.0625, 0],
            scale: [1.125, 0.0625, 1.125],
            rotation: [0, 0, 0],
        },
        torii,
    );
    pillarBlock.place(
        {
            position: [-toriiWidth / 2, toriiHeight - 2 + 0.1875, 0],
            scale: [1.125, 0.0625, 1.125],
            rotation: [0, 0, 0],
        },
        torii,
    );
    pillarBlock.place({ position: [-toriiWidth / 2, 0.25, 0], scale: [1.25, 0.125, 1.25], rotation: [0, 0, 0] }, torii);
    pillarBlock.place({ position: [-toriiWidth / 2, -128, 0], scale: [1.375, 128, 1.375], rotation: [0, 0, 0] }, torii);

    const toriiGroup = ext.chroma.EnvironmentGroup.create(torii, [0, 0, 0]);
    for (let z = -1; z < 8; z++) {
        toriiGroup.place(
            {
                position: utils.vectorTranslate([0, 0, 48 + z * 80], toriiPosOffset),
                scale: utils.vectorScale([1, 1, 1], toriiScale),
            },
            environment,
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
    pillarBlock.place({ position: [0, 2.578125, 0], scale: [0.125, 0.03125 / 2, 0.125] }, lanternPost);
    pillarBlock.place({ position: [0, 2.625, 0], scale: [0.1875, 0.125 / 4, 0.1875] }, lanternPost);
    sphereBlock.place({ position: [0, 2.65625, 0], scale: [0.1875, 0.1875, 0.1875] }, lanternPost);

    pillarLight.place(
        {
            position: [3.25, 0.03125, -250],
            rotation: [90, 0, 0],
            scale: [0.25, 257, 0.25],
            type: 1,
        },
        environment,
    );
    pillarLight.place(
        {
            position: [-3.25, 0.03125, -250],
            rotation: [90, 0, 0],
            scale: [0.25, 257, 0.25],
            type: 1,
        },
        environment,
    );
    const lanternPostGroup = ext.chroma.EnvironmentGroup.create(lanternPost, [0, 0, 0]);
    for (let z = 0; z < 16; z++) {
        pillarLight.place(
            {
                position: [3.25, 0.03125, 8 + z * 20 + 10],
                rotation: [90, 0, 0],
                scale: [0.25, 9, 0.25],
                type: [1, 6, 7, 0][(z + 1) % 4],
            },
            environment,
        );
        pillarLight.place(
            {
                position: [-3.25, 0.03125, 8 + z * 20 + 10],
                rotation: [90, 0, 0],
                scale: [0.25, 9, 0.25],
                type: [1, 6, 7, 0][(z + 1) % 4],
            },
            environment,
        );
        lanternPostGroup.place({ position: [4, 0, 8 + z * 20], type: [1, 6, 7, 0][z % 4] }, environment);
        lanternPostGroup.place({ position: [-4, 0, 8 + z * 20], type: [1, 6, 7, 0][z % 4] }, environment);
    }

    const lantern: types.v3.IChromaEnvironment[] = [];
    // base
    cubeBlock.place(
        { position: [0, lanternBaseHeight / 2, 0], scale: [lanternBaseSize, lanternBaseHeight, lanternBaseSize] },
        lantern,
    );
    // border vertical
    cubeBlock.place(
        {
            position: [
                lanternSize / 2,
                lanternBaseHeight / 2 + lanternHeight / 2 + lanternGap / 2 + lanternBorder / 2,
                lanternSize / 2,
            ],
            scale: [lanternBorder, lanternHeight + lanternGap / 2 + lanternBorder / 2, lanternBorder],
        },
        lantern,
    );
    cubeBlock.place(
        {
            position: [
                lanternSize / 2,
                lanternBaseHeight / 2 + lanternHeight / 2 + lanternGap / 2 + lanternBorder / 2,
                -lanternSize / 2,
            ],
            scale: [lanternBorder, lanternHeight + lanternGap / 2 + lanternBorder / 2, lanternBorder],
        },
        lantern,
    );
    cubeBlock.place(
        {
            position: [
                -lanternSize / 2,
                lanternBaseHeight / 2 + lanternHeight / 2 + lanternGap / 2 + lanternBorder / 2,
                lanternSize / 2,
            ],
            scale: [lanternBorder, lanternHeight + lanternGap / 2 + lanternBorder / 2, lanternBorder],
        },
        lantern,
    );
    cubeBlock.place(
        {
            position: [
                -lanternSize / 2,
                lanternBaseHeight / 2 + lanternHeight / 2 + lanternGap / 2 + lanternBorder / 2,
                -lanternSize / 2,
            ],
            scale: [lanternBorder, lanternHeight + lanternGap / 2 + lanternBorder / 2, lanternBorder],
        },
        lantern,
    );
    // border horizontal
    cubeBlock.place(
        {
            position: [lanternSize / 2, lanternBaseHeight + lanternHeight + lanternGap / 2, 0],
            scale: [lanternBorder, lanternBorder, lanternSize + lanternBorder],
        },
        lantern,
    );
    cubeBlock.place(
        {
            position: [-lanternSize / 2, lanternBaseHeight + lanternHeight + lanternGap / 2, 0],
            scale: [lanternBorder, lanternBorder, lanternSize + lanternBorder],
        },
        lantern,
    );
    cubeBlock.place(
        {
            position: [0, lanternBaseHeight + lanternHeight + lanternGap / 2, lanternSize / 2],
            scale: [lanternSize + lanternBorder, lanternBorder, lanternBorder],
        },
        lantern,
    );
    cubeBlock.place(
        {
            position: [0, lanternBaseHeight + lanternHeight + lanternGap / 2, -lanternSize / 2],
            scale: [lanternSize + lanternBorder, lanternBorder, lanternBorder],
        },
        lantern,
    );
    // light itself
    cubeLight.place(
        {
            position: [0, lanternBaseHeight + lanternGap / 2 + lanternHeight / 2, 0],
            scale: [lanternSize, lanternHeight, lanternSize],
        },
        lantern,
    );

    const lanternGroup = ext.chroma.EnvironmentGroup.create(lantern, [0, 0, 0]);
    for (let reroll = 0; reroll++ < 142;) {
        pRandom();
    }
    for (let z = 0; z < 16; z++) {
        lanternGroup.place(
            {
                position: [pRandom(5, 20), 0, -16 + z * 4],
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
            },
            environment,
        );
        lanternGroup.place(
            {
                position: [pRandom(-5, -20), 0, -16 + z * 4],
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
            },
            environment,
        );
        lanternGroup.place(
            {
                position: [pRandom(16, 36), 0, -14 + z * 4],
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
            },
            environment,
        );
        lanternGroup.place(
            {
                position: [pRandom(-16, -36), 0, -14 + z * 4],
                rotation: [0, pRandom(0, 360, true), 0],
                type: utils.pickRandom([0, 1, 6, 7], pRandom),
            },
            environment,
        );
    }

    for (let i = 0; i < 9; i++) {
        let regexPillarL, regexPillarR;
        if (i === 0) {
            regexPillarL = EnvGrab.create('BottomPairLasers').child().name('PillarL').end().regex;
            regexPillarR = EnvGrab.create('BottomPairLasers').child().name('PillarR').end().regex;
        } else {
            regexPillarL = EnvGrab.create('BottomPairLasers').id(i).child().name('PillarL').end().regex;
            regexPillarR = EnvGrab.create('BottomPairLasers').id(i).child().name('PillarR').end().regex;
        }
        environment.push(
            {
                id: regexPillarL,
                lookupMethod: 'Regex',
                position: [-30 + i * 2, 1.125 - i * 0.1875, 32 + i * 4],
                rotation: [-25 + i * 5, 27 - i * 3, 300],
                components: { TubeBloomPrePassLight: { colorAlphaMultiplier: 2.5 } },
            },
            {
                id: regexPillarR,
                lookupMethod: 'Regex',
                position: [30 - i * 2, 1.125 - i * 0.1875, 32 + i * 4],
                rotation: [-25 + i * 5, 333 + i * 3, 60],
                components: { TubeBloomPrePassLight: { colorAlphaMultiplier: 2.5 } },
            },
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
        } as types.external.IEnvironmentJSON),
    );
    console.log('Written Torii environment JSON');
}
