import { load, save } from '../../depsLocal.ts';

const INPUT_FILE = 'ExpertPlusStandardOriginal.dat';
const OUTPUT_FILE = 'ExpertPlusStandard.dat';

const difficulty = load.difficultySync(INPUT_FILE, 2).setFileName(OUTPUT_FILE);
const events = difficulty.events;

events.forEach((e) => {
    e.floatValue = 1;
});

function normalize(x: number, min: number, max: number) {
    return (x - min) / (max - min);
}

function lerp(x: number, y: number, a: number) {
    return x + (y - x) * a;
}

function gradientFloat(t1: number, t2: number, n1: number, n2: number, type?: number) {
    let norm = 0;
    for (let i = 0; i < events.length; i++) {
        if (events[i].time > t2) {
            break;
        }
        if (events[i].time < t1 || (type != null && events[i].type !== type)) {
            continue;
        }
        norm = normalize(events[i].time, t1, t2);
        events[i].floatValue = lerp(n1, n2, norm);
    }
}

function randomizeFloat(t1: number, t2: number, min: number, max: number, type?: number) {
    max = Math.max(min, max);
    for (let i = 0; i < events.length; i++) {
        if (events[i].time > t2) {
            break;
        }
        if (events[i].time < t1 || (type != null && events[i].type !== type)) {
            continue;
        }
        events[i].floatValue = min + Math.random() * (max - min);
    }
}

randomizeFloat(0, 32, 0.25, 0.5, 4);
randomizeFloat(65.5, 69.9, 1.5, 2);
for (let i = 0; i < 15; i++) {
    gradientFloat(304 + i * 3, 305 + i * 3, 0.625, 1, 0);
}
gradientFloat(345, 348, 0.75, 1.375, 0);
gradientFloat(347, 349, 1, 1.5, 1);
randomizeFloat(349, 354, 1.5, 2, 1);
gradientFloat(354, 356, 1.5, 1, 1);
gradientFloat(419, 426.9, 1, 1.5);
randomizeFloat(469, 472.99, 1.5, 2);
gradientFloat(501, 505.5, 1.25, 0.25, 4);
gradientFloat(517, 523.5, 1, 0.125, 4);
gradientFloat(537, 544.9, 1, 1.5);
gradientFloat(594.66, 601.67, 1, 1.5, 0);
gradientFloat(614.42, 615.3, 1.25, 0.75, 1);
gradientFloat(616.04, 617.6, 1.125, 0.375, 1);
gradientFloat(705.37, 706.32, 0.375, 1.25, 0);
gradientFloat(705.37, 706.32, 0.375, 1.25, 1);
randomizeFloat(834.37, 836.32, 1.5, 2);
gradientFloat(874.37, 882.32, 2, 0.75, 1);
randomizeFloat(882.32, 900.32, 0.5, 0.75, 1);

save.difficultySync(difficulty);
