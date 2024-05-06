
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // 解决 'module' is not defined报错。
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs,jsx,tsx}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    "semi": ["error", "never"],
    "no-unused-vars": "off", // 禁用ESLint核心的no-unused-vars规则
    "@typescript-eslint/no-unused-vars": "error", // 启用@typescript-eslint/no-unused-vars规则
    "space-before-function-paren": 0, // 函数定义时括号前面要不要有空格
    "eol-last": 0, // 文件以单一的换行符结束
    "no-extra-semi": 0, // 可以多余的冒号
    "eqeqeq": 0, // 必须使用全等
    "one-var": 0, // 连续声明
    // 警告
    "no-extra-boolean-cast": 1, // 不必要的bool转换
    "no-extra-parens": 1, // 非必要的括号
    "no-empty": 1, // 块语句中的内容不能为空
    "no-use-before-define": [1, "nofunc"], // 未定义前不能使用
    "complexity": [1, 10], // 循环复杂度
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "no-else-return": 1,
    "block-scoped-var": 2,
  },
  settings: {
    react: {
        version: "detect"
    }
  }
};

