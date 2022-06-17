import * as bsmap from '../../depsLocal.ts';

export const generateEnvironment = (): bsmap.types.v3.IChromaEnvironment[] => {
    const environment: bsmap.types.v3.IChromaEnvironment[] = [];

    // regex for environment enhancement
    const regexEnvironment = `\\[\\d+\\]Environment$`;
    const regexCube = `\\[\\d+\\]LeftFarRail1$`;
    const regexPillar = `LightRailingSegment\\.\\[\\d+\\]NeonTubeDirectionalL(.\\(\\d+\\))?$`;
    const regexMountains = `\\[\\d+\\]Mountains$`;
    const regexMoon = `\\[\\d+\\]Moon$`;
    const regexTunnelLaser = `\\[\\d+\\]TunnelRotatingLasersPair(.\\(\\d+\\))?$`;

    const cubeBlock = bsmap.ext.chroma.EnvironmentBlock.create(
        {
            id: regexCube,
            lookupMethod: 'Regex',
            scale: [10, 10, 0.0234375],
        },
        [0, 0, 0],
    );
    const pillarBlock = bsmap.ext.chroma.EnvironmentBlock.create(
        {
            id: regexPillar,
            lookupMethod: 'Regex',
            scale: [4, 0.2, 4],
        },
        [0, 0, 0],
    );

    const debug: bsmap.types.v3.IChromaEnvironment[] = [];
    // pillarBlock.place([-4, 4, 0], [1, 8, 1], [0, 0, 0], debug);
    // pillarBlock.place([4, 4, 0], [1, 8, 1], [0, 0, 0], debug);
    pillarBlock.place({ position: [0, 4, 0], scale: [1, 8, 1] }, debug);

    const debugGroup = bsmap.ext.chroma.EnvironmentGroup.create(debug, [0, 0, 0]);
    // debugGroup.place([-4, 1, 12], [1, 1, 1], [0, 0, 0], environment);
    // debugGroup.place([4, 1, 12], [1, 1, 1], [30, 0, 0], environment);
    // debugGroup.place([4, 1, 12], [1, 1, 1], [0, 0, 0], environment);

    const logo: bsmap.types.v3.IChromaEnvironment[] = [];
    //F
    pillarBlock.place(
        { position: [-(151 / 2) + 4, 4, 0], scale: [8, 8, 0.015625] },
        logo,
    );
    pillarBlock.place(
        { position: [-(151 / 2) + 4, 14.5, 0], scale: [8, 11, 0.015625] },
        logo,
    );
    pillarBlock.place(
        { position: [-(151 / 2) + 14.5, 24, 0], scale: [29, 8, 0.015625] },
        logo,
    );
    pillarBlock.place(
        { position: [-(151 / 2) + 4, 32.5, 0], scale: [8, 7, 0.015625] },
        logo,
    );
    pillarBlock.place(
        { position: [-(151 / 2) + 15.5, 40, 0], scale: [31, 8, 0.015625] },
        logo,
    );
    //E
    pillarBlock.place(
        {
            position: [-(151 / 2) + 40 + 15.5, 4, 0],
            scale: [31, 8, 0.015625],
        },
        logo,
    );
    pillarBlock.place(
        {
            position: [-(151 / 2) + 40 + 4, 14.5, 0],
            scale: [8, 11, 0.015625],
        },
        logo,
    );
    pillarBlock.place(
        {
            position: [-(151 / 2) + 40 + 13.5, 24, 0],
            scale: [27, 8, 0.015625],
        },
        logo,
    );
    pillarBlock.place(
        {
            position: [-(151 / 2) + 40 + 4, 32.5, 0],
            scale: [8, 7, 0.015625],
        },
        logo,
    );
    pillarBlock.place(
        {
            position: [-(151 / 2) + 40 + 14.5, 40, 0],
            scale: [29, 8, 0.015625],
        },
        logo,
    );
    //L
    pillarBlock.place(
        { position: [-(151 / 2) + 81 + 15, 4, 0], scale: [30, 8, 0.015625] },
        logo,
    );
    pillarBlock.place(
        { position: [-(151 / 2) + 81 + 4, 26, 0], scale: [8, 36, 0.015625] },
        logo,
    );
    //T
    pillarBlock.place(
        {
            position: [-(151 / 2) + 113 + 19, 40, 0],
            scale: [38, 8, 0.015625],
        },
        logo,
    );
    pillarBlock.place(
        {
            position: [-(151 / 2) + 127 + 4, 18, 0],
            scale: [8, 36, 0.015625],
        },
        logo,
    );

    const logoGroup = bsmap.ext.chroma.EnvironmentGroup.create(logo, [0, 0, 0]);
    logoGroup.place(
        {
            position: [0, 3.875, 1040],
            scale: [0.015625, 0.015625, 0.015625],
        },
        environment,
    );

    const torii: bsmap.types.v3.IChromaEnvironment[] = [];
    pillarBlock.place({ position: [-4, 4, 0], scale: [1, 8, 1] }, torii);
    pillarBlock.place({ position: [4, 4, 0], scale: [1, 8, 1] }, torii);
    cubeBlock.place({ position: [0, 7.5, -0.125], scale: [1.5, 1.25, 0.25] }, torii);
    cubeBlock.place({ position: [0, 6.5, -0.25], scale: [12, 0.75, 0.5] }, torii);
    cubeBlock.place({ position: [0, 8.25, -0.25], scale: [12, 0.5, 0.5] }, torii);
    cubeBlock.place({ position: [0, 8.75, -0.5], scale: [12.25, 0.5, 1] }, torii);
    cubeBlock.place({ position: [0, 8.5, -0.125], scale: [13, 0.5, 0.25] }, torii);
    cubeBlock.place({ position: [-4, 7, -0.0625], scale: [1.75, 0.5, 0.125] }, torii);
    cubeBlock.place({ position: [4, 7, -0.0625], scale: [1.75, 0.5, 0.125] }, torii);
    cubeBlock.place(
        {
            position: [-6.625, 8.9, -0.5],
            scale: [1.1875, 0.5, 1],
            rotation: [0, 0, -15],
        },
        torii,
    );
    cubeBlock.place(
        { position: [6.625, 8.9, -0.5], scale: [1.1875, 0.5, 1], rotation: [0, 0, 15] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 8, 0], scale: [0.875, 0.363125, 16], rotation: [90, 0, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 8, 0], scale: [0.875, 0.363125, 16], rotation: [90, 45, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 8, 0], scale: [0.875, 0.363125, 16], rotation: [90, 90, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 8, 0], scale: [0.875, 0.363125, 16], rotation: [90, 135, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 8, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 0, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 8, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 45, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 8, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 90, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 8, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 135, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 7, 0], scale: [1, 0.415, 0.125], rotation: [90, 0, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 7, 0], scale: [1, 0.415, 0.125], rotation: [90, 45, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 7, 0], scale: [1, 0.415, 0.125], rotation: [90, 90, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 7, 0], scale: [1, 0.415, 0.125], rotation: [90, 135, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 6.125, 0], scale: [1, 0.415, 0.125], rotation: [90, 0, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 6.125, 0], scale: [1, 0.415, 0.125], rotation: [90, 45, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 6.125, 0], scale: [1, 0.415, 0.125], rotation: [90, 90, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 6.125, 0], scale: [1, 0.415, 0.125], rotation: [90, 135, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 1, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 0, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 1, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 45, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 1, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 90, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 1, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 135, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 0.5, 0], scale: [1.25, 0.51875, 16], rotation: [90, 0, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 0.5, 0], scale: [1.25, 0.51875, 16], rotation: [90, 45, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 0.5, 0], scale: [1.25, 0.51875, 16], rotation: [90, 90, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [4, 0.5, 0], scale: [1.25, 0.51875, 16], rotation: [90, 135, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 8, 0], scale: [0.875, 0.363125, 16], rotation: [90, 0, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 8, 0], scale: [0.875, 0.363125, 16], rotation: [90, 45, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 8, 0], scale: [0.875, 0.363125, 16], rotation: [90, 90, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 8, 0], scale: [0.875, 0.363125, 16], rotation: [90, 135, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 8, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 0, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 8, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 45, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 8, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 90, 0] },
        torii,
    );
    cubeBlock.place(
        {
            position: [-4, 8, 0],
            scale: [1.125, 0.466875, 0.25],
            rotation: [90, 135, 0],
        },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 7, 0], scale: [1, 0.415, 0.125], rotation: [90, 0, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 7, 0], scale: [1, 0.415, 0.125], rotation: [90, 45, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 7, 0], scale: [1, 0.415, 0.125], rotation: [90, 90, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 7, 0], scale: [1, 0.415, 0.125], rotation: [90, 135, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 6.125, 0], scale: [1, 0.415, 0.125], rotation: [90, 0, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 6.125, 0], scale: [1, 0.415, 0.125], rotation: [90, 45, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 6.125, 0], scale: [1, 0.415, 0.125], rotation: [90, 90, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 6.125, 0], scale: [1, 0.415, 0.125], rotation: [90, 135, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 1, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 0, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 1, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 45, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 1, 0], scale: [1.125, 0.466875, 0.25], rotation: [90, 90, 0] },
        torii,
    );
    cubeBlock.place(
        {
            position: [-4, 1, 0],
            scale: [1.125, 0.466875, 0.25],
            rotation: [90, 135, 0],
        },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 0.5, 0], scale: [1.25, 0.51875, 16], rotation: [90, 0, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 0.5, 0], scale: [1.25, 0.51875, 16], rotation: [90, 90, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 0.5, 0], scale: [1.25, 0.51875, 16], rotation: [90, 45, 0] },
        torii,
    );
    cubeBlock.place(
        { position: [-4, 0.5, 0], scale: [1.25, 0.51875, 16], rotation: [90, 135, 0] },
        torii,
    );

    const toriiTilted: bsmap.types.v3.IChromaEnvironment[] = [];
    pillarBlock.place(
        {
            position: [
                -4,
                4 * Math.cos(bsmap.utils.degToRad(30)),
                4 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 8, 1],
            rotation: [30, 0, 0],
        },
        toriiTilted,
    );
    pillarBlock.place(
        {
            position: [
                4,
                4 * Math.cos(bsmap.utils.degToRad(30)),
                4 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 8, 1],
            rotation: [30, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                0,
                7.5 * Math.cos(bsmap.utils.degToRad(30)),
                -0.125 + 7.5 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.5, 1.25, 0.25],
            rotation: [30, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                0,
                6.5 * Math.cos(bsmap.utils.degToRad(30)),
                -0.25 + 6.5 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [12, 0.75, 0.5],
            rotation: [30, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                0,
                8.25 * Math.cos(bsmap.utils.degToRad(30)),
                -0.25 + 8.25 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [12, 0.5, 0.5],
            rotation: [30, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                0,
                8.75 * Math.cos(bsmap.utils.degToRad(30)),
                -0.5 + 8.75 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [12.25, 0.5, 1],
            rotation: [30, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                0,
                8.5 * Math.cos(bsmap.utils.degToRad(30)),
                -0.125 + 8.5 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [13, 0.5, 0.25],
            rotation: [30, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                7 * Math.cos(bsmap.utils.degToRad(30)),
                -0.0625 + 7 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.75, 0.5, 0.125],
            rotation: [30, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                7 * Math.cos(bsmap.utils.degToRad(30)),
                -0.0625 + 7 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.75, 0.5, 0.125],
            rotation: [30, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -6.625,
                8.9 * Math.cos(bsmap.utils.degToRad(30)),
                -0.5 + 8.9 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.1875, 0.5, 1],
            rotation: [30, 0, 345],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                6.625,
                8.9 * Math.cos(bsmap.utils.degToRad(30)),
                -0.5 + 8.9 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.1875, 0.5, 1],
            rotation: [30, 0, 15],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [0.875, 0.363125, 16],
            rotation: [120, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [0.875, 0.363125, 16],
            rotation: [120, 0, 45],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [0.875, 0.363125, 16],
            rotation: [120, 0, 90],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [0.875, 0.363125, 16],
            rotation: [120, 0, 135],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 45],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 90],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 135],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                7 * Math.cos(bsmap.utils.degToRad(30)),
                7 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                7 * Math.cos(bsmap.utils.degToRad(30)),
                7 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 45],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                7 * Math.cos(bsmap.utils.degToRad(30)),
                7 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 90],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                7 * Math.cos(bsmap.utils.degToRad(30)),
                7 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 135],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                6.125 * Math.cos(bsmap.utils.degToRad(30)),
                6.125 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                6.125 * Math.cos(bsmap.utils.degToRad(30)),
                6.125 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 45],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                6.125 * Math.cos(bsmap.utils.degToRad(30)),
                6.125 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 90],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                6.125 * Math.cos(bsmap.utils.degToRad(30)),
                6.125 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 135],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                1 * Math.cos(bsmap.utils.degToRad(30)),
                1 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                1 * Math.cos(bsmap.utils.degToRad(30)),
                1 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 45],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                1 * Math.cos(bsmap.utils.degToRad(30)),
                1 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 90],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                1 * Math.cos(bsmap.utils.degToRad(30)),
                1 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 135],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                0.5 * Math.cos(bsmap.utils.degToRad(30)),
                0.5 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.25, 0.51875, 16],
            rotation: [120, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                0.5 * Math.cos(bsmap.utils.degToRad(30)),
                0.5 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.25, 0.51875, 16],
            rotation: [120, 0, 45],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                0.5 * Math.cos(bsmap.utils.degToRad(30)),
                0.5 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.25, 0.51875, 16],
            rotation: [120, 0, 90],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                4,
                0.5 * Math.cos(bsmap.utils.degToRad(30)),
                0.5 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.25, 0.51875, 16],
            rotation: [120, 0, 135],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [0.875, 0.363125, 16],
            rotation: [120, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [0.875, 0.363125, 16],
            rotation: [120, 0, 45],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [0.875, 0.363125, 16],
            rotation: [120, 0, 90],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [0.875, 0.363125, 16],
            rotation: [120, 0, 135],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 45],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 90],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                8 * Math.cos(bsmap.utils.degToRad(30)),
                8 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 135],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                7 * Math.cos(bsmap.utils.degToRad(30)),
                7 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                7 * Math.cos(bsmap.utils.degToRad(30)),
                7 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 45],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                7 * Math.cos(bsmap.utils.degToRad(30)),
                7 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 90],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                7 * Math.cos(bsmap.utils.degToRad(30)),
                7 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 135],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                6.125 * Math.cos(bsmap.utils.degToRad(30)),
                6.125 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                6.125 * Math.cos(bsmap.utils.degToRad(30)),
                6.125 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 45],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                6.125 * Math.cos(bsmap.utils.degToRad(30)),
                6.125 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 90],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                6.125 * Math.cos(bsmap.utils.degToRad(30)),
                6.125 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1, 0.415, 0.125],
            rotation: [120, 0, 135],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                1 * Math.cos(bsmap.utils.degToRad(30)),
                1 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                1 * Math.cos(bsmap.utils.degToRad(30)),
                1 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 45],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                1 * Math.cos(bsmap.utils.degToRad(30)),
                1 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 90],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                1 * Math.cos(bsmap.utils.degToRad(30)),
                1 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.125, 0.466875, 0.25],
            rotation: [120, 0, 135],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                0.5 * Math.cos(bsmap.utils.degToRad(30)),
                0.5 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.25, 0.51875, 16],
            rotation: [120, 0, 0],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                0.5 * Math.cos(bsmap.utils.degToRad(30)),
                0.5 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.25, 0.51875, 16],
            rotation: [120, 0, 45],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                0.5 * Math.cos(bsmap.utils.degToRad(30)),
                0.5 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.25, 0.51875, 16],
            rotation: [120, 0, 90],
        },
        toriiTilted,
    );
    cubeBlock.place(
        {
            position: [
                -4,
                0.5 * Math.cos(bsmap.utils.degToRad(30)),
                0.5 * Math.sin(bsmap.utils.degToRad(30)),
            ],
            scale: [1.25, 0.51875, 16],
            rotation: [120, 0, 135],
        },
        toriiTilted,
    );

    const toriiGroup = bsmap.ext.chroma.EnvironmentGroup.create(torii, [0, 0, 0]);
    const toriiTiltedGroup = bsmap.ext.chroma.EnvironmentGroup.create(
        toriiTilted,
        [0, 0, 0],
    );
    toriiGroup.place({ position: [0, 0, 24], scale: [1.25, 1.25, 1.25] }, environment);

    for (let z = 1; z <= 16; z++) {
        toriiTiltedGroup.place(
            {
                position: [0, 0, 1024 + 8 + z * 16],
                scale: [1.25, 1.25, 1.25],
            },
            environment,
        );
    }
    for (let z = 0; z < 512; z++) {
        cubeBlock.place(
            {
                position: [0, 0, 1024 + 8 + z * 0.5],
                scale: [5, 0.333, 0.75],
                rotation: [30, 0, 0],
            },
            environment,
        );
    }

    environment.push({
        id: regexMoon,
        lookupMethod: 'Regex',
        position: [0, 16, 1032 + 512],
        scale: [80, 80, 1],
    });
    environment.push({
        id: regexTunnelLaser,
        lookupMethod: 'Regex',
        position: [0, 0, 1032],
        scale: [7.5, 7.5, 7.5],
    });
    environment.push({
        id: regexMountains,
        lookupMethod: 'Regex',
        position: [0, -8, 1032],
        scale: [0.1, 0.2, 1],
    });
    environment.push({
        id: regexMountains,
        lookupMethod: 'Regex',
        duplicate: 1,
        position: [0, -16, 1032],
        scale: [0.075, 0.4, 1],
    });
    cubeBlock.place(
        {
            position: [2.625, 0, 1032],
            scale: [0.25, 0.5, 512],
            rotation: [0, 0, 0],
        },
        environment,
    );
    cubeBlock.place(
        {
            position: [-2.625, 0, 1032],
            scale: [0.25, 0.5, 512],
            rotation: [0, 0, 0],
        },
        environment,
    );

    environment.push({
        id: regexEnvironment,
        lookupMethod: 'Regex',
        position: [0, 0, -1032],
    });

    return environment;
};

export const insertEnvironment = (d: bsmap.v3.DifficultyData) => {
    if (d.customData.environment?.length) {
        bsmap.logger.warn('Environment enhancement previously existed, replacing');
    }
    d.customData.environment = generateEnvironment();
};
