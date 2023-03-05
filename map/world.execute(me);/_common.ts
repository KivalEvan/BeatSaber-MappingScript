import { EventBoxColor, IndexFilterType, TransitionType, types, v3 } from '../../depsLocal.ts';

export const TIME_OFFSET = 4;

export const enum Brightness {
    OFF = 0,
    DIM = 0.25,
    HALF = 0.5,
    MODERATE = 0.75,
    FULL = 1,
    FLASH = 1.2,
    EXTRA = 1.5,
    DOUBLE = 2,
    TRIPLE = 3,
    QUAD = 4,
}

export const enum Group {
    SMALL_RINGS_RT,
    SMALL_RINGS_C,
    UNDERGROUND,
    BIG_RINGS,
    TOP_SPOTLIGHTS,
    RUNWAY_LEFT,
    RUNWAY_RIGHT,
    PARTICLES_LEFT,
    PARTICLES_RIGHT,
    MAIN_LASERS_BOTTOM_LEFT,
    MAIN_LASERS_TOP_LEFT,
    MAIN_LASERS_TOP_RIGHT,
    MAIN_LASERS_BOTTOM_RIGHT,
}

export const FILTER_CHUNK_2_DIV = v3.IndexFilter.create({
    type: IndexFilterType.DIVISION,
    chunks: 2,
});

export const FILTER_CHUNK_3_DIV = v3.IndexFilter.create({
    type: IndexFilterType.DIVISION,
    chunks: 3,
});

export const FILTER_CHUNK_4_DIV = v3.IndexFilter.create({
    type: IndexFilterType.DIVISION,
    chunks: 4,
});

export const FILTER_CHUNK_6_DIV = v3.IndexFilter.create({
    type: IndexFilterType.DIVISION,
    chunks: 6,
});

export const FILTER_CHUNK_12_DIV = v3.IndexFilter.create({
    type: IndexFilterType.DIVISION,
    chunks: 12,
});

export const FILTER_HALF_1_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 0,
    p1: 2,
});

export const FILTER_HALF_2_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 1,
    p1: 2,
});

export const FILTER_HALF_1_DIV = v3.IndexFilter.create({
    type: IndexFilterType.DIVISION,
    p0: 2,
    p1: 0,
});

export const FILTER_HALF_2_DIV = v3.IndexFilter.create({
    type: IndexFilterType.DIVISION,
    p0: 2,
    p1: 1,
});

export const FILTER_TRIPLET_1_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 0,
    p1: 3,
});

export const FILTER_TRIPLET_2_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 1,
    p1: 3,
});

export const FILTER_TRIPLET_3_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 2,
    p1: 3,
});

export const FILTER_QUARTET_1_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 0,
    p1: 4,
});

export const FILTER_QUARTET_2_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 1,
    p1: 4,
});

export const FILTER_QUARTET_3_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 2,
    p1: 4,
});

export const FILTER_QUARTET_4_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 3,
    p1: 4,
});

export const FILTER_QUARTET_1_DIV = v3.IndexFilter.create({
    type: IndexFilterType.DIVISION,
    p0: 4,
    p1: 0,
});

export const FILTER_QUARTET_2_DIV = v3.IndexFilter.create({
    type: IndexFilterType.DIVISION,
    p0: 4,
    p1: 1,
});

export const FILTER_QUARTET_3_DIV = v3.IndexFilter.create({
    type: IndexFilterType.DIVISION,
    p0: 4,
    p1: 2,
});

export const FILTER_QUARTET_4_DIV = v3.IndexFilter.create({
    type: IndexFilterType.DIVISION,
    p0: 4,
    p1: 3,
});

export const FILTER_SEXTUPLET_1_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 0,
    p1: 6,
});

export const FILTER_SEXTUPLET_2_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 1,
    p1: 6,
});

export const FILTER_SEXTUPLET_3_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 2,
    p1: 6,
});

export const FILTER_SEXTUPLET_4_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 3,
    p1: 6,
});

export const FILTER_SEXTUPLET_5_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 4,
    p1: 6,
});

export const FILTER_SEXTUPLET_6_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 5,
    p1: 6,
});

export const FILTER_TWELVE_1_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 0,
    p1: 12,
});

export const FILTER_TWELVE_2_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 1,
    p1: 12,
});

export const FILTER_TWELVE_3_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 2,
    p1: 12,
});

export const FILTER_TWELVE_4_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 3,
    p1: 12,
});

export const FILTER_TWELVE_5_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 4,
    p1: 12,
});

export const FILTER_TWELVE_6_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 5,
    p1: 12,
});

export const FILTER_TWELVE_7_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 6,
    p1: 12,
});

export const FILTER_TWELVE_8_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 7,
    p1: 12,
});

export const FILTER_TWELVE_9_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 8,
    p1: 12,
});

export const FILTER_TWELVE_10_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 9,
    p1: 12,
});

export const FILTER_TWELVE_11_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 10,
    p1: 12,
});

export const FILTER_TWELVE_12_STEP = v3.IndexFilter.create({
    type: IndexFilterType.STEP_AND_OFFSET,
    p0: 11,
    p1: 12,
});

export const SMALL_RINGS_DRUM_INNER: Partial<types.wrapper.IWrapLightColorBaseAttribute>[] = [
    { color: EventBoxColor.WHITE, brightness: 1.2 },
    { time: 0.0625, color: EventBoxColor.WHITE, brightness: 0 },
    {
        time: 0.125,
        color: EventBoxColor.RED,
    },
    {
        time: 0.5,
        color: EventBoxColor.BLUE,
        brightness: 0,
        transition: TransitionType.INTERPOLATE,
    },
];

export const SMALL_RINGS_DRUM_OUTER: Partial<types.wrapper.IWrapLightColorBaseAttribute>[] = [
    { color: EventBoxColor.WHITE, brightness: 1.2 },
    { time: 0.0625, color: EventBoxColor.WHITE, brightness: 0 },
    { time: 0.125, color: EventBoxColor.WHITE, brightness: 0.5 },
    {
        time: 0.25,
        color: EventBoxColor.WHITE,
        transition: TransitionType.INTERPOLATE,
        brightness: 0.25,
    },
];
