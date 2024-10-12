import { Axis, EaseType, EventBoxColor, IndexFilterType, pRandom, types } from '../../depsLocal.ts';
import { Brightness } from './helpers.ts';

export default (d: types.wrapper.IWrapBeatmap) => {
   for (let i = 0; i < 2; i++) {
      d.addLightColorEventBoxGroups(
         {
            time: 6,
            id: 0 + i,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 2,
                  events: [
                     { color: EventBoxColor.WHITE, brightness: 2.5 },
                     {
                        time: 0.5,
                        color: EventBoxColor.BLUE,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         },
         {
            time: 6,
            id: 4 + i,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 2,
                  events: [
                     { color: EventBoxColor.WHITE, brightness: 2.5 },
                     {
                        time: 0.5,
                        color: EventBoxColor.BLUE,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         },
         {
            time: 6,
            id: 10 + i,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 2,
                  events: [
                     { color: EventBoxColor.WHITE, brightness: 2.5 },
                     {
                        time: 0.5,
                        color: EventBoxColor.BLUE,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         },
      );
      for (let x = 7.75; x < 36; x += 0.5) {
         d.addLightColorEventBoxGroups(
            {
               time: x + pRandom(0, 0.375),
               id: 0 + i,
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
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.FLASH,
                        },
                        {
                           time: 0.375,
                           color: EventBoxColor.BLUE,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time: x + pRandom(0, 0.375),
               id: 4 + i,
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
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.FLASH,
                        },
                        {
                           time: 0.375,
                           color: EventBoxColor.BLUE,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time: x + pRandom(0, 0.375),
               id: 10 + i,
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
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: Brightness.FLASH,
                        },
                        {
                           time: 0.375,
                           color: EventBoxColor.BLUE,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
         );
      }
      d.addLightRotationEventBoxGroups(
         {
            time: 5 + 0.125,
            id: 0 + i,
            boxes: [
               {
                  rotationDistribution: -45,
                  beatDistribution: 1,
                  events: [
                     { rotation: 180 },
                     { time: 0.5, rotation: 165, easing: EaseType.OUT_QUAD },
                  ],
               },
            ],
         },
         {
            time: 7 + 0.125,
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
            time: 10.5 + 0.125,
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
            time: 17.5 + 0.125,
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
            time: 24.5 + 0.125,
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
            time: 31.5 + 0.125,
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
            time: 35 + 0.125,
            id: 0 + i,
            boxes: [
               {
                  rotationDistribution: -60 - pRandom(0, 5),
                  beatDistribution: 2,
                  affectFirst: 1,
                  events: [
                     {
                        rotation: 262.5 + pRandom(-5, 5),
                        easing: EaseType.IN_QUAD,
                     },
                  ],
               },
            ],
         },
         {
            time: 5 + 0.25,
            id: 4 + i,
            boxes: [
               {
                  rotationDistribution: -30,
                  beatDistribution: 0.75,
                  events: [
                     { rotation: 180 },
                     { time: 0.5, rotation: 165, easing: EaseType.OUT_QUAD },
                  ],
               },
            ],
         },
         {
            time: 7 + 0.25,
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
            time: 11 + 0.25,
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
            time: 19 + 0.25,
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
            time: 27 + 0.25,
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
            time: 35 + 0.25,
            id: 4 + i,
            boxes: [
               {
                  rotationDistribution: -45 - pRandom(0, 5),
                  beatDistribution: 2,
                  affectFirst: 1,
                  events: [
                     {
                        rotation: 230 + pRandom(-5, 5),
                        easing: EaseType.OUT_QUAD,
                     },
                  ],
               },
            ],
         },
         {
            time: 5,
            id: 10 + i,
            boxes: [
               {
                  rotationDistribution: 45,
                  beatDistribution: 0.5,
                  events: [
                     { rotation: 270 },
                     { time: 0.5, rotation: 285, easing: EaseType.OUT_QUAD },
                  ],
               },
            ],
         },
         {
            time: 7,
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
            time: 10,
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
            time: 16,
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
            time: 22,
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
            time: 28,
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
            time: 34,
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
      );

      d.addLightColorEventBoxGroups(
         {
            time: 5,
            id: 8 + i,
            boxes: [
               {
                  filter: { type: IndexFilterType.DIVISION, p0: 4, p1: 0 },
                  events: [
                     {},
                     {
                        time: 0.5,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         },
         {
            time: 5.25,
            id: 8 + i,
            boxes: [
               {
                  filter: { type: IndexFilterType.DIVISION, p0: 4, p1: 1 },
                  events: [
                     {},
                     {
                        time: 0.417,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         },
         {
            time: 5.5,
            id: 8 + i,
            boxes: [
               {
                  filter: { type: IndexFilterType.DIVISION, p0: 4, p1: 2 },
                  events: [
                     {},
                     {
                        time: 0.333,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         },
         {
            time: 5.75,
            id: 8 + i,
            boxes: [
               {
                  filter: { type: IndexFilterType.DIVISION, p0: 4, p1: 3 },
                  events: [
                     {},
                     {
                        time: 0.249,
                        brightness: Brightness.OFF,
                        easing: EaseType.LINEAR,
                     },
                  ],
               },
            ],
         },
      );
      d.addLightRotationEventBoxGroups({
         time: 5,
         id: 8 + i,
         boxes: [
            {
               axis: Axis.Y,
               affectFirst: 1,
               rotationDistribution: 45,
               events: [{ rotation: 45 }],
            },
            {
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
               affectFirst: 1,
               rotationDistribution: 45,
               events: [{ rotation: 270 }],
            },
            {
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
               affectFirst: 1,
               rotationDistribution: 45,
               events: [{ rotation: 90 }],
            },
         ],
      });

      d.addLightColorEventBoxGroups(
         {
            time: 6,
            id: 6 + i,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p1: 2,
                     reverse: 1,
                  },
                  beatDistribution: 2.75,
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
                        time: 2,
                        color: EventBoxColor.WHITE,
                        easing: EaseType.LINEAR,
                        brightness: Brightness.OFF,
                     },
                  ],
               },
            ],
         },
         {
            time: 6,
            id: 8 + i,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p1: 2,
                     reverse: 1,
                  },
                  beatDistribution: 2.75,
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
                        time: 2,
                        color: EventBoxColor.WHITE,
                        easing: EaseType.LINEAR,
                        brightness: Brightness.OFF,
                     },
                  ],
               },
            ],
         },
         {
            time: 6,
            id: 14 + i,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p1: 2,
                     reverse: i ? 0 : 1,
                  },
                  beatDistribution: 4.75,
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
         },
      );
      d.addLightRotationEventBoxGroups(
         {
            time: 6,
            id: 6 + i,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p1: 2,
                     reverse: 1,
                  },
                  axis: Axis.Y,
                  events: [{ rotation: 90 }, { time: 2, rotation: 135 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p1: 2,
                     reverse: 1,
                  },
                  rotationDistribution: 15,
                  events: [{ rotation: 315 }, { time: 2, rotation: 75 }],
               },
            ],
         },
         {
            time: 6,
            id: 8 + i,
            boxes: [
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p1: 2,
                     reverse: 1,
                  },
                  events: [
                     { rotation: 90, easing: EaseType.NONE },
                     { time: 2, rotation: 135 },
                  ],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p1: 2,
                     reverse: 1,
                  },
                  axis: Axis.Y,
                  rotationDistribution: 15,
                  flip: 1,
                  events: [
                     { rotation: 315, easing: EaseType.NONE },
                     { time: 2, rotation: 75 },
                  ],
               },
            ],
         },
         {
            time: 6,
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
            time: 10,
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

      d.addLightColorEventBoxGroups({
         time: 11.5,
         id: 8 + i,
         boxes: [
            {
               filter: { reverse: 1 },
               beatDistribution: 5.5,
               events: [
                  { color: EventBoxColor.WHITE, brightness: Brightness.DOUBLE },
                  {
                     time: 0.25,
                     color: EventBoxColor.WHITE,
                     brightness: Brightness.EXTRA,
                  },
                  {
                     time: 1.5,
                     easing: EaseType.LINEAR,
                     brightness: Brightness.ON,
                  },
                  {
                     time: 4.5,
                     easing: EaseType.LINEAR,
                     brightness: Brightness.OFF,
                  },
               ],
            },
         ],
      });
      d.addLightRotationEventBoxGroups({
         time: 11.5,
         id: 8 + i,
         boxes: [
            {
               axis: Axis.Y,
               affectFirst: 1,
               rotationDistribution: -30,
               events: [{ rotation: 120 }],
            },
            {
               filter: { reverse: 1 },
               rotationDistribution: -45,
               beatDistribution: 5.5,
               events: [
                  { easing: EaseType.NONE, rotation: 270 },
                  { time: 4.5, rotation: 225 },
               ],
            },
         ],
      });

      d.addLightColorEventBoxGroups({
         time: 13.5,
         id: 2 + i,
         boxes: [
            {
               beatDistribution: 5.75,
               events: [
                  { color: EventBoxColor.WHITE, brightness: Brightness.DOUBLE },
                  {
                     time: 0.25,
                     color: EventBoxColor.WHITE,
                     brightness: Brightness.EXTRA,
                  },
                  {
                     time: 1.5,
                     easing: EaseType.LINEAR,
                     brightness: Brightness.ON,
                  },
                  {
                     time: 4.5,
                     easing: EaseType.LINEAR,
                     brightness: Brightness.OFF,
                  },
               ],
            },
         ],
      });
      d.addLightRotationEventBoxGroups({
         time: 13.5,
         id: 2 + i,
         boxes: [
            { axis: Axis.Y, events: [{ rotation: 270 }] },
            {
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
               beatDistribution: 5.5,
               events: [{ rotation: 270 }, { time: 4.5, rotation: 225 }],
            },
            {
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
               beatDistribution: 5.5,
               events: [{ rotation: 270 }, { time: 4.5, rotation: 315 }],
            },
         ],
      });

      d.addLightColorEventBoxGroups({
         time: 22,
         id: 8 + i,
         boxes: [
            {
               beatDistribution: 5.75,
               events: [
                  { color: EventBoxColor.WHITE, brightness: Brightness.DOUBLE },
                  {
                     time: 0.25,
                     color: EventBoxColor.WHITE,
                     brightness: Brightness.EXTRA,
                  },
                  {
                     time: 1.5,
                     easing: EaseType.LINEAR,
                     brightness: Brightness.ON,
                  },
                  {
                     time: 4.5,
                     easing: EaseType.LINEAR,
                     brightness: Brightness.OFF,
                  },
               ],
            },
         ],
      });
      d.addLightRotationEventBoxGroups({
         time: 22,
         id: 8 + i,
         boxes: [
            { axis: Axis.Y, events: [{ rotation: 90 }] },
            {
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
               beatDistribution: 5.5,
               events: [{ rotation: 270 }, { time: 4.5, rotation: 225 }],
            },
            {
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
               beatDistribution: 5.5,
               events: [{ rotation: 270 }, { time: 4.5, rotation: 315 }],
            },
         ],
      });

      d.addLightColorEventBoxGroups({
         time: 30,
         id: 6 + i,
         boxes: [
            {
               beatDistribution: 5.75,
               events: [
                  { color: EventBoxColor.WHITE, brightness: Brightness.DOUBLE },
                  {
                     time: 0.25,
                     color: EventBoxColor.WHITE,
                     brightness: Brightness.EXTRA,
                  },
                  {
                     time: 1.5,
                     easing: EaseType.LINEAR,
                     brightness: Brightness.ON,
                  },
                  {
                     time: 4.5,
                     easing: EaseType.LINEAR,
                     brightness: Brightness.OFF,
                  },
               ],
            },
         ],
      });
      d.addLightRotationEventBoxGroups({
         time: 30,
         id: 6 + i,
         boxes: [
            {
               axis: Axis.Y,
               rotationDistribution: 60,
               events: [{ rotation: 270 }],
            },
            {
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
               beatDistribution: 5.5,
               events: [{ rotation: 270 }, { time: 4.5, rotation: 225 }],
            },
            {
               filter: { type: IndexFilterType.STEP_AND_OFFSET, p0: 1, p1: 2 },
               beatDistribution: 5.5,
               events: [{ rotation: 270 }, { time: 4.5, rotation: 315 }],
            },
         ],
      });

      d.addLightColorEventBoxGroups(
         {
            time: 34,
            id: 2 + i,
            boxes: [
               {
                  beatDistribution: 3.75,
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
                        time: 1.5,
                        easing: EaseType.LINEAR,
                        brightness: Brightness.ON,
                     },
                     {
                        time: 2.5,
                        easing: EaseType.LINEAR,
                        brightness: Brightness.OFF,
                     },
                  ],
               },
            ],
         },
         {
            time: 34,
            id: 8 + i,
            boxes: [
               {
                  beatDistribution: 0.749,
                  events: [
                     { brightness: Brightness.EXTRA },
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
            time: 34.75,
            id: 8 + i,
            boxes: [
               {
                  beatDistribution: 0.749,
                  events: [
                     { brightness: Brightness.EXTRA },
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
            time: 35.5,
            id: 8 + i,
            boxes: [
               {
                  beatDistribution: 0.749,
                  events: [
                     { brightness: Brightness.EXTRA },
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
            time: 34,
            id: 2 + i,
            boxes: [
               {
                  axis: Axis.Y,
                  rotationDistribution: -60,
                  events: [{ rotation: 270 }],
               },
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                  beatDistribution: 3.5,
                  events: [{ rotation: 270 }, { time: 2.5, rotation: 225 }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
                  beatDistribution: 3.5,
                  events: [{ rotation: 270 }, { time: 2.5, rotation: 315 }],
               },
            ],
         },
         {
            time: 34,
            id: 8 + i,
            boxes: [
               { axis: Axis.Y, events: [{ rotation: 90 }] },
               {
                  events: [{ rotation: 270 }],
               },
            ],
         },
         {
            time: 36,
            id: 8 + i,
            boxes: [
               {
                  filter: { type: IndexFilterType.STEP_AND_OFFSET, p1: 2 },
                  axis: Axis.Y,
                  rotationDistribution: -15,
                  affectFirst: 1,
                  events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
               },
               {
                  filter: {
                     type: IndexFilterType.STEP_AND_OFFSET,
                     p0: 1,
                     p1: 2,
                  },
                  axis: Axis.Y,
                  rotationDistribution: 15,
                  affectFirst: 1,
                  events: [{ rotation: 90, easing: EaseType.INOUT_QUAD }],
               },
               {
                  events: [{ rotation: 270 }],
               },
            ],
         },
      );
   }
};
