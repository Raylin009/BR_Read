const { data } = require('./exSalesData.js');

parseStoreSales = (textObj) => {
  let res = {};
  const allText = textObj[0].description
  const textArr = allText.split('\n')
  const handleStrToInt = (str) => Number(str.replace(/[^0-9.-]+/g,""))
  // console.log(textArr)
  for(let i = 0; i < textArr.length; i += 1){
    const ele = textArr[i]
    if(ele === "Gross sales" ||
      ele === "Store returns" ||
      ele === "Net sales" ||
      ele === "Online returns" ||
      ele === "issued" 
    ){
      const units = handleStrToInt(textArr[i+1])
      const amount = handleStrToInt(textArr[i+2])
      res[ele] = [units, amount]
      // i +=2
    }else if(
      ele === "Net AT"||
      ele === "Donations"
    ){
      const amount = handleStrToInt(textArr)
      res[ele] = [null, amount]
    }else if(ele === "Net UPT" ||
      ele === "Traffic count" ||
      ele === "Transaction count"
    ){
      const units = handleStrToInt(textArr[i+1])
      res[ele] = [units, null]
    }else if(ele === "Conversion rate"){
      const units = handleStrToInt(textArr[i+1])/100
      res[ele] = [units, null]
    }
  }
  return res
}
parseStoreSales(data)