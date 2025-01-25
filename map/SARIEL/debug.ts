import { Axis, EventLightColor, logger, TimeProcessor, types } from '@bsmap';

export function fixRot(d: types.wrapper.IWrapBeatmap) {
   for (let id = 0; id < 16; id++) {
      d.addLightRotationEventBoxGroups({
         time: 0,
         id,
         boxes: [
            {
               events: [{}],
            },
            { axis: Axis.Y, events: [{}] },
         ],
      });
   }
}

export function rotation(d: types.wrapper.IWrapBeatmap) {
   d.lightColorEventBoxGroups = [];
   for (let id = 0; id < 16; id++) {
      d.addLightColorEventBoxGroups({
         time: 0,
         id,
         boxes: [
            {
               events: [{
                  color: id < 4
                     ? EventLightColor.RED
                     : id < 8
                     ? EventLightColor.BLUE
                     : EventLightColor.WHITE,
               }],
            },
         ],
      });
   }
}

export function stackedEvent(d: types.wrapper.IWrapBeatmap, bpm: TimeProcessor) {
   const lightColorAry: types.wrapper.IWrapLightColorEventBoxGroup[] = [];
   const lightRotationAry: types.wrapper.IWrapLightRotationEventBoxGroup[] = [];
   for (let i = 0, len = d.lightColorEventBoxGroups.length; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
         if (
            bpm.toRealTime(d.lightColorEventBoxGroups[j].time) >
               bpm.toRealTime(d.lightColorEventBoxGroups[i].time) + 1
         ) {
            break;
         }
         if (
            d.lightColorEventBoxGroups[i].id ===
               d.lightColorEventBoxGroups[j].id &&
            d.lightColorEventBoxGroups[j].time -
                     d.lightColorEventBoxGroups[i].time ===
               0
         ) {
            lightColorAry.push(d.lightColorEventBoxGroups[i]);
         }
      }
   }
   for (let i = 0, len = d.lightRotationEventBoxGroups.length; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
         if (
            bpm.toRealTime(d.lightRotationEventBoxGroups[j].time) >
               bpm.toRealTime(d.lightRotationEventBoxGroups[i].time) + 1
         ) {
            break;
         }
         if (
            d.lightRotationEventBoxGroups[i].id ===
               d.lightRotationEventBoxGroups[j].id &&
            d.lightRotationEventBoxGroups[j].time -
                     d.lightRotationEventBoxGroups[i].time === 0
         ) {
            lightRotationAry.push(d.lightRotationEventBoxGroups[i]);
         }
      }
   }
   if (lightColorAry.length) {
      logger.error(
         'Stacked Light Color Event Box Group',
         lightColorAry.map((n) => [n.time, n.id]),
      );
   }
   if (lightRotationAry.length) {
      logger.error(
         'Stacked Light Rotation Event Box Group',
         lightRotationAry.map((n) => [n.time, n.id]),
      );
   }
}
