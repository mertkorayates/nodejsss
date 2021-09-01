
express = require("express")
path = require("path")
 sayfa = path.join(__dirname,"../pages/aktarma.html");

control = require("../controllers/controller")
router = express.Router();




router.use(":id/:isim/:soyisim",control.kayit)

module.exports = router;




/*


router.use("/",(req,res,next)=>{
     res.send({title:"Anasayfa"})
    //res.sendFile(path.join(__dirname,"../pages/aktarma.html"));
    
})



*/