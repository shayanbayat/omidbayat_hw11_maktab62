const express = require("express")
const app = express()
const admin = require("./routes/admin")
const user = require("./routes/user")

app.use(express.json())
app.use("/admin", admin)
app.use("/user", user)


app.listen(5500)
console.log("run server");