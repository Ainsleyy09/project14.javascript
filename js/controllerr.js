import users from "./data.js";

const index = () => {
  const tbody = document.getElementById("table-pelanggan");
  tbody.innerHTML = "";
  users.forEach((user, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${user.nama_pelanggan}</td>
      <td>${user.umur_pelanggan}</td>
      <td>${user.alamat_pelanggan}</td>
      <td>${user.telp_pelanggan}</td>
      <td>${user.email_pelanggan}</td>
      <td>${user.kategori_pelanggan}</td>
      <td>
        <button class="btn-edit btn btn-warning btn-sm">Edit</button>
        <button class="btn-delete btn btn-danger btn-sm">Hapus</button>
      </td>
    `;
    tbody.appendChild(tr);

    // tombol edit per baris
    tr.querySelector(".btn-edit").addEventListener("click", () => editUser(i));

    // tombol hapus per baris
    tr.querySelector(".btn-delete").addEventListener("click", () => deleteUser(i));
  });
};

const store = (newUser) => {
  users.push(newUser);
  index();
};

const destroy = () => {
  users.pop();
  index();
};

const deleteUser = (indexUser) => {
  users.splice(indexUser, 1);
  index();
};

let editIndex = null;

const editUser = (indexUser) => {
  editIndex = indexUser;
  const user = users[indexUser];
  document.getElementById("nama_pelanggan").value = user.nama_pelanggan;
  document.getElementById("umur_pelanggan").value = user.umur_pelanggan;
  document.getElementById("alamat_pelanggan").value = user.alamat_pelanggan;
  document.getElementById("telp_pelanggan").value = user.telp_pelanggan;
  document.getElementById("email_pelanggan").value = user.email_pelanggan;
  document.getElementById("kategori_pelanggan").value = user.kategori_pelanggan;
};

const updateUser = (indexUser, newData) => {
  users[indexUser] = newData;
  index();
  editIndex = null; 
};

// Export semua
export { index, store, destroy, deleteUser, editUser, updateUser, editIndex };
