const { getText }= require('./index.js')
const img_path = `${__dirname}/photos/test_1.jpg`
const { exAPIRes } = require('./exData.js')

const rmFiller = (string) => {
  const arr = string.split('\n')
  return arr
// console.log(arr)
  // console.log(arr)
}

const parser = async (textObj) => {
  const textArray = rmFiller(textObj[0].description)
  textArray.push('artificial tail lol')
  const res = {}
  const isDate = (str) => {
    return str.includes(':')
  }
  const parseTime = (str) => {
    return str
  }
  const isSubject = (str) => {
    const char = str.match(/[A-Za-z]/g) || [];
    const num = str.match(/[0-9]/g) || [];
    return char.length > num.length
  };

  const isValue = (str) => {
    const char = str.match(/[A-Za-z]/g) || [];
    const num = str.match(/[0-9]/g) || [];
    return char.length < num.length
  }

  const parseValue = (str) => {
    return Number(str.replace(/[^0-9.-]+/g,""))
  }
  for(let i = 0; i < textArray.length - 1; i += 1){
    const cur = textArray[i]
    const next = textArray[i+1]
    if(isDate(cur)){
      const time = parseTime(cur)
      res.time = time
    }else if(isSubject(cur) && isValue(next)){
      res[cur] = parseValue(next)
    }
  }
  console.log(res)
  // console.log(textObj)
}



// getText(img_path).then(parser).catch(console.log);

parser(exAPIRes)
  .then(console.log)
  .catch(console.log)
