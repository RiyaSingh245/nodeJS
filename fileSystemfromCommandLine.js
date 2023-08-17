const fs = require('fs');

const input = process.argv;

//created a text file with content inside from command line input, a file will be created with name whatever comes in input[2]
//from command line
//fs.writeFileSync(input[2],input[3]); 

//adding ans removing file according to command line input

if(input[2] == 'add')
{
   fs.writeFileSync(input[3],input[4]);
}
else if(input[2] == 'remove')
{
    fs.unlinkSync(input[3]);
}
else
{
    console.log("invalid input");
}