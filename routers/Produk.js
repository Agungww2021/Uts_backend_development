const express = require ("express");
const  routerProduk = express.Router();
const  controllerProduk = require ("../controller/Produk")

routerProduk.route('/Produk')
    .get(controllerProduk.getProduk)
    .post(controllerProduk.post.insert)

routerProduk.route('/Produk/nama')
    .put(controllerProduk.update)
    .delete(controllerProduk.delete)
    .get(controllerProduk.getProdukbynama)


module.exports = routerProduk