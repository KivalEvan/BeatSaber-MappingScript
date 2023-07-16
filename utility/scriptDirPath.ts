import { dirname } from '../deps.ts';

export default function (path: string) {
   const p = new URL(path).pathname;
   return dirname(Deno.build.os === 'windows' ? p.replace(/^\//, '') : p) + '/';
}
