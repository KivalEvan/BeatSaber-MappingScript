import { ensureFileSync, process, readTextFileSync, writeTextFileSync } from '../deps.ts';

export default function (path = './') {
   let CWD = new URL('.', path).pathname;
   if (process.platform === 'win32') {
      CWD = CWD.replace(/^\/*/, '');
   }
   ensureFileSync(CWD + 'count.txt');
   const count = parseInt(readTextFileSync(CWD + 'count.txt')) + 1;
   writeTextFileSync(CWD + 'count.txt', count.toString());
   console.log('Script run counter:', count);
}
