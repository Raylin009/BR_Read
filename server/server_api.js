const express = require('express')
const cors = require('cors');
const { readSalesData } = require('./readImgApi/index.js');

const app = express()
const port = 5000

// app.use('/', express.static('./dist', {
//   index: "index.html"
// }))
app.use(cors())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/user',async(req, res)=>{
  console.log(req.query.str)
  const data = await readSalesData(req.query.str)
  res.send(data)
})