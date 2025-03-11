import {
   Beatmap,
   colorFrom,
   globals,
   logger,
   readDifficultyFileSync,
   readInfoFileSync,
   readLightshowFileSync,
   writeDifficultyFileSync,
   writeInfoFileSync,
} from '@bsmap';
import counter from '../../utility/counter.ts';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';
import { lightItUp } from './lights/mod.ts';
import { ColorUtils } from '../../utility/colorUtils.ts';
import copyToCustomColor from '../../utility/copyToCustomColor.ts';
import { aggregateCustomData, sortCustomData } from './utils.ts';
import * as bookmarks from './bookmarks.ts';
import shortenName from '../../preprocess/shortenName.ts';
import deduplicateData from '../../preprocess/deduplicateData.ts';
import { animateIt } from './anims/mod.ts';

globals.directory = beatmapWipPath('Bad Apple!!');

const info = readInfoFileSync('Info.dat', 2);
info.song.subTitle = '(feat.nomico) (Camellia\'s "Bad Psy" Remix)';
info.environmentBase.normal = 'DaftPunkEnvironment';
info.environmentNames = ['DaftPunkEnvironment'];
info.colorSchemes = [
   {
      name: 'Bad Apple!!',
      overrideNotes: true,
      saberLeftColor: ColorUtils.create(
         colorFrom(240, 16, 32, 'rgba255'),
      ).toJSON(true),
      saberRightColor: ColorUtils.create(
         colorFrom(16, 144, 240, 'rgba255'),
      ).toJSON(true),
      obstaclesColor: ColorUtils.create(
         colorFrom(64, 64, 64, 'rgba255'),
      ).toJSON(true),
      overrideLights: true,
      environment0Color: ColorUtils.create(
         colorFrom(255, 8, 16, 'rgba255'),
      ).toJSON(true),
      environment1Color: ColorUtils.create(
         colorFrom(32, 128, 240, 'rgba255'),
      ).toJSON(true),
      environmentWColor: ColorUtils.create(
         colorFrom(0.75, 0.9375, 1, 'rgba'),
      ).toJSON(true),
      environment0ColorBoost: ColorUtils.create(
         colorFrom(128, 0, 255, 'rgba255'),
      ).toJSON(true),
      environment1ColorBoost: ColorUtils.create(
         colorFrom(0, 160, 255, 'rgba255'),
      ).toJSON(true),
      environmentWColorBoost: ColorUtils.create(
         colorFrom(1, 0.75, 0.25, 'rgba'),
      ).toJSON(true),
   },
];
info.difficulties.forEach((d) => {
   d.customData = {};
   d.colorSchemeId = 0;
   copyToCustomColor(d, info.colorSchemes[d.colorSchemeId]);

   if (d.difficulty !== 'ExpertPlus') {
      return;
   }

   d.authors.mappers = ['Building Blocks'];
   d.authors.lighters = ['Building Blocks'];

   d.customData._difficultyLabel = 'Melancholy';
   // d.customData._information = ['Here once more'];
   d.customData._suggestions = ['Chroma'];
});

delete info.colorSchemes[0].environmentWColor;
delete info.colorSchemes[0].environmentWColorBoost;

const beatmap = Beatmap.createOne(
   readDifficultyFileSync('ExpertStandard.dat', 3),
);
const lightshow = Beatmap.createOne(
   readLightshowFileSync('Apple.lightshow.dat', 4, {
      directory: beatmapWipPath('Bad Apple!! Light'),
   }),
);

beatmap.lightshow = lightshow.lightshow;
animateIt(beatmap);
lightItUp(beatmap);
sortCustomData(beatmap.difficulty.customData);

beatmap.difficulty.customData.bookmarks = [];
beatmap.difficulty.customData = aggregateCustomData(
   beatmap.difficulty.customData,
   bookmarks.create(),
);

writeDifficultyFileSync(beatmap, 3, {
   filename: 'ExpertPlusStandard.dat',
   save: { preprocess: [deduplicateData, shortenName] },
});
writeInfoFileSync(info, 2);

counter(import.meta.url);

logger.info('Basic Events:', beatmap.basicEvents!.length);
logger.info('Color Groups:', beatmap.lightColorEventBoxGroups!.length);
logger.info('Rotation Groups:', beatmap.lightRotationEventBoxGroups!.length);
logger.info(
   'Translation Groups:',
   beatmap.lightTranslationEventBoxGroups!.length,
);
logger.info('Environments:', beatmap.difficulty.customData.environment!.length);
logger.info(
   'Custom Events:',
   beatmap.difficulty.customData.customEvents!.length,
);
logger.info(
   'Materials:',
   Object.keys(beatmap.difficulty.customData.materials!).length,
);
logger.info(
   'Point Definitions:',
   Object.keys(beatmap.difficulty.customData.pointDefinitions!)?.length,
);
