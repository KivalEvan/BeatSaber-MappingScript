import {
   Beatmap,
   globals,
   pRandomSeed,
   readFromInfoSync,
   readInfoFileSync,
   TimeProcessor,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import lights from './lights.ts';

pRandomSeed('S.A.R.I.E.L.');

globals.directory = beatmapWipPath('S.A.R.I.E.L');

const info = readInfoFileSync();
info.customData!._contributors = [
   {
      _role: 'Mapper',
      _name: 'Kival Evan',
      _iconPath: 'iconKivalEvan.png',
   },
];
for (const d of info.difficulties) {
   d.customData._information = [
      'Sariel',
      'Now, Until the Moment You Die',
      'Civilization of Magic',
      '1st track of album S.A.R.I.E.L. -Request Song Jukebox Vol.01-',
   ];
   d.customData = {
      ...d.customData,
      _envColorLeft: {
         r: 0.875,
         g: 0.125,
         b: 0.1875,
      },
      _envColorRight: {
         r: 0.1875,
         g: 0.6875,
         b: 1,
      },
      _envColorLeftBoost: {
         r: 0.875,
         g: 0,
         b: 0.1875,
      },
      _envColorRightBoost: {
         r: 0.4375,
         g: 0,
         b: 0.8125,
      },
   };
   delete d.customData._requirements;
   delete d.customData._suggestions;
}

const bpm = TimeProcessor.create(info.audio.bpm);

const lightshow = new Beatmap();
lights(lightshow, bpm);

const difficultyList = readFromInfoSync(info);

difficultyList.forEach((d) => {
   d.beatmap.basicEvents = [];
   d.beatmap.colorBoostEvents = lightshow.colorBoostEvents;
   d.beatmap.lightColorEventBoxGroups = lightshow.lightColorEventBoxGroups;
   d.beatmap.lightRotationEventBoxGroups = lightshow.lightRotationEventBoxGroups;
   d.beatmap.useNormalEventsAsCompatibleEvents = false;

   writeDifficultyFileSync(d.beatmap, 3);
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
