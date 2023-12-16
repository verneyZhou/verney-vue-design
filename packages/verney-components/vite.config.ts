import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import DefineOptions from 'unplugin-vue-define-options/vite';

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    build: {
        target: 'modules',
        //输出文件目录
        outDir: 'dist',
        //压缩
        minify: true,
        //css分离
        //cssCodeSplit: true,
        lib: {
            // 库编译模式配置
            entry: './index.ts', // 打包入口
            name: '@verney-design/ui', // 库名称
            // fileName: (format) => `verney-design-ui.${format}.js`, // 生成js文件名称
            formats: ['es', 'cjs', 'umd'] // 支持umd、cjs、esm三种格式
        },
        rollupOptions: {
            //忽略打包vue文件
            external: ['vue', '@verney-design/utils'],
            input: ['index.ts'],
            output: [
                {
                    format: 'es',
                    //不用打包成.es.js,这里我们想把它打包成.js
                    entryFileNames: '[name].js',
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: 'named',
                    //配置打包根目录
                    dir: resolve(__dirname, './dist/es')
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: 'named',
                    //配置打包根目录
                    dir: resolve(__dirname, './dist/lib')
                }
            ]
        }
    },
    plugins: [
        vue(),
        dts({
            entryRoot: 'src',
            outputDir: [resolve(__dirname, './dist/es/src'), resolve(__dirname, './dist/lib/src')],
            // 指定使用的tsconfig.json为整个项目根目录下的
            // 如果不配置,也可以在components下新建tsconfig.json
            tsConfigFilePath: '../../tsconfig.json'
        }),
        DefineOptions() // 用于在.vue文件中使用defineOptions, 注意这个要写在dts后面
    ]
});
