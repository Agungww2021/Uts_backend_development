const express = require('express')
const app = express()
const port = 3000
const routerProduk = require("./routers/Produk");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routerProduk);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})