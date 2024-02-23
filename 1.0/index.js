import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, ()=> {
    return console.log('Server is running on port 3000')
})