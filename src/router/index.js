import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        components: {
            default: Home,
            // about: () =>
            //     import ('../views/About.vue')
        },
        children: [{
                path: 'home1',
                component: () =>
                    import ('../components/Home1.vue')
            },
            {
                path: 'home2',
                component: () =>
                    import ('../components/Home2.vue')
            }
        ]

    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
        children: [{
                path: 'about2',
                component: () =>
                    import ('../components/About2.vue')
            },
            {
                path: 'about1',
                component: () =>
                    import ('../components/About1.vue')
            },
        ]
    },
    {
        path: '/',
        name: 'App',
        component: () =>
            import ('../App.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router