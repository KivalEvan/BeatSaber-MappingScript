import * as bsmap from '../../depsLocal.ts';
const { noodleExtensions: NE } = bsmap.ext;

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
    constructor(mapData: bsmap.v3.DifficultyData, name = '') {
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
                    type: 'Cube',
                    material: this.ufoMaterial,
                },
                track: this.ufoParent,
                position: [0, 2.125, 0],
                scale: [0.001, 0.001, 0.001],
            },
            {
                geometry: {
                    type: 'Sphere',
                    material: this.ufoMaterial,
                },
                track: 'ufoHead_' + name,
                position: [0, 2.125, 0],
                scale: [1.25, 0.75, 1.25],
            },
            {
                geometry: {
                    type: 'Sphere',
                    material: this.ufoMaterial,
                },
                track: 'ufoSaucer_' + name,
                position: [0, 2, 0],
                scale: [2.125, 0.125, 2.125],
            },
            {
                geometry: {
                    type: 'Cylinder',
                    material: 'lightMaterial',
                },
                track: 'ufoBeam_' + name,
                position: [0, 2 - 64, 0],
                scale: [0.5, 64, 0.5],
                components: {
                    ILightWithId: {
                        type: UFO.type,
                        lightID: UFO.startID + UFO.index++,
                    },
                },
            }
        );
        const ufoLegPoint = NE.createCircle(0.4375, 4);
        const ufoLegTrack = [];
        for (const p in ufoLegPoint) {
            const partName = `ufoLeg${p}_${name}`;
            mapData.customData.environment?.push({
                geometry: {
                    type: 'Sphere',
                    material: this.ufoMaterial,
                },
                track: partName,
                position: [0 + ufoLegPoint[p][0], 1.9, 0 + ufoLegPoint[p][1]],
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
                    material: { shader: 'TransparentLight' },
                },
                track: partName,
                position: [0 + ufoBulbPoint[p][0], 2.2, 0 + ufoBulbPoint[p][1]],
                scale: [0.25, 0.25, 0.25],
                components: {
                    ILightWithId: {
                        type: UFO.type,
                        lightID: UFO.startID + UFO.index++,
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
                childrenTracks: [
                    ...ufoBulbTrack,
                    ...ufoLegTrack,
                    'ufoHead_' + name,
                    'ufoSaucer_' + name,
                    'ufoBeam_' + name,
                ],
            },
        });

        bsmap.logger.info(
            `Created UFO ${name} with light type ${UFO.type} ID ${this.lightID}-${
                UFO.startID + UFO.index - 1
            }`
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
    light(time: number, color: bsmap.EventLightValue) {
        this.mapData.addBasicEvents({
            b: time,
            et: this.type,
            i: color === 0 ? 7 : color === 1 ? 3 : 11,
            f: 0.5,
            customData: {
                lightID: Array.from(Array(8), (_, i) => i + this.lightID + 1),
            },
        });
    }
    animate(
        from: number,
        to: number,
        animation: Omit<
            Omit<bsmap.types.v3.ICustomEventDataAnimateTrack, 'duration'>,
            'track'
        >,
        material?: boolean
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
