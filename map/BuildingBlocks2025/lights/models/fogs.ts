import { types } from '@bsmap';

export function create(): types.wrapper.ICustomDataDifficulty {
   return {
      environment: [
         {
            id: 'Environment',
            lookupMethod: 'EndsWith',
            components: {
               BloomFogEnvironment: { startY: -1500, height: 750 },
            },
         },
      ],
   };
}
