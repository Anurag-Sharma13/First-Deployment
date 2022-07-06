const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { router } = require('./src/router/router')


app.use(express.json())
app.use(router)


app.listen(4000,(req,res)=>{
    console.log("Server is listening on port 5000....")
})