import { convert, load, v3 } from '../../depsLocal.ts';

let init = false;
let data: v3.Difficulty;

export function lightshow() {
   if (init) {
      return data;
   }
   init = true;
   const d2 = load.difficultySync('Lightshow.dat', 2);
   convert.chromaLightGradientToVanillaGradient(d2);
   data = convert.toV3(d2);

   // const e = data.customData.environment?.filter((e) => e.id).map((e) => e.id);
   data.customData.environment?.forEach((e) => {
      if (e.id) {
         e.id = e.id
            .replace('d+', 'd*')
            .replace(/\^/, '')
            .replace('.*.*', '.*')
            .replace('{4}', '\\[\\d*\\]')
            .replace(/^\.\*/, '');
      }
      if (e.lookupMethod === 'Exact') {
         e.id = e.id
            .replace('.', '\\.')
            .replace('[', '\\[')
            .replace(']', '\\]')
            .replace('(', '\\(')
            .replace(')', '\\)') + '$';
         e.lookupMethod = 'Regex';
      }
      delete e.track;
   });
   let lightIDType0 = 101;
   data.customData.environment
      ?.filter((e) => e.duplicate)
      .filter((e) => !e.id?.includes('RotatingLasersPair') && !e.id?.includes('Construction'))
      .forEach((e) => {
         delete e.id;
         delete e.lookupMethod;
         delete e.duplicate;
         if (e.scale) {
            e.scale[0] *= 0.025;
            e.scale[1] *= 800;
            e.scale[2] *= 0.025;
         }
         e.geometry = { type: 'Cube', material: 'lightMaterial' };
         e.components = {
            ILightWithId: { type: 0, lightID: lightIDType0++ },
            TubeBloomPrePassLight: {
               colorAlphaMultiplier: 1.5,
               bloomFogIntensityMultiplier: 1 / 4,
            },
         };
      });
   data.customData.environment = data.customData.environment?.filter(
      (e) => !(e.geometry && e.rotation && e.rotation[0] === 90 && e.scale && e.scale[1] === 0),
   );
   data.customData.environment
      ?.filter((e) => e.geometry)
      .forEach((e) => {
         if (e.scale) {
            e.scale = [0.125, 1024, 0.125];
         }
      });

   data.basicEvents
      .filter((e) => e.type === 1)
      .forEach((e) => {
         if (e.isLightEvent() && e.customData.lightID) {
            if (typeof e.customData.lightID === 'number') {
               e.customData.lightID += 2;
            } else {
               e.customData.lightID = e.customData.lightID.map((l: number) => l + 2);
            }
         }
      });
   data.basicEvents = data.basicEvents.filter(
      (e) =>
         !(
            e.type === 0 &&
            e.customData.lightID &&
            (typeof e.customData.lightID === 'number'
               ? e.customData.lightID > 100
               : e.customData.lightID.some((l: number) => l > 100))
         ),
   );
   data.basicEvents.forEach((e) => {
      if (e.type === 0 && e.customData.lightID) {
         if (typeof e.customData.lightID === 'number') {
            e.customData.lightID += e.customData.lightID < 5 ? 0 : 96;
         } else {
            e.customData.lightID = e.customData.lightID.map((l: number) => (l < 5 ? l : l + 96));
         }
      }
   });
   Deno.writeTextFileSync('env.json', JSON.stringify(data.customData.environment!, null, 2));
   return data;
}
