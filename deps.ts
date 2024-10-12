export { default as process } from 'node:process';
export { dirname, resolve } from 'node:path';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { readdir, readFile, writeFile } from 'node:fs/promises';

export const readTextFileSync = (path: string): string => readFileSync(path, 'utf8');
export const readTextFile = (path: string): Promise<string> => readFile(path, 'utf8');
export const writeTextFileSync = (path: string, data: string): void =>
   writeFileSync(path, data, 'utf8');
export const writeTextFile = (path: string, data: string): Promise<void> =>
   writeFile(path, data, 'utf8');

export const ensureFileSync = (path: string): void => {
   if (!existsSync(path)) {
      writeTextFileSync(path, '');
   }
};

export { existsSync, readdir, readdirSync, readFile, readFileSync, writeFile, writeFileSync };
