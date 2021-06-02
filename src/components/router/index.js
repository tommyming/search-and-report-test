import Vue from 'vue'

import Router from 'vue-router'

import Index from '@/components/Views/Index'
import Results from "@/components/Views/Results";
import MapView from "@/components/Views/MapView";

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: Index,
        children: [
            {
                path: '/Results',
                component: Results
            },
            {
                path: '/MapView:routeKey',
                component: MapView
            }

        ]
    }
]

export default new Router ({
    routes
})
