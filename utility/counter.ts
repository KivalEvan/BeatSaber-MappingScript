import { ensureFileSync } from 'https://deno.land/std@0.149.0/fs/mod.ts';

export function counter(path = './') {
   let CWD = new URL('.', path).pathname;
   if (Deno.build.os === 'windows') {
      CWD = CWD.replace(/^\/*/, '');
   }
   ensureFileSync(CWD + 'count.txt');
   const count = parseInt(Deno.readTextFileSync(CWD + 'count.txt')) + 1;
   Deno.writeTextFileSync(CWD + 'count.txt', count.toString());
   console.log('GIVE IT UP FOR RUN ' + count);
}
