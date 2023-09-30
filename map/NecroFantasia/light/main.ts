import { v3 } from '../../../depsLocal.ts';
import ambient from './ambient.ts';
import boost from './boost.ts';
import dnb from './dnb.ts';
import humm from './humm.ts';
import intro from './intro.ts';
import piano from './piano.ts';
import build from './build.ts';
import synth from './synth.ts';
import synth2 from './synth2.ts';
import transition from './transition.ts';

export default function (data: v3.Difficulty) {
   v3.BasicEvent.default.et = 4;

   intro(data);
   transition(data);

   dnb(data);
   piano(data);
   synth(data);
   synth2(data);
   humm(data);

   ambient(data);
   build(data);
   boost(data);
}
