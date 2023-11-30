import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import library from "./package.json" assert { type: "json" };

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: library.main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [esbuild()],
  },
  {
    input: "./src/index.ts",
    plugins: [dts()],
    output: {
      file: library.types,
      format: "es",
    },
  },
];
