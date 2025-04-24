import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsxPlugin()],
    server: {
        port: 5566,
        proxy: {
            '/api': {
                target: 'http://localhost:2233',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    resolve: {
        alias: [
            {
                find: '@', replacement: path.resolve(__dirname, 'src')
            }
        ]
    }
})
