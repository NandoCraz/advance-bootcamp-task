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

<script></script>

<style>
.container img {
    margin: 0 auto;
}
</style>
