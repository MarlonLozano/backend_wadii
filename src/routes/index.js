const express = require('express');
const router=express.Router();

router.get("/inicio",(req,res)=> {
    res.send("Esta es la pagina de inicio")
})

module.exports = router;