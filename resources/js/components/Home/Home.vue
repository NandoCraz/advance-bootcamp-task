<template>
    <div class="container">
        <navbar2-component></navbar2-component>
        <div class="container mt-5">
            <div class="row align-items-center">
                <div class="col-md-8">
                    <img
                        class="img-fluid mx-auto"
                        src="image/GuitaristR.png"
                        alt="Guitarist"
                        width="700"
                    />
                </div>

                <div class="col-md-4">
                    <h2 class="fw-bold mt-5">Selamat Datang di NandoStore</h2>
                    <p class="text-muted">
                        Disini kamu dapat menemukan Gitar dengan kualitas
                        terbaik yang pernah ada!
                    </p>
                    <router-link
                        to="/items"
                        class="btn btn-primary btn-lg px-5 mt-4"
                        >Lihat Produk</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello World",
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
        };
    },
    methods: {
        addToCart(id) {
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
        },
        tambahStock(id) {
            let produk = this.items.find((item) => item.id == id);
            produk.stock++;
        },

        awalStock(id) {
            let produk = this.items.find((item) => item.id == id);
            let awal = this.itemStock.find((item) => item.id == id);
            produk.stock = awal.stock;
        },
    },
};
</script>

<style>
.container img {
    margin: 0 auto;
}
</style>
