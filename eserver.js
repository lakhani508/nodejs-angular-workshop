const express = require('express')
const app = express()
const port = 8081

app.get('/',(req, res)=>{
    res.send('Hello World!')
})
app.get('/about',(req, res)=>{
    res.send('About')
})
app.get('/Contect',(req, res)=>{
    res.send('Contect us=124568')
})

app.listen(port,() =>{
    console.log(`Example app listening at http://localhost:${port}`)
})