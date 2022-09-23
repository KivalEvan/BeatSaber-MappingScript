// @ts-check -- remove if error message is annoying
/**
 * @typedef {import('./library/types').Run} Run
 * @typedef {import('./library/types').Main} Main
 */

// const KvlCore = require('./library/kvlCore.js');
// const {} = require('./library/helpers.js');

/**
 * @type {Run}
 */
function run(cursor, notes, events, walls, _, global, data, customEvents, bpmChanges) {
    return;
}

module.exports =
    /**
     * @type {Main}
     */
    ({
        name: 'Template',
        params: {},
        run: run,
        errorCheck: false,
    });
