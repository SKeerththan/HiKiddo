require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const AdminRouter= require('./routes/Employee')

mongoose.set('strictQuery',true)
mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err)
})
db.once('open', () => {
    console.log("Database Connection Established!")
})
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use('/api/admin',AdminRouter)


app.listen(process.env.PORT, () => console.log(`sever is listening on ${process.env.PORT}`));