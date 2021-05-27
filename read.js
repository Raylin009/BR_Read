const {googleRead} = require('./googleAI.js');
const { storeSalesParser, dailyReportFormat } = require('./parser.js');

const emailRead = async (img_path) => {
  console.time('read_picture')
  const text = await googleRead(img_path)
  console.timeEnd('read_picture')
  const salesReadData = storeSalesParser(text)
  const res = dailyReportFormat(salesReadData)
  return res
}

//Test emailRead with StoreSales04082021
const img_path = `${__dirname}/photos/StoreSales04082021.jpg`
emailRead(img_path)
  .then(console.table)
  .catch(console.log)
