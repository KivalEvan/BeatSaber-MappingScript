import { Axis, Beatmap, EaseType, EventLightColor, IndexFilterType, pRandom, types } from '@bsmap';
import { Brightness } from './helpers.ts';

export default (d: Beatmap) => {
   const repeatDownTiming = [230, 390];
   for (const rt of repeatDownTiming) {
      d.addColorBoostEvents(
         { time: rt + 1.125, toggle: false },
         { time: rt + 16, toggle: true },
         { time: rt + 17.125, toggle: false },
      );

      for (let id = 0; id < 12; id++) {
         d.addLightColorEventBoxGroups({
            time: rt,
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
            time: rt,
            id,
            boxes: [
               {
                  filter: { type: 2, p0: 0, p1: 999, reverse: 0 },
                  events: [
                     {
                        color: EventLightColor.BLUE,
                        brightness: Brightness.FLASH,
                     },
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
                     {
                        color: EventLightColor.BLUE,
                        brightness: Brightness.FLASH,
                     },
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
                     {
                        color: EventLightColor.BLUE,
                        brightness: Brightness.FLASH,
                     },
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
                     {
                        color: EventLightColor.BLUE,
                        brightness: Brightness.FLASH,
                     },
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
               time: rt,
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
               time: rt + 0.999,
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
               time: rt,
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
               time: rt + 8,
               id,
               boxes: [
                  {
                     axis: Axis.Y,
                     events: [{ easing: EaseType.OUT_QUAD }],
                  },
               ],
            },
         );
         for (
            let time = rt + 0.5, flipFlop = false, first = true;
            time < rt + 25;
            time += 12, flipFlop = !flipFlop, first = false
         ) {
            d.addLightRotationEventBoxGroups({
               time: Math.min(time, rt + 23.999),
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     flip: 1,
                     rotationDistribution: flipFlop ? -15 : 15,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: flipFlop ? 150 : 120,
                           easing: first ? 2 : 3,
                        },
                     ],
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
                     events: [
                        {
                           rotation: flipFlop ? 120 : 150,
                           easing: first ? 2 : 3,
                        },
                     ],
                  },
               ],
            });
         }
         for (let time = rt + 1; time < rt + 24; time += 2) {
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
            if (time < rt + 20) {
               d.addLightColorEventBoxGroups({
                  time: time + 0.5,
                  id,
                  boxes: [
                     {
                        events: [
                           {
                              time: 1,
                              color: time === rt + 15 ? EventLightColor.RED : EventLightColor.BLUE,
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
               time: rt,
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
               time: rt + 5,
               id,
               boxes: [
                  {
                     events: [{ rotation: 265, easing: EaseType.OUT_QUAD }],
                  },
               ],
            },
         );
         for (
            let time = rt + 1, flipFlop = false, first = true;
            time <= rt + 25;
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
                  time: Math.min(time + 3, rt + 25.999),
                  id,
                  boxes: [
                     {
                        filter: {
                           type: IndexFilterType.STEP_AND_OFFSET,
                           p1: 2,
                        },
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
               time: rt + 1,
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
               time: rt + 1.5,
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
               time: rt + 16,
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
               time: rt + 17,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 0.499,
                     events: [
                        {
                           color: EventLightColor.RED,
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
               time: rt + 17.5,
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
         for (let time = rt + 1.5; time < rt + 23.5; time += 0.5) {
            if (time >= rt + 16 && time < rt + 17.5) {
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
            time: rt + 23.5,
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
      }
      for (let id = 8; id < 12; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt,
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
               time: rt + 6,
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
               time: rt + 30,
               id,
               boxes: [{ events: [{ rotation: 270 }] }],
            },
         );
         for (
            let time = rt + 2, flipFlop = false, first = true;
            time <= rt + 26;
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
                           p1: 2,
                        },
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
         for (let time = rt, flipFlop = false; time < rt + 24; time += 4, flipFlop = !flipFlop) {
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
            if (time === rt + 20) {
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
                              color: time === rt + 12 ? EventLightColor.RED : EventLightColor.BLUE,
                              easing: EaseType.LINEAR,
                           },
                        ],
                     },
                  ],
               });
            }
         }
      }
   }
};
