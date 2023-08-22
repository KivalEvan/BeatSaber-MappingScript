// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').RunV2<params>} Run
 * @typedef {import('./library/types').Main<params>} Main
 * @typedef {import('./library/types/colors').ColorArray} ColorArray
 */

const {
   at,
   between,
   v2SetColor: setColor,
   v2SetGradientColor: setGradientColor,
   where,
} = require('./library/helpers.js');

const name = 'forgotten parser';
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
   bombs,
   arcs,
   chains,
) {
   for (let i = 0; i < 8; i++) {
      setColor(between(walls, 20 + i * 8, 28 + i * 8), [180 + 45 * i, 0.75, 0.75]);
      setColor(at(walls, 20.75 + i * 8), [45 + 75 * i, 0.75, 0.75]);
      setColor(at(walls, 22.25 + i * 8), [45 + 75 * i, 0.75, 0.75]);
      setColor(at(walls, 23.5 + i * 8), [45 + 75 * i, 0.75, 0.75]);
      setColor(at(walls, 24.25 + i * 8), [45 + 75 * i, 0.75, 0.75]);
      setColor(at(walls, 24.75 + i * 8), [45 + 75 * i, 0.75, 0.75]);
      setColor(at(walls, 26.25 + i * 8), [45 + 75 * i, 0.75, 0.75]);
      setColor(at(walls, 27.5 + i * 8), [45 + 75 * i, 0.75, 0.75]);
   }
   setGradientColor(between(walls, 32, 34), [0, 0, 0.125], [0, 0, 1]);
   setColor(at(walls, 33.75), [0, 0, 0]);
   for (let i = 0; i < 3; i++) {
      setColor(between(walls, 92 + i * 8, 100 + i * 8), [1080 - 30 * i, 0.75, 0.75]);
      setColor(at(walls, 92.75 + i * 8), [640 - 75 * i, 0.75, 0.75]);
      setColor(at(walls, 94.25 + i * 8), [640 - 75 * i, 0.75, 0.75]);
      setColor(at(walls, 95.5 + i * 8), [640 - 75 * i, 0.75, 0.75]);
      setColor(at(walls, 96.25 + i * 8), [640 - 75 * i, 0.75, 0.75]);
      setColor(at(walls, 96.75 + i * 8), [640 - 75 * i, 0.75, 0.75]);
      setColor(at(walls, 98.25 + i * 8), [640 - 75 * i, 0.75, 0.75]);
      setColor(at(walls, 99.5 + i * 8), [640 - 75 * i, 0.75, 0.75]);
   }
   for (let i = 0; i < 3; i++) {
      setColor(between(walls, 132 + i * 8, 140 + i * 8), [270 - 45 * i, 0.75, 0.75]);
      setColor(at(walls, 132.75 + i * 8), [405 - 60 * i, 0.75, 0.75]);
      setColor(at(walls, 134.25 + i * 8), [405 - 60 * i, 0.75, 0.75]);
      setColor(at(walls, 135.5 + i * 8), [405 - 60 * i, 0.75, 0.75]);
      setColor(at(walls, 136.25 + i * 8), [405 - 60 * i, 0.75, 0.75]);
      setColor(at(walls, 136.75 + i * 8), [405 - 60 * i, 0.75, 0.75]);
      setColor(at(walls, 138.25 + i * 8), [405 - 60 * i, 0.75, 0.75]);
      setColor(at(walls, 139.5 + i * 8), [405 - 60 * i, 0.75, 0.75]);
   }
   for (let i = 0; i < 4; i++) {
      setColor(between(walls, 196 + i * 8, 204 + i * 8), [480 + 45 * i, 0.75, 0.75]);
      setColor(at(walls, 196.75 + i * 8), [720 + 60 * i, 0.75, 0.75]);
      setColor(at(walls, 198.25 + i * 8), [720 + 60 * i, 0.75, 0.75]);
      setColor(at(walls, 199.5 + i * 8), [720 + 60 * i, 0.75, 0.75]);
      setColor(at(walls, 200.25 + i * 8), [720 + 60 * i, 0.75, 0.75]);
      setColor(at(walls, 200.75 + i * 8), [720 + 60 * i, 0.75, 0.75]);
      setColor(at(walls, 202.25 + i * 8), [720 + 60 * i, 0.75, 0.75]);
      setColor(at(walls, 203.5 + i * 8), [720 + 60 * i, 0.75, 0.75]);
   }
   for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 2; j++) {
         setGradientColor(
            between(
               where(notes, { include: { _type: 3 } }),
               215 + j * 1.5 + i * (8 + 3 / 8),
               216.5 + j * 1.5 + i * (8 + 3 / 8),
            ),
            [480 + 105 * i, 0.75, 0.75],
            [560 + 105 * i, 0.5, 0.5],
         );
      }
   }
   for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 2; j++) {
         setGradientColor(
            between(
               where(notes, { include: { _type: 3 } }),
               292 + j * 1.5 + i * (8 + 3 / 8),
               293.5 + j * 1.5 + i * (8 + 3 / 8),
            ),
            [360 + 105 * i, 0.75, 0.75],
            [480 + 105 * i, 0.5, 0.5],
         );
      }
   }
   setGradientColor(between(walls, 452, 580), [175, 0.75, 0.75], [175 + 360 * 10, 0.75, 0.75]);
   for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
         setGradientColor(
            between(
               where(notes, { include: { _type: 3 } }),
               756 + j * 1.5 + i * (8 + 3 / 8),
               757.5 + j * 1.5 + i * (8 + 3 / 8),
            ),
            [240 + 105 * i, 0.75, 0.75],
            [360 + 105 * i, 0.5, 0.5],
         );
      }
   }
   for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 2; j++) {
         setGradientColor(
            between(
               where(notes, { include: { _type: 3 } }),
               772 + j * 1.5 + i * (8 + 3 / 8),
               773.5 + j * 1.5 + i * (8 + 3 / 8),
            ),
            [1080 - 105 * i, 0.75, 0.75],
            [960 - 105 * i, 0.5, 0.5],
         );
      }
   }
   for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 2; j++) {
         setGradientColor(
            between(
               where(notes, { include: { _type: 3 } }),
               804 + j * 1.5 + i * (8 + 3 / 8),
               805.5 + j * 1.5 + i * (8 + 3 / 8),
            ),
            [1200 + 105 * i, 0.75, 0.75],
            [1080 + 105 * i, 0.5, 0.5],
         );
      }
   }
   setGradientColor(between(walls, 1091.5, 1095), [200, 0.5, 0.5], [240, 0, 0]);
   const sideWalls = walls.filter((w) => w._lineIndex === 0);
   setGradientColor(between(sideWalls, 1091, 1092), [200, 0, 1], [240, 0, 0]);
}

module.exports =
   /** @type {Main} */
   ({
      name,
      params,
      run,
      errorCheck,
   });
