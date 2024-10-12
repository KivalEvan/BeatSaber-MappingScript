import { process, readdirSync, resolve } from '../deps.ts';
import { logger, round } from '../depsLocal.ts';

const path = import.meta.dirname!;
for (const dir of readdirSync(path, { withFileTypes: true })) {
   if (dir.isDirectory()) {
      try {
         const scr = await import(
            (process.platform === 'win32' ? 'file:///' : '') +
               resolve(path, dir.name, 'main.ts')
         );
         const startTime = performance.now();
         scr.save();
         const endTime = performance.now();
         logger.info(
            `Executed ${dir.name} script for ${
               round(
                  (endTime - startTime) / 1000,
                  3,
               )
            }s`,
         );
         logger.info(
            `Environment contains ${scr.generateEnvironment().length} elements`,
         );
      } catch (e) {
         console.error(e);
      }
   }
}
