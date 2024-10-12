import { colorFrom, toColorObject, types } from '../depsLocal.ts';

export default function (
   infoBeatmap: types.wrapper.IWrapInfoBeatmap,
   colorScheme?: types.wrapper.IWrapInfoColorScheme,
) {
   if (!colorScheme) {
      return;
   }

   infoBeatmap.customData._colorLeft = toColorObject(
      colorFrom(colorScheme.saberLeftColor),
   );
   infoBeatmap.customData._colorRight = toColorObject(
      colorFrom(colorScheme.saberRightColor),
   );
   infoBeatmap.customData._envColorLeft = toColorObject(
      colorFrom(colorScheme.environment0Color),
   );
   infoBeatmap.customData._envColorRight = toColorObject(
      colorFrom(colorScheme.environment1Color),
   );
   infoBeatmap.customData._envColorWhite = colorScheme.environmentWColor
      ? toColorObject(colorFrom(colorScheme.environmentWColor))
      : undefined;
   infoBeatmap.customData._envColorLeftBoost = toColorObject(
      colorFrom(colorScheme.environment0ColorBoost),
   );
   infoBeatmap.customData._envColorRightBoost = toColorObject(
      colorFrom(colorScheme.environment1ColorBoost),
   );
   infoBeatmap.customData._envColorWhiteBoost = colorScheme.environmentWColorBoost
      ? toColorObject(colorFrom(colorScheme.environmentWColorBoost))
      : undefined;
   infoBeatmap.customData._obstacleColor = toColorObject(
      colorFrom(colorScheme.obstaclesColor),
   );
}
