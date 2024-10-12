import { dirname, resolve, writeTextFileSync } from '../deps.ts';
import { logger, types } from '../depsLocal.ts';

export function environmentSave(data: types.external.IEnvironmentJSON, originPath: string) {
   writeTextFileSync(
      resolve(dirname(new URL(originPath).pathname), data.name + '.dat'),
      JSON.stringify(data),
   );
   logger.tInfo(['environment-enhancement'], `Written ${data.name} environment JSON`);
}
