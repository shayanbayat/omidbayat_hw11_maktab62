const express = require("express")
const fs = require('fs')
const path = require("path")
const router = express.Router()

function AllUser(){
    let user = JSON.parse(fs.readFileSync(path.join(__dirname,"../user.json")).toString())
    let userList = ""
    for(let index in user){
        userList +=(`user ${index} ===> ${user[index].firstName}  ${user[index].lastName} \n`)
    }
    return userList
}

router.get("/getAll%20Users",(req, res)=>{
    let user = AllUser()
    res.end(user)
    console.log(user);
})





module.exports = router