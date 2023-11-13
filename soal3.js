// Membuat array negara
var negara = ["Indonesia", "Malaysia", "Singapura", "Thailand", "Vietnam", "Filipina", "Brunei", "Myanmar", "Kamboja", "Laos"];

// Fungsi untuk menampilkan seluruh data negara
function tampilkanData() {
    console.log("Data Negara:");
    for (var i = 0; i < negara.length; i++) {
        console.log((i + 1) + ". " + negara[i]);
    }

    // Mengakses nilai "Indonesia" dan menampilkan indeksnya
    var indexIndonesia = negara.indexOf("Indonesia");
    console.log("Indonesia berada pada indeks ke-" + indexIndonesia);
}

// Fungsi untuk menambah negara menggunakan metode push
function tambahNegara() {
    var negaraBaru = prompt("Masukkan nama negara baru:");
    
    // Memastikan input tidak kosong sebelum menambahkan
    if (negaraBaru !== null && negaraBaru !== "") {
        negara.push(negaraBaru);
        console.log("Negara baru berhasil ditambahkan: " + negaraBaru);

        // Menampilkan data setelah penambahan negara
        tampilkanData();
    } else {
        console.log("Input negara baru dibatalkan atau kosong.");
    }
}
