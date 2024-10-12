import {
   Axis,
   DistributionType,
   EaseType,
   EventBoxColor,
   IndexFilterType,
   pRandom,
   types,
} from '../../depsLocal.ts';
import { Brightness, objectTimeShift } from './helpers.ts';

export default (d: types.wrapper.IWrapBeatmap) => {
   const repeatTiming = [166, 326];
   let ff = false;
   for (const rt of repeatTiming) {
      for (let i = 0; i < 2; i++) {
         d.addLightColorEventBoxGroups(
            {
               time: rt,
               id: 10 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 2.5 },
                        { time: 0.0625, previous: 1 },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.EXTRA,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt,
               id: 4 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 2.5 },
                        { time: 0.0625, previous: 1 },
                        {
                           time: 0.5,
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt,
               id: 0 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 2.5 },
                        { time: 0.0625, previous: 1 },
                        {
                           time: 0.5,
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 4,
               id: 10 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { previous: 1 },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 8,
               id: 10 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 2.5 },
                        { time: 0.0625, previous: 1 },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.EXTRA,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 8,
               id: 0 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 2.5 },
                        { time: 0.0625, previous: 1 },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.EXTRA,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 8,
               id: 4 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 2.5 },
                        { time: 0.0625, previous: 1 },
                        {
                           time: 0.5,
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 12,
               id: 10 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { previous: 1 },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 12,
               id: 0 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { previous: 1 },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 16,
               id: 10 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 2.5 },
                        { time: 0.0625, previous: 1 },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.EXTRA,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 16,
               id: 0 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 2.5 },
                        { time: 0.0625, previous: 1 },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.EXTRA,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 16,
               id: 4 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 2.5 },
                        { time: 0.0625, previous: 1 },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.EXTRA,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 20,
               id: 10 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { previous: 1 },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 20,
               id: 0 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { previous: 1 },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 20,
               id: 4 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 1,
                     events: [
                        { previous: 1 },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: rt,
               id: 0 + i,
               boxes: [
                  {
                     rotationDistribution: -45,
                     affectFirst: 1,
                     events: [{ rotation: 165, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
            {
               time: rt - 6 + 7 + 0.125,
               id: 0 + i,
               boxes: [
                  {
                     rotationDistribution: -60 - pRandom(0, 5),
                     beatDistribution: 3.5,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 270 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt - 6 + 10.5 + 0.125,
               id: 0 + i,
               boxes: [
                  {
                     rotationDistribution: -60 - pRandom(0, 5),
                     beatDistribution: 7,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 255 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt - 6 + 17.5 + 0.125,
               id: 0 + i,
               boxes: [
                  {
                     rotationDistribution: -60 - pRandom(0, 5),
                     beatDistribution: 7,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 270 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt - 6 + 24.5 + 0.125,
               id: 0 + i,
               boxes: [
                  {
                     rotationDistribution: -60 - pRandom(0, 5),
                     beatDistribution: 7,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 255 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt,
               id: 4 + i,
               boxes: [
                  {
                     rotationDistribution: -30,
                     affectFirst: 1,
                     events: [{ rotation: 165, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
            {
               time: rt - 6 + 7 + 0.25,
               id: 4 + i,
               boxes: [
                  {
                     rotationDistribution: -45 - pRandom(0, 5),
                     beatDistribution: 4,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 240 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt - 6 + 11 + 0.25,
               id: 4 + i,
               boxes: [
                  {
                     rotationDistribution: -45 - pRandom(0, 5),
                     beatDistribution: 8,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 225 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt - 6 + 19 + 0.25,
               id: 4 + i,
               boxes: [
                  {
                     rotationDistribution: -45 - pRandom(0, 5),
                     beatDistribution: 8,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 240 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt - 6 + 27 + 0.25,
               id: 4 + i,
               boxes: [
                  {
                     rotationDistribution: -45 - pRandom(0, 5),
                     beatDistribution: 8,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 225 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt,
               id: 10 + i,
               boxes: [
                  {
                     rotationDistribution: 45,
                     affectFirst: 1,
                     events: [{ rotation: 285, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
            {
               time: rt - 6 + 7,
               id: 10 + i,
               boxes: [
                  {
                     rotationDistribution: 75 + pRandom(0, 5),
                     beatDistribution: 3,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 150 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt - 6 + 10,
               id: 10 + i,
               boxes: [
                  {
                     rotationDistribution: 75 + pRandom(0, 5),
                     beatDistribution: 6,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 165 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt - 6 + 16,
               id: 10 + i,
               boxes: [
                  {
                     rotationDistribution: 75 + pRandom(0, 5),
                     beatDistribution: 6,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 150 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt - 6 + 22,
               id: 10 + i,
               boxes: [
                  {
                     rotationDistribution: 75 + pRandom(0, 5),
                     beatDistribution: 6,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 165 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt - 6 + 28,
               id: 10 + i,
               boxes: [
                  {
                     rotationDistribution: 75 + pRandom(0, 5),
                     beatDistribution: 6,
                     affectFirst: 1,
                     events: [
                        {
                           rotation: 150 + pRandom(-5, 5),
                           easing: EaseType.INOUT_QUAD,
                        },
                     ],
                  },
               ],
            },
         );

         d.addLightColorEventBoxGroups({
            time: rt,
            id: 14 + i,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p1: 2,
                     reverse: i ? 0 : 1,
                  },
                  beatDistribution: 4.25,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.DOUBLE,
                     },
                     {
                        time: 0.25,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 4,
                        color: EventBoxColor.WHITE,
                        easing: EaseType.LINEAR,
                        brightness: Brightness.OFF,
                     },
                  ],
               },
            ],
         });
         d.addLightRotationEventBoxGroups(
            {
               time: rt,
               id: 14 + i,
               boxes: [
                  {
                     events: [{ rotation: 75 }],
                  },
                  {
                     filter: { reverse: i ? 1 : 0 },
                     axis: Axis.Y,
                     rotationDistribution: i ? -45 : 45,
                     affectFirst: 1,
                     events: [{ rotation: i ? 330 : 30 }],
                  },
               ],
            },
            {
               time: rt + 4,
               id: 14 + i,
               boxes: [
                  {
                     events: [{ rotation: 270 }],
                  },
                  {
                     axis: Axis.Y,
                     rotationDistribution: 90,
                     affectFirst: 1,
                     events: [{ rotation: 315 }],
                  },
               ],
            },
         );
      }

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

      const e: Partial<types.wrapper.IWrapLightColorEventAttribute>[] = [
         { color: EventBoxColor.WHITE, brightness: Brightness.DOUBLE },
         {
            time: 0.25,
            color: EventBoxColor.RED,
            brightness: Brightness.ON,
            easing: EaseType.LINEAR,
         },
         { time: 0.375, previous: 1 },
         {
            color: EventBoxColor.RED,
            time: 0.625,
            brightness: Brightness.HALF,
            easing: EaseType.LINEAR,
         },
      ];

      const en: Partial<types.wrapper.IWrapLightColorEventAttribute>[] = [
         { color: EventBoxColor.WHITE, brightness: Brightness.DOUBLE },
         {
            time: 0.125,
            color: EventBoxColor.WHITE,
            brightness: Brightness.ON,
            easing: EaseType.LINEAR,
         },
         { time: 0.25, previous: 1 },
         {
            color: EventBoxColor.WHITE,
            time: 0.5,
            brightness: Brightness.OFF,
            easing: EaseType.LINEAR,
         },
      ];

      for (let id = 14; id < 16; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt + 16,
               id,
               boxes: [
                  {
                     events: [{ rotation: 120 }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: -60,
                     events: [{ rotation: 225 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: 60,
                     events: [{ rotation: 135 }],
                  },
               ],
            },
            {
               time: rt + 23.999,
               id,
               boxes: [
                  {
                     events: [{ rotation: 150 }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: -75,
                     events: [{ rotation: 210 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: 75,
                     events: [{ rotation: 150 }],
                  },
               ],
            },
         );
         for (let time = rt + 16; time < rt + 24; time++) {
            d.addLightColorEventBoxGroups({
               time,
               id,
               boxes: [
                  {
                     filter: fltrR,
                     beatDistribution: 0.875,
                     events: en,
                  },
                  {
                     filter: fltr,
                     beatDistribution: 0.875,
                     events: en,
                  },
               ],
            });
         }
      }

      for (let time = rt, id = 0; time < rt + 24; time += 0.5, id = ++id % 2) {
         switch (id) {
            case 0:
               d.addLightColorEventBoxGroups(
                  {
                     time,
                     id: 12,
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.DIVISION,
                              p0: 6,
                              p1: 0,
                           },
                           events: e,
                        },
                        {
                           filter: {
                              type: IndexFilterType.DIVISION,
                              p0: 6,
                              p1: 0,
                              reverse: 1,
                           },
                           events: e,
                        },
                     ],
                  },
                  {
                     time,
                     id: 13,
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 3,
                              p1: 999,
                           },
                           events: e,
                        },
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 4,
                              p1: 999,
                           },
                           events: e,
                        },
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 3,
                              p1: 999,
                              reverse: 1,
                           },
                           events: e,
                        },
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 4,
                              p1: 999,
                              reverse: 1,
                           },
                           events: e,
                        },
                     ],
                  },
               );
               break;
            case 1:
               d.addLightColorEventBoxGroups(
                  {
                     time,
                     id: 12,
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.DIVISION,
                              p0: 6,
                              p1: 1,
                           },
                           events: e,
                        },
                        {
                           filter: {
                              type: IndexFilterType.DIVISION,
                              p0: 6,
                              p1: 1,
                              reverse: 1,
                           },
                           events: e,
                        },
                     ],
                  },
                  {
                     time,
                     id: 13,
                     boxes: [
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 0,
                              p1: 999,
                           },
                           events: objectTimeShift(e, 3 / 16),
                        },
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 1,
                              p1: 999,
                           },
                           events: objectTimeShift(e, 2 / 16),
                        },
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 2,
                              p1: 999,
                           },
                           events: objectTimeShift(e, 1 / 16),
                        },
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 5,
                              p1: 999,
                           },
                           events: e,
                        },
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 0,
                              p1: 999,
                              reverse: 1,
                           },
                           events: objectTimeShift(e, 3 / 16),
                        },
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 1,
                              p1: 999,
                              reverse: 1,
                           },
                           events: objectTimeShift(e, 2 / 16),
                        },
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 2,
                              p1: 999,
                              reverse: 1,
                           },
                           events: objectTimeShift(e, 1 / 16),
                        },
                        {
                           filter: {
                              type: IndexFilterType.STEP_AND_OFFSET,
                              p0: 5,
                              p1: 999,
                              reverse: 1,
                           },
                           events: e,
                        },
                     ],
                  },
               );
               break;
         }
      }
      d.addLightRotationEventBoxGroups(
         {
            time: rt - 0.001,
            id: 12,
            boxes: [
               { events: [{ rotation: 90, easing: EaseType.NONE }] },
               {
                  axis: Axis.Y,
                  events: [{ easing: EaseType.NONE }],
               },
            ],
         },
         {
            time: rt - 0.001,
            id: 13,
            boxes: [
               { events: [{ rotation: 270, easing: EaseType.NONE }] },
               {
                  axis: Axis.Y,
                  events: [{ easing: EaseType.NONE }],
               },
            ],
         },
         {
            time: rt,
            id: 12,
            boxes: [
               {
                  filter: { type: IndexFilterType.DIVISION, p0: 6, p1: 0 },
                  axis: Axis.Y,
                  rotationDistribution: -15,
                  affectFirst: 1,
                  events: [{ rotation: 120 }],
               },
               {
                  filter: {
                     type: IndexFilterType.DIVISION,
                     p0: 6,
                     p1: 0,
                     reverse: 1,
                  },
                  axis: Axis.Y,
                  rotationDistribution: 15,
                  affectFirst: 1,
                  events: [{ rotation: 240 }],
               },
               {
                  filter: { type: IndexFilterType.DIVISION, p0: 6, p1: 1 },
                  axis: Axis.Y,
                  rotationDistribution: 15,
                  affectFirst: 1,
                  events: [{ rotation: 45 }],
               },
               {
                  filter: {
                     type: IndexFilterType.DIVISION,
                     p0: 6,
                     p1: 1,
                     reverse: 1,
                  },
                  axis: Axis.Y,
                  rotationDistribution: -15,
                  affectFirst: 1,
                  events: [{ rotation: 315 }],
               },
            ],
         },
         {
            time: rt,
            id: 13,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 999,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 330 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 999,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 300 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 2,
                     p1: 999,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 15 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 3,
                     p1: 999,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 75 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 4,
                     p1: 999,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 285 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 5,
                     p1: 999,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 345 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 999,
                     reverse: 1,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 30 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 999,
                     reverse: 1,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 60 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 2,
                     p1: 999,
                     reverse: 1,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 345 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 3,
                     p1: 999,
                     reverse: 1,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 285 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 4,
                     p1: 999,
                     reverse: 1,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 75 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 5,
                     p1: 999,
                     reverse: 1,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 15 }],
               },
            ],
         },
         {
            time: rt + 24,
            id: 12,
            boxes: [
               { events: [{}] },
               {
                  axis: Axis.Y,
                  events: [{ easing: EaseType.NONE }],
               },
            ],
         },
         {
            time: rt + 24,
            id: 13,
            boxes: [
               { events: [{}] },
               {
                  axis: Axis.Y,
                  events: [{ easing: EaseType.NONE }],
               },
            ],
         },
      );
      d.addLightColorEventBoxGroups(
         {
            time: rt + 24,
            id: 12,
            boxes: [
               {
                  events: [
                     {
                        brightness: 0,
                        easing: EaseType.LINEAR,
                        color: EventBoxColor.BLUE,
                     },
                  ],
               },
            ],
         },
         {
            time: rt + 24,
            id: 13,
            boxes: [
               {
                  events: [
                     {
                        brightness: 0,
                        easing: EaseType.LINEAR,
                        color: EventBoxColor.BLUE,
                     },
                  ],
               },
            ],
         },
      );

      for (let id = 0; id < 12; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt + 24,
               id,
               boxes: [
                  {
                     rotationDistribution: -15,
                     rotationDistributionType: DistributionType.STEP,
                     affectFirst: 1,
                     events: [{ rotation: 180, easing: EaseType.NONE }],
                  },
                  {
                     axis: Axis.Y,
                     events: [{ easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: rt + 28,
               id,
               boxes: [
                  {
                     rotationDistribution: 45,
                     rotationDistributionType: DistributionType.STEP,
                     affectFirst: 1,
                     events: [{ rotation: 360 }],
                  },
                  {
                     axis: Axis.Y,
                     events: [{}],
                  },
               ],
            },
         );
         d.addLightColorEventBoxGroups({
            time: rt + 28,
            id,
            boxes: [
               {
                  beatDistribution: 1.25,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.DOUBLE,
                     },
                     { time: 0.125, brightness: Brightness.OFF },
                     {
                        time: 0.25,
                        brightness: Brightness.ON,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 0.75,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                        color: EventBoxColor.BLUE,
                     },
                  ],
               },
            ],
         });
      }
      for (let i = 0; i < 4; i++) {
         d.addLightColorEventBoxGroups(
            {
               time: rt + 24 + i * 0.5,
               id: ff ? 0 + i : 11 - i,
               boxes: [
                  {
                     filter: { type: 2, p1: 2 },
                     beatDistribution: 0.499,
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.QUAD,
                        },
                        {
                           time: 0.0625,
                           brightness: Brightness.OFF,
                           color: EventBoxColor.BLUE,
                        },
                        {
                           time: 0.1875,
                           easing: EaseType.LINEAR,
                           frequency: 12,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 24.25 + i * 0.5,
               id: ff ? 11 - i : 0 + i,
               boxes: [
                  {
                     filter: { type: 2, p1: 2 },
                     beatDistribution: 0.499,
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.QUAD,
                        },
                        {
                           time: 0.0625,
                           brightness: Brightness.OFF,
                           color: EventBoxColor.BLUE,
                        },
                        {
                           time: 0.1875,
                           easing: EaseType.LINEAR,
                           frequency: 12,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 26 + i * 0.5,
               id: ff ? 0 + i : 11 - i,
               boxes: [
                  {
                     filter: { type: 2, p0: 1, p1: 2 },
                     beatDistribution: 0.499,
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.QUAD,
                        },
                        {
                           time: 0.0625,
                           brightness: Brightness.OFF,
                           color: EventBoxColor.BLUE,
                        },
                        {
                           time: 0.1875,
                           easing: EaseType.LINEAR,
                           frequency: 12,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 26.25 + i * 0.5,
               id: ff ? 11 - i : 0 + i,
               boxes: [
                  {
                     filter: { type: 2, p0: 1, p1: 2 },
                     beatDistribution: i === 3 ? 0.249 : 0.499,
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.QUAD,
                        },
                        {
                           time: 0.0625,
                           brightness: Brightness.OFF,
                           color: EventBoxColor.BLUE,
                        },
                        {
                           time: 0.1875,
                           easing: EaseType.LINEAR,
                           frequency: 12,
                        },
                     ],
                  },
               ],
            },
         );
      }

      for (let i = 0; i < 2; i++) {
         d.addLightColorEventBoxGroups(
            {
               time: rt + 4,
               id: 8 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 4.5,
                     events: [
                        {
                           time: 0,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        { time: 0.25, color: EventBoxColor.WHITE },
                        {
                           time: 4,
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 12,
               id: 8 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 4.5,
                     events: [
                        {
                           time: 0,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        { time: 0.25, color: EventBoxColor.WHITE },
                        {
                           time: 4,
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 20,
               id: 8 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 3.999,
                     events: [
                        {
                           time: 0,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        { time: 0.25, color: EventBoxColor.WHITE },
                        {
                           time: 3.5,
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 20,
               id: 2 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 3.999,
                     events: [
                        {
                           time: 0,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        { time: 0.25, color: EventBoxColor.WHITE },
                        {
                           time: 3.5,
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: rt + 4,
               id: 8 + i,
               boxes: [
                  { axis: Axis.Y, events: [{}] },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                        reverse: 1,
                     },
                     events: [{ rotation: 135 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                        reverse: 1,
                     },
                     events: [{ rotation: 135 }],
                  },
               ],
            },
            {
               time: rt + 10,
               id: 8 + i,
               boxes: [
                  { axis: Axis.Y, events: [{}] },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                        reverse: 1,
                     },
                     affectFirst: 1,
                     rotationDistribution: -15,
                     events: [{ rotation: 135, easing: EaseType.OUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                        reverse: 1,
                     },
                     affectFirst: 1,
                     rotationDistribution: 15,
                     events: [{ rotation: 135, easing: EaseType.OUT_QUAD }],
                  },
               ],
            },
            {
               time: rt + 12,
               id: 8 + i,
               boxes: [
                  { axis: Axis.Y, events: [{}] },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                        reverse: 1,
                     },
                     events: [{ rotation: 135 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                        reverse: 1,
                     },
                     events: [{ rotation: 135 }],
                  },
               ],
            },
            {
               time: rt + 18,
               id: 8 + i,
               boxes: [
                  { axis: Axis.Y, events: [{}] },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                        reverse: 1,
                     },
                     affectFirst: 1,
                     rotationDistribution: -30,
                     events: [{ rotation: 135, easing: EaseType.OUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                        reverse: 1,
                     },
                     affectFirst: 1,
                     rotationDistribution: 30,
                     events: [{ rotation: 135, easing: EaseType.OUT_QUAD }],
                  },
               ],
            },
            {
               time: rt + 20,
               id: 8 + i,
               boxes: [
                  { axis: Axis.Y, events: [{}] },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                        reverse: 1,
                     },
                     events: [{ rotation: 135 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                        reverse: 1,
                     },
                     events: [{ rotation: 135 }],
                  },
               ],
            },
            {
               time: rt + 23.999,
               id: 8 + i,
               boxes: [
                  { axis: Axis.Y, events: [{}] },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                        reverse: 1,
                     },
                     affectFirst: 1,
                     rotationDistribution: -45,
                     events: [{ rotation: 135, easing: EaseType.OUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                        reverse: 1,
                     },
                     affectFirst: 1,
                     rotationDistribution: 45,
                     events: [{ rotation: 135, easing: EaseType.OUT_QUAD }],
                  },
               ],
            },
            {
               time: rt + 20,
               id: 2 + i,
               boxes: [
                  { axis: Axis.Y, events: [{}] },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                        reverse: 1,
                     },
                     events: [{ rotation: 270 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                        reverse: 1,
                     },
                     events: [{ rotation: 270 }],
                  },
               ],
            },
            {
               time: rt + 23.999,
               id: 2 + i,
               boxes: [
                  { axis: Axis.Y, events: [{}] },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                        reverse: 1,
                     },
                     affectFirst: 1,
                     rotationDistribution: -15,
                     events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                        reverse: 1,
                     },
                     affectFirst: 1,
                     rotationDistribution: 15,
                     events: [{ rotation: 270, easing: EaseType.OUT_QUAD }],
                  },
               ],
            },
         );
      }
      ff = !ff;
   }
};
