require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello World Twitter!')
  })

app.get('/login', (req, res) => {
res.send('<h1>Hello World</h1>')
})

app.get("/pan",(req,res)=>{
    res.send("<h2>Hello Pan</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})