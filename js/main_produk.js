import { indexProduk, storeProduk, destroyProduk, deleteProduk, editProduk, updateProduk, editIndexProduk } from "../js/controller_produk.js";

// Main wrapper
const mainProduk = () => {
    // Tambah 2 data awal
    storeProduk({
        nama_produk: "Mouse Logitech",
        stok_produk: 50,
        harga_produk: 250000,
        deskripsi_produk: "Mouse wireless Logitech"
    });

    storeProduk({
        nama_produk: "Keyboard Mechanical",
        stok_produk: 30,
        harga_produk: 750000,
        deskripsi_produk: "Keyboard mechanical RGB"
    });

    // Tampilkan data awal
    indexProduk();

    // Form submit handler untuk tambah / edit
    const form = document.getElementById("form-produk");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const newProduk = {
            nama_produk: document.getElementById("nama_produk").value,
            stok_produk: parseInt(document.getElementById("stok_produk").value),
            harga_produk: parseInt(document.getElementById("harga_produk").value),
            deskripsi_produk: document.getElementById("deskripsi_produk").value
        };

        if (editIndexProduk === null) {
            storeProduk(newProduk); // mode tambah
        } else {
            updateProduk(editIndexProduk, newProduk); // mode edit
        }

        form.reset();
    });
};

// Jalankan main produk
mainProduk();
