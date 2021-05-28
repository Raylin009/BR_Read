const express = require('express')
const app = express()
const port = 3050

app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/read-sales-report',(req, res)=>{
  console.log(req.query)
  res.send('made it')
})