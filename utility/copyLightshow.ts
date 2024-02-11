import { deepCopy, types } from '../depsLocal.ts';

export default function copyLightshow<T extends types.wrapper.IWrapDifficulty>(
   source: types.wrapper.IWrapDifficulty,
   target: T,
   replace = true,
): T {
   const tVer = Number(target.version[0]);
   const sVer = Number(source.version[0]);
   if (replace) {
      target.basicEvents = source.basicEvents;
      if (tVer >= 3) {
         target.colorBoostEvents = source.colorBoostEvents;
         target.lightColorEventBoxGroups = source.lightColorEventBoxGroups;
         target.lightRotationEventBoxGroups = source.lightRotationEventBoxGroups;
         target.lightTranslationEventBoxGroups = source.lightTranslationEventBoxGroups;
         target.fxEventBoxGroups = source.fxEventBoxGroups;
         target.fxEventsCollection = source.fxEventsCollection;
      }
      if (tVer === sVer) {
         target.customData.environment = source.customData.environment;
         target.customData.materials = source.customData.materials;
         target.customData.customEvents = source.customData.customEvents;
         target.customData.pointDefinitions = source.customData.pointDefinitions;
      } else if (tVer === 2) {
      }
   } else {
      target.addBasicEvents(...source.basicEvents);
      if (tVer >= 3) {
         target.addColorBoostEvents(...source.colorBoostEvents);
         target.addLightColorEventBoxGroups(...source.lightColorEventBoxGroups);
         target.addLightRotationEventBoxGroups(...source.lightRotationEventBoxGroups);
         target.addLightTranslationEventBoxGroups(...source.lightTranslationEventBoxGroups);
         target.addFxEventBoxGroups(...source.fxEventBoxGroups);
         target.fxEventsCollection.floatList = source.fxEventsCollection.floatList;
         target.fxEventsCollection.intList = source.fxEventsCollection.intList;
      }
      if (tVer === sVer) {
         target.customData.environment ||= [];
         target.customData.materials ||= [];
         target.customData.customEvents ||= [];
         target.customData.pointDefinitions ||= [];
         target.customData.environment.push(deepCopy(source.customData.environment));
         target.customData.materials.push(deepCopy(source.customData.materials));
         target.customData.customEvents.push(deepCopy(source.customData.customEvents));
         target.customData.pointDefinitions.push(deepCopy(source.customData.pointDefinitions));
      } else if (tVer === 2) {
      }
   }
   target.useNormalEventsAsCompatibleEvents = source.useNormalEventsAsCompatibleEvents;
   return target;
}
