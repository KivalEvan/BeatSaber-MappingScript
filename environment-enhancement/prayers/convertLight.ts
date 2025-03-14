import { Beatmap, ColorScheme, EnvironmentSchemeName, types } from '@bsmap';
import { idOffsetType0, idOffsetType4, roadCount, roadRepeat } from './main.ts';

export function convertLight(
   d: Beatmap,
   environment: types.EnvironmentAllName,
) {
   const events = d.basicEvents;
   const newEvents = [];

   // default color (for no chroma)
   const colorScheme = ColorScheme[EnvironmentSchemeName[environment]];
   const defaultLeftLight: types.ColorArray = [
      colorScheme._envColorLeft!.r,
      colorScheme._envColorLeft!.g,
      colorScheme._envColorLeft!.b,
   ];
   const defaultRightLight: types.ColorArray = [
      colorScheme._envColorRight!.r,
      colorScheme._envColorRight!.g,
      colorScheme._envColorRight!.b,
   ];

   //#region lighting
   // convert chroma 1 to chroma 2
   const oldChromaColorConvert = (rgb: number): types.ColorArray => {
      rgb = rgb - 2000000000;
      const red = (rgb >> 16) & 0x0ff;
      const green = (rgb >> 8) & 0x0ff;
      const blue = rgb & 0x0ff;
      return [red / 255, green / 255, blue / 255];
   };
   const currentColor: { [key: number]: types.ColorArray | null } = {};
   for (const ev of events) {
      let noChromaColor = false;
      if (ev.value >= 2000000000) {
         currentColor[ev.type] = oldChromaColorConvert(
            ev.value,
         ) as types.ColorArray;
      }
      if (!currentColor[ev.type]) {
         noChromaColor = true;
         currentColor[ev.type] = ev.value >= 1 && ev.value <= 3
            ? defaultRightLight
            : defaultLeftLight;
      }
      if (ev.value === 4) {
         ev.value = 0;
      }
      if (ev.value !== 0 && !(ev.value >= 2000000000)) {
         if (!ev.customData.color) {
            ev.customData.color = currentColor[ev.type]!;
         }
      }
      if (!(ev.value >= 2000000000)) {
         newEvents.push(ev);
         if (noChromaColor) {
            currentColor[ev.type] = null;
         }
      }
   }

   const tempID = [];
   for (let i = 0; i < roadRepeat; i++) {
      for (let j = 0; j < 2; j++) {
         tempID.push(idOffsetType4 + j + i * roadCount * 2);
      }
   }

   const switchType: { [key: number]: number } = {
      0: 0,
      4: 4,
      5: 4,
      6: 4,
      7: 4,
      10: 4,
      11: 4,
      14: 0,
      15: 0,
   };
   const typeLightIDMap: { [key: number]: number[] } = {
      0: [
         1,
         2,
         3,
         4,
         5,
         6,
         7,
         8,
         9,
         10,
         11,
         12,
         13,
         14,
         15,
         16,
         17,
         18,
         19,
         20,
      ],
      4: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      5: tempID,
      6: tempID.map((val) => val + 2),
      7: tempID.map((val) => val + 4),
      10: tempID.map((val) => val + 6),
      11: tempID.map((val) => val + 8),
      14: [
         1,
         2,
         3,
         4,
         5,
         6,
         7,
         8,
         9,
         10,
         11,
         12,
         13,
         14,
         15,
         16,
         17,
         18,
         19,
         20,
      ].map((val, i) => val + idOffsetType0 + i),
      15: [
         1,
         2,
         3,
         4,
         5,
         6,
         7,
         8,
         9,
         10,
         11,
         12,
         13,
         14,
         15,
         16,
         17,
         18,
         19,
         20,
      ].map((val, i) => val + idOffsetType0 + i),
   };

   const ignoreConversion = [1, 2, 3, 8, 9, 12, 13];

   for (const ev of newEvents) {
      if (ignoreConversion.includes(ev.type)) {
         continue;
      }
      ev.customData!.lightID = typeLightIDMap[ev.type];
      ev.type = switchType[ev.type];
   }

   d.basicEvents = newEvents;
   //#endregion
}
