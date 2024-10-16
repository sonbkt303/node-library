const express = require('express')
const app = express()
const port = 3000

console.log('1111111');
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




