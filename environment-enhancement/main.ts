import { resolve } from '../deps.ts';
import { logger, round } from '../depsLocal.ts';
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
         logger.info(`Executed ${dir.name} script for ${round((endTime - startTime) / 1000, 3)}s`);
         logger.info(`Environment contains ${scr.generateEnvironment().length} elements`);
      } catch (e) {
         console.error(e);
      }
   }
}
