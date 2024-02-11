import * as loc from '../BeatSaber-Deno/mod.ts';
import * as pub from 'https://deno.land/x/bsmap@1.5.3/mod.ts';

loc.logger.setLevel(5);
pub.logger.setLevel(5);

Deno.bench('loc', (b) => {
   const json = JSON.parse(Deno.readTextFileSync('EasyStandard.dat'));
   b.start();
   loc.v3.parseDifficulty(json);
   b.end();
});

Deno.bench('pub', (b) => {
   const json = JSON.parse(Deno.readTextFileSync('EasyStandard.dat'));
   b.start();
   pub.v3.parseDifficulty(json);
   b.end();
});
