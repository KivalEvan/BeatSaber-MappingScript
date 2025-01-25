import { resolve } from '../deps.ts';
import { globals, types } from '@bsmap';
import { mediainfo } from '../vendor/mediainfo.ts';

export default async function (info: types.wrapper.IWrapInfo): Promise<number> {
   try {
      const r = await mediainfo.get(
         resolve(globals.directory, info.audio.filename),
      );
      const d = parseFloat(r.info[0].Duration);
      info.audio.duration = d;
      return d;
   } catch (_) {
      return 0;
   }
}
