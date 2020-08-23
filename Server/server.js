const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
var cors = require("cors")
var PORT = 9000;

app.use(cors());
mongoose.connect(process.env.DATABASE_URL,{ useUnifiedTopology: true, useNewUrlParser: true  })
const db = mongoose.connection
db.on("error",(error)=> console.error(error))
db.once("open",()=> console.log("connected to databased"))

app.use(express.json())

const subscribersRouter = require("./routes/subscribers")
app.use("/subscribers", subscribersRouter)

app.listen(PORT,()=> {
    console.log("server running :" + `${PORT}`)
})