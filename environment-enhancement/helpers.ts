import { dirname, resolve } from '../deps.ts';
<<<<<<< HEAD
<<<<<<< HEAD
import { types, logger } from '../depsLocal.ts';
=======
import { logger, types } from '../depsLocal.ts';
>>>>>>> ec05bfd (njygfttrnjktrktrmj)
=======
import { logger, types } from '../depsLocal.ts';
>>>>>>> ec05bfd (njygfttrnjktrktrmj)

export function environmentSave(data: types.external.IEnvironmentJSON, originPath: string) {
   Deno.writeTextFileSync(
      resolve(dirname(new URL(originPath).pathname), data.name + '.dat'),
<<<<<<< HEAD
<<<<<<< HEAD
      JSON.stringify(data)
   );
   logger.info(`Written ${data.name} environment JSON`);
=======
      JSON.stringify(data),
   );
   logger.tInfo(['environment-enhancement'], `Written ${data.name} environment JSON`);
>>>>>>> ec05bfd (njygfttrnjktrktrmj)
=======
      JSON.stringify(data),
   );
   logger.tInfo(['environment-enhancement'], `Written ${data.name} environment JSON`);
>>>>>>> ec05bfd (njygfttrnjktrktrmj)
}
