for await (const dir of Deno.readDir('./environment-enhancement')) {
    if (dir.isDirectory) {
        try {
            const p = Deno.run({
                cmd: [
                    'deno',
                    'run',
                    '--allow-write',
                    `./environment-enhancement/${dir.name}/environment.ts`,
                ],
                stdout: 'piped',
            });
            await p.status();
            const output = await p.output();
            Deno.stdout.write(output);
        } catch (e) {
            console.error(e);
        }
    }
}
