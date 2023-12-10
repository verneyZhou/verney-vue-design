
# vue组件库

## 项目初始化

mkdir verney-vue-design

npm install pnpm -g

pnpm -v

`pnpm init`


安装 vue3, ts, less : `pnpm i vue@latest typescript less -D -w`


新建`tsconfig.json`: `npx tsc --init`, 进行 ts 配置


### 包关联配置

> 我们新建一个 `packages` 文件夹用于后续来存放我们的各种包; 假如我们有了 `a` 包和 `b`, 为了方便a引用b时`pnpm add @xxx/b`不报错，需要先进行包关联配置

- 新建`pnpm-workspace.yaml`：

``` yml
packages:
    - 'packages/**'
    - 'examples'
```
> 这样就能将我们项目下的`packages`目录和`examples`目录关联起来了, 之后在组件库中引用工具库时就会看到它的效果~


### examples
> 就是搭建一个简单的Vite项目, 用于本地调试开发的组件和函数~

[Vite官网](https://vitejs.cn/)


- 进入examples目录：`pnpm install vite @vitejs/plugin-vue -D -w`
> `-w`会自动将包安装到根目录下; 开发环境中的依赖一般全部安装在整个项目根目录下，方便下面我们每个包都可以引用,所以在安装的时候需要加个 `-w`

> `@vitejs/plugin-vue`用来支持`.vue`文件的转译


- 新建`vite.config.ts`, 配置

- 新建`App.vue, index.html, main.ts ...`

- package.json 中添加命令：`"dev": "vite"`

- 启动：`npm run dev`




### verney-utils
> 一般packages要有utils包来存放我们公共方法，工具函数等

- 新建文件夹：`packages/verney-utils`, 进入该目录；


- 初始化：`pnpm init`， 让它变成一个包; 
> 可更改包名, 如：`@verney-design/utils`

- 新建`index.ts`, 导出方法；


### verney-components
> components是我们用来存放各种UI组件的包


#### 基础配置

- 新建文件夹：`packages/verney-components`, 进入该目录；`pnpm init`

- 添加软链接：`pnpm install @verney-design/utils`，之后`package.json`中会添加软连，指向本地的`utils`包：
> `pnpm add @verney-design/utils`也可以~

``` json
 "dependencies": {
    "@verney-design/utils": "workspace:^1.0.0"
  }
```
> 依赖`@verney-design/utils`对应的版本为`：workspace:^1.0.0`；因为pnpm是由workspace管理的，所以有一个前缀workspace可以指向utils下的工作空间从而方便本地调试。


#### 组件开发

- 之后新建`src/`目录，新建一个简单的`button`组件；在`src/index.ts`中导出；
> 同时在`package.json`中修改`main`的导出文件为`src/index.ts`


- 之后进入到`examples`目录中，引入刚创建的`button`组件：

1. 添加ui包：`pnpm install @verney-design/ui`;
> 跟上面添加`@verney-design/utils`一样，会在`package.json`中添加软连，指向本地；这样当组件修改后，在`examples`中也会同步更新~

2. 之后在`examples/App.vue`中引入`Button`组件：

``` vue
<template>
    <div>
        <Button />
    </div>
</template>
<script lang="ts" setup>
import { Button } from '@verney-design/ui'
</script>

```

3. `npm run dev`测试是否引入组件成功, 正常情况下页面上应该是会展示button组件的~



组件引入成功后，我们就可以一边在`packages/`中开发组件和工具库，一边在`examples`项目中调试了~！接下来就可以专注组件开发了~

- 接着完善`Button`组件的开发，`Button/`目录下新建`types.ts`文件，用于配置组件的ts配置信息; 

- 之后就是继续其他组件的开发了，这里不再赘述，具体细节可查看代码；



#### 组件打包

> 当组件开发完毕，准备发布时，需要进行打包配置；这里选择的是vite进行打包, 它提供了一个[库模式](https://cn.vitejs.dev/guide/build#library-mode)专门用于打包库组件~


- 前面初始化`examples`项目时已经安装过`vite`了，所以这里直接在`components/`下新建`vite.config.ts`;

> 这里我们选择打包`cjs(CommonJS)`和`esm(ESModule)`两种形式,`cjs`模式主要用于服务端引用(ssr),而`esm`就是我们现在经常使用的方式，它本身自带`treeShaking`而不需要额外配置按需引入(前提是你将模块分别导出)~


- 配置完成后，`package.json`中添加`"build": "vite build"`打包命令；直接打包：`pnpm run build`；


- 不出意外打包完成后，会在`components/dist`目录下生成`es`和`lib`两个目录；



- 因为我们这是ts项目，所以还需要在打包的库里加入声明文件(`.d.ts`):
> 到这里打包的组件库只能给`js`项目使用,在`ts`项目下运行会出现一些错误，而且使用的时候还会失去代码提示功能~

1. 安装：`pnpm i vite-plugin-dts -D -w`

2. 修改`vite.config.ts`配置：

``` ts
import dts from 'vite-plugin-dts'

plugins: [
    dts({
      entryRoot: "src",
      outputDir: [
        resolve(__dirname, "./dist/es/src"),
        resolve(__dirname, "./dist/lib/src"),
      ],
      // 指定使用的tsconfig.json为整个项目根目录下的
      // 如果不配置,也可以在components下新建tsconfig.json
      tsConfigFilePath: "../../tsconfig.json",
    }),
]
```

3. 执行打包命令你就会发现你的`es`和`lib`下就有了`d.ts`声明文件;


- 发布之前需要修改下`package.json`：

``` json
{
  "name": "@verney-design/ui", // 包名称，设置前需在npm官网查询是否重名
  "version": "1.0.0", // 版本号
  "description": "vue3组件库~", // 描述
  "main": "dist/lib/index.js", // 默认commonjs入口文件
  "module":"dist/es/index.js", // 如果环境支持ESM，构建工具会优先使用我们的module入口
  "scripts": {
    "build": "vite build"
  },
  "files": [ // files是需要发布到npm上的目录
    "dist"
  ],
  "keywords": [ // 关键词
    "verney-design-ui",
    "vue3组件库"
  ],
  "author": "zhou",
  "license": "MIT", // 如果要发公共包，需要将协议改为MIT开源协议
  "typings": "dist/index.d.ts",
  "exports": {
    "./dist/style.css": "./dist/style.css", // 子目录别名，方便样式引入
  },
  "dependencies": {
    "@verney-design/utils": "workspace:^1.0.0"
  }
}
```


#### 组件发布
> 这里默认发布到npm上，先不考虑发布到私有仓库的情况~

- 首先需要将我们的项目`push`到`github`仓库上；

- 之后需要在[npm](https://www.npmjs.com/)上注册一个账号；

- 如果发布像我们这种`@[org]/[child]`命名结构的包，需要先在 npm 上创建一个组织`Organization`，名称就是[org]；


- `npm login`,输入账户密码登录，也需要输入邮箱，输入验证码~

- `npm publish`，发布；成功后在npm官网刚创建的[组织](https://www.npmjs.com/settings/verney-design/packages)下面就能看到刚发布的包了~！
> 如果发布的是公共包的话，需要执行: `pnpm publish --access public`


#### 使用

> 组件库发布后，就可以跟其他第三方包一样直接安装使用了~


- 安装：`pnpm install @verney-design/ui -S`

- 使用：

``` js
import {Button, Input} from '@verney-design/ui';
import "@verney-design/ui/dist/style.css"; // 引入css样式
```






## 文档docs

> 组件开发完毕，就需要一个组件库使用文档了，这里使用`vitepress`来进行开发~


[VitePress官网](https://vitejs.cn/vitepress/)


### 初始化

- 首先项目根目录下新建`docs`目录，进入该目录；

- 安装vitepress: `pnpm install vitepress -D -w`

- 初始化：`pnpm init`, 生成`package.json`;

- 创建`index.md`: `echo '# Hello VitePress' > index.md`

- pkg中添加命令：

``` json
"scripts": {
  "docs:dev": "vitepress dev", // 默认启动 index.md
  // "docs:dev": "vitepress dev src/index.md", // 可指定入口文件
  "docs:build": "vitepress build",
  "docs:serve": "vitepress serve"
}
```

- 启动：`pnpm run docs:dev`, 会默认启动一个端口，并生成`.vitepress`文件夹~


### 配置

> 服务启动成功后，接下来就可以开始配置细节了，具体配置规则其实跟`vuepress`挺类似的~

- `docs/index.md`中可以配置首页布局；
> 使用[Frontmatter](https://vitejs.cn/vitepress/guide/frontmatter.html)来进行配置的；

- `.vitepress/config.ts`中配置页面顶部导航`nav`，左侧边栏`sidebar`，顶部`footer`等模块；
> 具体配置信息参考这里[config](https://vitejs.cn/vitepress/config/basics.html)


``` ts
// .vitepress/config.ts

import nav from './configs/nav' // 顶部导航配置信息
import sidebar from './configs/sidebar' // 左侧边栏配置信息
import footer from './configs/footer' // 底部footer配置信息

export default {
  title: 'verney-vue-design', // 站点的标题
  description: 'verney-vue-design前端组件库', // 站点的描述,将作为<meta>标记渲染在页面HTML中
  appearance: true, // 允许默认的颜色主题切换
  base: '/', // base URL; 如果计划将站点部署到https://foo.github.io/bar/,那么需要设置base为'/bar/'
//   lang: 'en-US', // 设置语言, 这个属性将作为<html lang="en-US">标记渲染到页面HTML中。
// head: 额外的需要被注入到当前页面的HTML<head>中的标签,每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?] 的格式指定
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo/favicon.svg'
      }
    ]
  ],
  // 主题配置
  themeConfig: {
    logo: '/logo/favicon.svg', // 导航栏logo
    nav, // 顶部导航
    sidebar, // 侧边栏
    footer // 页脚
  }
}
```

> 具体配置信息见代码，这里不再赘述~



### 组件预览
> 在`elment-plus`或者其他第三方组件库文档中都会有一个功能，就是组件预览及源码查看，接下来需要创建一个组件来实现这个功能~


- 安装：`pnpm install @vueuse/core prismjs @element-plus/icons-vue element-plus -S -w`

- 预览：`vp-demo.vue`

- 查看源码：`source-code.ts`










































## 目录


- examples: 示例


- docs: 文档


- packages
    - verney-components: 组件
    - verney-cli: 脚手架
    - verney-utils: 工具



