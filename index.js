const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://junghyun:qudtls123@bolierplate.dgck0.mongodb.net/?retryWrites=true&w=majority', {

    }).then(() => console.log("MongDB Connected .."))
    .catch(err => console.log(err))



app.get('/', (req, res) => {
    res.send('안녕!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})