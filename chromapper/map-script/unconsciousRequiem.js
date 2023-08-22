// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV2<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 * @typedef {import('./library/types/colors').ColorArray} ColorArray
 */

const {
   at,
   between,
   where,
   v2SetColor: setColor,
   v2SetGradientColor: setGradientColor,
   v2RandomizeColor: randomizeColor,
} = require('./library/helpers');
const { HsvaToRgba } = require('./library/colors');

const name = 'Unconscious Requiem';
const errorCheck = false;
const params = {};

//#endregion

/** @type {ColorArray} */
const urColorLeft = [290, 0, 0.3125];
/** @type {ColorArray} */
const urColorRight = [90, 0.66, 0.625];
/** @type {ColorArray} */
const kaleidoColorLeft = [0, 0.81, 0.75];
/** @type {ColorArray} */
const kaleidoColorRight = [0, 0, 0.28125];
/** @type {ColorArray} */
const kdaColorLeft = [315, 0.75, 0.75];
/** @type {ColorArray} */
const kdaColorRight = [195, 0.75, 0.78125];
/** @type {ColorArray} */
// const dColorLeft = [360, 0.92, 0.78];
/** @type {ColorArray} */
// const dColorRight = [203, 0.81, 0.81];
const dColorLeft = [290, 0.66, 0.6875];
/** @type {ColorArray} */
const dColorRight = [105, 0.6875, 0.66];
/** @type {ColorArray} */
const dObstacleColor = [270, 0.75, 0.875];

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
         n._customData = { _color: HsvaToRgba(0, 1, 2) };
      }
      if (n._type === 1) {
         n._customData = { _color: HsvaToRgba(240, 1, 2) };
      }
      if (n._type === 3) {
         n._customData = { _color: HsvaToRgba(120, 1, 2) };
         n._cutDirection = Math.floor(Math.random() * 9);
      }
   });
   walls.forEach((w) => {
      w._customData = { _color: HsvaToRgba(60, 1, 2) };
   });
   const leftNotes = where(notes, { include: { _type: 0 } });
   const rightNotes = where(notes, { include: { _type: 1 } });
   const bombNotes = where(notes, { include: { _type: 3 } });
   //#region notes
   setColor(between(leftNotes, 5, 66), urColorLeft);
   setColor(between(rightNotes, 5, 66), urColorRight);
   setColor(between(leftNotes, 70, 85), kdaColorLeft);
   setColor(between(rightNotes, 70, 85), kdaColorRight);
   setColor(between(leftNotes, 86, 999), dColorLeft);
   setColor(between(rightNotes, 86, 999), dColorRight);
   setColor(between(leftNotes, 303, 314), urColorLeft);
   setColor(between(rightNotes, 303, 314), urColorRight);
   setColor(between(leftNotes, 327, 332), urColorLeft);
   setColor(between(rightNotes, 327, 332), urColorRight);
   setColor(between(leftNotes, 387, 393), urColorLeft);
   setColor(between(rightNotes, 387, 393), urColorRight);
   setColor(between(leftNotes, 395, 401.5), urColorLeft);
   setColor(between(rightNotes, 395, 401.5), urColorRight);
   setGradientColor(between(leftNotes, 400, 402), urColorLeft, dColorLeft);
   setColor(between(leftNotes, 403, 410), urColorLeft);
   setColor(between(rightNotes, 403, 410), urColorRight);
   setColor(between(leftNotes, 473, 602), kaleidoColorLeft);
   setColor(between(rightNotes, 473, 602), kaleidoColorRight);
   setColor(between(leftNotes, 602, 618), kdaColorLeft);
   setColor(between(rightNotes, 602, 618), kdaColorRight);
   setColor(between(leftNotes, 682, 706), urColorLeft);
   setColor(between(rightNotes, 682, 706), urColorRight);
   //#endregion
   //#region bombs
   randomizeColor(between(bombNotes, 5, 70), [0, 0, 0.25], [0, 0, 0.5]);
   setGradientColor(between(bombNotes, 80, 85), [0, 0, 0.25], [0, 0, 1]);
   setColor(between(bombNotes, 85, 86), [0, 0, 0.25]);
   randomizeColor(between(bombNotes, 147, 149), [0, 0, 0.25], [0, 0, 0.5]);
   randomizeColor(between(bombNotes, 154, 173), [30, 0, 0.25], [0, 0.25, 0.5]);
   setGradientColor(between(bombNotes, 180, 182), [0, 0, 0.75], [0, 0, 0.25]);
   randomizeColor(between(bombNotes, 231, 239), [0, 0, 0.25], [0, 0, 0.5]);
   randomizeColor(between(bombNotes, 345, 348), [0, 0, 0.375], [0, 0, 0.5]);
   setGradientColor(between(bombNotes, 348, 350), [0, 0, 0.5], [0, 0, 1]);
   randomizeColor(between(bombNotes, 355, 374), [30, 0, 0.25], [0, 0.25, 0.5]);
   randomizeColor(between(bombNotes, 388, 409), [0, 0, 0.375], [0, 0, 0.5]);
   randomizeColor(between(bombNotes, 394, 395), [0, 0, 0.5], [0, 0, 0.625]);
   randomizeColor(between(bombNotes, 402, 403), [0, 0, 0.5], [0, 0, 0.625]);
   setColor(at(bombNotes, 410), [0, 0, 0.375]);
   randomizeColor(between(bombNotes, 431, 439), [0, 0, 0.25], [0, 0, 0.5]);
   randomizeColor(between(bombNotes, 469, 473), [0, 0, 0.25], [0, 0, 1]);
   randomizeColor(between(bombNotes, 616, 620), [0, 1, 0.25], [0, 1, 0.75]);
   randomizeColor(between(bombNotes, 705, 708), [0, 0, 0.25], [0, 0, 0.5]);
   randomizeColor(between(bombNotes, 748, 777), [0, 0, 0.25], [0, 0, 0.5]);
   randomizeColor(between(bombNotes, 760, 762), [0, 0, 0.375], [0, 1, 0.75]);
   randomizeColor(between(bombNotes, 830, 840), [0, 0, 0.25], [0, 0, 1]);
   //#endregion
   //#region walls
   randomizeColor(between(walls, 65.5, 70), [0, 0, 0.25], [0, 0, 0.75]);
   setColor(between(walls, 78, 999), dObstacleColor);
   randomizeColor(between(walls, 118, 142), [0, 0, 0.5], [0, 0, 0.75]);
   randomizeColor(between(walls, 206, 220), [0, 0, 0.25], [0, 0, 0.5]);
   randomizeColor(between(walls, 226, 230), [0, 0, 0], [0, 0, 0.25]);
   setColor(between(walls, 229.75, 230), [0, 0, 1]);
   randomizeColor(between(walls, 345, 350), [0, 0, 0.25], [0, 0, 0.5]);
   setColor(between(walls, 427, 433), [0, 1, 1]);
   setColor(between(walls, 468, 473), [0, 0, 1]);
   randomizeColor(between(walls, 473, 545), [0, 1, 0.25], [0, 1, 0.75]);
   setGradientColor(between(walls, 590, 602), [0, 1, 0.75], [0, 1, 0]);
   randomizeColor(between(walls, 616, 620), [0, 1, 0.25], [0, 1, 0.75]);
   randomizeColor(between(walls, 742, 747), [0, 0, 0], [0, 0, 0.25]);
   randomizeColor(between(walls, 747, 748), [0, 0, 0.75], [0, 0, 1]);
   randomizeColor(between(walls, 820, 830), [0, 0, 0.5], [0, 0, 0.75]);
   randomizeColor(between(walls, 870, 900), [0, 0.875, 0.875], [0, 1, 1]);
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
