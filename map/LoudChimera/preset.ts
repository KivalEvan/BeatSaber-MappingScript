import * as bsmap from '../../depsLocal.ts';

export function preset(data: bsmap.v3.DifficultyData) {
    bsmap.logger.info('Run Preset');
    data.customData.pointDefinitions = data.customData.pointDefinitions ?? {};
    data.customData.customEvents = data.customData.customEvents ?? [];

    data.customData.pointDefinitions.pointZero = [[0, 0]];
    data.customData.pointDefinitions.pointOne = [[1, 0]];
    data.customData.pointDefinitions.pointGoZero = [
        [1, 0],
        [1, 0.9, 'easeStep'],
        [0, 1, 'easeOutQuint'],
    ];
    data.customData.pointDefinitions.pointAPAGoZero = [
        [1, 0],
        [1, 0.45, 'easeStep'],
        [0, 0.5, 'easeOutQuint'],
    ];
    data.customData.pointDefinitions.pointGoOne = [
        [0, 0],
        [0, 0.9, 'easeStep'],
        [1, 1, 'easeOutQuint'],
    ];
    data.customData.pointDefinitions.pointAPAGoOne = [
        [0, 0],
        [0, 0.45, 'easeStep'],
        [1, 0.5, 'easeOutQuint'],
    ];

    data.customData.customEvents?.push(
        {
            b: 0,
            t: 'AnimateTrack',
            d: { duration: 0, track: 'trackInvisible', dissolve: 'pointZero' },
        },
        {
            b: 0,
            t: 'AnimateTrack',
            d: {
                duration: 0,
                track: 'trackArrowInvisible',
                dissolveArrow: 'pointZero',
            },
        },
        {
            b: 0,
            t: 'AnimateTrack',
            d: { duration: 0, track: 'trackVisible', dissolve: 'pointOne' },
        },
        {
            b: 0,
            t: 'AnimateTrack',
            d: {
                duration: 0,
                track: 'trackArrowVisible',
                dissolveArrow: 'pointOne',
            },
        },
        {
            b: 0,
            t: 'AssignPathAnimation',
            d: {
                track: 'trackAPAGoingInvisible',
                dissolve: 'pointAPAGoZero',
            },
        },
        {
            b: 0,
            t: 'AssignPathAnimation',
            d: {
                track: 'trackAPAArrowGoingInvisible',
                dissolveArrow: 'pointAPAGoZero',
            },
        },
        {
            b: 0,
            t: 'AssignPathAnimation',
            d: {
                track: 'trackAPAGoingVisible',
                dissolve: 'pointAPAGoOne',
            },
        },
        {
            b: 0,
            t: 'AssignPathAnimation',
            d: {
                track: 'trackAPAArrowGoingVisible',
                dissolveArrow: 'pointAPAGoOne',
            },
        },
    );
}
