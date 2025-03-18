import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["src/index.ts", "src/entities/*.ts", "src/types/*.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  splitting: false,
  clean: true,
});
