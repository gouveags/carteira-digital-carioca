import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    'plugin:@next/next/recommended',
    '@rocketseat/eslint-config/next'
  ),
  ...compat.config({
    plugins: ['simple-import-sort', 'react'],
    rules: {
      'simple-import-sort/imports': 'error',
      'import/newline-after-import': 'error',
      'react/jsx-key': 'error',
    },
  }),
]

export default eslintConfig
