import { types } from '../depsLocal.ts';

export default function (bm: types.wrapper.IWrapBeatmap) {
   const remapPd = new Map();
   const newPd: types.v3.IPointDefinition = {};
   for (const k in bm.difficulty.customData.pointDefinitions) {
      if (!remapPd.has(k)) remapPd.set(k, (remapPd.size + 1).toString(36));
      newPd[remapPd.get(k)!] = bm.difficulty.customData.pointDefinitions[k];
   }
   bm.difficulty.customData.pointDefinitions = newPd;

   const remapTrack = new Map();
   bm.difficulty.customData?.customEvents?.forEach((e, i) => {
      switch (e.t) {
         case 'AnimateTrack':
         case 'AnimateComponent':
         case 'AssignPathAnimation':
         case 'AssignPlayerToTrack':
            if (typeof e.d.track === 'string') {
               if (!remapTrack.has(e.d.track)) {
                  remapTrack.set(e.d.track, (remapTrack.size + 1).toString(36));
               }
               e.d.track = remapTrack.get(e.d.track)!;
            } else if (Array.isArray(e.d.track)) {
               const newTrack = [];
               for (const t of e.d.track) {
                  if (!remapTrack.has(t)) {
                     remapTrack.set(t, (remapTrack.size + 1).toString(36));
                  }
                  newTrack.push(remapTrack.get(t)!);
               }
               e.d.track = newTrack;
            } else {
               throw new Error(
                  'Track is expected in animate track but not found in index #' +
                     i,
               );
            }
            break;
         case 'AssignTrackParent':
      }

      if (e.t === 'AnimateTrack') {
         if (typeof e.d.color === 'string') e.d.color = remapPd.get(e.d.color)!;
         if (typeof e.d.dissolve === 'string') {
            e.d.dissolve = remapPd.get(e.d.dissolve)!;
         }
         if (typeof e.d.dissolveArrow === 'string') {
            e.d.dissolveArrow = remapPd.get(e.d.dissolveArrow)!;
         }
         if (typeof e.d.interactable === 'string') {
            e.d.interactable = remapPd.get(e.d.interactable)!;
         }
         if (typeof e.d.localRotation === 'string') {
            e.d.localRotation = remapPd.get(e.d.localRotation)!;
         }
         if (typeof e.d.offsetPosition === 'string') {
            e.d.offsetPosition = remapPd.get(e.d.offsetPosition)!;
         }
         if (typeof e.d.offsetWorldRotation === 'string') {
            e.d.offsetWorldRotation = remapPd.get(e.d.offsetWorldRotation)!;
         }
         if (typeof e.d.position === 'string') {
            e.d.position = remapPd.get(e.d.position)!;
         }
         if (typeof e.d.rotation === 'string') {
            e.d.rotation = remapPd.get(e.d.rotation)!;
         }
         if (typeof e.d.scale === 'string') e.d.scale = remapPd.get(e.d.scale)!;
         if (typeof e.d.time === 'string') e.d.time = remapPd.get(e.d.time)!;
      }

      if (e.t === 'AnimateComponent') {
         if (e.d.BloomFogEnvironment) {
            if (typeof e.d.BloomFogEnvironment.attenuation === 'string') {
               e.d.BloomFogEnvironment.attenuation = remapPd.get(
                  e.d.BloomFogEnvironment?.attenuation,
               )!;
            }
            if (typeof e.d.BloomFogEnvironment.height === 'string') {
               e.d.BloomFogEnvironment.height = remapPd.get(
                  e.d.BloomFogEnvironment?.height,
               );
            }
            if (typeof e.d.BloomFogEnvironment.offset === 'string') {
               e.d.BloomFogEnvironment.offset = remapPd.get(
                  e.d.BloomFogEnvironment?.offset,
               );
            }
            if (typeof e.d.BloomFogEnvironment.startY === 'string') {
               e.d.BloomFogEnvironment.startY = remapPd.get(
                  e.d.BloomFogEnvironment?.startY,
               );
            }
         }
         if (e.d.TubeBloomPrePassLight) {
            if (
               typeof e.d.TubeBloomPrePassLight.bloomFogIntensityMultiplier ===
                  'string'
            ) {
               e.d.TubeBloomPrePassLight.bloomFogIntensityMultiplier = remapPd.get(
                  e.d.TubeBloomPrePassLight?.bloomFogIntensityMultiplier,
               );
            }
            if (
               typeof e.d.TubeBloomPrePassLight.colorAlphaMultiplier ===
                  'string'
            ) {
               e.d.TubeBloomPrePassLight.colorAlphaMultiplier = remapPd.get(
                  e.d.TubeBloomPrePassLight?.colorAlphaMultiplier,
               );
            }
         }
      }

      if (e.t === 'AssignPathAnimation') {
         if (typeof e.d.color === 'string') e.d.color = remapPd.get(e.d.color)!;
         if (typeof e.d.definitePosition === 'string') {
            e.d.definitePosition = remapPd.get(e.d.definitePosition)!;
         }
         if (typeof e.d.dissolve === 'string') {
            e.d.dissolve = remapPd.get(e.d.dissolve)!;
         }
         if (typeof e.d.dissolveArrow === 'string') {
            e.d.dissolveArrow = remapPd.get(e.d.dissolveArrow)!;
         }
         if (typeof e.d.interactable === 'string') {
            e.d.interactable = remapPd.get(e.d.interactable)!;
         }
         if (typeof e.d.localRotation === 'string') {
            e.d.localRotation = remapPd.get(e.d.localRotation)!;
         }
         if (typeof e.d.offsetPosition === 'string') {
            e.d.offsetPosition = remapPd.get(e.d.offsetPosition)!;
         }
         if (typeof e.d.offsetWorldRotation === 'string') {
            e.d.offsetWorldRotation = remapPd.get(e.d.offsetWorldRotation)!;
         }
         if (typeof e.d.position === 'string') {
            e.d.position = remapPd.get(e.d.position)!;
         }
         if (typeof e.d.rotation === 'string') {
            e.d.rotation = remapPd.get(e.d.rotation)!;
         }
         if (typeof e.d.scale === 'string') e.d.scale = remapPd.get(e.d.scale)!;
      }
   });
   bm.difficulty.customData?.customEvents?.forEach((e) => {
      if (e.t === 'AssignTrackParent') {
         if (!remapTrack.has(e.d.parentTrack)) {
            remapTrack.set(e.d.parentTrack, (remapTrack.size + 1).toString(36));
         }
         e.d.parentTrack = remapTrack.get(e.d.parentTrack)!;
         const newTrack = [];
         for (const t of e.d.childrenTracks) {
            if (!remapTrack.has(t)) {
               remapTrack.set(t, (remapTrack.size + 1).toString(36));
            }
            newTrack.push(remapTrack.get(t));
         }
         e.d.childrenTracks = newTrack;
      }
   });

   function remapObjectTrack(
      data: types.wrapper.IWrapBaseItem | types.v3.IBaseObject,
   ) {
      if (data.customData?.track) {
         data.customData.track = remapTrack.get(data.customData.track)!;
      }
      if (data.customData?.animation) {
         if (typeof data.customData.animation.color === 'string') {
            data.customData.animation.color = remapPd.get(
               data.customData.animation.color,
            )!;
         }
         if (typeof data.customData.animation.definitePosition === 'string') {
            data.customData.animation.definitePosition = remapPd.get(
               data.customData.animation.definitePosition,
            )!;
         }
         if (typeof data.customData.animation.dissolve === 'string') {
            data.customData.animation.dissolve = remapPd.get(
               data.customData.animation.dissolve,
            )!;
         }
         if (typeof data.customData.animation.dissolveArrow === 'string') {
            data.customData.animation.dissolveArrow = remapPd.get(
               data.customData.animation.dissolveArrow,
            )!;
         }
         if (typeof data.customData.animation.interactable === 'string') {
            data.customData.animation.interactable = remapPd.get(
               data.customData.animation.interactable,
            )!;
         }
         if (typeof data.customData.animation.localRotation === 'string') {
            data.customData.animation.localRotation = remapPd.get(
               data.customData.animation.localRotation,
            )!;
         }
         if (typeof data.customData.animation.offsetPosition === 'string') {
            data.customData.animation.offsetPosition = remapPd.get(
               data.customData.animation.offsetPosition,
            )!;
         }
         if (
            typeof data.customData.animation.offsetWorldRotation === 'string'
         ) {
            data.customData.animation.offsetWorldRotation = remapPd.get(
               data.customData.animation.offsetWorldRotation,
            )!;
         }
         if (typeof data.customData.animation.position === 'string') {
            data.customData.animation.position = remapPd.get(
               data.customData.animation.position,
            )!;
         }
         if (typeof data.customData.animation.rotation === 'string') {
            data.customData.animation.rotation = remapPd.get(
               data.customData.animation.rotation,
            )!;
         }
         if (typeof data.customData.animation.scale === 'string') {
            data.customData.animation.scale = remapPd.get(
               data.customData.animation.scale,
            )!;
         }
      }
   }

   const remapMaterial = new Map();
   const newMaterial: Record<string, types.v3.IChromaMaterial> = {};
   for (const k in bm.difficulty.customData.materials ?? {}) {
      bm.difficulty.customData.materials![k].track = remapTrack.get(
         bm.difficulty.customData.materials![k].track,
      )!;
      if (!remapMaterial.has(k)) {
         remapMaterial.set(k, (remapMaterial.size + 1).toString(36));
      }
      newMaterial[remapMaterial.get(k)!] = bm.difficulty.customData.materials![k];
   }
   bm.difficulty.customData.materials = newMaterial;

   bm.difficulty.customData.environment?.forEach((e) => {
      if (e.track) e.track = remapTrack.get(e.track) || e.track;
      if (e.geometry) {
         if (typeof e.geometry.material === 'string') {
            e.geometry.material = remapMaterial.get(e.geometry.material)!;
         } else {
            e.geometry.material.track = remapTrack.get(e.geometry.material.track) ||
               e.geometry.material.track;
         }
      }
   });

   bm.bombNotes.forEach(remapObjectTrack);
   bm.colorNotes.forEach(remapObjectTrack);
   bm.arcs.forEach(remapObjectTrack);
   bm.chains.forEach(remapObjectTrack);
   bm.obstacles.forEach(remapObjectTrack);

   bm.difficulty.customData.fakeBombNotes?.forEach(remapObjectTrack);
   bm.difficulty.customData.fakeColorNotes?.forEach(remapObjectTrack);
   bm.difficulty.customData.fakeBurstSliders?.forEach(remapObjectTrack);
   bm.difficulty.customData.fakeObstacles?.forEach(remapObjectTrack);

   return bm;
}
