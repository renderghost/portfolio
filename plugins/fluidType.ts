import plugin from 'tailwindcss/plugin';

/**
 * Utility syntax (arbitrary values):
 *
 * - Font-size: fluid-[minPx_maxPx@vwMinPx_vwMaxPx] e.g. fluid-[28_88@360_1200]
 * - Line-height (optional): fluid-lh-[minMax@vwMin_vwMax] values are plain numbers (unitless), e.g.
 *   fluid-lh-[1.15_1.25@360_1200]
 * - Letter-spacing (optional, em): fluid-ls-[minEm_maxEm@vwMin_vwMax] e.g. fluid-ls-[-0.01_-0.02@360_1200]
 *
 * Notes:
 *
 * - Assumes 16px = 1rem.
 * - Uses linear interpolation between vwMin and vwMax.
 * - Guards with clamp() to cap at the ends.
 */
export default function fluidType() {
  return plugin(function ({ matchUtilities, theme }) {
    const toNum = (s: string) => Number(s.trim());

    const parse = (raw: string) => {
      // "28_88@360_1200"
      const [mm, rr] = raw.split('@');
      if (!mm || !rr) throw new Error('Expected pattern min_max@vwMin_vwMax');
      const [min, max] = mm.split('_').map(toNum);
      const [vwMin, vwMax] = rr.split('_').map(toNum);
      return { min, max, vwMin, vwMax };
    };

    // font-size in px -> rem
    matchUtilities(
      {
        fluid: (value: string) => {
          const { min, max, vwMin, vwMax } = parse(value);
          const minRem = `${min / 16}rem`;
          const maxRem = `${max / 16}rem`;
          const slope = max - min; // px
          const range = vwMax - vwMin; // px
          // clamp(min, preferred, max)
          // preferred = min + (slope) * ((100vw - vwMin) / range)
          return {
            fontSize: `clamp(${minRem}, calc(${minRem} + ${slope.toFixed(6)} * ((100vw - ${vwMin}px) / ${range})), ${maxRem})`,
          };
        },
      },
      { values: {}, type: 'any' },
    );

    // line-height (unitless)
    matchUtilities(
      {
        'fluid-lh': (value: string) => {
          const { min, max, vwMin, vwMax } = parse(value);
          const slope = max - min;
          const range = vwMax - vwMin;
          return {
            lineHeight: `clamp(${min}, calc(${min} + ${slope.toFixed(6)} * ((100vw - ${vwMin}px) / ${range})), ${max})`,
          };
        },
      },
      { values: {}, type: 'any' },
    );

    // letter-spacing in em
    matchUtilities(
      {
        'fluid-ls': (value: string) => {
          const { min, max, vwMin, vwMax } = parse(value);
          const slope = max - min;
          const range = vwMax - vwMin;
          return {
            letterSpacing: `clamp(${min}em, calc(${min}em + ${slope.toFixed(6)}em * ((100vw - ${vwMin}px) / ${range})), ${max}em)`,
          };
        },
      },
      { values: {}, type: 'any' },
    );

    // Optional presets for common typography scales
    const fsPresets: Record<string, [number, number, number, number]> = {
      h1: [
        28,
        88,
        360,
        1200,
      ],
      h2: [
        22,
        48,
        360,
        1200,
      ],
      h3: [
        18,
        32,
        360,
        1200,
      ],
      body: [
        16,
        18,
        360,
        1200,
      ],
    };

    matchUtilities(
      {
        'fluid-preset': (key: string) => {
          const p = fsPresets[key];
          if (!p) return {};
          const [
            min,
            max,
            vwMin,
            vwMax,
          ] = p;
          return {
            fontSize: `clamp(${min / 16}rem, calc(${min / 16}rem + ${(max - min).toFixed(6)} * ((100vw - ${vwMin}px) / ${vwMax - vwMin})), ${max / 16}rem)`,
          };
        },
      },
      { values: Object.fromEntries(Object.keys(fsPresets).map((k) => [k, k])) },
    );
  });
}
