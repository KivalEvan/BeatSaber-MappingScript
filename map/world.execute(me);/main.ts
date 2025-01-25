import {
   Beatmap,
   globals,
   pRandomSeed,
   readFromInfoSync,
   readInfoFileSync,
   TimeProcessor,
   toV3Beatmap,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import light from './light.ts';

pRandomSeed('EXECUTION');

globals.directory = beatmapWipPath('world.execute(me);', true);

const info = readInfoFileSync();
info.environmentBase.normal = 'Dragons2Environment';
info.customData._contributors = [
   {
      _role: 'Mapper',
      _name: 'Kival Evan',
      _iconPath: 'iconKivalEvan.png',
   },
];
for (const d of info.difficulties) {
   d.customData._information = [];
   delete d.customData._requirements;
   delete d.customData._suggestions;
}
const timeProc = TimeProcessor.create(info.audio.bpm);

const lightshow = new Beatmap();
light(lightshow, timeProc);

const difficultyList = readFromInfoSync(info);

difficultyList.forEach((d) => {
   if (d.beatmap.version !== 3) {
      toV3Beatmap(d.beatmap, d.beatmap.version);
   }

   d.beatmap.basicEvents = lightshow.basicEvents;
   d.beatmap.colorBoostEvents = lightshow.colorBoostEvents;
   d.beatmap.lightColorEventBoxGroups = lightshow.lightColorEventBoxGroups;
   d.beatmap.lightRotationEventBoxGroups = lightshow.lightRotationEventBoxGroups;
   d.beatmap.lightTranslationEventBoxGroups = lightshow.lightTranslationEventBoxGroups;
   d.beatmap.useNormalEventsAsCompatibleEvents = false;

   writeDifficultyFileSync(d.beatmap);
});

// const oldDirectory = globals.directory;
// globals.directory = Deno.build.os === 'linux'
//     ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/S.A.R.I.E.L/'
//     : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/S.A.R.I.E.L';
// copySync(oldDirectory + info._songFilename, globals.directory + info._songFilename, {
//     overwrite: true,
// });
// copySync(oldDirectory + info._coverImageFilename, globals.directory + info._coverImageFilename, { overwrite: true });
writeInfoFileSync(info);
