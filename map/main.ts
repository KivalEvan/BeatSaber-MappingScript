import { process, readdirSync, resolve } from '../deps.ts';

const args = (process.argv || []).slice(2);
const name = args.join('').toLowerCase();
const path = import.meta.dirname!;

if (!name) {
   throw new Error('You need the name of the script folder/files');
}

const entries = [...readdirSync(path, { withFileTypes: true })].filter(
   (e) => e.isDirectory(),
);
const others = [
   ...readdirSync(resolve(path, 'others'), { withFileTypes: true }),
].filter((e) => e.isFile() && e.name.endsWith('.ts'));

try {
   const dir = entries.find((e) => e.name.toLowerCase() === name);
   if (dir) {
      console.time('Runtime');
      await import(
         (process.platform === 'win32' ? 'file:///' : '') +
            resolve(path, dir.name, 'main.ts')
      );
   } else {
      const o = others.find(
         (e) => e.name.split('.')[0].trim().toLowerCase() === name,
      );
      if (!o) throw new Error('Script not found');
      console.time('Runtime');
      await import(
         (process.platform === 'win32' ? 'file:///' : '') +
            resolve(path, 'others', o.name)
      );
   }
} catch (e) {
   console.error(e);
} finally {
   console.timeEnd('Runtime');
}
