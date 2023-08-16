import { DistributionType, TransitionType, v3 } from '../../../depsLocal.ts';
import { WeaveID } from './id.ts';

export default function (data: v3.Difficulty) {
   data.addLightColorEventBoxGroups({
      time: 4,
      id: WeaveID.DISTANT_TOP,
      boxes: [
         {
            filter: { p0: 2, p1: 1 },
            events: [
               { color: 2, brightness: 0 },
               { time: 0.5, color: 2, transition: TransitionType.INTERPOLATE },
            ],
            beatDistributionType: DistributionType.STEP,
            beatDistribution: 1 / 16,
         },
         {
            filter: { p0: 2, p1: 1, reverse: 1 },
            events: [
               { color: 2, brightness: 0 },
               { time: 0.5, color: 2, transition: TransitionType.INTERPOLATE },
            ],
            beatDistributionType: DistributionType.STEP,
            beatDistribution: 1 / 16,
         },
      ],
   });
}
