
# vue组件库

## 项目初始化

mkdir verney-vue-design


`pnpm init`


安装 vue3, ts, less : `pnpm i vue@latest typescript less -D -w`


新建`tsconfig.json`: `npx tsc --init`, 进行 ts 配置



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

- 添加软链接：`pnpm install @kitty-ui/utils`，之后`package.json`中会添加软连，指向本地的`utils`包：
> `pnpm add @kitty-ui/utils`也可以~

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






















## 目录


- examples: 示例


- docs: 文档


- packages
    - verney-components: 组件
    - verney-cli: 脚手架
    - verney-utils: 工具



