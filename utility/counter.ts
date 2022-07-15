export function counter(path: string) {
    let CWD = new URL('.', path).pathname;
    if (Deno.build.os === 'windows') {
        CWD = CWD.replace(/^\/*/, '');
    }
    const count = parseInt(Deno.readTextFileSync(CWD + 'count.txt')) + 1;
    Deno.writeTextFileSync(CWD + 'count.txt', count.toString());
    console.log('GIVE IT UP FOR RUN ' + count);
}
