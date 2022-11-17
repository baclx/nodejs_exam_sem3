import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import AddUser from "./components/AddUser.vue"
import AllUser from "./components/AllUser.vue"

const routes = [
    {
        path: "/",
        // alias: "/tutorials", // sub domain
        name: "home",
        component: Home,
    },
    {
        path: "/add",
        name: "adduser",
        component: AddUser,
    },
    {
        path: "/all",
        name: "alluser",
        component: AllUser,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;