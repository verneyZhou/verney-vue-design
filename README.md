# Monorepo组件库项目


开发笔记：[从0到1搭建Monorepo组件库项目](http://123.57.172.182/blog/skills/vue/vue-design.html)

[组件库文档](https://verney-vue-design-verneyzhou.vercel.app/)

## 开发

node v16+

pnpm


- 根目录下安装依赖：`pnpm install`

- 进入`examples`项目，`pnpm run dev`启动项目；`packages/verney-components`目录下开始开发组件，就能在`examples`项目中实时预览；开发工具库同理；

- 进入`docs`项目，`pnpm run dev`启动，即可开发组件库文档项目；

- 进入`packages/verney-vite-cli`，先执行`npm link`，关联bin命令，再执行`verney-vite-cli`即可开始开发；


## 发布组件库


- 进到`packages/verney-components`目录，修改版本号，`pnpm run build`打包；

- `npm login`登录，`npm publish`发布；



## 发布工具库和脚手架

- 进到`packages/verney-utils`目录，修改版本号，`npm login`登录，`npm publish`发布；



## 部署组件库文档

- 直接将`verney-vue-design`项目`push`到github仓库，`vercel`就会自动部署~

