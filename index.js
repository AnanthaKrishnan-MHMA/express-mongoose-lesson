const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('HI, WELCOME')
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})