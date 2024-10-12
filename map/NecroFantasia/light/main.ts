import { v3 } from '../../../depsLocal.ts';
import ambient from './ambient.ts';
import boost from './boost.ts';
import dnb from './dnb.ts';
import intro from './intro.ts';
import piano from './piano.ts';
import build from './build.ts';
import synth from './synth.ts';
import synth2 from './synth2.ts';
import transition from './transition.ts';
import chorus from './chorus.ts';

export default function (data: types.wrapper.IWrapBeatmap) {
   v3.BasicEvent.default.et = 4;
   v3.BasicEvent.default.f = 1;
   v3.LightColorBase.default.s = 1;

   intro(data);
   transition(data);

   dnb(data);
   piano(data);
   synth(data);
   synth2(data);
   chorus(data);

   ambient(data);
   build(data);
   boost(data);

   for (const ebg of data.lightColorEventBoxGroups) {
      if (ebg.id < 12) continue;
      ebg.boxes.forEach((b) => b.events.forEach((e) => (e.brightness *= 1.5)));
   }
}
