import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        items: [
            {
                id: 1,
                name: "Gitar Klasik",
                price: 1200000,
                pict: "gitarKlasik.jpg",
                stock: 12,
            },
            {
                id: 2,
                name: "Gitar Akustik",
                price: 2500000,
                pict: "gitarAkustik.jpg",
                stock: 8,
            },
            {
                id: 3,
                name: "Gitar Listrik",
                price: 1800000,
                pict: "gitarListrik.jpg",
                stock: 5,
            },
            {
                id: 4,
                name: "Gitar Folk",
                price: 900000,
                pict: "gitarFolk.jpg",
                stock: 4,
            },
        ],
        itemStock: [
            {
                id: 1,
                stock: 12,
            },
            {
                id: 2,
                stock: 8,
            },
            {
                id: 3,
                stock: 5,
            },
            {
                id: 4,
                stock: 4,
            },
        ],
        carts: [],
        pesanans: [],
    },
    getters: {
        items: (state) => state.items,
        itemStock: (state) => state.itemStock,
        carts: (state) => state.carts,
        pesanans: (state) => state.pesanans,
    },
    mutations: {
        tambahStock(state, id) {
            let produk = state.items.find((item) => item.id == id);
            produk.stock++;
        },
        awalStock(state, id) {
            let produk = state.items.find((item) => item.id == id);
            let awal = state.itemStock.find((item) => item.id == id);
            produk.stock = awal.stock;
        },
        checkout(state) {
            for (let i = 0; i < state.carts.length; i++) {
                state.pesanans.push(state.carts[i]);
                state.carts.splice(i, 1);
                i--;
            }
            alert("Pesanan Anda Telah Kami Terima");
        },
    },
    actions: {
        tambahStock(context, id) {
            context.commit("tambahStock", id);
        },
        awalStock(context, id) {
            context.commit("awalStock", id);
        },
        checkout(context) {
            context.commit("checkout");
        },
    },
});
