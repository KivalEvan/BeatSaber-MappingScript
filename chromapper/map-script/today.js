// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV2<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 * @typedef {import('./library/types/colors').ColorArray} ColorArray
 */

const {
   between,
   where,
   v2SetColor: setColor,
   v2SetGradientColor: setGradientColor,
   at,
} = require('./library/helpers.js');
const { HsvaToRgba } = require('./library/colors.js');

const name = 'TODAY';
const errorCheck = false;
const params = {};

/**
 * @param {ColorArray} cArr
 * @param {number} [mult=1]
 * @returns {ColorArray}
 */
function multiplyColor(cArr, mult = 1) {
   return /** @type {ColorArray} */ (
      cArr.map((c, i) => {
         if (i === 2) {
            // @ts-ignore
            return c * mult;
         }
         return c;
      })
   );
}

/**
 * @param {ColorArray} cArr
 * @param {number} [mult=1]
 * @returns {ColorArray}
 */
function saturateColor(cArr, mult = 1) {
   return /** @type {ColorArray} */ (
      cArr.map((c, i) => {
         if (i === 1) {
            // @ts-ignore
            return c * mult;
         }
         return c;
      })
   );
}

/** @type {ColorArray} */
const dColorLeft = [144, 0, 0.625];
/** @type {ColorArray} */
const dColorRight = [220, 0.45, 0.62];
/** @type {ColorArray} */
const dObstacleColor = [249, 0.27, 0.81];
/** @type {ColorArray} */
const colorGreen = [144, 0.45, 0.69];

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
   bombs,
   arcs,
   chains,
) {
   notes.forEach((n) => {
      if (n._type === 0) {
         n._customData = { _color: HsvaToRgba(dColorLeft) };
      }
      if (n._type === 1) {
         n._customData = { _color: HsvaToRgba(dColorRight) };
      }
   });
   const leftNotes = where(notes, { include: { _type: 0 } });
   const rightNotes = where(notes, { include: { _type: 1 } });
   const bombNotes = where(notes, { include: { _type: 3 } });
   const fullWalls = where(walls, { include: { _type: 0 } });
   const crouchWalls = where(walls, { include: { _type: 1 } });

   //#region The First
   //#region 1st part
   setColor(at(bombNotes, 38), [0, 0, 0.25]);
   setColor(between(leftNotes, 6, 38), multiplyColor(dColorLeft, 0.75));
   setColor(between(rightNotes, 6, 38), saturateColor(multiplyColor(dColorRight, 0.75), 0.5));
   setGradientColor(between(leftNotes, 38, 70), multiplyColor(dColorLeft, 0.75), dColorLeft);
   setGradientColor(
      between(rightNotes, 38, 70),
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
      dColorRight,
   );
   setGradientColor(between(leftNotes, 102, 134), dColorLeft, colorGreen);
   setColor(between(leftNotes, 134, 162), colorGreen);
   setGradientColor(between(rightNotes, 102, 162), dColorRight, dColorRight);
   setGradientColor(between(crouchWalls, 102, 162), [0, 0, 0.25], [0, 0, 0.75]);
   setGradientColor(between(walls, 162, 166), [0, 0, 0.1875], dObstacleColor);
   setGradientColor(between(bombNotes, 163, 165), [0, 0, 0.1875], [0, 0, 0.5]);
   //#endregion
   //#region 2nd part
   for (let i = 0; i < 4; i++) {
      setGradientColor(
         between(leftNotes, 166 + i * 16, 169 + i * 16),
         multiplyColor([287, 0.82, 0.69], 1.3),
         [287, 0, 0.69],
      );
      setGradientColor(
         between(rightNotes, 166 + i * 16, 169 + i * 16),
         [216, 0.71, 0.87],
         dColorRight,
      );
      setGradientColor(
         between(leftNotes, 169 + i * 16, 173 + i * 16),
         multiplyColor([348, 1, 0.62], 1.4),
         [348, 0, 0.62],
      );
      setGradientColor(
         between(rightNotes, 169 + i * 16, 173 + i * 16),
         [210, 0.66, 0.75],
         dColorRight,
      );
      setGradientColor(
         between(leftNotes, 178 + i * 16, 180 + i * 16),
         multiplyColor(dColorLeft, 1.2),
         dColorLeft,
      );
      setGradientColor(
         between(rightNotes, 178 + i * 16, 180 + i * 16),
         multiplyColor(dColorRight, 1.2),
         dColorRight,
      );
   }
   //#endregion
   //#region 3rd part
   setGradientColor(
      between(leftNotes, 230, 230 + 1 / 24),
      [350, 0.86, 0.87],
      multiplyColor([350, 0, 0.625], 0.75),
   );
   setGradientColor(
      between(rightNotes, 230, 230 + 1 / 24),
      [210, 0.66, 0.75],
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
   );
   setGradientColor(between(walls, 230, 234), [0, 0, 1.5], [0, 0, 0.1875]);
   setColor(at(crouchWalls, 231), [0, 0, 0.25]);
   setColor(between(crouchWalls, 234, 291), [0, 0, 0.25]);
   setColor(at(fullWalls, 292.25), [0, 0, 0.5]);
   setColor(at(leftNotes, 262), multiplyColor(dColorLeft, 0.75));
   setColor(at(rightNotes, 262), saturateColor(multiplyColor(dColorRight, 0.75), 0.5));
   setGradientColor(between(bombNotes, 292, 292.5), [0, 0, 0.1875], [0, 0, 0.25]);
   //#endregion
   //#region 4th part
   setColor(between(leftNotes, 294, 326), [332, 0.87, 0.94]);
   setColor(between(rightNotes, 294, 326), [260, 0.75, 1]);
   setColor(between(walls, 294, 358), [0, 0, 0.75]);
   setGradientColor(
      between(leftNotes, 326, 358),
      [332, 0.87, 0.94],
      multiplyColor([332, 0.87, 0.94], 1.25),
   );
   setGradientColor(
      between(rightNotes, 326, 358),
      [260, 0.75, 1],
      multiplyColor([260, 0.75, 1], 1.25),
   );
   //#endregion
   //#endregion

   //#region TODAY
   //#region slow part
   setGradientColor(
      between(leftNotes, 358, 374),
      multiplyColor([332, 0.87, 0.94], 1.25),
      [332, 0, 0.625],
   );
   setGradientColor(
      between(rightNotes, 358, 374),
      multiplyColor([260, 0.75, 1], 1.25),
      dColorRight,
   );
   setGradientColor(between(leftNotes, 422, 430), multiplyColor(dColorLeft, 1.4), dColorLeft);
   setGradientColor(between(rightNotes, 422, 430), multiplyColor(dColorRight, 1.4), dColorRight);
   setGradientColor(between(leftNotes, 432, 436), multiplyColor(dColorLeft, 1.2), dColorLeft);
   setGradientColor(between(rightNotes, 432, 436), multiplyColor(dColorRight, 1.2), dColorRight);
   setGradientColor(between(leftNotes, 448, 452), multiplyColor(dColorLeft, 1.2), dColorLeft);
   setGradientColor(between(rightNotes, 448, 452), multiplyColor(dColorRight, 1.2), dColorRight);
   setGradientColor(between(leftNotes, 454, 458), multiplyColor(dColorLeft, 1.2), dColorLeft);
   setGradientColor(between(rightNotes, 454, 458), multiplyColor(dColorRight, 1.2), dColorRight);
   setGradientColor(between(leftNotes, 464, 468), multiplyColor(dColorLeft, 1.2), dColorLeft);
   setGradientColor(between(rightNotes, 464, 468), multiplyColor(dColorRight, 1.2), dColorRight);
   setGradientColor(between(leftNotes, 480, 484), multiplyColor(dColorLeft, 1.2), dColorLeft);
   setGradientColor(between(rightNotes, 480, 484), multiplyColor(dColorRight, 1.2), dColorRight);
   setGradientColor(between(leftNotes, 483, 486), dColorLeft, multiplyColor(dColorLeft, 0.75));
   setGradientColor(
      between(rightNotes, 483, 486),
      dColorRight,
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
   );
   setColor(at(walls, 485.5), [0, 0, 0.25]);
   //#endregion
   //#region build
   setColor(between(leftNotes, 486, 517), multiplyColor(dColorLeft, 0.75));
   setColor(between(rightNotes, 486, 517), saturateColor(multiplyColor(dColorRight, 0.75), 0.5));
   setGradientColor(
      between(leftNotes, 494, 498),
      multiplyColor(dColorLeft, 0.75),
      multiplyColor(dColorLeft, 0.875),
   );
   setGradientColor(
      between(rightNotes, 494, 498),
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
      saturateColor(multiplyColor(dColorRight, 0.875), 0.75),
   );
   setGradientColor(
      between(leftNotes, 498, 500),
      multiplyColor(dColorLeft, 0.875),
      multiplyColor(dColorLeft, 0.75),
   );
   setGradientColor(
      between(rightNotes, 498, 500),
      saturateColor(multiplyColor(dColorRight, 0.875), 0.75),
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
   );
   setGradientColor(between(leftNotes, 504, 506), multiplyColor(dColorLeft, 0.75), dColorLeft);
   setGradientColor(
      between(rightNotes, 504, 506),
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
      dColorRight,
   );
   setColor(between(leftNotes, 506, 508), dColorLeft);
   setColor(between(rightNotes, 506, 508), dColorRight);
   setGradientColor(between(leftNotes, 508, 512), dColorLeft, multiplyColor(dColorLeft, 0.75));
   setGradientColor(
      between(rightNotes, 508, 512),
      dColorRight,
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
   );
   setGradientColor(
      between(rightNotes, 515, 517),
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
      dColorRight,
   );
   setGradientColor(between(leftNotes, 515, 518), multiplyColor(dColorLeft, 0.75), colorGreen);
   setColor(between(leftNotes, 518, 534), colorGreen);
   setGradientColor(between(leftNotes, 532, 534), colorGreen, saturateColor(colorGreen, 1.5));
   setGradientColor(
      between(rightNotes, 532, 534),
      dColorRight,
      saturateColor(multiplyColor(dColorRight, 1.2), 1.5),
   );
   setGradientColor(
      between(leftNotes, 534, 542),
      saturateColor(colorGreen, 1.5),
      multiplyColor(dColorLeft, 1.2),
   );
   setGradientColor(
      between(rightNotes, 534, 542),
      saturateColor(multiplyColor(dColorRight, 1.2), 1.5),
      multiplyColor(dColorRight, 1.2),
   );
   setGradientColor(
      between(leftNotes, 542, 550),
      multiplyColor(dColorLeft, 1.2),
      multiplyColor(dColorLeft, 1.5),
   );
   setGradientColor(
      between(rightNotes, 542, 550),
      multiplyColor(dColorRight, 1.2),
      multiplyColor(dColorRight, 1.5),
   );
   setColor(at(leftNotes, 550), multiplyColor(dColorLeft, 0.75));
   setColor(at(rightNotes, 550), saturateColor(multiplyColor(dColorRight, 0.75), 0.5));
   setColor(at(walls, 550), [0, 0, 0.25]);
   setGradientColor(between(bombNotes, 554, 556), [0, 0, 0.1875], [0, 0, 0.5]);
   //#endregion
   //#region 1st chorus
   setGradientColor(
      between(rightNotes, 556, 558),
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
      dColorRight,
   );
   setGradientColor(between(leftNotes, 558, 562), multiplyColor(dColorLeft, 1.4), dColorLeft);
   setGradientColor(between(rightNotes, 558, 562), multiplyColor(dColorRight, 1.4), dColorRight);
   setGradientColor(between(leftNotes, 564, 570), dColorLeft, multiplyColor(dColorLeft, 1.2));
   setGradientColor(between(rightNotes, 564, 570), dColorRight, multiplyColor(dColorRight, 1.2));
   setGradientColor(between(leftNotes, 570, 572), multiplyColor(dColorLeft, 1.2), dColorLeft);
   setGradientColor(between(rightNotes, 570, 572), multiplyColor(dColorRight, 1.2), dColorRight);
   setGradientColor(between(leftNotes, 576, 582), [330, 0, 0.625], [330, 1, 1]);
   setGradientColor(between(rightNotes, 576, 582), dColorRight, [220, 0.75, 1]);
   setColor(between(leftNotes, 582, 586), [330, 1, 1]);
   setColor(between(rightNotes, 582, 586), [220, 0.75, 1]);
   setGradientColor(between(leftNotes, 586, 590), [330, 1, 1], [330, 0, 0.625]);
   setGradientColor(between(rightNotes, 586, 590), [220, 0.75, 1], dColorRight);
   setGradientColor(between(leftNotes, 598, 602), dColorLeft, multiplyColor(dColorLeft, 1.2));
   setGradientColor(between(rightNotes, 598, 602), dColorRight, multiplyColor(dColorRight, 1.2));
   setGradientColor(between(leftNotes, 602, 604), multiplyColor(dColorLeft, 1.2), dColorLeft);
   setGradientColor(between(rightNotes, 602, 604), multiplyColor(dColorRight, 1.2), dColorRight);
   setGradientColor(between(leftNotes, 612, 622), dColorLeft, multiplyColor(dColorLeft, 0.75));
   setGradientColor(
      between(rightNotes, 612, 622),
      dColorRight,
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
   );
   setGradientColor(between(walls, 626, 630), [0, 0, 0.1875], [0, 0, 1]);
   setGradientColor(between(bombNotes, 627, 629), [0, 0, 0.1875], [0, 0, 0.5]);
   //#endregion
   //#region idk what this is
   setColor(between(leftNotes, 630, 694), colorGreen);
   setGradientColor(
      between(leftNotes, 651, 654),
      colorGreen,
      multiplyColor(saturateColor(colorGreen, 1.5), 1.25),
   );
   setGradientColor(
      between(rightNotes, 651, 654),
      dColorRight,
      saturateColor(multiplyColor(dColorRight, 1.25), 1.5),
   );
   setGradientColor(
      between(leftNotes, 654, 661),
      multiplyColor(saturateColor(colorGreen, 1.5), 1.25),
      colorGreen,
   );
   setGradientColor(
      between(rightNotes, 654, 661),
      saturateColor(multiplyColor(dColorRight, 1.25), 1.5),
      dColorRight,
   );
   setGradientColor(
      between(leftNotes, 683, 686),
      colorGreen,
      multiplyColor(saturateColor(colorGreen, 1.5), 1.25),
   );
   setGradientColor(
      between(rightNotes, 683, 686),
      dColorRight,
      saturateColor(multiplyColor(dColorRight, 1.25), 1.5),
   );
   setGradientColor(
      between(leftNotes, 686, 690),
      multiplyColor(saturateColor(colorGreen, 1.5), 1.25),
      colorGreen,
   );
   setGradientColor(
      between(rightNotes, 686, 690),
      saturateColor(multiplyColor(dColorRight, 1.25), 1.5),
      dColorRight,
   );
   setGradientColor(between(leftNotes, 690, 694), colorGreen, multiplyColor(dColorLeft, 0.75));
   setGradientColor(
      between(rightNotes, 690, 694),
      dColorRight,
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
   );
   setColor(at(walls, 693.5), [0, 0, 0.5]);
   //#endregion
   //#region yet another build
   setColor(between(leftNotes, 694, 722), multiplyColor(dColorLeft, 0.75));
   setColor(between(rightNotes, 694, 722), saturateColor(multiplyColor(dColorRight, 0.75), 0.5));
   setGradientColor(
      between(leftNotes, 700, 704),
      multiplyColor(dColorLeft, 0.75),
      multiplyColor(dColorLeft, 0.875),
   );
   setGradientColor(
      between(rightNotes, 700, 704),
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
      saturateColor(multiplyColor(dColorRight, 0.875), 0.75),
   );
   setGradientColor(
      between(leftNotes, 704, 706),
      multiplyColor(dColorLeft, 0.875),
      multiplyColor(dColorLeft, 0.75),
   );
   setGradientColor(
      between(rightNotes, 704, 706),
      saturateColor(multiplyColor(dColorRight, 0.875), 0.75),
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
   );
   setGradientColor(between(leftNotes, 712, 714), multiplyColor(dColorLeft, 0.75), dColorLeft);
   setGradientColor(
      between(rightNotes, 712, 714),
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
      dColorRight,
   );
   setColor(between(leftNotes, 714, 716), dColorLeft);
   setColor(between(rightNotes, 714, 716), dColorRight);
   setGradientColor(between(leftNotes, 716, 720), dColorLeft, multiplyColor(dColorLeft, 0.75));
   setGradientColor(
      between(rightNotes, 716, 720),
      dColorRight,
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
   );
   setGradientColor(between(leftNotes, 724, 726), multiplyColor(dColorLeft, 0.75), dColorLeft);
   setGradientColor(
      between(leftNotes, 742, 750),
      multiplyColor(dColorLeft, 1.5),
      multiplyColor(dColorLeft, 1.2),
   );
   setGradientColor(
      between(rightNotes, 742, 750),
      multiplyColor(dColorRight, 1.5),
      multiplyColor(dColorRight, 1.2),
   );
   setGradientColor(
      between(leftNotes, 750, 758),
      multiplyColor(dColorLeft, 1.2),
      multiplyColor(dColorLeft, 1.5),
   );
   setGradientColor(
      between(rightNotes, 750, 758),
      multiplyColor(dColorRight, 1.2),
      multiplyColor(dColorRight, 1.5),
   );
   setColor(at(leftNotes, 758), multiplyColor(dColorLeft, 0.75));
   setColor(at(rightNotes, 758), saturateColor(multiplyColor(dColorRight, 0.75), 0.5));
   setColor(at(walls, 758), [0, 0, 0.25]);
   setColor(at(bombNotes, 762), [0, 0, 0.1875]);
   //#endregion
   //#region 2nd chorus
   setGradientColor(between(leftNotes, 764, 766), multiplyColor(dColorLeft, 0.75), dColorLeft);
   setGradientColor(between(leftNotes, 766, 770), multiplyColor(dColorLeft, 1.4), dColorLeft);
   setGradientColor(between(rightNotes, 766, 770), multiplyColor(dColorRight, 1.4), dColorRight);
   setGradientColor(between(leftNotes, 772, 778), dColorLeft, multiplyColor(dColorLeft, 1.2));
   setGradientColor(between(rightNotes, 772, 778), dColorRight, multiplyColor(dColorRight, 1.2));
   setGradientColor(between(leftNotes, 778, 780), multiplyColor(dColorLeft, 1.2), dColorLeft);
   setGradientColor(between(rightNotes, 778, 780), multiplyColor(dColorRight, 1.2), dColorRight);
   setGradientColor(between(leftNotes, 784, 790), [330, 0, 0.625], [330, 1, 1]);
   setGradientColor(between(rightNotes, 784, 790), dColorRight, [220, 0.75, 1]);
   setGradientColor(between(leftNotes, 804, 810), dColorLeft, multiplyColor(dColorLeft, 1.2));
   setGradientColor(between(rightNotes, 804, 810), dColorRight, multiplyColor(dColorRight, 1.2));
   setColor(between(leftNotes, 790, 794), [330, 1, 1]);
   setColor(between(rightNotes, 790, 794), [220, 0.75, 1]);
   setGradientColor(between(leftNotes, 794, 798), [330, 1, 1], [330, 0, 0.625]);
   setGradientColor(between(rightNotes, 794, 798), [220, 0.75, 1], dColorRight);
   setGradientColor(between(leftNotes, 814, 825), [330, 0, 0.625], [330, 1, 1]);
   setGradientColor(between(rightNotes, 814, 825), dColorRight, [220, 0.75, 1]);
   setGradientColor(between(leftNotes, 825, 830), [330, 1, 1], saturateColor([330, 1, 1], 1.25));
   setGradientColor(
      between(rightNotes, 825, 830),
      [220, 0.75, 1],
      saturateColor([220, 0.75, 1], 1.25),
   );
   //#endregion
   //#region bridge
   setGradientColor(
      between(leftNotes, 830, 838),
      multiplyColor(saturateColor([330, 1, 1], 1.25), 1.25),
      [330, 1, 1],
   );
   setGradientColor(
      between(rightNotes, 830, 838),
      multiplyColor(saturateColor([220, 0.75, 1], 1.25), 1.25),
      [220, 0.75, 1],
   );
   setColor(between(leftNotes, 838, 862), [330, 1, 1]);
   setColor(between(rightNotes, 838, 862), [220, 0.75, 1]);
   setColor(between(leftNotes, 862, 894), [332, 0.87, 0.94]);
   setColor(between(rightNotes, 862, 894), [260, 0.75, 1]);
   setGradientColor(
      between(leftNotes, 862, 870),
      multiplyColor(saturateColor([332, 0.87, 0.94], 1.25), 1.25),
      [332, 0.87, 0.94],
   );
   setGradientColor(
      between(rightNotes, 862, 870),
      multiplyColor(saturateColor([260, 0.75, 1], 1.25), 1.25),
      [260, 0.75, 1],
   );
   setGradientColor(
      between(leftNotes, 878, 886),
      [332, 0.87, 0.94],
      multiplyColor(saturateColor([332, 0.87, 0.94], 1.25), 1.25),
   );
   setGradientColor(
      between(rightNotes, 878, 886),
      [260, 0.75, 1],
      multiplyColor(saturateColor([260, 0.75, 1], 1.25), 1.25),
   );
   setGradientColor(
      between(leftNotes, 886, 894),
      multiplyColor(saturateColor([332, 0.87, 0.94], 1.25), 1.25),
      multiplyColor(saturateColor([330, 1, 1], 0.5), 0.75),
   );
   setGradientColor(
      between(rightNotes, 886, 894),
      multiplyColor(saturateColor([260, 0.75, 1], 1.25), 1.25),
      multiplyColor(saturateColor([220, 0.75, 1], 0.5), 0.75),
   );
   setGradientColor(between(leftNotes, 894, 902), dColorLeft, multiplyColor(dColorLeft, 0.75));
   setGradientColor(
      between(rightNotes, 894, 902),
      dColorRight,
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
   );
   //#endregion
   //#region break
   setColor(at(leftNotes, 902), [350, 0.86, 0.87]);
   setColor(at(rightNotes, 902), [210, 0.66, 0.75]);
   setGradientColor(between(walls, 902, 903), [0, 0, 1.5], [0, 0, 0.1875]);
   setGradientColor(between(walls, 914, 915), [0, 0, 0.75], [0, 0, 0.1875]);
   //#endregion
   //#region soft chorus
   setColor(between(leftNotes, 916, 936), multiplyColor(dColorLeft, 0.75));
   setColor(between(rightNotes, 916, 936), saturateColor(multiplyColor(dColorRight, 0.75), 0.5));
   setGradientColor(
      between(leftNotes, 924, 928),
      multiplyColor(dColorLeft, 0.75),
      multiplyColor(dColorLeft, 0.875),
   );
   setGradientColor(
      between(rightNotes, 924, 928),
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
      saturateColor(multiplyColor(dColorRight, 0.875), 0.75),
   );
   setGradientColor(
      between(leftNotes, 928, 930),
      multiplyColor(dColorLeft, 0.875),
      multiplyColor(dColorLeft, 0.75),
   );
   setGradientColor(
      between(rightNotes, 928, 930),
      saturateColor(multiplyColor(dColorRight, 0.875), 0.75),
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
   );
   setGradientColor(between(leftNotes, 936, 942), multiplyColor(dColorLeft, 0.75), colorGreen);
   setGradientColor(
      between(rightNotes, 936, 942),
      saturateColor(multiplyColor(dColorRight, 0.75), 0.5),
      dColorRight,
   );
   setColor(between(leftNotes, 942, 946), colorGreen);
   setColor(between(rightNotes, 942, 946), dColorRight);
   setGradientColor(between(leftNotes, 950, 958), colorGreen, dColorLeft);
   setGradientColor(between(leftNotes, 966, 974), dColorLeft, multiplyColor(dColorLeft, 1.25));
   setGradientColor(between(rightNotes, 966, 974), dColorRight, multiplyColor(dColorRight, 1.25));
   setColor(at(bombNotes, 979), [0, 0, 0.25]);
   setGradientColor(between(walls, 980, 981), [0, 0, 0.25], [0, 0, 0.5]);
   //#endregion
   //#region final chorus
   setGradientColor(between(rightNotes, 980, 982), dColorRight, [220, 0.75, 1]);
   setColor(between(leftNotes, 982, 1046), [330, 1, 1]);
   setColor(between(rightNotes, 982, 1046), [220, 0.75, 1]);
   setGradientColor(
      between(leftNotes, 982, 990),
      multiplyColor(saturateColor([330, 1, 1], 1.25), 1.25),
      [330, 1, 1],
   );
   setGradientColor(
      between(rightNotes, 982, 990),
      multiplyColor(saturateColor([220, 0.75, 1], 1.25), 1.25),
      [220, 0.75, 1],
   );
   setGradientColor(
      between(leftNotes, 1000, 1006),
      [330, 1, 1],
      multiplyColor(saturateColor([332, 0.87, 0.94], 1.25), 1.25),
   );
   setGradientColor(
      between(rightNotes, 1000, 1006),
      [220, 0.75, 1],
      multiplyColor(saturateColor([260, 0.75, 1], 1.25), 1.25),
   );
   setColor(
      between(leftNotes, 1006, 1010),
      multiplyColor(saturateColor([332, 0.87, 0.94], 1.25), 1.25),
   );
   setColor(
      between(rightNotes, 1006, 1010),
      multiplyColor(saturateColor([260, 0.75, 1], 1.25), 1.25),
   );
   setGradientColor(
      between(leftNotes, 1010, 1014),
      multiplyColor(saturateColor([332, 0.87, 0.94], 1.25), 1.25),
      [330, 1, 1],
   );
   setGradientColor(
      between(rightNotes, 1010, 1014),
      multiplyColor(saturateColor([260, 0.75, 1], 1.25), 1.25),
      [220, 0.75, 1],
   );
   setGradientColor(
      between(leftNotes, 1030, 1038),
      [330, 1, 1],
      multiplyColor(saturateColor([332, 0.87, 0.94], 1.25), 1.25),
   );
   setGradientColor(
      between(rightNotes, 1030, 1038),
      [220, 0.75, 1],
      multiplyColor(saturateColor([260, 0.75, 1], 1.25), 1.25),
   );
   setGradientColor(
      between(leftNotes, 1038, 1042),
      multiplyColor(saturateColor([332, 0.87, 0.94], 1.25), 1.25),
      [330, 1, 1],
   );
   setGradientColor(
      between(rightNotes, 1038, 1042),
      multiplyColor(saturateColor([260, 0.75, 1], 1.25), 1.25),
      [220, 0.75, 1],
   );
   //#endregion
   //#region end bit
   setColor(at(leftNotes, 1046), saturateColor(multiplyColor(dColorLeft, 1.25), 1.5));
   setColor(at(rightNotes, 1046), saturateColor(multiplyColor(dColorRight, 1.25), 1.5));
   setColor(between(walls, 1046, 1090), saturateColor(multiplyColor(dObstacleColor, 0.5), 0.25));
   setGradientColor(
      between(walls, 1046, 1062),
      [0, 0, 1.5],
      saturateColor(multiplyColor(dObstacleColor, 0.5), 0.25),
   );
   //#endregion
   //#endregion
}

module.exports =
   /** @type {Main} */
   ({
      name,
      params,
      run,
      errorCheck,
   });
