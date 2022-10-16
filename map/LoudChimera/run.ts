import { BeatPerMinute, ColorScheme, ext, globals, load, NoteJumpSpeed, save } from '../../depsLocal.ts';
import { counter } from '../../utility/counter.ts';
import { main } from './main.ts';
const { NE } = ext;

counter(import.meta.url);

console.log('Running script...');
console.time('Runtime');

globals.directory = Deno.build.os === 'linux'
    ? '/home/kival/CustomWIPLevels/loudchimera/'
    : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/loudchimera';

// logger.setLevel(5);

const info = load.infoSync();
const BPM = BeatPerMinute.create(info._beatsPerMinute);
const NJS = NoteJumpSpeed.create(BPM, 19, -1.75);
NE.settings.BPM = BPM;
NE.settings.NJS = NJS;

main(
    load.difficultySync('HardStandard.dat', 3).setFileName('ExpertPlusStandard.dat'),
    BPM,
    NJS,
);

main(
    load.difficultySync('ExpertOneSaber.dat', 3).setFileName('ExpertPlusOneSaber.dat'),
    BPM,
    NJS,
);

NJS.value = 16;
NJS.offset = -1.25;
main(
    load.difficultySync('NormalStandard.dat', 3).setFileName('ExpertStandard.dat'),
    BPM,
    NJS,
);

for (const set of info._difficultyBeatmapSets) {
    for (const d of set._difficultyBeatmaps) {
        if (d._customData) {
            d._customData._requirements = ['Noodle Extensions'];
            d._customData._suggestions = ['Chroma'];
            d._customData = { ...d._customData, ...ColorScheme.Weave };
        }
    }
}

save.infoSync(info);

console.timeEnd('Runtime');
