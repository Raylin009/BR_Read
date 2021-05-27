const { googleRead } = require("./googleAI.js");
const { storeSalesParser, dailyReportFormat } = require('./parser.js');

const readSalesData = async(imgURL) => {
  const googleData= await googleRead(imgURL);
  const salesReadData = storeSalesParser(googleData);
  const res = dailyReportFormat(salesReadData)
  return res
};

module.exports.readSalesData = readSalesData;