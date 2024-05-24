import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import Create from './components/Create.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/create', component: Create },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router