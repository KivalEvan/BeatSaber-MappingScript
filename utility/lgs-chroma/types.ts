import { types } from '@bsmap';

export interface IChromaLightBoxGroup {
   time: number;
   group: [type: number, id: number][];
   boxes: types.DeepPartial<IChromaLightBox>[];
}

export interface IChromaLightBox extends types.wrapper.IWrapEventBox {
   brightnessDistribution?: number;
   brightnessDistributionType?: types.DistributionType;
   hueDistribution?: number;
   hueDistributionType?: types.DistributionType;
   saturationDistribution?: number;
   saturationDistributionType?: types.DistributionType;
   events: IChromaLightBase[];
}

export interface IChromaLightBase extends types.wrapper.IWrapBaseObject {
   value?: types.EventLightColor;
   color?: types.ColorArray | types.IColor;
   brightness?: number;
   easing?: types.EaseType | types.Easings;
   type?: 'rgb' | 'hsv';
   previous?: boolean;
}
