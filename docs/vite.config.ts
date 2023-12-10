import {defineConfig} from 'vite'
import sourceCode from './build/source-code'

export default defineConfig(async ({ command, mode }) => {
  return {
    server: {
        host: '0.0.0.0',
        port: 3011, // 设置服务启动端口号
        open: true, // 设置服务启动时是否自动打开浏览器
        cors: true, // 允许跨域
    },
    plugins: [
        sourceCode()
    ]
  }
})