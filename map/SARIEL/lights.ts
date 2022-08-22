import { v3 } from '../../depsLocal.ts';
import build from './build.ts';
import intro from './intro.ts';
import kadosh from './kadosh.ts';
import misc from './misc.ts';
import start from './start.ts';

export default (d: v3.Difficulty) => {
    start(d);
    kadosh(d);
    intro(d);
    build(d);
    misc(d);
};
