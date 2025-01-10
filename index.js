require('dotenv').config()
const express = require('express')
//import express from "express" // 2nd way to write first line
const app = express()
const port = 4000

app.get('/', (req, res) => {
      res.send('Hello World!')
})//'/' is here route where we are doing callback

app.get('/twitter',(req,res)=>{
   res.send('ayushidotcom')
})

app.get('/login',(req,res)=>{
      res.send('<h1>please start consistency</h1>')
})

app.get('/youtube',(req,res)=>{
   res.send(`<h2>youtube is starting right now..</h2>`)
})
app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${port}`)
})