import { Axis, Beatmap, EventLightColor, logger, TimeProcessor, types } from '@bsmap';

export function fixRotation(d: Beatmap) {
   const rot = [0, 3, 9, 10, 11, 12];
   for (const id of rot) {
      d.addLightRotationEventBoxGroups({
         time: 0,
         id,
         boxes: [
            {
               events: [{}],
            },
            { axis: Axis.Y, events: [{}] },
            { axis: Axis.Z, events: [{}] },
         ],
      });
   }
}

export function fixTranslation(d: Beatmap) {
   const tra = [0, 2];
   for (const id of tra) {
      d.addLightTranslationEventBoxGroups({
         time: 0,
         id,
         boxes: [
            {
               events: [{}],
            },
            { axis: Axis.Y, events: [{}] },
            { axis: Axis.Z, events: [{}] },
         ],
      });
   }
}

export function rotation(d: Beatmap) {
   const skip = [0, 2];
   d.lightshow.lightColorEventBoxGroups = [];
   for (let id = 0; id <= 12; id++) {
      if (!skip.includes(id)) {
         d.addLightColorEventBoxGroups({
            time: 0,
            id,
            boxes: [
               {
                  events: [
                     {
                        color: id < 4
                           ? EventLightColor.RED
                           : id < 8
                           ? EventLightColor.BLUE
                           : EventLightColor.WHITE,
                     },
                  ],
               },
            ],
         });
      }
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
