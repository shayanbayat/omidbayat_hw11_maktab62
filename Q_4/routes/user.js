const express = require("express")
const fs = require('fs')
const path = require("path")
const router = express.Router()

function getUser(name){
    let user = JSON.parse(fs.readFileSync(path.join(__dirname,"../user.json")).toString())
    let userList = ""
    for(let index in user){
        if(user[index].firstName === name)
        userList +=(`${user[index].firstName}  ${user[index].lastName} with ID: ${user[index].uid} \n`)
    }
    return userList
}

router.post("/getUser",(req, res)=>{

let users = getUser(req.body.name)
if(users === ""){
    res.end("not found your user")
}else{
    res.end(users)
}
})


module.exports = router