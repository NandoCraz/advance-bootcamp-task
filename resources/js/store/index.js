import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        items: [],
        itemStock: [],
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
        // Method manipulasi state
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

        // mengisi state dari API
        setItems: (state, items) => (state.items = items),
        setItemStock: (state, itemStock) => (state.itemStock = itemStock),
    },
    actions: {
        // Method untuk menambahkan item ke keranjang
        tambahStock(context, id) {
            context.commit("tambahStock", id);
        },
        awalStock(context, id) {
            context.commit("awalStock", id);
        },
        checkout(context) {
            context.commit("checkout");
        },

        // Fetch data dari API
        async fetchItems({ commit }) {
            const response = await axios.get("http://localhost:3000/items");
            commit("setItems", response.data);
        },
        async fetchItemStock({ commit }) {
            const response = await axios.get("http://localhost:3000/itemStock");
            commit("setItemStock", response.data);
        },
    },
});
