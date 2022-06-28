/**
 * @typedef {import('./template.d.ts').Run} Run
 * @typedef {import('./template.d.ts').Main} Main
 */
'use strict';

/**
 * @type {Run} run
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
