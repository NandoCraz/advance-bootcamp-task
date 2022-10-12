import Home from "./components/Home/Home.vue";
import Items from "./components/Items/Items.vue";
import Pesanans from "./components/Pesanans/Pesanans.vue";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/items",
        name: "Items",
        component: Items,
    },
    {
        path: "/pesanans",
        name: "Pesanans",
        component: Pesanans,
    },
];
