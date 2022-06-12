//DEPENDENCIES
const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/router")


//config
const app = express()
const port = process.env.PORT || 3000
const mongoURI = process.env.MONGO_URI
mongoose.connect( mongoURI, {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//LISTENER
app.listen(port, ()=>{
    console.log(`Listening via port ${port}`)
})

//middleware
app.use(express.urlencoded({extended: true}))
app.use("/logs", router)

//Home Router

app.get("/", (req, res)=>{
    res.send("HELLO CAPTAIN LOG!")
})
