const http = require('http');
const port = 2011;
const fs = require('fs');

http.createServer((req, res)=>{
    if (req.url === "/index") {
        fs.readFile("./index.html", (error,data)=>{
            if (error) {
                console.log(error.message)
            }else{
                res.setHeader("content-type", "text/html")
            }
        })
    }else if (req.url === "/two") {
        fs.readFile("./two.html", (error,data)=>{
            if (error) {
                console.log(error.message)
            }else{
                res.setHeader("content-type", "text/html")
            }
        })
    }else if (req.url === "/three") {
        fs.readFile("./three.html", (error,data)=>{
            if (error) {
                console.log(error.message)
            }else{
                res.setHeader("content-type", "text/html")
            }
        })
    }else if (req.url === "/four") {
        fs.readFile("./four.html", (error,data)=>{
            if (error) {
                console.log(error.message)
            }else{
                res.setHeader("content-type", "text/html")
            }
        })
    }else {
        res.end("path do not exit")
    }
}).listen(port, ()=>{
    console.log('listening to port' + port)
})