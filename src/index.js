require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./routes/route')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT
const url = process.env.MONGODB_URL

mongoose.connect(url,
    { useNewUrlParser: true })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', router)


app.listen(port, function (req, res) {
    console.log("Express app running on PORT " + (port))
})

