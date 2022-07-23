import * as bsmap from '../../depsLocal.ts';
const { noodleExtensions: NE } = bsmap.ext;
const { between } = bsmap.ext.selector;

export function sus(
    data: bsmap.v3.DifficultyData,
    BPM: bsmap.BeatPerMinute,
    NJS: bsmap.NoteJumpSpeed,
) {
    bsmap.logger.info('Run Sus');
    data.customData.environment?.push(
        {
            geometry: {
                type: 'Capsule',
                material: { shader: 'Standard', color: [1, 0, 0] },
            },
            position: [0, 1.125, 8],
            scale: [1, 0.75, 1],
        },
        {
            geometry: {
                type: 'Cylinder',
                material: { shader: 'Standard', color: [1, 0, 0] },
            },
            position: [-0.28125, 0.5, 8],
            scale: [0.4375, 0.4375, 0.4375],
        },
        {
            geometry: {
                type: 'Cylinder',
                material: { shader: 'Standard', color: [1, 0, 0] },
            },
            position: [0.28125, 0.5, 8],
            scale: [0.4375, 0.4375, 0.4375],
        },
        {
            geometry: {
                type: 'Capsule',
                material: { shader: 'Standard', color: [0, 1, 1] },
            },
            position: [0, 1.375, 8.5],
            scale: [0.375, 0.375, 0.375],
            rotation: [0, 0, 90],
        },
        {
            geometry: {
                type: 'Capsule',
                material: { shader: 'Standard', color: [0, 0, 0] },
            },
            position: [0, 1.375, 8.4375],
            scale: [0.4375, 0.4375, 0.25],
            rotation: [0, 0, 90],
        },
    );
}
