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
   v2RandomizeColor: randomizeColor,
} = require('./library/helpers');

const name = 'werewolf howls.';
const errorCheck = false;
const params = {};

/**
 * @param {ColorArray} cArr
 * @param {number} mult
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

/** @type ColorArray */
const dColorLeft = [0, 0.92, 0.78, 1];
/** @type ColorArray */
const dColorRight = [203, 0.81, 0.81, 1];
/** @type ColorArray */
const noirColorLeft = [0, 0, 0.28, 1];
/** @type ColorArray */
const noirColorRight = [203, 0, 0.62, 1];

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
         n._customData = { _color: [0, 2, 0] };
      }
      if (n._type === 1) {
         n._customData = { _color: [0, 2, 0] };
      }
      if (n._type === 3) {
         n._cutDirection = 8;
      }
   });
   walls.forEach((w) => {
      if (w._type === 0) {
         w._customData = { _color: [0, 0, 2] };
      }
      if (w._type === 1) {
         w._customData = { _color: [0, 2, 2] };
      }
   });
   const leftNotes = where(notes, { include: { _type: 0 } });
   const rightNotes = where(notes, { include: { _type: 1 } });
   const bombNotes = where(notes, { include: { _type: 3 } });
   //#region note
   setColor(between(leftNotes, 32, 36), noirColorLeft);
   setColor(between(rightNotes, 32, 36), noirColorRight);
   setGradientColor(between(leftNotes, 34, 36), noirColorLeft, dColorLeft);
   setGradientColor(
      between(rightNotes, 34, 36),
      noirColorRight,
      multiplyColor(noirColorRight, 1.25),
   );
   setGradientColor(
      between(leftNotes, 36, 36 + 1 / 24),
      multiplyColor(dColorLeft, 1.5),
      dColorLeft,
   );
   setGradientColor(
      between(rightNotes, 36, 36 + 1 / 24),
      multiplyColor(noirColorRight, 1.5),
      noirColorRight,
   );
   setColor(between(leftNotes, 40, 64), dColorLeft);
   setColor(between(rightNotes, 40, 64), noirColorRight);
   setGradientColor(between(leftNotes, 62, 64), dColorLeft, multiplyColor(dColorLeft, 1.5));
   setGradientColor(
      between(rightNotes, 62, 64),
      noirColorRight,
      multiplyColor(noirColorRight, 1.5),
   );
   setColor(between(leftNotes, 67, 68), multiplyColor(dColorLeft, 1.5));
   setColor(between(rightNotes, 67, 68), multiplyColor(noirColorRight, 1.5));
   setColor(between(leftNotes, 68, 164), dColorLeft);
   setColor(between(rightNotes, 68, 164), noirColorRight);
   setGradientColor(
      between(rightNotes, 64, 64 + 1 / 24),
      multiplyColor(noirColorRight, 1.25),
      noirColorRight,
   );
   setGradientColor(between(leftNotes, 124, 131), dColorLeft, multiplyColor(dColorLeft, 0.625));
   setGradientColor(
      between(rightNotes, 124, 131),
      noirColorRight,
      multiplyColor(noirColorRight, 0.625),
   );
   setColor(between(leftNotes, 143, 148), noirColorLeft);
   setColor(between(rightNotes, 143, 148), noirColorRight);
   setGradientColor(between(leftNotes, 148, 164), dColorLeft, multiplyColor(dColorLeft, 1.5));
   setGradientColor(
      between(rightNotes, 148, 164),
      noirColorRight,
      multiplyColor(noirColorRight, 1.5),
   );
   setGradientColor(between(leftNotes, 164, 164 + 1 / 24), dColorLeft, noirColorLeft);
   setGradientColor(
      between(rightNotes, 164, 164 + 1 / 24),
      multiplyColor(noirColorRight, 1.25),
      noirColorRight,
   );
   setColor(between(leftNotes, 166, 189), noirColorLeft);
   setColor(between(rightNotes, 166, 189), noirColorRight);
   setGradientColor(
      between(leftNotes, 190, 192),
      noirColorLeft,
      multiplyColor(noirColorLeft, 1.125),
   );
   setGradientColor(
      between(rightNotes, 190, 192),
      noirColorRight,
      multiplyColor(noirColorRight, 1.5),
   );
   setGradientColor(between(leftNotes, 192, 196), noirColorLeft, noirColorLeft);
   setGradientColor(
      between(rightNotes, 192, 196),
      multiplyColor(noirColorRight, 1.5),
      noirColorRight,
   );
   setColor(between(leftNotes, 196, 260), dColorLeft);
   setColor(between(rightNotes, 196, 260), noirColorRight);
   setGradientColor(between(leftNotes, 260, 260 + 1 / 24), dColorLeft, noirColorLeft);
   setGradientColor(
      between(rightNotes, 260, 260 + 1 / 24),
      multiplyColor(noirColorRight, 1.5),
      noirColorRight,
   );
   setColor(between(leftNotes, 264, 280), noirColorLeft);
   setColor(between(rightNotes, 264, 280), noirColorRight);
   setGradientColor(
      between(leftNotes, 280, 288),
      noirColorLeft,
      multiplyColor(noirColorLeft, 1.125),
   );
   setGradientColor(
      between(rightNotes, 280, 288),
      noirColorRight,
      multiplyColor(noirColorRight, 1.5),
   );
   setColor(between(leftNotes, 288, 290), noirColorLeft);
   setColor(between(rightNotes, 288, 290), noirColorRight);
   setGradientColor(
      between(leftNotes, 290, 292),
      noirColorLeft,
      multiplyColor(noirColorLeft, 1.125),
   );
   setGradientColor(
      between(rightNotes, 290, 292),
      noirColorRight,
      multiplyColor(noirColorRight, 1.5),
   );
   setColor(between(leftNotes, 292, 388), dColorLeft);
   setColor(between(rightNotes, 292, 388), dColorRight);
   setColor(between(leftNotes, 327.5, 330.5), noirColorLeft);
   setColor(between(rightNotes, 327.5, 330.5), noirColorRight);
   setGradientColor(between(leftNotes, 331, 332), noirColorLeft, dColorLeft);
   setGradientColor(between(rightNotes, 331, 332), noirColorRight, dColorRight);
   setGradientColor(between(leftNotes, 386, 388), dColorLeft, dColorLeft);
   setGradientColor(between(rightNotes, 386, 388), dColorRight, noirColorRight);
   setColor(between(leftNotes, 388, 419), dColorLeft);
   setColor(between(rightNotes, 388, 419), noirColorRight);
   setColor(between(leftNotes, 399, 403), noirColorLeft);
   setColor(between(rightNotes, 399, 403), noirColorRight);
   setGradientColor(between(leftNotes, 404, 419), dColorLeft, multiplyColor(dColorLeft, 1.5));
   setGradientColor(
      between(rightNotes, 404, 419),
      noirColorRight,
      multiplyColor(noirColorRight, 1.5),
   );
   setGradientColor(
      between(leftNotes, 419, 419 + 1 / 24),
      multiplyColor(dColorLeft, 1.5),
      dColorLeft,
   );
   setGradientColor(
      between(rightNotes, 419, 419 + 1 / 24),
      multiplyColor(noirColorRight, 1.5),
      noirColorRight,
   );
   //#endregion
   //#region bomb
   setColor(between(bombNotes, 0, 434), [120, 0, 2]);
   randomizeColor(between(bombNotes, 33.5, 34), [0, 0, 0.375], [0, 0, 0.75]);
   setGradientColor(between(bombNotes, 36.5, 38), [60, 0, 1], [60, 0, 0.25]);
   randomizeColor(between(bombNotes, 42.5, 43), [0, 0, 0.375], [0, 0, 0.75]);
   randomizeColor(between(bombNotes, 64, 67), [0, 0, 0.375], [0, 0, 0.75]);
   setGradientColor(between(bombNotes, 121.25, 122.25), [30, 0.875, 1], [45, 0, 0.75]);
   setColor(between(bombNotes, 135, 135), [0, 0, 0.375]);
   setColor(between(bombNotes, 151, 151), [0, 0, 0.375]);
   setGradientColor(between(bombNotes, 146, 146.5), [0, 0, 0.375], [0, 0, 0.5]);
   randomizeColor(between(bombNotes, 166.5, 170), [0, 0, 0.375], [30, 0.25, 0.75]);
   setColor(between(bombNotes, 170, 187), [0, 0, 0.625]);
   setGradientColor(between(bombNotes, 190, 192), [0, 0, 0.375], [0, 0, 1]);
   randomizeColor(between(bombNotes, 193, 194), [0, 0, 0.375], [0, 0, 0.75]);
   setColor(between(bombNotes, 194, 194.5), [26, 1, 0.87]);
   for (let i = 0; i < 8; i++) {
      setGradientColor(between(bombNotes, 228 + i * 4, 228.5 + i * 4), [0, 0, 0.375], [0, 0, 0.5]);
   }
   randomizeColor(between(bombNotes, 257.5, 258), [0, 0, 0.375], [0, 0, 0.75]);
   setGradientColor(between(bombNotes, 258.5, 259.25), [300, 0, 0.75], [330, 1, 1]);
   setGradientColor(between(bombNotes, 259.25, 260 - 1 / 8), [330, 1, 1], [400, 1, 1]);
   setGradientColor(between(bombNotes, 260, 263), [60, 0, 1], [60, 0, 0.25]);
   setColor(between(bombNotes, 288, 288), [0, 0, 0.5]);
   setColor(between(bombNotes, 291, 291), [0, 0, 0.75]);
   setColor(between(bombNotes, 322, 324), [0, 0, 0.5]);
   setGradientColor(between(bombNotes, 354, 356), [0, 0, 0.375], [0, 0, 1]);
   setColor(between(bombNotes, 391, 391), [0, 0, 0.375]);
   setGradientColor(between(bombNotes, 402, 402.5), [0, 0, 0.375], [0, 0, 0.5]);
   setColor(between(bombNotes, 407, 407), [0, 0, 0.375]);
   //#endregion
   //#region wall
   const centerWalls = walls.filter((w) => w._lineIndex === 1 || w._lineIndex === 2);
   const crouchWalls = walls.filter((w) => w._type === 1);
   setColor(between(walls, 2, 4), [0, 0, 0.25]);
   randomizeColor(between(walls, 4, 30), [240, 0, 0.25], [240, 0.25, 0.5]);
   setColor(between(centerWalls, 4, 30), [0, 0, 0.75]);
   setGradientColor(between(walls, 30, 31), [0, 0, 0.25], [0, 0, 0.75]);
   setGradientColor(between(walls, 36, 36.5), [0, 0, 1], [0, 0, 0.625]);
   randomizeColor(between(walls, 36.5, 38), [0, 0, 0.5], [0, 0.75, 1]);
   setGradientColor(between(walls, 44, 45), [0, 0, 1], [0, 0, 0.375]);
   setGradientColor(between(walls, 45, 46), [0, 0, 1], [0, 0, 0.375]);
   setGradientColor(between(walls, 51, 52), [0, 0, 1], [0, 0, 0.375]);
   setGradientColor(between(walls, 53, 54), [0, 0, 1], [0, 0, 0.375]);
   setGradientColor(between(walls, 55, 56), [0, 0, 1], [0, 0, 0.375]);
   setGradientColor(between(walls, 57, 58), [0, 0, 1], [0, 0, 0.375]);
   setGradientColor(between(walls, 58.5, 60), [0, 0, 1], [0, 0, 0.625]);
   setGradientColor(between(walls, 60, 62), [0, 0, 1], [0, 0, 0.375]);
   setGradientColor(between(walls, 61, 63), [0, 0, 1], [0, 0, 0.375]);
   setColor(between(walls, 63, 64), [30, 1, 1]);
   setColor(between(walls, 64, 67), [0, 1, 1]);
   setGradientColor(between(walls, 93, 96), [270, 1, 1], [330, 1, 1]);
   setColor(between(walls, 128, 128), [0, 0, 0.375]);
   setGradientColor(between(walls, 143, 144), [0, 0, 1], [0, 0, 1]);
   setColor(between(walls, 144, 145), [0, 0, 0.375]);
   setGradientColor(between(walls, 146, 147), [0, 0, 1], [0, 0, 0.375]);
   setGradientColor(between(walls, 164, 167), [0, 0, 1.5], [0, 0, 0.375]);
   randomizeColor(between(walls, 168, 188), [0, 0, 0.25], [240, 0.25, 0.5]);
   setGradientColor(between(walls, 192, 192.5), [0, 0, 0.5], [0, 0, 0.25]);
   setColor(between(walls, 194, 195), [0, 0, 0.75]);
   setGradientColor(between(walls, 256, 256.5), [0, 0, 0.5], [0, 0, 0.25]);
   setGradientColor(between(walls, 260, 262), [0, 0, 0.75], [0, 0, 0.25]);
   setColor(between(centerWalls, 260, 260.75), [0, 0, 0.75]);
   randomizeColor(between(walls, 262, 280), [0, 0, 0.25], [240, 0.25, 0.5]);
   setGradientColor(between(walls, 280, 288), [0, 0, 0.25], [0, 0, 1]);
   setColor(between(walls, 288, 288), [0, 0, 0.5]);
   setGradientColor(between(walls, 295.5 + 1 / 8, 298.5 + 1 / 8), [270, 1, 1], [330, 1, 1]);
   setGradientColor(between(walls, 295.5, 298.5), [270, 1, 1], [330, 1, 1]);
   setGradientColor(between(walls, 327.5 + 1 / 8, 330.5 + 1 / 8), [0, 0, 0.5], [0, 0, 0.75]);
   setGradientColor(between(crouchWalls, 327.5 + 1 / 8, 330.5 + 1 / 8), [270, 1, 1], [330, 1, 1]);
   setGradientColor(between(walls, 327.5, 330.5), [0, 0, 0.5], [0, 0, 0.75]);
   setGradientColor(between(crouchWalls, 327.5, 330.5), [270, 1, 1], [330, 1, 1]);
   setGradientColor(between(walls, 353.5, 354), [0, 0, 0.5], [0, 0, 0.25]);
   setGradientColor(between(walls, 399, 400), [0, 0, 1], [0, 0, 1]);
   setColor(between(walls, 400, 401), [0, 0, 0.375]);
   setGradientColor(between(walls, 402, 403), [0, 0, 1], [0, 0, 0.375]);
   setGradientColor(between(walls, 419, 424), [0, 0, 1.5], [0, 0, 0.375]);
   setColor(between(walls, 424, 434), [0, 0, 0.25]);
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
