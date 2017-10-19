const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'hbs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'secrets'
  })
})

app.listen(port, () => {
  console.log("Listening on " + port);
})
