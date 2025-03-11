import { types } from '@bsmap';

export default function <T extends types.wrapper.IWrapBeatmap>(bm: T): T {
   const mapValuePd = new Map();
   const remapPd = new Map();
   const newPd: types.v3.IPointDefinition = {};
   for (const k in bm.difficulty.customData.pointDefinitions) {
      const values = JSON.stringify(
         bm.difficulty.customData.pointDefinitions[k],
      );
      if (mapValuePd.has(values)) {
         remapPd.set(k, mapValuePd.get(values)!);
         continue;
      }
      remapPd.set(k, k);
      mapValuePd.set(values, k);
      newPd[k] = bm.difficulty.customData.pointDefinitions[k];
   }
   bm.difficulty.customData.pointDefinitions = newPd;

   bm.difficulty.customData?.customEvents?.forEach((e) => {
      if (e.t === 'AnimateTrack') {
         e.d.color = toUniqueKey(mapValuePd, remapPd, newPd, e.d.color);
         e.d.dissolve = toUniqueKey(mapValuePd, remapPd, newPd, e.d.dissolve);
         e.d.dissolveArrow = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            e.d.dissolveArrow,
         );
         e.d.interactable = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            e.d.interactable,
         );
         e.d.localRotation = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            e.d.localRotation,
         );
         e.d.offsetPosition = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            e.d.offsetPosition,
         );
         e.d.offsetWorldRotation = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            e.d.offsetWorldRotation,
         );
         e.d.position = toUniqueKey(mapValuePd, remapPd, newPd, e.d.position);
         e.d.rotation = toUniqueKey(mapValuePd, remapPd, newPd, e.d.rotation);
         e.d.scale = toUniqueKey(mapValuePd, remapPd, newPd, e.d.scale);
         e.d.time = toUniqueKey(mapValuePd, remapPd, newPd, e.d.time);
      }

      if (e.t === 'AnimateComponent') {
         if (e.d.BloomFogEnvironment) {
            e.d.BloomFogEnvironment.attenuation = toUniqueKey(
               mapValuePd,
               remapPd,
               newPd,
               e.d.BloomFogEnvironment.attenuation,
            );
            e.d.BloomFogEnvironment.height = toUniqueKey(
               mapValuePd,
               remapPd,
               newPd,
               e.d.BloomFogEnvironment.height,
            );
            e.d.BloomFogEnvironment.offset = toUniqueKey(
               mapValuePd,
               remapPd,
               newPd,
               e.d.BloomFogEnvironment.offset,
            );
            e.d.BloomFogEnvironment.startY = toUniqueKey(
               mapValuePd,
               remapPd,
               newPd,
               e.d.BloomFogEnvironment.startY,
            );
         }
         if (e.d.TubeBloomPrePassLight) {
            e.d.TubeBloomPrePassLight.bloomFogIntensityMultiplier = toUniqueKey(
               mapValuePd,
               remapPd,
               newPd,
               e.d.TubeBloomPrePassLight.bloomFogIntensityMultiplier,
            );
            e.d.TubeBloomPrePassLight.colorAlphaMultiplier = toUniqueKey(
               mapValuePd,
               remapPd,
               newPd,
               e.d.TubeBloomPrePassLight.colorAlphaMultiplier,
            );
         }
      }

      if (e.t === 'AssignPathAnimation') {
         e.d.color = toUniqueKey(mapValuePd, remapPd, newPd, e.d.color);
         e.d.definitePosition = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            e.d.definitePosition,
         );
         e.d.dissolve = toUniqueKey(mapValuePd, remapPd, newPd, e.d.dissolve);
         e.d.dissolveArrow = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            e.d.dissolveArrow,
         );
         e.d.interactable = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            e.d.interactable,
         );
         e.d.localRotation = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            e.d.localRotation,
         );
         e.d.offsetPosition = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            e.d.offsetPosition,
         );
         e.d.offsetWorldRotation = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            e.d.offsetWorldRotation,
         );
         e.d.position = toUniqueKey(mapValuePd, remapPd, newPd, e.d.position);
         e.d.rotation = toUniqueKey(mapValuePd, remapPd, newPd, e.d.rotation);
         e.d.scale = toUniqueKey(mapValuePd, remapPd, newPd, e.d.scale);
      }
   });

   function remapObjectAnims(
      data: types.wrapper.IWrapBaseItem | types.v3.IBaseObject,
   ) {
      if (data.customData?.animation) {
         data.customData.animation.color = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            data.customData.animation.color,
         );
         data.customData.animation.definitePosition = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            data.customData.animation.definitePosition,
         );
         data.customData.animation.dissolve = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            data.customData.animation.dissolve,
         );
         data.customData.animation.dissolveArrow = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            data.customData.animation.dissolveArrow,
         );
         data.customData.animation.interactable = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            data.customData.animation.interactable,
         );
         data.customData.animation.localRotation = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            data.customData.animation.localRotation,
         );
         data.customData.animation.offsetPosition = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            data.customData.animation.offsetPosition,
         );
         data.customData.animation.offsetWorldRotation = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            data.customData.animation.offsetWorldRotation,
         );
         data.customData.animation.position = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            data.customData.animation.position,
         );
         data.customData.animation.rotation = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            data.customData.animation.rotation,
         );
         data.customData.animation.scale = toUniqueKey(
            mapValuePd,
            remapPd,
            newPd,
            data.customData.animation.scale,
         );
      }
   }

   const mapValueMat = new Map();
   const remapMat = new Map();
   const newMaterial: Record<string, types.v3.IChromaMaterial> = {};
   for (const k in bm.difficulty.customData.materials) {
      deduplicateDataKey(
         mapValueMat,
         remapMat,
         newMaterial,
         bm.difficulty.customData.materials[k],
         k,
      );
   }
   bm.difficulty.customData.environment?.forEach((e) => {
      if (e.geometry) {
         if (typeof e.geometry.material === 'string') {
            e.geometry.material = remapMat.get(e.geometry.material)!;
         } else {
            e.geometry.material = deduplicateDataKey(
               mapValueMat,
               remapMat,
               newMaterial,
               e.geometry.material,
            );
         }
      }
   });
   bm.difficulty.customData.materials = newMaterial;

   bm.difficulty.bombNotes.forEach(remapObjectAnims);
   bm.difficulty.colorNotes.forEach(remapObjectAnims);
   bm.difficulty.arcs.forEach(remapObjectAnims);
   bm.difficulty.chains.forEach(remapObjectAnims);
   bm.difficulty.obstacles.forEach(remapObjectAnims);

   bm.difficulty.customData.fakeBombNotes?.forEach(remapObjectAnims);
   bm.difficulty.customData.fakeColorNotes?.forEach(remapObjectAnims);
   bm.difficulty.customData.fakeBurstSliders?.forEach(remapObjectAnims);
   bm.difficulty.customData.fakeObstacles?.forEach(remapObjectAnims);

   return bm;
}

function toUniqueKey<T>(
   mapValueKey: Map<string, string>,
   remapKey: Map<string, string>,
   store: { [key: string]: T },
   data: T | string,
): string | undefined {
   if (!data) return undefined;
   if (typeof data === 'string') {
      return remapKey.get(data)!;
   } else {
      return deduplicateDataKey(mapValueKey, remapKey, store, data);
   }
}

function deduplicateDataKey<T>(
   mapValueKey: Map<string, string>,
   remapKey: Map<string, string>,
   store: { [key: string]: T },
   data: T,
   key?: string,
): string {
   const value = JSON.stringify(data);
   if (!key) key = getUniqueKey(store);
   if (mapValueKey.has(value)) {
      remapKey.set(key, mapValueKey.get(value)!);
      return mapValueKey.get(value)!;
   }

   remapKey.set(key, key);
   mapValueKey.set(value, key);
   store[key] = data;
   return key;
}

function getUniqueKey(
   obj: Record<string, unknown>,
   counter: number = 0,
): string {
   let key = counter.toString(36);
   while (existsInObject(obj, key)) {
      counter++;
      key = counter.toString(36);
   }
   return key;
}

function existsInObject(
   obj: Record<string, unknown>,
   key: string,
): key is keyof typeof obj {
   return key in obj;
}
