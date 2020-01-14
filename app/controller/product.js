exports.update =async (req,res)=>{
    let {product:productService }= require("../services");
    productService.update(id,req.query);
    res.json();
}
exports.add = (req,res)=>{
    
}
exports.list =async (req,res)=>{
    let {product:productService }= require("../services");
    let products = await productService.list(req.query);
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,OPTIONS");
    res.json(products);
}