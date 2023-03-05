import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
    plugins: [
      vue(),
      // 按需引入，主题色的配置，需要加上 importStyle: 'sass'
      Components({
        resolvers: [ElementPlusResolver({
          importStyle: 'sass'
        })],
      }),
      ElementPlus()
    ],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.vue', '.js', 'jsx', '.json']
    },
    base: './',
    server: {
      proxy: {
        '/api': {
          target: 'http://backend-api-02.newbee.ltd/manage-api/v1', // 凡是遇到 /api 路径的请求，都映射到 target 属性
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '') // 重写 api 为 空，就是去掉它
        }
      }
    },
    
  //base: mode == 'development' ? './' : (mode == 'beta' ? '//s.baidu.com/beta/xxx' : '//s.baidu.com/release/xxx') // 静态资源路径配置
})