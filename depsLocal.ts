export * from '../BeatSaber-Deno/mod.ts';
export * as ext from '../BeatSaber-Deno/extensions/mod.ts';
export * as patch from '../BeatSaber-Deno/patch/mod.ts';

// for any user that tries to run my script, uncomment below and comment above
// export * from 'https://deno.land/x/bsmap@1.5.3/mod.ts';
// export * as ext from 'https://deno.land/x/bsmap@1.5.3/extensions/mod.ts';
// export * as patch from 'https://deno.land/x/bsmap@1.5.3/patch/mod.ts';

// there is a very good chance my old script won't work without this, this is for pre-1.5.0 script
// uncomment or copy the code if you absolutely need to
// import { v2, v3 } from '../BeatSaber-Deno/mod.ts';
// v2.Arc.default._headControlPointLengthMultiplier = 1;
// v2.Arc.default._tailControlPointLengthMultiplier = 1;
// v2.Event.default._floatValue = 1;
// v2.Obstacle.default._duration = 1;
// v2.Obstacle.default._width = 1;
// v3.Arc.default.mu = 1;
// v3.Arc.default.tmu = 1;
// v3.BasicEvent.default.f = 1;
// v3.Chain.default.s = 1;
// v3.Obstacle.default.d = 1;
// v3.Obstacle.default.w = 1;
// v3.Obstacle.default.h = 1;
