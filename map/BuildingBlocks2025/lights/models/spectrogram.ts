import { types } from '@bsmap';

export function create(): types.wrapper.ICustomDataDifficulty {
   return {
      environment: [
         {
            id: 'SpectrogramGameObjectSwitchEvent',
            lookupMethod: 'EndsWith',
            scale: [169, 169, 169],
         },
      ],
   };
}
