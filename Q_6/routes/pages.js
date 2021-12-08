const express = require("express")
const path = require("path")
const router = express.Router()

router.get([
"/page1",
"/page2",
"/page3",
"/page4",
"/page5"]
, (req, res) => {
    if(req.url === '/page1'){
    res.sendFile(path.join(__dirname,"../templates/index1.html"))}

    if(req.url === "/page2"){
        res.sendFile(path.join(__dirname,"../templates/index2.html"))}

    if(req.url === "/page3"){
        res.sendFile(path.join(__dirname,"../templates/index3.html"))}

    if(req.url === "/page4"){
        res.sendFile(path.join(__dirname,"../templates/index4.html"))}

    if(req.url === "/page5"){
        res.sendFile(path.join(__dirname,"../templates/index5.html"))}
})

module.exports = router