const express = require("express");
const app = express();
const port = 5500;

const users = require("./routes/users");

app.use('/user', users);

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
