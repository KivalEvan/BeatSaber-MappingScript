import * as bsmap from '../../depsLocal.ts';
import UFO from './ufo.ts';

export function preset(data: bsmap.v3.DifficultyData) {
    bsmap.logger.info('Run Preset');
    data.customData.pointDefinitions = data.customData.pointDefinitions ?? {};
    data.customData.customEvents = data.customData.customEvents ?? [];
    data.customData.environment = [];
    data.customData.materials = {};
    data.customData.fakeColorNotes = [];
    data.customData.fakeBombNotes = [];
    data.customData.fakeObstacles = [];
    data.customData.fakeBurstSliders = [];
    UFO.reset();

    data.customData.materials!.lightMaterial = { shader: 'TransparentLight' };
    data.customData.pointDefinitions.pZero = [[0, 0]];
    data.customData.pointDefinitions.pOne = [[1, 0]];
    data.customData.pointDefinitions.pGoZero = [
        [1, 0],
        [1, 0.9, 'easeStep'],
        [0, 1, 'easeOutQuint'],
    ];
    data.customData.pointDefinitions.pAPAGoZero = [
        [1, 0],
        [1, 0.45, 'easeStep'],
        [0, 0.5, 'easeOutQuint'],
    ];
    data.customData.pointDefinitions.pGoOne = [
        [0, 0],
        [0, 0.9, 'easeStep'],
        [1, 1, 'easeOutQuint'],
    ];
    data.customData.pointDefinitions.pAPAGoOne = [
        [0, 0],
        [0, 0.45, 'easeStep'],
        [1, 0.5, 'easeOutQuint'],
    ];

    data.customData.customEvents?.push(
        {
            b: 0,
            t: 'AnimateTrack',
            d: { duration: 0, track: 'trackInvisible', dissolve: 'pZero' },
        },
        {
            b: 0,
            t: 'AnimateTrack',
            d: {
                duration: 0,
                track: 'trackArrowInvisible',
                dissolveArrow: 'pZero',
            },
        },
        {
            b: 0,
            t: 'AnimateTrack',
            d: { duration: 0, track: 'trackVisible', dissolve: 'pOne' },
        },
        {
            b: 0,
            t: 'AnimateTrack',
            d: {
                duration: 0,
                track: 'trackArrowVisible',
                dissolveArrow: 'pOne',
            },
        },
        {
            b: 0,
            t: 'AssignPathAnimation',
            d: {
                track: 'trackAPAGoingInvisible',
                dissolve: 'pAPAGoZero',
            },
        },
        {
            b: 0,
            t: 'AssignPathAnimation',
            d: {
                track: 'trackAPAArrowGoingInvisible',
                dissolveArrow: 'pAPAGoZero',
            },
        },
        {
            b: 0,
            t: 'AssignPathAnimation',
            d: {
                track: 'trackAPAGoingVisible',
                dissolve: 'pAPAGoOne',
            },
        },
        {
            b: 0,
            t: 'AssignPathAnimation',
            d: {
                track: 'trackAPAArrowGoingVisible',
                dissolveArrow: 'pAPAGoOne',
            },
        }
    );
}
