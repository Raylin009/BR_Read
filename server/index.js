const express = require('express')
const port = 3050
const { readSalesData } = require('../readImgApi/index.js');
const app = express()

app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/read-sales-report',async(req, res)=>{
  /**
   * input: photo url

   * output: data
   */

  // console.log(req.query.url)
  // console.log(req.body)
  // console.log(req.params)

  // console.log(Object.keys(req))
  

  let data = {}
  try{
    data = await readSalesData(req.query.url)
    console.log("success")
  }catch (err) {
    data = 'shit'
    console.log(err) 
  }
  res.send(data)
})