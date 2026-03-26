import { createRouter, createWebHistory } from 'vue-router'
// Vamos importar a NOSSA tela de catálogo que criamos
import CatalogView from '../views/CatalogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // Apontamos a rota principal para o nosso catálogo
      component: CatalogView
    }
  ]
})

export default router