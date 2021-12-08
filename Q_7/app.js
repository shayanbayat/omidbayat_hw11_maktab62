const exspress = require("express")
const path = require("path")
const app = exspress()
const ali = require("./statics/js/main")
app.use(exspress.json())
app.use(exspress.urlencoded());


app.use(exspress.static(path.join(__dirname,'./statics')))

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"./templates/index4.html"))
})

app.post("/valid",(req,res)=>{
      
})


app.listen(5500)
console.log("ruuuun");