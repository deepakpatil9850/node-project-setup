//@ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config({
    ignores: ['**/build/**', '**/dist/**'],
    languageOptions: {
        parserOptions: {
            project: './tsconfig.json',
            tsconfigRootDir: import.meta.dirname
        }
    },
    files: ['**/*.ts'],
    rules: {
        'no-console': 'error',
        quotes: ['error', 'single', { allowTemplateLiterals: true }]
    },
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier]
})
