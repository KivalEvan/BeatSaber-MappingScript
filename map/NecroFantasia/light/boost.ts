import { types, v3 } from '@bsmap';

export default function (data: types.wrapper.IWrapBeatmap) {
   data.addColorBoostEvents(
      { time: 0, toggle: false },
      { time: 102, toggle: true },
      { time: 130, toggle: false },
      { time: 134, toggle: true },
      { time: 222, toggle: false },
      { time: 230, toggle: true },
      { time: 294, toggle: false },
      { time: 342, toggle: true },
      { time: 358, toggle: false },
      { time: 550, toggle: true },
      { time: 614, toggle: false },
      { time: 662, toggle: true },
      { time: 678, toggle: false },
      { time: 798, toggle: true },
      { time: 806, toggle: false },
   );
}
