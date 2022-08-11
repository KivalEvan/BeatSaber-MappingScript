// @ts-check -- remove if error message is annoying
const fs = require('fs');

/** @type {import('./beatmapV2').IDifficulty}*/
const difficulty = JSON.parse(fs.readFileSync('difficulty.dat'));
