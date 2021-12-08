const express = require('express')
const router = express.Router();

router.get('/helloo',(req,res) =>{
    res.end("hello word")
})




module.exports = router