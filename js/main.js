import { index, store, destroy, deleteUser, editUser, updateUser, editIndex } from "./controllerr.js";

// Main wrapper
const main = () => {
    // Tambah 2 data awal
    store({
        nama_pelanggan: "Kiki",
        umur_pelanggan: 30,
        alamat_pelanggan: "Depok",
        telp_pelanggan: "081234567900",
        email_pelanggan: "kiki@email.com",
        kategori_pelanggan: "VIP"
    });

    store({
        nama_pelanggan: "Lina",
        umur_pelanggan: 31,
        alamat_pelanggan: "Bogor",
        telp_pelanggan: "081234567901",
        email_pelanggan: "lina@email.com",
        kategori_pelanggan: "Exclusive"
    });

    // Tampilkan data awal
    index();

    // Form submit handler untuk tambah / edit
    const form = document.getElementById("form-pelanggan");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const newUser = {
            nama_pelanggan: document.getElementById("nama_pelanggan").value,
            umur_pelanggan: parseInt(document.getElementById("umur_pelanggan").value),
            alamat_pelanggan: document.getElementById("alamat_pelanggan").value,
            telp_pelanggan: document.getElementById("telp_pelanggan").value,
            email_pelanggan: document.getElementById("email_pelanggan").value,
            kategori_pelanggan: document.getElementById("kategori_pelanggan").value
        };

        if (editIndex === null) {
            store(newUser); // mode tambah
        } else {
            updateUser(editIndex, newUser); // mode edit
        }

        form.reset();
    });
};

// Jalankan main
main();
