const bodyParser = require("body-parser")
const { ppid } = require("process")

express = require("express")
path = require("path")
control = require("./controllers/controller")
adminRouters = require("./routers/admin")
userRouters = require("./routers/users")


app = express()


app.use(bodyParser.urlencoded({extended:false}))

app.use("/admin",adminRouters)

app.use("/kayit/:id/:isim/:soyisim",control.kayit)

app.use((req,res)=>{
    res.status(404)
    res.send("<h1>HATA </h1>")
})

app.listen(3000);