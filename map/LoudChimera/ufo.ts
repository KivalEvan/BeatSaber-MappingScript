import { EventLightValue, ext, logger, types, v3 } from '../../depsLocal.ts';

const { NE } = ext;

export default class UFO {
    static bulbCount = 8;
    static type = 0;
    static startID = 200;
    static index = 0;
    static init = false;
    static nameList: string[] = [];
    static list: UFO[] = [];

    private type;
    private lightID;
    private mapData;
    private ufoMaterial;
    private ufoParent;
    constructor(mapData: v3.Difficulty, name = '') {
        if (UFO.nameList.includes(name)) {
            throw new Error('UFO name ' + name + ' already existed');
        }
        UFO.nameList.push(name);
        this.type = UFO.type;
        this.lightID = UFO.startID + UFO.index;
        if (!UFO.init) {
            mapData.customData.pointDefinitions!.ufoSpinLoop = [
                [0, 0, 0, 0],
                [0, 90, 10, 0.25],
                [0, 180, 0, 0.5],
                [0, 270, -10, 0.75],
                [0, 360, 0, 1],
            ];
            UFO.init = true;
        }

        this.mapData = mapData;
        this.ufoMaterial = 'ufoMaterial_' + name;
        this.ufoParent = 'ufoParent_' + name;
        mapData.customData.materials![this.ufoMaterial] = {
            shader: 'Standard',
            color: [0, 0, 1],
            track: this.ufoMaterial,
        };
        mapData.customData.environment?.push(
            {
                geometry: {
                    type: 'Sphere',
                    material: this.ufoMaterial,
                },
                track: this.ufoParent,
                position: [0, 0, 0],
                scale: [1.3125, 0.75, 1.3125],
            },
            {
                geometry: {
                    type: 'Sphere',
                    material: this.ufoMaterial,
                },
                track: 'ufoSaucer_' + name,
                position: [0, -0.0625, 0],
                scale: [2.125, 0.125, 2.125],
            },
            {
                geometry: {
                    type: 'Cylinder',
                    material: 'lightMaterial',
                },
                track: 'ufoBeam_' + name,
                position: [0, -64, 0],
                scale: [0.5, 64, 0.5],
                components: {
                    ILightWithId: {
                        type: UFO.type,
                        lightID: UFO.startID + UFO.index++,
                    },
                },
            },
        );
        const ufoLegPoint = NE.createCircle(0.375, 4);
        const ufoLegTrack = [];
        for (const p in ufoLegPoint) {
            const partName = `ufoLeg${p}_${name}`;
            mapData.customData.environment?.push({
                geometry: {
                    type: 'Sphere',
                    material: this.ufoMaterial,
                },
                track: partName,
                position: [ufoLegPoint[p][0], -0.1875, ufoLegPoint[p][1]],
                scale: [0.5, 0.5, 0.5],
            });
            ufoLegTrack.push(partName);
        }
        const ufoBulbPoint = NE.createCircle(0.5625, UFO.bulbCount);
        const ufoBulbTrack = [];
        for (const p in ufoBulbPoint) {
            const partName = `ufoBulb${p}_${name}`;
            mapData.customData.environment?.push({
                geometry: {
                    type: 'Sphere',
                    material: 'lightMaterialOpaque',
                },
                track: partName,
                position: [ufoBulbPoint[p][0], 0.09375, ufoBulbPoint[p][1]],
                scale: [0.21875, 0.21875, 0.21875],
                components: {
                    ILightWithId: {
                        type: UFO.type,
                        lightID: UFO.startID + UFO.index++,
                    },
                    TubeBloomPrePassLight: {
                        bloomFogIntensityMultiplier: 1 / 64,
                    },
                },
            });
            ufoBulbTrack.push(partName);
        }
        mapData.customData.customEvents?.push({
            b: 0,
            t: 'AssignTrackParent',
            d: {
                parentTrack: this.ufoParent,
                childrenTracks: [...ufoBulbTrack, ...ufoLegTrack, 'ufoSaucer_' + name, 'ufoBeam_' + name],
            },
        });

        UFO.list.push(this);

        logger.info(
            `Created UFO ${name} with light type ${UFO.type} ID ${this.lightID}-${UFO.startID + UFO.index - 1}`,
        );
    }
    static reset() {
        UFO.index = 0;
        UFO.init = false;
        UFO.nameList = [];
        UFO.list = [];
    }
    hide(time: number) {
        this.animate(time, time, {
            position: [[-9999, -9999, -9999, 0]],
        });
    }
    beam(time: number, color = 2) {
        this.mapData.addBasicEvents({
            b: time,
            et: this.type,
            i: color === 0 ? 7 : color === 1 ? 3 : 11,
            f: 0.5,
            customData: { lightID: this.lightID },
        });
    }
    light(time: number, value: EventLightValue, brightness: number, easing?: types.Easings) {
        this.mapData.addBasicEvents({
            b: time,
            et: this.type,
            i: value,
            f: brightness,
            customData: {
                lightID: Array.from(Array(8), (_, i) => i + this.lightID + 1),
                easing,
            },
        });
    }
    animate(
        from: number,
        to: number,
        animation: Omit<types.v3.ICustomEventDataAnimateTrack, 'duration' | 'track'>,
        material?: boolean,
    ) {
        this.mapData.customData.customEvents?.push({
            b: from,
            t: 'AnimateTrack',
            d: {
                track: material ? this.ufoMaterial : this.ufoParent,
                duration: Math.max(to - from, 0),
                ...animation,
            },
        });
    }
}
