import { colorFrom, normalize, range, types } from '@bsmap';
import { IChromaLightBoxGroup } from './types.ts';
import { getIndexFromFilter } from './filter.ts';

const funnystuff = range(0, 5).map((e) => [0, e] as types.Vector2);

export function process(
   data: IChromaLightBoxGroup[],
): Partial<types.wrapper.IWrapBasicEvent>[] {
   const events: types.wrapper.IWrapBasicEvent[] = [];
   for (const d of data.toSorted((a, b) => b.time - a.time)) {
      for (const box of d.boxes) {
         const filters = getIndexFromFilter(
            box.filter || {},
            d.group.length,
         ).map((e) => e[0]);
         const filtered = d.group.filter((_, i) => filters.includes(i));
         for (const event of box.events!) {
            const relTime = event!.time || 0;
            const value = event!.value || 0;
            const brightness = event!.brightness || 0;

            if (box.beatDistribution) {
               for (let i = 0; i < filtered.length; i++) {
                  const el = filtered[i];
                  events.push({
                     time: d.time +
                        relTime +
                        normalize(i, 0, filtered.length - 1) *
                           box.beatDistribution,
                     type: el[0],
                     value,
                     floatValue: brightness,
                     customData: {
                        color: colorFrom(event.color as any),
                        lightID: el[1],
                     },
                  });
               }
            } else {
               const grouped = filtered.reduce((p, v) => {
                  if (!p[v[0]]) {
                     p[v[0]] = [];
                  }
                  p[v[0]].push(v[1]);
                  return p;
               }, {} as Record<number, number[]>);
               for (const [type, id] of Object.entries(grouped)) {
                  events.push({
                     time: d.time + relTime,
                     type: +type,
                     value,
                     floatValue: brightness,
                     customData: {
                        color: colorFrom(event.color as any),
                        lightID: id,
                     },
                  });
               }
            }
         }
      }
   }

   return events.sort((a, b) => a.time - b.time);
}

console.log(
   process([
      {
         time: 4,
         group: funnystuff,
         boxes: [
            {
               filter: { type: types.IndexFilterType.DIVISION, p0: 0, p1: 0 },
               events: [
                  {
                     time: 0.5,
                     color: [1, 1, 1],
                     brightness: 1,
                     easing: types.EaseType.LINEAR,
                  },
               ],
            },
         ],
      },
   ]),
);
