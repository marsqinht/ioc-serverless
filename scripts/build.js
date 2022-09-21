const esbuild = require("esbuild");
const path = require("path");

(async () => {
  const entryPath = path.resolve(__dirname, "../src/main.ts");
  const outfilePath = path.resolve(__dirname, "../dist/index.js");
  const config = {
    platform: "node",
    target: "node8",
    sourcemap: true,
    entryPoints: [entryPath],
    bundle: true,
    outfile: outfilePath,
  };

  esbuild.build(config);
})();
