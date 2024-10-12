import { Axis, EaseType, EventBoxColor, IndexFilterType, types } from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

export default (d: types.wrapper.IWrapBeatmap) => {
   const repeatTiming = [94, 254, 414, 542];
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
   for (const rt of repeatTiming) {
      d.addColorBoostEvents(
         { time: rt, toggle: true },
         { time: rt + 4, toggle: false },
         { time: rt + 6, toggle: true },
      );
      for (let id = 0; id < 4; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt,
               id: id,
               boxes: [
                  {
                     rotationDistribution: 30,
                     axis: Axis.Y,
                     events: [{ rotation: 15, easing: EaseType.NONE }],
                  },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     rotationDistribution: -90,
                     affectFirst: 1,
                     events: [{ rotation: 15, easing: EaseType.NONE }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     rotationDistribution: 90,
                     affectFirst: 1,
                     events: [{ rotation: 75, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: rt + 2.5,
               id: id,
               boxes: [
                  { axis: Axis.Y, events: [{ easing: EaseType.IN_QUAD }] },
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     rotationDistribution: -135,
                     affectFirst: 1,
                     events: [{ rotation: 300 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     rotationDistribution: 135,
                     affectFirst: 1,
                     events: [{ rotation: 150 }],
                  },
               ],
            },
         );
         for (let i = 0; i < 4; i++) {
            d.addLightColorEventBoxGroups({
               time: rt + i * 0.25,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0 + i * 2,
                        p1: 999,
                     },
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        { time: 0.125, previous: 1 },
                        {
                           time: 0.25,
                           color: EventBoxColor.RED,
                           brightness: Brightness.ON,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1,
                           color: EventBoxColor.BLUE,
                           brightness: Brightness.MODERATE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.125,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.25,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1 + i * 2,
                        p1: 999,
                     },
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        { time: 0.125, previous: 1 },
                        {
                           time: 0.25,
                           color: EventBoxColor.RED,
                           brightness: Brightness.ON,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1,
                           color: EventBoxColor.BLUE,
                           brightness: Brightness.MODERATE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.125,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.25,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            });
         }
      }
      for (let id = 12; id < 14; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt,
               id,
               boxes: [
                  {
                     events: [{ rotation: 120 }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: -75,
                     events: [{ rotation: 255 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: 75,
                     events: [{ rotation: 105 }],
                  },
               ],
            },
            {
               time: rt + 3,
               id,
               boxes: [
                  {
                     events: [{ rotation: 60, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: -120,
                     events: [{ rotation: 210, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: 120,
                     events: [{ rotation: 150, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
         );
         d.addLightColorEventBoxGroups({
            time: rt,
            id,
            boxes: [
               {
                  filter: fltr,
                  beatDistribution: 2,
                  events: [
                     {
                        frequency: 8,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.ON,
                     },
                     {
                        time: 0.5,
                        color: EventBoxColor.BLUE,
                        frequency: 8,
                        brightness: Brightness.FLASH,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1,
                        frequency: 8,
                        brightness: Brightness.EXTRA,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1.5,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
               {
                  filter: fltrR,
                  beatDistribution: 2,
                  events: [
                     {
                        frequency: 8,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.ON,
                     },
                     {
                        time: 0.5,
                        color: EventBoxColor.BLUE,
                        frequency: 8,
                        brightness: Brightness.FLASH,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1,
                        frequency: 8,
                        brightness: Brightness.EXTRA,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1.5,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         });
      }

      for (let id = 4; id < 8; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt + 2,
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     rotationDistribution: -45,
                     affectFirst: 1,
                     events: [{ rotation: 120, easing: EaseType.NONE }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     rotationDistribution: 45,
                     affectFirst: 1,
                     events: [{ rotation: 60, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: rt + 3.999,
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     rotationDistribution: -135,
                     affectFirst: 1,
                     events: [{ rotation: 210 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     rotationDistribution: 135,
                     affectFirst: 1,
                     events: [{ rotation: 150 }],
                  },
               ],
            },
         );
         for (let i = 0; i < 4; i++) {
            d.addLightColorEventBoxGroups({
               time: rt + 2 + i * 0.25,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0 + i * 2,
                        p1: 999,
                        reverse: 1,
                     },
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        { time: 0.125, previous: 1 },
                        {
                           time: 0.25,
                           color: EventBoxColor.BLUE,
                           brightness: Brightness.ON,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1,
                           color: EventBoxColor.RED,
                           brightness: Brightness.MODERATE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.125,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.25,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1 + i * 2,
                        p1: 999,
                        reverse: 1,
                     },
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        { time: 0.125, previous: 1 },
                        {
                           time: 0.25,
                           color: EventBoxColor.RED,
                           brightness: Brightness.ON,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1,
                           color: EventBoxColor.BLUE,
                           brightness: Brightness.MODERATE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.125,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.25,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            });
         }
      }
      for (let id = 14; id < 16; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt + 2,
               id,
               boxes: [
                  {
                     events: [{ rotation: 120 }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: -75,
                     events: [{ rotation: 240 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: 75,
                     events: [{ rotation: 120 }],
                  },
               ],
            },
            {
               time: rt + 4.999,
               id,
               boxes: [
                  {
                     events: [{ rotation: 60, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: -120,
                     events: [{ rotation: 180, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: 120,
                     events: [{ rotation: 180, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
         );
         d.addLightColorEventBoxGroups({
            time: rt + 2,
            id,
            boxes: [
               {
                  filter: fltr,
                  beatDistribution: 2,
                  events: [
                     {
                        frequency: 8,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.ON,
                     },
                     {
                        time: 0.5,
                        color: EventBoxColor.BLUE,
                        frequency: 8,
                        brightness: Brightness.FLASH,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1,
                        frequency: 8,
                        brightness: Brightness.EXTRA,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1.5,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
               {
                  filter: fltrR,
                  beatDistribution: 2,
                  events: [
                     {
                        frequency: 8,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.ON,
                     },
                     {
                        time: 0.5,
                        color: EventBoxColor.BLUE,
                        frequency: 8,
                        brightness: Brightness.FLASH,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1,
                        frequency: 8,
                        brightness: Brightness.EXTRA,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1.5,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         });
      }

      for (let id = 0; id < 8; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt + 4,
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     events: [{ rotation: id < 4 ? 120 : 300 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [{ rotation: id < 4 ? 270 : 180 }],
                  },
                  {
                     axis: Axis.Y,
                     events: [{}],
                  },
               ],
            },
            {
               time: rt + 4.999,
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     events: [{ rotation: id < 4 ? 120 : 300 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [{ rotation: id < 4 ? 270 : 180 }],
                  },
                  {
                     axis: Axis.Y,
                     events: [{}],
                  },
               ],
            },
         );
         d.addLightColorEventBoxGroups({
            time: rt + 4,
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                  beatDistribution: 1,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.TRIPLE,
                     },
                     { time: 0.125, previous: 1 },
                     { time: 0.15625, brightness: 0 },
                     {
                        time: 0.1875,
                        color: EventBoxColor.RED,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.75,
                        color: EventBoxColor.BLUE,
                        frequency: 8,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p1: 2,
                     p0: 1,
                  },
                  beatDistribution: 1,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.TRIPLE,
                     },
                     { time: 0.125, previous: 1 },
                     { time: 0.15625, brightness: 0 },
                     {
                        time: 0.1875,
                        color: EventBoxColor.RED,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.75,
                        color: EventBoxColor.BLUE,
                        frequency: 8,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         });
      }
      for (let id = 8; id < 12; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt + 5,
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     events: [{ rotation: 270 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [{ rotation: 135 }],
                  },
                  {
                     axis: Axis.Y,
                     events: [{}],
                  },
               ],
            },
            {
               time: rt + 5.999,
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     events: [{ rotation: 270 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p1: 2,
                        p0: 1,
                     },
                     events: [{ rotation: 135 }],
                  },
                  {
                     axis: Axis.Y,
                     events: [{}],
                  },
               ],
            },
         );
         d.addLightColorEventBoxGroups({
            time: rt + 5,
            id,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                  beatDistribution: 1,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.DOUBLE,
                     },
                     { time: 0.125, previous: 1 },
                     { time: 0.15625, brightness: 0 },
                     {
                        time: 0.1875,
                        color: EventBoxColor.RED,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.75,
                        color: EventBoxColor.BLUE,
                        frequency: 8,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p1: 2,
                     p0: 1,
                  },
                  beatDistribution: 1,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.DOUBLE,
                     },
                     { time: 0.125, previous: 1 },
                     { time: 0.15625, brightness: 0 },
                     {
                        time: 0.1875,
                        color: EventBoxColor.RED,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.75,
                        color: EventBoxColor.BLUE,
                        frequency: 8,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         });
      }

      for (let id = 0; id < 4; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt + 6,
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     rotationDistribution: -45,
                     affectFirst: 1,
                     events: [{ rotation: 60, easing: EaseType.NONE }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     rotationDistribution: 45,
                     affectFirst: 1,
                     events: [{ rotation: 300, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: rt + 7.999,
               id,
               boxes: [
                  {
                     filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                     rotationDistribution: 135,
                     affectFirst: 1,
                     flip: 1,
                     events: [{ rotation: 120 }],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1,
                        p1: 2,
                     },
                     rotationDistribution: -135,
                     affectFirst: 1,
                     flip: 1,
                     events: [{ rotation: 150 }],
                  },
               ],
            },
         );
         for (let i = 0; i < 4; i++) {
            d.addLightColorEventBoxGroups({
               time: rt + 6 + i * 0.25,
               id,
               boxes: [
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 0 + i * 2,
                        p1: 999,
                        reverse: 1,
                     },
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        { time: 0.125, previous: 1 },
                        {
                           time: 0.25,
                           color: EventBoxColor.BLUE,
                           brightness: Brightness.ON,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1,
                           color: EventBoxColor.RED,
                           brightness: Brightness.MODERATE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.125,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.25,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
                  {
                     filter: {
                        type: IndexFilterType.STEP_AND_OFFSET,
                        p0: 1 + i * 2,
                        p1: 999,
                        reverse: 1,
                     },
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                        },
                        { time: 0.125, previous: 1 },
                        {
                           time: 0.25,
                           color: EventBoxColor.RED,
                           brightness: Brightness.ON,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1,
                           color: EventBoxColor.BLUE,
                           brightness: Brightness.MODERATE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.125,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.DOUBLE,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1.25,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                     ],
                  },
               ],
            });
         }
      }
      for (let id = 12; id < 14; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt + 6,
               id,
               boxes: [
                  {
                     events: [{ rotation: 120 }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: -75,
                     events: [{ rotation: 240 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: 75,
                     events: [{ rotation: 120 }],
                  },
               ],
            },
            {
               time: rt + 7.999,
               id,
               boxes: [
                  {
                     events: [{ rotation: 60, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: -120,
                     events: [{ rotation: 180, easing: EaseType.INOUT_QUAD }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     affectFirst: 1,
                     rotationDistribution: 120,
                     events: [{ rotation: 180, easing: EaseType.INOUT_QUAD }],
                  },
               ],
            },
         );
         d.addLightColorEventBoxGroups({
            time: rt + 6,
            id,
            boxes: [
               {
                  filter: fltr,
                  beatDistribution: 2,
                  events: [
                     {
                        frequency: 8,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.ON,
                     },
                     {
                        time: 0.5,
                        color: EventBoxColor.BLUE,
                        frequency: 8,
                        brightness: Brightness.FLASH,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1,
                        frequency: 8,
                        brightness: Brightness.EXTRA,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1.5,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
               {
                  filter: fltrR,
                  beatDistribution: 2,
                  events: [
                     {
                        frequency: 8,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.ON,
                     },
                     {
                        time: 0.5,
                        color: EventBoxColor.BLUE,
                        frequency: 8,
                        brightness: Brightness.FLASH,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1,
                        frequency: 8,
                        brightness: Brightness.EXTRA,
                        easing: EaseType.LINEAR,
                     },
                     {
                        time: 1.5,
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         });
      }

      const e: Partial<types.wrapper.IWrapLightColorEventAttribute>[] = [
         { color: EventBoxColor.WHITE, brightness: 1.25 },
         {
            time: 0.1875,
            color: EventBoxColor.WHITE,
            brightness: Brightness.ON,
            easing: EaseType.LINEAR,
         },
         { color: EventBoxColor.BLUE, time: 0.25, brightness: Brightness.ON },
         { time: 0.375, previous: 1 },
         {
            color: EventBoxColor.BLUE,
            time: 0.5,
            brightness: Brightness.OFF,
            easing: EaseType.LINEAR,
         },
      ];
      for (let id = 12; id < 14; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt + 4,
               id,
               boxes: [
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     events: [{ rotation: 90 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     events: [{ rotation: 90 }],
                  },
                  {
                     filter: fltr,
                     events: [{ rotation: 270 }],
                  },
                  {
                     flip: 1,
                     filter: fltrR,
                     events: [{ rotation: 270 }],
                  },
               ],
            },
            {
               time: rt + 4.999,
               id,
               boxes: [
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     events: [{ rotation: 90 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     events: [{ rotation: 90 }],
                  },
                  {
                     filter: fltr,
                     events: [{ rotation: 270 }],
                  },
                  {
                     flip: 1,
                     filter: fltrR,
                     events: [{ rotation: 270 }],
                  },
               ],
            },
         );
         d.addLightColorEventBoxGroups({
            time: rt + 4,
            id,
            boxes: [
               {
                  filter: fltrR,
                  beatDistribution: 0.75,
                  events: e,
               },
               {
                  filter: fltr,
                  beatDistribution: 0.75,
                  events: e,
               },
            ],
         });
      }
      for (let id = 14; id < 16; id++) {
         d.addLightRotationEventBoxGroups(
            {
               time: rt + 5,
               id,
               boxes: [
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     events: [{ rotation: 90 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     events: [{ rotation: 90 }],
                  },
                  {
                     filter: fltr,
                     events: [{ rotation: 270 }],
                  },
                  {
                     flip: 1,
                     filter: fltrR,
                     events: [{ rotation: 270 }],
                  },
               ],
            },
            {
               time: rt + 5.999,
               id,
               boxes: [
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     events: [{ rotation: 90 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     events: [{ rotation: 90 }],
                  },
                  {
                     filter: fltr,
                     events: [{ rotation: 270 }],
                  },
                  {
                     flip: 1,
                     filter: fltrR,
                     events: [{ rotation: 270 }],
                  },
               ],
            },
         );
         d.addLightColorEventBoxGroups({
            time: rt + 5,
            id,
            boxes: [
               {
                  filter: fltrR,
                  beatDistribution: 0.75,
                  events: e,
               },
               {
                  filter: fltr,
                  beatDistribution: 0.75,
                  events: e,
               },
            ],
         });
      }
   }
};
