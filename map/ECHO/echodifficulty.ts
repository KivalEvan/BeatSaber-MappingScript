import jankySliderConvert from 'https://deno.land/x/bsmap@1.0.0/example/jankySliderConvert.ts';
import * as bsmap from 'https://deno.land/x/bsmap@1.0.0/mod.ts';

console.log('Running script...');
console.time('Runtime');
bsmap.globals.path = '/mnt/plextor/SteamLibrary/steamapps/common/Beat Saber/Beat Saber_Data/CustomWIPLevels/ECHO/';

const info = bsmap.load.infoSync();
const lightshow = bsmap.load.difficultySync('EasyLightshow.dat', 3);
const difficultyList = bsmap.load.difficultyFromInfoSync(info);
const diffFile: string[] = [];

difficultyList.forEach((d) => {
    if (!bsmap.version.isV3(d.data)) {
        d.data = bsmap.convert.V2toV3(d.data, true);
    }
    diffFile.push(bsmap.globals.path + d.fileName);

    d.data.basicBeatmapEvents = lightshow.basicBeatmapEvents;
    d.data.customData.environment = lightshow.customData.environment;
    d.data.customData.customEvents = lightshow.customData.customEvents;
    jankySliderConvert(d.data);
});

bsmap.save.difficultyListSync(difficultyList, {
    path: bsmap.globals.path.replace('CustomWIPLevels', 'CustomLevels'),
});

console.timeEnd('Runtime');

bsmap.logger.info('Now watching for difficulty file changes...');
const watcher = Deno.watchFs(bsmap.globals.path, { recursive: false });
const notifiers = new Map<string, number>();
for await (const ev of watcher) {
    const dataString = JSON.stringify(ev);
    if (notifiers.has(dataString)) {
        clearTimeout(notifiers.get(dataString));
        notifiers.delete(dataString);
    }
    notifiers.set(
        dataString,
        setTimeout(() => {
            if (ev.kind === 'modify') {
                if (diffFile.includes(ev.paths[0])) {
                    bsmap.logger.info(new Date().toISOString(), 'changes made in', ev.paths[0]);
                    try {
                        const d = bsmap.load.difficultySync(ev.paths[0], 3, { path: '' });
                        d.basicBeatmapEvents = lightshow.basicBeatmapEvents;
                        d.customData.environment = lightshow.customData.environment;
                        d.customData.customEvents = lightshow.customData.customEvents;
                        bsmap.save.difficultySync(d, {
                            path: '',
                            filePath: ev.paths[0].replace('CustomWIPLevels', 'CustomLevels'),
                        });
                        jankySliderConvert(d);
                        bsmap.logger.info('Watching next...');
                    } catch (e) {
                        bsmap.logger.error(e);
                    }
                }
            }
            notifiers.delete(dataString);
        }, 20),
    );
}
