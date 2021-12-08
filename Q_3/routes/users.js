const express = require("express");
const router = express.Router()

router.get('/show',(req,res) =>{
    res.end("all users: omid bayat")
})
router.get('/edit',(req,res) =>{
res.end("can not edit")
})
router.get('/name',(req,res) =>{
res.end("omid")
})
router.get('/email',(req,res) =>{
res.end("omid@dev.com")
})


module.exports = router