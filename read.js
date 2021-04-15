const {getText} = require('./index.js');
const { storeSalesParser } = require('./playground.js');

const emailRead = async (img_path) => {
  const text = await getText(img_path)
  const read = storeSalesParser(text)
  const emailFormat = (textObj) => {
    return {
      sales : textObj['Net sales'],
      traffic : textObj['Traffic count'],
    }
  }
  const res = emailFormat(read)
}

//Test emailRead with StoreSales04082021

const hourRead = async() => {

}