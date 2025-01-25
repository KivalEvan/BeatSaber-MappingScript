import { ensureFileSync, process, readTextFileSync, writeTextFileSync } from '../deps.ts';

export default function (path = './') {
   let target = new URL('.', path).pathname;
   if (process.platform === 'win32') {
      target = target.replace(/^\/*/, '');
   }
   ensureFileSync(target + 'count.txt');
   const count = parseInt(readTextFileSync(target + 'count.txt')) + 1;
   writeTextFileSync(target + 'count.txt', count.toString());
   console.log('Script run counter:', count);
}
