import { Beatmap, EventLightValue } from '@bsmap';
import { YIN_YANG_LIGHT_ID } from '../models/yinYang.ts';

export function add(
   beatmap: Beatmap,
): Beatmap {
   beatmap.addBasicEvents(
      {
         time: 455.5,
         type: 6,
         value: EventLightValue.WHITE_ON,
         floatValue: 0,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
      {
         time: 457.5,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 1,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
      {
         time: 484,
         type: 6,
         value: EventLightValue.WHITE_ON,
         floatValue: 1,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
      {
         time: 484.75,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 0,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
      {
         time: 581,
         type: 6,
         value: EventLightValue.WHITE_ON,
         floatValue: 0,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
      {
         time: 581.125,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 3,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
      {
         time: 582.375,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 1.75,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
      {
         time: 582.875,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 0,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
   );

   const repeat = [679, 687, 695];
   for (const rep of repeat) {
      beatmap.addBasicEvents(
         {
            time: rep,
            type: 6,
            value: EventLightValue.WHITE_ON,
            floatValue: 0,
            customData: {
               lightID: YIN_YANG_LIGHT_ID,
            },
         },
         {
            time: rep + 0.125,
            type: 6,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: 2.5,
            customData: {
               lightID: YIN_YANG_LIGHT_ID,
            },
         },
         {
            time: rep + 6.875,
            type: 6,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: 1.75,
            customData: {
               lightID: YIN_YANG_LIGHT_ID,
            },
         },
         {
            time: rep + 7,
            type: 6,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: 0,
            customData: {
               lightID: YIN_YANG_LIGHT_ID,
            },
         },
         {
            time: rep + 7.25,
            type: 6,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: 2,
            customData: {
               lightID: YIN_YANG_LIGHT_ID,
            },
         },
         {
            time: rep + 7.875,
            type: 6,
            value: EventLightValue.WHITE_TRANSITION,
            floatValue: 0,
            customData: {
               lightID: YIN_YANG_LIGHT_ID,
            },
         },
      );
   }
   beatmap.addBasicEvents(
      {
         time: 703,
         type: 6,
         value: EventLightValue.WHITE_ON,
         floatValue: 0,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
      {
         time: 703.125,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 2.5,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
      {
         time: 706.875,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 1.75,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
      {
         time: 707,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 0,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
      {
         time: 707.25,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 2,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
      {
         time: 709.875,
         type: 6,
         value: EventLightValue.WHITE_TRANSITION,
         floatValue: 0,
         customData: {
            lightID: YIN_YANG_LIGHT_ID,
         },
      },
   );

   return beatmap;
}
