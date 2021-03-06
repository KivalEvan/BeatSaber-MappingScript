import * as bsmap from '../../depsLocal.ts';

export const generateEnvironment = (): bsmap.types.v3.IChromaEnvironment[] => {
    const environment: bsmap.types.v3.IChromaEnvironment[] = [];

    // environment related
    // regex for environment enhancement
    const regexRingRight = `\\[\\d+\\]PillarTrackLaneRingsR$`;
    const regexRingLeft = `\\[\\d+\\]PillarTrackLaneRingsR.?\\(1\\)$`;
    const regexSideLaser = `\\[42\\]SideLaser$`;
    const regexGlowLine = `\\[\\d+\\]GlowLineL$`;
    const regexPillarL = `\\[\\d+\\]PillarPair\\.\\[\\d+\\]PillarL$`;
    const regexPillarR = `\\[\\d+\\]PillarPair\\.\\[\\d+\\]PillarR$`;
    const regexDoor = `\\[\\d+\\]MagicDoorSprite$`;

    //#region haha ring go brr; remove this if u dont want ring tower (this was made specifically for FELT - Journey)
    // resize default column box
    environment.push(
        {
            id: regexRingRight,
            lookupMethod: 'Regex',
            position: [64, 48, 128],
            rotation: [90, 0, 45],
            scale: [0.25, 0.25, 1],
        },
        {
            id: regexRingLeft,
            lookupMethod: 'Regex',
            position: [-64, 48, 128],
            rotation: [90, 0, 45],
            scale: [0.25, 0.25, 1],
        },
    );
    // duplicate this shit everywhere
    for (let z = 0; z < 5; z++) {
        for (let i = 0; i < 10; i++) {
            const posXRight = (i + 1) * 12 + 96 - z * 8;
            const posZRight = 32 + Math.random() * 64;
            const posYRight = Math.max(
                -36 + Math.random() * 32 + posXRight / 8 + posZRight / 1.25,
                2,
            );
            const posXLeft = (i + 1) * 12 + 96 - z * 8;
            const posZLeft = 32 + Math.random() * 64;
            const posYLeft = Math.max(
                -36 + Math.random() * 32 + posXLeft / 8 + posZLeft / 1.25,
                2,
            );
            environment.push(
                {
                    id: regexRingRight,
                    lookupMethod: 'Regex',
                    duplicate: 1,
                    position: [posXRight, posYRight, -96 + posZRight + z * 64],
                    rotation: [90, 0, 45],
                },
                {
                    id: regexRingLeft,
                    lookupMethod: 'Regex',
                    duplicate: 1,
                    position: [-posXLeft, posYLeft, -96 + posZLeft + z * 64],
                    rotation: [90, 0, 45],
                },
            );
        }
    }
    const regexCloudGeometry = '\\[\\d+\\]HighCloudsGenerator.\\[\\d+\\]OpaqueGeometry$';

    for (let i = 0; i < 12; i++) {
        // environment.push({
        //     id: regexCloudGeometry,
        //     lookupMethod: 'Regex',
        //     duplicate: 1,
        //     position: [0, 16, -112 + i * 24],
        //     rotation: [i % 2 ? 270 : 90, 0, 0],
        //     scale: [
        //         0.125 + 0.375 * Math.cos(bsmap.utils.degToRad(i * 8)),
        //         0.25 + Math.random() * 0.375,
        //         0.125 + 0.375 * Math.cos(bsmap.utils.degToRad(i * 8)),
        //     ],
        // });
    }

    environment.push(
        {
            id: regexCloudGeometry,
            lookupMethod: 'Regex',
            duplicate: 1,
            position: [0, -12, 0],
            rotation: [0, 0, 0],
            scale: [0.75, 0.75, 0.75],
        },
        {
            id: regexRingRight,
            lookupMethod: 'Regex',
            duplicate: 1,
            position: [48, -4, 144],
            rotation: [0, 180, 45],
            scale: [0.25, 0.25, 1],
        },
        {
            id: regexRingLeft,
            lookupMethod: 'Regex',
            duplicate: 1,
            position: [-48, -4, 144],
            rotation: [0, 180, 45],
            scale: [0.25, 0.25, 1],
        },
        {
            id: regexRingRight,
            lookupMethod: 'Regex',
            duplicate: 1,
            position: [64, 10, 160],
            rotation: [0, 180, 45],
            scale: [0.25, 0.25, 1],
        },
        {
            id: regexRingLeft,
            lookupMethod: 'Regex',
            duplicate: 1,
            position: [-64, 10, 160],
            rotation: [0, 180, 45],
            scale: [0.25, 0.25, 1],
        },
    );
    //#endregion
    //#region side
    for (let i = 0; i < 2; i++) {
        const posX = i * 1.5 + 4;
        const posY = i * 0.5 - 0.5;
        const posZ = -511;
        environment.push(
            {
                id: regexGlowLine,
                lookupMethod: 'Regex',
                duplicate: 1,
                position: [posX, posY, posZ],
                rotation: [90, 0, 0],
                scale: [1.5, 1.5, 1.5],
            },
            {
                id: regexGlowLine,
                lookupMethod: 'Regex',
                duplicate: 1,
                position: [-posX, posY, posZ],
                rotation: [90, 0, 0],
                scale: [1.5, 1.5, 1.5],
            },
        );
    }
    //#endregion
    //#region front
    for (let i = 0; i < 5; i++) {
        const posX = 16 + i * 4;
        const posY = 0;
        const posZ = i * 8 + 24;
        environment.push(
            {
                id: regexSideLaser,
                lookupMethod: 'Regex',
                duplicate: 1,
                position: [posX, posY, posZ],
                rotation: [15 + i * 2.5, 0, -16 - i * 8],
            },
            {
                id: regexSideLaser,
                lookupMethod: 'Regex',
                duplicate: 1,
                position: [-posX, posY, posZ],
                rotation: [15 + i * 2.5, 0, 16 + i * 8],
            },
        );
    }
    //#endregion
    //#region backtop
    for (let i = 0; i < 5; i++) {
        const posX = 54 + i * 4;
        const posY = i * 2;
        const posZ = i * 4 + 80;
        environment.push(
            {
                id: regexSideLaser,
                lookupMethod: 'Regex',
                duplicate: 1,
                position: [posX, posY, posZ],
                rotation: [-15, 0, 60 - i * 2.5],
            },
            {
                id: regexSideLaser,
                lookupMethod: 'Regex',
                duplicate: 1,
                position: [-posX, posY, posZ],
                rotation: [-15, 0, -60 + i * 2.5],
            },
        );
    }
    //#endregion
    //#region pillar
    for (let i = 0; i < 5; i++) {
        environment.push(
            {
                id: i ? regexPillarL.replace('PillarPair', `PillarPair \\(${i}\\)`) : regexPillarL,
                lookupMethod: 'Regex',
                rotation: [15, 45, 0 - i * 7.5],
                position: [-32 + i * 4, 5 + i * 4 + Math.pow(i, i / 3), 64 + i * 12],
            },
            {
                id: i ? regexPillarR.replace('PillarPair', `PillarPair \\(${i}\\)`) : regexPillarR,
                lookupMethod: 'Regex',
                rotation: [15, -45, 0 + i * 7.5],
                position: [32 - i * 4, 5 + i * 4 + Math.pow(i, i / 3), 64 + i * 12],
            },
        );
    }
    //#endregion
    //#region door
    environment.push(
        {
            id: regexDoor,
            lookupMethod: 'Regex',
            rotation: [0, 0, 60],
            position: [-4.625, 28, 192],
            scale: [1, 1.5, 1],
        },
        {
            id: regexDoor,
            lookupMethod: 'Regex',
            duplicate: 1,
            rotation: [0, 0, -60],
            position: [4.625, 28, 192],
            scale: [1, 1.5, 1],
        },
    );
    //#endregion

    const lightBlock = bsmap.ext.chroma.EnvironmentBlock.create(
        {
            geometry: {
                type: 'Cube',
                material: {
                    shaderPreset: 'OpaqueLight',
                    shaderKeywords: ['ENABLE_LIGHTNING'],
                },
                spawnCount: 1,
            },
        },
        [0, 0, 0],
    );
    const logo: bsmap.types.v3.IChromaEnvironment[] = [];
    //F
    lightBlock.place(
        { position: [-(151 / 2) + 4, 4, 0], scale: [8, 8, 0.015625] },
        logo,
    );
    lightBlock.place(
        { position: [-(151 / 2) + 4, 14.5, 0], scale: [8, 11, 0.015625] },
        logo,
    );
    lightBlock.place(
        { position: [-(151 / 2) + 14.5, 24, 0], scale: [29, 8, 0.015625] },
        logo,
    );
    lightBlock.place(
        { position: [-(151 / 2) + 4, 32.5, 0], scale: [8, 7, 0.015625] },
        logo,
    );
    lightBlock.place(
        { position: [-(151 / 2) + 15.5, 40, 0], scale: [31, 8, 0.015625] },
        logo,
    );
    //E
    lightBlock.place(
        {
            position: [-(151 / 2) + 40 + 15.5, 4, 0],
            scale: [31, 8, 0.015625],
        },
        logo,
    );
    lightBlock.place(
        {
            position: [-(151 / 2) + 40 + 4, 14.5, 0],
            scale: [8, 11, 0.015625],
        },
        logo,
    );
    lightBlock.place(
        {
            position: [-(151 / 2) + 40 + 13.5, 24, 0],
            scale: [27, 8, 0.015625],
        },
        logo,
    );
    lightBlock.place(
        {
            position: [-(151 / 2) + 40 + 4, 32.5, 0],
            scale: [8, 7, 0.015625],
        },
        logo,
    );
    lightBlock.place(
        {
            position: [-(151 / 2) + 40 + 14.5, 40, 0],
            scale: [29, 8, 0.015625],
        },
        logo,
    );
    //L
    lightBlock.place(
        { position: [-(151 / 2) + 81 + 15, 4, 0], scale: [30, 8, 0.015625] },
        logo,
    );
    lightBlock.place(
        { position: [-(151 / 2) + 81 + 4, 26, 0], scale: [8, 36, 0.015625] },
        logo,
    );
    //T
    lightBlock.place(
        {
            position: [-(151 / 2) + 113 + 18, 40, 0],
            scale: [38, 8, 0.015625],
        },
        logo,
    );
    lightBlock.place(
        {
            position: [-(151 / 2) + 127 + 4, 18, 0],
            scale: [8, 36, 0.015625],
        },
        logo,
    );

    // v3 patch for old v2 pos
    environment.forEach((e) => {
        if (e.position) {
            e.position = e.position.map((n) => n * 0.6) as typeof e.position;
        }
        if (e.localPosition) {
            e.localPosition = e.localPosition.map(
                (n) => n * 0.6,
            ) as typeof e.localPosition;
        }
    });

    const logoGroup = bsmap.ext.chroma.EnvironmentGroup.create(logo, [0, 0, 0]);
    logoGroup.place(
        {
            position: [0, 1, 180],
            scale: [0.0625, 0.0625, 0.0625],
            lightID: 100,
        },
        environment,
    );
    return environment;
};

export const insertEnvironment = (d: bsmap.v3.DifficultyData) => {
    if (d.customData.environment?.length) {
        bsmap.logger.warn('Environment enhancement previously existed, replacing');
    }
    d.customData.environment = generateEnvironment();
};
