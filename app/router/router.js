const express = require("express");

const router = express.Router();

const {product} = require("../controller");
router.post("/testFind/:id",product.update);

function middleware1(req,res,next){
    req.postBody = "body";
    next();
}

router.get('/test',[middleware1],(req,res)=>{
    console.log(req.postBody);
    res.end();
})

router.get("/product",product.list);

module.exports = router;