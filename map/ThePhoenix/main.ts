import { ColorScheme, EventList, globals, load, save } from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';
import { insertEnvironment } from '../../environment-enhancement/panorama/main.ts';
import { ColorUtils } from '../../utility/colorUtils.ts';
import phoenix from './phoenix.ts';

globals.directory = wipPath('The Phoenix');

const info = load.infoSync(2);
info.song.title = '_The Phoenix';
info.environmentName = 'PyroEnvironment';
info.environmentNames = ['PyroEnvironment'];
info.colorSchemes = [
   {
      name: 'Panorama',
      useOverride: true,
      saberLeftColor: ColorUtils.create(ColorScheme['Rock Mixtape']._colorLeft),
      saberRightColor: ColorUtils.create(ColorScheme['Rock Mixtape']._colorRight),
      environment0Color: ColorUtils.create(ColorScheme.Pyro._envColorLeft),
      environment1Color: ColorUtils.create(ColorScheme.Pyro._envColorRight),
      environment0ColorBoost: ColorUtils.create(
         ColorScheme.Pyro._envColorLeftBoost,
      ),
      environment1ColorBoost: ColorUtils.create(
         ColorScheme.Pyro._envColorRightBoost,
      ),
      obstaclesColor: ColorUtils.create(ColorScheme.Pyro._obstacleColor),
   },
];
info.customData._contributors = [
   { _role: 'Mapper', _name: 'Kival Evan', _iconPath: 'iconKivalEvan.png' },
];

for (const [m, d] of info.listMap()) {
   d.copyColorScheme(0, info);
   const data = load.difficultySync(d.filename, 3);
   d.customData._suggestions = ['Chroma'];
   data.useNormalEventsAsCompatibleEvents = m === 'Legacy';
   data.basicEvents = [];
   data.lightColorEventBoxGroups = [];
   data.lightRotationEventBoxGroups = [];
   insertEnvironment(data);
   phoenix(data);

   data.addBasicEvents(
      {
         type: 1,
         value: 5,
         floatValue: 1,
      },
      {
         type: 2,
         value: 9,
         floatValue: 1,
      },
      {
         type: 3,
         value: 9,
         floatValue: 1,
      },
      {
         type: 4,
         value: 1,
         floatValue: 1,
      },
   );
   for (const id of EventList.PyroEnvironment[1]) {
      if (id === 12 || id === 13) continue;
      data.addLightColorEventBoxGroups({
         id,
         boxes: [
            {
               events: [{ color: 1, brightness: 0 }],
            },
         ],
      });
   }

   delete d.customData._requirements;
   save.difficultySync(data);
}

save.infoSync(info);
