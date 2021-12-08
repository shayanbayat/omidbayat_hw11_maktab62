const express = require('express')
const app = express()
const port = 5500
const hello = require('./routes/hello')


app.use('/',hello)


app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});

