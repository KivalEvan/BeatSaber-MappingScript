import * as bsmap from '../../depsLocal.ts';

export function lightshow() {
    const d2 = bsmap.load.difficultySync('Lightshow.dat', 2);
    bsmap.convert.chromaLightGradientToVanillaGradient(d2, true);
    const data = bsmap.convert.V2toV3(d2, true);

    // const e = data.customData.environment?.filter((e) => e.id).map((e) => e.id);
    // console.log(data.customData.environment);
    // console.log(e?.splice(60));
    data.customData.environment?.forEach((e) => {
        if (e.id) {
            e.id = e.id
                .replace('d+', 'd*')
                .replace(/\^/, '')
                .replace('.*.*', '.*')
                .replace('{4}', '\\[\\d*\\]')
                .replace(/^\.\*/, '');
        }
    });
    Deno.writeTextFileSync(
        'env.json',
        JSON.stringify(data.customData.environment!, null, 2),
    );
    return data;
}
