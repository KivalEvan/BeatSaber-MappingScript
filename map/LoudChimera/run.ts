import * as bsmap from '../../depsLocal.ts';
import { counter } from '../../utility/counter.ts';
import { main } from './main.ts';
const { noodleExtensions: NE } = bsmap.ext;

counter(import.meta.url);

console.log('Running script...');
console.time('Runtime');

bsmap.globals.directory = Deno.build.os === 'linux'
    ? '/home/kival/CustomWIPLevels/loudchimera/'
    : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/loudchimera';

const info = bsmap.load.infoSync();
const BPM = bsmap.BeatPerMinute.create(info._beatsPerMinute);
const NJS = bsmap.NoteJumpSpeed.create(BPM, 19.5, 0.25);
NE.settings.BPM = BPM;
NE.settings.NJS = NJS;

main(
    bsmap.load
        .difficultySync('HardStandard.dat', 3)
        .setFileName('ExpertPlusStandard.dat'),
    BPM,
    NJS,
);

NJS.value = 16;
NJS.offset = -1;
main(
    bsmap.load
        .difficultySync('NormalStandard.dat', 3)
        .setFileName('ExpertStandard.dat'),
    BPM,
    NJS,
);

for (const set of info._difficultyBeatmapSets) {
    for (const d of set._difficultyBeatmaps) {
        if (d._customData) {
            d._customData._requirements = ['Noodle Extensions'];
            d._customData._suggestions = ['Chroma'];
        }
    }
}

bsmap.save.infoSync(info);

console.timeEnd('Runtime');
