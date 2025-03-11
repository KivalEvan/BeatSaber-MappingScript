import {
   ext,
   globals,
   lerpColor,
   normalize,
   readDifficultyFileSync,
   writeDifficultyFileSync,
} from '@bsmap';
import beatmapWipPath from '../../utility/beatmapWipPath.ts';

globals.directory = beatmapWipPath('Reverse Rebirth Trigger');

const lightshow = readDifficultyFileSync('Lightshow.dat', 2);

const lightMapper = new ext.heck.chroma.LightMapper('SkrillexEnvironment');

lightMapper.process(lightshow, false);

const data = readDifficultyFileSync('EasyStandard.dat', 2);
data.lightshow.basicEvents = lightshow.lightshow.basicEvents;
const bookmarks = data.difficulty.customData._bookmarks;
if (bookmarks) {
   for (const b of bookmarks) {
      b._color = lerpColor(
         [199, 0.33, 0.56],
         [360, 0.75, 0.75],
         normalize(b._time, bookmarks.at(0)!._time, bookmarks.at(-1)!._time),
         'hsva',
      );
   }
}
// environment related
// regex for environment enhancement
const regexLogo = `\\[\\d+\\]Logo(L|R)$`;
const regexPlane = `\\[\\d+\\]Track(B|T)(L|R)\\.\\[\\d+\\]PlaneC(.?\\(\\d+\\))?$`;
const regexPlaneTop = `\\[\\d+\\]SkrillexLogo$`;
const regexPlaneBottom = `\\[\\d+\\]SkrillexLogo.?\\(1\\)$`;

// beyond you're on your own
data.difficulty.customData._environment = [];
const _environment = data.difficulty.customData._environment;

//#region
_environment.push(
   {
      _id: regexLogo,
      _lookupMethod: 'Regex',
      _active: false,
   },
   {
      _id: regexPlane,
      _lookupMethod: 'Regex',
      _active: false,
   },
   {
      _id: regexPlaneTop,
      _lookupMethod: 'Regex',
      _position: [15, -13, 0],
      _rotation: [0, 0, 45],
   },
   {
      _id: regexPlaneBottom,
      _lookupMethod: 'Regex',
      _position: [-15, -13, 0],
      _rotation: [0, 0, 135],
   },
);
writeDifficultyFileSync(data);
