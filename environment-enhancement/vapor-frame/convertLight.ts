import { ColorScheme, EnvironmentSchemeName, types } from '@bsmap';
import { idOffsetType4, ringCount, ringRepeat } from './main.ts';

export function convertLight(
   d: types.wrapper.IWrapBeatmap,
   environment: types.EnvironmentAllName,
) {
   const events = d.lightshow.basicEvents;
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
   for (let i = 0; i < ringRepeat; i++) {
      for (let j = 0; j < 4; j++) {
         tempID.push(idOffsetType4 + j + i * ringCount * 4);
      }
   }

   const switchType: { [key: number]: number } = {
      4: 4,
      5: 4,
      6: 4,
      7: 4,
      10: 4,
      11: 4,
   };
   // 0 doesnt need conversion as there's no extra light
   const typeLightIDMap: { [key: number]: number[] } = {
      4: [
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
         21,
         22,
         23,
         24,
         25,
         26,
         27,
         28,
         29,
         30,
      ],
      5: tempID,
      6: tempID.map((val) => val + 4),
      7: tempID.map((val) => val + 8),
      10: tempID.map((val) => val + 12),
      11: tempID.map((val) => val + 16),
   };

   const ignoreConversion = [0, 1, 2, 3, 8, 9, 12, 13];

   for (const ev of newEvents) {
      if (ignoreConversion.includes(ev.type)) {
         continue;
      }
      ev.customData.lightID = typeLightIDMap[ev.type];
      ev.type = switchType[ev.type];
   }

   d.lightshow.basicEvents = newEvents;
   //#endregion
}
