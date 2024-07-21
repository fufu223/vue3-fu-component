import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsxPlugin()],
  server: {
    port: 8080
  },
  resolve: {
    alias:[
        {
            find: '@', replacement: path.resolve(__dirname, 'src')
        }
    ]
  }
})
