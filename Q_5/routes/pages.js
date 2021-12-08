const express = require("express")
const path = require("path")
const router = express.Router()

router.get("/page1", (req, res) => {
    res.sendFile(path.join(__dirname,"../templates/index1.html"))
})
router.get("/page2", (req, res) => {
    res.sendFile(path.join(__dirname,"../templates/index2.html"))
})
router.get("/page3", (req, res) => {
    res.sendFile(path.join(__dirname,"../templates/index3.html"))
})
router.get("/page4", (req, res) => {
    res.sendFile(path.join(__dirname,"../templates/index4.html"))
})
router.get("/page5", (req, res) => {
    res.sendFile(path.join(__dirname,"../templates/index5.html"))
})

module.exports = router