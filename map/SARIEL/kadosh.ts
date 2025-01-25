import { pRandom } from '../../chromapper/library/kvlUtils.js';
import { Axis, EaseType, EventLightColor, IndexFilterType, types } from '@bsmap';
import { Brightness } from './helpers.ts';

export default (d: types.wrapper.IWrapBeatmap) => {
   const synthGroup = [0, 1, 4, 3, 1, 2, 5, 4, 2, 3, 6, 5, 7, 4, 5, 2];

   const kGroup = [0, 1, 4, 5, 10, 11];
   const kTiming = [8.5, 10, 11.5, 24.5, 26, 27.5];
   const repeatTiming = [38, 422];
   for (const rt of repeatTiming) {
      d.addColorBoostEvents({ time: rt, toggle: true });
      //#region clap
      for (let id = 14; id < 16; id++) {
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
         d.addLightRotationEventBoxGroups(
            {
               time: rt,
               id,
               boxes: [
                  {
                     events: [{ easing: EaseType.NONE, rotation: 90 }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     flip: 1,
                     events: [{ easing: EaseType.NONE, rotation: 270 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     flip: 1,
                     events: [{ easing: EaseType.NONE, rotation: 90 }],
                  },
               ],
            },
            {
               time: rt + 30,
               id,
               boxes: [
                  {
                     events: [{ easing: EaseType.NONE, rotation: 90 }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     flip: 1,
                     events: [{ easing: EaseType.NONE, rotation: 270 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     flip: 1,
                     events: [{ easing: EaseType.NONE, rotation: 90 }],
                  },
               ],
            },
         );
         const e = [
            { color: EventLightColor.WHITE, brightness: Brightness.ON },
            {
               color: EventLightColor.WHITE,
               brightness: Brightness.OFF,
               easing: EaseType.LINEAR,
               time: 0.25,
            },
         ] as Partial<types.wrapper.IWrapLightColorEventAttribute>[];
         for (let time = rt; time <= rt + 28; time++) {
            d.addLightColorEventBoxGroups({
               time,
               id,
               boxes: [
                  {
                     filter: fltr,
                     events: e,
                     beatDistribution: 0.5,
                     brightnessDistribution: -0.5,
                  },
                  {
                     filter: fltrR,
                     events: e,
                     beatDistribution: 0.5,
                     brightnessDistribution: -0.5,
                  },
               ],
            });
         }
      }
      //#endregion
      for (const kt of kTiming) {
         for (const kg of kGroup) {
            d.addLightColorEventBoxGroups({
               time: rt + kt,
               id: kg,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [
                        {
                           brightness: Brightness.EXTRA,
                           color: EventLightColor.WHITE,
                        },
                        { time: 0.125, previous: 1 },
                        {
                           time: 0.375,
                           brightness: Brightness.ON,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 0.499,
                           color: EventLightColor.BLUE,
                           brightness: Brightness.HALF,
                           easing: EaseType.LINEAR,
                        },
                        { time: 0.5, brightness: Brightness.EXTRA },
                        { time: 0.625, previous: 1 },
                        {
                           time: 0.999,
                           color: EventLightColor.BLUE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                     },
                     events: [
                        {
                           brightness: Brightness.EXTRA,
                           color: EventLightColor.WHITE,
                        },
                        { time: 0.125, previous: 1 },
                        {
                           time: 0.375,
                           brightness: Brightness.ON,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 0.5,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            });
            const startRandom = (pRandom(-7, 7, true) * 45) % 360;
            d.addLightRotationEventBoxGroups(
               {
                  time: rt + kt - 0.125,
                  id: kg,
                  boxes: [
                     {
                        rotationDistribution: pRandom() > 0.5 ? 45 : -45,
                        rotationDistributionType: 2,
                        affectFirst: 1,
                        events: [
                           {
                              easing: EaseType.NONE,
                              rotation: startRandom,
                           },
                        ],
                     },
                  ],
               },
               {
                  time: rt + kt,
                  id: kg,
                  boxes: [
                     {
                        rotationDistribution: pRandom() > 0.5 ? 45 : -45,
                        rotationDistributionType: 2,
                        affectFirst: 1,
                        events: [
                           {
                              easing: EaseType.NONE,
                              rotation: startRandom,
                           },
                        ],
                     },
                  ],
               },
               {
                  time: rt + kt + 0.5,
                  id: kg,
                  boxes: [
                     {
                        rotationDistribution: pRandom() > 0.5 ? 90 : -90,
                        rotationDistributionType: 2,
                        affectFirst: 1,
                        events: [
                           {
                              easing: EaseType.NONE,
                              previous: 1,
                           },
                           {
                              time: 0.125,
                              easing: EaseType.IN_QUAD,
                              rotation: (pRandom(-3, 3, true) * 90) % 360,
                           },
                        ],
                     },
                  ],
               },
            );
         }
      }
      for (let id = 6; id <= 7; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt - 1,
               id,
               boxes: [{ events: [{ previous: 1 }] }, { axis: Axis.Y, events: [{ previous: 1 }] }],
            },
            {
               time: rt,
               id,
               boxes: [
                  { events: [{ rotation: -90 }] },
                  {
                     axis: Axis.Y,
                     rotationDistribution: 180,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{}],
                  },
               ],
            },
         );
         for (let i = 0; i < (rt === 38 ? 56 : 60); i++) {
            d.addLightColorEventBoxGroups({
               time: rt + i * 0.5,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: synthGroup[i % synthGroup.length],
                        p1: 999,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                        {
                           time: 0.0625,
                           color: EventLightColor.WHITE,
                           brightness: Brightness.MODERATE,
                        },
                        { time: 0.1875, previous: 1 },
                        {
                           time: 0.25,
                           brightness: Brightness.ON,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 0.4375,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            });
         }
      }

      for (let i = 0; i < 2; i++) {
         d.addLightColorEventBoxGroups(
            {
               time: rt - 1,
               id: 0 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [
                        { previous: 1 },
                        { time: 0.874, easing: EaseType.LINEAR },
                        { time: 0.875, brightness: Brightness.OFF },
                     ],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     beatDistribution: 1,
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        {
                           time: 0.25,
                           color: EventLightColor.WHITE,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt - 1,
               id: 4 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [
                        { previous: 1 },
                        { time: 0.874, easing: EaseType.LINEAR },
                        { time: 0.875, brightness: Brightness.OFF },
                     ],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     beatDistribution: 1,
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        {
                           time: 0.25,
                           color: EventLightColor.WHITE,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt - 1,
               id: 10 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [
                        { previous: 1 },
                        { time: 0.874, easing: EaseType.LINEAR },
                        { time: 0.875, brightness: Brightness.OFF },
                     ],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     beatDistribution: 1,
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        {
                           time: 0.25,
                           color: EventLightColor.WHITE,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
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
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.DOUBLE,
                           frequency: 12,
                        },
                        {
                           time: 6,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                           frequency: 6,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.DOUBLE,
                           frequency: 12,
                        },
                        {
                           time: 6,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                           frequency: 6,
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
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.DOUBLE,
                           frequency: 12,
                        },
                        {
                           time: 6,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                           frequency: 6,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.DOUBLE,
                           frequency: 12,
                        },
                        {
                           time: 6,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                           frequency: 6,
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
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.DOUBLE,
                           frequency: 12,
                        },
                        {
                           time: 6,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                           frequency: 6,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.DOUBLE,
                           frequency: 12,
                        },
                        {
                           time: 6,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                           frequency: 6,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt,
               id: 8 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 4.375,
                     events: [
                        {
                           time: 0,
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        { time: 0.25, color: EventLightColor.WHITE },
                        {
                           time: 4,
                           color: EventLightColor.WHITE,
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
               time: rt - 1,
               id: 0 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     beatDistribution: 1,
                     rotationDistribution: 180,
                     rotationDistributionType: 2,
                     events: [{ easing: EaseType.NONE, previous: 1 }, { time: 0.25 }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     beatDistribution: 1,
                     rotationDistribution: 45,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, rotation: 180 },
                        { time: 0.25, rotation: 180 },
                     ],
                  },
               ],
            },
            {
               time: rt - 1,
               id: 4 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     beatDistribution: 1,
                     rotationDistribution: 180,
                     rotationDistributionType: 2,
                     events: [{ easing: EaseType.NONE, previous: 1 }, { time: 0.25 }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     beatDistribution: 1,
                     rotationDistribution: 45,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{ easing: EaseType.NONE }, { time: 0.25 }],
                  },
               ],
            },
            {
               time: rt - 1,
               id: 10 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     beatDistribution: 1,
                     rotationDistribution: 180,
                     rotationDistributionType: 2,
                     events: [{ easing: EaseType.NONE, previous: 1 }, { time: 0.25 }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     beatDistribution: 1,
                     rotationDistribution: 45,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, rotation: 90 },
                        { time: 0.25, rotation: 90 },
                     ],
                  },
               ],
            },
            {
               time: rt,
               id: 0 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     rotationDistribution: -45,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     flip: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 45 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 4,
                        p0: 0,
                     },
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 225 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 4,
                        p0: 2,
                     },
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 180 },
                     ],
                  },
               ],
            },
            {
               time: rt,
               id: 4 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     rotationDistribution: -45,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     flip: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 45 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 4,
                        p0: 0,
                     },
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 225 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 4,
                        p0: 2,
                     },
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 180 },
                     ],
                  },
               ],
            },
            {
               time: rt,
               id: 10 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     rotationDistribution: -45,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     flip: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 45 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 4,
                        p0: 0,
                     },
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 225 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 4,
                        p0: 2,
                     },
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 180 },
                     ],
                  },
               ],
            },
            {
               time: rt,
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
         );

         d.addLightColorEventBoxGroups(
            {
               time: rt + 16,
               id: 0 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [
                        {
                           time: 0,
                           brightness: Brightness.DOUBLE,
                           frequency: 12,
                        },
                        {
                           time: 6,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                           frequency: 6,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.DOUBLE,
                           frequency: 12,
                        },
                        {
                           time: 6,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                           frequency: 6,
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
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [
                        {
                           time: 0,
                           brightness: Brightness.DOUBLE,
                           frequency: 12,
                        },
                        {
                           time: 6,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                           frequency: 6,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.DOUBLE,
                           frequency: 12,
                        },
                        {
                           time: 6,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                           frequency: 6,
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
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [
                        {
                           time: 0,
                           brightness: Brightness.DOUBLE,
                           frequency: 12,
                        },
                        {
                           time: 6,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                           frequency: 6,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 0,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        {
                           time: 0.5,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.DOUBLE,
                           frequency: 12,
                        },
                        {
                           time: 6,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.OFF,
                           frequency: 6,
                        },
                     ],
                  },
               ],
            },
            {
               time: rt + 16,
               id: 8 + i,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 4.375,
                     events: [
                        {
                           time: 0,
                           color: EventLightColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        { time: 0.25, color: EventLightColor.WHITE },
                        {
                           time: 4,
                           color: EventLightColor.WHITE,
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
               time: rt + 16,
               id: 0 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     rotationDistribution: 45,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 135 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 4,
                        p0: 0,
                     },
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 180 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 4,
                        p0: 2,
                     },
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{ easing: EaseType.NONE, previous: 1 }, { time: 0.25 }],
                  },
               ],
            },
            {
               time: rt + 16,
               id: 4 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     rotationDistribution: 45,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 135 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 4,
                        p0: 0,
                     },
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 180 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 4,
                        p0: 2,
                     },
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{ easing: EaseType.NONE, previous: 1 }, { time: 0.25 }],
                  },
               ],
            },
            {
               time: rt + 16,
               id: 10 + i,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     rotationDistribution: 45,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 135 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 4,
                        p0: 0,
                     },
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [
                        { easing: EaseType.NONE, previous: 1 },
                        { time: 0.25, rotation: 180 },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 4,
                        p0: 2,
                     },
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{ easing: EaseType.NONE, previous: 1 }, { time: 0.25 }],
                  },
               ],
            },
            {
               time: rt + 16,
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
      d.addLightRotationEventBoxGroups(
         {
            time: rt,
            id: 13,
            boxes: [
               {
                  affectFirst: 1,
                  events: [{ rotation: 180 }, { time: 30, previous: 1 }],
               },
               {
                  filter: fltr,
                  axis: Axis.Y,
                  events: [{ rotation: 90 }, { time: 30, previous: 1 }],
               },
               {
                  filter: fltrR,
                  axis: Axis.Y,
                  events: [{ rotation: 90 }, { time: 30, previous: 1 }],
               },
            ],
         },
         {
            time: rt + 1,
            id: 13,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 999 },
                  axis: Axis.Y,
                  events: [{ rotation: 90 }, { time: 30, previous: 1 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     reverse: 1,
                     p1: 999,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 270 }, { time: 30, previous: 1 }],
               },
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 999 },
                  events: [{ rotation: 270 }, { time: 30, previous: 1 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     reverse: 1,
                     p1: 999,
                  },
                  events: [{ rotation: 270 }, { time: 30, previous: 1 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 5,
                     p1: 999,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 270 }, { time: 30, previous: 1 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 5,
                     reverse: 1,
                     p1: 999,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 90 }, { time: 30, previous: 1 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 5,
                     p1: 999,
                  },
                  events: [{ rotation: 270 }, { time: 30, previous: 1 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 5,
                     reverse: 1,
                     p1: 999,
                  },
                  events: [{ rotation: 270 }, { time: 30, previous: 1 }],
               },
            ],
         },
         {
            time: rt,
            id: 12,
            boxes: [
               {
                  filter: fltr,
                  axis: Axis.Y,
                  events: [{ rotation: 90 }, { time: 30, previous: 1 }],
               },
               {
                  filter: fltrR,
                  axis: Axis.Y,
                  events: [{ rotation: 90 }, { time: 30, previous: 1 }],
               },
               {
                  filter: fltr,
                  events: [{ rotation: 90 }, { time: 30, previous: 1 }],
               },
               {
                  flip: 1,
                  filter: fltrR,
                  events: [{ rotation: 90 }, { time: 30, previous: 1 }],
               },
            ],
         },
      );
      d.addLightColorEventBoxGroups({
         time: rt + 22,
         id: 12,
         boxes: [
            {
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 6, p1: 1 },
               beatDistributionType: 2,
               beatDistribution: 1 / 3,
               brightnessDistribution: -0.5,
               affectFirst: 1,
               events: [
                  { color: EventLightColor.WHITE },
                  {
                     time: 1 / 6,
                     color: EventLightColor.WHITE,
                     brightness: Brightness.OFF,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 6,
                  p1: 1,
                  reverse: 1,
               },
               beatDistributionType: 2,
               beatDistribution: 1 / 3,
               brightnessDistribution: -0.5,
               affectFirst: 1,
               events: [
                  { color: EventLightColor.WHITE },
                  {
                     time: 1 / 6,
                     color: EventLightColor.WHITE,
                     brightness: Brightness.OFF,
                     easing: EaseType.LINEAR,
                  },
               ],
            },
         ],
      });
      for (let time = rt + 4; rt === 38 ? time < rt + 28 : time <= rt + 28; time += 8) {
         d.addLightColorEventBoxGroups({
            time,
            id: 13,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 999 },
                  events: [{ frequency: 8 }, { time: 1.999, brightness: Brightness.OFF }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     reverse: 1,
                     p1: 999,
                  },
                  events: [{ frequency: 8 }, { time: 1.999, brightness: Brightness.OFF }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 5,
                     p1: 999,
                  },
                  events: [{ frequency: 8 }, { time: 1.999, brightness: Brightness.OFF }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     reverse: 1,
                     p0: 5,
                     p1: 999,
                  },
                  events: [{ frequency: 8 }, { time: 1.999, brightness: Brightness.OFF }],
               },
            ],
         });
         if (time === 450) {
            continue;
         }
         d.addLightColorEventBoxGroups(
            {
               time: time + 2,
               id: 13,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 4,
                        p1: 999,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.125,
                           color: EventLightColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.ON,
                        },
                        {
                           time: 0.4375,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 4,
                        p1: 999,
                        reverse: 1,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.125,
                           color: EventLightColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.ON,
                        },
                        {
                           time: 0.4375,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time: time + 2.5,
               id: 13,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 2,
                        p1: 999,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.125,
                           color: EventLightColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.ON,
                        },
                        {
                           time: 0.4375,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 2,
                        p1: 999,
                        reverse: 1,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.125,
                           color: EventLightColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.ON,
                        },
                        {
                           time: 0.4375,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time: time + 3,
               id: 13,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 3,
                        p1: 999,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.125,
                           color: EventLightColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.ON,
                        },
                        {
                           time: 0.4375,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 3,
                        p1: 999,
                        reverse: 1,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.125,
                           color: EventLightColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.ON,
                        },
                        {
                           time: 0.4375,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time: time + 3.5,
               id: 13,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 999,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.125,
                           color: EventLightColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.ON,
                        },
                        {
                           time: 0.4375,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 999,
                        reverse: 1,
                     },
                     events: [
                        {
                           color: EventLightColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.125,
                           color: EventLightColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.ON,
                        },
                        {
                           time: 0.4375,
                           brightness: Brightness.OFF,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
         );
      }
   }
};
