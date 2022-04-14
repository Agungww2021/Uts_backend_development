const modelProduk = require("../models/Produk");

module.exports = {
  getProduk: (req, res) => {
    Produk = modelProduk.getProduk;
    res.json(Produk);
  },

  insert: (req, res) => {
    newItem = modelProduk.insert(req);
    res.status(201).json(newItem);
  },

  getProdukbyNama: (req, res) => {
    dataProduk = modelProduk.getProdukbyNama(req);
    if (dataProduk != -1) {
      res.json(dataProduk);
    } else {
      res.send("Produk dengan Nama " + req.params.Nama + "tidak ditemukan");
    }
  },

  update: (req, res) => {
    Produk = modelProduk.update(req);
    if (Produk != -1) {
      res.json(Produk);
    }
    res.send("Data Produk tidak ditemukan");
  },
  
  delete: (req, res) => {
    ket = modelProduk.delete(req);
    res.send(ket);
  },
};