<<<<<<< HEAD
<<<<<<< HEAD
import { dirname, resolve } from '../deps.ts';
import { utils } from '../depsLocal.ts';

for await (const dir of Deno.readDir('./environment-enhancement')) {
   if (dir.isDirectory) {
      try {
         const url = new URL(import.meta.url);
         const cmd = new Deno.Command(Deno.execPath(), {
            args: [
               'run',
               '--allow-read',
               '--allow-write',
               resolve(dirname(url.pathname), dir.name, 'main.ts'),
            ],
         });
         const startTime = performance.now();
         const { stdout, stderr } = await cmd.output();
         const endTime = performance.now();
         if (stdout.length)
            console.log(
               new TextDecoder().decode(stdout),
               `Executed ${dir.name} script for ${utils.round((endTime - startTime) / 1000, 3)}s`
            );
         if (stderr.length) console.error(new TextDecoder().decode(stderr));
=======
import { resolve } from '../deps.ts';
import { logger, utils } from '../depsLocal.ts';
import scriptDirPath from '../utility/scriptDirPath.ts';

const path = scriptDirPath(import.meta.url);
for await (const dir of Deno.readDir(path)) {
   if (dir.isDirectory) {
      try {
=======
import { resolve } from '../deps.ts';
import { logger, utils } from '../depsLocal.ts';
import scriptDirPath from '../utility/scriptDirPath.ts';

const path = scriptDirPath(import.meta.url);
for await (const dir of Deno.readDir(path)) {
   if (dir.isDirectory) {
      try {
>>>>>>> ec05bfd (njygfttrnjktrktrmj)
         const scr = await import(
            (Deno.build.os === 'windows' ? 'file:///' : '') + resolve(path, dir.name, 'main.ts')
         );
         const startTime = performance.now();
         scr.save();
         const endTime = performance.now();
         logger.info(
            `Executed ${dir.name} script for ${utils.round((endTime - startTime) / 1000, 3)}s`,
         );
<<<<<<< HEAD
>>>>>>> ec05bfd (njygfttrnjktrktrmj)
=======
>>>>>>> ec05bfd (njygfttrnjktrktrmj)
      } catch (e) {
         console.error(e);
      }
   }
}
