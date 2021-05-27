const { getText } = require("./index.js");
const { storeSalesParser } = require('./playground.js');

const readSalesData = async(imgURL) => {
  const googleData= await getText(imgURL);
  const salesReadData = storeSalesParser(googleData);
  return salesReadData
};

module.exports.readSalesData = readSalesData;