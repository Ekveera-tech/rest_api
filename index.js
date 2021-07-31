const express = require('express')

const port = process.env.PORT || 9000

const mongoose = require('mongoose')

const url = 'mongodb://localhost/DemoDb'

const app = express()

mongoose.connect(url,{useNewUrlParser:true})

//handler
const con = mongoose.connection

con.on('open',function(){
    console.log('Connected!')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(port,() =>{
    console.log('Server started...')
})
