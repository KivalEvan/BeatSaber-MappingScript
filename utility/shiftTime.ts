import { BaseObject, BaseSlider } from '@bsmap';

export default function shiftTime(offset: number): (obj: BaseObject) => BaseObject {
   return (obj: BaseObject) => {
      obj.time += offset;
      if (obj instanceof BaseSlider) {
         obj.tailTime += offset;
      }
      return obj;
   };
}
