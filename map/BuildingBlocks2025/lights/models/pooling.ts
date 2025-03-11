import { types } from '@bsmap';

const USABLE_MODELS: types.v3.IChromaEnvironment[] = [];
const MODEL_POOL: [
   types.v3.IChromaEnvironment,
   [start: number, end: number],
][] = [];

function withinRange(value: number, min: number, max: number) {
   return value >= min && value <= max;
}

export function allowManipulation(
   ...environment: types.v3.IChromaEnvironment[]
) {
   USABLE_MODELS.push(...environment);
}

export function mark(
   environment: types.v3.IChromaEnvironment,
   start: number,
   end: number,
) {
   if (!USABLE_MODELS.includes(environment)) {
      throw new Error(
         `Selected environment model is not allowed: ${environment}`,
      );
   }

   const exists = MODEL_POOL.filter(
      ([env, [s, e]]) =>
         env === environment &&
         (withinRange(start, s, e) || withinRange(end, s, e)),
   );
   if (exists.length) {
      throw new Error(
         `Cannot mark model to animation, being used by another animation. ${exists}`,
      );
   }

   MODEL_POOL.push([environment, [start, end]]);
}
