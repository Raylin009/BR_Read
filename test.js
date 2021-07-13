const img1 = `${__dirname}/photos/StoreSales.jpg`
// const img2 = `${__dirname}/photos/test_1.jpg`
const fs = require('fs');
const { readSalesData } = require('./readImgApi/index.js');
readSalesData(img1)
  .then(console.table)
  .catch(console.log)

