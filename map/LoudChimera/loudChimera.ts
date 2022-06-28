import * as bsmap from '../../depsLocal.ts';
const { noodleExtensions: NE, selector } = bsmap.ext;

console.log('Running script...');
console.time('Runtime');
bsmap.globals.directory = 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/loudchimera';

const INPUT_FILE = 'ExpertStandard.dat';
const OUTPUT_FILE = 'HardStandard.dat';

const info = bsmap.load.infoSync();
const BPM = bsmap.BeatPerMinute.create(info._beatsPerMinute);
const NJS = bsmap.NoteJumpSpeed.create(BPM, 19.5, 0.25);
const difficulty = bsmap.load.difficultySync(INPUT_FILE, 3).setFileName(OUTPUT_FILE);
NE.settings.BPM = BPM;
NE.settings.NJS = NJS;

difficulty.colorNotes.forEach((n) => {
    n.customData.noteJumpMovementSpeed = NJS.value;
    n.customData.noteJumpStartBeatOffset = NJS.offset;
});
difficulty.bombNotes.forEach((b) => {
    b.customData.noteJumpMovementSpeed = NJS.value;
    b.customData.noteJumpStartBeatOffset = NJS.offset;
});
difficulty.obstacles.forEach((o) => {
    o.customData.noteJumpMovementSpeed = NJS.value;
    o.customData.noteJumpStartBeatOffset = NJS.offset;
});

bsmap.save.difficultySync(difficulty);

console.timeEnd('Runtime');
