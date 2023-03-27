import { globals, isV3, load, save } from '../../depsLocal.ts';
import { insertEnvironment } from '../../environment-enhancement/torii/mod.ts';
import wipPath from '../../utility/wipPath.ts';

console.log('Running script...');
console.time('Runtime');

globals.directory = wipPath('Endless Night');

const info = load.infoSync();
const difficultyList = load.difficultyFromInfoSync(info);

difficultyList.forEach((d) => {
    if (isV3(d.data)) insertEnvironment(d.data);
    save.difficultySync(d.data);
});

console.timeEnd('Runtime');
