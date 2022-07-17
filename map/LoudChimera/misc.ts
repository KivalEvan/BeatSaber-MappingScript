import * as bsmap from '../../depsLocal.ts';
import UFO from './ufo.ts';
const { noodleExtensions: NE } = bsmap.ext;
const { between } = bsmap.ext.selector;

export function misc(
    data: bsmap.v3.DifficultyData,
    BPM: bsmap.BeatPerMinute,
    NJS: bsmap.NoteJumpSpeed,
    nerf = false
) {
    bsmap.logger.info('Run Misc');

    const circles = NE.createCircle(6, 8, 90);
    for (let i = 0; i < 8; i++) {
        const ufo = new UFO(data, 'Circle' + i);
        ufo.hide(0);
        ufo.animate(260 + i * 2, 292 + i * 2, {
            localRotation: 'ufoSpinLoop',
        });
        ufo.animate(292 + i * 2, 324 + i * 2, {
            localRotation: 'ufoSpinLoop',
        });
        ufo.animate(260 + i * 2, 264 + i * 2, {
            position: [
                [circles[i][1], 32, circles[i][0] + 8, 0],
                [circles[i][1], 3, circles[i][0] + 12, 1, 'easeOutCubic'],
            ],
        });
        ufo.animate(264 + i * 2, 279 + i * 2, {
            position: [
                [circles[i][1], 3, circles[i][0] + 12, 0],
                [circles[i][1], 4, circles[i][0] + 12, 1, 'easeInOutCubic'],
            ],
        });
        ufo.animate(279 + i * 2, 281 + i * 2, {
            position: [
                [circles[i][1], 4, circles[i][0] + 12, 0],
                [circles[i][1], 2, circles[i][0] + 12, 1, 'easeInOutCubic'],
            ],
        });
        ufo.animate(281 + i * 2, 295 + i * 2, {
            position: [
                [circles[i][1], 2, circles[i][0] + 12, 0],
                [circles[i][1], 3, circles[i][0] + 12, 1, 'easeInOutCubic'],
            ],
        });
        ufo.animate(295 + i * 2, 299 + i * 2, {
            position: [
                [circles[i][1], 3, circles[i][0] + 12, 0],
                [circles[i][1], -64, circles[i][0] + 12, 1, 'easeInOutCubic'],
            ],
        });
        ufo.hide(299 + i * 2);
    }
}
