import { globals, load, save, utils } from '../../depsLocal.ts';
import { insertEnvironment } from '../../environment-enhancement/torii/mod.ts';
import wipPath from '../../utility/wipPath.ts';

globals.directory = wipPath('2eafa (Genryuu Kaiko - Kival Evan)');

const info = load.infoSync();
const difficultyList = load.difficultyFromInfoSync(info);
const cd = load.difficultySync('EasyNoArrows.dat', 3);
cd.customData.bookmarks?.forEach((b) => {
   b.c = utils.interpolateColor([0, 0, 0.25], [0, 0, 0.5], utils.normalize(b.b, 0, 1000), 'hsva');
   if (b.b === 294 || b.b === 518 || b.b === 774) b.c = [1, 1, 1];
   if (b.b >= 710 && b.b <= 770) {
      b.c = utils.interpolateColor(
         [330, 1, 1],
         [360, 1, 1],
         utils.normalize(b.b, 710, 770),
         'hsva',
      );
   }
   if (b.b >= 645 && b.b <= 693) {
      b.c = utils.interpolateColor(
         [300, 1, 1],
         [315, 1, 1],
         utils.normalize(b.b, 645, 693),
         'hsva',
      );
   }
   if (b.b === 718 || b.b === 750) b.c = [0.5, 0.5, 0.5];
   if (b.b === 719 || b.b === 734 || b.b === 751) b.c = [1, 1, 1];
});

difficultyList.forEach((d) => {
   if (d.version === 3) insertEnvironment(d.data);
   d.data.customData.bookmarks = cd.customData.bookmarks;
   delete d.settings.customData._requirements;
});

save.difficultyListSync(difficultyList);
save.infoSync(info);
