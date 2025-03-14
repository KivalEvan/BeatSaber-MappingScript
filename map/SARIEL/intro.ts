import { Axis, Beatmap, EaseType, EventLightColor, IndexFilterType, pRandom, types } from '@bsmap';
import { Brightness } from './helpers.ts';

export default (d: Beatmap) => {
   d.addColorBoostEvents({ time: 71.125, toggle: false }, { time: 86, toggle: true }, {
      time: 87.125,
      toggle: false,
   });

   for (let id = 0; id < 12; id++) {
      d.addLightColorEventBoxGroups(
         {
            time: 69.999,
            id,
            boxes: [
               {
                  events: [{ brightness: Brightness.OFF }],
               },
            ],
         },
         {
            time: 70,
            id,
            boxes: [
               {
                  beatDistribution: id >= 8 && id < 12 ? 0.499 : 1,
                  events: [
                     { color: EventLightColor.WHITE, brightness: 2.5 },
                     {
                        time: 0.09375,
                        brightness: Brightness.OFF,
                        color: EventLightColor.WHITE,
                     },
                     { time: 0.125, color: EventLightColor.RED },
                  ],
               },
            ],
         },
      );
   }
   for (let id = 12; id < 16; id++) {
      const fltr = {
         type: IndexFilterType.DIVISION,
         p0: 2,
         p1: 1,
         reverse: 1,
      } as types.wrapper.IWrapIndexFilter;
      const fltrR = {
         type: IndexFilterType.DIVISION,
         p0: 2,
         p1: 1,
         reverse: 0,
      } as types.wrapper.IWrapIndexFilter;
      d.addLightColorEventBoxGroups({
         time: 70,
         id,
         boxes: [
            {
               filter: { type: 2, p0: 0, p1: 999, reverse: 0 },
               events: [
                  { color: EventLightColor.BLUE, brightness: Brightness.FLASH },
                  {
                     time: 0.125,
                     color: EventLightColor.WHITE,
                     easing: EaseType.LINEAR,
                     brightness: 2.5,
                  },
                  {
                     time: 0.999,
                     easing: EaseType.LINEAR,
                     brightness: Brightness.OFF,
                     color: EventLightColor.WHITE,
                  },
               ],
            },
            {
               filter: { type: 2, p0: 1, p1: 999, reverse: 0 },
               events: [
                  { color: EventLightColor.BLUE, brightness: Brightness.FLASH },
                  {
                     time: 0.125,
                     color: EventLightColor.WHITE,
                     easing: EaseType.LINEAR,
                     brightness: 2.5,
                  },
                  {
                     time: 0.999,
                     easing: EaseType.LINEAR,
                     brightness: Brightness.OFF,
                     color: EventLightColor.WHITE,
                  },
               ],
            },
            {
               filter: { type: 2, p0: 0, p1: 999, reverse: 1 },
               events: [
                  { color: EventLightColor.BLUE, brightness: Brightness.FLASH },
                  {
                     time: 0.125,
                     color: EventLightColor.WHITE,
                     easing: EaseType.LINEAR,
                     brightness: 2.5,
                  },
                  {
                     time: 0.999,
                     easing: EaseType.LINEAR,
                     brightness: Brightness.OFF,
                     color: EventLightColor.WHITE,
                  },
               ],
            },
            {
               filter: { type: 2, p0: 1, p1: 999, reverse: 1 },
               events: [
                  { color: EventLightColor.BLUE, brightness: Brightness.FLASH },
                  {
                     time: 0.125,
                     color: EventLightColor.WHITE,
                     easing: EaseType.LINEAR,
                     brightness: 2.5,
                  },
                  {
                     time: 0.999,
                     easing: EaseType.LINEAR,
                     brightness: Brightness.OFF,
                     color: EventLightColor.WHITE,
                  },
               ],
            },
         ],
      });
      d.addLightRotationEventBoxGroups(
         {
            time: 70,
            id,
            boxes: [
               {
                  filter: fltr,
                  events: [
                     { rotation: 90, easing: EaseType.NONE },
                     { time: 0.125, previous: 1 },
                  ],
               },
               {
                  filter: fltrR,
                  events: [
                     { rotation: 90, easing: EaseType.NONE },
                     { time: 0.125, previous: 1 },
                  ],
               },
               {
                  filter: fltr,
                  axis: Axis.Y,
                  events: [
                     { rotation: 315, easing: EaseType.NONE },
                     { time: 0.125, previous: 1 },
                  ],
               },
               {
                  filter: fltrR,
                  axis: Axis.Y,
                  events: [
                     { rotation: 45, easing: EaseType.NONE },
                     { time: 0.125, previous: 1 },
                  ],
               },
            ],
         },
         {
            time: 70.999,
            id,
            boxes: [
               {
                  events: [{ easing: EaseType.IN_QUAD, rotation: 180 }],
               },
               {
                  axis: Axis.Y,
                  events: [{ easing: EaseType.IN_QUAD }],
               },
            ],
         },
      );
   }

   for (let id = 0; id < 4; id++) {
      d.addLightRotationEventBoxGroups(
         {
            time: 70,
            id,
            boxes: [
               {
                  flip: 1,
                  events: [{ rotation: 135, easing: EaseType.NONE }],
               },
               {
                  axis: Axis.Y,
                  rotationDistribution: -30,
                  affectFirst: 1,
                  events: [{ rotation: 300, easing: EaseType.NONE }],
               },
            ],
         },
         {
            time: 78,
            id,
            boxes: [{ axis: Axis.Y, events: [{ easing: EaseType.OUT_QUAD }] }],
         },
      );
      for (
         let time = 70.5, flipFlop = false, first = true;
         time < 95;
         time += 12, flipFlop = !flipFlop, first = false
      ) {
         d.addLightRotationEventBoxGroups({
            time: Math.min(time, 93.999),
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                  flip: 1,
                  rotationDistribution: flipFlop ? -15 : 15,
                  affectFirst: 1,
                  events: [{ rotation: flipFlop ? 150 : 120, easing: first ? 2 : 3 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
                  flip: 1,
                  rotationDistribution: flipFlop ? 15 : -15,
                  affectFirst: 1,
                  events: [{ rotation: flipFlop ? 120 : 150, easing: first ? 2 : 3 }],
               },
            ],
         });
      }
      for (let time = 71; time < 94; time += 2) {
         d.addLightColorEventBoxGroups({
            time: time,
            id,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 0.499,
                  events: [
                     {
                        color: EventLightColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.28125,
                        brightness: Brightness.OFF,
                        color: EventLightColor.BLUE,
                     },
                  ],
               },
            ],
         });
         if (time < 90) {
            d.addLightColorEventBoxGroups({
               time: time + 0.5,
               id,
               boxes: [
                  {
                     events: [
                        {
                           time: 1,
                           color: time === 85 ? EventLightColor.RED : EventLightColor.BLUE,
                           brightness: Brightness.ON,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            });
         }
      }
   }
   for (let id = 4; id < 8; id++) {
      d.addLightRotationEventBoxGroups(
         {
            time: 70,
            id,
            boxes: [
               { events: [{ rotation: 225 }] },
               {
                  axis: Axis.Y,
                  events: [{ rotation: 180, easing: EaseType.NONE }],
               },
            ],
         },
         {
            time: 75,
            id,
            boxes: [{ events: [{ rotation: 265, easing: EaseType.OUT_QUAD }] }],
         },
      );
      for (
         let time = 71, flipFlop = false, first = true;
         time <= 95;
         time += 12, flipFlop = !flipFlop, first = false
      ) {
         d.addLightRotationEventBoxGroups(
            {
               time,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     axis: Axis.Y,
                     events: [
                        {
                           rotation: flipFlop ? 120 : 240,
                           easing: first ? 2 : 3,
                        },
                     ],
                  },
               ],
            },
            {
               time: Math.min(time + 3, 95.999),
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     axis: Axis.Y,
                     events: [
                        {
                           rotation: flipFlop ? 240 : 120,
                           easing: first ? 2 : 3,
                        },
                     ],
                  },
               ],
            },
         );
      }
      d.addLightColorEventBoxGroups(
         {
            time: 71,
            id,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 0.499,
                  events: [
                     {
                        color: EventLightColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.28125,
                        brightness: Brightness.OFF,
                        color: EventLightColor.BLUE,
                     },
                  ],
               },
            ],
         },
         {
            time: 71.5,
            id,
            boxes: [
               {
                  events: [
                     {
                        time: 0.5,
                        color: EventLightColor.BLUE,
                        brightness: Brightness.ON,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         },
         {
            time: 86,
            id,
            boxes: [
               {
                  beatDistribution: 0.5,
                  events: [
                     {
                        color: EventLightColor.WHITE,
                        brightness: Brightness.DOUBLE,
                     },
                     {
                        time: 0.09375,
                        brightness: Brightness.OFF,
                        color: EventLightColor.WHITE,
                     },
                     { time: 0.125 },
                  ],
               },
            ],
         },
         {
            time: 87,
            id,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 0.499,
                  events: [
                     { color: EventLightColor.RED, brightness: Brightness.EXTRA },
                     {
                        time: 0.28125,
                        brightness: Brightness.OFF,
                        color: EventLightColor.BLUE,
                     },
                  ],
               },
            ],
         },
         {
            time: 87.5,
            id,
            boxes: [
               {
                  events: [
                     {
                        time: 0.5,
                        color: EventLightColor.BLUE,
                        brightness: Brightness.ON,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         },
      );
      for (let time = 71.5; time < 93.5; time += 0.5) {
         if (time >= 86 && time < 87.5) {
            continue;
         }
         d.addLightColorEventBoxGroups({
            time: time + pRandom(0, 0.375),
            id,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: pRandom(0, 7, true),
                     p1: 8,
                  },
                  events: [
                     { previous: 1 },
                     {
                        time: 0.125,
                        color: EventLightColor.WHITE,
                        easing: EaseType.LINEAR,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.375,
                        color: EventLightColor.BLUE,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         });
      }
      d.addLightColorEventBoxGroups({
         time: 93.5,
         id,
         boxes: [
            {
               filter: { reverse: 1 },
               beatDistribution: 0.499,
               events: [
                  { color: EventLightColor.WHITE, brightness: Brightness.EXTRA },
                  {
                     time: 0.25,
                     color: EventLightColor.WHITE,
                     brightness: Brightness.OFF,
                  },
               ],
            },
         ],
      });
   }
   for (let id = 8; id < 12; id++) {
      d.addLightRotationEventBoxGroups(
         {
            time: 70,
            id,
            boxes: [
               {
                  flip: 1,
                  events: [{ rotation: 172.5, easing: EaseType.NONE }],
               },
               {
                  axis: Axis.Y,
                  flip: 1,
                  events: [{ rotation: 300, easing: EaseType.NONE }],
               },
            ],
         },
         {
            time: 76,
            id,
            boxes: [
               {
                  axis: Axis.Y,
                  flip: 1,
                  events: [{ easing: EaseType.OUT_QUAD }],
               },
            ],
         },
         {
            time: 100,
            id,
            boxes: [{ events: [{ rotation: 270 }] }],
         },
      );
      for (
         let time = 72, flipFlop = false, first = true;
         time <= 96;
         time += 12, flipFlop = !flipFlop, first = false
      ) {
         d.addLightRotationEventBoxGroups(
            {
               time,
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     flip: 1,
                     rotationDistribution: flipFlop ? -30 : 30,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: flipFlop ? 165 : 180,
                           easing: first ? 2 : 3,
                        },
                     ],
                  },
               ],
            },
            {
               time: time + 2,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     flip: 1,
                     rotationDistribution: flipFlop ? 30 : -30,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: flipFlop ? 180 : 165,
                           easing: first ? 2 : 3,
                        },
                     ],
                  },
               ],
            },
         );
      }
      for (let time = 70, flipFlop = false; time < 94; time += 4, flipFlop = !flipFlop) {
         if (flipFlop ? id % 2 : !(id % 2)) {
            d.addLightColorEventBoxGroups({
               time: time + 0.5,
               id,
               boxes: [
                  {
                     beatDistribution: 0.999,
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.28125,
                           color: EventLightColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                        {
                           time: 0.78125,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            });
         } else {
            d.addLightColorEventBoxGroups({
               time: time + 1,
               id,
               boxes: [
                  {
                     beatDistribution: 0.999,
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.28125,
                           color: EventLightColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                        {
                           time: 0.78125,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            });
         }
         if (flipFlop ? id % 4 === 0 || id % 4 === 3 : id % 4 === 1 || id % 4 === 2) {
            d.addLightColorEventBoxGroups({
               time: time + 2,
               id,
               boxes: [
                  {
                     beatDistribution: 0.999,
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.28125,
                           color: EventLightColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                        {
                           time: 0.78125,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            });
         } else {
            d.addLightColorEventBoxGroups({
               time: time + 2.5,
               id,
               boxes: [
                  {
                     beatDistribution: 0.999,
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.28125,
                           color: EventLightColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                        {
                           time: 0.78125,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            });
         }
         if (time === 90) {
            d.addLightColorEventBoxGroups({
               time: time + 3.5,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 0.499,
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.25,
                           color: EventLightColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            });
         } else {
            d.addLightColorEventBoxGroups({
               time: time + 3.5,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 0.999,
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.25,
                           color: EventLightColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                        {
                           time: 0.75,
                           color: time === 82 ? EventLightColor.RED : EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            });
         }
      }
   }
};
