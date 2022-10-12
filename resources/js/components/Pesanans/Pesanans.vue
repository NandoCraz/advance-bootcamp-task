<template>
    <div class="container">
        <navbar2-component></navbar2-component>
        <div class="card mt-5">
            <div class="card-header">Pesanan Saya</div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Kuantitas</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col" class="text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody v-if="pesanans.length !== 0">
                            <tr
                                v-for="pesanan in pesanans"
                                :key="pesanan.idProduk"
                            >
                                <td scope="row">
                                    {{ pesanans.indexOf(pesanan) + 1 }}
                                </td>
                                <td>{{ pesanan.nama }}</td>
                                <td>{{ pesanan.harga }}</td>
                                <td>{{ pesanan.qty }}</td>
                                <td>{{ pesanan.subTotal }}</td>
                                <td class="text-center">
                                    <p class="badge bg-warning">
                                        Sedang Diproses
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td colspan="6" class="text-center">
                                    Anda Belum Memesan...
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: { ...mapGetters(["pesanans"]) },
};
</script>

<style></style>
