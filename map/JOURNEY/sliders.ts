import { v3 } from '../../depsLocal.ts';

export function sliders(data: v3.Difficulty) {
    data.addSliders({ b: 193.5, tb: 198, c: 1, d: 2, tc: 1, x: 0, y: 1, tx: 2, ty: 2 });

    //#region
    data.addSliders(
        { b: 262, tb: 265, c: 1, d: 3, tc: 6, x: 3, y: 1, tx: 1, ty: 2 },
        { b: 265, tb: 265.5, c: 1, d: 6, tc: 5, x: 1, y: 2, tx: 2, ty: 1 },
        { b: 265.5, tb: 266, c: 1, d: 5, tc: 6, x: 2, y: 1, tx: 3, ty: 0 },
        { b: 266, tb: 268, c: 1, d: 6, tc: 0, x: 3, y: 0, tx: 0, ty: 1 },
        { b: 268, tb: 268.5, c: 1, d: 0, tc: 1, x: 0, y: 1, tx: 1, ty: 0 },
        { b: 268.5, tb: 269, c: 1, d: 1, tc: 0, x: 1, y: 0, tx: 2, ty: 2 },
        { b: 269, tb: 269.5, c: 1, d: 0, tc: 1, x: 2, y: 2, tx: 3, ty: 1 },
        { b: 269.5, tb: 270, c: 1, d: 1, tc: 4, x: 3, y: 1, tx: 1, ty: 0 },
        { b: 270.0625, tb: 272, c: 1, d: 0, tc: 2, x: 0, y: 2, tx: 0, ty: 1 },
        { b: 272, tb: 274, c: 1, d: 2, tc: 3, x: 0, y: 1, tx: 1, ty: 2 },
        { b: 274.0625, tb: 277, c: 1, d: 7, tc: 6, x: 3, y: 1, tx: 1, ty: 0 },
        { b: 277, tb: 278, c: 1, d: 6, tc: 3, x: 1, y: 0, tx: 0, ty: 1 },
        { b: 278.0625, tb: 281, c: 1, d: 3, tc: 1, x: 3, y: 1, tx: 1, ty: 1 },
        { b: 281, tb: 282, c: 1, d: 1, tc: 4, x: 1, y: 1, tx: 3, ty: 1 },
        { b: 282, tb: 283, c: 1, d: 4, tc: 1, x: 3, y: 1, tx: 2, ty: 2 },
        { b: 283, tb: 284, c: 1, d: 1, tc: 5, x: 2, y: 2, tx: 0, ty: 1 },
        { b: 284, tb: 285, c: 1, d: 5, tc: 2, x: 0, y: 1, tx: 1, ty: 0 },
        { b: 285, tb: 286, c: 1, d: 2, tc: 3, x: 1, y: 0, tx: 0, ty: 0 },
        { b: 286.0625, tb: 287.5, c: 1, d: 5, tc: 6, x: 2, y: 1, tx: 0, ty: 1 },
        { b: 287.5, tb: 288.5, c: 1, d: 6, tc: 3, x: 0, y: 1, tx: 1, ty: 0 },
        { b: 288.5, tb: 289, c: 1, d: 3, tc: 2, x: 1, y: 0, tx: 0, ty: 0 },
        { b: 289, tb: 290, c: 1, d: 2, tc: 3, x: 0, y: 0, tx: 1, ty: 1 },
        { b: 290.0625, tb: 294, c: 1, d: 7, tc: 6, x: 3, y: 0, tx: 2, ty: 2 },
    );
    //#endregion

    data.addSliders(
        { b: 339.5, tb: 340.5, c: 1, d: 1, tc: 0, x: 1, y: 0, tx: 2, ty: 2 },
        { b: 341, tb: 342, c: 1, d: 7, tc: 5, x: 3, y: 0, tx: 2, ty: 1 },
        { b: 355.5, tb: 356.5, c: 1, d: 1, tc: 0, x: 3, y: 0, tx: 1, ty: 0 },
        { b: 357, tb: 358, c: 1, d: 4, tc: 5, x: 0, y: 2, tx: 2, ty: 0 },
        { b: 365, tb: 366, c: 1, d: 1, tc: 7, x: 1, y: 0, tx: 3, ty: 0, tmu: 0.5 },
        { b: 371.5, tb: 372.5, c: 1, d: 1, tc: 0, x: 1, y: 0, tx: 1, ty: 0 },
        { b: 373, tb: 374, c: 1, d: 7, tc: 5, x: 3, y: 0, tx: 2, ty: 1 },
        { b: 383, tb: 384.5, c: 1, d: 5, tc: 1, x: 2, y: 2, tx: 2, ty: 0 },
        { b: 385.5, tb: 386.5, c: 1, d: 7, tc: 0, x: 3, y: 1, tx: 1, ty: 2 },
        { b: 387.5, tb: 388.5, c: 1, d: 5, tc: 6, x: 2, y: 1, tx: 0, ty: 1 },
    );

    data.addSliders(
        { b: 531.5, tb: 532.5, c: 1, d: 3, tc: 6, x: 3, y: 0, tx: 1, ty: 0 },
        { b: 533, tb: 534, c: 1, d: 5, tc: 1, x: 1, y: 0, tx: 2, ty: 0 },
        { b: 547.5, tb: 548.5, c: 1, d: 7, tc: 0, x: 3, y: 0, tx: 0, ty: 1 },
        { b: 548.5, tb: 549, c: 1, d: 0, tc: 1, x: 0, y: 1, tx: 2, ty: 2 },
        {
            b: 549,
            tb: 550,
            c: 1,
            d: 1,
            tc: 3,
            x: 2,
            y: 2,
            tx: 2,
            ty: 0,
            mu: 1.5,
            tmu: 1.5,
        },
        { b: 577.5, tb: 578.5, c: 1, d: 7, tc: 4, x: 3, y: 0, tx: 0, ty: 1 },
        { b: 579.5, tb: 580.5, c: 1, d: 4, tc: 7, x: 1, y: 2, tx: 2, ty: 0 },
    );

    data.addSliders(
        { b: 445, tb: 446, c: 1, d: 2, tc: 3, x: 0, y: 1, tx: 0, ty: 2 },
        { b: 597, tb: 598, c: 1, d: 2, tc: 3, x: 0, y: 1, tx: 1, ty: 1 },
        { b: 637, tb: 638, c: 1, d: 3, tc: 2, x: 3, y: 1, tx: 3, ty: 2 },
        { b: 709, tb: 710, c: 1, d: 3, tc: 2, x: 3, y: 1, tx: 3, ty: 1 },
        { b: 829, tb: 830, c: 1, d: 2, tc: 3, x: 0, y: 0, tx: 1, ty: 0 },
        { b: 833.5, tb: 837.75, c: 1, d: 5, tc: 1, x: 3, y: 2, tx: 2, ty: 0, tmu: 2 },
        { b: 868, tb: 870, c: 1, d: 1, tc: 3, x: 0, y: 0, tx: 2, ty: 2, tmu: 1.5 },
        { b: 965, tb: 966, c: 1, d: 2, tc: 3, x: 0, y: 0, tx: 0, ty: 1 },
        { b: 996.5, tb: 998, c: 1, d: 6, tc: 5, x: 0, y: 2, tx: 1, ty: 0 },
    );

    data.sliders.forEach((s) => {
        const note = data.colorNotes.filter((n) => n.time === s.time && n.posX === s.posX && n.posY === s.posY);
        if (note.length > 1) {
            throw new Error('too many result');
        }
        if (note.length !== 1) {
            throw new Error(`no notes found at ${s.time}`);
        }
        const n = note[0];
        s.customData.color = n.customData.color;
    });
}
