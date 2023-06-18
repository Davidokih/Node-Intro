
const fs = require('fs')

// console.log(fs)

// fs.readFile("../student.txt",(erro,data)=>{
//     if(erro){
//         console.log('can not read the file'+erro)
//     }else{
//         console.log(data)
//         console.log(data.toString())
//     }
// });


// fs.mkdir("./fs",(error)=>{
//     if (error) {
//         console.log('wrong calling' + error)
//     }else{
//         console.log("done")
//     }
// })

// fs.renameSync("./fs","./os",(error)=>{
//     if (error) {
//         console.log('wrong calling' + error)
//     }else{
//         console.log("done")
//     }
// })


// fs.mkdir("./os",(name)=>{
//     if (fs.existsSync("./os") >= 1 ) {
//         fs.mkdir("./fs",(add)=>{})
//     }else{
//         console.log('wrong')
//     }
// })


const renameUs =(length)=>{
    result ="";
    let sampleData = 'abcdefghijklmnopqrstuvwxyz0123456789'

    for(let i = 0; i < length; i++){
        result += sampleData.charAt(Math.floor(Math.random() * sampleData.length))
    }
    return result;
}

if (!fs.existsSync("folder")) {
    fs.mkdir("folder",(error)=>{
        if (error) {
            console.log(error.message)
        }else{
            console.log("folder has been created")
        }
    });
}else{
    fs.rename("folder","folder-" + renameUs(3),(error)=>{
        if (error) {
            console.log(error.message)
        }else{
            console.log('folder renamed')
        }
    })
}








//write to a file
// fs.writeFile('../student.txt','6. precious', (erro)=>{
//     if(erro){
//         console.log("can not write the file" + erro)
//     }else{
//         console.log('file has been updated sucessfully')
//     }
// });

//appending a file
// fs.appendFile('../student.txt','\n7. Toheeb', (erro)=>{
//     if(erro){
//         console.log("can not write the file" + erro)
//     }else{
//         console.log('file has been updated sucessfully')
//     }
// });


//Write a vanilla javascript program that creates new folders on a partialar directory with different names.
//Note:This program shouldn't be hard coded