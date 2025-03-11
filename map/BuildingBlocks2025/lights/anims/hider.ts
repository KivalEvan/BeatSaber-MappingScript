import { types } from '@bsmap';

export const HIDE_POSITION: types.Vector3 = [0, -69420, -69420];

export const HIDE_TIME_TRACK: Record<number, string[]> = {};
export const SHOW_ENVIRONMENTS: types.v3.ICustomEventAnimateTrack[] = [];

export function hideEnvironment(
   time: number,
   environment: types.v3.IChromaEnvironment | types.v3.IChromaEnvironment[],
): void {
   if (!HIDE_TIME_TRACK[time]) {
      HIDE_TIME_TRACK[time] = [];
   }
   const ary = Array.isArray(environment) ? environment : [environment];
   for (const env of ary) HIDE_TIME_TRACK[time].push(env.track!);
}

export function showEnvironment(
   time: number,
   environment: types.v3.IChromaEnvironment | types.v3.IChromaEnvironment[],
): types.v3.ICustomEventAnimateTrack[] {
   const ary = Array.isArray(environment) ? environment : [environment];
   const events = [];
   for (const env of ary) {
      const ev: types.v3.ICustomEventAnimateTrack = {
         b: time,
         t: 'AnimateTrack',
         d: {
            track: env.track!,
            position: [[...env.position!, 0]],
            duration: 0,
         },
      };
      SHOW_ENVIRONMENTS.push(ev);
      events.push(ev);
   }
   return events;
}

export function create(): types.wrapper.ICustomDataDifficulty {
   return {
      customEvents: SHOW_ENVIRONMENTS.concat(
         Object.entries(HIDE_TIME_TRACK).map(([time, tracks]) => {
            return {
               b: Number(time),
               t: 'AnimateTrack',
               d: {
                  track: tracks.length > 1 ? tracks : tracks[0],
                  position: 'hideEnvironment',
                  duration: 0,
               },
            };
         }),
      ),
      pointDefinitions: {
         hideEnvironment: [[...HIDE_POSITION, 0]],
      },
   };
}
