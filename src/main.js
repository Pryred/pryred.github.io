import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Complément du public/404.html : restaure la route demandée
// après la redirection SPA de GitHub Pages.
const redirect = sessionStorage.redirect
if (redirect) {
  sessionStorage.removeItem('redirect')
  router.replace(redirect)
}

createApp(App).use(router).mount('#app')
