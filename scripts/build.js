const esbuild = require('esbuild')
const path = require('path')
const { esbuildDecorators } = require('@anatine/esbuild-decorators')

;(async () => {
  const entryPath = path.resolve(__dirname, '../src/main.ts')
  // const outfilePath = path.resolve(__dirname, '../dist/index.js')
  const outfilePath =
    '/Users/qinhaitao/Documents/Duiba/test/server/one/index.js'

  const config = {
    platform: 'node',
    target: 'node8',
    sourcemap: true,
    entryPoints: [entryPath],
    bundle: true,
    outfile: outfilePath,
    watch: true,
    plugins: [
      esbuildDecorators({
        // tsconfig: JSON.stringify(tsconfig),
        cwd: process.cwd(),
      }),
    ],
    // tsconfig: JSON.stringify(tsconfig),
  }

  esbuild.build(config)
})()
