import {
   Axis,
   EaseType,
   EventBoxColor,
   IndexFilterType,
   pRandom,
   TransitionType,
   types,
   v3,
} from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

export default (d: v3.Difficulty) => {
   d.addColorBoostEvents(
      { time: 486 + 1.125, toggle: true },
      { time: 486 + 16, toggle: false },
      { time: 486 + 17.125, toggle: true },
   );

   for (let id = 0; id < 12; id++) {
      d.addLightColorEventBoxGroups({
         time: 486,
         id,
         boxes: [
            {
               beatDistribution: id >= 8 && id < 12 ? 0.499 : 1,
               events: [
                  { color: EventBoxColor.WHITE, brightness: 2.5 },
                  {
                     time: 0.09375,
                     brightness: Brightness.OFF,
                     color: EventBoxColor.WHITE,
                  },
                  { time: 0.125, color: EventBoxColor.RED },
               ],
            },
         ],
      });
   }
   for (let id = 12; id < 14; id++) {
      d.addLightRotationEventBoxGroups({
         time: 486 - 0.001,
         id,
         boxes: [
            {
               events: [{ rotation: 90 }],
            },
            {
               axis: Axis.Y,
               events: [{ rotation: 180 }],
            },
         ],
      });
      d.addLightRotationEventBoxGroups({
         time: 486,
         id,
         boxes: [
            {
               events: [
                  { rotation: 90, easing: EaseType.NONE },
                  { time: 0.125, previous: 1 },
               ],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 0,
                  p1: 999,
                  reverse: 0,
               },
               axis: Axis.Y,
               events: [
                  { rotation: 330, easing: EaseType.NONE },
                  { time: 0.125, previous: 1 },
               ],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 0,
                  p1: 999,
                  reverse: 1,
               },
               axis: Axis.Y,
               events: [
                  { rotation: 30, easing: EaseType.NONE },
                  { time: 0.125, previous: 1 },
               ],
            },
            {
               filter: { type: 2, p0: 4, p1: 999, reverse: 0 },
               axis: Axis.Y,
               events: [
                  { rotation: 285, easing: EaseType.NONE },
                  { time: 0.125, previous: 1 },
               ],
            },
            {
               filter: { type: 2, p0: 4, p1: 999, reverse: 1 },
               axis: Axis.Y,
               events: [
                  { rotation: 75, easing: EaseType.NONE },
                  { time: 0.125, previous: 1 },
               ],
            },
         ],
      });
      d.addLightColorEventBoxGroups({
         time: 486,
         id,
         boxes: [
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 0,
                  p1: 999,
                  reverse: 0,
               },
               events: [
                  { color: EventBoxColor.BLUE, brightness: Brightness.FLASH },
                  {
                     time: 0.125,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
                     brightness: 2.5,
                  },
                  {
                     time: 0.999,
                     transition: TransitionType.INTERPOLATE,
                     brightness: Brightness.OFF,
                     color: EventBoxColor.WHITE,
                  },
               ],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 0,
                  p1: 999,
                  reverse: 1,
               },
               events: [
                  { color: EventBoxColor.BLUE, brightness: Brightness.FLASH },
                  {
                     time: 0.125,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
                     brightness: 2.5,
                  },
                  {
                     time: 0.999,
                     transition: TransitionType.INTERPOLATE,
                     brightness: Brightness.OFF,
                     color: EventBoxColor.WHITE,
                  },
               ],
            },
            {
               filter: { p0: 6, p1: 2 },
               events: [
                  { color: EventBoxColor.BLUE, brightness: Brightness.FLASH },
                  {
                     time: 0.125,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
                     brightness: 2.5,
                  },
                  {
                     time: 0.999,
                     transition: TransitionType.INTERPOLATE,
                     brightness: Brightness.OFF,
                     color: EventBoxColor.WHITE,
                  },
               ],
            },
            {
               filter: { p0: 6, p1: 3 },
               events: [
                  { color: EventBoxColor.BLUE, brightness: Brightness.FLASH },
                  {
                     time: 0.125,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
                     brightness: 2.5,
                  },
                  {
                     time: 0.999,
                     transition: TransitionType.INTERPOLATE,
                     brightness: Brightness.OFF,
                     color: EventBoxColor.WHITE,
                  },
               ],
            },
         ],
      });

      d.addLightRotationEventBoxGroups({
         time: 486 + 0.999,
         id,
         boxes: [
            {
               events: [{ easing: EaseType.INOUT_QUAD, rotation: 180 }],
            },
            {
               axis: Axis.Y,
               events: [{ previous: 1 }],
            },
         ],
      });
   }
   for (let id = 14; id < 16; id++) {
      d.addLightRotationEventBoxGroups({
         time: 486 - 0.001,
         id,
         boxes: [
            {
               events: [{ rotation: 90 }],
            },
            {
               axis: Axis.Y,
               events: [{ rotation: 180 }],
            },
         ],
      });
      d.addLightColorEventBoxGroups({
         time: 486,
         id,
         boxes: [
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 0,
                  p1: 999,
                  reverse: 0,
               },
               events: [
                  { color: EventBoxColor.BLUE, brightness: Brightness.FLASH },
                  {
                     time: 0.125,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
                     brightness: 2.5,
                  },
                  {
                     time: 0.999,
                     transition: TransitionType.INTERPOLATE,
                     brightness: Brightness.OFF,
                     color: EventBoxColor.WHITE,
                  },
               ],
            },
            {
               filter: {
                  type: IndexFilterType.STEP_AND_OFFSET,
                  p0: 0,
                  p1: 999,
                  reverse: 1,
               },
               events: [
                  { color: EventBoxColor.BLUE, brightness: Brightness.FLASH },
                  {
                     time: 0.125,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
                     brightness: 2.5,
                  },
                  {
                     time: 0.999,
                     transition: TransitionType.INTERPOLATE,
                     brightness: Brightness.OFF,
                     color: EventBoxColor.WHITE,
                  },
               ],
            },
            {
               filter: { p0: 4, p1: 1 },
               events: [
                  { color: EventBoxColor.BLUE, brightness: Brightness.FLASH },
                  {
                     time: 0.125,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
                     brightness: 2.5,
                  },
                  {
                     time: 0.999,
                     transition: TransitionType.INTERPOLATE,
                     brightness: Brightness.OFF,
                     color: EventBoxColor.WHITE,
                  },
               ],
            },
            {
               filter: { p0: 4, p1: 2 },
               events: [
                  { color: EventBoxColor.BLUE, brightness: Brightness.FLASH },
                  {
                     time: 0.125,
                     color: EventBoxColor.WHITE,
                     transition: TransitionType.INTERPOLATE,
                     brightness: 2.5,
                  },
                  {
                     time: 0.999,
                     transition: TransitionType.INTERPOLATE,
                     brightness: Brightness.OFF,
                     color: EventBoxColor.WHITE,
                  },
               ],
            },
         ],
      });
      d.addLightRotationEventBoxGroups(
         {
            time: 486,
            id,
            boxes: [
               {
                  events: [{ time: 0.125, previous: 1 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 999,
                     reverse: 0,
                  },
                  axis: Axis.Y,
                  events: [
                     { rotation: 330, easing: EaseType.NONE },
                     { time: 0.125, previous: 1 },
                  ],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 0,
                     p1: 999,
                     reverse: 1,
                  },
                  axis: Axis.Y,
                  events: [
                     { rotation: 30, easing: EaseType.NONE },
                     { time: 0.125, previous: 1 },
                  ],
               },
               {
                  filter: {
                     type: 2,
                     p0: 2,
                     p1: 999,
                     reverse: id === 14 ? 0 : 1,
                  },
                  axis: Axis.Y,
                  events: [
                     { rotation: id === 14 ? 285 : 75, easing: EaseType.NONE },
                     { time: 0.125, previous: 1 },
                  ],
               },
               {
                  filter: {
                     type: 2,
                     p0: 2,
                     p1: 999,
                     reverse: id === 14 ? 1 : 0,
                  },
                  axis: Axis.Y,
                  events: [
                     { rotation: id === 14 ? 75 : 285, easing: EaseType.NONE },
                     { time: 0.125, previous: 1 },
                  ],
               },
            ],
         },
         {
            time: 486 + 0.999,
            id,
            boxes: [
               {
                  events: [{ easing: EaseType.INOUT_QUAD, rotation: 180 }],
               },
               {
                  axis: Axis.Y,
                  events: [{ previous: 1 }],
               },
            ],
         },
      );
   }

   for (let id = 0; id < 4; id++) {
      d.addLightRotationEventBoxGroups(
         {
            time: 486,
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
            time: 486 + 8,
            id,
            boxes: [{ axis: Axis.Y, events: [{ easing: EaseType.OUT_QUAD }] }],
         },
      );
      for (
         let time = 486 + 0.5, flipFlop = false, first = true;
         time < 486 + 29;
         time += 14, flipFlop = !flipFlop, first = false
      ) {
         d.addLightRotationEventBoxGroups({
            time: Math.min(time, 486 + 27.999),
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
      for (let time = 486 + 1; time < 486 + 28; time += 2) {
         d.addLightColorEventBoxGroups({
            time: time,
            id,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 0.499,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.28125,
                        brightness: Brightness.OFF,
                        color: EventBoxColor.BLUE,
                     },
                  ],
               },
            ],
         });
         if (time < 486 + 24) {
            d.addLightColorEventBoxGroups({
               time: time + 0.5,
               id,
               boxes: [
                  {
                     events: [
                        {
                           time: 1,
                           color: time === 486 + 15 ? EventBoxColor.RED : EventBoxColor.BLUE,
                           brightness: Brightness.ON,
                           transition: TransitionType.INTERPOLATE,
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
            time: 486,
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
            time: 486 + 5,
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
         let time = 486 + 1, flipFlop = false, first = true;
         time <= 486 + 29;
         time += 14, flipFlop = !flipFlop, first = false
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
               time: Math.min(time + 3, 486 + 27.999),
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
            time: 486 + 1,
            id,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 0.499,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.28125,
                        brightness: Brightness.OFF,
                        color: EventBoxColor.BLUE,
                     },
                  ],
               },
            ],
         },
         {
            time: 486 + 1.5,
            id,
            boxes: [
               {
                  events: [
                     {
                        time: 0.5,
                        color: EventBoxColor.BLUE,
                        brightness: Brightness.ON,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         },
         {
            time: 486 + 16,
            id,
            boxes: [
               {
                  beatDistribution: 0.5,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.DOUBLE,
                     },
                     {
                        time: 0.09375,
                        brightness: Brightness.OFF,
                        color: EventBoxColor.WHITE,
                     },
                     { time: 0.125 },
                  ],
               },
            ],
         },
         {
            time: 486 + 17,
            id,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 0.499,
                  events: [
                     { color: EventBoxColor.RED, brightness: Brightness.EXTRA },
                     {
                        time: 0.28125,
                        brightness: Brightness.OFF,
                        color: EventBoxColor.BLUE,
                     },
                  ],
               },
            ],
         },
         {
            time: 486 + 17.5,
            id,
            boxes: [
               {
                  events: [
                     {
                        time: 0.5,
                        color: EventBoxColor.BLUE,
                        brightness: Brightness.ON,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         },
      );
      for (let time = 486 + 1.5; time < 486 + 27.5; time += 0.5) {
         if (time >= 486 + 16 && time < 486 + 17.5) {
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
                     { transition: TransitionType.EXTEND },
                     {
                        time: 0.125,
                        color: EventBoxColor.RED,
                        transition: TransitionType.INTERPOLATE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.375,
                        color: EventBoxColor.BLUE,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         });
      }
      d.addLightColorEventBoxGroups({
         time: 486 + 27.5,
         id,
         boxes: [
            {
               filter: { reverse: 1 },
               beatDistribution: 0.499,
               events: [
                  { color: EventBoxColor.WHITE, brightness: Brightness.EXTRA },
                  {
                     time: 0.25,
                     color: EventBoxColor.WHITE,
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
            time: 486,
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
            time: 486 + 6,
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
            time: 486 + 29.999,
            id,
            boxes: [{ events: [{ rotation: 270 }] }],
         },
      );
      for (
         let time = 486 + 2, flipFlop = false, first = true;
         time <= 486 + 30;
         time += 14, flipFlop = !flipFlop, first = false
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
      for (let time = 486, flipFlop = false; time < 486 + 28; time += 4, flipFlop = !flipFlop) {
         if (flipFlop ? id % 2 : !(id % 2)) {
            d.addLightColorEventBoxGroups({
               time: time + 0.5,
               id,
               boxes: [
                  {
                     beatDistribution: 0.999,
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.28125,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                        {
                           time: 0.78125,
                           color: EventBoxColor.BLUE,
                           transition: TransitionType.INTERPOLATE,
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
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.28125,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                        {
                           time: 0.78125,
                           color: EventBoxColor.BLUE,
                           transition: TransitionType.INTERPOLATE,
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
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.28125,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                        {
                           time: 0.78125,
                           color: EventBoxColor.BLUE,
                           transition: TransitionType.INTERPOLATE,
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
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.28125,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                        {
                           time: 0.78125,
                           color: EventBoxColor.BLUE,
                           transition: TransitionType.INTERPOLATE,
                        },
                     ],
                  },
               ],
            });
         }
         if (time === 486 + 24) {
            d.addLightColorEventBoxGroups({
               time: time + 3.5,
               id,
               boxes: [
                  {
                     filter: { reverse: 1 },
                     beatDistribution: 0.499,
                     events: [
                        {
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.25,
                           color: EventBoxColor.WHITE,
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
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.EXTRA,
                        },
                        {
                           time: 0.25,
                           color: EventBoxColor.WHITE,
                           brightness: Brightness.OFF,
                        },
                        {
                           time: 0.75,
                           color: time === 486 + 12 ? EventBoxColor.RED : EventBoxColor.BLUE,
                           transition: TransitionType.INTERPOLATE,
                        },
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
            time: 486 + 28,
            id,
            boxes: [
               {
                  filter: { type: 2, p1: 2 },
                  beatDistribution: 0.999,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.09375,
                        brightness: Brightness.OFF,
                        color: EventBoxColor.WHITE,
                     },
                     { time: 0.25, color: EventBoxColor.RED },
                  ],
               },
            ],
         },
         {
            time: 486 + 29,
            id,
            boxes: [
               {
                  filter: { type: 2, p1: 2 },
                  beatDistribution: 0.499,
                  events: [
                     {
                        brightness: Brightness.OFF,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         },
         {
            time: 486 + 29.5,
            id,
            boxes: [
               {
                  filter: { type: 2, p1: 2 },
                  beatDistribution: 0.999,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.09375,
                        brightness: Brightness.OFF,
                        color: EventBoxColor.WHITE,
                     },
                     { time: 0.25, color: EventBoxColor.RED },
                  ],
               },
            ],
         },
         {
            time: 486 + 30.5,
            id,
            boxes: [
               {
                  filter: { type: 2, p1: 2 },
                  beatDistribution: 0.499,
                  events: [
                     {
                        brightness: Brightness.OFF,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         },
         {
            time: 486 + 31,
            id,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 0.999,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.09375,
                        brightness: Brightness.OFF,
                        color: EventBoxColor.WHITE,
                     },
                     { time: 0.125, color: EventBoxColor.RED },
                     {
                        time: 0.25,
                        brightness: Brightness.OFF,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         },
      );
      d.addLightRotationEventBoxGroups(
         {
            time: 486 + 28,
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
            time: 486 + 29.5,
            id,
            boxes: [
               {
                  events: [{ rotation: 90 }, { time: 1.499, previous: 1 }],
               },
            ],
         },
         {
            time: 486 + 31,
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
   for (let id = 4; id < 8; id++) {
      d.addLightColorEventBoxGroups(
         {
            time: 486 + 28,
            id,
            boxes: [
               {
                  filter: { type: 2, p1: 2 },
                  beatDistribution: 0.999,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.09375,
                        brightness: Brightness.OFF,
                        color: EventBoxColor.WHITE,
                     },
                     { time: 0.25, color: EventBoxColor.RED },
                  ],
               },
            ],
         },
         {
            time: 486 + 29,
            id,
            boxes: [
               {
                  filter: { type: 2, p1: 2 },
                  beatDistribution: 0.499,
                  events: [
                     {
                        brightness: Brightness.OFF,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         },
         {
            time: 486 + 29.5,
            id,
            boxes: [
               {
                  filter: { type: 2, p1: 2 },
                  beatDistribution: 0.999,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.09375,
                        brightness: Brightness.OFF,
                        color: EventBoxColor.WHITE,
                     },
                     { time: 0.25, color: EventBoxColor.RED },
                  ],
               },
            ],
         },
         {
            time: 486 + 30.5,
            id,
            boxes: [
               {
                  filter: { type: 2, p1: 2 },
                  beatDistribution: 0.499,
                  events: [
                     {
                        brightness: Brightness.OFF,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         },
         {
            time: 486 + 31,
            id,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 0.999,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.09375,
                        brightness: Brightness.OFF,
                        color: EventBoxColor.WHITE,
                     },
                     { time: 0.125, color: EventBoxColor.RED },
                     {
                        time: 0.25,
                        brightness: Brightness.OFF,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         },
      );
      d.addLightRotationEventBoxGroups(
         {
            time: 486 + 16,
            id,
            boxes: [
               {
                  events: [
                     { previous: 1 },
                     {
                        time: 11.999,
                        rotation: 180,
                        easing: EaseType.INOUT_QUAD,
                     },
                  ],
               },
            ],
         },
         {
            time: 486 + 28,
            id,
            boxes: [
               {
                  events: [{ rotation: 0 }, { time: 1.499, previous: 1 }],
               },
               {
                  axis: Axis.Y,
                  events: [
                     { rotation: 0, easing: EaseType.NONE },
                     { time: 1.499, previous: 1 },
                  ],
               },
            ],
         },
         {
            time: 486 + 29.5,
            id,
            boxes: [
               {
                  events: [{ rotation: 240 }, { time: 1.499, previous: 1 }],
               },
            ],
         },
         {
            time: 486 + 31,
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
            time: 486 + 29,
            id,
            boxes: [
               {
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.09375,
                        brightness: Brightness.OFF,
                        color: EventBoxColor.WHITE,
                     },
                     { time: 0.25, color: EventBoxColor.RED },
                  ],
               },
            ],
         },
         {
            time: 486 + 29.5,
            id,
            boxes: [
               {
                  events: [
                     {
                        brightness: Brightness.OFF,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         },
      );
      d.addLightRotationEventBoxGroups({
         time: 486 + 29,
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
            time: 486 + 30.5,
            id,
            boxes: [
               {
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: Brightness.EXTRA,
                     },
                     {
                        time: 0.09375,
                        brightness: Brightness.OFF,
                        color: EventBoxColor.WHITE,
                     },
                     { time: 0.25, color: EventBoxColor.RED },
                  ],
               },
            ],
         },
         {
            time: 486 + 31,
            id,
            boxes: [
               {
                  events: [
                     {
                        brightness: Brightness.OFF,
                        transition: TransitionType.INTERPOLATE,
                     },
                  ],
               },
            ],
         },
      );
      d.addLightRotationEventBoxGroups({
         time: 486 + 30.5,
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
   for (let time = 486 + 28; time < 486 + 30; time++) {
      for (let id = 12; id < 14; id++) {
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
         const events = [
            {
               color: EventBoxColor.WHITE,
               brightness: Brightness.EXTRA,
               frequency: 12,
            },
            { time: 0.25, transition: TransitionType.EXTEND },
            {
               color: EventBoxColor.RED,
               brightness: Brightness.ON,
               transition: TransitionType.INTERPOLATE,
               frequency: 8,
               time: 0.5,
            },
            {
               color: EventBoxColor.RED,
               brightness: Brightness.OFF,
               transition: TransitionType.INTERPOLATE,
               frequency: 8,
               time: 0.75,
            },
         ] as Partial<types.wrapper.IWrapLightColorEventAttribute>[];
         d.addLightRotationEventBoxGroups(
            {
               time,
               id,
               boxes: [
                  {
                     filter: fltr,
                     rotationDistribution: -30,
                     affectFirst: 1,
                     events: [{ easing: EaseType.NONE, rotation: 90 }],
                  },
                  {
                     filter: fltrR,
                     rotationDistribution: -30,
                     flip: 1,
                     affectFirst: 1,
                     events: [{ easing: EaseType.NONE, rotation: 90 }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     flip: 1,
                     rotationDistribution: -30,
                     affectFirst: 1,
                     events: [{ easing: EaseType.NONE, rotation: 270 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     rotationDistribution: -30,
                     affectFirst: 1,
                     events: [{ easing: EaseType.NONE, rotation: 90 }],
                  },
               ],
            },
            {
               time: time + 0.999,
               id,
               boxes: [
                  {
                     filter: fltr,
                     rotationDistribution: -45,
                     affectFirst: 1,
                     events: [{ easing: EaseType.OUT_QUAD, rotation: 90 }],
                  },
                  {
                     filter: fltrR,
                     rotationDistribution: -45,
                     flip: 1,
                     affectFirst: 1,
                     events: [{ easing: EaseType.OUT_QUAD, rotation: 90 }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     flip: 1,
                     rotationDistribution: -45,
                     affectFirst: 1,
                     events: [{ easing: EaseType.OUT_QUAD, rotation: 270 }],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     rotationDistribution: -45,
                     affectFirst: 1,
                     events: [{ easing: EaseType.OUT_QUAD, rotation: 90 }],
                  },
               ],
            },
         );
         d.addLightColorEventBoxGroups({
            time,
            id,
            boxes: [
               { filter: fltr, events, beatDistribution: 0.999 },
               { filter: fltrR, events, beatDistribution: 0.999 },
            ],
         });
      }
   }
   for (let time = 486 + 30; time < 486 + 32; time++) {
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
         const events = [
            {
               color: EventBoxColor.WHITE,
               brightness: Brightness.DOUBLE,
               frequency: 12,
            },
            { time: 0.25, transition: TransitionType.EXTEND },
            { time: 0.375, brightness: Brightness.OFF },
            {
               color: EventBoxColor.RED,
               brightness: Brightness.ON,
               frequency: 8,
               time: 0.5,
            },
            {
               color: EventBoxColor.RED,
               brightness: Brightness.OFF,
               transition: TransitionType.INTERPOLATE,
               frequency: 8,
               time: 0.75,
            },
         ] as Partial<types.wrapper.IWrapLightColorEventAttribute>[];
         d.addLightRotationEventBoxGroups(
            {
               time,
               id,
               boxes: [
                  {
                     filter: fltr,
                     rotationDistribution: -30,
                     affectFirst: 1,
                     events: [{ easing: EaseType.NONE, rotation: 90 }],
                  },
                  {
                     filter: fltrR,
                     rotationDistribution: -30,
                     flip: 1,
                     affectFirst: 1,
                     events: [{ easing: EaseType.NONE, rotation: 90 }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     flip: 1,
                     rotationDistribution: -30,
                     affectFirst: 1,
                     events: [
                        {
                           easing: EaseType.NONE,
                           rotation: 270 - (((time - 68) * 30) % 360),
                        },
                     ],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     rotationDistribution: -30,
                     affectFirst: 1,
                     events: [
                        {
                           easing: EaseType.NONE,
                           rotation: 90 - (((time - 68) * 30) % 360),
                        },
                     ],
                  },
               ],
            },
            {
               time: time + 0.999,
               id,
               boxes: [
                  {
                     filter: fltr,
                     rotationDistribution: -45,
                     affectFirst: 1,
                     events: [{ easing: EaseType.OUT_QUAD, rotation: 90 }],
                  },
                  {
                     filter: fltrR,
                     rotationDistribution: -45,
                     flip: 1,
                     affectFirst: 1,
                     events: [{ easing: EaseType.OUT_QUAD, rotation: 90 }],
                  },
                  {
                     filter: fltr,
                     axis: Axis.Y,
                     flip: 1,
                     rotationDistribution: -45,
                     affectFirst: 1,
                     events: [
                        {
                           easing: EaseType.OUT_QUAD,
                           rotation: 270 - (((time - 68) * 30) % 360),
                        },
                     ],
                  },
                  {
                     filter: fltrR,
                     axis: Axis.Y,
                     rotationDistribution: -45,
                     affectFirst: 1,
                     events: [
                        {
                           easing: EaseType.OUT_QUAD,
                           rotation: 90 - (((time - 68) * 30) % 360),
                        },
                     ],
                  },
               ],
            },
         );
         d.addLightColorEventBoxGroups({
            time,
            id,
            boxes: [
               { filter: fltr, events, beatDistribution: 0.999 },
               { filter: fltrR, events, beatDistribution: 0.999 },
            ],
         });
      }
   }
};
