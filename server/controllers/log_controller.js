const mongoose = require("mongoose")
const Log = require("../models/logs")


//SEED
const seedLogs = async (req, res)=>{
    const logItem = {
        title: "test title",
        entry: "test entry",
        shipIsBroken: false
    }
    try{
        await Log.deleteMany({})
       const item = await Log.create(logItem)
        res.send(item)
    } catch(err) {
        res.send(err)
    }
}


//INDEX
const getLogs = async (req, res) =>{
 try {
     await Log.find()
 } catch(err) {
     console.log(err)
    }
}

//CREATE

const postLogs = async (req, res) =>{
    const info = req.body
    try {
        const log = await Log.create(info)
        res.send(log)
    } catch(error) {
        res.send(error.message)
        console.log(error)
       }
}

//SHOW

const showLogs = async (req, res) =>{

}



module.exports = {
    getLogs,
    postLogs,
    seedLogs
}