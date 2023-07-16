import {
   BeatPerMinute,
   convert,
   globals,
   isV3,
   load,
   save,
   utils,
   v2,
   v3,
} from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';
import light from './light.ts';

utils.pRandomSeed('EXECUTION');

globals.directory = wipPath('world.execute(me);', true);

const info = load.infoSync(2);
info.environmentName = 'Dragons2Environment';
info.customData._contributors = [
   {
      _role: 'Mapper',
      _name: 'Kival Evan',
      _iconPath: 'iconKivalEvan.png',
   },
];
for (const [_, d] of info.listMap()) {
   d.customData._information = [];
   delete d.customData._requirements;
   delete d.customData._suggestions;
}
const bpm = BeatPerMinute.create(info.beatsPerMinute);

const lightshow = v3.Difficulty.create();
light(lightshow, bpm);

const difficultyList = load.difficultyFromInfoSync(info);

difficultyList.forEach((d) => {
   if (!isV3(d.data)) {
      d.data = convert.toV3(d.data as v2.Difficulty);
   }

   d.data.basicEvents = lightshow.basicEvents;
   d.data.colorBoostEvents = lightshow.colorBoostEvents;
   d.data.lightColorEventBoxGroups = lightshow.lightColorEventBoxGroups;
   d.data.lightRotationEventBoxGroups = lightshow.lightRotationEventBoxGroups;
   d.data.lightTranslationEventBoxGroups = lightshow.lightTranslationEventBoxGroups;
   d.data.useNormalEventsAsCompatibleEvents = false;
});

// const oldDirectory = globals.directory;
// globals.directory = Deno.build.os === 'linux'
//     ? '/home/kival/.local/share/Steam/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/S.A.R.I.E.L/'
//     : 'D:/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomLevels/S.A.R.I.E.L';
// copySync(oldDirectory + info._songFilename, globals.directory + info._songFilename, {
//     overwrite: true,
// });
// copySync(oldDirectory + info._coverImageFilename, globals.directory + info._coverImageFilename, { overwrite: true });
save.difficultyListSync(difficultyList);
save.infoSync(info);
