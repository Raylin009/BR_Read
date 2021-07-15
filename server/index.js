const express = require('express')
const app = express()
const port = 3050
const { readSalesData } = require('../readImgApi/index.js');


app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/read-sales-report',async(req, res)=>{
  /**
   * input: photo url

   * output: data
   */

  console.log(req.query.str)
  let data = {}
  try{
    data = await readSalesData(req.query.str)
  }catch (err) {
    data = "shit"
    console.log(err)
  }
  res.send(data)
})