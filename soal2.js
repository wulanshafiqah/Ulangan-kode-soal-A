function hitungTotal() {
    // Mengambil nilai dari input form
    var kodeBarang = document.getElementById("kode").value;
    var namaBarang = document.getElementById("nama").value;
    var hargaBarang = parseInt(document.getElementById("harga").value);
    var jumlahBarang = parseInt(document.getElementById("jumlah").value);

    // Menghitung total harga
    var totalHarga = hargaBarang * jumlahBarang;

    // Menampilkan informasi barang
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<p>Kode Barang: " + kodeBarang + "</p>" +
                          "<p>Nama Barang: " + namaBarang + "</p>" +
                          "<p>Harga Barang: Rp" + hargaBarang.toFixed(0) + "</p>" +
                          "<p>Jumlah Barang: " + jumlahBarang + "</p>" +
                          "<p>Total Harga: Rp" + totalHarga.toFixed(0) + "</p>";
}
