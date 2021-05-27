const {getText} = require('./index.js');
const { storeSalesParser } = require('./playground.js');

const emailRead = async (img_path) => {
  console.time('read_picture')
  const text = await getText(img_path)
  console.timeEnd('read_picture')
  const read = storeSalesParser(text)
  const emailFormat = (textObj) => {
    // console.table(textObj)
    return {
      sales : textObj['Net sales'][1],
      traffic : textObj['Traffic count'][0],
      transaction : textObj['Transaction count'][0],
      conversion : textObj['Conversion rate'][0]*100,
      at: textObj['Net AT'][1],
      upt: textObj['Net UPT'][0],
    }
  }
  const res = emailFormat(read)
  return res
}

//Test emailRead with StoreSales04082021
const img_path = `${__dirname}/photos/StoreSales04082021.jpg`
emailRead(img_path)
  .then(console.table)
  .catch(console.log)

const hourRead = async() => {

}