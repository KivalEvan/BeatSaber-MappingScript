import {
   Axis,
   DistributionType,
   EaseType,
   EventLightColor,
   pRandomFn,
   range as rangeEx,
   TransitionType,
   types,
   v3,
} from '@bsmap';
import { autoShuffle, loopArray } from '../../../utility/iterator.ts';
import { WeaveID } from './id.ts';
function range(start: number, end?: number, step?: number): number[] {
   return rangeEx(start, end!, step!, true);
}

const repeatTime1 = [0, 8, 12];
const repeatTime2 = [0, 8, 12, 16, 24, 28, 32, 40, 48, 52, 56, 60];
const idAry1 = [
   WeaveID.OUTER_BOTTOM_LEFT,
   WeaveID.OUTER_BOTTOM_RIGHT,
   WeaveID.OUTER_TOP_RIGHT,
   WeaveID.OUTER_TOP_LEFT,
];
const idAry2 = [
   WeaveID.INNER_BOTTOM_LEFT,
   WeaveID.INNER_BOTTOM_RIGHT,
   WeaveID.INNER_TOP_RIGHT,
   WeaveID.INNER_TOP_LEFT,
].reverse();
const idRotStart1 = {
   0: 140,
   1: 310,
   2: 310,
   3: 140,
   4: 50,
   5: 220,
   6: 220,
   7: 50,
};
const idRotEnd1 = {
   0: 135,
   1: 315,
   2: 315,
   3: 135,
   4: 45,
   5: 225,
   6: 225,
   7: 45,
};
const idRotDist1 = {
   0: -10,
   1: 10,
   2: 10,
   3: -10,
   4: 10,
   5: -10,
   6: -10,
   7: 10,
};
const idRotStart2 = {
   0: 135,
   1: 45,
   2: 225,
   3: 315,
   4: 135,
   5: 45,
   6: 225,
   7: 315,
};
const idRotEnd2 = {
   0: 125,
   1: 35,
   2: 215,
   3: 305,
   4: 125,
   5: 35,
   6: 215,
   7: 305,
};
const idRotDist2 = 20;
const loopGen1 = loopArray(idAry1);
const loopGen2 = loopArray(idAry2);

const shufflePick = autoShuffle([0, 90, 180, 270], pRandomFn('Necro Fantasia'));

export default function (data: types.wrapper.IWrapBeatmap) {
   const pRandom = pRandomFn('Necro Fantasia');
   for (
      const time of [
         ...range(6, 293, 16),
         ...range(486, 613, 16),
         ...range(934, 989, 16),
      ]
   ) {
      for (const rTime of repeatTime1) {
         if (
            rTime + time === 130 ||
            rTime + time === 222 ||
            rTime + time === 226
         ) {
            continue;
         }
         for (const section of range(0, 3)) {
            const currentId = loopGen1.next().value!;
            data.addLightColorEventBoxGroups(
               {
                  time: time + rTime + section / 2,
                  id: currentId,
                  boxes: [
                     {
                        filter: { p0: 4, p1: section },
                        events: [
                           { brightness: 0 },
                           {
                              time: 0.25,
                              color: EventLightColor.WHITE,
                              brightness: 1,
                              easing: EaseType.LINEAR,
                           },
                           {
                              time: 1,
                              brightness: 0.75,
                              easing: EaseType.LINEAR,
                           },
                        ],
                        beatDistribution: 1 / 8,
                        beatDistributionType: DistributionType.STEP,
                     },
                  ],
               },
               {
                  time: time + rTime + 2.5 + section / 8,
                  id: currentId,
                  boxes: [
                     {
                        filter: { p0: 4, p1: section },
                        events: [
                           {
                              brightness: 1.375,
                              color: rTime === 12 ? EventLightColor.WHITE : EventLightColor.BLUE,
                           },
                           {
                              time: 1,
                              color: EventLightColor.BLUE,
                              brightness: 1,
                              easing: EaseType.LINEAR,
                           },
                           {
                              time: 2,
                              brightness: 0.666,
                              easing: EaseType.LINEAR,
                           },
                           {
                              time: 3,
                              brightness: 0.333,
                              easing: EaseType.LINEAR,
                           },
                           {
                              time: 4,
                              brightness: 0,
                              easing: EaseType.LINEAR,
                           },
                        ],
                        beatDistribution: 1 / 16,
                        beatDistributionType: DistributionType.STEP,
                     },
                  ],
               },
            );
            data.addLightRotationEventBoxGroups({
               time: time + rTime + section / 2,
               id: currentId,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: { p0: 4, p1: section },
                     events: [{ rotation: 0, easing: EaseType.NONE }],
                     rotationDistribution: idRotDist2 / 4,
                  },
                  {
                     filter: { p0: 4, p1: section },
                     events: [
                        {
                           rotation: idRotStart1[currentId],
                           easing: EaseType.NONE,
                        },
                        {
                           time: 6,
                           rotation: idRotEnd1[currentId],
                           easing: EaseType.OUT_QUAD,
                        },
                     ],
                     rotationDistribution: idRotDist1[currentId],
                  },
               ],
            });
         }
         loopGen1.next();
      }
   }
   for (const rTime of repeatTime1) {
      if (!rTime) continue;
      for (const section of range(0, 3)) {
         const currentId = loopGen2.next().value!;
         data.addLightColorEventBoxGroups(
            {
               time: 982 + rTime + section / 2,
               id: currentId,
               boxes: [
                  {
                     filter: { p0: 4, p1: section },
                     events: [
                        { brightness: 0 },
                        {
                           time: 0.25,
                           color: EventLightColor.WHITE,
                           brightness: 1,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1,
                           brightness: 0.75,
                           easing: EaseType.LINEAR,
                        },
                     ],
                     beatDistribution: 1 / 8,
                     beatDistributionType: DistributionType.STEP,
                  },
               ],
            },
            {
               time: 982 + rTime + 2.5 + section / 8,
               id: currentId,
               boxes: [
                  {
                     filter: { p0: 4, p1: section },
                     events: [
                        {
                           brightness: 1.375,
                           color: rTime === 12 ? EventLightColor.WHITE : EventLightColor.BLUE,
                        },
                        {
                           time: 1,
                           color: EventLightColor.BLUE,
                           brightness: 1,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 4,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                     beatDistribution: 1 / 16,
                     beatDistributionType: DistributionType.STEP,
                  },
               ],
            },
         );
         data.addLightRotationEventBoxGroups({
            time: 982 + rTime + section / 2,
            id: currentId,
            boxes: [
               {
                  axis: Axis.Y,
                  filter: { p0: 4, p1: section },
                  events: [{ rotation: 0, easing: EaseType.NONE }],
                  rotationDistribution: idRotDist2 / 4,
               },
               {
                  filter: { p0: 4, p1: section },
                  events: [
                     {
                        rotation: idRotStart1[currentId],
                        easing: EaseType.NONE,
                     },
                     {
                        time: 6,
                        rotation: idRotEnd1[currentId],
                        easing: EaseType.OUT_QUAD,
                     },
                  ],
                  rotationDistribution: idRotDist1[currentId],
               },
            ],
         });
      }
      loopGen2.next();
   }
   loopGen1.next();
   loopGen1.next();
   for (const time of [...range(934, 989, 16)]) {
      for (const rTime of repeatTime1) {
         if (time + rTime >= 990 && time + rTime < 1000) {
            continue;
         }
         for (const section of range(0, 3)) {
            const currentId = loopGen1.next().value!;
            data.addLightColorEventBoxGroups(
               {
                  time: time + rTime + section / 2,
                  id: currentId,
                  boxes: [
                     {
                        filter: { p0: 4, p1: section },
                        events: [
                           { brightness: 0 },
                           {
                              time: 0.25,
                              color: EventLightColor.WHITE,
                              brightness: 1,
                              easing: EaseType.LINEAR,
                           },
                           {
                              time: 1,
                              brightness: 0.75,
                              easing: EaseType.LINEAR,
                           },
                        ],
                        beatDistribution: 1 / 8,
                        beatDistributionType: DistributionType.STEP,
                     },
                  ],
               },
               {
                  time: time + rTime + 2.5 + section / 8,
                  id: currentId,
                  boxes: [
                     {
                        filter: { p0: 4, p1: section },
                        events: [
                           {
                              brightness: 1.375,
                              color: rTime === 12 ? EventLightColor.WHITE : EventLightColor.BLUE,
                           },
                           {
                              time: 1,
                              color: EventLightColor.BLUE,
                              brightness: 1,
                              easing: EaseType.LINEAR,
                           },
                           {
                              time: 2,
                              brightness: 0.666,
                              easing: EaseType.LINEAR,
                           },
                           {
                              time: 3,
                              brightness: 0.333,
                              easing: EaseType.LINEAR,
                           },
                           {
                              time: 4,
                              brightness: 0,
                              easing: EaseType.LINEAR,
                           },
                        ],
                        beatDistribution: 1 / 16,
                        beatDistributionType: DistributionType.STEP,
                     },
                  ],
               },
            );
            data.addLightRotationEventBoxGroups({
               time: time + rTime + section / 2,
               id: currentId,
               boxes: [
                  {
                     axis: Axis.Y,
                     filter: { p0: 4, p1: section },
                     events: [{ rotation: 0, easing: EaseType.NONE }],
                     rotationDistribution: idRotDist2 / 4,
                  },
                  {
                     filter: { p0: 4, p1: section },
                     events: [
                        {
                           rotation: idRotStart1[currentId],
                           easing: EaseType.NONE,
                        },
                        {
                           time: 6,
                           rotation: idRotEnd1[currentId],
                           easing: EaseType.OUT_QUAD,
                        },
                     ],
                     rotationDistribution: idRotDist1[currentId],
                  },
               ],
            });
         }
         loopGen1.next();
      }
   }
   loopGen1.next();
   loopGen1.next();
   for (const time of [...range(294, 422, 64), ...range(614, 870, 64)]) {
      for (const rTime of repeatTime2) {
         if (
            (time + rTime >= 306 && time + rTime < 318) ||
            (time + rTime >= 342 && time + rTime < 358) ||
            (time + rTime >= 626 && time + rTime < 638) ||
            (time + rTime >= 662 && time + rTime < 678) ||
            (time + rTime >= 794 && time + rTime < 806) ||
            (time + rTime >= 930 && time + rTime < 934)
         ) {
            continue;
         }
         const randRot = shufflePick.next().value! + pRandom(15, -15);
         for (const section of range(0, 3)) {
            const currentId = loopGen1.next().value!;
            data.addLightColorEventBoxGroups({
               time: time + rTime + section / 2,
               id: currentId,
               boxes: [
                  {
                     filter: { p0: 4, p1: section },
                     events: [
                        { brightness: 0 },
                        {
                           time: 0.25,
                           color: EventLightColor.WHITE,
                           brightness: 1,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1,
                           brightness: 1,
                           easing: EaseType.LINEAR,
                        },
                        { previous: 1 },
                        {
                           time: 4,
                           color: EventLightColor.BLUE,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                     beatDistribution: 1 / 8,
                     beatDistributionType: DistributionType.STEP,
                  },
               ],
            });
            data.addLightRotationEventBoxGroups(
               {
                  time: time + rTime + section / 2,
                  id: currentId,
                  boxes: [
                     {
                        axis: Axis.Y,
                        filter: { p0: 4, p1: section },
                        events: [{ rotation: 0, easing: EaseType.NONE }],
                        rotationDistribution: idRotDist2 / 4,
                     },
                     {
                        filter: { p0: 4, p1: section },
                        events: [
                           {
                              rotation: (randRot + idRotStart2[currentId]) % 360,
                              easing: EaseType.NONE,
                           },
                        ],
                        rotationDistribution: idRotDist2 / 4,
                        affectFirst: 1,
                     },
                  ],
               },
               {
                  time: time + rTime + section / 2 + 6,
                  id: currentId,
                  boxes: [
                     {
                        filter: { p0: 4, p1: section },
                        events: [
                           {
                              rotation: (randRot + idRotEnd2[currentId]) % 360,
                              easing: EaseType.OUT_QUAD,
                           },
                        ],
                        rotationDistribution: idRotDist2,
                        affectFirst: 1,
                     },
                  ],
               },
            );
         }
         loopGen1.next();
      }
   }
   loopGen1.next();
   loopGen1.next();
   loopGen1.next();
   for (const time of range(806, 870, 64)) {
      for (const rTime of repeatTime2) {
         if (time + rTime >= 930 && time + rTime < 934) {
            continue;
         }
         const randRot = shufflePick.next().value! + pRandom(15, -15);
         for (const section of range(0, 3)) {
            const currentId = loopGen1.next().value!;
            data.addLightColorEventBoxGroups({
               time: time + rTime + section / 2,
               id: currentId,
               boxes: [
                  {
                     filter: { p0: 4, p1: section },
                     events: [
                        { brightness: 0 },
                        {
                           time: 0.25,
                           color: EventLightColor.WHITE,
                           brightness: 1,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1,
                           brightness: 1,
                           easing: EaseType.LINEAR,
                        },
                        { previous: 1 },
                        {
                           time: 4,
                           color: EventLightColor.BLUE,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                     beatDistribution: 1 / 8,
                     beatDistributionType: DistributionType.STEP,
                  },
               ],
            });
            data.addLightRotationEventBoxGroups(
               {
                  time: time + rTime + section / 2,
                  id: currentId,
                  boxes: [
                     {
                        axis: Axis.Y,
                        filter: { p0: 4, p1: section },
                        events: [{ rotation: 0, easing: EaseType.NONE }],
                        rotationDistribution: idRotDist2 / 4,
                     },
                     {
                        filter: { p0: 4, p1: section },
                        events: [
                           {
                              rotation: (randRot + idRotStart2[currentId]) % 360,
                              easing: EaseType.NONE,
                           },
                        ],
                        rotationDistribution: idRotDist2 / 4,
                        affectFirst: 1,
                     },
                  ],
               },
               {
                  time: time + rTime + section / 2 + 6,
                  id: currentId,
                  boxes: [
                     {
                        filter: { p0: 4, p1: section },
                        events: [
                           {
                              rotation: (randRot + idRotEnd2[currentId]) % 360,
                              easing: EaseType.OUT_QUAD,
                           },
                        ],
                        rotationDistribution: idRotDist2,
                        affectFirst: 1,
                     },
                  ],
               },
            );
         }
         loopGen1.next();
      }
   }
   for (const time of range(678, 742, 64)) {
      for (const rTime of repeatTime2) {
         if (time + rTime >= 794 && time + rTime < 806) {
            continue;
         }
         const randRot = shufflePick.next().value! + pRandom(15, -15);
         for (const section of range(0, 3)) {
            const currentId = loopGen2.next().value!;
            data.addLightColorEventBoxGroups({
               time: time + rTime + section / 2,
               id: currentId,
               boxes: [
                  {
                     filter: { p0: 4, p1: section },
                     events: [
                        { brightness: 0 },
                        {
                           time: 0.25,
                           color: EventLightColor.WHITE,
                           brightness: 1,
                           easing: EaseType.LINEAR,
                        },
                        {
                           time: 1,
                           brightness: 1,
                           easing: EaseType.LINEAR,
                        },
                        { previous: 1 },
                        {
                           time: 4,
                           color: EventLightColor.BLUE,
                           brightness: 0,
                           easing: EaseType.LINEAR,
                        },
                     ],
                     beatDistribution: 1 / 8,
                     beatDistributionType: DistributionType.STEP,
                  },
               ],
            });
            data.addLightRotationEventBoxGroups(
               {
                  time: time + rTime + section / 2,
                  id: currentId,
                  boxes: [
                     {
                        axis: Axis.Y,
                        filter: { p0: 4, p1: section },
                        events: [{ rotation: 0, easing: EaseType.NONE }],
                        rotationDistribution: idRotDist2 / 4,
                     },
                     {
                        filter: { p0: 4, p1: section },
                        events: [
                           {
                              rotation: (randRot + idRotStart2[currentId]) % 360,
                              easing: EaseType.NONE,
                           },
                        ],
                        rotationDistribution: idRotDist2 / 4,
                        affectFirst: 1,
                     },
                  ],
               },
               {
                  time: time + rTime + section / 2 + 5.999,
                  id: currentId,
                  boxes: [
                     {
                        filter: { p0: 4, p1: section },
                        events: [
                           {
                              rotation: (randRot + idRotEnd2[currentId]) % 360,
                              easing: EaseType.OUT_QUAD,
                           },
                        ],
                        rotationDistribution: idRotDist2,
                        affectFirst: 1,
                     },
                  ],
               },
            );
         }
         loopGen2.next();
      }
   }
}
