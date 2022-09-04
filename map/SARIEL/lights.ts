import { v3 } from '../../depsLocal.ts';
import build from './build.ts';
import * as debug from './debug.ts';
import intro from './intro.ts';
import kadosh from './kadosh.ts';
import misc from './misc.ts';
import start from './start.ts';
import verse1 from './verse1.ts';
import verse2 from './verse2.ts';

export default (d: v3.Difficulty) => {
    start(d);
    kadosh(d);
    intro(d);
    verse1(d);
    verse2(d);
    build(d);
    misc(d);

    debug.fixRot(d);
    // debug.rotation(d);
};
