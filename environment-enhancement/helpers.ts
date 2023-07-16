import { dirname, resolve } from '../deps.ts';
import { types, logger } from '../depsLocal.ts';

export function environmentSave(data: types.external.IEnvironmentJSON, originPath: string) {
   Deno.writeTextFileSync(
      resolve(dirname(new URL(originPath).pathname), data.name + '.dat'),
      JSON.stringify(data)
   );
   logger.info(`Written ${data.name} environment JSON`);
}
