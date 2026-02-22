/**
 * 从 Figma Design Tokens 插件导出的 JSON 文件中提取 Tailwind CSS 可用的 tokens
 * 用法: npx tsx scripts/parse-design-tokens.ts
 * 输出: design-tokens.tailwind.ts (供 tailwind.config.ts 引用)
 */
import { readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const INPUT = resolve(ROOT, "design-tokens.tokens.json");
const OUTPUT = resolve(ROOT, "design-tokens.tailwind.ts");

const raw = JSON.parse(readFileSync(INPUT, "utf-8"));

// ── helpers ──────────────────────────────────────────────

/** 8位 hex (#rrggbbaa) → 6位 hex 或 rgba */
function normalizeColor(hex: string): string {
  if (hex.length === 9) {
    const alpha = parseInt(hex.slice(7, 9), 16);
    if (alpha === 255) return hex.slice(0, 7);
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${(alpha / 255).toFixed(2)})`;
  }
  return hex;
}

/** 将 "light 100" 这样的 key 转为 "light-100" */
function normalizeKey(key: string): string {
  return key.replace(/\s+/g, "-");
}

// ── 1. Colors ────────────────────────────────────────────

function parseColors(colorObj: Record<string, any>) {
  const result: Record<string, any> = {};

  for (const [group, variants] of Object.entries(colorObj)) {
    const groupKey = normalizeKey(group);
    result[groupKey] = {};

    for (const [variant, data] of Object.entries(
      variants as Record<string, any>
    )) {
      const variantKey = normalizeKey(variant);
      if (data.value && data.type === "color") {
        const key = variantKey === "default" ? "DEFAULT" : variantKey;
        result[groupKey][key] = normalizeColor(data.value);
      }
    }
  }

  return result;
}

// ── 2. Typography ────────────────────────────────────────

interface FontSizeEntry {
  size: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: number;
}

function parseTypography(fontObj: Record<string, any>) {
  const fontSize: Record<string, [string, Record<string, string>]> = {};
  const seenSizes = new Set<string>();

  for (const [level, weights] of Object.entries(fontObj)) {
    const levelKey = normalizeKey(level);

    // 取 regular 权重作为默认 fontSize 定义
    for (const [weight, props] of Object.entries(
      weights as Record<string, any>
    )) {
      if (weight !== "regular") continue;

      const val = props.value ?? props;
      const size = val.fontSize?.value ?? val.fontSize;
      const lh = val.lineHeight?.value ?? val.lineHeight;
      const ls = val.letterSpacing?.value ?? val.letterSpacing;

      if (size == null) continue;
      if (seenSizes.has(String(size))) continue;
      seenSizes.add(String(size));

      fontSize[levelKey] = [
        `${size}px`,
        {
          lineHeight: `${lh}px`,
          ...(ls != null && ls !== 0 ? { letterSpacing: `${ls}px` } : {})
        }
      ];
    }
  }

  return fontSize;
}

/** 从 font 或 typography 中提取 fontFamily 列表 */
function parseFontFamilies(fontObj: Record<string, any>): string[] {
  const families = new Set<string>();

  function walk(obj: any) {
    if (obj && typeof obj === "object") {
      if (obj.fontFamily) {
        const val =
          typeof obj.fontFamily === "string"
            ? obj.fontFamily
            : obj.fontFamily.value;
        if (val) families.add(val);
      }
      for (const v of Object.values(obj)) walk(v);
    }
  }

  walk(fontObj);
  return [...families];
}

// ── 3. Effects (shadows) ─────────────────────────────────

function parseShadows(effectObj: Record<string, any>) {
  const shadows: Record<string, string> = {};

  const shadowGroup = effectObj.shadow;
  if (!shadowGroup) return shadows;

  for (const [name, data] of Object.entries(
    shadowGroup as Record<string, any>
  )) {
    const v = data.value;
    if (!v) continue;
    const {
      offsetX = 0,
      offsetY = 0,
      radius = 0,
      spread = 0,
      color = "rgba(0,0,0,0.1)"
    } = v;
    shadows[normalizeKey(name)] =
      `${offsetX}px ${offsetY}px ${radius}px ${spread}px ${normalizeColor(color)}`;
  }

  return shadows;
}

// ── 4. Spacing ───────────────────────────────────────────

function parseSpacing(generalObj: Record<string, any>) {
  const spacing: Record<string, string> = {};
  const spacingObj = generalObj?.spacing;
  if (!spacingObj) return spacing;

  for (const [key, data] of Object.entries(spacingObj as Record<string, any>)) {
    if (data.type === "dimension" && data.value != null) {
      spacing[key] = `${data.value}px`;
    }
  }

  return spacing;
}

// ── 5. Gradients ─────────────────────────────────────────

function parseGradients(gradientObj: Record<string, any>) {
  const gradients: Record<string, string> = {};
  const group = gradientObj?.gradients;
  if (!group) return gradients;

  for (const [name, data] of Object.entries(group as Record<string, any>)) {
    const v = data.value;
    if (!v || !v.stops) continue;

    const stops = v.stops
      .map(
        (s: any) =>
          `${normalizeColor(s.color)} ${Math.round(s.position * 100)}%`
      )
      .join(", ");

    const angle = Math.round(v.rotation ?? 0);
    gradients[normalizeKey(name)] = `linear-gradient(${angle}deg, ${stops})`;
  }

  return gradients;
}

// ── Run ──────────────────────────────────────────────────

const colors = parseColors(raw.color ?? {});
const fontSize = parseTypography(raw.font ?? raw.typography ?? {});
const fontFamilies = parseFontFamilies(raw.font ?? raw.typography ?? {});
const boxShadow = parseShadows(raw.effect ?? {});
const spacing = parseSpacing(raw.general ?? {});
const gradients = parseGradients(raw.gradient ?? {});

/** Serialize fontSize as tuples so TypeScript infers [string, {...}] instead of (string | {...})[] */
function serializeFontSize(fs: Record<string, [string, Record<string, string>]>): string {
  const entries = Object.entries(fs).map(([key, [size, config]]) => {
    const props = Object.entries(config)
      .map(([k, v]) => `${k}: "${v}"`)
      .join(", ");
    return `    "${key}": ["${size}", { ${props} }] as [string, { ${Object.keys(config).map((k) => `${k}: string`).join("; ")} }]`;
  });
  return `{\n${entries.join(",\n")}\n  }`;
}

const output = `// Auto-generated from design-tokens.tokens.json
// Run: npx tsx scripts/parse-design-tokens.ts

export const designTokens = {
  colors: ${JSON.stringify(colors, null, 4)},

  fontSize: ${serializeFontSize(fontSize)},

  fontFamily: {
${fontFamilies.map((f) => `    "${normalizeKey(f.toLowerCase())}": ["${f}", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "sans-serif"]`).join(",\n")}
  },

  boxShadow: ${JSON.stringify(boxShadow, null, 4)},

  spacing: ${JSON.stringify(spacing, null, 4)},

  backgroundImage: ${JSON.stringify(gradients, null, 4)},
};
`;

writeFileSync(OUTPUT, output, "utf-8");
console.log(`✓ Tokens written to ${OUTPUT}`);
