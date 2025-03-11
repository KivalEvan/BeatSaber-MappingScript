import { process, readdirSync, resolve } from '../deps.ts';
import { debounce } from 'jsr:@std/async/debounce';

const args = (process.argv || []).slice(2);
const name = args
   .filter((e) => !e.startsWith('-'))
   .join('')
   .toLowerCase();
const path = import.meta.dirname!;

if (!name) {
   throw new Error('You need the name of the script folder/files');
}

const entries = [...readdirSync(path, { withFileTypes: true })].filter((e) => e.isDirectory());
const others = [
   ...readdirSync(resolve(path, 'others'), { withFileTypes: true }),
].filter((e) => e.isFile() && e.name.endsWith('.ts'));

const log = debounce((event: Deno.FsEvent, run: () => void) => {
   if (event.paths[0].endsWith('count.txt')) return;
   console.log('[%s] %s', event.kind, event.paths[0]);
   run();
}, 1000);

async function watchthisshit(path: string, run: () => void) {
   run();
   const watcher = Deno.watchFs(path);
   for await (const event of watcher) {
      if (event.kind === 'modify') log(event, run);
   }
}

try {
   const dir = entries.find((e) => e.name.toLowerCase() === name);
   if (dir) {
      const folderPath = (process.platform === 'win32' ? 'file:///' : '') +
         resolve(path, dir.name);
      if (args.includes('--watch')) {
         await watchthisshit(folderPath, () => {
            console.time('Runtime');
            const output = new Deno.Command(Deno.execPath(), {
               args: [
                  'run',
                  '--allow-read',
                  '--allow-write',
                  '--allow-net',
                  resolve(folderPath, 'main.ts'),
               ],
            }).outputSync();
            console.log(new TextDecoder().decode(output.stdout));
            console.log(new TextDecoder().decode(output.stderr));
            console.timeEnd('Runtime');
         });
      } else {
         console.time('Runtime');
         await import(resolve(folderPath, 'main.ts'));
      }
   } else {
      const o = others.find(
         (e) => e.name.split('.')[0].trim().toLowerCase() === name,
      );
      if (!o) throw new Error('Script not found');
      const folderPath = (process.platform === 'win32' ? 'file:///' : '') +
         resolve(path, 'others');
      if (args.includes('--watch')) {
         await watchthisshit(folderPath, () => {
            console.time('Runtime');
            const output = new Deno.Command(Deno.execPath(), {
               args: [
                  'run',
                  '--allow-read',
                  '--allow-write',
                  '--allow-net',
                  resolve(folderPath, o.name),
               ],
            }).outputSync();
            console.log(new TextDecoder().decode(output.stdout));
            console.log(new TextDecoder().decode(output.stderr));
            console.timeEnd('Runtime');
         });
      } else {
         console.time('Runtime');
         await import(resolve(folderPath, o.name));
      }
   }
} catch (e) {
   console.error(e);
} finally {
   console.timeEnd('Runtime');
}
