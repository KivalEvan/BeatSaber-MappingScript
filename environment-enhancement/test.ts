import { globals, load, save } from '../depsLocal.ts';
import wipPath from '../utility/wipPath.ts';
import { insertEnvironment } from './prayers/mod.ts';

globals.directory = wipPath('EnvironmentTest');

const d3 = load.difficultySync('Hard.dat', 3);
d3.basicEvents = [];
for (let i = 0; i < 5; i++) {
   d3.addBasicEvents({ b: 0, et: i, i: i === 0 || i === 4 ? 5 : 1 });
}
insertEnvironment(d3);

save.difficultySync(d3);
