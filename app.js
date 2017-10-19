const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'hbs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('views'))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Secrets Holder'
  })
})

app.get('/login', (req, res) => {
  res.render('login', {
    title: 'Secrets Holder'
  })
})

app.listen(port, () => {
  console.log("Listening on " + port);
})
