# 女娲（Nu Wa）

## 可视化搭建站

## 目录

```shell
NuWa
├─ .gitignore
├─ .nvmrc
├─ README.md
├─ build
│  ├─ compile.js
│  ├─ webpack.base.js
│  ├─ webpack.dev.js
│  └─ webpack.prod.js
├─ eslint.config.mjs
├─ index.html
├─ package
│  ├─ new-demo
│  │  ├─ index.less
│  │  └─ index.tsx
│  └─ new-demo-two
│     ├─ index.less
│     └─ index.tsx
├─ package.json
├─ src
│  ├─ App.tsx
│  └─ index.tsx
└─ tsconfig.json

```

## 更新组件和打包组件

> 更新（上传组件信息，不包含依赖）
```bash
pnpm up:dev // 本地
pnpm up:prod // 生产
```
> 打包（打包组件）