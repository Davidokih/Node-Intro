const http = require('http');
const port = 2030;
const fs = require('fs');
// const obj = [
//     {name: "Clinton"},
//     {age: 21},
//     {class: "node js"}
// ]

http.createServer((req, res)=>{
   fs.readFile("./four.html", (error,data)=>{
       if (error) {
           console.log(error.message)
       }else{
           res.setHeader("content-type", "text/html")
           res.end(data)
       }
   })
}).listen(port, ()=>{
    console.log("listening to port" + port)
})