import { types } from '@bsmap';

export function create(): types.wrapper.ICustomDataDifficulty {
   const environment: types.v3.IChromaEnvironment[] = [
      {
         id: 'LeftWrapper',
         lookupMethod: 'EndsWith',
         track: 'laserSetL',
      },
      {
         id: 'RightWrapper',
         lookupMethod: 'EndsWith',
         track: 'laserSetR',
      },
      {
         id: 'SideLasers',
         lookupMethod: 'EndsWith',
         track: 'laserSet',
      },
   ];

   return { environment };
}
