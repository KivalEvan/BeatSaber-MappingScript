import {
   globals,
   lerpColor,
   load,
   normalize,
   random,
   round,
   save,
   shuffle,
} from '../../depsLocal.ts';
import { insertEnvironment } from '../../environment-enhancement/torii/mod.ts';
import wipPath from '../../utility/wipPath.ts';

console.time('Runtime');

globals.directory = wipPath('2eafa (Genryuu Kaiko - Kival Evan)');

const info = load.infoSync(2, {
   dataCheck: { enabled: true, throwError: false },
});
const difficultyList = load.beatmapFromInfoSync(info);
const cd = load.difficultySync('EasyNoArrows.dat', 3);
cd.customData.bookmarks?.forEach((b) => {
   b.c = lerpColor([0, 0, 0.25], [0, 0, 0.5], normalize(b.b, 0, 1000), 'hsva');
   if (b.b === 294 || b.b === 518 || b.b === 774) b.c = [1, 1, 1];
   if (b.b === 198 || b.b === 214 || b.b === 422 || b.b === 438) {
      b.c = [1, 0, 0];
   }
   if (b.b >= 710 && b.b <= 770) {
      b.c = lerpColor(
         [330, 1, 1],
         [360, 1, 1],
         normalize(b.b, 710, 770),
         'hsva',
      );
   }
   if (b.b >= 645 && b.b <= 693) {
      b.c = lerpColor(
         [300, 1, 1],
         [315, 1, 1],
         normalize(b.b, 645, 693),
         'hsva',
      );
   }
   if (b.b === 718 || b.b === 750) b.c = [0.5, 0.5, 0.5];
   if (b.b === 719 || b.b === 734 || b.b === 751) b.c = [1, 1, 1];
});

cd.customData.bookmarks
   ?.map((b) => b)
   .forEach((b) => {
      if ((b.b >= 135 && b.b <= 183) || (b.b >= 391 && b.b <= 407)) {
         for (let i = 1; i <= 8; i++) {
            const str = b.n.split('');
            shuffle(str);
            cd.customData.bookmarks!.push({
               b: b.b - i / 8,
               n: str.slice(0, round(b.n.length / i)).join(''),
               c: lerpColor(b.c!, [0, 0, 0], i / 8),
            });
         }
         for (let i = 1; i <= 8; i++) {
            if (b.b === 183 || b.b === 407) continue;
            const str = b.n.split('');
            shuffle(str);
            cd.customData.bookmarks!.push({
               b: b.b + 14 + (i - 1) / 8,
               n: str.slice(0, round(b.n.length / i)).join(''),
               c: lerpColor(b.c!, [0, 0, 0], i / 8),
            });
         }
      }
      if (b.b === 183 || b.b === 407) {
         cd.customData.bookmarks!.push({ b: b.b + 13, n: '...', c: [0, 0, 0] });
         for (let i = 1; i <= 16; i++) {
            const str = b.n.split('');
            shuffle(str);
            cd.customData.bookmarks!.push({
               b: b.b + 11 + (i - 1) / 8,
               n: str.slice(0, round(b.n.length / i)).join(''),
               c: lerpColor(b.c!, [0, 0, 0], i / 16),
            });
         }
      }
      if ((b.b >= 229 && b.b <= 277) || (b.b >= 453 && b.b <= 501)) {
         b.b++;
         for (let i = 1; i <= 8; i++) {
            const str = b.n.split('');
            shuffle(str);
            cd.customData.bookmarks!.push({
               b: b.b - i / 8,
               n: str.slice(0, round(b.n.length / i)).join(''),
               c: lerpColor(b.c!, [1, 1, 1], i / 8),
            });
         }
         for (let i = 1; i <= 8; i++) {
            if (b.b === 278 || b.b === 502) continue;
            const str = b.n.split('');
            shuffle(str);
            cd.customData.bookmarks!.push({
               b: b.b + 14 + (i - 1) / 8,
               n: str.slice(0, round(b.n.length / i)).join(''),
               c: lerpColor(b.c!, [1, 1, 1], i / 8),
            });
         }
      }
      if (b.b >= 359 && b.b <= 375) {
         if (b.b === 359) {
            for (let i = 1; i <= 8; i++) {
               const str = b.n.split('');
               shuffle(str);
               cd.customData.bookmarks!.push({
                  b: b.b - i / 8,
                  n: str.slice(0, round(b.n.length / i)).join(''),
                  c: lerpColor(b.c!, [0, 0, 0], i / 8),
               });
            }
         } else {
            for (let i = 1; i <= 8; i++) {
               const str = b.n.split('');
               shuffle(str);
               cd.customData.bookmarks!.push({
                  b: b.b - i / 8,
                  n: str.join(''),
                  c: lerpColor(b.c!, [0, 0, 0], i / 8),
               });
            }
         }
         for (let j = 0; j < 2; j++) {
            for (let i = 0; i < 8; i++) {
               const str = b.n.split('');
               shuffle(str);
               cd.customData.bookmarks!.push({
                  b: b.b + 7 + i / 8 + j * 4,
                  n: str.join(''),
                  c: [random()].reduce(
                     (p, v) => {
                        p[0] = v;
                        p[1] = v;
                        p[2] = v;
                        return p;
                     },
                     [0, 0, 0],
                  ),
               });
            }
            cd.customData.bookmarks!.push({
               b: b.b + 8 + j * 4,
               n: b.n,
               c: b.c,
            });
         }
      }
      if (b.b === 375) {
         for (let i = 1; i <= 8; i++) {
            const str = b.n.split('');
            shuffle(str);
            cd.customData.bookmarks!.push({
               b: b.b + 14 + (i - 1) / 8,
               n: str.slice(0, round(b.n.length / i)).join(''),
               c: lerpColor(b.c!, [0, 0, 0], i / 8),
            });
         }
      }
      if (b.b >= 645 && b.b <= 693) {
         b.b++;
         for (let i = 1; i <= 8; i++) {
            const str = b.n.split('');
            shuffle(str);
            cd.customData.bookmarks!.push({
               b: b.b - i / 8,
               n: str.slice(0, round(b.n.length / i)).join(''),
               c: lerpColor(b.c!, [1, 1, 1], i / 8),
            });
         }
         for (let i = 1; i <= 8; i++) {
            if (b.b === 694) continue;
            const str = b.n.split('');
            shuffle(str);
            cd.customData.bookmarks!.push({
               b: b.b + 14 + (i - 1) / 8,
               n: str.slice(0, round(b.n.length / i)).join(''),
               c: lerpColor(b.c!, [1, 1, 1], i / 8),
            });
         }
      }
   });

difficultyList.forEach((d) => {
   if (d.version === 3) insertEnvironment(d.data);
   d.data.customData.bookmarks = cd.customData.bookmarks;
   delete d.settings.customData._requirements;
});

save.beatmapListSync(difficultyList);
save.infoSync(info);

// await ext.zip.compress(info, 'komachi.zip');
