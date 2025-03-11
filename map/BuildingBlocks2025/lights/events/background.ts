import { Beatmap, EventLightValue, types } from '@bsmap';
import { BACKGROUND_LIGHT_ID } from '../models/background.ts';

export function add(
   beatmap: Beatmap,
): Beatmap {
   const brrrrr = [231, 263, 615, 647];
   for (const time of brrrrr) {
      continue;
      for (let t = 0; t < 0.875; t += 0.125) {
         beatmap.addBasicEvents(
            {
               time: time + t,
               type: 6,
               value: EventLightValue.RED_ON,
               floatValue: 1,
               customData: {
                  lightID: BACKGROUND_LIGHT_ID,
                  color: [1, 0, 0],
               },
            },
            {
               time: time + t + 0.0625,
               type: 6,
               value: EventLightValue.OFF,
               floatValue: 0,
               customData: {
                  lightID: BACKGROUND_LIGHT_ID,
               },
            },
         );
      }
   }
   beatmap.addBasicEvents(
      {
         time: 454,
         type: 6,
         value: EventLightValue.WHITE_ON,
         floatValue: 0,
         customData: {
            lightID: BACKGROUND_LIGHT_ID,
         },
      },
      {
         time: 454.75,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 2.5,
         customData: {
            lightID: BACKGROUND_LIGHT_ID,
         },
      },
      {
         time: 454.9375,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 0,
         customData: {
            lightID: BACKGROUND_LIGHT_ID,
         },
      },
      {
         time: 678,
         type: 6,
         value: EventLightValue.WHITE_ON,
         floatValue: 0,
         customData: {
            lightID: BACKGROUND_LIGHT_ID,
         },
      },
      {
         time: 678.75,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 2,
         customData: {
            lightID: BACKGROUND_LIGHT_ID,
         },
      },
      {
         time: 678.9375,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 0,
         customData: {
            lightID: BACKGROUND_LIGHT_ID,
         },
      },
      {
         time: 710,
         type: 6,
         value: EventLightValue.WHITE_ON,
         floatValue: 0,
         customData: {
            lightID: BACKGROUND_LIGHT_ID,
         },
      },
      {
         time: 710.125,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 1.5,
         customData: {
            lightID: BACKGROUND_LIGHT_ID,
         },
      },
      {
         time: 710.9375,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 0,
         customData: {
            lightID: BACKGROUND_LIGHT_ID,
         },
      },
   );

   return beatmap;
}
