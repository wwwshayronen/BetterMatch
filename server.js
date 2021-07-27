const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

// Enable all CORS requests
app.use(cors())

const uri = process.env.DB_URL

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log('MongoDB connected')
})

.catch(err => console.log('err message: ', err))

app.use(bodyParser.json())

const usersRouter = require('./routes/users.js')
app.use('/users', usersRouter)


app.listen(8080, () => console.log('Server is running...'))