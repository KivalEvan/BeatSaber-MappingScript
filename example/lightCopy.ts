/* Copy lightshow from specific difficulty file to all within Info.dat.
 * Command-line flag:
 * -p | --path : map folder path.
 * -e | --env : copy environment enhancement.
 * -f | --force : force copy to same file.
 * -m | --merge : merge instead of overriding the event property
 * example run command:
 * deno run --allow-read --allow-write lightCopy.ts -p "FolderPath" CopyFile.dat
 */
import * as bsmap from '../mod.ts';
import { parse } from 'https://deno.land/std@0.125.0/flags/mod.ts';

const args = parse(Deno.args, {
    string: ['p'],
    boolean: ['e', 'f', 'm'],
    alias: { p: 'path', e: 'env', f: 'force', m: 'merge' },
});
bsmap.globals.path = (args.p as string) ?? './';
console.log(`Map directory: ${bsmap.globals.path}`);
if (!args._[0]) {
    throw Error('Unspecified difficulty file to copy light.');
}
if (typeof args._[0] === 'number') {
    throw Error('Number is not accepted value.');
}
const lightToCopy = args._[0];
const lightshow = bsmap.load.difficultySync(lightToCopy, 2);
if (args.e && !lightshow.customData?._environment) {
    throw Error('Selected lightshow has no environment enhancement.');
}

let info: ReturnType<typeof bsmap.load.infoSync>;
try {
    info = bsmap.load.infoSync();
} catch {
    console.error('Could not load Info.dat from folder, retrying with info.dat...');
    try {
        info = bsmap.load.infoSync({ filePath: 'info.data' });
    } catch {
        throw Error('Info.dat is missing from folder.');
    }
}
for (const set of info._difficultyBeatmapSets) {
    for (const d of set._difficultyBeatmaps) {
        if (!args.f && lightToCopy === d._beatmapFilename) {
            continue;
        }
        console.log(`Copying lightshow to ${set._beatmapCharacteristicName} ${d._difficulty}`);
        const difficulty = bsmap.load.difficultySync(d._beatmapFilename, 2);
        difficulty.version = lightshow.version;
        if (args.e) {
            if (difficulty.customData) {
                difficulty.customData._environment = lightshow.customData!._environment;
            } else {
                difficulty.customData = {
                    _environment: lightshow.customData!._environment,
                };
            }
        }
        if (args.m) {
            difficulty.events.push(...lightshow.events);
        } else {
            difficulty.events = lightshow.events;
        }
        bsmap.save.difficultySync(difficulty, {
            filePath: d._beatmapFilename,
        });
    }
}
