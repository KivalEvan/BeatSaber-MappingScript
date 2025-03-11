import { types } from '@bsmap';

export const enum Materials {
   STANDARD = 'OGStandard',
   TORII_STANDARD = 'OGStandard',
   OPAQUE_LIGHT = 'OGOpaqueLight',
   TRANSPARENT_LIGHT = 'OGTransparentLight',
}

export function create(): types.wrapper.ICustomDataDifficulty {
   return {
      materials: {
         [Materials.STANDARD]: { shader: 'Standard' },
         // [Materials.TORII_STANDARD]: {
         //    shader: 'Standard',
         //    color: [1, 0.125, 0],
         // },
         [Materials.OPAQUE_LIGHT]: { shader: 'OpaqueLight' },
         [Materials.TRANSPARENT_LIGHT]: { shader: 'TransparentLight' },
      },
   };
}
