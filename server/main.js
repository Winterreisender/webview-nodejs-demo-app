const express = require('express').createRequire();
const app = express()
const port = 3000

app.use(express.static('web/dist'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})