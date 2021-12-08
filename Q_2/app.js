const express = require('express');
const app = express();
const port = 5500;
const show = require("./rotes/show")
const path = require("path")

app.use(express.static(path.join(__dirname,'statics')))

app.use('/',show)



app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
