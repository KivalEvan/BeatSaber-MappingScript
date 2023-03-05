import { BeatPerMinute, v3 } from '../../depsLocal.ts';
import * as debug from './_debug.ts';
import _00 from './_00start/mod.ts';
import _01 from './_01intro/mod.ts';
import _02 from './_02verse1/mod.ts';
import _03 from './_03verse2/mod.ts';
import _04 from './_04chorus/mod.ts';
import _05 from './_05verse1/mod.ts';
import _06 from './_06verse2/mod.ts';
import _07 from './_07build1/mod.ts';
import _08 from './_08build2/mod.ts';
import _09 from './_09instrument/mod.ts';
import _10 from './_10execution/mod.ts';
import _11 from './_11chorus/mod.ts';
import _12 from './_12chorus/mod.ts';
import _13 from './_13outro/mod.ts';

export default (d: v3.Difficulty, bpm: BeatPerMinute) => {
    _00(d);
    _01(d);
    _02(d);
    _03(d);
    _04(d);
    _05(d);
    _06(d);
    _07(d);
    _08(d);
    _09(d);
    _10(d);
    _11(d);
    _12(d);
    _13(d);

    debug.fixRotation(d);
    debug.fixTranslation(d);
    // debug.rotation(d);
    // debug.stackedEvent(d, bpm);
    // d.colorBoostEvents = [];
};
