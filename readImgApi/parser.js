parseStoreSales = (textObj) => {
  let res = {};
  const allText = textObj[0].description
  const textArr = allText.split('\n')
  // console.log(textArr)
  for(let i = 0; i < textArr.length; i += 1){
    const ele = textArr[i]
    if(ele === "Gross sales" ||
      ele === "Store returns" ||
      ele === "Net sales" ||
      ele === "Online returns" ||
      ele === "issued" 
    ){
      const units = Number(textArr[i+1].replace(/[^0-9.-]+/g,""))
      const amount = Number(textArr[i+2].replace(/[^0-9.-]+/g,""))
      res[ele] = [units, amount]
      // i +=2
    }else if(
      ele === "Net AT"||
      ele === "Donations"
    ){
      const amount = Number(textArr[i+1].replace(/[^0-9.-]+/g,""))
      res[ele] = [null, amount]
    }else if(ele === "Net UPT" ||
      ele === "Traffic count" ||
      ele === "Transaction count"
    ){
      const units = Number(textArr[i+1].replace(/[^0-9.-]+/g,""))
      res[ele] = [units, null]
    }else if(ele === "Conversion rate"){
      const units = Number(textArr[i+1].replace(/[^0-9.-]+/g,""))/100
      res[ele] = [units, null]
    }
  }
  return res
}

const dailyReportFormat = (data) => {
  return {
    sales : data['Net sales'][1],
    traffic : data['Traffic count'][0],
    transaction : data['Transaction count'][0],
    conversion : data['Conversion rate'][0]*100,
    at: data['Net AT'][1],
    upt: data['Net UPT'][0],
  }
}

// parseStoreSales(data)

module.exports.storeSalesParser = parseStoreSales;
module.exports.dailyReportFormat = dailyReportFormat;
