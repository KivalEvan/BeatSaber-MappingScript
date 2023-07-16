import { postProcess } from './postProcess.ts';
import { lightshow } from './lightshow.ts';
import { preset } from './preset.ts';
import { njsVibe } from './njs.ts';
import { intro } from './intro.ts';
import { outro } from './outro.ts';
import { slow } from './slow.ts';
import { build1 } from './build1.ts';
import { build2 } from './build2.ts';
import { drop1 } from './drop1.ts';
import { drop2 } from './drop2.ts';
import { misc } from './misc.ts';
import { text } from './text.ts';
import { sus } from './imposter.ts';
import { color } from './color.ts';
import { BeatPerMinute, logger, NoteJumpSpeed, save, v3 } from '../../depsLocal.ts';

export function main(data: v3.Difficulty, BPM: BeatPerMinute, NJS: NoteJumpSpeed) {
   logger.info('Processing ' + data.filename);

   preset(data);

   njsVibe(data, BPM, NJS);
   color(data, BPM, NJS);
   misc(data, BPM, NJS);
   text(data, BPM, NJS);

   intro(data, BPM, NJS);
   slow(data, BPM, NJS);
   build1(data, BPM, NJS);
   build2(data, BPM, NJS);
   drop1(data, BPM, NJS);
   drop2(data, BPM, NJS);
   outro(data, BPM, NJS);
   // sus(data, BPM, NJS);
   // data.chains = [];

   const lightData = lightshow();
   data.basicEvents = data.basicEvents.concat(lightData.basicEvents);
   // data.customData.environment = data.customData.environment?.concat(
   //     lightData.customData.environment!,
   // );

   postProcess(data);
   save.difficultySync(data);
}
