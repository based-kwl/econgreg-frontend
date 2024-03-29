import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import router from './router'
import "tailwindcss/tailwind.css"
import "./index.css"

createApp(App).use(router).mount('#app')