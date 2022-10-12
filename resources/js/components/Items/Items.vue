<template>
    <div class="container">
        <navbar-component :carts="carts"></navbar-component>
        <!-- <items-component
            @add-to-cart="addToCart"
            :items="items"
        ></items-component> -->
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-3" v-for="item in items" :key="item.id">
                    <div class="card">
                        <img
                            :src="'image/' + item.pict"
                            class="card-img-top"
                            :alt="item.name"
                        />
                        <div class="card-body">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">Harga: {{ item.price }}</p>
                            <p class="card-text">Stock: {{ item.stock }}</p>
                            <a
                                href="#"
                                @click="addToCart(item.id)"
                                class="btn btn-primary"
                            >
                                <i class="fa-solid fa-plus"></i> Masukkan
                                Keranjang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <modal-component
            @tambah-stock="tambahStock"
            @reset-stock="awalStock"
            :carts="carts"
        ></modal-component>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            message: "Hello World",
        };
    },
    computed: {
        ...mapGetters(["items", "itemStock", "carts"]),
    },
    methods: {
        addToCart(id) {
            this.items.forEach((item) => {
                if (item.id == id) {
                    if (item.stock == 0) {
                        item.stock = 0;
                        alert("Stock habis");
                        return false;
                    }
                    item.stock--;
                    let produk = this.items.find((item) => item.id == id);
                    let cart = this.carts.find((item) => item.idProduk == id);
                    let idProduk = produk.id;
                    let nama = produk.name;
                    let harga = produk.price;

                    if (!cart) {
                        let cartTotal = {
                            idProduk: idProduk,
                            nama: nama,
                            harga: harga,
                            qty: 1,
                            subTotal: harga,
                        };
                        this.carts.push(cartTotal);
                    } else {
                        cart.qty++;
                        cart.subTotal = cart.qty * cart.harga;
                    }
                }
            });
        },
        tambahStock(id) {
            this.$store.dispatch("tambahStock", id);
        },

        awalStock(id) {
            this.$store.dispatch("awalStock", id);
        },
        // addToCart(id) {
        //     this.items.forEach((item) => {
        //         if (item.id == id) {
        //             if (item.stock == 0) {
        //                 item.stock = 0;
        //                 alert("Stock habis");
        //                 return false;
        //             }
        //             item.stock--;
        //             let produk = this.items.find((item) => item.id == id);
        //             let cart = this.carts.find((item) => item.idProduk == id);
        //             let idProduk = produk.id;
        //             let nama = produk.name;
        //             let harga = produk.price;

        //             if (!cart) {
        //                 let cartTotal = {
        //                     idProduk: idProduk,
        //                     nama: nama,
        //                     harga: harga,
        //                     qty: 1,
        //                     subTotal: harga,
        //                 };
        //                 this.carts.push(cartTotal);
        //             } else {
        //                 cart.qty++;
        //                 cart.subTotal = cart.qty * cart.harga;
        //             }
        //         }
        //     });
        // },
        // tambahStock(id) {
        //     let produk = this.items.find((item) => item.id == id);
        //     produk.stock++;
        // },

        // awalStock(id) {
        //     let produk = this.items.find((item) => item.id == id);
        //     let awal = this.itemStock.find((item) => item.id == id);
        //     produk.stock = awal.stock;
        // },
    },
};
</script>

<style></style>
