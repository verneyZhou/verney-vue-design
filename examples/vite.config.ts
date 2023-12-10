
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3010, // 设置服务启动端口号
        open: true, // 设置服务启动时是否自动打开浏览器
        cors: true, // 允许跨域
    },
    plugins:[
        vue({
            // template: {
            //     compilerOptions: {
            //       isCustomElement: tag => tag.startsWith('Vn')
            //     }
            // }
        })
    ]
})

