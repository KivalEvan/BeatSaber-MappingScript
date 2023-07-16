import { parse, resolve } from '../deps.ts';
import scriptDirPath from '../utility/scriptDirPath.ts';

const args = parse(Deno.args);
const name = args._.join('').toLowerCase();
const path = scriptDirPath(import.meta.url);

if (!name) {
   throw new Error('You need the name of the script folder/files');
}

const entries = [...Deno.readDirSync(path)].filter((e) => e.isDirectory);
const others = [...Deno.readDirSync(resolve(path, 'others'))].filter(
   (e) => e.isFile && e.name.endsWith('.ts'),
);

try {
   const dir = entries.find((e) => e.name.toLowerCase() === name);
   if (dir) {
      console.time('Runtime');
      await import(
         (Deno.build.os === 'windows' ? 'file:///' : '') + resolve(path, dir.name, 'main.ts')
      );
   } else {
      const o = others.find((e) => e.name.split('.')[0].trim().toLowerCase() === name);
      if (!o) throw new Error('Script not found');
      console.time('Runtime');
      (await import(Deno.build.os === 'windows' ? 'file:///' : '')) +
         resolve(path, 'others', o.name);
   }
} catch (e) {
   console.error(e);
} finally {
   console.timeEnd('Runtime');
}
