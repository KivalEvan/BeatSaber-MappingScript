import { Axis, EaseType, EventLightColor, IndexFilterType, types } from '@bsmap';
import { Brightness } from './helpers.ts';

export default (d: types.wrapper.IWrapBeatmap) => {
   const repeatTiming = [134, 294];
   let ff = false;
   for (const rt of repeatTiming) {
      d.addColorBoostEvents(
         { time: rt, toggle: false },
         { time: rt + 28, toggle: true },
      );
      for (
         let time = rt, flipFlop = false;
         time < rt + 32;
         time += 8, flipFlop = !flipFlop
      ) {
         for (let p = 0; p < 4; p++) {
            for (let id = 8; id < 12; id++) {
               d.addLightColorEventBoxGroups(
                  {
                     time: time + p / 2,
                     id: id + (flipFlop ? 0 : -4),
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: p * 2,
                              p1: 999,
                              reverse: 1,
                           },
                           events: [
                              {
                                 color: EventLightColor.WHITE,
                                 brightness: Brightness.OFF,
                              },
                              {
                                 time: 0.25,
                                 color: EventLightColor.WHITE,
                                 brightness: Brightness.EXTRA,
                                 easing: EaseType.LINEAR,
                              },
                              {
                                 time: 0.75,
                                 color: EventLightColor.BLUE,
                                 brightness: Brightness.ON,
                                 easing: EaseType.LINEAR,
                              },
                              {
                                 time: 1.875,
                                 previous: 1,
                              },
                              {
                                 time: 2,
                                 color: EventLightColor.WHITE,
                                 easing: EaseType.LINEAR,
                                 brightness: Brightness.EXTRA,
                              },
                              {
                                 time: 2.25,
                                 color: EventLightColor.WHITE,
                                 easing: EaseType.LINEAR,
                                 brightness: Brightness.ON,
                              },
                           ],
                        },
                     ],
                  },
                  {
                     time: time + 2 + p / 2,
                     id: id + (flipFlop ? 0 : -4),
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 1 + p * 2,
                              p1: 999,
                              reverse: 1,
                           },
                           events: [
                              {
                                 color: EventLightColor.WHITE,
                                 brightness: Brightness.OFF,
                              },
                              {
                                 time: 0.25,
                                 color: EventLightColor.WHITE,
                                 brightness: Brightness.DOUBLE,
                                 easing: EaseType.LINEAR,
                              },
                              {
                                 time: 0.75,
                                 color: EventLightColor.WHITE,
                                 brightness: Brightness.ON,
                                 easing: EaseType.LINEAR,
                              },
                           ],
                        },
                     ],
                  },
                  {
                     time: time + 4 + p,
                     id: id + (flipFlop ? 0 : -4),
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 1 + p * 2,
                              p1: 999,
                           },
                           events: [
                              { previous: 1 },
                              {
                                 time: 0.25,
                                 color: time >= rt + 24
                                    ? EventLightColor.RED
                                    : EventLightColor.WHITE,
                                 brightness: time >= rt + 24 ? 2.5 : 1.5,
                                 easing: EaseType.LINEAR,
                              },
                              {
                                 time: 0.75,
                                 color: time >= rt + 24
                                    ? EventLightColor.RED
                                    : EventLightColor.WHITE,
                                 brightness: Brightness.OFF,
                                 easing: EaseType.LINEAR,
                              },
                           ],
                        },
                     ],
                  },
                  {
                     time: time + 4.5 + p,
                     id: id + (flipFlop ? 0 : -4),
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: p * 2,
                              p1: 999,
                           },
                           events: [
                              { previous: 1 },
                              {
                                 time: 0.25,
                                 color: time >= rt + 24
                                    ? EventLightColor.RED
                                    : EventLightColor.WHITE,
                                 brightness: time >= rt + 24 ? 2.5 : 1.5,
                                 easing: EaseType.LINEAR,
                              },
                              {
                                 time: p === 3 ? 0.499 : 0.75,
                                 color: time >= rt + 24
                                    ? EventLightColor.RED
                                    : EventLightColor.WHITE,
                                 brightness: Brightness.OFF,
                                 easing: EaseType.LINEAR,
                              },
                           ],
                        },
                     ],
                  },
               );
               d.addLightRotationEventBoxGroups(
                  {
                     time: time + p / 2,
                     id: id + (flipFlop ? 0 : -4),
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: p * 2,
                              p1: 999,
                              reverse: 1,
                           },
                           flip: flipFlop ? 0 : 1,
                           events: [
                              { rotation: 255 },
                              {
                                 time: 1,
                                 rotation: 220,
                                 easing: EaseType.OUT_QUAD,
                              },
                              {
                                 time: 1.75,
                                 rotation: 222.5,
                                 easing: EaseType.INOUT_QUAD,
                              },
                              {
                                 time: 2.498,
                                 rotation: 165,
                                 easing: EaseType.IN_QUAD,
                              },
                              {
                                 time: 6.999 - p * 1.5,
                                 rotation: 120 + p * 15,
                                 easing: EaseType.OUT_QUAD,
                              },
                           ],
                        },
                     ],
                  },
                  {
                     time: time + 2 + p / 2,
                     id: id + (flipFlop ? 0 : -4),
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 1 + p * 2,
                              p1: 999,
                              reverse: 1,
                           },
                           flip: flipFlop ? 0 : 1,
                           events: [
                              { rotation: 135 },
                              {
                                 time: 0.499,
                                 rotation: 225,
                                 easing: EaseType.IN_QUAD,
                              },
                              {
                                 time: 5.499 - p * 1.5,
                                 rotation: 260 - p * 10,
                                 easing: EaseType.OUT_QUAD,
                              },
                           ],
                        },
                     ],
                  },
                  {
                     time: time + 4 + p,
                     id: id + (flipFlop ? 0 : -4),
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 1 + p * 2,
                              p1: 999,
                           },
                           flip: flipFlop ? 0 : 1,
                           events: [
                              { previous: 1 },
                              {
                                 time: 0.75,
                                 rotation: 45,
                                 easing: EaseType.IN_QUAD,
                              },
                           ],
                        },
                     ],
                  },
                  {
                     time: time + 4.5 + p,
                     id: id + (flipFlop ? 0 : -4),
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: p * 2,
                              p1: 999,
                           },
                           flip: flipFlop ? 0 : 1,
                           events: [
                              { previous: 1 },
                              {
                                 time: p === 3 ? 0.499 : 0.75,
                                 rotation: 315,
                                 easing: EaseType.IN_QUAD,
                              },
                           ],
                        },
                     ],
                  },
               );
               if (time === rt + 24) {
                  d.addLightColorEventBoxGroups(
                     {
                        time: time + 2 + p / 2,
                        id: id + (flipFlop ? -4 : 0),
                        boxes: [
                           {
                              filter: {
                                 type: IndexFilterType.DIVISION,
                                 p1: p,
                                 p0: 4,
                                 reverse: 1,
                              },
                              events: [
                                 {
                                    color: EventLightColor.WHITE,
                                    brightness: Brightness.OFF,
                                 },
                                 {
                                    time: 0.25,
                                    color: EventLightColor.WHITE,
                                    brightness: Brightness.DOUBLE,
                                    easing: EaseType.LINEAR,
                                 },
                                 {
                                    time: 0.75,
                                    color: EventLightColor.WHITE,
                                    brightness: Brightness.ON,
                                    easing: EaseType.LINEAR,
                                 },
                              ],
                           },
                        ],
                     },
                     {
                        time: time + 4 + p,
                        id: id + (flipFlop ? -4 : 0),
                        boxes: [
                           {
                              filter: {
                                 type: IndexFilterType.STEP_AND_OFFSET,
                                 p0: 1 + p * 2,
                                 p1: 999,
                              },
                              events: [
                                 { previous: 1 },
                                 {
                                    time: 0.25,
                                    color: time >= rt + 24
                                       ? EventLightColor.RED
                                       : EventLightColor.WHITE,
                                    brightness: time >= rt + 24 ? 2.5 : 1.5,
                                    easing: EaseType.LINEAR,
                                 },
                                 {
                                    time: p === 3 ? 0.499 : 0.75,
                                    color: time >= rt + 24
                                       ? EventLightColor.RED
                                       : EventLightColor.WHITE,
                                    brightness: Brightness.OFF,
                                    easing: EaseType.LINEAR,
                                 },
                              ],
                           },
                        ],
                     },
                     {
                        time: time + 4.5 + p,
                        id: id + (flipFlop ? -4 : 0),
                        boxes: [
                           {
                              filter: {
                                 type: IndexFilterType.STEP_AND_OFFSET,
                                 p0: p * 2,
                                 p1: 999,
                              },
                              events: [
                                 { previous: 1 },
                                 {
                                    time: 0.25,
                                    color: time >= rt + 24
                                       ? EventLightColor.RED
                                       : EventLightColor.WHITE,
                                    brightness: time >= rt + 24 ? 2.5 : 1.5,
                                    easing: EaseType.LINEAR,
                                 },
                                 {
                                    time: p === 3 ? 0.499 : 0.75,
                                    color: time >= rt + 24
                                       ? EventLightColor.RED
                                       : EventLightColor.WHITE,
                                    brightness: Brightness.OFF,
                                    easing: EaseType.LINEAR,
                                 },
                              ],
                           },
                        ],
                     },
                  );
                  d.addLightRotationEventBoxGroups(
                     {
                        time: time + p / 2,
                        id: id + (flipFlop ? -4 : 0),
                        boxes: [
                           {
                              filter: {
                                 type: IndexFilterType.STEP_AND_OFFSET,
                                 p0: p * 2,
                                 p1: 999,
                                 reverse: 1,
                              },
                              flip: flipFlop ? 1 : 0,
                              events: [
                                 { rotation: 255 },
                                 {
                                    time: 1,
                                    rotation: 220,
                                    easing: EaseType.OUT_QUAD,
                                 },
                                 {
                                    time: 1.75,
                                    rotation: 222.5,
                                    easing: EaseType.INOUT_QUAD,
                                 },
                                 {
                                    time: 2.498,
                                    rotation: 165,
                                    easing: EaseType.IN_QUAD,
                                 },
                                 {
                                    time: 6.999 - p * 1.5,
                                    rotation: 120 + p * 15,
                                    easing: EaseType.OUT_QUAD,
                                 },
                              ],
                           },
                        ],
                     },
                     {
                        time: time + 2 + p / 2,
                        id: id + (flipFlop ? -4 : 0),
                        boxes: [
                           {
                              filter: {
                                 type: IndexFilterType.STEP_AND_OFFSET,
                                 p0: 1 + p * 2,
                                 p1: 999,
                                 reverse: 1,
                              },
                              flip: flipFlop ? 1 : 0,
                              events: [
                                 { rotation: 135 },
                                 {
                                    time: 0.499,
                                    rotation: 225,
                                    easing: EaseType.IN_QUAD,
                                 },
                                 {
                                    time: 5.499 - p * 1.5,
                                    rotation: 260 - p * 10,
                                    easing: EaseType.OUT_QUAD,
                                 },
                              ],
                           },
                        ],
                     },
                     {
                        time: time + 4 + p,
                        id: id + (flipFlop ? -4 : 0),
                        boxes: [
                           {
                              filter: {
                                 type: IndexFilterType.STEP_AND_OFFSET,
                                 p0: 1 + p * 2,
                                 p1: 999,
                              },
                              flip: flipFlop ? 1 : 0,
                              events: [
                                 { previous: 1 },
                                 {
                                    time: 0.75,
                                    rotation: 45,
                                    easing: EaseType.IN_QUAD,
                                 },
                              ],
                           },
                        ],
                     },
                     {
                        time: time + 4.5 + p,
                        id: id + (flipFlop ? -4 : 0),
                        boxes: [
                           {
                              filter: {
                                 type: IndexFilterType.STEP_AND_OFFSET,
                                 p0: p * 2,
                                 p1: 999,
                              },
                              flip: flipFlop ? 1 : 0,
                              events: [
                                 { previous: 1 },
                                 {
                                    time: 0.75,
                                    rotation: 315,
                                    easing: EaseType.IN_QUAD,
                                 },
                              ],
                           },
                        ],
                     },
                  );
               }
            }
         }
      }
      for (let id = 0; id < 4; id++) {
         d.addLightColorEventBoxGroups({
            time: rt,
            id,
            boxes: [
               {
                  beatDistribution: 0.999,
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
         for (
            let time = rt, flipFlop = false, first = true;
            time <= rt + 28;
            time += 13.999, flipFlop = !flipFlop, first = false
         ) {
            d.addLightRotationEventBoxGroups({
               time,
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
         for (let i = 0; i < 14; i++) {
            d.addLightColorEventBoxGroups({
               time: rt + 1 + i * 2,
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
            if (i !== 13) {
               d.addLightColorEventBoxGroups({
                  time: rt + 1.5 + i * 2,
                  id,
                  boxes: [
                     {
                        events: [
                           {
                              time: 1,
                              color: EventLightColor.BLUE,
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

      for (let id = 8; id < 12; id++) {
         d.addLightColorEventBoxGroups(
            {
               time: rt,
               id,
               boxes: [
                  {
                     beatDistribution: 0.999,
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
                           time: 1,
                           color: EventLightColor.BLUE,
                           brightness: Brightness.ON,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
         );
      }
      for (
         let time = rt, flipFlop2 = true;
         time <= rt + 16;
         time += 8, flipFlop2 = !flipFlop2
      ) {
         for (let id = flipFlop2 ? 8 : 4; id < (flipFlop2 ? 12 : 8); id++) {
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
                        rotationDistribution: 30,
                        affectFirst: 1,
                        events: [{ rotation: 180, easing: EaseType.NONE }],
                     },
                     {
                        filter: {
                           type: IndexFilterType.STEP_AND_OFFSET,
                           p0: 1,
                           p1: 2,
                        },
                        flip: 1,
                        rotationDistribution: -30,
                        affectFirst: 1,
                        events: [{ rotation: 165, easing: EaseType.NONE }],
                     },
                  ],
               },
               {
                  time: time + 7.999,
                  id,
                  boxes: [
                     {
                        filter: {
                           type: IndexFilterType.STEP_AND_OFFSET,
                           p1: 2,
                        },
                        flip: 1,
                        rotationDistribution: -30,
                        affectFirst: 1,
                        events: [
                           { rotation: 165, easing: EaseType.INOUT_QUAD },
                        ],
                     },
                     {
                        filter: {
                           type: IndexFilterType.STEP_AND_OFFSET,
                           p0: 1,
                           p1: 2,
                        },
                        flip: 1,
                        rotationDistribution: 30,
                        affectFirst: 1,
                        events: [
                           { rotation: 180, easing: EaseType.INOUT_QUAD },
                        ],
                     },
                  ],
               },
            );
            d.addLightColorEventBoxGroups({
               time: time + 3,
               id,
               boxes: [
                  {
                     beatDistribution: 0.749,
                     events: [
                        { previous: 1 },
                        {
                           time: 0.0625,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.DOUBLE,
                           color: EventLightColor.WHITE,
                        },
                        { time: 0.125, brightness: Brightness.OFF },
                        {
                           time: 0.25,
                           easing: EaseType.LINEAR,
                           color: EventLightColor.BLUE,
                        },
                     ],
                  },
               ],
            });
            if (time === rt + 8) {
               d.addLightColorEventBoxGroups({
                  time: time +
                     5.5 +
                     (ff
                        ? id === (flipFlop2 ? 8 : 4) ||
                              id === (flipFlop2 ? 11 : 7)
                           ? 0
                           : 1
                        : id === (flipFlop2 ? 9 : 5) ||
                              id === (flipFlop2 ? 10 : 6)
                        ? 0
                        : 1),
                  id,
                  boxes: [
                     {
                        filter: { reverse: 1 },
                        beatDistribution: 0.499,
                        events: [
                           {
                              brightness: Brightness.DOUBLE,
                              color: EventLightColor.WHITE,
                           },
                           {
                              time: 0.125,
                              easing: EaseType.LINEAR,
                              brightness: Brightness.OFF,
                              color: EventLightColor.BLUE,
                           },
                        ],
                     },
                  ],
               });
               d.addLightColorEventBoxGroups({
                  time: time + 7.5,
                  id,
                  boxes: [
                     {
                        filter: { reverse: 1 },
                        beatDistribution: 0.499,
                        events: [
                           {
                              brightness: Brightness.DOUBLE,
                              color: EventLightColor.WHITE,
                           },
                           {
                              time: 0.125,
                              easing: EaseType.LINEAR,
                              brightness: Brightness.OFF,
                              color: EventLightColor.BLUE,
                           },
                        ],
                     },
                  ],
               });
            } else {
               d.addLightColorEventBoxGroups(
                  {
                     time: time + 4,
                     id,
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 1,
                              p1: 2,
                              reverse: 1,
                           },
                           beatDistribution: 1.999,
                           events: [
                              { previous: 1 },
                              {
                                 time: 0.125,
                                 easing: EaseType.LINEAR,
                                 brightness: Brightness.DOUBLE,
                                 color: EventLightColor.WHITE,
                              },
                              {
                                 time: 0.375,
                                 easing: EaseType.LINEAR,
                                 brightness: Brightness.OFF,
                                 color: EventLightColor.BLUE,
                              },
                           ],
                        },
                     ],
                  },
                  {
                     time: time + 6,
                     id,
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 0,
                              p1: 2,
                              reverse: 1,
                           },
                           beatDistribution: 1.999,
                           events: [
                              {
                                 brightness: Brightness.DOUBLE,
                                 color: EventLightColor.WHITE,
                              },
                              {
                                 time: 0.25,
                                 easing: EaseType.LINEAR,
                                 brightness: Brightness.OFF,
                                 color: EventLightColor.BLUE,
                              },
                           ],
                        },
                     ],
                  },
               );
            }
            if (time !== rt) {
               d.addLightColorEventBoxGroups({
                  time: time + 0.5 + (id - (flipFlop2 ? 8 : 4)) * 0.5,
                  id: id < (flipFlop2 ? 10 : 6)
                     ? id + 1
                     : id - (flipFlop2 ? 10 : 6)
                     ? id - 3
                     : id + 1,
                  boxes: [
                     {
                        beatDistribution: 0.499,
                        events: [
                           {
                              color: EventLightColor.WHITE,
                              brightness: Brightness.EXTRA,
                           },
                           {
                              time: 0.09375,
                              brightness: Brightness.OFF,
                              color: EventLightColor.WHITE,
                           },
                           { time: 0.125, color: EventLightColor.BLUE },
                        ],
                     },
                  ],
               });
            }
         }
      }

      // ending part
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
      for (let id = 0; id < 4; id++) {
         d.addLightColorEventBoxGroups(
            {
               time: rt + 28,
               id,
               boxes: [
                  {
                     filter: { type: 2, p1: 2 },
                     beatDistribution: 0.999,
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.09375,
                           brightness: Brightness.OFF,
                           color: EventLightColor.WHITE,
                        },
                        { time: 0.25, color: EventLightColor.RED },
                     ],
                  },
               ],
            },
            {
               time: rt + 29,
               id,
               boxes: [
                  {
                     filter: { type: 2, p1: 2 },
                     beatDistribution: 0.499,
                     events: [
                        {
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 29.5,
               id,
               boxes: [
                  {
                     filter: { type: 2, p1: 2 },
                     beatDistribution: 0.999,
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.09375,
                           brightness: Brightness.OFF,
                           color: EventLightColor.WHITE,
                        },
                        { time: 0.25, color: EventLightColor.RED },
                     ],
                  },
               ],
            },
            {
               time: rt + 30.5,
               id,
               boxes: [
                  {
                     filter: { type: 2, p1: 2 },
                     beatDistribution: 0.499,
                     events: [
                        {
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 31,
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
                           time: 0.09375,
                           brightness: Brightness.OFF,
                           color: EventLightColor.WHITE,
                        },
                        { time: 0.125, color: EventLightColor.RED },
                        {
                           time: 0.25,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: rt + 28,
               id,
               boxes: [
                  {
                     events: [
                        { rotation: 0, easing: EaseType.NONE },
                        { time: 1.499, previous: 1 },
                     ],
                  },
               ],
            },
            {
               time: rt + 29.5,
               id,
               boxes: [
                  {
                     events: [{ rotation: 90 }, { time: 1.499, previous: 1 }],
                  },
               ],
            },
            {
               time: rt + 31,
               id,
               boxes: [
                  {
                     filter: { type: 2, p1: 2 },
                     affectFirst: 1,
                     rotationDistribution: -45,
                     events: [{ rotation: 135 }, { time: 0.999, previous: 1 }],
                  },
                  {
                     filter: { type: 2, p0: 1, p1: 2 },
                     affectFirst: 1,
                     rotationDistribution: -45,
                     events: [{ rotation: 315 }, { time: 0.999, previous: 1 }],
                  },
               ],
            },
         );
      }
      for (let id = 14; id < 16; id++) {
         d.addLightColorEventBoxGroups(
            {
               time: rt + 29,
               id,
               boxes: [
                  {
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.09375,
                           brightness: Brightness.OFF,
                           color: EventLightColor.WHITE,
                        },
                        { time: 0.25, color: EventLightColor.RED },
                     ],
                  },
               ],
            },
            {
               time: rt + 29.5,
               id,
               boxes: [
                  {
                     events: [
                        {
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups({
            time: rt + 29,
            id,
            boxes: [
               {
                  events: [{ rotation: 90 }, { time: 0.5, previous: 1 }],
               },
               {
                  filter: fltr,
                  axis: Axis.Y,
                  events: [{ rotation: 270 }, { time: 0.5, previous: 1 }],
               },
               {
                  filter: fltrR,
                  axis: Axis.Y,
                  events: [{ rotation: 90 }, { time: 0.5, previous: 1 }],
               },
            ],
         });
      }
      for (let id = 12; id < 14; id++) {
         d.addLightColorEventBoxGroups(
            {
               time: rt + 30.5,
               id,
               boxes: [
                  {
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.09375,
                           brightness: Brightness.OFF,
                           color: EventLightColor.WHITE,
                        },
                        { time: 0.25, color: EventLightColor.RED },
                     ],
                  },
               ],
            },
            {
               time: rt + 31,
               id,
               boxes: [
                  {
                     events: [
                        {
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups({
            time: rt + 30.5,
            id,
            boxes: [
               {
                  events: [{ rotation: 90 }, { time: 0.5, previous: 1 }],
               },
               {
                  filter: fltr,
                  axis: Axis.Y,
                  events: [{ rotation: 270 }, { time: 0.5, previous: 1 }],
               },
               {
                  filter: fltrR,
                  axis: Axis.Y,
                  events: [{ rotation: 90 }, { time: 0.5, previous: 1 }],
               },
            ],
         });
      }
      ff = !ff;
   }
};
