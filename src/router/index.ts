import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue'),
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})


router.beforeEach((to, from) => {

})

export default router