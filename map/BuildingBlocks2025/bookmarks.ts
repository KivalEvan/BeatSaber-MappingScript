import {
   colorFrom,
   EasingsFn,
   lerp,
   lerpColor,
   normalize,
   pRandomFn,
   rgbaToHsva,
   round,
   shuffle,
   types,
} from '@bsmap';
import { chunkify } from './utils.ts';

function contextualColor(
   time: number,
   defColor: types.ColorArray,
): types.ColorArray {
   if (time >= 519 && time < 582) {
      return lerpColor(
         rgbaToHsva(colorFrom(270, 1, 1, 'hsva')),
         rgbaToHsva(colorFrom(345, 1, 1, 'hsva')),
         normalize(time, 519, 582),
         'hsva',
      );
   }
   if (time >= 166 && time < 224) {
      return lerpColor(
         rgbaToHsva(colorFrom(150, 1, 1, 'hsva')),
         rgbaToHsva(colorFrom(60, 1, 1, 'hsva')),
         normalize(time, 166, 223),
         'hsva',
      );
   }
   if (time >= 359 && time < 388) {
      return lerpColor(
         rgbaToHsva(colorFrom(180, 1, 1, 'hsva')),
         rgbaToHsva(colorFrom(210, 1, 1, 'hsva')),
         normalize(time, 359, 387),
         'hsva',
      );
   }
   if (time >= 454 && time < 512) {
      return lerpColor(
         rgbaToHsva(colorFrom(150, 1, 1, 'hsva')),
         rgbaToHsva(colorFrom(60, 1, 1, 'hsva')),
         normalize(time, 454, 511),
         'hsva',
      );
   }
   if (time >= 39 && time < 96) {
      return lerpColor(
         colorFrom(0.125),
         colorFrom(0.375),
         normalize(time, 39, 96),
      );
   }
   if (time >= 295 && time < 352) {
      return lerpColor(
         colorFrom(0.125),
         colorFrom(0.375),
         normalize(time, 295, 352),
      );
   }

   return defColor;
}

export function create(): types.wrapper.ICustomDataDifficulty {
   const pRandom = pRandomFn('Lyrics');
   const lyrics: [number, string][] = [
      [7, '...'],
      [39, 'Even within the midst of flowing time'],
      [47, 'Look, indifference still goes round and round'],
      [55, 'As for me, my heart has separated from me'],
      [63, "I can't see it"],
      [66, "Is it true I don't know?"],
      [71, "Even if I don't move"],
      [79, 'I continue to be lengthened in the cracks of time'],
      [87, "I don't understand the rotation "],
      [95, 'I am me'],
      [98, "That's it"],
      [103, 'Am I seeing a dream?'],
      [106, 'Am I seeing nothing? '],
      [110, "Are the words that I'm speaking useless? "],
      [118, "I'm just tired of the sadness"],
      [126, "It's perfectly fine to"],
      [130, '"feel nothing"'],
      [134, 'Even if I were to speak these bewildering words'],
      [142, 'My heart is just the upper sky'],
      [150, 'What if I was able to move'],
      [158, 'Everything would return'],
      [162, "And I'd turn it black"],
      [166, 'Would this me exist in the future?'],
      [174, 'Do I exist in this world?'],
      [182, 'Am I oppressed now?'],
      [186, 'Am I sad now?'],
      [190, "I still don't know anything about me "],
      [198, 'Even when walking'],
      [202, "I'm just tired of it"],
      [206, 'So how would I care for other people'],
      [214, 'If this me were to be able to change'],
      [222, 'If I were to change'],
      [227, 'Would I turn white?'],
      [230, '>A'.repeat(25)],
      [230.5, 'A<'.repeat(25)],
      [231, '!!!'],
      [232, '...'],
      [263, '!!!'],
      [264, '...'],
      [0, ''],
      [256 + 39, 'Even within the midst of flowing time'],
      [256 + 47, 'Look, indifference still goes round and round'],
      [256 + 55, 'As for me, my heart has separated from me'],
      [256 + 63, "I can't see it"],
      [256 + 66, "Is it true I don't know?"],
      [256 + 71, "Even if I don't move"],
      [256 + 79, 'I continue to be lengthened in the cracks of time'],
      [256 + 87, "I don't understand the rotation "],
      [256 + 95, 'I am me'],
      [256 + 98, "That's it"],
      [256 + 103, 'Am I seeing a dream?'],
      [256 + 106, 'Am I seeing nothing? '],
      [256 + 110, "Are the words that I'm speaking useless? "],
      [256 + 118, "I'm just tired of the sadness"],
      [256 + 126, "It's perfectly fine to"],
      [256 + 130, '"feel nothing"'],
      [256 + 135, 'Even if I were to speak these bewildering words'],
      [256 + 142, 'My heart is just the upper sky'],
      [256 + 150, 'What if I was able to move'],
      [256 + 158, 'Everything would return'],
      [256 + 162, "And I'd turn it black"],
      [422, 'Is this time pointless?'],
      [426, 'Is there a future? '],
      [430, 'Do I exist in a place like this? '],
      [438, 'If I were to hurt'],
      [446, 'Then the words would be'],
      [451, '"good for nothing"'],
      [454, 'Do I exist in a place like this?'],
      [462, 'Do I exist in a time like this?'],
      [470, 'If this me were to be able to change'],
      [478, 'If I were to change'],
      [482, 'Will I turn white?'],
      [486, 'Am I seeing a dream?'],
      [490, 'Am I seeing nothing?'],
      [494, "Are the words that I'm speaking useless?"],
      [502, "I'm just tired of the sadness"],
      [510, "It's perfectly fine to"],
      [515, '"feel nothing"'],
      [0, ''],
      [518, '>A'.repeat(25)],
      [518.5, 'A<'.repeat(25)],
      [519, 'Even if I were to speak these bewildering words'],
      [526, 'My heart is just the upper sky'],
      [534, 'What if I was able to move'],
      [542, 'Everything would return'],
      [546, "And I'd turn it black"],
      [550, 'If I were to move'],
      [554, 'If I were to move'],
      [558, "Then I'd break everything"],
      [562, "Then I'd break everything"],
      [566, 'If I were to be sad'],
      [570, 'If I were to be sad'],
      [574, 'Would my heart change to white?'],
      [582, 'About you'],
      [586, 'About me'],
      [590, 'About everything'],
      [594, "I still don't know a thing"],
      [598, 'If my emotional eyelids were to opens'],
      [606, "Then I'd break everything"],
      [611, 'And let it all turn to black'],
      [614, '>A'.repeat(25)],
      [614.5, 'A<'.repeat(25)],
      [615, '!!!'],
      [616, '...'],
      [647, '!!!'],
      [648, '...'],
      [679, '!!!'],
      [711, '...'],
      [743, '---'],
      [775, 'why is it hard to find good translation?'],
   ]
      .filter((b) => b[0])
      .sort((b1, b2) => +b1[0] - +b2[0]) as [number, string][];

   const lyricFadeIn = 1 / 3;
   const lyricStepIn = 6;
   const lyricFadeOut = 1 / 6;
   const lyricStepOut = 3;
   const lyricColorIn = colorFrom(0.75, 0.75, 0.75);
   const lyricColorOut = colorFrom(0, 0, 0);
   const delay = [
      [166, 1],
      [198, 1],
      [391, 1],
      [486, 1],
      [582, 1],
   ];
   const customFade: [number, number[]][] = [
      [227, [2, 1024]],
      [391, [1, 8]],
      [451, [2, 1024]],
      [515, [2, 1024]],
      [611, [2, 1024]],
   ];
   const noFadeOut = [
      95,
      162,
      190,
      222,
      227,
      230,
      230.5,
      322,
      351,
      386,
      446,
      451,
      482,
      510,
      515,
      574,
      611,
      614,
      614.5,
      606,
   ];

   const fuckenExplosion = [455, 552];
   const glitchRepeat = [
      131,
      132,
      170,
      178,
      194,
      210,
      215,
      219,
      223,
      370,
      378,
      419,
      420,
      458,
      466,
      474,
      498,
      503,
      507,
      511,
      522,
      530,
      538,
      599,
      603,
      607,
   ];
   const funkyText = [
      99,
      100,
      101,
      106.5,
      107.5,
      108,
      112,
      113.75,
      114.5,
      116,
      118.5,
      122,
      122.75,
      123.5,
      124.25,
      128,
      130.5,
      135,
      137.75,
      138.5,
      139.5,
      140,
      144,
      145.75,
      146.5,
      148,
      150.5,
      154,
      154.75,
      155.5,
      156.25,
      323,
      324,
      325,
      355,
      387,
      388,
      389,
      393.75,
      442,
      543,
      544,
      545,
      548.5,
      549,
      551,
      556,
      560,
      564,
      568,
      572,
      575,
      575.75,
      577,
      577.75,
      579,
      579.75,
   ].concat(
      [
         106.5,
         107.5,
         108,
         112,
         113.75,
         114.5,
         116,
         118.5,
         122,
         122.75,
         123.5,
         124.25,
         128,
         130.5,
         135,
         138.5,
         139.5,
         140,
         144,
         145.75,
         146.5,
         148,
         150.5,
         154,
         154.75,
         155.5,
         156.25,
      ].map((e) => e + 256 + 32),
   );
   const disappear = [102, 226, 326, 390, 450, 514, 610];
   const doshed = [
      [165, 6],
      [357, 4],
   ];
   const bwamp = [197, 485];
   const woshr = [581];

   const bookmarks: types.v3.IBookmark[] = [];
   for (const idx in lyrics) {
      const lyric = lyrics[idx];
      const localFadeIn = customFade.find((d) => d[0] === lyric[0])?.[1][0] || lyricFadeIn;
      const localStepIn = customFade.find((d) => d[0] === lyric[0])?.[1][1] || lyricStepIn;

      const localColorIn = contextualColor(lyric[0], lyricColorIn);
      const localColorOut = lyricColorOut;
      const offset = delay.find((d) => d[0] === lyric[0])?.[1] || 0;

      if (!/[a-zA-Z]/g.test(lyric[1])) {
         bookmarks.push({
            b: lyric[0],
            n: lyric[1],
            c: [1, 0, 0],
         });
         continue;
      }

      let localPrevLyric = lyric[1];
      for (let i = 0; i <= localStepIn; i++) {
         let transformedText = '';
         if (localStepIn !== lyricStepIn) {
            transformedText = lyric[1].slice(
               0,
               round(lerp(normalize(i, 0, localStepIn), 0, lyric[1].length)),
            );
            if (transformedText.length !== lyric[1].length) {
               transformedText += '|';
            }
         } else {
            transformedText = (i === localStepIn ? '' : '|') +
               lyric[1].slice(
                  round(
                     lyric[1].length -
                        (lyric[1].length * (i + 1)) / (localStepIn + 1),
                  ),
               );
         }
         if (transformedText === localPrevLyric) continue;
         bookmarks.push({
            b: lyric[0] + (localFadeIn * i) / localStepIn + offset,
            n: transformedText,
            c: lerpColor(
               localColorOut,
               localColorIn,
               normalize(i, 0, localStepIn),
            ),
         });
         localPrevLyric = transformedText;
      }

      if (noFadeOut.includes(lyric[0])) continue;
      const nextIdx = +idx + 1;
      if (lyrics.length !== nextIdx) {
         localPrevLyric = lyric[1];
         for (let i = 0; i < lyricStepOut; i++) {
            const transformedText = lyric[1].slice(
               0,
               round(
                  (lyric[1].length * (lyricStepOut - i)) / (lyricStepOut + 1),
               ),
            ) + (i === lyricStepOut ? '' : '|');
            bookmarks.push({
               b: lyrics[nextIdx][0] -
                  lyricFadeOut +
                  (lyricFadeOut * i) / lyricStepOut,
               n: transformedText,
               c: localColorOut,
            });
            localPrevLyric = transformedText;
         }
      }
   }

   glitchRepeat.forEach((time) => {
      const lyric = lyrics.findLast((l) => l[0] < time);
      if (!lyric) return;
      const localColorIn = contextualColor(time, lyricColorIn);

      bookmarks.push({
         b: time + 0.75,
         n: lyric[1],
         c: localColorIn,
      });
      for (let i = 0; i < 8; i++) {
         const chunks = shuffle(chunkify(lyric[1].split(''), i + 1));
         bookmarks.push({
            b: time + lerp(EasingsFn.easeInQuad(normalize(i, 0, 8)), 0, 0.75),
            n: chunks.map((e) => e.join('')).join(''),
            c: lerpColor([0, 0, 0], localColorIn, pRandom()),
         });
      }
   });

   fuckenExplosion.forEach((time) => {
      const lyric = lyrics.findLast((l) => l[0] < time);
      if (!lyric) return;

      bookmarks.push({
         b: time + 1,
         n: lyric[1],
         c: lyricColorOut,
      });
      for (let i = 0; i < 4; i++) {
         bookmarks.push({
            b: time + lerp(normalize(i, 0, 4), 0, 0.25) - 0.25,
            n: lyric[1]
               .split('')
               .slice(
                  lerp(normalize(i + 1, 0, 9), 0, lyric[1].length),
                  lerp(normalize(i + 1, 0, 9), lyric[1].length, 0),
               )
               .join(''),
            c: lerpColor(lyricColorIn, [0, 0, 0], normalize(i, 0, 4)),
         });
      }
      for (let i = 0; i < 16; i++) {
         bookmarks.push({
            b: time + lerp(EasingsFn.easeInQuad(normalize(i, 0, 16)), 0, 1),
            n: shuffle(
               lyric[1].split('').concat(lyric[1].split(''), lyric[1].split('')),
            )
               .slice(
                  0,
                  lerp(
                     normalize(16 - i, 0, 16),
                     lyric[1].length,
                     lyric[1].length * 3,
                  ),
               )
               .join(''),
            c: lerpColor([1, 0, 0], lyricColorOut, i / 16),
         });
      }
   });

   funkyText.forEach((time) => {
      const lyric = lyrics.findLast((l) => l[0] < time);
      if (!lyric) return;
      const localColorIn = contextualColor(time, lyricColorIn);

      const text = lyric[1]
         .split('')
         .map((e) => [e, lyric[1][pRandom(lyric[1].length - 1, true)]]);
      for (let i = 0; i <= 4; i++) {
         bookmarks.push({
            b: time + lerp(normalize(i, 0, 4), 0, 0.25),
            n: text
               .map((e) => (pRandom() > normalize(i, 0, 4) ? e[1] : e[0]))
               .join('')
               .trim(),
            c: lerpColor([0, 0, 0], localColorIn, pRandom()),
         });
      }
   });

   disappear.forEach((time) => {
      const lyric = lyrics.findLast((l) => l[0] < time);
      if (!lyric) return;
      const localColorIn = contextualColor(time, lyricColorIn);

      const text = lyric[1]
         .split('')
         .map((e) => [e, lyric[1][pRandom(lyric[1].length - 1, true)]]);
      for (let i = 0; i <= 12; i++) {
         bookmarks.push({
            b: time + lerp(normalize(i, 0, 12), 0, 0.75),
            n: shuffle(
               text.map((e) => (pRandom() > normalize(i, 0, 12) ? e[1] : e[0])),
            )
               .slice(0, lerp(normalize(i, 0, 12), text.length, 0))
               .join('')
               .trim(),
            c: lerpColor([0, 0, 0], localColorIn, pRandom()),
         });
      }
   });

   doshed.forEach(([time, hit]) => {
      const lyric = lyrics.findLast((l) => l[0] < time);
      if (!lyric) return;
      const localColorIn = contextualColor(time, lyricColorIn);

      const pRandomSymbols = '!@#$%^&*()_+-=[]{}\\|;\':",./<>?';
      const text = lyric[1]
         .split('')
         .map((e) => [
            e,
            pRandomSymbols[pRandom(pRandomSymbols.length - 1, true)],
         ]);
      const shuffled = chunkify(
         shuffle([...text]),
         Math.floor(text.length / hit),
      );
      for (let i = 0; i < hit; i++) {
         for (const s of shuffled[i]) {
            s[0] = s[1];
         }
         bookmarks.push({
            b: time + lerp(normalize(i, 0, hit), 0, 2),
            n: text
               .map((e) => e[0])
               .join('')
               .trim(),
            c: lerpColor([0, 0, 0], localColorIn, pRandom()),
         });
      }
   });

   bwamp.forEach((time) => {
      const lyric = lyrics.findLast((l) => l[0] < time);
      if (!lyric) return;

      const pRandomSymbols = '!@#$%^&*()_+-=[]{}\\|;\':",./<>? ';
      const text = lyric[1]
         .split('')
         .map((e) => [
            e,
            pRandomSymbols[pRandom(pRandomSymbols.length - 1, true)],
         ]);
      const shuffled = chunkify(
         shuffle([...text]),
         Math.floor(text.length / 16),
      );
      for (let i = 0; i <= 16; i++) {
         for (const s of shuffled[i]) {
            s[0] = `  ${lyric[1][pRandom(lyric[1].length - 1, true)]}  `;
         }
         bookmarks.push({
            b: time +
               lerp(EasingsFn.easeOutQuad(normalize(i, 0, 16)), 0.875, 0),
            n: text
               .map((e) => e[0])
               .join('')
               .trim(),
            c: lerpColor([0, 0, 0], [1, 1, 1], normalize(i, 0, 16)),
         });
      }

      for (let i = 0; i <= 16; i++) {
         for (const s of shuffled[i]) {
            s[0] = ` ${pRandomSymbols[pRandom(pRandomSymbols.length - 1, true)]} ${s[1]} ${
               pRandomSymbols[pRandom(pRandomSymbols.length - 1, true)]
            } `;
         }
         bookmarks.push({
            b: time +
               1 +
               lerp(EasingsFn.easeInQuad(normalize(i, 0, 16)), 0, 0.5),
            n: shuffle(text.map((e) => e[0]))
               .slice(lerp(normalize(i, 0, 16), 0, text.length))
               .join('')
               .trim(),
            c: lerpColor([0, 0, 0], [0.25, 0.25, 0.25], normalize(i, 0, 16)),
         });
      }
   });

   woshr.forEach((time) => {
      const lyric = lyrics.findLast((l) => l[0] < time);
      if (!lyric) return;

      const pRandomSymbols = '!@#$%^&*()_+-=[]{}\\|;\':",./<>? ';
      const text = lyric[1]
         .split('')
         .map((e) => [
            e,
            pRandomSymbols[pRandom(pRandomSymbols.length - 1, true)],
         ]);
      const shuffled = chunkify(
         shuffle([...text]),
         Math.floor(text.length / 16),
      );
      for (let i = 0; i < 16; i++) {
         for (const s of shuffled[i]) {
            s[0] = ` ${pRandomSymbols[pRandom(pRandomSymbols.length - 1, true)]} ${s[1]} ${
               pRandomSymbols[pRandom(pRandomSymbols.length - 1, true)]
            } `;
         }
         bookmarks.push({
            b: time + lerp(EasingsFn.easeInQuad(normalize(i, 0, 16)), 0, 1),
            n: shuffle(text)
               .map((e) => e[0])
               .join('')
               .trim(),
            c: lerpColor([0, 0, 0], [1, 0, 0], normalize(i, 0, 16)),
         });
      }

      for (let i = 0; i <= 16; i++) {
         for (const s of shuffled[i]) {
            s[0] = `       `;
         }
         bookmarks.push({
            b: time + 1 + lerp(normalize(i, 0, 16), 0, 0.5),
            n: shuffle(text.map((e) => e[0]))
               .slice(lerp(normalize(i, 0, 16), 0, text.length))
               .join('')
               .trim(),
            c: lerpColor([1, 0, 0], [1, 1, 1], normalize(i, 0, 16)),
         });
      }
   });

   bookmarks.sort((b1, b2) => b1.b - b2.b);
   return {
      bookmarks,
   };
}

export function toOfficial(
   bookmarks: types.v3.IBookmark[],
): types.external.IBookmarks {
   return {
      name: 'Bad Apple!!',
      color: '727272',
      characteristic: 'Standard',
      difficulty: 'ExpertPlus',
      bookmarks: bookmarks.map((b) => ({ beat: b.b, text: b.n, label: b.n })),
   };
}
