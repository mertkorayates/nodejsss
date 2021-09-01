
express = require("express")
path = require("path")
const sayfa = path.join(__dirname,"../pages/add.html")

router = express.Router();


router.get("/add-product",(req,res,next)=>{
    //res.render(sayfa,{title:"debenee"})
    res.sendFile(path.join(__dirname,"../pages/add.html"));
})


router.post("/add-product",(req,res,next)=>{
   console.log(req.body)
    res.redirect("/")

})

module.exports = router;
