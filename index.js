const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/countrydb')
.then(()=>{
    console.log('database connection established' )
})
.catch(err => {
    console.log('error while connecting to database')
    console.log(err)
})

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('HI, WELCOME')
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})