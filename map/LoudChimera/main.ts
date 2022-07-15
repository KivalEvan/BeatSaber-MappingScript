import * as bsmap from '../../depsLocal.ts';
import { postProcess } from './postProcess.ts';
import { lightshow } from './lightshow.ts';
import { preset } from './preset.ts';
import { njsVibe } from './njs.ts';
import { slow } from './slow.ts';
import { build1 } from './build1.ts';
import { build2 } from './build2.ts';
import { drop1 } from './drop1.ts';
import { drop2 } from './drop2.ts';

export function main(data: bsmap.v3.DifficultyData, BPM: bsmap.BeatPerMinute, NJS: bsmap.NoteJumpSpeed, nerf = false) {
    bsmap.logger.info('Processing ' + data.fileName);

    preset(data);

    njsVibe(data, BPM, NJS, nerf);
    slow(data, BPM, NJS, nerf);
    build1(data, BPM, NJS, nerf);
    build2(data, BPM, NJS, nerf);
    drop1(data, BPM, NJS, nerf);
    drop2(data, BPM, NJS, nerf);
    data.burstSliders = [];

    // const lightData = lightshow();
    // data.basicBeatmapEvents = lightData.basicBeatmapEvents;
    // data.customData.environment = lightData.customData.environment;

    postProcess(data);
    bsmap.save.difficultySync(data);
}
