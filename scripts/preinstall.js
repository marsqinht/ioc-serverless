if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33m只支持pnpm安装依赖。 文档https://www.pnpm.cn/\u001b[39m\n`
  )
  process.exit(1)
}
