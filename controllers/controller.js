

exports.kayit = (req,res,next)=>{
   deneme = {
      id : req.params.id,
      isim: req.params.isim,
      soyisim: req.params.soyisim,

   }
   res.send(deneme)

   console.log("Gelen id = " + req.params.id)
   console.log("Gelen İsim = " + req.params.isim)
   console.log("Gelen Soyisim = " + req.params.soyisim)
}