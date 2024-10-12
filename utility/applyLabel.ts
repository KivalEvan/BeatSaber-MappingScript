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
      const infoDiff = info.difficulties.find(
         (d) => d.characteristic === characteristic && d.difficulty === difficulty,
      );
      if (!infoDiff) return;
      infoDiff.customData._difficultyLabel = label;
   });
}
