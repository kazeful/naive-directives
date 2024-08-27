// eslint.config.js
const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    // Type of the project. 'lib' for libraries, the default is 'app'
    type: 'lib',

    // TypeScript and Vue are auto-detected, you can also explicitly enable them:
    typescript: false,
    vue: false,

    // Disable jsonc and yaml support
    // jsonc: false,
    yaml: false,
    // toml: false,
  },
)
