const img1 = `${__dirname}/photos/StoreSales.jpg`
const img3 = `https://lh3.googleusercontent.com/JsB_lPiwrHhTV--Erl-O2a0G_y4RkTIHCOYKdkg9K_7yL9It84tEm7AK2KZ96Vf0Od5h5ENysm1J8xzPK6o=w586-h440-rw`
const img2 = `${__dirname}/photos/test_1.jpg`
const fs = require('fs');
const { readSalesData } = require('./readImgApi/index.js');
readSalesData(img3)
  .then(console.table)
  .catch(console.log)

