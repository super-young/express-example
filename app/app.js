const express = require("express");
const app = new express();
const http = require("http");
const process = require("process");
const router = require("./router").router;

app.use("/",router);
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const server = http.createServer(app);

server.listen(8007);
process.stdin.resume();
process.on("SIGTERM",()=>{
    server.close();
    console.log("server closed");
    process.exit();
})