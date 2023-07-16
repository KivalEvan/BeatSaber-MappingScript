import { globals, isV3, load, save } from '../../depsLocal.ts';
import { insertEnvironment } from '../../environment-enhancement/torii/mod.ts';
import wipPath from '../../utility/wipPath.ts';

globals.directory = wipPath('23d4d (Endless Night - Kival Evan)');

const info = load.infoSync();
const difficultyList = load.difficultyFromInfoSync(info);
const lightshow = load.difficultySync('ExpertPlusStandard.dat', 3);

difficultyList.forEach((d) => {
   if (isV3(d.data)) {
      insertEnvironment(d.data);
      d.data.basicEvents = lightshow.basicEvents;
      d.data.colorBoostEvents = lightshow.colorBoostEvents;

      let isRight = true;
      let justOnce = true;
      const wallDuration = 0.125;
      d.data.obstacles = d.data.obstacles.filter((o) => o.time < 194);
      for (const n of d.data.colorNotes) {
         if ((n.time >= 194 && n.time < 322) || (n.time >= 354 && n.time < 386)) {
            if (
               (n.time >= 197 && n.time < 198) ||
               (n.time >= 201 && n.time < 202) ||
               (n.time >= 206 && n.time < 210) ||
               (n.time >= 213 && n.time < 214) ||
               (n.time >= 217 && n.time < 218) ||
               (n.time >= 222 && n.time < 226) ||
               (n.time >= 229 && n.time < 230) ||
               (n.time >= 233 && n.time < 234) ||
               (n.time >= 238 && n.time < 242) ||
               (n.time >= 245 && n.time < 246) ||
               (n.time >= 249 && n.time < 250) ||
               (n.time >= 254 && n.time < 258) ||
               (n.time >= 197 + 64 && n.time < 198 + 64) ||
               (n.time >= 201 + 64 && n.time < 202 + 64) ||
               (n.time >= 206 + 64 && n.time < 210 + 64) ||
               (n.time >= 213 + 64 && n.time < 214 + 64) ||
               (n.time >= 217 + 64 && n.time < 218 + 64) ||
               (n.time >= 222 + 64 && n.time < 226 + 64) ||
               (n.time >= 229 + 64 && n.time < 230 + 64) ||
               (n.time >= 233 + 64 && n.time < 234 + 64) ||
               (n.time >= 238 + 64 && n.time < 242 + 64) ||
               (n.time >= 245 + 64 && n.time < 246 + 64) ||
               (n.time >= 249 + 64 && n.time < 250 + 64) ||
               (n.time >= 254 + 64 && n.time < 258 + 64) ||
               (n.time >= 197 + 160 && n.time < 198 + 160) ||
               (n.time >= 201 + 160 && n.time < 202 + 160) ||
               (n.time >= 206 + 160 && n.time < 210 + 160) ||
               (n.time >= 213 + 160 && n.time < 214 + 160) ||
               (n.time >= 217 + 160 && n.time < 218 + 160) ||
               (n.time >= 222 + 160 && n.time < 226 + 160)
            ) {
               d.data.addObstacles({
                  b: n.time,
                  d: wallDuration,
                  x: n.posX,
                  y: 0,
                  w: 1,
                  h: -1,
               });
               continue;
            }
            if (
               justOnce &&
               (n.time === 198 ||
                  n.time === 202 ||
                  n.time === 198 + 16 ||
                  n.time === 202 + 16 ||
                  n.time === 198 + 32 ||
                  n.time === 202 + 32 ||
                  n.time === 198 + 48 ||
                  n.time === 202 + 48 ||
                  n.time === 198 + 64 ||
                  n.time === 202 + 64 ||
                  n.time === 198 + 64 + 16 ||
                  n.time === 202 + 64 + 16 ||
                  n.time === 198 + 64 + 32 ||
                  n.time === 202 + 64 + 32 ||
                  n.time === 198 + 64 + 48 ||
                  n.time === 202 + 64 + 48 ||
                  n.time === 198 + 64 + 64 ||
                  n.time === 202 + 64 + 64 ||
                  n.time === 198 + 160 ||
                  n.time === 202 + 160 ||
                  n.time === 198 + 160 + 16 ||
                  n.time === 202 + 160 + 16 ||
                  n.time === 198 ||
                  n.time === 202 ||
                  n.time === 210 ||
                  n.time === 226 ||
                  n.time === 242 ||
                  n.time === 258 ||
                  n.time === 210 + 64 ||
                  n.time === 226 + 64 ||
                  n.time === 242 + 64 ||
                  n.time === 258 + 64 ||
                  n.time === 210 + 160 ||
                  n.time === 226 + 160)
            ) {
               isRight = !isRight;
               justOnce = false;
            } else {
               justOnce = true;
            }
            d.data.addObstacles({
               b: n.time,
               d: wallDuration,
               x: (isRight ? 4 : -4) + n.posX,
               y: n.posY + 1,
               w: 1,
               h: 1,
            });
         }
      }
   }

   save.difficultySync(d.data);
});
