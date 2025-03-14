import { Cloneable, colorFrom, colorToHex, hsvaToRgba, normalize, rgbaToHsva, types } from '@bsmap';

export class ColorUtils extends Cloneable implements types.IColor {
   r: number;
   g: number;
   b: number;
   a: number;

   constructor(...input: unknown[]) {
      super();
      const clr = colorFrom(...(input as [number, number, number, number]));
      this.r = clr[0];
      this.g = clr[1];
      this.b = clr[2];
      this.a = clr[3] || 1;
   }

   static create(...input: unknown[]) {
      return new this(...input);
   }

   toJSON(): types.IColor;
   toJSON(ensureAlpha: false): Omit<types.IColor, 'a'>;
   toJSON(ensureAlpha: true): Required<types.IColor>;
   toJSON(ensureAlpha?: boolean): types.IColor {
      return ensureAlpha
         ? { r: this.r, g: this.g, b: this.b, a: this.a }
         : { r: this.r, g: this.g, b: this.b };
   }

   toArray(): types.ColorArray;
   toArray(ensureAlpha: false): types.Vector3;
   toArray(ensureAlpha: true): Required<types.ColorArray>;
   toArray(ensureAlpha?: boolean): types.ColorArray {
      return ensureAlpha ? [this.r, this.g, this.b, this.a] : [this.r, this.g, this.b];
   }

   toHex(): string {
      return colorToHex(this);
   }

   *[Symbol.iterator](): IterableIterator<number> {
      yield this.r;
      yield this.g;
      yield this.b;
      yield this.a;
   }

   red(value: number): this {
      this.r = value;
      return this;
   }

   green(value: number): this {
      this.g = value;
      return this;
   }

   blue(value: number): this {
      this.b = value;
      return this;
   }

   alpha(value: number): this {
      this.a = value;
      return this;
   }

   hue(value: number): this {
      const hsva = rgbaToHsva(this.r, this.g, this.b, this.a);
      hsva[0] = value;
      const clr = hsvaToRgba(hsva);
      this.r = clr[0];
      this.g = clr[1];
      this.b = clr[2];
      return this;
   }

   saturation(value: number): this {
      const hsva = rgbaToHsva(this.r, this.g, this.b, this.a);
      hsva[1] = value;
      const clr = hsvaToRgba(hsva);
      this.r = clr[0];
      this.g = clr[1];
      this.b = clr[2];
      return this;
   }

   value(value: number): this {
      const hsva = rgbaToHsva(this.r, this.g, this.b, this.a);
      hsva[2] = value;
      const clr = hsvaToRgba(hsva);
      this.r = clr[0];
      this.g = clr[1];
      this.b = clr[2];
      return this;
   }

   multiply(value: number): this {
      this.r *= value;
      this.g *= value;
      this.b *= value;
      return this;
   }

   darken(value: number): this {
      this.r *= 1 - value;
      this.g *= 1 - value;
      this.b *= 1 - value;
      return this;
   }

   lighten(value: number): this {
      this.r *= 1 + value;
      this.g *= 1 + value;
      this.b *= 1 + value;
      return this;
   }

   add(value: number): this {
      this.r += value;
      this.g += value;
      this.b += value;
      return this;
   }

   subtract(value: number): this {
      this.r -= value;
      this.g -= value;
      this.b -= value;
      return this;
   }

   invert(): this {
      const max = Math.max(this.r, this.g, this.b);
      this.r = max - this.r;
      this.g = max - this.g;
      this.b = max - this.b;
      return this;
   }

   clamp(): this {
      this.r = Math.min(Math.max(0, this.r), 1);
      this.g = Math.min(Math.max(0, this.g), 1);
      this.b = Math.min(Math.max(0, this.b), 1);
      return this;
   }

   normalize(): this {
      const min = Math.min(this.r, this.g, this.b);
      const max = Math.max(this.r, this.g, this.b);
      this.r = normalize(this.r, min, max);
      this.g = normalize(this.g, min, max);
      this.b = normalize(this.b, min, max);
      return this;
   }

   desaturate(value: number): this {
      const hsva = rgbaToHsva(this.r, this.g, this.b, this.a);
      hsva[1] *= 1 - value;
      const clr = hsvaToRgba(hsva);
      this.r = clr[0];
      this.g = clr[1];
      this.b = clr[2];
      return this;
   }

   shiftHue(value: number): this {
      const hsva = rgbaToHsva(this.r, this.g, this.b, this.a);
      hsva[0] += value;
      const clr = hsvaToRgba(hsva);
      this.r = clr[0];
      this.g = clr[1];
      this.b = clr[2];
      return this;
   }

   shiftSaturation(value: number): this {
      const hsva = rgbaToHsva(this.r, this.g, this.b, this.a);
      hsva[1] *= 1 + value;
      const clr = hsvaToRgba(hsva);
      this.r = clr[0];
      this.g = clr[1];
      this.b = clr[2];
      return this;
   }

   shiftValue(value: number): this {
      const hsva = rgbaToHsva(this.r, this.g, this.b, this.a);
      hsva[2] *= 1 + value;
      const clr = hsvaToRgba(hsva);
      this.r = clr[0];
      this.g = clr[1];
      this.b = clr[2];
      return this;
   }
}
