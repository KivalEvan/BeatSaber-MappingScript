import { IndexFilter, IndexFilterType } from '../depsLocal.ts';

export const FILTER_CHUNK_2_DIV: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.DIVISION,
   chunks: 2,
});

export const FILTER_CHUNK_3_DIV: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.DIVISION,
   chunks: 3,
});

export const FILTER_CHUNK_4_DIV: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.DIVISION,
   chunks: 4,
});

export const FILTER_CHUNK_6_DIV: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.DIVISION,
   chunks: 6,
});

export const FILTER_CHUNK_8_DIV: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.DIVISION,
   chunks: 8,
});

export const FILTER_CHUNK_12_DIV: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.DIVISION,
   chunks: 12,
});

export const FILTER_HALF_1_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 0,
   p1: 2,
});

export const FILTER_HALF_2_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 1,
   p1: 2,
});

export const FILTER_HALF_1_DIV: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.DIVISION,
   p0: 2,
   p1: 0,
});

export const FILTER_HALF_2_DIV: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.DIVISION,
   p0: 2,
   p1: 1,
});

export const FILTER_TRIPLET_1_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 0,
   p1: 3,
});

export const FILTER_TRIPLET_2_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 1,
   p1: 3,
});

export const FILTER_TRIPLET_3_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 2,
   p1: 3,
});

export const FILTER_QUARTET_1_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 0,
   p1: 4,
});

export const FILTER_QUARTET_2_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 1,
   p1: 4,
});

export const FILTER_QUARTET_3_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 2,
   p1: 4,
});

export const FILTER_QUARTET_4_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 3,
   p1: 4,
});

export const FILTER_QUARTET_1_DIV: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.DIVISION,
   p0: 4,
   p1: 0,
});

export const FILTER_QUARTET_2_DIV: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.DIVISION,
   p0: 4,
   p1: 1,
});

export const FILTER_QUARTET_3_DIV: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.DIVISION,
   p0: 4,
   p1: 2,
});

export const FILTER_QUARTET_4_DIV: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.DIVISION,
   p0: 4,
   p1: 3,
});

export const FILTER_SEXTUPLET_1_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 0,
   p1: 6,
});

export const FILTER_SEXTUPLET_2_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 1,
   p1: 6,
});

export const FILTER_SEXTUPLET_3_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 2,
   p1: 6,
});

export const FILTER_SEXTUPLET_4_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 3,
   p1: 6,
});

export const FILTER_SEXTUPLET_5_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 4,
   p1: 6,
});

export const FILTER_SEXTUPLET_6_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 5,
   p1: 6,
});

export const FILTER_TWELVE_1_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 0,
   p1: 12,
});

export const FILTER_TWELVE_2_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 1,
   p1: 12,
});

export const FILTER_TWELVE_3_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 2,
   p1: 12,
});

export const FILTER_TWELVE_4_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 3,
   p1: 12,
});

export const FILTER_TWELVE_5_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 4,
   p1: 12,
});

export const FILTER_TWELVE_6_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 5,
   p1: 12,
});

export const FILTER_TWELVE_7_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 6,
   p1: 12,
});

export const FILTER_TWELVE_8_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 7,
   p1: 12,
});

export const FILTER_TWELVE_9_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 8,
   p1: 12,
});

export const FILTER_TWELVE_10_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 9,
   p1: 12,
});

export const FILTER_TWELVE_11_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 10,
   p1: 12,
});

export const FILTER_TWELVE_12_STEP: Readonly<IndexFilter> = new IndexFilter({
   type: IndexFilterType.STEP_AND_OFFSET,
   p0: 11,
   p1: 12,
});
