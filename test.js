const img1 = `${__dirname}/photos/StoreSales.jpg`

const { readSalesData } = require('./readImgApi/index.js');
readSalesData(img1)
  .then(console.table)
  .catch(console.log)

