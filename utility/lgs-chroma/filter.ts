import { hasFlag, logger, pickRandom, pRandomFn, range, shuffle, types } from '@bsmap';

function zip<T, U>(a: T[], b: U[]): [T, U][] {
   return Array.from(Array(Math.max(b.length, a.length)), (_, i) => [
      a[i],
      b[i],
   ]);
}

function take<T>(a: T[], n: number): T[] {
   return a.slice(0, n);
}

function takeRandom<T>(array: T[], take: number, random: () => number): T[] {
   const ary: T[] = [];
   while (take) {
      ary.push(pickRandom(array, random));
      take--;
   }
   return ary;
}

export function getIndexFromFilter(
   filter: Partial<types.wrapper.IWrapIndexFilter>,
   groupSize: number,
): [id: number, idDuration: number, idDistribution: number][] {
   const chunks = filter.chunks || 0;
   const p0 = filter.p0 || 0;
   const p1 = filter.p1 || 0;
   const limitAffectsType = filter.limitAffectsType || 0;
   const limit = filter.limit || 0;
   const random = filter.random || 0;
   const type = filter.type || types.IndexFilterType.DIVISION;

   const chunkSize = chunks === 0 ? 1 : Math.ceil(groupSize / chunks);
   const partitionSize = Math.ceil(groupSize / chunkSize);

   let start = 0;
   let step = 0;
   let count = 0;
   switch (type) {
      case types.IndexFilterType.DIVISION: {
         const sectionSize = Math.ceil(partitionSize / (p1 || 1));
         start = sectionSize * p1;
         let end = Math.min(partitionSize - 1, start + sectionSize - 1);
         if (filter.reverse) {
            start = partitionSize - sectionSize * p1 - 1;
            end = Math.max(0, start - sectionSize + 1);
         }

         step = end - start >= 0 ? 1 : -1;
         count = Math.abs(end - start) + 1;
         break;
      }
      case types.IndexFilterType.STEP_AND_OFFSET: {
         start = p0;
         step = p1;
         const offset = partitionSize - start;
         if (offset <= 0) {
            logger.warn('Step and Offset has negative size.');
            return [];
         }
         count = step === 0 ? 1 : Math.ceil(offset / step);
         if (filter.reverse) {
            start = partitionSize - 1 - start;
            step = -step;
         }
         break;
      }
   }

   const elements = getElements(start, step, count);
   if (random !== 0 && !hasFlag(random, types.RandomType.KEEP_ORDER)) {
      shuffle(elements, pRandomFn(filter.seed));
   }

   let indices = range(0, count);
   const visibleCount = limit === 0 || limit === 1 ? count : Math.ceil(count * limit);
   if (visibleCount > 0) {
      indices = hasFlag(random, types.RandomType.RANDOM_ELEMENTS)
         ? takeRandom(indices, visibleCount, pRandomFn(filter.seed))
         : take(indices, visibleCount);
   }

   const pairs = zip(elements, indices);
   let limitedOrderIndex = 0;
   const results: [number, number, number][] = [];
   for (const [elementId, index] of pairs) {
      for (
         let localChunkIndex = 0;
         localChunkIndex < chunkSize;
         localChunkIndex++
      ) {
         const idx = elementId * chunkSize + localChunkIndex;
         if (idx >= groupSize) {
            break;
         }
         const durationIdx = hasFlag(
               limitAffectsType,
               types.LimitAlsoAffectsType.DURATION,
            )
            ? limitedOrderIndex
            : index;
         const distributionIdx = hasFlag(
               limitAffectsType,
               types.LimitAlsoAffectsType.DISTRIBUTION,
            )
            ? limitedOrderIndex
            : index;
         results.push([idx, durationIdx, distributionIdx]);
      }
      limitedOrderIndex++;
   }
   return results;
}

function getElements(start: number, step: number, count: number): number[] {
   const ids = [];
   let value = start;
   for (let i = 0; i < count; i++) {
      ids.push(value);
      value += step;
   }
   return ids;
}
