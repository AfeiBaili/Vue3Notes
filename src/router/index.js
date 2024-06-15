import {createRouter, createWebHashHistory} from "vue-router";
import RouteDemo1 from "@/components/RouteDemo1.vue";
import RouteDemo2 from "@/components/RouteDemo2.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/route1", component: RouteDemo1},
        {path: "/route2", component: RouteDemo2},
    ]
})