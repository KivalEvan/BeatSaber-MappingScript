// @ts-check
/**
 * @typedef {import('./library/types').RunV2<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 * @typedef {import('./library/types/colors').ColorArray} ColorArray
 * @typedef {import('./library/types/beatmap/v2/note').INote | import('./library/types/beatmap/v2/obstacle').IObstacle | import('./library/types/beatmap/v2/event').IEvent} IChromaObject
 */

const {
   at,
   between,
   where,
   v2SetColor: setColor,
   v2SetGradientColor: setGradientColor,
   v2RandomizeColor: randomizeColor,
   v2RandomizeColorStack: randomizeColorStack,
} = require('./library/helpers.js');

const name = 'JOURNEY Single Saber';
const errorCheck = false;
const params = {};

/** @type {Run} */
function run(
   cursor,
   notes,
   events,
   walls,
   _,
   global,
   data,
   customEvents,
   bpmChanges,
   _bombs,
   arcs,
   chains,
) {
   notes.forEach((n) => (n._type = n._type ? n._type : 1));
   /** @type {[number, boolean][]} */
   const towerHitTiming = [
      [311.5, true],
      [314.5, true],
      [439.5, false],
      [442.5, false],
      [631.5, false],
      [634.5, false],
      [823.5, false],
      [826.5, false],
   ];

   // set base color
   randomizeColorStack(notes, [25, 1, 1], [35, 1, 1]);
   randomizeColorStack(between(notes, 0, 262), [175, 0.5, 0.6875], [185, 0.5, 0.6875]);
   randomizeColorStack(
      where(between(notes, 326, 382), {
         include: { _cutDirection: [2, 3], _time: [379.75, 380.5] },
         exclude: { _time: [358] },
      }),
      [175, 0.5, 0.6875],
      [185, 0.5, 0.6875],
   );
   randomizeColorStack(
      where(between(notes, 518, 550), {
         include: { _cutDirection: [2, 3] },
         exclude: { _time: [531.5, 545.5, 546.5] },
      }),
      [175, 0.5, 0.6875],
      [185, 0.5, 0.6875],
   );
   randomizeColorStack(between(notes, 550, 582), [190, 0.875, 0.75], [200, 0.875, 0.875]);

   setGradientColor(between(notes, 259, 260), [0, 0, 0.25], [0, 0, 0.375]);
   setGradientColor(between(notes, 260, 261.5), [0, 0, 0.5], [0, 0, 0.75]);

   // JOURNEY
   setColor(where(at(notes, [262, 1037.5]), { include: { _lineIndex: 0 } }), [0, 0, 0.3125]);
   setColor(where(at(notes, [262, 1037.5]), { include: { _lineIndex: 1 } }), [30, 1, 1.375]);
   setColor(where(at(notes, [262, 1037.5]), { include: { _lineIndex: 2 } }), [30, 0.9375, 1.25]);
   setColor(where(at(notes, [262, 1037.5]), { include: { _lineIndex: 3 } }), [30, 0.875, 1.2]);
   setGradientColor(between(notes, 294, 310), [30, 0, 0.75], [180, 0.75, 1]);
   randomizeColorStack(between(notes, 310, 317), [200, 0.875, 0.875], [210, 0.875, 0.875]);
   setColor(at(notes, [310, 313, 317]), [225, 0.25, 1]);

   randomizeColor(between(notes, 359, 360.5), [0, 0, 0.6875], [0, 0, 0.75]);
   setColor(at(notes, 365), [0, 0, 0.375]);
   randomizeColor(between(notes, 367, 368.5), [0, 0, 0.6875], [0, 0, 0.75]);
   randomizeColor(between(notes, 375, 376.5), [0, 0, 0.6875], [0, 0, 0.75]);
   setColor(at(notes, [382, 382.5]), [0, 0, 0.3125]);
   setColor(at(notes, 383), [30, 1, 1]);
   setGradientColor(between(notes, 384, 390), [0, 0, 0.75], [0, 0, 0.3125]);
   randomizeColorStack(at(notes, [385.5, 387.5]), [25, 1, 1], [35, 1, 1]);
   randomizeColor(between(notes, 390, 422), [190, 0.75, 0.75], [200, 0.75, 0.75]);

   setColor(at(notes, 422), [30, 1, 1]);
   setGradientColor(between(notes, 423, 430), [120, 0, 0.3125], [200, 0.25, 0.75]);
   setGradientColor(between(notes, 430, 438), [200, 0.25, 0.75], [390, 1, 1]);
   randomizeColorStack(between(notes, 443.5, 444.5), [175, 0.1875, 0.5], [185, 0.1875, 0.5]);
   setGradientColor(between(notes, 446, 449), [0, 0, 0.3125], [0, 0, 0.75]);

   setColor(at(notes, [453, 517]), [0, 0, 0.4375]);
   randomizeColorStack(between(notes, 454, 513), [200, 0.875, 0.875], [210, 0.875, 0.875]);
   setColor(at(notes, 454), [0, 0, 0.75]);
   randomizeColorStack(between(notes, 470, 478), [0, 0, 0.6875], [0, 0, 0.75]);
   randomizeColorStack(between(notes, 478, 482), [25, 1, 1], [35, 1, 1]);
   setGradientColor(between(notes, 482.5, 485.5), [175, 0, 0.375], [185, 0.5, 0.6875]);
   randomizeColorStack(between(notes, 502, 513), [0, 0, 0.6875], [0, 0, 0.75]);
   randomizeColorStack(between(notes, 514.5, 516.5), [175, 0.1875, 0.5], [185, 0.1875, 0.5]);
   randomizeColorStack(at(notes, [470, 502]), [25, 1, 1], [35, 1, 1]);
   setColor(at(notes, 512.5), [0, 0, 0.3125]);
   randomizeColorStack(at(notes, [510, 510.5, 511.5]), [25, 1, 1], [35, 1, 1]);

   setColor(at(notes, 549), [30, 0, 0.75]);
   setGradientColor(between(notes, 575, 582), [0, 0, 0.75], [0, 0, 0.3125]);
   setColor(at(notes, [547.5, 574, 574.5]), [0, 0, 0.3125]);
   setColor(at(notes, [575, 577.5, 579.5]), [30, 1, 1]);
   randomizeColor(between(notes, 582, 596), [190, 0.75, 0.75], [200, 0.75, 0.75]);
   setColor(at(notes, 597), [0, 0, 0.625]);
   randomizeColor(between(notes, 598, 611), [0, 0, 0.375], [200, 0, 0.4375]);
   setColor(at(notes, 598), [30, 0.8125, 0.875]);
   setGradientColor(between(notes, 612, 613.5), [0, 0, 0.75], [0, 0, 0.25]);
   setColor(at(notes, 612), [0, 0, 0.875]);

   setColor(at(notes, 614), [30, 1, 1]);
   setGradientColor(between(notes, 615, 622), [280, 0, 0.3125], [200, 0.25, 0.75]);
   setGradientColor(between(notes, 622, 630), [200, 0.25, 0.75], [30, 1, 1]);
   randomizeColorStack(between(notes, 635.5, 636.5), [175, 0.1875, 0.5], [185, 0.1875, 0.5]);
   setGradientColor(between(notes, 638, 641), [0, 0, 0.3125], [0, 0, 0.75]);

   setColor(at(notes, 645), [0, 0, 0.4375]);
   randomizeColorStack(
      between(notes, 454 + 192, 513 + 192),
      [200, 0.875, 0.875],
      [210, 0.875, 0.875],
   );
   setColor(at(notes, 646), [0, 0, 0.75]);
   randomizeColorStack(between(notes, 470 + 192, 478 + 192), [0, 0, 0.6875], [0, 0, 0.75]);
   randomizeColorStack(between(notes, 478 + 192, 482 + 192), [25, 1, 1], [35, 1, 1]);
   setGradientColor(between(notes, 482.5 + 192, 485.5 + 192), [175, 0, 0.375], [185, 0.5, 0.6875]);
   randomizeColorStack(between(notes, 502 + 192, 513 + 192), [0, 0, 0.6875], [0, 0, 0.75]);
   setGradientColor(between(notes, 708.5, 709), [0, 0, 0.75], [0, 0, 0.3125]);
   setColor(at(notes, [706.5, 707.5]), [0, 0, 0.4375]);
   randomizeColorStack(at(notes, [662, 694]), [25, 1, 1], [35, 1, 1]);
   setColor(at(notes, 704.5), [0, 0, 0.3125]);
   randomizeColorStack(at(notes, [510 + 192, 510.5 + 192, 511.5 + 192]), [25, 1, 1], [35, 1, 1]);

   randomizeColor(between(notes, 710, 770), [190, 0.75, 0.75], [200, 0.75, 0.75]);
   setGradientColor(between(notes, 710, 718), [30, 1, 1], [190, 0.75, 0.75]);
   setGradientColor(between(notes, 726, 734), [300, 0, 0.75], [190, 0.75, 0.75]);
   setGradientColor(between(notes, 742, 750), [350, 1, 1], [190, 0.75, 0.75]);
   setGradientColor(between(notes, 758, 766), [30, 0, 0.75], [190, 0.75, 0.75]);
   setGradientColor(between(notes, 766, 769), [190, 1, 0.75], [190, 0, 0.375]);
   setColor(at(notes, 769.5), [0, 0, 0.875]);
   setColor(between(notes, 770, 772), [0, 0, 0.5]);
   setGradientColor(between(notes, 772, 773.5), [0, 0, 0.5], [0, 0, 1]);
   setColor(at(notes, 789), [0, 0, 0.3125]);
   randomizeColor(between(notes, 790, 798), [0, 0, 0.625], [0, 0, 0.75]);
   randomizeColor(between(notes, 798, 802), [190, 0.75, 0.75], [200, 0.75, 0.75]);
   setGradientColor(between(notes, 802, 805.5), [190, 0.75, 0.75], [200, 0, 0.375]);
   setGradientColor(between(notes, 806, 822), [30, 1, 1], [390, 1, 1]);
   setColor(at(notes, [830, 833.5]), [0, 0, 0.875]);
   randomizeColor(between(notes, 837, 894), [190, 0.75, 0.75], [200, 0.75, 0.75]);
   setGradientColor(between(notes, 868, 870), [190, 0, 0.375], [200, 0, 0.75]);

   setColor(at(notes, 645 + 256), [0, 0, 0.4375]);
   randomizeColorStack(
      between(notes, 454 + 448, 513 + 448),
      [200, 0.875, 0.875],
      [210, 0.875, 0.875],
   );
   setColor(at(notes, 646 + 256), [0, 0, 0.75]);
   randomizeColorStack(between(notes, 470 + 448, 478 + 448), [0, 0, 0.6875], [0, 0, 0.75]);
   randomizeColorStack(between(notes, 478 + 448, 482 + 448), [25, 1, 1], [35, 1, 1]);
   setGradientColor(between(notes, 482.5 + 448, 485.5 + 448), [175, 0, 0.375], [185, 0.5, 0.6875]);
   randomizeColorStack(between(notes, 502 + 448, 513 + 448), [0, 0, 0.6875], [0, 0, 0.75]);
   setGradientColor(between(notes, 708.5 + 256, 709 + 256), [0, 0, 0.75], [0, 0, 0.3125]);
   setColor(at(notes, [706.5 + 256, 707.5 + 256]), [0, 0, 0.4375]);
   randomizeColorStack(at(notes, [662 + 256, 694 + 256]), [25, 1, 1], [35, 1, 1]);
   setColor(at(notes, 704.5 + 256), [0, 0, 0.3125]);
   randomizeColorStack(at(notes, [510 + 448, 510.5 + 448, 511.5 + 448]), [25, 1, 1], [35, 1, 1]);

   setColor(at(notes, 1034), [0, 0, 0.75]);

   for (const tht of towerHitTiming) {
      setColor(
         where(at(notes, tht[0]), { include: { _lineLayer: tht[1] ? 0 : 2 } }),
         [0, 0, 0.375],
      );
      setColor(where(at(notes, tht[0]), { include: { _lineLayer: 1 } }), [0, 0, 0.625]);
      setColor(where(at(notes, tht[0]), { include: { _lineLayer: tht[1] ? 2 : 0 } }), [0, 0, 1]);
   }

   const bombs = where(notes, { include: { _type: 3 } });
   randomizeColor(bombs, [0, 0, 0.6875], [0, 0, 0.75]);
   setGradientColor(
      where(between(bombs, 834, 837), { include: { _lineIndex: 0 } }),
      [180, 0, 0.375],
      [180, 0, 1],
   );
   setGradientColor(
      where(between(bombs, 834, 837), { include: { _lineIndex: 1 } }),
      [195, 0, 1],
      [195, 0, 0.375],
   );
   setGradientColor(
      where(between(bombs, 834, 837), { include: { _lineIndex: 2 } }),
      [210, 0, 0.375],
      [210, 0, 1],
   );
   setGradientColor(
      where(between(bombs, 834, 837), { include: { _lineIndex: 3 } }),
      [225, 0, 1],
      [225, 0, 0.375],
   );

   return;
}

module.exports =
   /** @type {Main} */
   ({
      name,
      params,
      run,
      errorCheck,
   });
