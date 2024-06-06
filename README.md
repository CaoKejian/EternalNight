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


# 使用 pnpm 安装依赖

确保你已经全局安装了 pnpm：

```bash
npm install -g pnpm
```

## 更新组件、打包组件、发包

> 更新（上传组件信息，不包含依赖）
```bash
pnpm up:dev
pnpm up:prod
```
> 打包（打包组件）
```bash
pnpm build:dev
pnpm build:prod
```
> 发包
```bash
pnpm publish:dev
pnpm publish:prod
```

## npm 私服 verdaccio 使用指南
- 1. 安装环境
```bash
npm i -g verdaccio (node-v16)

```
- 2. 启动 verdaccio
```bash
第一种方式：verdaccio
第二种方式：pm2 start verdaccio
```
- 3. 使用
  - 必要：添加用户 `npm adduser --registry http://localhost:4873/`
  - 发包 `npm publish --registry http://localhost:4873/`

  - 或者可以直接设置源 `npm set registry http://localhost:4873/`, 然后就可以直接不带参数使用。
