import produk from "./data_produk.js"; 

// 1️⃣ Tampilkan data produk
const indexProduk = () => {
    const tbody = document.getElementById("table-produk");
    tbody.innerHTML = "";
    produk.forEach((item, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${item.nama_produk}</td>
      <td>${item.stok_produk}</td>
      <td>${item.harga_produk}</td>
      <td>${item.deskripsi_produk}</td>
      <td>
        <button class="btn-edit btn btn-warning btn-sm">Edit</button>
        <button class="btn-delete btn btn-danger btn-sm">Hapus</button>
      </td>
    `;
        tbody.appendChild(tr);

        // tombol edit per baris
        tr.querySelector(".btn-edit").addEventListener("click", () => editProduk(i));

        // tombol hapus per baris
        tr.querySelector(".btn-delete").addEventListener("click", () => deleteProduk(i));
    });
};

// 2️⃣ Tambah data produk
const storeProduk = (newProduk) => {
    produk.push(newProduk);
    indexProduk();
};

// 3️⃣ Hapus data produk terakhir
const destroyProduk = () => {
    produk.pop();
    indexProduk();
};

// 4️⃣ Hapus data produk per baris
const deleteProduk = (indexItem) => {
    produk.splice(indexItem, 1);
    indexProduk();
};

// 5️⃣ Edit data produk pakai form
let editIndexProduk = null;

const editProduk = (indexItem) => {
    editIndexProduk = indexItem;
    const item = produk[indexItem];
    document.getElementById("nama_produk").value = item.nama_produk;
    document.getElementById("stok_produk").value = item.stok_produk;
    document.getElementById("harga_produk").value = item.harga_produk;
    document.getElementById("deskripsi_produk").value = item.deskripsi_produk;
};

// 6️⃣ Update data setelah edit
const updateProduk = (indexItem, newData) => {
    produk[indexItem] = newData;
    indexProduk();
    editIndexProduk = null; // reset mode tambah
};

// Export semua
export { indexProduk, storeProduk, destroyProduk, deleteProduk, editProduk, updateProduk, editIndexProduk };
