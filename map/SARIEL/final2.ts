import { Axis, Beatmap, EaseType, EventLightColor, IndexFilterType, pRandom, types } from '@bsmap';
import { Brightness } from './helpers.ts';

export default (d: Beatmap) => {
   d.addColorBoostEvents(
      { time: 518 + 1.125, toggle: true },
      { time: 518 + 16, toggle: false },
      { time: 518 + 17.125, toggle: true },
   );

   for (let id = 0; id < 12; id++) {
      d.addLightColorEventBoxGroups({
         time: 518,
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
      });
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
         time: 518,
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
            time: 518,
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
                     { rotation: id < 14 ? 45 : 315, easing: EaseType.NONE },
                     { time: 0.125, previous: 1 },
                  ],
               },
               {
                  filter: fltrR,
                  axis: Axis.Y,
                  events: [
                     { rotation: id < 14 ? 315 : 45, easing: EaseType.NONE },
                     { time: 0.125, previous: 1 },
                  ],
               },
            ],
         },
         {
            time: 518 + 0.999,
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
            time: 518,
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
            time: 518 + 8,
            id,
            boxes: [{ axis: Axis.Y, events: [{ easing: EaseType.OUT_QUAD }] }],
         },
      );
      for (
         let time = 518 + 0.5, flipFlop = false, first = true;
         time < 518 + 25;
         time += 12, flipFlop = !flipFlop, first = false
      ) {
         d.addLightRotationEventBoxGroups({
            time: Math.min(time, 518 + 23.999),
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                  flip: 1,
                  rotationDistribution: flipFlop ? -30 : 30,
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
                  rotationDistribution: flipFlop ? 30 : -30,
                  affectFirst: 1,
                  events: [{ rotation: flipFlop ? 120 : 150, easing: first ? 2 : 3 }],
               },
            ],
         });
      }
      for (let time = 518 + 1; time < 518 + 24; time += 2) {
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
         if (time < 518 + 20) {
            d.addLightColorEventBoxGroups({
               time: time + 0.5,
               id,
               boxes: [
                  {
                     events: [
                        {
                           time: 1,
                           color: time === 518 + 15 ? EventLightColor.RED : EventLightColor.BLUE,
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
            time: 518,
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
            time: 518 + 5,
            id,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 2,
                  },
                  events: [{ rotation: 255, easing: EaseType.OUT_QUAD }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
                  events: [{ rotation: 120, easing: EaseType.OUT_QUAD }],
               },
            ],
         },
      );
      for (
         let time = 518 + 1, flipFlop = false, first = true;
         time <= 518 + 25;
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
               time: Math.min(time + 3, 518 + 25.999),
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
            time: 518 + 1,
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
            time: 518 + 1.5,
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
            time: 518 + 16,
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
            time: 518 + 17,
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
            time: 518 + 17.5,
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
      for (let time = 518 + 1.5; time < 518 + 23.5; time += 0.5) {
         if (time >= 518 + 16 && time < 518 + 17.5) {
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
                        color: EventLightColor.RED,
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
         time: 518 + 23.5,
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
            time: 518,
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
            time: 518 + 6,
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
            time: 518 + 30,
            id,
            boxes: [{ events: [{ rotation: 270 }] }],
         },
      );
      for (
         let time = 518 + 2, flipFlop = false, first = true;
         time <= 518 + 26;
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
      for (let time = 518, flipFlop = false; time < 518 + 24; time += 4, flipFlop = !flipFlop) {
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
         if (time === 518 + 20) {
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
                           color: time === 518 + 12 ? EventLightColor.RED : EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            });
         }
      }
   }

   //a
   for (let id = 4; id < 8; id++) {
      d.addLightColorEventBoxGroups({
         time: 518 + 31,
         id,
         boxes: [
            {
               beatDistribution: 2,
               events: [
                  { color: EventLightColor.WHITE, brightness: Brightness.EXTRA },
                  {
                     time: 0.09375,
                     brightness: Brightness.OFF,
                     color: EventLightColor.WHITE,
                  },
                  { time: 0.125, color: EventLightColor.RED },
                  {
                     time: 1,
                     brightness: Brightness.OFF,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      });
      d.addLightRotationEventBoxGroups({
         time: 518 + 31,
         id,
         boxes: [
            {
               filter: { type: 2, p1: 2 },
               affectFirst: 1,
               rotationDistribution: -45,
               events: [{ rotation: 135 }, { time: 2, previous: 1 }],
            },
            {
               filter: { type: 2, p0: 1, p1: 2 },
               affectFirst: 1,
               rotationDistribution: -45,
               events: [{ rotation: 315 }, { time: 2, previous: 1 }],
            },
         ],
      });
   }
   for (let id = 8; id < 12; id++) {
      d.addLightColorEventBoxGroups({
         time: 518 + 31.125,
         id,
         boxes: [
            {
               beatDistribution: 2,
               events: [
                  { color: EventLightColor.WHITE, brightness: Brightness.EXTRA },
                  {
                     time: 0.09375,
                     brightness: Brightness.OFF,
                     color: EventLightColor.WHITE,
                  },
                  { time: 0.125, color: EventLightColor.RED },
                  {
                     time: 1,
                     brightness: Brightness.OFF,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      });
      d.addLightRotationEventBoxGroups({
         time: 518 + 31.125,
         id,
         boxes: [
            {
               filter: { type: 2, p1: 2 },
               affectFirst: 1,
               rotationDistribution: -45,
               events: [{ rotation: 135 }, { time: 2, previous: 1 }],
            },
            {
               filter: { type: 2, p0: 1, p1: 2 },
               affectFirst: 1,
               rotationDistribution: -45,
               events: [{ rotation: 315 }, { time: 2, previous: 1 }],
            },
         ],
      });
   }
};
