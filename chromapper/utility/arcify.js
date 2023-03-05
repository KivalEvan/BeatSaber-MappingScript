// @ts-check -- remove if error message is annoying
/**
 * use RunV3 or RunV2 if you are doing specific map version script
 * @typedef {import('./library/types').RunV3} Run
 * @typedef {import('./library/types').Main} Main
 */

// const KvlCore = require('./library/kvlCore.js');
// const {} = require('./library/helpers.js');

/**
 * @type {Run}
 */
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
    chains
) {
    /**
     * @type {Record<number, import('./library/beatmap/v3/colorNote').IColorNote>}
     */
    let prevNote = {};
    for (const n of notes) {
        if (prevNote[n.c]) {
            arcs.push({
                b: prevNote[n.c].b,
                c: prevNote[n.c].c,
                x: prevNote[n.c].x,
                y: prevNote[n.c].y,
                d: prevNote[n.c].d,
                mu: 1,
                tb: n.b,
                tx: n.x,
                ty: n.y,
                tc: n.d,
                tmu: 1,
                m: 0,
            });
        }
        prevNote[n.c] = n;
    }
    return;
}

module.exports =
    /**
     * @type {Main}
     */
    ({
        name: 'Arc-ify',
        params: {},
        run: run,
        errorCheck: false,
    });
