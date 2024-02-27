import {
   colorFrom,
   globals,
   load,
   pRandomFn,
   range,
   save,
   toColorObject,
} from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';
import { insertEnvironment } from '../../environment-enhancement/railway/main.ts';

globals.directory = wipPath('Lost Days');

const info = load.infoSync(2);
info.colorSchemes = [
   {
      useOverride: true,
      name: 'Lost Days',
      saberLeftColor: toColorObject(
         colorFrom(355, 0.8125, 0.9375, 'hsva'),
         true,
      ),
      saberRightColor: toColorObject(
         colorFrom(215, 0.625, 0.875, 'hsva'),
         true,
      ),
      environment0Color: toColorObject(colorFrom(80, 0.666, 0.7, 'hsva'), true),
      environment1Color: toColorObject(
         colorFrom(205, 0.75, 0.8125, 'hsva'),
         true,
      ),
      environment0ColorBoost: toColorObject(
         colorFrom(350, 1, 0.8125, 'hsva'),
         true,
      ),
      environment1ColorBoost: toColorObject(
         colorFrom(210, 0.75, 0.75, 'hsva'),
         true,
      ),
      obstaclesColor: toColorObject(
         colorFrom(220, 0.666, 0.4375, 'hsva'),
         true,
      ),
   },
];
info.environmentName = 'WeaveEnvironment';
info.environmentNames = ['WeaveEnvironment'];
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];

for (const [m, d] of info.listMap()) {
   const data = load.difficultySync(d.filename, 3);
   data.useNormalEventsAsCompatibleEvents = m === 'Legacy';
   data.basicEvents = [];
   data.lightColorEventBoxGroups = [];
   data.lightRotationEventBoxGroups = [];
   insertEnvironment(data);

   for (const id of [0, 1, 4, 5]) {
      data.addLightColorEventBoxGroups(
         {
            time: 20,
            id,
            boxes: [
               {
                  events: [
                     { color: 1, brightness: 0 },
                     { time: 16, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 4,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 172,
            id,
            boxes: [
               {
                  events: [
                     { transition: 2 },
                     { time: 8, color: 1, brightness: 0, transition: 1 },
                  ],
                  beatDistribution: 2,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 236,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 298,
            id,
            boxes: [
               {
                  events: [
                     { transition: 2 },
                     { time: 2, color: 1, brightness: 0, transition: 1 },
                  ],
                  beatDistribution: 8,
               },
            ],
         },
         {
            time: 339,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 347,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 355,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 363,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 370,
            id,
            boxes: [{ events: [{ color: 1 }] }],
         },
         {
            time: 398.5,
            id,
            boxes: [
               {
                  events: [{ color: 1, brightness: 0 }],
                  beatDistribution: 0.5,
               },
            ],
         },
         {
            time: 401.5,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 403,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 558.5,
            id,
            boxes: [
               {
                  events: [{ color: 1, brightness: 0 }],
                  beatDistribution: 0.5,
               },
            ],
         },
         {
            time: 561.5,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 563,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 627,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 635,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 643,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 651,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 659,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 667,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 675,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 683,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 691,
            id,
            boxes: [
               {
                  events: [
                     { transition: 2 },
                     { time: 2, color: 1, brightness: 0, transition: 1 },
                  ],
                  beatDistribution: 8,
               },
            ],
         },
         {
            time: 721.5,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 723,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 835,
            id,
            boxes: [
               {
                  events: [{ color: 1, brightness: 0 }],
                  beatDistribution: 0.5,
               },
            ],
         },
      );
      data.addLightRotationEventBoxGroups(
         { id, boxes: [{ events: [{ rotation: 270 }] }] },
         {
            id,
            boxes: [
               {
                  filter: { type: 2, p0: 0, p1: 2 },
                  axis: 1,
                  events: [{ rotation: 90 }],
               },
            ],
         },
      );
   }
   for (const id of [8, 9, 10, 11]) {
      data.addLightColorEventBoxGroups(
         {
            time: 108,
            id,
            boxes: [
               {
                  events: [
                     { color: 1, brightness: 0 },
                     { time: 16, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 4,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 231.5,
            id,
            boxes: [
               {
                  events: [{ color: 1, brightness: 0 }],
                  beatDistribution: 0.5,
               },
            ],
         },
         {
            time: 236,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 298,
            id,
            boxes: [
               {
                  events: [
                     { transition: 2 },
                     { time: 2, color: 1, brightness: 0, transition: 1 },
                  ],
                  beatDistribution: 8,
               },
            ],
         },
         {
            time: 307,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 315,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 323,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 331,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 339,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 347,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 355,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 363,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 370,
            id,
            boxes: [{ events: [{ color: 1 }] }],
         },
         {
            time: 371,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 398.5,
            id,
            boxes: [
               {
                  events: [{ color: 1, brightness: 0 }],
                  beatDistribution: 0.5,
               },
            ],
         },
         {
            time: 402,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 403,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 558.5,
            id,
            boxes: [
               {
                  events: [{ color: 1, brightness: 0 }],
                  beatDistribution: 0.5,
               },
            ],
         },
         {
            time: 562,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 563,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 627,
            id,
            boxes: [
               {
                  events: [
                     { transition: 2 },
                     { time: 2, color: 1, brightness: 0, transition: 1 },
                  ],
                  beatDistribution: 8,
               },
            ],
         },
         {
            time: 659.5,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 667.5,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 675.5,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 683.5,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1 },
                     { time: 1, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
                  beatDistributionType: 2,
               },
            ],
         },
         {
            time: 691,
            id,
            boxes: [
               {
                  events: [
                     { transition: 2 },
                     { time: 2, color: 1, brightness: 0, transition: 1 },
                  ],
                  beatDistribution: 8,
               },
            ],
         },
         {
            time: 722,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 723,
            id,
            boxes: [
               {
                  events: [
                     { color: 2, brightness: 1.5 },
                     { time: 0.5, color: 1, brightness: 1, transition: 1 },
                  ],
                  beatDistribution: 1,
               },
            ],
         },
         {
            time: 771,
            id,
            boxes: [
               {
                  events: [
                     { transition: 2 },
                     { time: 2, color: 1, brightness: 0, transition: 1 },
                  ],
                  beatDistribution: 8,
               },
            ],
         },
      );
      data.addLightRotationEventBoxGroups(
         {
            id,
            boxes: [
               {
                  filter: { type: 2, p0: 0, p1: 2 },
                  events: [{ rotation: 180 }],
               },
            ],
         },
         {
            id,
            boxes: [
               {
                  filter: { type: 2, p0: 1, p1: 2 },
                  events: [{ rotation: 225 }],
               },
            ],
         },
      );
   }
   data.addBasicEvents(
      { time: 236, type: 4, value: 9, floatValue: 2 },
      { time: 240, type: 4, value: 12, floatValue: 1 },
      { time: 298, type: 4, value: 9, floatValue: 1 },
      { time: 302, type: 4, value: 12, floatValue: 0 },
      { time: 370, type: 4, value: 9, floatValue: 1 },
      { time: 371, type: 4, value: 9, floatValue: 0 },
      { time: 387, type: 4, value: 9, floatValue: 1.5 },
      { time: 395, type: 4, value: 12, floatValue: 0 },
      { time: 403, type: 4, value: 9, floatValue: 2 },
      { time: 407, type: 4, value: 12, floatValue: 1 },
      { time: 467, type: 4, value: 9, floatValue: 1 },
      { time: 475, type: 4, value: 12, floatValue: 0 },
      { time: 547, type: 4, value: 9, floatValue: 1.5 },
      { time: 555, type: 4, value: 12, floatValue: 0 },
      { time: 593, type: 4, value: 9, floatValue: 2 },
      { time: 597, type: 4, value: 12, floatValue: 1 },
      { time: 627, type: 4, value: 9, floatValue: 1 },
      { time: 635, type: 4, value: 12, floatValue: 0 },
      { time: 691, type: 4, value: 9, floatValue: 0 },
      { time: 699, type: 4, value: 12, floatValue: 0.75 },
      { time: 718.5, type: 4, value: 9, floatValue: 0.75 },
      { time: 719, type: 4, value: 12, floatValue: 0 },
      { time: 723, type: 4, value: 9, floatValue: 2 },
      { time: 727, type: 4, value: 12, floatValue: 1 },
      { time: 771, type: 4, value: 9, floatValue: 1 },
      { time: 779, type: 4, value: 12, floatValue: 0 },
      { time: 803, type: 4, value: 9, floatValue: 0 },
      { time: 835, type: 4, value: 12, floatValue: 1.5 },
      { time: 839, type: 4, value: 4, floatValue: 1 },
      { time: 847, type: 4, value: 4, floatValue: 0 },
   );
   const pRandom = pRandomFn('Lost Days');
   data.customData.customEvents = [];
   for (const it of range(0, 9)) {
      const r = pRandom(3, 4);
      data.customData.customEvents.push(
         {
            b: 0,
            t: 'AnimateTrack',
            d: {
               track: `railwayField${it}`,
               duration: 0,
               scale: [[1 / 24, 1 / 24, r, 0, 'easeInOutQuad']],
            },
         },
         {
            b: 0.125 + it * 3,
            t: 'AnimateTrack',
            d: {
               track: `railwayField${it}`,
               duration: 27,
               repeat: 41,
               scale: [
                  [1 / 24, 1 / 24, r, 0, 'easeInOutQuad'],
                  [1 / 24, 1 / 24, 0.25, 0.5, 'easeInOutQuad'],
                  [1 / 24, 1 / 24, r, 1, 'easeInOutQuad'],
               ],
            },
         },
      );
   }

   delete d.customData._requirements;
   d.customData._difficultyLabel = 'Sorrowful Memory';
   d.customData._suggestions = ['Chroma'];
   d.customData._information = [
      'Kana Anaberal',
      'Vanishing Dream ~ Lost Dream',
      '9th and 10th track of album Spatial Moving',
      'Illustration by c7777',
   ];
   d.copyColorScheme(info.colorSchemes[d.colorSchemeId]);
   save.difficultySync(data);
}

save.infoSync(info);
