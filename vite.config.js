import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base '/' convient pour un site utilisateur (pryred.github.io).
// Si un jour tu déploies sur un repo projet (pryred.github.io/mon-repo),
// remplace par base: '/mon-repo/'
export default defineConfig({
  plugins: [vue()],
  base: '/',
})
