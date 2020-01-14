const {dbConn} = require("../lib");
const {product} =require("../models");
exports.create = (id, title,price, tags)=> {
    let product = buildProduct(id,title,price, tags);
    product.save();
}
exports.update =async (id,obj)=>{
    let model = dbConn.model("products",product);
    let res = await model.updateOne({"id":id},obj);
}
exports.list =async (query)=>{
    let model = dbConn.model("products",product);

    let date_start = Date.parse(query.date_start);
    let date_end = Date.parse(query.date_end);

    let q = {}

    if(date_end-date_start){
        q.add_date = {$lt:date_end,$gt:date_start};
    }else{
        let aWeekAfter = Date.now()+7*24*3600;
        let aWeekAfterDate = new Date(aWeekAfter);
        q.add_date = {$lt:aWeekAfterDate};
    }

    if(Object.prototype.toString.call(query.tags)== '[object Array]' && query.tags.length > 0 ){
        q.tags = {$all:query.tags};
    }

    let products = await model.find(q).limit(10)

    return products;
}

function buildProduct(id, title, price,tags){
    
    let model = dbConn.model("products",product);
    let product = new model();
    let tagsType = Object.prototype.toString.call(tags);
    if( tagsType === '[object String]'){
        product.tags = [tags];
    }else if(tagsType ==='[object Array]'){
        product.tags = tags;
    }
    product.id = id;
    product.price = price;
    product.add_date = new Date();
    product.title = title;
    return product; 
}