import { v3 } from '../../../depsLocal.ts';
import ambient from './ambient.ts';
import dnb from './dnb.ts';
import intro from './intro.ts';
import piano from './piano.ts';

export default function (data: v3.Difficulty) {
   v3.BasicEvent.default.et = 4;

   intro(data);
   ambient(data);
   piano(data);
   dnb(data);
}
