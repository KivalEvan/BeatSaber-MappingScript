import { Axis, EaseType, EventBoxColor, types } from '../../depsLocal.ts';

export default (d: types.wrapper.IWrapBeatmap) => {
   //#region intro
   d.addColorBoostEvents({ toggle: true });
   for (let i = 0; i < 8; i++) {
      const events: Partial<types.wrapper.IWrapLightColorEventAttribute>[] = [
         {
            time: 0,
            color: EventBoxColor.WHITE,
            brightness: 1,
         },
         {
            time: 0.0625,
            color: EventBoxColor.BLUE,
            brightness: 0,
            frequency: 12,
         },
         {
            time: 0.5,
            easing: EaseType.LINEAR,
            color: EventBoxColor.RED,
            brightness: 0.75,
         },
         {
            time: 2,
            easing: EaseType.LINEAR,
            color: EventBoxColor.RED,
            brightness: 1.25,
         },
         {
            time: 2.5,
            easing: EaseType.NONE,
            color: EventBoxColor.BLUE,
            brightness: 1.5,
         },
         {
            time: 2.5625,
            easing: EaseType.NONE,
            color: EventBoxColor.BLUE,
            brightness: 0.375,
         },
         {
            time: 2.75,
            easing: EaseType.LINEAR,
            color: EventBoxColor.BLUE,
            brightness: 0,
         },
      ];
      if (i % 4 < 2) {
         d.addLightColorEventBoxGroups(
            {
               time: 2 + i * 4,
               id: (i % 4 ? 6 : 2) - Math.floor(i / 4) * 2,
               boxes: [
                  {
                     beatDistribution: 3,
                     events,
                  },
               ],
            },
            {
               time: 2 + i * 4,
               id: (i % 4 ? 7 : 3) - Math.floor(i / 4) * 2,
               boxes: [
                  {
                     beatDistribution: 3,
                     events,
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: 2 + i * 4,
               id: (i % 4 ? 6 : 2) - Math.floor(i / 4) * 2,
               boxes: [
                  {
                     rotationDistribution: -90,
                     beatDistribution: 3.25,
                     events: [
                        {
                           easing: EaseType.NONE,
                           rotation: 225,
                        },
                        {
                           time: 3,
                           easing: EaseType.OUT_QUAD,
                           rotation: 270,
                        },
                     ],
                  },
               ],
            },
            {
               time: 2 + i * 4,
               id: (i % 4 ? 7 : 3) - Math.floor(i / 4) * 2,
               boxes: [
                  {
                     rotationDistribution: -90,
                     beatDistribution: 3.25,
                     events: [
                        {
                           easing: EaseType.NONE,
                           rotation: 225,
                        },
                        {
                           time: 3,
                           easing: EaseType.OUT_QUAD,
                           rotation: 270,
                        },
                     ],
                  },
               ],
            },
         );
      }
      if (i % 4 === 2) {
         d.addLightColorEventBoxGroups(
            {
               time: 2 + i * 4,
               id: 0 + Math.floor(i / 4) * 2,
               boxes: [
                  {
                     beatDistribution: 3,
                     events,
                  },
               ],
            },
            {
               time: 2 + i * 4,
               id: 1 + Math.floor(i / 4) * 2,
               boxes: [
                  {
                     beatDistribution: 3,
                     events,
                  },
               ],
            },
            {
               time: 2 + i * 4,
               id: 8 + Math.floor(i / 4) * 2,
               boxes: [
                  {
                     beatDistribution: 3,
                     events,
                  },
               ],
            },
            {
               time: 2 + i * 4,
               id: 9 + Math.floor(i / 4) * 2,
               boxes: [
                  {
                     beatDistribution: 3,
                     events,
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: 2 + i * 4,
               id: 0 + Math.floor(i / 4) * 2,
               boxes: [
                  {
                     rotationDistribution: -45,
                     beatDistribution: 3.25,
                     events: [
                        {
                           easing: EaseType.NONE,
                           rotation: 255,
                        },
                        {
                           time: 3,
                           easing: EaseType.OUT_QUAD,
                           rotation: 315,
                        },
                     ],
                  },
               ],
            },
            {
               time: 2 + i * 4,
               id: 1 + Math.floor(i / 4) * 2,
               boxes: [
                  {
                     rotationDistribution: -45,
                     beatDistribution: 3.25,
                     events: [
                        {
                           easing: EaseType.NONE,
                           rotation: 255,
                        },
                        {
                           time: 3,
                           easing: EaseType.OUT_QUAD,
                           rotation: 315,
                        },
                     ],
                  },
               ],
            },
            {
               time: 2 + i * 4,
               id: 8 + Math.floor(i / 4) * 2,
               boxes: [
                  {
                     rotationDistribution: 45,
                     beatDistribution: 3.25,
                     events: [
                        {
                           easing: EaseType.NONE,
                           rotation: 105,
                        },
                        {
                           time: 3,
                           easing: EaseType.OUT_QUAD,
                           rotation: 45,
                        },
                     ],
                  },
               ],
            },
            {
               time: 2 + i * 4,
               id: 9 + Math.floor(i / 4) * 2,
               boxes: [
                  {
                     rotationDistribution: 45,
                     beatDistribution: 3.25,
                     events: [
                        {
                           easing: EaseType.NONE,
                           rotation: 105,
                        },
                        {
                           time: 3,
                           easing: EaseType.OUT_QUAD,
                           rotation: 45,
                        },
                     ],
                  },
               ],
            },
         );
      }
      if (i % 4 === 3) {
         d.addLightColorEventBoxGroups(
            {
               time: 2 + i * 4,
               id: 6 - Math.floor(i / 4) * 2,
               boxes: [
                  {
                     beatDistribution: 3,
                     events,
                  },
               ],
            },
            {
               time: 2 + i * 4,
               id: 7 - Math.floor(i / 4) * 2,
               boxes: [
                  {
                     beatDistribution: 3,
                     events,
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: 2 + i * 4,
               id: 6 - Math.floor(i / 4) * 2,
               boxes: [
                  {
                     rotationDistribution: -90,
                     beatDistribution: 3.25,
                     events: [
                        {
                           easing: EaseType.NONE,
                           rotation: 135,
                        },
                        {
                           time: 3,
                           easing: EaseType.OUT_QUAD,
                           rotation: 180,
                        },
                     ],
                  },
               ],
            },
            {
               time: 2 + i * 4,
               id: 7 - Math.floor(i / 4) * 2,
               boxes: [
                  {
                     rotationDistribution: -90,
                     beatDistribution: 3.25,
                     events: [
                        {
                           easing: EaseType.NONE,
                           rotation: 135,
                        },
                        {
                           time: 3,
                           easing: EaseType.OUT_QUAD,
                           rotation: 180,
                        },
                     ],
                  },
               ],
            },
         );
      }
   }
   for (let i = 0; i < 2; i++) {
      for (let t = 0; t < 4; t++) {
         d.addLightColorEventBoxGroups(
            {
               time: 32 + i,
               id: t > 1 ? 4 + t : 2 + t,
               boxes: [
                  {
                     filter: {
                        reverse: i ? 0 : 1,
                        type: 2,
                        p0: 2,
                        p1: 1,
                     },
                     beatDistribution: 0.375,
                     events: [
                        {
                           time: 0,
                           color: EventBoxColor.WHITE,
                           brightness: i ? 2 : 1.5,
                        },
                        {
                           time: 1 / 16,
                           color: EventBoxColor.WHITE,
                           brightness: i ? 1.25 : 0.75,
                        },
                        {
                           time: 0.25,
                           easing: EaseType.LINEAR,
                           color: EventBoxColor.WHITE,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
            {
               time: 32.125 + i,
               id: 8 + t,
               boxes: [
                  {
                     filter: {
                        p0: 4,
                        p1: i,
                     },
                     events: [
                        { time: 0, color: EventBoxColor.WHITE, brightness: 0 },
                        {
                           time: 0.0625,
                           easing: EaseType.LINEAR,
                           color: EventBoxColor.WHITE,
                           brightness: 0.125,
                        },
                        {
                           time: 0.125,
                           easing: EaseType.LINEAR,
                           color: EventBoxColor.WHITE,
                           brightness: 2,
                        },
                        {
                           time: 0.3125,
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: 0.25,
                        },
                        {
                           time: 0.375,
                           color: EventBoxColor.WHITE,
                           brightness: 0,
                        },
                     ],
                  },
                  {
                     filter: {
                        p0: 4,
                        p1: 1 + i,
                     },
                     events: [
                        {
                           time: 0 + 0.25,
                           color: EventBoxColor.WHITE,
                           brightness: 0,
                        },
                        {
                           time: 0.0625 + 0.25,
                           easing: EaseType.LINEAR,
                           color: EventBoxColor.WHITE,
                           brightness: 0.125,
                        },
                        {
                           time: 0.125 + 0.25,
                           easing: EaseType.LINEAR,
                           color: EventBoxColor.WHITE,
                           brightness: 2,
                        },
                        {
                           time: 0.3125 + 0.25,
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: 0.25,
                        },
                        {
                           time: 0.375 + 0.25,
                           color: EventBoxColor.WHITE,
                           brightness: 0,
                        },
                     ],
                  },
                  {
                     filter: {
                        p0: 4,
                        p1: 2 + i,
                     },
                     events: [
                        {
                           time: 0 + 0.5,
                           color: EventBoxColor.WHITE,
                           brightness: 0,
                        },
                        {
                           time: 0.0625 + 0.5,
                           easing: EaseType.LINEAR,
                           color: EventBoxColor.WHITE,
                           brightness: 0.125,
                        },
                        {
                           time: 0.125 + 0.5,
                           easing: EaseType.LINEAR,
                           color: EventBoxColor.WHITE,
                           brightness: 2,
                        },
                        {
                           time: 0.3125 + 0.5,
                           color: EventBoxColor.WHITE,
                           easing: EaseType.LINEAR,
                           brightness: 0.25,
                        },
                        {
                           time: 0.375 + 0.5,
                           color: EventBoxColor.WHITE,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: 32 + i,
               id: 8 + t,
               boxes: [
                  {
                     events: [
                        {
                           easing: EaseType.NONE,
                           previous: 0,
                           rotation: -90 - 45 * i,
                        },
                     ],
                  },
               ],
            },
            {
               time: 32 + i,
               id: t > 1 ? 4 + t : 2 + t,
               boxes: [
                  {
                     filter: {
                        reverse: i ? 0 : 1,
                        type: 2,
                        p0: 2,
                        p1: 1,
                     },
                     events: [
                        {
                           easing: EaseType.NONE,
                           previous: 0,
                           rotation: t > 1 ? 60 - i * 60 : 0 - i * 90,
                        },
                     ],
                  },
               ],
            },
         );
      }
   }
   for (let i = 0; i < 2; i++) {
      d.addLightColorEventBoxGroups(
         {
            time: 33,
            id: 12 + i,
            boxes: [
               {
                  beatDistribution: 0.874,
                  events: [
                     { color: EventBoxColor.RED },
                     { time: 1 / 12, color: EventBoxColor.RED, brightness: 0 },
                  ],
               },
            ],
         },
         {
            time: 65,
            id: 12 + i,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 0.874,
                  events: [
                     { color: EventBoxColor.RED },
                     { time: 1 / 12, color: EventBoxColor.RED, brightness: 0 },
                  ],
               },
            ],
         },
      );
      d.addLightRotationEventBoxGroups(
         {
            time: 33,
            id: 12 + i,
            boxes: [
               {
                  rotationDistribution: 90,
                  affectFirst: 1,
                  events: [
                     {
                        easing: EaseType.NONE,
                        rotation: 135,
                     },
                  ],
               },
               {
                  affectFirst: 1,
                  axis: Axis.Y,
                  events: [
                     {
                        easing: EaseType.NONE,
                        rotation: 90,
                     },
                  ],
               },
            ],
         },
         {
            time: 34,
            id: 12 + i,
            boxes: [
               {
                  events: [
                     {
                        easing: EaseType.NONE,
                     },
                  ],
               },
            ],
         },
         {
            time: 65,
            id: 12 + i,
            boxes: [
               {
                  filter: { reverse: 1 },
                  rotationDistribution: 90,
                  affectFirst: 1,
                  flip: 1,
                  events: [
                     {
                        easing: EaseType.NONE,
                        rotation: 135,
                     },
                  ],
               },
               {
                  filter: { reverse: 1 },
                  affectFirst: 1,
                  axis: Axis.Y,
                  events: [
                     {
                        easing: EaseType.NONE,
                        rotation: 90,
                     },
                  ],
               },
            ],
         },
         {
            time: 66,
            id: 12 + i,
            boxes: [
               {
                  filter: { reverse: 1 },
                  events: [
                     {
                        easing: EaseType.NONE,
                     },
                  ],
               },
            ],
         },
      );
   }
   //#endregion
   //#region drop flashes
   for (let i = 0; i < 3; i++) {
      if (i !== 2) {
         const fltr = {
            type: 1,
            p0: 2,
            p1: 1,
            reverse: 1,
         } as Partial<types.wrapper.IWrapIndexFilterAttribute>;
         const fltrR = {
            type: 1,
            p0: 2,
            p1: 1,
            reverse: 0,
         } as Partial<types.wrapper.IWrapIndexFilterAttribute>;
         d.addLightRotationEventBoxGroups(
            {
               time: 34 + i * 32,
               id: 14,
               boxes: [
                  {
                     events: [{ easing: EaseType.NONE, rotation: 90 }],
                  },
                  {
                     rotationDistribution: -15,
                     filter: fltr,
                     axis: Axis.Y,
                     flip: 1,
                     beatDistribution: 1.999,
                     events: [
                        { easing: EaseType.NONE, rotation: 90 },
                        {
                           time: 1.75,
                           easing: EaseType.OUT_QUAD,
                           rotation: 120,
                        },
                     ],
                  },
                  {
                     rotationDistribution: 15,
                     filter: fltrR,
                     axis: Axis.Y,
                     flip: 1,
                     beatDistribution: 1.999,
                     events: [
                        { easing: EaseType.NONE, rotation: 270 },
                        {
                           time: 1.75,
                           easing: EaseType.OUT_QUAD,
                           rotation: 240,
                        },
                     ],
                  },
               ],
            },
            {
               time: 34 + i * 32,
               id: 15,
               boxes: [
                  {
                     events: [{ easing: EaseType.NONE, rotation: 90 }],
                  },
                  {
                     rotationDistribution: -15,
                     filter: fltr,
                     axis: Axis.Y,
                     flip: 1,
                     beatDistribution: 1.999,
                     events: [
                        { easing: EaseType.NONE, rotation: 90 },
                        {
                           time: 1.75,
                           easing: EaseType.OUT_QUAD,
                           rotation: 120,
                        },
                     ],
                  },
                  {
                     rotationDistribution: 15,
                     filter: fltrR,
                     axis: Axis.Y,
                     flip: 1,
                     beatDistribution: 1.999,
                     events: [
                        { easing: EaseType.NONE, rotation: 270 },
                        {
                           time: 1.75,
                           easing: EaseType.OUT_QUAD,
                           rotation: 240,
                        },
                     ],
                  },
               ],
            },
            {
               time: 36 + i * 32,
               id: 14,
               boxes: [
                  {
                     events: [{ easing: EaseType.NONE }],
                  },
                  { axis: Axis.Y, events: [{ easing: EaseType.NONE }] },
               ],
            },
            {
               time: 36 + i * 32,
               id: 15,
               boxes: [
                  {
                     events: [{ easing: EaseType.NONE }],
                  },
                  { axis: Axis.Y, events: [{ easing: EaseType.NONE }] },
               ],
            },
         );
         const events = [
            { color: EventBoxColor.WHITE, brightness: 2 },
            {
               color: EventBoxColor.WHITE,
               brightness: 1,
               easing: EaseType.LINEAR,
               time: 1 / 8,
            },
            {
               color: EventBoxColor.WHITE,
               brightness: 0,
               easing: EaseType.LINEAR,
               time: 1.5,
            },
         ] as Partial<types.wrapper.IWrapLightColorEventAttribute>[];
         d.addLightColorEventBoxGroups(
            {
               time: 34 + i * 32,
               id: 14,
               boxes: [
                  { filter: fltr, events, beatDistribution: 1.999 },
                  { filter: fltrR, events, beatDistribution: 1.999 },
               ],
            },
            {
               time: 34 + i * 32,
               id: 15,
               boxes: [
                  { filter: fltr, events, beatDistribution: 1.999 },
                  { filter: fltrR, events, beatDistribution: 1.999 },
               ],
            },
         );
      }
      if (i === 2) {
         d.addLightColorEventBoxGroups(
            {
               time: 98,
               id: 6,
               boxes: [
                  {
                     filter: {
                        reverse: 1,
                        type: 2,
                        p0: 0,
                        p1: 2,
                     },
                     beatDistribution: 2.75,
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 4 },
                        {
                           color: EventBoxColor.WHITE,
                           time: 0.125,
                           brightness: 2,
                        },
                        {
                           color: EventBoxColor.WHITE,
                           time: 0.25,
                           easing: EaseType.LINEAR,
                           brightness: 1,
                        },
                        {
                           color: EventBoxColor.WHITE,
                           time: 1,
                           easing: EaseType.LINEAR,
                           brightness: 1,
                        },
                        {
                           color: EventBoxColor.WHITE,
                           time: 2.5,
                           easing: EaseType.LINEAR,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
            {
               time: 98,
               id: 7,
               boxes: [
                  {
                     filter: {
                        reverse: 1,
                        type: 2,
                        p0: 0,
                        p1: 2,
                     },
                     beatDistribution: 2.75,
                     events: [
                        { color: EventBoxColor.WHITE, brightness: 4 },
                        {
                           color: EventBoxColor.WHITE,
                           time: 0.125,
                           brightness: 2,
                        },
                        {
                           color: EventBoxColor.WHITE,
                           time: 0.25,
                           easing: EaseType.LINEAR,
                           brightness: 1,
                        },
                        {
                           color: EventBoxColor.WHITE,
                           time: 1,
                           easing: EaseType.LINEAR,
                           brightness: 1,
                        },
                        {
                           color: EventBoxColor.WHITE,
                           time: 2.5,
                           easing: EaseType.LINEAR,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: 98,
               id: 6,
               boxes: [
                  {
                     filter: {
                        reverse: 1,
                        type: 2,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ easing: EaseType.NONE, rotation: 270 }],
                  },
                  {
                     filter: {
                        reverse: 1,
                        type: 2,
                        p0: 0,
                        p1: 2,
                     },
                     axis: Axis.Y,
                     rotationDistribution: 45,
                     events: [
                        { easing: EaseType.NONE, rotation: 90 },
                        {
                           time: 2.5,
                           easing: EaseType.OUT_QUAD,
                           rotation: 90 - 22.5,
                        },
                     ],
                  },
               ],
            },
            {
               time: 98,
               id: 7,
               boxes: [
                  {
                     filter: {
                        reverse: 1,
                        type: 2,
                        p0: 0,
                        p1: 2,
                     },
                     events: [{ easing: EaseType.NONE, rotation: 270 }],
                  },
                  {
                     filter: {
                        reverse: 1,
                        type: 2,
                        p0: 0,
                        p1: 2,
                     },
                     axis: Axis.Y,
                     rotationDistribution: 45,
                     events: [
                        { easing: EaseType.NONE, rotation: 90 },
                        {
                           time: 2.5,
                           easing: EaseType.OUT_QUAD,
                           rotation: 90 - 22.5,
                        },
                     ],
                  },
               ],
            },
         );
      }
      d.addLightColorEventBoxGroups(
         {
            time: 30 + i * 32,
            id: 0,
            boxes: [
               {
                  filter: { type: 2, p0: 0, p1: 2 },
                  beatDistribution: 1,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: 0,
                        frequency: 5,
                     },
                     {
                        color: EventBoxColor.WHITE,
                        easing: EaseType.LINEAR,
                        time: 3,
                        frequency: 10,
                     },
                  ],
               },
            ],
         },
         {
            time: 30 + i * 32,
            id: 1,
            boxes: [
               {
                  filter: { type: 2, p0: 0, p1: 2 },
                  beatDistribution: 1,
                  events: [
                     {
                        color: EventBoxColor.WHITE,
                        brightness: 0,
                        frequency: 5,
                     },
                     {
                        color: EventBoxColor.WHITE,
                        easing: EaseType.LINEAR,
                        time: 3,
                        frequency: 10,
                     },
                  ],
               },
            ],
         },
         { time: 34 + i * 32, id: 0, boxes: [{ events: [{ brightness: 0 }] }] },
         { time: 34 + i * 32, id: 1, boxes: [{ events: [{ brightness: 0 }] }] },
      );
      d.addLightRotationEventBoxGroups(
         {
            time: 30 + i * 32,
            id: 0,
            boxes: [
               {
                  rotationDistribution: i ? 90 : 30,
                  beatDistribution: 1,
                  events: [
                     {
                        easing: EaseType.NONE,
                        rotation: i ? 135 : 180,
                     },
                     {
                        time: 4,
                        easing: EaseType.INOUT_QUAD,
                        rotation: i ? 90 : 210,
                     },
                  ],
               },
            ],
         },
         {
            time: 30 + i * 32,
            id: 1,
            boxes: [
               {
                  rotationDistribution: i ? 90 : 30,
                  beatDistribution: 1,
                  events: [
                     {
                        easing: EaseType.NONE,
                        rotation: i ? 135 : 180,
                     },
                     {
                        time: 4,
                        easing: EaseType.INOUT_QUAD,
                        rotation: i ? 90 : 210,
                     },
                  ],
               },
            ],
         },
      );
      d.addLightColorEventBoxGroups(
         {
            time: 34 + i * 32,
            id: 2,
            boxes: [
               {
                  filter: { reverse: 1, type: 2, p0: 0, p1: 2 },
                  beatDistribution: 2.75,
                  events: [
                     { color: EventBoxColor.WHITE, brightness: 4 },
                     { color: EventBoxColor.WHITE, time: 0.125, brightness: 2 },
                     {
                        color: EventBoxColor.WHITE,
                        time: 0.25,
                        easing: EaseType.LINEAR,
                        brightness: 1,
                     },
                     {
                        color: EventBoxColor.WHITE,
                        time: 1,
                        easing: EaseType.LINEAR,
                        brightness: 1,
                     },
                     {
                        color: EventBoxColor.WHITE,
                        time: 2.5,
                        easing: EaseType.LINEAR,
                        brightness: 0,
                     },
                  ],
               },
            ],
         },
         {
            time: 34 + i * 32,
            id: 3,
            boxes: [
               {
                  filter: { reverse: 1, type: 2, p0: 0, p1: 2 },
                  beatDistribution: 2.75,
                  events: [
                     { color: EventBoxColor.WHITE, brightness: 4 },
                     { color: EventBoxColor.WHITE, time: 0.125, brightness: 2 },
                     {
                        color: EventBoxColor.WHITE,
                        time: 0.25,
                        easing: EaseType.LINEAR,
                        brightness: 1,
                     },
                     {
                        color: EventBoxColor.WHITE,
                        time: 1,
                        easing: EaseType.LINEAR,
                        brightness: 1,
                     },
                     {
                        color: EventBoxColor.WHITE,
                        time: 2.5,
                        easing: EaseType.LINEAR,
                        brightness: 0,
                     },
                  ],
               },
            ],
         },
         {
            time: 34 + i * 32,
            id: 8,
            boxes: [
               {
                  filter: { reverse: 1, type: 2, p0: 0, p1: 2 },
                  beatDistribution: 2.75,
                  events: [
                     { color: EventBoxColor.WHITE, brightness: 4 },
                     { color: EventBoxColor.WHITE, time: 0.125, brightness: 2 },
                     {
                        color: EventBoxColor.WHITE,
                        time: 0.25,
                        easing: EaseType.LINEAR,
                        brightness: 1,
                     },
                     {
                        color: EventBoxColor.WHITE,
                        time: 1,
                        easing: EaseType.LINEAR,
                        brightness: 1,
                     },
                     {
                        color: EventBoxColor.WHITE,
                        time: 2.5,
                        easing: EaseType.LINEAR,
                        brightness: 0,
                     },
                  ],
               },
            ],
         },
         {
            time: 34 + i * 32,
            id: 9,
            boxes: [
               {
                  filter: { reverse: 1, type: 2, p0: 0, p1: 2 },
                  beatDistribution: 2.75,
                  events: [
                     { color: EventBoxColor.WHITE, brightness: 4 },
                     { color: EventBoxColor.WHITE, time: 0.125, brightness: 2 },
                     {
                        color: EventBoxColor.WHITE,
                        time: 0.25,
                        easing: EaseType.LINEAR,
                        brightness: 1,
                     },
                     {
                        color: EventBoxColor.WHITE,
                        time: 1,
                        easing: EaseType.LINEAR,
                        brightness: 1,
                     },
                     {
                        color: EventBoxColor.WHITE,
                        time: 2.5,
                        easing: EaseType.LINEAR,
                        brightness: 0,
                     },
                  ],
               },
            ],
         },
      );
      d.addLightRotationEventBoxGroups(
         {
            time: 34 + i * 32,
            id: 2,
            boxes: [
               {
                  filter: { reverse: 1, type: 2, p0: 0, p1: 2 },
                  rotationDistribution: 45,
                  events: [
                     { easing: EaseType.NONE, rotation: 270 },
                     {
                        time: 2.5,
                        easing: EaseType.OUT_QUAD,
                        rotation: 270 - 22.5,
                     },
                  ],
               },
            ],
         },
         {
            time: 34 + i * 32,
            id: 3,
            boxes: [
               {
                  filter: { reverse: 1, type: 2, p0: 0, p1: 2 },
                  rotationDistribution: 45,
                  events: [
                     { easing: EaseType.NONE, rotation: 270 },
                     {
                        time: 2.5,
                        easing: EaseType.OUT_QUAD,
                        rotation: 270 - 22.5,
                     },
                  ],
               },
            ],
         },
         {
            time: 34 + i * 32,
            id: 8,
            boxes: [
               {
                  filter: { reverse: 1, type: 2, p0: 0, p1: 2 },
                  rotationDistribution: 45,
                  events: [
                     { easing: EaseType.NONE, rotation: 180 },
                     {
                        time: 2.5,
                        easing: EaseType.OUT_QUAD,
                        rotation: 180 - 22.5,
                     },
                  ],
               },
            ],
         },
         {
            time: 34 + i * 32,
            id: 9,
            boxes: [
               {
                  filter: { reverse: 1, type: 2, p0: 0, p1: 2 },
                  rotationDistribution: 45,
                  events: [
                     { easing: EaseType.NONE, rotation: 180 },
                     {
                        time: 2.5,
                        easing: EaseType.OUT_QUAD,
                        rotation: 180 - 22.5,
                     },
                  ],
               },
            ],
         },
      );
   }
   for (let i = 0; i < 3; i++) {
      for (let g = 0; g < 4; g++) {
         d.addLightColorEventBoxGroups(
            {
               time: 49.25 + i * 0.25,
               id: 8 + g,
               boxes: [
                  {
                     filter: { type: 1, p0: 4, p1: 0 + i },
                     events: [
                        { brightness: 1.25 },
                        {
                           time: 0.125,
                           brightness: 0.75,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 0.1875,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
            {
               time: 65.25 + i * 0.25,
               id: 8 + g,
               boxes: [
                  {
                     filter: { type: 1, p0: 4, p1: 0 + i },
                     events: [
                        { brightness: 1.25 },
                        {
                           time: 0.125,
                           brightness: 0.75,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 0.1875,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: 49.25 + i * 0.25,
               id: 8 + g,
               boxes: [
                  {
                     filter: { type: 1, p0: 4, p1: 0 + i },
                     flip: 1,
                     events: [{ easing: EaseType.NONE, rotation: 135 }],
                  },
               ],
            },
            {
               time: 65.25 + i * 0.25,
               id: 8 + g,
               boxes: [
                  {
                     filter: { type: 1, p0: 4, p1: 0 + i },
                     flip: 1,
                     events: [{ easing: EaseType.NONE, rotation: 135 }],
                  },
               ],
            },
         );
      }
   }
   //#endregion
   //#region drum and kick
   for (let t = 34; t < 98; t++) {
      const fltr = {
         frequency: 1,
         previous: t % 2 ? 2 : 8,
         p1: t % 2 ? 1 : 4 - ((t - 98) % 16 > 7 ? 2 : 0),
         flip: 1,
      } as Partial<types.wrapper.IWrapIndexFilterAttribute>;
      const fltrR = {
         frequency: 1,
         previous: t % 2 ? 2 : 8,
         p1: t % 2 ? 1 : 4 - ((t - 98) % 16 > 7 ? 2 : 0),
         rotation: 0,
      } as Partial<types.wrapper.IWrapIndexFilterAttribute>;
      const events = [
         { color: EventBoxColor.WHITE, brightness: t % 2 ? 1.25 : 1 },
         {
            time: 0.0625 + 0.03125,
            color: EventBoxColor.WHITE,
            brightness: t % 2 ? 1 : 0.75,
            easing: EaseType.LINEAR,
         },
         { c: t % 2 ? 0 : 1, time: 0.125, brightness: 0.75 },
         { time: 0.25, previous: 1 },
         {
            c: t % 2 ? 0 : 1,
            time: 0.3125 + 0.03125,
            brightness: 0.25,
            easing: EaseType.LINEAR,
         },
         { c: t % 2 ? 0 : 1, time: 0.375, brightness: 0 },
      ] as Partial<types.wrapper.IWrapLightColorEventAttribute>[];
      const brightnessDistribution = t % 2 ? 0.5 : 0;
      d.addLightColorEventBoxGroups(
         {
            time: t,
            id: t % 4 > 1 ? 12 : 14,
            boxes: [
               { filter: fltr, events, brightnessDistribution },
               { filter: fltrR, events, brightnessDistribution },
            ],
         },
         {
            time: t,
            id: t % 4 > 1 ? 13 : 15,
            boxes: [
               { filter: fltr, events, brightnessDistribution },
               { filter: fltrR, events, brightnessDistribution },
            ],
         },
      );
   }
   for (let t = 98; t < 128; t++) {
      const fltr = {
         frequency: 1,
         p0: t % 2 ? 2 : 8,
         p1: t % 2 ? 1 : 4 - ((t - 128) % 16 > 7 ? 2 : 0),
         reverse: 1,
      } as Partial<types.wrapper.IWrapIndexFilterAttribute>;
      const fltrR = {
         frequency: 1,
         p0: t % 2 ? 2 : 8,
         p1: t % 2 ? 1 : 4 - ((t - 128) % 16 > 7 ? 2 : 0),
         reverse: 0,
      } as Partial<types.wrapper.IWrapIndexFilterAttribute>;
      const events = [
         { color: EventBoxColor.WHITE, brightness: t % 2 ? 1.25 : 1 },
         {
            time: 0.0625 + 0.03125,
            color: EventBoxColor.WHITE,
            brightness: t % 2 ? 1 : 0.75,
            easing: EaseType.LINEAR,
         },
         { color: t % 2 ? 0 : 1, time: 0.125, brightness: 0.75 },
         { time: 0.25, previous: 1 },
         {
            color: t % 2 ? 0 : 1,
            time: 0.3125 + 0.03125,
            brightness: 0.25,
            easing: EaseType.LINEAR,
         },
         { color: t % 2 ? 0 : 1, time: 0.375, brightness: 0 },
      ] as Partial<types.wrapper.IWrapLightColorEventAttribute>[];
      const brightnessDistribution = t % 2 ? 0.5 : 0;
      d.addLightColorEventBoxGroups(
         {
            time: t,
            id: t % 4 > 1 ? 12 : 14,
            boxes: [
               { filter: fltr, events, brightnessDistribution },
               { filter: fltrR, events, brightnessDistribution },
            ],
         },
         {
            time: t,
            id: t % 4 > 1 ? 13 : 15,
            boxes: [
               { filter: fltr, events, brightnessDistribution },
               { filter: fltrR, events, brightnessDistribution },
            ],
         },
      );
   }
   {
      const fltr = {
         frequency: 1,
         p0: 2,
         p1: 1,
         flip: 1,
      } as Partial<types.wrapper.IWrapIndexFilterAttribute>;
      const fltrR = {
         frequency: 1,
         p0: 2,
         p1: 1,
         rotation: 0,
      } as Partial<types.wrapper.IWrapIndexFilterAttribute>;
      d.addLightRotationEventBoxGroups(
         {
            time: 98,
            id: 12,
            boxes: [
               {
                  rotationDistribution: 15,
                  filter: fltr,
                  axis: Axis.Y,
                  events: [
                     { easing: EaseType.NONE, rotation: 90 },
                     { time: 16, easing: EaseType.IN_QUAD, rotation: 180 },
                     { time: 32, easing: EaseType.OUT_QUAD, rotation: 90 },
                  ],
               },
               {
                  rotationDistribution: -15,
                  filter: fltrR,
                  axis: Axis.Y,
                  events: [
                     { easing: EaseType.NONE, rotation: 90 },
                     { time: 16, easing: EaseType.IN_QUAD, rotation: 0 },
                     { time: 32, easing: EaseType.OUT_QUAD, rotation: 90 },
                  ],
               },
               {
                  rotationDistribution: -30,
                  filter: fltr,
                  events: [
                     { previous: 1 },
                     { time: 16, rotation: 90, easing: EaseType.IN_QUAD },
                     {
                        time: 32,
                        rotation: 180,
                        easing: EaseType.OUT_QUAD,
                     },
                  ],
               },
               {
                  rotationDistribution: -30,
                  flip: 1,
                  filter: fltrR,
                  events: [
                     { previous: 1 },
                     { time: 16, rotation: 90, easing: EaseType.IN_QUAD },
                     {
                        time: 32,
                        rotation: 180,
                        easing: EaseType.OUT_QUAD,
                     },
                  ],
               },
            ],
         },
         {
            time: 98,
            id: 13,
            boxes: [
               {
                  rotationDistribution: 15,
                  filter: fltr,
                  axis: Axis.Y,
                  events: [
                     { easing: EaseType.NONE, rotation: 90 },
                     { time: 16, easing: EaseType.IN_QUAD, rotation: 180 },
                     { time: 32, easing: EaseType.OUT_QUAD, rotation: 90 },
                  ],
               },
               {
                  rotationDistribution: -15,
                  filter: fltrR,
                  axis: Axis.Y,
                  events: [
                     { easing: EaseType.NONE, rotation: 90 },
                     { time: 16, easing: EaseType.IN_QUAD, rotation: 0 },
                     { time: 32, easing: EaseType.OUT_QUAD, rotation: 90 },
                  ],
               },
               {
                  rotationDistribution: -30,
                  filter: fltr,
                  events: [
                     { previous: 1 },
                     { time: 16, rotation: 90, easing: EaseType.IN_QUAD },
                     {
                        time: 32,
                        rotation: 180,
                        easing: EaseType.OUT_QUAD,
                     },
                  ],
               },
               {
                  rotationDistribution: -30,
                  flip: 1,
                  filter: fltrR,
                  events: [
                     { previous: 1 },
                     { time: 16, rotation: 90, easing: EaseType.IN_QUAD },
                     {
                        time: 32,
                        rotation: 180,
                        easing: EaseType.OUT_QUAD,
                     },
                  ],
               },
            ],
         },
         {
            time: 98,
            id: 14,
            boxes: [
               {
                  rotationDistribution: 15,
                  filter: fltr,
                  axis: Axis.Y,
                  events: [
                     { easing: EaseType.NONE, rotation: 90 },
                     { time: 16, easing: EaseType.IN_QUAD, rotation: 180 },
                     { time: 32, easing: EaseType.OUT_QUAD, rotation: 90 },
                  ],
               },
               {
                  rotationDistribution: -15,
                  filter: fltrR,
                  axis: Axis.Y,
                  events: [
                     { easing: EaseType.NONE, rotation: 90 },
                     { time: 16, easing: EaseType.IN_QUAD, rotation: 0 },
                     { time: 32, easing: EaseType.OUT_QUAD, rotation: 90 },
                  ],
               },
               {
                  rotationDistribution: -30,
                  filter: fltr,
                  events: [
                     { previous: 1 },
                     { time: 16, rotation: 90, easing: EaseType.IN_QUAD },
                     {
                        time: 32,
                        rotation: 180,
                        easing: EaseType.OUT_QUAD,
                     },
                  ],
               },
               {
                  rotationDistribution: -30,
                  flip: 1,
                  filter: fltrR,
                  events: [
                     { previous: 1 },
                     { time: 16, rotation: 90, easing: EaseType.IN_QUAD },
                     {
                        time: 32,
                        rotation: 180,
                        easing: EaseType.OUT_QUAD,
                     },
                  ],
               },
            ],
         },
         {
            time: 98,
            id: 15,
            boxes: [
               {
                  rotationDistribution: 15,
                  filter: fltr,
                  axis: Axis.Y,
                  events: [
                     { easing: EaseType.NONE, rotation: 90 },
                     { time: 16, easing: EaseType.IN_QUAD, rotation: 180 },
                     { time: 32, easing: EaseType.OUT_QUAD, rotation: 90 },
                  ],
               },
               {
                  rotationDistribution: -15,
                  filter: fltrR,
                  axis: Axis.Y,
                  events: [
                     { easing: EaseType.NONE, rotation: 90 },
                     { time: 16, easing: EaseType.IN_QUAD, rotation: 0 },
                     { time: 32, easing: EaseType.OUT_QUAD, rotation: 90 },
                  ],
               },
               {
                  rotationDistribution: -30,
                  filter: fltr,
                  events: [
                     { previous: 1 },
                     { time: 16, rotation: 90, easing: EaseType.IN_QUAD },
                     {
                        time: 32,
                        rotation: 180,
                        easing: EaseType.OUT_QUAD,
                     },
                  ],
               },
               {
                  rotationDistribution: -30,
                  flip: 1,
                  filter: fltrR,
                  events: [
                     { previous: 1 },
                     { time: 16, rotation: 90, easing: EaseType.IN_QUAD },
                     {
                        time: 32,
                        rotation: 180,
                        easing: EaseType.OUT_QUAD,
                     },
                  ],
               },
            ],
         },
      );
   }
   //#endregion
   const mainG: number[][][] = [
      [
         [5, 135, -15],
         [1, 75, -15],
         [11, 195, -30],
         [4, 135, -15],
         [0, 75, -15],
         [10, 195, -30],
      ],
      [
         [9, 225, -45],
         [3, 120, -15],
         [5, 120, 30],
         [8, 225, -45],
         [2, 120, -15],
         [4, 120, 30],
      ],
      [
         [6, 60, 30],
         [9, 90, 45],
         [4, 210, -30],
         [7, 60, 30],
         [8, 90, 45],
         [5, 210, -30],
      ],
      [
         [7, 225, -45],
         [2, 90, 15],
         [9, 210, 30],
         [6, 225, -45],
         [3, 90, 15],
         [8, 210, 30],
      ],
      [
         [4, 135, -15],
         [0, 75, -15],
         [10, 195, -30],
         [5, 135, -15],
         [1, 75, -15],
         [11, 195, -30],
      ],
      [
         [8, 225, -45],
         [2, 120, -15],
         [4, 120, 30],
         [9, 225, -45],
         [3, 120, -15],
         [5, 120, 30],
      ],
      [
         [7, 60, 30],
         [8, 90, 45],
         [5, 210, -30],
         [6, 60, 30],
         [9, 90, 45],
         [4, 210, -30],
      ],
      [
         [6, 225, -45],
         [3, 90, 15],
         [8, 210, 30],
         [7, 225, -45],
         [2, 90, 15],
         [9, 210, 30],
      ], // next drop
      [
         [4, 135, -15],
         [1, 75, -15],
         [10, 195, -30],
         [5, 135, -15],
         [0, 75, -15],
         [11, 195, -30],
      ],
      [
         [8, 225, -45],
         [2, 120, -15],
         [4, 120, 30],
         [9, 225, -45],
         [3, 120, -15],
         [5, 120, 30],
      ],
      [
         [7, 60, 30],
         [8, 90, 45],
         [5, 210, -30],
         [6, 60, 30],
         [9, 90, 45],
         [4, 210, -30],
      ],
      [
         [6, 225, -45],
         [3, 90, 15],
         [8, 210, 30],
         [7, 225, -45],
         [2, 90, 15],
         [9, 210, 30],
      ],
      [
         [5, 135, -15],
         [0, 75, -15],
         [11, 195, -30],
         [4, 135, -15],
         [1, 75, -15],
         [10, 195, -30],
      ],
      [
         [9, 225, -45],
         [3, 120, -15],
         [5, 120, 30],
         [8, 225, -45],
         [2, 120, -15],
         [4, 120, 30],
      ],
      [
         [6, 60, 30],
         [9, 90, 45],
         [4, 210, -30],
         [7, 60, 30],
         [8, 90, 45],
         [5, 210, -30],
      ],
      [
         [7, 225, -45],
         [2, 90, 15],
         [9, 210, 30],
         [6, 225, -45],
         [3, 90, 15],
         [8, 210, 30],
      ],
   ];
   for (let x = 0; x < 16; x++) {
      const time = 34 + x * 4;
      d.addColorBoostEvents(
         { time: time, toggle: false },
         { time: time + 3, toggle: true },
      );
      const g = mainG[x].map((n) => n[0]);
      const r = mainG[x].map((n) => n[1]);
      const rEnd = mainG[x].map((n) => n[2]);
      if (x === 8 || x === 12) {
         const t = [0.25, 0.5, 0.75, 1.25, 1.5, 1.75];
         const td = t.map((n) => 3 - n);
         const events = [
            { color: EventBoxColor.WHITE },
            { color: EventBoxColor.WHITE, time: 0.125 },
            { time: 0.1875, easing: EaseType.LINEAR },
            {
               time: 0.375,
               color: EventBoxColor.BLUE,
               easing: EaseType.LINEAR,
               brightness: 0.75,
            },
         ] as Partial<types.wrapper.IWrapLightColorEventAttribute>[];
         for (let i = 0; i < 3; i++) {
            d.addLightColorEventBoxGroups(
               {
                  time: time + t[i],
                  id: g[i],
                  boxes: [{ events, beatDistribution: 0.5 }],
               },
               {
                  time: time + 1.25,
                  id: g[i],
                  boxes: [
                     {
                        events: [
                           { color: EventBoxColor.WHITE, frequency: 24 },
                           {
                              color: EventBoxColor.WHITE,
                              brightness: 0,
                              time: 0.0625,
                           },
                        ],
                        beatDistribution: 0.249,
                     },
                  ],
               },
            );
            d.addLightRotationEventBoxGroups(
               {
                  time: time + t[i],
                  id: g[i],
                  boxes: [
                     {
                        rotationDistribution: 90,
                        events: [
                           { rotation: r[i], easing: EaseType.NONE },
                           {
                              time: td[i] - 1.75,
                              rotation: r[i] + rEnd[i],
                              easing: EaseType.OUT_QUAD,
                           },
                        ],
                        beatDistribution: 0.5,
                        flip: 1,
                     },
                  ],
               },
               {
                  time: time + 1.25,
                  id: g[i],
                  boxes: [
                     {
                        beatDistribution: 0.1874,
                        affectFirst: 1,
                        rotationDistribution: 90,
                        rotationDistributionType: 2,
                        events: [{ rotation: 45, easing: EaseType.NONE }],
                     },
                  ],
               },
            );
         }
         d.addLightColorEventBoxGroups(
            {
               time: time + t[4],
               id: g[4],
               boxes: [{ events, beatDistribution: 0.5 }],
            },
            {
               time: time + t[5],
               id: g[5],
               boxes: [{ events, beatDistribution: 0.5 }],
            },
            {
               time: time + t[4],
               id: g[1],
               boxes: [{ events, beatDistribution: 0.5 }],
            },
            {
               time: time + t[5],
               id: g[2],
               boxes: [{ events, beatDistribution: 0.5 }],
            },
            {
               time: time + 2.25,
               id: g[4],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.25,
               id: g[1],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.5,
               id: g[5],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.5,
               id: g[2],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: time + t[4],
               id: g[4],
               boxes: [
                  {
                     rotationDistribution: -45,
                     events: [
                        { rotation: 225, easing: EaseType.NONE },
                        {
                           time: td[4],
                           rotation: 225 + 22.5,
                           easing: EaseType.OUT_QUAD,
                        },
                     ],
                     beatDistribution: 0.5,
                  },
               ],
            },
            {
               time: time + t[5],
               id: g[5],
               boxes: [
                  {
                     rotationDistribution: -45,
                     events: [
                        { rotation: 135, easing: EaseType.NONE },
                        {
                           time: td[5],
                           rotation: 135 + 22.5,
                           easing: EaseType.OUT_QUAD,
                        },
                     ],
                     beatDistribution: 0.5,
                  },
               ],
            },
            {
               time: time + t[4],
               id: g[1],
               boxes: [
                  {
                     rotationDistribution: -45,
                     events: [
                        { rotation: 225, easing: EaseType.NONE },
                        {
                           time: td[4],
                           rotation: 225 + 22.5,
                           easing: EaseType.OUT_QUAD,
                        },
                     ],
                     beatDistribution: 0.5,
                  },
               ],
            },
            {
               time: time + t[5],
               id: g[2],
               boxes: [
                  {
                     rotationDistribution: -45,
                     events: [
                        { rotation: 135, easing: EaseType.NONE },
                        {
                           time: td[5],
                           rotation: 135 + 22.5,
                           easing: EaseType.OUT_QUAD,
                        },
                     ],
                     beatDistribution: 0.5,
                  },
               ],
            },
         );
         continue;
      }
      if (x === 14) {
         const t = [0.25, 0.5, 0.75, 1.25, 1.5, 1.75];
         const td = t.map((n) => 3 - n);
         const events = [
            { color: EventBoxColor.WHITE },
            { color: EventBoxColor.WHITE, time: 0.125 },
            { time: 0.1875, easing: EaseType.LINEAR },
            {
               time: 0.375,
               color: EventBoxColor.BLUE,
               easing: EaseType.LINEAR,
               brightness: 0.75,
            },
         ] as Partial<types.wrapper.IWrapLightColorEventAttribute>[];
         for (let i = 0; i < 3; i++) {
            d.addLightColorEventBoxGroups(
               {
                  time: time + t[i],
                  id: g[i],
                  boxes: [{ events, beatDistribution: 0.5 }],
               },
               {
                  time: time + 1.25,
                  id: g[i],
                  boxes: [
                     {
                        events: [
                           { color: EventBoxColor.WHITE, frequency: 24 },
                           {
                              color: EventBoxColor.WHITE,
                              brightness: 0,
                              time: 0.0625,
                           },
                        ],
                        beatDistribution: 0.249,
                     },
                  ],
               },
               {
                  time: time + 1.25,
                  id: g[i + 3],
                  boxes: [
                     {
                        events: [
                           { color: EventBoxColor.WHITE, frequency: 24 },
                           {
                              color: EventBoxColor.WHITE,
                              brightness: 0,
                              time: 0.0625,
                           },
                        ],
                        beatDistribution: 0.249,
                     },
                  ],
               },
            );
            d.addLightRotationEventBoxGroups(
               {
                  time: time + t[i],
                  id: g[i],
                  boxes: [
                     {
                        rotationDistribution: 90,
                        events: [
                           { rotation: r[i], easing: EaseType.NONE },
                           {
                              time: td[i] - 1.75,
                              rotation: r[i] + rEnd[i],
                              easing: EaseType.OUT_QUAD,
                           },
                        ],
                        beatDistribution: 0.5,
                        flip: 1,
                     },
                  ],
               },
               {
                  time: time + t[i],
                  id: g[i + 3],
                  boxes: [
                     {
                        rotationDistribution: 90,
                        events: [
                           { rotation: r[i + 3], easing: EaseType.NONE },
                           {
                              time: td[i] - 1.75,
                              rotation: r[i + 3] + rEnd[i + 3],
                              easing: EaseType.OUT_QUAD,
                           },
                        ],
                        beatDistribution: 0.5,
                        flip: 1,
                     },
                  ],
               },
            );
         }
         d.addLightColorEventBoxGroups(
            {
               time: time + t[4],
               id: g[4],
               boxes: [{ events, beatDistribution: 0.5 }],
            },
            {
               time: time + t[5],
               id: g[5],
               boxes: [{ events, beatDistribution: 0.5 }],
            },
            {
               time: time + t[4],
               id: g[1],
               boxes: [{ events, beatDistribution: 0.5 }],
            },
            {
               time: time + t[5],
               id: g[2],
               boxes: [{ events, beatDistribution: 0.5 }],
            },
            {
               time: time + 2.25,
               id: g[4],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.25,
               id: g[1],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.5,
               id: g[5],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.5,
               id: g[2],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: time + t[4],
               id: g[4],
               boxes: [
                  {
                     rotationDistribution: -45,
                     events: [
                        { rotation: 225, easing: EaseType.NONE },
                        {
                           time: td[4],
                           rotation: 225 + 22.5,
                           easing: EaseType.OUT_QUAD,
                        },
                     ],
                     beatDistribution: 0.5,
                  },
               ],
            },
            {
               time: time + t[5],
               id: g[5],
               boxes: [
                  {
                     rotationDistribution: -45,
                     events: [
                        { rotation: 135, easing: EaseType.NONE },
                        {
                           time: td[5],
                           rotation: 135 + 22.5,
                           easing: EaseType.OUT_QUAD,
                        },
                     ],
                     beatDistribution: 0.5,
                  },
               ],
            },
            {
               time: time + t[4],
               id: g[1],
               boxes: [
                  {
                     rotationDistribution: -45,
                     events: [
                        { rotation: 225, easing: EaseType.NONE },
                        {
                           time: td[4],
                           rotation: 225 + 22.5,
                           easing: EaseType.OUT_QUAD,
                        },
                     ],
                     beatDistribution: 0.5,
                  },
               ],
            },
            {
               time: time + t[5],
               id: g[2],
               boxes: [
                  {
                     rotationDistribution: -45,
                     events: [
                        { rotation: 135, easing: EaseType.NONE },
                        {
                           time: td[5],
                           rotation: 135 + 22.5,
                           easing: EaseType.OUT_QUAD,
                        },
                     ],
                     beatDistribution: 0.5,
                  },
               ],
            },
         );
         continue;
      }
      if (x === 9 || x === 13) {
         const t = [0.25, 0.5, 0.75, 1.25, 1.5, 1.75];
         const td = t.map((n) => 3 - n);
         const events = [
            { color: EventBoxColor.WHITE },
            { color: EventBoxColor.WHITE, time: 0.125 },
            { time: 0.1875, easing: EaseType.LINEAR },
            {
               time: 0.375,
               color: EventBoxColor.BLUE,
               easing: EaseType.LINEAR,
               brightness: 0.75,
            },
         ] as Partial<types.wrapper.IWrapLightColorEventAttribute>[];
         for (let i = 0; i < 6; i++) {
            if (i === 0) {
               d.addLightColorEventBoxGroups(
                  {
                     time: time + t[i],
                     id: g[i],
                     boxes: [
                        {
                           filter: { reverse: 1 },
                           events: [
                              { color: EventBoxColor.WHITE, frequency: 8 },
                              {
                                 time: 0.25,
                                 color: EventBoxColor.WHITE,
                                 frequency: 12,
                                 easing: EaseType.LINEAR,
                              },
                              { time: 0.3125, brightness: 0 },
                           ],
                           beatDistribution: 0.5,
                        },
                     ],
                  },
                  {
                     time: time + t[i],
                     id: g[3],
                     boxes: [
                        {
                           filter: { reverse: 1 },
                           events: [
                              { color: EventBoxColor.WHITE, frequency: 8 },
                              {
                                 time: 0.25,
                                 color: EventBoxColor.WHITE,
                                 frequency: 12,
                                 easing: EaseType.LINEAR,
                              },
                              { time: 0.3125, brightness: 0 },
                           ],
                           beatDistribution: 0.5,
                        },
                     ],
                  },
               );
               d.addLightRotationEventBoxGroups(
                  {
                     time: time + t[i],
                     id: g[i],
                     boxes: [
                        {
                           filter: {
                              reverse: 1,
                              type: 2,
                              p0: 0,
                              p1: 2,
                           },
                           events: [{ rotation: 30, easing: EaseType.NONE }],
                           beatDistribution: 0.125,
                        },
                        {
                           filter: {
                              reverse: 1,
                              type: 2,
                              p0: 1,
                              p1: 2,
                           },
                           events: [{ rotation: 210, easing: EaseType.NONE }],
                           beatDistribution: 0.125,
                        },
                     ],
                  },
                  {
                     time: time + t[i],
                     id: g[3],
                     boxes: [
                        {
                           filter: {
                              reverse: 1,
                              type: 2,
                              p0: 0,
                              p1: 2,
                           },
                           events: [{ rotation: -30, easing: EaseType.NONE }],
                           beatDistribution: 0.125,
                        },
                        {
                           filter: {
                              reverse: 1,
                              type: 2,
                              p0: 1,
                              p1: 2,
                           },
                           events: [{ rotation: -210, easing: EaseType.NONE }],
                           beatDistribution: 0.125,
                        },
                     ],
                  },
               );
               continue;
            }
            if (i === 3) {
               d.addLightColorEventBoxGroups(
                  {
                     time: time + t[i],
                     id: g[0],
                     boxes: [
                        {
                           filter: { reverse: 1 },
                           events,
                           beatDistribution: 0.5,
                        },
                     ],
                  },
                  {
                     time: time + t[i],
                     id: g[i],
                     boxes: [
                        {
                           filter: { reverse: 1 },
                           events,
                           beatDistribution: 0.5,
                        },
                     ],
                  },
               );
               d.addLightRotationEventBoxGroups(
                  {
                     time: time + t[i],
                     id: g[0],
                     boxes: [
                        {
                           filter: { reverse: 1 },
                           rotationDistribution: 60,
                           events: [
                              { rotation: r[i], easing: EaseType.NONE },
                              {
                                 time: td[i],
                                 rotation: r[i] + rEnd[i],
                                 easing: EaseType.OUT_QUAD,
                              },
                           ],
                           beatDistribution: 0.5,
                           flip: 1,
                        },
                     ],
                  },
                  {
                     time: time + t[i],
                     id: g[i],
                     boxes: [
                        {
                           filter: { reverse: 1 },
                           rotationDistribution: 60,
                           events: [
                              { rotation: r[i], easing: EaseType.NONE },
                              {
                                 time: td[i],
                                 rotation: r[i] + rEnd[i],
                                 easing: EaseType.OUT_QUAD,
                              },
                           ],
                           beatDistribution: 0.5,
                           flip: 1,
                        },
                     ],
                  },
               );
               continue;
            }
            d.addLightColorEventBoxGroups({
               time: time + t[i],
               id: g[i],
               boxes: [{ events, beatDistribution: 0.5 }],
            });
            d.addLightRotationEventBoxGroups({
               time: time + t[i],
               id: g[i],
               boxes: [
                  {
                     rotationDistribution: 60,
                     events: [
                        { rotation: r[i], easing: EaseType.NONE },
                        {
                           time: td[i],
                           rotation: r[i] + rEnd[i],
                           easing: EaseType.OUT_QUAD,
                        },
                     ],
                     beatDistribution: 0.5,
                     flip: 1,
                  },
               ],
            });
         }
      } else {
         for (let i = 0; i < 6; i++) {
            const t = [0.25, 0.5, 0.75, 1.25, 1.5, 1.75];
            const td = t.map((n) => 3 - n);
            const events = [
               { color: EventBoxColor.WHITE },
               { color: EventBoxColor.WHITE, time: 0.125 },
               { time: 0.1875, easing: EaseType.LINEAR },
               {
                  time: 0.375,
                  color: EventBoxColor.BLUE,
                  easing: EaseType.LINEAR,
                  brightness: 0.75,
               },
            ] as Partial<types.wrapper.IWrapLightColorEventAttribute>[];
            d.addLightColorEventBoxGroups({
               time: time + t[i],
               id: g[i],
               boxes: [{ events, beatDistribution: 0.5 }],
            });
            d.addLightRotationEventBoxGroups({
               time: time + t[i],
               id: g[i],
               boxes: [
                  {
                     rotationDistribution: 60,
                     events: [
                        { rotation: r[i], easing: EaseType.NONE },
                        {
                           time: td[i],
                           rotation: r[i] + rEnd[i],
                           easing: EaseType.OUT_QUAD,
                        },
                     ],
                     beatDistribution: 0.5,
                     flip: 1,
                  },
               ],
            });
            if (x === 11) {
               d.addLightRotationEventBoxGroups({
                  time: time + t[i],
                  id: g[i] % 4 > 1 ? g[i] - 2 : g[i] + 2,
                  boxes: [
                     {
                        rotationDistribution: 60,
                        events: [
                           { rotation: r[i], easing: EaseType.NONE },
                           {
                              time: td[i],
                              rotation: r[i] + rEnd[i],
                              easing: EaseType.OUT_QUAD,
                           },
                        ],
                        beatDistribution: 0.5,
                        flip: 1,
                     },
                  ],
               });
            }
         }
      }
      if (x === 11 || x === 15) {
         d.addLightColorEventBoxGroups(
            {
               time: time + 2.25,
               id: g[0],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.5,
               id: g[2],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.75,
               id: g[4],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.25,
               id: g[1],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.5,
               id: g[3],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.75,
               id: g[5],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
         );
         if (x === 11) {
            d.addLightColorEventBoxGroups(
               {
                  time: time + 2.25,
                  id: g[0] - 2,
                  boxes: [
                     {
                        filter: { reverse: 1 },
                        events: [
                           { color: EventBoxColor.WHITE },
                           { time: 0.0625, brightness: 0 },
                        ],
                        beatDistribution: 0.25,
                     },
                  ],
               },
               {
                  time: time + 2.5,
                  id: g[2] - 2,
                  boxes: [
                     {
                        filter: { reverse: 1 },
                        events: [
                           { color: EventBoxColor.WHITE },
                           { time: 0.0625, brightness: 0 },
                        ],
                        beatDistribution: 0.25,
                     },
                  ],
               },
               {
                  time: time + 2.75,
                  id: g[4] + 2,
                  boxes: [
                     {
                        filter: { reverse: 1 },
                        events: [
                           { color: EventBoxColor.WHITE },
                           { time: 0.0625, brightness: 0 },
                        ],
                        beatDistribution: 0.25,
                     },
                  ],
               },
               {
                  time: time + 2.25,
                  id: g[1] - 2,
                  boxes: [
                     {
                        filter: { reverse: 1 },
                        events: [
                           { color: EventBoxColor.WHITE },
                           { time: 0.0625, brightness: 0 },
                        ],
                        beatDistribution: 0.25,
                     },
                  ],
               },
               {
                  time: time + 2.5,
                  id: g[3] - 2,
                  boxes: [
                     {
                        filter: { reverse: 1 },
                        events: [
                           { color: EventBoxColor.WHITE },
                           { time: 0.0625, brightness: 0 },
                        ],
                        beatDistribution: 0.25,
                     },
                  ],
               },
               {
                  time: time + 2.75,
                  id: g[5] + 2,
                  boxes: [
                     {
                        filter: { reverse: 1 },
                        events: [
                           { color: EventBoxColor.WHITE },
                           { time: 0.0625, brightness: 0 },
                        ],
                        beatDistribution: 0.25,
                     },
                  ],
               },
            );
         }
      } else {
         d.addLightColorEventBoxGroups(
            {
               time: time + 2.25,
               id: g[1],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.25,
               id: g[4],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.5,
               id: g[0],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.5,
               id: g[2],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.5,
               id: g[3],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.5,
               id: g[5],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
         );
      }
   }
   for (let x = 0, t = 0; x < 8; x++, t = Math.floor(x / 2)) {
      const filter = {
         type: 2,
         reverse: 1,
         p0: 1,
         p1: 2,
      } as Partial<types.wrapper.IWrapIndexFilterAttribute>;
      if (!(x % 2)) {
         d.addLightColorEventBoxGroups(
            {
               time: 36.75 + t * 16,
               id: 8,
               boxes: [
                  {
                     filter,
                     events: [
                        { brightness: 0.75 },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                     affectFirst: 1,
                     brightnessDistribution: 0.5,
                  },
               ],
            },
            {
               time: 36.75 + t * 16,
               id: 9,
               boxes: [
                  {
                     filter,
                     events: [
                        { brightness: 0.75 },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                     affectFirst: 1,
                     brightnessDistribution: 0.5,
                  },
               ],
            },
            {
               time: 37 + t * 16,
               id: 8,
               boxes: [{ filter, events: [{ brightness: 0 }] }],
            },
            {
               time: 37 + t * 16,
               id: 9,
               boxes: [{ filter, events: [{ brightness: 0 }] }],
            },
            {
               time: 37 + t * 16,
               id: t % 2 ? 2 : 3,
               boxes: [
                  {
                     filter: { type: 1, p0: 2, p1: 1 },
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 1 / 16, previous: 1 },
                        {
                           time: 0.125,
                           easing: EaseType.LINEAR,
                           brightness: 0.25,
                        },
                        {
                           time: 0.1875,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
            {
               time: 37.25 + t * 16,
               id: t % 2 ? 3 : 2,
               boxes: [
                  {
                     filter: { type: 1, p0: 2, p1: 1 },
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 1 / 16, previous: 1 },
                        {
                           time: 0.125,
                           easing: EaseType.LINEAR,
                           brightness: 0.25,
                        },
                        {
                           time: 0.1875,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
            {
               time: 37.5 + t * 16,
               id: t % 2 ? 0 : 1,
               boxes: [
                  {
                     filter: { type: 1, p0: 2, p1: 1 },
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 1 / 16, previous: 1 },
                        {
                           time: 0.125,
                           easing: EaseType.LINEAR,
                           brightness: 0.25,
                        },
                        {
                           time: 0.1875,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
            {
               time: 37.75 + t * 16,
               id: t % 2 ? 1 : 0,
               boxes: [
                  {
                     filter: { type: 1, p0: 2, p1: 1 },
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 1 / 16, previous: 1 },
                        {
                           time: 0.125,
                           easing: EaseType.LINEAR,
                           brightness: 0.25,
                        },
                        {
                           time: 0.1875,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: 36.75 + t * 16,
               id: 8,
               boxes: [
                  {
                     filter,
                     rotationDistribution: 45,
                     affectFirst: 1,
                     events: [{ rotation: 0, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: 36.75 + t * 16,
               id: 9,
               boxes: [
                  {
                     filter,
                     rotationDistribution: 45,
                     affectFirst: 1,
                     events: [{ rotation: 0, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: 37 + t * 16,
               id: t % 2 ? 2 : 3,
               boxes: [
                  {
                     rotationDistribution: 90,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{ rotation: 0, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: 37.25 + t * 16,
               id: t % 2 ? 3 : 2,
               boxes: [
                  {
                     rotationDistribution: 90,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{ rotation: 0, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: 37.5 + t * 16,
               id: t % 2 ? 0 : 1,
               boxes: [
                  {
                     rotationDistribution: 90,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{ rotation: 0, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: 37.75 + t * 16,
               id: t % 2 ? 1 : 0,
               boxes: [
                  {
                     rotationDistribution: 90,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{ rotation: 0, easing: EaseType.NONE }],
                  },
               ],
            },
         );
      } else {
         d.addLightColorEventBoxGroups(
            {
               time: 40.75 + t * 16,
               id: 6,
               boxes: [
                  {
                     filter,
                     events: [
                        { brightness: 0.75 },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                     affectFirst: 1,
                     brightnessDistribution: 0.5,
                  },
               ],
            },
            {
               time: 40.75 + t * 16,
               id: 7,
               boxes: [
                  {
                     filter,
                     events: [
                        { brightness: 0.75 },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                     affectFirst: 1,
                     brightnessDistribution: 0.5,
                  },
               ],
            },
            {
               time: 41 + t * 16,
               id: 6,
               boxes: [{ filter, events: [{ brightness: 0 }] }],
            },
            {
               time: 41 + t * 16,
               id: 7,
               boxes: [{ filter, events: [{ brightness: 0 }] }],
            },
            {
               time: 41 + t * 16,
               id: t % 2 ? 10 : 11,
               boxes: [
                  {
                     filter: { type: 1, p0: 2, p1: 1 },
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 1 / 16, previous: 1 },
                        {
                           time: 0.125,
                           easing: EaseType.LINEAR,
                           brightness: 0.25,
                        },
                        {
                           time: 0.1875,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
            {
               time: 41.25 + t * 16,
               id: t % 2 ? 11 : 10,
               boxes: [
                  {
                     filter: { type: 1, p0: 2, p1: 1 },
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 1 / 16, previous: 1 },
                        {
                           time: 0.125,
                           easing: EaseType.LINEAR,
                           brightness: 0.25,
                        },
                        {
                           time: 0.1875,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
            {
               time: 41.5 + t * 16,
               id: t % 2 ? 0 : 1,
               boxes: [
                  {
                     filter: { type: 1, p0: 2, p1: 1 },
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 1 / 16, previous: 1 },
                        {
                           time: 0.125,
                           easing: EaseType.LINEAR,
                           brightness: 0.25,
                        },
                        {
                           time: 0.1875,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
            {
               time: 41.75 + t * 16,
               id: t % 2 ? 1 : 0,
               boxes: [
                  {
                     filter: { type: 1, p0: 2, p1: 1 },
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 1 / 16, previous: 1 },
                        {
                           time: 0.125,
                           easing: EaseType.LINEAR,
                           brightness: 0.25,
                        },
                        {
                           time: 0.1875,
                           brightness: 0,
                        },
                     ],
                  },
               ],
            },
         );
         d.addLightRotationEventBoxGroups(
            {
               time: 40.75 + t * 16,
               id: 6,
               boxes: [
                  {
                     filter,
                     rotationDistribution: -45,
                     affectFirst: 1,
                     events: [{ rotation: 112.5, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: 40.75 + t * 16,
               id: 7,
               boxes: [
                  {
                     filter,
                     rotationDistribution: -45,
                     affectFirst: 1,
                     events: [{ rotation: 112.5, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: 41 + t * 16,
               id: t % 2 ? 10 : 11,
               boxes: [
                  {
                     rotationDistribution: 90,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{ rotation: 0, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: 41.25 + t * 16,
               id: t % 2 ? 11 : 10,
               boxes: [
                  {
                     rotationDistribution: 90,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{ rotation: 0, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: 41.5 + t * 16,
               id: t % 2 ? 0 : 1,
               boxes: [
                  {
                     rotationDistribution: 90,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{ rotation: 0, easing: EaseType.NONE }],
                  },
               ],
            },
            {
               time: 41.75 + t * 16,
               id: t % 2 ? 1 : 0,
               boxes: [
                  {
                     rotationDistribution: 90,
                     rotationDistributionType: 2,
                     affectFirst: 1,
                     events: [{ rotation: 0, easing: EaseType.NONE }],
                  },
               ],
            },
         );
      }
   }
   for (let t = 0; t < 4; t++) {
      if (!(t % 2)) {
         for (let g = 0; g < 2; g++) {
            for (let i = 0; i < 3; i++) {
               d.addLightColorEventBoxGroups({
                  time: 45 + i * 0.25 + t * 16,
                  id: 10 + g,
                  boxes: [
                     {
                        filter: { type: 1, p0: 4, p1: 3 - i },
                        events: [
                           { brightness: 1 },
                           {
                              time: 0.125,
                              brightness: 0.75,
                              easing: EaseType.LINEAR,
                           },
                           {
                              time: 0.1875,
                              brightness: 0,
                           },
                        ],
                     },
                  ],
               });
               d.addLightRotationEventBoxGroups({
                  time: 45 + i * 0.25 + t * 16,
                  id: 10 + g,
                  boxes: [
                     {
                        filter: { type: 1, p0: 4, p1: 3 - i },
                        flip: 1,
                        events: [
                           { easing: EaseType.NONE, rotation: 135 - i * 45 },
                        ],
                     },
                  ],
               });
            }
            d.addLightColorEventBoxGroups({
               time: 45.5 + t * 16,
               id: 8 + g,
               boxes: [
                  {
                     filter: { type: 1, p0: 4, p1: 1 },
                     events: [
                        { brightness: 1, frequency: 12 },
                        {
                           time: 0.125,
                           brightness: 0.75,
                           easing: EaseType.LINEAR,
                           frequency: 16,
                        },
                        { time: 0.1875, brightness: 0 },
                     ],
                  },
               ],
            });
            d.addLightRotationEventBoxGroups({
               time: 45.5 + t * 16,
               id: 8 + g,
               boxes: [
                  {
                     filter: { type: 1, p0: 4, p1: 1 },
                     events: [{ easing: EaseType.NONE, rotation: 225 }],
                  },
               ],
            });
            d.addLightColorEventBoxGroups(
               {
                  time: 60.5 + t * 16,
                  id: 2 + g,
                  boxes: [
                     {
                        filter: {
                           type: 2,
                           p0: 4,
                           p1: 1,
                           reverse: 1,
                        },
                        beatDistribution: 0.499,
                        events: [{}, { time: 0.4375, brightness: 0 }],
                     },
                  ],
               },
               {
                  time: 61 + t * 16,
                  id: 0 + g,
                  boxes: [
                     {
                        beatDistribution: 0.499,
                        events: [
                           { brightness: 1.5 },
                           { time: 1 / 16, brightness: 1 },
                           {
                              time: 0.1875,
                              brightness: 0,
                           },
                        ],
                     },
                  ],
               },
               {
                  time: 61.5 + t * 16,
                  id: 4 + g,
                  boxes: [
                     {
                        filter: {
                           type: 1,
                           p0: 4,
                           p1: 0,
                           reverse: 1,
                        },
                        events: [{}, { time: 0.1875, brightness: 0 }],
                     },
                  ],
               },
               {
                  time: 61.75 + t * 16,
                  id: 4 + g,
                  boxes: [
                     {
                        filter: {
                           type: 1,
                           p0: 4,
                           p1: 1,
                           reverse: 1,
                        },
                        events: [{}, { time: 0.1875, brightness: 0 }],
                     },
                  ],
               },
            );
            d.addLightRotationEventBoxGroups(
               {
                  time: 60.5 + t * 16,
                  id: 2 + g,
                  boxes: [
                     {
                        filter: {
                           type: 2,
                           p0: 4,
                           p1: 2,
                           reverse: 1,
                        },
                        events: [{ easing: EaseType.NONE, rotation: 270 }],
                     },
                     {
                        filter: {
                           type: 2,
                           p0: 5,
                           p1: 2,
                           reverse: 1,
                        },
                        events: [{ easing: EaseType.NONE, rotation: 0 }],
                     },
                  ],
               },
               {
                  time: 61 + t * 16,
                  id: 0 + g,
                  boxes: [
                     {
                        filter: { type: 2, p0: 0, p1: 2 },
                        rotationDistribution: -30,
                        affectFirst: 1,
                        events: [{ easing: EaseType.NONE, rotation: 285 }],
                     },
                     {
                        filter: { type: 2, p0: 1, p1: 2 },
                        rotationDistribution: -30,
                        affectFirst: 1,
                        events: [{ easing: EaseType.NONE, rotation: 105 }],
                     },
                  ],
               },
               {
                  time: 61.5 + t * 16,
                  id: 4 + g,
                  boxes: [
                     {
                        filter: {
                           type: 1,
                           p0: 4,
                           p1: 0,
                           reverse: 1,
                        },
                        events: [{ easing: EaseType.NONE, rotation: 225 }],
                     },
                  ],
               },
               {
                  time: 61.75 + t * 16,
                  id: 4 + g,
                  boxes: [
                     {
                        filter: {
                           type: 1,
                           p0: 4,
                           p1: 1,
                           reverse: 1,
                        },
                        events: [{ easing: EaseType.NONE, rotation: 270 }],
                     },
                  ],
               },
            );
            d.addLightColorEventBoxGroups(
               {
                  time: 64.5 + t * 16,
                  id: 10 + g,
                  boxes: [
                     {
                        filter: {
                           type: 2,
                           p0: 4,
                           p1: 1,
                           reverse: 1,
                        },
                        beatDistribution: 0.499,
                        events: [{}, { time: 0.4375, brightness: 0 }],
                     },
                  ],
               },
               {
                  time: 65 + t * 16,
                  id: 4 + g,
                  boxes: [
                     {
                        beatDistribution: 0.499,
                        events: [
                           { brightness: 1.5 },
                           { time: 1 / 16, brightness: 1 },
                           {
                              time: 0.1875,
                              brightness: 0,
                           },
                        ],
                     },
                  ],
               },
               {
                  time: 65.5 + t * 16,
                  id: 2 + g,
                  boxes: [
                     {
                        filter: {
                           type: 1,
                           p0: 4,
                           p1: 0,
                           reverse: 1,
                        },
                        events: [{}, { time: 0.1875, brightness: 0 }],
                     },
                  ],
               },
               {
                  time: 65.75 + t * 16,
                  id: 2 + g,
                  boxes: [
                     {
                        filter: {
                           type: 1,
                           p0: 4,
                           p1: 1,
                           reverse: 1,
                        },
                        events: [{}, { time: 0.1875, brightness: 0 }],
                     },
                  ],
               },
            );
            d.addLightRotationEventBoxGroups(
               {
                  time: 60.5 + t * 16,
                  id: 10 + g,
                  boxes: [
                     {
                        filter: {
                           type: 2,
                           p0: 4,
                           p1: 2,
                           reverse: 1,
                        },
                        events: [{ easing: EaseType.NONE, rotation: 270 }],
                     },
                     {
                        filter: {
                           type: 2,
                           p0: 5,
                           p1: 2,
                           reverse: 1,
                        },
                        events: [{ easing: EaseType.NONE, rotation: 0 }],
                     },
                  ],
               },
               {
                  time: 65 + t * 16,
                  id: 4 + g,
                  boxes: [
                     {
                        filter: { type: 2, p0: 0, p1: 2 },
                        rotationDistribution: -30,
                        affectFirst: 1,
                        events: [{ easing: EaseType.NONE, rotation: 285 }],
                     },
                     {
                        filter: { type: 2, p0: 1, p1: 2 },
                        rotationDistribution: -30,
                        affectFirst: 1,
                        events: [{ easing: EaseType.NONE, rotation: 105 }],
                     },
                  ],
               },
               {
                  time: 65.5 + t * 16,
                  id: 2 + g,
                  boxes: [
                     {
                        filter: {
                           type: 1,
                           p0: 4,
                           p1: 0,
                           reverse: 1,
                        },
                        events: [{ easing: EaseType.NONE, rotation: 225 }],
                     },
                  ],
               },
               {
                  time: 65.75 + t * 16,
                  id: 2 + g,
                  boxes: [
                     {
                        filter: {
                           type: 1,
                           p0: 4,
                           p1: 1,
                           reverse: 1,
                        },
                        events: [{ easing: EaseType.NONE, rotation: 270 }],
                     },
                  ],
               },
            );
         }
      }
   }
   for (let g = 0; g < 2; g++) {
      for (let t = 0; t < 2; t++) {
         for (let i = 0; i < 3; i++) {
            d.addLightColorEventBoxGroups(
               {
                  time: 77 + i * 0.25 + t * 1,
                  id: 0 + g + t * 10,
                  boxes: [
                     {
                        filter: { type: 1, p0: 4, p1: 3 - i - t },
                        events: [
                           { color: EventBoxColor.WHITE, brightness: 1 },
                           {
                              time: 0.125,
                              color: EventBoxColor.WHITE,
                              brightness: 0.75,
                              easing: EaseType.LINEAR,
                           },
                           { time: 0.1875, brightness: 0 },
                        ],
                     },
                  ],
               },
               {
                  time: 93 + i * 0.25 + t * 1,
                  id: 0 + g + t * 10,
                  boxes: [
                     {
                        filter: { type: 1, p0: 4, p1: 3 - i - t },
                        events: [
                           { color: EventBoxColor.WHITE, brightness: 1 },
                           {
                              time: 0.125,
                              color: EventBoxColor.WHITE,
                              brightness: 0.75,
                              easing: EaseType.LINEAR,
                           },
                           { time: 0.1875, brightness: 0 },
                        ],
                     },
                  ],
               },
            );
            d.addLightRotationEventBoxGroups(
               {
                  time: 77 + i * 0.25 + t * 1,
                  id: 0 + g + t * 10,
                  boxes: [
                     {
                        filter: { type: 1, p0: 4, p1: 3 - i - t },
                        flip: 1,
                        events: [
                           {
                              easing: EaseType.NONE,
                              rotation: 90 + i * 45 - t * 45,
                           },
                        ],
                     },
                  ],
               },
               {
                  time: 93 + i * 0.25 + t * 1,
                  id: 0 + g + t * 10,
                  boxes: [
                     {
                        filter: { type: 1, p0: 4, p1: 3 - i - t },
                        flip: 1,
                        events: [
                           {
                              easing: EaseType.NONE,
                              rotation: 90 + i * 45 - t * 45,
                           },
                        ],
                     },
                  ],
               },
            );
         }
      }
      d.addLightColorEventBoxGroups(
         {
            time: 49,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 1, p0: 2, p1: 1, reverse: 1 },
                  beatDistribution: 0.499,
                  events: [{}, { time: 0.4375, brightness: 0 }],
               },
            ],
         },
         {
            time: 49.5,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 1, p0: 2, p1: 0, reverse: 1 },
                  beatDistribution: 0.499,
                  events: [{}, { time: 0.4375, brightness: 0 }],
               },
            ],
         },
         {
            time: 81,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 1, p0: 2, p1: 1, reverse: 1 },
                  beatDistribution: 0.499,
                  events: [{}, { time: 0.4375, brightness: 0 }],
               },
            ],
         },
         {
            time: 81.5,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 1, p0: 4, p1: 1, reverse: 1 },
                  beatDistribution: 0.249,
                  events: [{}, { time: 0.1875, brightness: 0 }],
               },
            ],
         },
         {
            time: 81.75,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 1, p0: 4, p1: 0, reverse: 1 },
                  beatDistribution: 0.249,
                  events: [{}, { time: 0.1875, brightness: 0 }],
               },
            ],
         },
      );
      d.addLightRotationEventBoxGroups(
         {
            time: 49,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 2, p0: 4, p1: 2 },
                  events: [{ easing: EaseType.NONE, rotation: 90 }],
               },
               {
                  filter: { type: 2, p0: 5, p1: 2 },
                  events: [{ easing: EaseType.NONE, rotation: 0 }],
               },
            ],
         },
         {
            time: 49.5,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 2, p0: 4, p1: 2, reverse: 1 },
                  events: [{ easing: EaseType.NONE, rotation: 270 }],
               },
               {
                  filter: { type: 2, p0: 5, p1: 2, reverse: 1 },
                  events: [{ easing: EaseType.NONE, rotation: 180 }],
               },
            ],
         },
         {
            time: 81,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 2, p0: 4, p1: 2 },
                  events: [{ easing: EaseType.NONE, rotation: 90 }],
               },
               {
                  filter: { type: 2, p0: 5, p1: 2 },
                  events: [{ easing: EaseType.NONE, rotation: 0 }],
               },
            ],
         },
         {
            time: 81.5,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 2, p0: 0, p1: 2, reverse: 1 },
                  events: [{ easing: EaseType.NONE, rotation: 225 }],
               },
               {
                  filter: { type: 2, p0: 1, p1: 2, reverse: 1 },
                  events: [{ easing: EaseType.NONE, rotation: 135 }],
               },
            ],
         },
         {
            time: 81.75,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 2, p0: 0, p1: 2, reverse: 1 },
                  events: [{ easing: EaseType.NONE, rotation: 90 }],
               },
               {
                  filter: { type: 2, p0: 1, p1: 2, reverse: 1 },
                  events: [{ easing: EaseType.NONE, rotation: 0 }],
               },
            ],
         },
      );
   }
   for (let g = 0; g < 2; g++) {
      for (let i = 0; i < 7; i++) {
         d.addLightColorEventBoxGroups({
            time: 71 + i * 0.25,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 2, p0: 0 + i, p1: 999 },
                  events: [
                     {},
                     { time: 0.125, previous: 1 },
                     { time: 0.249, brightness: 0, easing: EaseType.LINEAR },
                  ],
               },
            ],
         });
         d.addLightRotationEventBoxGroups({
            time: 71 + i * 0.25,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 2, p0: 0 + i, p1: 999 },
                  events: [{ easing: EaseType.NONE, rotation: 90 }],
               },
               {
                  filter: { type: 2, p0: 0 + i, p1: 999 },
                  axis: Axis.Y,
                  events: [{ easing: EaseType.NONE, rotation: 90 }],
               },
            ],
         });
      }
      for (let i = 0; i < 6; i++) {
         d.addLightColorEventBoxGroups({
            time: 87.5 + i * 0.25,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 2, p0: 0 + i, p1: 999 },
                  events: [
                     {},
                     { time: 0.125, previous: 1 },
                     { time: 0.249, brightness: 0, easing: EaseType.LINEAR },
                  ],
               },
            ],
         });
         d.addLightRotationEventBoxGroups({
            time: 87.5 + i * 0.25,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 2, p0: 0 + i, p1: 999 },
                  events: [{ easing: EaseType.NONE, rotation: 90 }],
               },
               {
                  filter: { type: 2, p0: 0 + i, p1: 999 },
                  axis: Axis.Y,
                  events: [{ easing: EaseType.NONE, rotation: 90 }],
               },
            ],
         });
      }
      for (let i = 0; i < 8; i++) {
         d.addLightColorEventBoxGroups(
            {
               time: 76 + i * 0.125,
               id: 0 + g,
               boxes: [
                  {
                     filter: { type: 2, p0: 0 + i, p1: 999 },
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.09375, previous: 1 },
                        {
                           time: 0.124,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
            {
               time: 92 + i * 0.125,
               id: 0 + g,
               boxes: [
                  {
                     filter: { type: 2, p0: 0 + i, p1: 999 },
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.09375, previous: 1 },
                        {
                           time: 0.124,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                  },
               ],
            },
         );
      }
      d.addLightColorEventBoxGroups(
         {
            time: 75.5,
            id: 0 + g,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 0.499,
                  brightnessDistribution: 0.5,
                  events: [
                     { brightness: 0 },
                     { time: 0.125, easing: EaseType.LINEAR },
                  ],
               },
            ],
         },
         {
            time: 91.5,
            id: 0 + g,
            boxes: [
               {
                  filter: { reverse: 1 },
                  beatDistribution: 0.499,
                  brightnessDistribution: 0.5,
                  events: [
                     { brightness: 0 },
                     { time: 0.125, easing: EaseType.LINEAR },
                  ],
               },
            ],
         },
      );
      d.addLightRotationEventBoxGroups(
         {
            time: 75,
            id: 0 + g,
            boxes: [
               {
                  events: [{ easing: EaseType.NONE, rotation: 90 }],
               },
               {
                  axis: Axis.Y,
                  events: [{ easing: EaseType.NONE, rotation: 90 }],
               },
            ],
         },
         {
            time: 75.5,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 2, p0: 0, p1: 1, reverse: 1 },
                  axis: Axis.Y,
                  beatDistribution: 1.25,
                  events: [
                     { easing: EaseType.NONE, rotation: 90 },
                     { time: 1, easing: EaseType.INOUT_QUAD },
                  ],
               },
               {
                  filter: { type: 2, p0: 0, p1: 1, reverse: 1 },
                  beatDistribution: 1.25,
                  rotationDistribution: 90,
                  rotationDistributionType: 2,
                  events: [
                     { easing: EaseType.NONE, rotation: 90 },
                     { time: 0.75, rotation: 45, easing: EaseType.INOUT_QUAD },
                  ],
               },
            ],
         },
         {
            time: 91,
            id: 0 + g,
            boxes: [
               {
                  events: [{ easing: EaseType.NONE, rotation: 90 }],
               },
               {
                  axis: Axis.Y,
                  events: [{ easing: EaseType.NONE, rotation: 90 }],
               },
            ],
         },
         {
            time: 91.5,
            id: 0 + g,
            boxes: [
               {
                  filter: { type: 2, p0: 0, p1: 1, reverse: 1 },
                  axis: Axis.Y,
                  beatDistribution: 1.25,
                  events: [
                     { easing: EaseType.NONE, rotation: 90 },
                     { time: 1, easing: EaseType.INOUT_QUAD },
                  ],
               },
               {
                  filter: { type: 2, p0: 0, p1: 1, reverse: 1 },
                  beatDistribution: 1.25,
                  rotationDistribution: 90,
                  rotationDistributionType: 2,
                  events: [
                     { easing: EaseType.NONE, rotation: 90 },
                     { time: 0.75, rotation: 45, easing: EaseType.INOUT_QUAD },
                  ],
               },
            ],
         },
      );
      d.addLightRotationEventBoxGroups(
         {
            time: 73,
            id: 0 + g,
            boxes: [
               {
                  events: [{ easing: EaseType.NONE }],
               },
               {
                  axis: Axis.Y,
                  events: [{ easing: EaseType.NONE }],
               },
            ],
         },
         {
            time: 89,
            id: 0 + g,
            boxes: [
               {
                  events: [{ easing: EaseType.NONE }],
               },
               {
                  axis: Axis.Y,
                  events: [{ easing: EaseType.NONE }],
               },
            ],
         },
      );
   }
   //#region outro
   const outroG: number[][] = [
      [5, 1, 11, 4, 0, 10],
      [9, 3, 5, 8, 2, 4],
      [6, 9, 4, 7, 8, 5],
      [7, 2, 9, 6, 3, 8],
      [4, 0, 10, 5, 1, 11],
      [8, 2, 4, 9, 3, 5],
      [7, 8, 5, 6, 9, 4],
      [1, 3, 11, 0, 2, 10],
   ];
   d.addColorBoostEvents({ time: 98, toggle: false });
   for (let j = 0; j < 8; j++) {
      const time = 98 + j * 4;
      const t = [0.25, 0.5, 0.75, 1.25, 1.5, 1.75];
      const g = outroG[j];
      for (let i = 0; i < 6; i++) {
         const events = [
            { color: EventBoxColor.WHITE },
            { color: EventBoxColor.WHITE, time: 0.125 },
            { time: 0.1875, easing: EaseType.LINEAR },
            {
               time: 0.375,
               color: EventBoxColor.BLUE,
               easing: EaseType.LINEAR,
               brightness: 0.75,
            },
         ] as Partial<types.wrapper.IWrapLightColorEventAttribute>[];
         d.addLightColorEventBoxGroups({
            time: time + t[i],
            id: g[i],
            boxes: [{ events, beatDistribution: 0.5 }],
         });
         d.addLightRotationEventBoxGroups({
            time: time + t[i],
            id: g[i],
            boxes: [
               {
                  axis: Axis.Y,
                  events: [{ rotation: 90, easing: EaseType.NONE }],
               },
               {
                  filter: { type: 2, p0: 0, p1: 2 },
                  events: [{ rotation: 270, easing: EaseType.NONE }],
               },
               {
                  filter: { type: 2, p0: 1, p1: 2 },
                  events: [{ rotation: 90, easing: EaseType.NONE }],
               },
            ],
         });
      }
      if (j === 7) {
         d.addLightColorEventBoxGroups(
            {
               time: time + 2,
               id: g[0],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2,
               id: g[3],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.25,
               id: g[1],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.25,
               id: g[4],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.5,
               id: g[2],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
            {
               time: time + 2.5,
               id: g[5],
               boxes: [
                  {
                     events: [
                        { color: EventBoxColor.WHITE },
                        { time: 0.0625, brightness: 0 },
                     ],
                     beatDistribution: 0.25,
                  },
               ],
            },
         );
         continue;
      }
      d.addLightColorEventBoxGroups(
         {
            time: time + 2.25,
            id: g[1],
            boxes: [
               {
                  events: [
                     { color: EventBoxColor.WHITE },
                     { time: 0.0625, brightness: 0 },
                  ],
                  beatDistribution: 0.25,
               },
            ],
         },
         {
            time: time + 2.25,
            id: g[4],
            boxes: [
               {
                  events: [
                     { color: EventBoxColor.WHITE },
                     { time: 0.0625, brightness: 0 },
                  ],
                  beatDistribution: 0.25,
               },
            ],
         },
         {
            time: time + 2.5,
            id: g[0],
            boxes: [
               {
                  events: [
                     { color: EventBoxColor.WHITE },
                     { time: 0.0625, brightness: 0 },
                  ],
                  beatDistribution: 0.25,
               },
            ],
         },
         {
            time: time + 2.5,
            id: g[2],
            boxes: [
               {
                  events: [
                     { color: EventBoxColor.WHITE },
                     { time: 0.0625, brightness: 0 },
                  ],
                  beatDistribution: 0.25,
               },
            ],
         },
         {
            time: time + 2.5,
            id: g[3],
            boxes: [
               {
                  events: [
                     { color: EventBoxColor.WHITE },
                     { time: 0.0625, brightness: 0 },
                  ],
                  beatDistribution: 0.25,
               },
            ],
         },
         {
            time: time + 2.5,
            id: g[5],
            boxes: [
               {
                  events: [
                     { color: EventBoxColor.WHITE },
                     { time: 0.0625, brightness: 0 },
                  ],
                  beatDistribution: 0.25,
               },
            ],
         },
      );
   }
   //#endregion
};
