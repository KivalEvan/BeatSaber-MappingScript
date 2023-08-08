import { resolve } from '../deps.ts';
import { logger, utils } from '../depsLocal.ts';
import scriptDirPath from '../utility/scriptDirPath.ts';

const path = scriptDirPath(import.meta.url);
for await (const dir of Deno.readDir(path)) {
   if (dir.isDirectory) {
      try {
         const scr = await import(
            (Deno.build.os === 'windows' ? 'file:///' : '') + resolve(path, dir.name, 'main.ts')
         );
         const startTime = performance.now();
         scr.save();
         const endTime = performance.now();
         logger.info(
            `Executed ${dir.name} script for ${utils.round((endTime - startTime) / 1000, 3)}s`,
         );
      } catch (e) {
         console.error(e);
      }
   }
}
