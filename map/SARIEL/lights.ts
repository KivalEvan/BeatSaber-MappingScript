import { BeatPerMinute, v3 } from '../../depsLocal.ts';
import bridge from './bridge.ts';
import build from './build.ts';
import chorus1 from './chorus1.ts';
import chorus2 from './chorus2.ts';
import * as debug from './debug.ts';
import downbeat from './downbeat.ts';
import final1 from './final1.ts';
import final2 from './final2.ts';
import intro from './intro.ts';
import kadosh from './kadosh.ts';
import misc from './misc.ts';
import start from './start.ts';
import transition from './transition.ts';
import verse1 from './verse1.ts';
import verse2 from './verse2.ts';

export default (d: v3.Difficulty, bpm: BeatPerMinute) => {
    start(d);
    kadosh(d);
    intro(d);
    verse1(d);
    verse2(d);
    build(d);
    chorus1(d);
    chorus2(d);
    bridge(d);
    final1(d);
    final2(d);
    downbeat(d);
    transition(d);
    misc(d);

    debug.fixRot(d);
    // debug.rotation(d);
    debug.stackedEvent(d, bpm);

    // d.colorBoostEvents = [];
};
