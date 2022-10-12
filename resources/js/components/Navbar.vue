<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
            <router-link class="navbar-brand fw-bold" to="/"
                >NandoStore</router-link
            >
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/items"
                            >Items</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/pesanans"
                            >Pesanans</router-link
                        >
                    </li>
                </ul>
                <button
                    type="button"
                    data-bs-toggle="modal"
                    class="btn btn-sm btn-secondary position-relative"
                    data-bs-target="#staticBackdrop"
                >
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    >
                        {{ carts.length }}
                    </span>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: ["carts"],
};
</script>

<style></style>
