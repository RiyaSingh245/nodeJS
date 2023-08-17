const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'CRUD');
const filePath = `${dirPath}/hello.txt`;


//created a file in a directory whose path we have initialised
//fs.writeFileSync(filePath,`this is a simple file`);

//reading a file content
/*fs.readFile(filePath,'utf-8',(err,item)=>{
   console.log(item);
});*/

//appending a file and it will get appended as many times as we run the program
/*fs.appendFile(filePath, ` and a basic file`, (err)=>{
    if(!err) console.log(`file is updated`);
});*/

//renaming a  file ---> hii.txt from hello.txt
/*fs.rename(filePath,`${dirPath}/hii.txt`,(err)=>{
    if(!err) console.log(`file name is updated`);
})*/

//deleting a file
//fs.unlinkSync(`${dirPath}/hii.txt`);