const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files'); //get the path of directory(here 'files') where files will be created

//create multiple files in a single directory (here directory path is in ----> dirName variable)
/*for(let i = 0; i < 5; i++)
{
    fs.writeFileSync(`${dirPath}/hello${i}.txt`, `this is a simple text file`);
}*/

//list the files/content inside a directory
fs.readdir(dirPath,(err,fileName)=>{
   fileName.forEach((file)=>{
        console.log(`file Name is ${file}`);
   });
});


//To delete multiple files from a directory
/*for(let i = 0; i < 5; i++)
{
    fs.unlinkSync(`${dirPath}/hello${i}.txt`);
}*/