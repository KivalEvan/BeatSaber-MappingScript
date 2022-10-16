import * as bsmap from '../../depsLocal.ts';

export const roadCount = 5;
export const roadRepeat = 4;
export const idOffsetType0 = 101;
export const idOffsetType4 = 101;

export const generateEnvironment = (): bsmap.types.v3.IChromaEnvironment[] => {
    const environment: bsmap.types.v3.IChromaEnvironment[] = [];

    let internalIdOffsetType0 = idOffsetType0;
    let internalIdOffsetType4 = idOffsetType4;
    // road
    const roadGap = 6; // how far between each gap of road
    const roadOffset = 8;

    // extra light
    const extraMirrorLightOffset = roadOffset + roadGap * 2;
    const extraMirrorLightGap = roadGap;
    const extraMirrorLightMirrorOffsetX = 8.8;
    const extraMirrorLightMirrorOffsetY = -4;

    // regex for environment enhancement
    const regexSpectrogram = `(\\[\\d+\\]Spectrogram(s|\\.|\\d)?)+$`;
    const regexFloor = `\\[\\d+\\]Floor(\\.\\[\\d+\\]FloorSetDepth)?$`;
    const regexConstruction = `\\[\\d+\\]Construction$`;
    const regexNearBuilding = `\\[\\d+\\]NearBuilding(Left|Right)$`;
    const regexBigRingLights =
        `\\[\\d+\\]BigTrackLaneRing\\(Clone\\)\\.\\[\\d+\\]NeonTubeBothSidesDirectional(.?\\(\\d+\\))?$`;
    const regexDoubleColorLaser = `\\[\\d+\\]DoubleColorLaser$`;
    const regexNeonTubeL = `\\[\\d+\\]NeonTubeDirectionalL$`;
    const regexNeonTubeR = `\\[\\d+\\]NeonTubeDirectionalR$`;
    const regexNeonTubeFL = `\\[\\d+\\]NeonTubeDirectionalFL$`;
    const regexNeonTubeFR = `\\[\\d+\\]NeonTubeDirectionalFR$`;

    // beyond you're on your own
    const posAddY = (posArr: bsmap.types.Vector3, y: number): bsmap.types.Vector3 => {
        const arr: bsmap.types.Vector3 = [...posArr];
        arr[1] += y;
        return arr;
    };
    const posAddZ = (posArr: bsmap.types.Vector3, z: number): bsmap.types.Vector3 => {
        const arr: bsmap.types.Vector3 = [...posArr];
        arr[2] += z;
        return arr;
    };
    const posMirrorX = (posArr: bsmap.types.Vector3): bsmap.types.Vector3 => {
        const arr: bsmap.types.Vector3 = [...posArr];
        arr[0] = -arr[0];
        return arr;
    };

    //#region yeet
    environment.push(
        {
            id: regexSpectrogram,
            lookupMethod: 'Regex',
            active: false,
        },
        {
            id: regexFloor,
            lookupMethod: 'Regex',
            active: false,
        },
        {
            id: regexConstruction,
            lookupMethod: 'Regex',
            position: [0, -1, -10],
        },
        {
            id: regexNearBuilding,
            lookupMethod: 'Regex',
            active: false,
        },
    );
    //#endregion
    //#region extra thicc ring
    environment.push({
        id: regexBigRingLights,
        lookupMethod: 'Regex',
        scale: [1, 2, 1],
    });
    //#endregion
    //#region road
    const centerRoadPos: bsmap.types.Vector3 = [1.1875, -2.75, roadOffset];
    const centerRoadScale: bsmap.types.Vector3 = [0.4375, 0.453125, 0.4375];
    const farRoadPos: bsmap.types.Vector3 = [3.5625, -2.15625, roadOffset];
    const farRoadScale: bsmap.types.Vector3 = [0.5, 0.265625, 0.5];
    for (let i = 0; i < roadCount * roadRepeat; i++) {
        environment.push(
            {
                geometry: {
                    type: 'Cube',
                    material: {
                        shaderPreset: 'OpaqueLight',
                        shaderKeywords: ['ENABLE_LIGHTNING'],
                    },
                    spawnCount: 1,
                },
                scale: centerRoadScale,
                position: posMirrorX(posAddZ(centerRoadPos, i * roadGap)),
                rotation: [0, 0, -78],
                components: {
                    ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
                },
            },
            {
                geometry: {
                    type: 'Cube',
                    material: {
                        shaderPreset: 'OpaqueLight',
                        shaderKeywords: ['ENABLE_LIGHTNING'],
                    },
                    spawnCount: 1,
                },
                scale: centerRoadScale,
                position: posAddZ(centerRoadPos, i * roadGap),
                rotation: [0, 0, 78],
                components: {
                    ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
                },
            },
        );
    }
    for (let i = 0; i < roadCount * roadRepeat; i++) {
        environment.push(
            {
                geometry: {
                    type: 'Cube',
                    material: {
                        shaderPreset: 'OpaqueLight',
                        shaderKeywords: ['ENABLE_LIGHTNING'],
                    },
                    spawnCount: 1,
                },
                scale: farRoadScale,
                position: posMirrorX(posAddZ(farRoadPos, i * roadGap)),
                rotation: [0, 0, -114],
                components: {
                    ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
                },
            },
            {
                geometry: {
                    type: 'Cube',
                    material: {
                        shaderPreset: 'OpaqueLight',
                        shaderKeywords: ['ENABLE_LIGHTNING'],
                    },
                    spawnCount: 1,
                },
                scale: farRoadScale,
                position: posAddZ(farRoadPos, i * roadGap),
                rotation: [0, 0, 114],
                components: {
                    ILightWithId: { type: 4, lightID: internalIdOffsetType4++ },
                },
            },
        );
    }
    //#endregion
    //#region road other lights
    const farLaneLightPos: bsmap.types.Vector3 = [4.4375, -1.625, 0];
    const farLaneLightScale: bsmap.types.Vector3 = [2, 1, 2];
    const midLaneLightPos: bsmap.types.Vector3 = [3.5, -2.140625, -255];
    const midLaneLightScale: bsmap.types.Vector3 = [2.5, 4, 2.5];
    const botLaneLightPos: bsmap.types.Vector3 = [3, -3.1015625, -255];
    const botLaneLightScale: bsmap.types.Vector3 = [2, 4, 2];
    const centerLaneLightPos: bsmap.types.Vector3 = [1.125, -2.75, -255];
    const centerLaneLightScale: bsmap.types.Vector3 = [2.5, 4, 2.5];
    environment.push(
        {
            id: regexNeonTubeL,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: botLaneLightScale,
            position: posMirrorX(botLaneLightPos),
        },
        {
            id: regexNeonTubeR,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: botLaneLightScale,
            position: botLaneLightPos,
        },
        {
            id: regexNeonTubeL,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: centerLaneLightScale,
            position: posMirrorX(centerLaneLightPos),
        },
        {
            id: regexNeonTubeR,
            lookupMethod: 'Regex',
            duplicate: 1,
            scale: centerLaneLightScale,
            position: centerLaneLightPos,
        },
        {
            id: regexNeonTubeL,
            lookupMethod: 'Regex',
            scale: midLaneLightScale,
            position: posMirrorX(midLaneLightPos),
        },
        {
            id: regexNeonTubeR,
            lookupMethod: 'Regex',
            scale: midLaneLightScale,
            position: midLaneLightPos,
        },
        {
            id: regexNeonTubeFL,
            lookupMethod: 'Regex',
            scale: farLaneLightScale,
            position: posMirrorX(farLaneLightPos),
        },
        {
            id: regexNeonTubeFR,
            lookupMethod: 'Regex',
            scale: farLaneLightScale,
            position: farLaneLightPos,
        },
    );
    //#endregion
    //#region yeet center light backtop thing
    environment.push({
        id: regexDoubleColorLaser.replace(/\$$/, '') + `(.?\\(\\d+\\))?.\\[\\d+\\](BottomBoxLight|BottomBakedBloom)$`,
        lookupMethod: 'Regex',
        active: false,
    });
    //#endregion
    //#region replace with chad backtop thing
    const backTopFarPos: bsmap.types.Vector3 = [2.90625, -3.3125, 96];
    const backTopFarScale: bsmap.types.Vector3 = [1.5, 1, 1.5];
    for (let i = 0; i < 5; i++) {
        environment.push(
            {
                id: regexDoubleColorLaser,
                lookupMethod: 'Regex',
                duplicate: 1,
                scale: backTopFarScale,
                position: posMirrorX(posAddZ(backTopFarPos, i * 16)),
                rotation: [60 - i * 5, 0, 195 + i * 6],
            },
            {
                id: regexDoubleColorLaser,
                lookupMethod: 'Regex',
                duplicate: 1,
                scale: backTopFarScale,
                position: posAddZ(backTopFarPos, i * 16),
                rotation: [60 - i * 5, 0, 165 - i * 6],
            },
        );
    }
    //#endregion
    //#region fabled extra light
    const extraMirrorLightPos: bsmap.types.Vector3 = [extraMirrorLightMirrorOffsetX, -1.625, extraMirrorLightOffset];
    const extraMirrorLightScale: bsmap.types.Vector3 = [0.5, 0.5, 0.5];
    for (let i = 0; i < 5; i++) {
        environment.push(
            {
                id: regexDoubleColorLaser,
                lookupMethod: 'Regex',
                duplicate: 1,
                scale: extraMirrorLightScale,
                position: posMirrorX(posAddZ(extraMirrorLightPos, i * extraMirrorLightGap)),
                rotation: [0 + i * 2.5, 0, 320 + i * 11],
                components: {
                    ILightWithId: { type: 0, lightID: internalIdOffsetType0++ },
                },
            },
            {
                id: regexDoubleColorLaser,
                lookupMethod: 'Regex',
                duplicate: 1,
                scale: extraMirrorLightScale,
                position: posMirrorX(
                    posAddY(posAddZ(extraMirrorLightPos, i * extraMirrorLightGap), extraMirrorLightMirrorOffsetY),
                ),
                rotation: [0 - i * 2.5, 0, 220 - i * 11],
                components: {
                    ILightWithId: { type: 0, lightID: internalIdOffsetType0++ },
                },
            },
            {
                id: regexDoubleColorLaser,
                lookupMethod: 'Regex',
                duplicate: 1,
                scale: extraMirrorLightScale,
                position: posAddY(posAddZ(extraMirrorLightPos, i * extraMirrorLightGap), extraMirrorLightMirrorOffsetY),
                rotation: [0 - i * 2.5, 0, 140 + i * 11],
                components: {
                    ILightWithId: { type: 0, lightID: internalIdOffsetType0++ },
                },
            },
            {
                id: regexDoubleColorLaser,
                lookupMethod: 'Regex',
                duplicate: 1,
                scale: extraMirrorLightScale,
                position: posAddZ(extraMirrorLightPos, i * extraMirrorLightGap),
                rotation: [0 + i * 2.5, 0, 40 - i * 11],
                components: {
                    ILightWithId: { type: 0, lightID: internalIdOffsetType0++ },
                },
            },
        );
    }
    //#endregion
    return environment;
};

export const insertEnvironment = (d: bsmap.v3.Difficulty) => {
    if (d.customData.environment?.length) {
        bsmap.logger.warn('Environment enhancement previously existed, replacing');
    }
    d.customData.environment = generateEnvironment();
};
