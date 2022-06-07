import { IDifficultyData } from '../../types/beatmap/v2/difficulty.ts';
import { DifficultyData } from './difficulty.ts';
import { deepCheck } from '../shared/dataCheck.ts';
import { DifficultyDataCheck } from './dataCheck.ts';
import logger from '../../logger.ts';

const tag = (name: string) => {
    return `[v2::parse::${name}]`;
};

// FIXME: this is a mess but i dont want to fix it anyway
export const difficulty = (data: IDifficultyData): DifficultyData => {
    logger.info(tag('difficulty'), 'Parsing beatmap difficulty v2.x.x');
    if (!data._version?.startsWith('2')) {
        logger.warn(tag('difficulty'), 'Unidentified beatmap version');
        data._version = '2.0.0';
    }
    deepCheck(data, DifficultyDataCheck, 'difficulty', data._version);

    // haha why do i have to do this, beat games
    data._notes = data._notes ?? [];
    data._sliders = data._sliders ?? [];
    data._obstacles = data._obstacles ?? [];
    data._events = data._events ?? [];
    data._waypoints = data._waypoints ?? [];

    data._notes.sort((a, b) => a._time - b._time);
    data._sliders.sort((a, b) => a._headTime - b._headTime);
    data._obstacles.sort((a, b) => a._time - b._time);
    data._events.sort((a, b) => a._time - b._time);
    data._waypoints.sort((a, b) => a._time - b._time);

    return DifficultyData.create(data);
};
