import { types } from '../depsLocal.ts';

export default function (
   info: types.wrapper.IWrapInfo,
   labels: {
      characteristic: types.CharacteristicName;
      difficulty: types.DifficultyName;
      label: string;
   }[],
): void {
   labels.forEach(({ characteristic, difficulty, label }) => {
      const diff = info.difficulties.find(
         (d) => d.characteristic === characteristic && d.difficulty === difficulty,
      );
      if (!diff) return;
      diff.customData._difficultyLabel = label;
   });
}
