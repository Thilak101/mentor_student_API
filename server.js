const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()

const connectDB = require('./config/db')
const apiRouter = require('./routes')

const app = express()
connectDB()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', apiRouter)

app.get('/', (req, res) => {
    res.send(`it's working`)
})


app.listen(process.env.PORT || 3000, () => {
    console.log(`server was up and running on ${process.env.PORT || 3000}`)
})