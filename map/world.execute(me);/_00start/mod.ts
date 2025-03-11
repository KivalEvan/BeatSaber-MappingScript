import { Beatmap } from '@bsmap';
import protection from './protection.ts';
import objectCreation from './objectCreation.ts';
import initialisation from './initialisation.ts';
import simulation from './simulation.ts';
import _drum from './_drum.ts';
import _ambient from './_ambient.ts';

export default function (data: Beatmap) {
   _drum(data);
   _ambient(data);
   protection(data);
   objectCreation(data);
   initialisation(data);
   simulation(data);
}
