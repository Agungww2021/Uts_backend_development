const Produk = require("../controller/Produk");

let Produk = [
    { nama: "Sepatu",
      Harga : "Rp 50.000",
      create: new price(),
    },
    { nama: "Baju",
      Harga: "Rp 150.000",
      create: new price(),
    },
    { nama: "Celana",
      Harga: "Rp 200.000",
      create: new price(),
    },
  ];
  
  const cari = (arrData, nama) => {
    ketemu = -1;
    indeks = 0;
    while (ketemu == -1 && indeks < arrData.length) {
      if (arrData[indeks].nama == nama) {
        ketemu = indeks;
        return indeks;
      }
      indeks++;
    }
    return -1;
  };
  
  module.exports = {
    getProduk: Produk,
  
    insert: (req) => {
      const newItem = {
        nama: req.body.nama,
        Harga: req.body.Harga,
      };
      Produk.push(newItem);
      return newItem;
    },
    getProdukbynama: (req) => {
      nim = req.params.nama;
      indeks = cari(Produk, nama);
      if (indeks != -1) {
        const dataProduk = {
          nama: Produk[indeks].nama,
          Harga: Produk[indeks].Harga,
        };
        return dataProduk
      }
      return indeks;
    },
  
    update: (req) => {
      nama = req.params.nama;
      indeks = cari(Produk, nama);
      if (indeks != -1) {
        Produk[indeks].nama = req.body.nama;
        Produk[indeks].Harga = req.body.Harga;
        return Produk[indeks];
      }
      return -1;
    },
  
    delete: (req) => {
      nama = req.params.nama;
      indeks = cari(Produk, nama);
      ket = "Data Produk tidak ditemukan";
      if (indeks != -1) {
        Produk.splice(indeks, 1);
        ket = "Produk Dengan NAMA " + nama + "telah dihapus";
      }
      return ket;
    },
  };