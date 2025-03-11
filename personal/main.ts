import { globals, readInfoFileSync, writeInfoFileSync } from '@bsmap';
import beatmapWipPath from '../utility/beatmapWipPath.ts';
import copyToCustomColor from '../utility/copyToCustomColor.ts';
import { resolve } from '../deps.ts';

const mapsToHandle = ['My Soul Is Your Soul', 'Never Know', 'On My Own'];

for (const mappo of mapsToHandle) {
   globals.directory = beatmapWipPath(mappo);

   const info = readInfoFileSync();
   info.customData._contributors ||= [];
   info.customData._contributors.some((c) => c._name === 'Kival Evan') ||
      info.customData._contributors.push({
         _role: 'Mapper',
         _name: 'Kival Evan',
         _iconPath: 'iconKivalEvan.png',
      });
   Deno.copyFileSync(
      resolve('personal', 'ma.png'),
      resolve(globals.directory, 'iconKivalEvan.png'),
   );
   info.difficulties.forEach((diff) => {
      copyToCustomColor(diff, info.colorSchemes[diff.colorSchemeId]);
   });

   writeInfoFileSync(info);
}
