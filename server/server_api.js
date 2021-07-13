const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000

// app.use('/', express.static('./dist', {
//   index: "index.html"
// }))
app.use(cors())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/user',(req, res)=>{
  console.log(req.query)
  res.send('made it')
})