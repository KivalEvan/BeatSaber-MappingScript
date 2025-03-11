import { Axis, Beatmap, EventLightColor, logger, TimeProcessor, types } from '@bsmap';

export function fixRot(d: Beatmap) {
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

export function rotation(d: Beatmap) {
   d.lightshow.lightColorEventBoxGroups = [];
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

export function stackedEvent(d: Beatmap, bpm: TimeProcessor) {
   const lightColorAry: types.wrapper.IWrapLightColorEventBoxGroup[] = [];
   const lightRotationAry: types.wrapper.IWrapLightRotationEventBoxGroup[] = [];
   for (let i = 0, len = d.lightshow.lightColorEventBoxGroups.length; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
         if (
            bpm.toRealTime(d.lightshow.lightColorEventBoxGroups[j].time) >
               bpm.toRealTime(d.lightshow.lightColorEventBoxGroups[i].time) + 1
         ) {
            break;
         }
         if (
            d.lightshow.lightColorEventBoxGroups[i].id ===
               d.lightshow.lightColorEventBoxGroups[j].id &&
            d.lightshow.lightColorEventBoxGroups[j].time -
                     d.lightshow.lightColorEventBoxGroups[i].time ===
               0
         ) {
            lightColorAry.push(d.lightshow.lightColorEventBoxGroups[i]);
         }
      }
   }
   for (let i = 0, len = d.lightshow.lightRotationEventBoxGroups.length; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
         if (
            bpm.toRealTime(d.lightshow.lightRotationEventBoxGroups[j].time) >
               bpm.toRealTime(d.lightshow.lightRotationEventBoxGroups[i].time) + 1
         ) {
            break;
         }
         if (
            d.lightshow.lightRotationEventBoxGroups[i].id ===
               d.lightshow.lightRotationEventBoxGroups[j].id &&
            d.lightshow.lightRotationEventBoxGroups[j].time -
                     d.lightshow.lightRotationEventBoxGroups[i].time === 0
         ) {
            lightRotationAry.push(d.lightshow.lightRotationEventBoxGroups[i]);
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
