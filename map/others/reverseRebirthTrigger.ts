import { ext, globals, load, save, utils } from '../../depsLocal.ts';
import wipPath from '../../utility/wipPath.ts';

<<<<<<< HEAD
console.log('Running script...');
console.time('Runtime');
=======
>>>>>>> ec05bfd (njygfttrnjktrktrmj)
globals.directory = wipPath('Reverse Rebirth Trigger');

const lightshow = load.difficultySync('Lightshow.dat', 2);

const lightMapper = new ext.chroma.LightMapper('SkrillexEnvironment');

lightMapper.process(lightshow, false);

const data = load.difficultySync('EasyStandard.dat', 2);
data.basicEvents = lightshow.basicEvents;
const bookmarks = data.customData._bookmarks;
if (bookmarks) {
   for (const b of bookmarks) {
      b._color = utils.interpolateColor(
         [199, 0.33, 0.56],
         [360, 0.75, 0.75],
         utils.normalize(b._time, bookmarks.at(0)!._time, bookmarks.at(-1)!._time),
<<<<<<< HEAD
         'hsva'
=======
         'hsva',
>>>>>>> ec05bfd (njygfttrnjktrktrmj)
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
data.customData._environment = [];
const _environment = data.customData._environment;

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
   }
);
save.difficultySync(data);
