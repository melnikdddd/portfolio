// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default withNuxt(
  // Your custom configs here
  eslintConfigPrettier,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Prettier warnings instead of errors
      'prettier/prettier': 'warn',
      // Require semicolons
      semi: ['warn', 'always'],
      // Disable conflicting ESLint formatting rules
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  }
)
