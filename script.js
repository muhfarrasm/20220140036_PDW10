function kirimData() {
    // Get form values
    const nama = document.getElementById('nama').value;
    const id = document.getElementById('id').value;
    const role = document.querySelector('input[name="role"]:checked').value;
    const alamat = document.getElementById('alamat').value;
    const angkatan = document.getElementById('angkatan').value;
    const tanggal = document.getElementById('tanggal').value;

    // Display the collected data
    alert(`Nama TIM: ${nama}\nID: ${id}\nRole: ${role}\nAlamat: ${alamat}\nAngkatan: ${angkatan}\nTanggal: ${tanggal}`);
    // Create the message
    const message = `
    Nama: ${nama}
    NIM: ${id}
    Peminatan: ${role}
    Alamat: ${alamat}
    Angkatan: ${angkatan}
    Tanggal: ${tanggal}
    `;

    // Display the alert
    alert(message);
}
