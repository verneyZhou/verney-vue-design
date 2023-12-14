module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        // 1. 接入 prettier 的规则
        'prettier',
        'plugin:prettier/recommended'
    ],
    globals: {
        defineOptions: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        // 规则
        indent: ['warn', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        semi: ['warn', 'always'],
        'vue/html-self-closing': [
            'warn',
            {
                html: {
                    void: 'any',
                    normal: 'any',
                    component: 'any'
                }
            }
        ],
        'vue/script-indent': ['error', 4, { baseIndent: 0, switchCase: 1 }]
        // 2. 开启 prettier 自动修复的功能
        // 'prettier/prettier': 'error',
        // '@typescript-eslint/ban-ts-comment': 'off',
        // 'vue/multi-word-component-names': 'off'
    }
};
