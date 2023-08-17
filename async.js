//nodeJS is an async programming language
console.log(`first execution`);

setTimeout(() => {
    console.log(`second execution`);
}, 1000);

console.log(`Third execution`);


//drawback of async programming language
let a = 10;
let b = 0;

setTimeout(() => {
    b = 20;
}, 1000);

console.log(a + b);


//handling asynchronuous data in nodeJS using promise
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(30)
    }, 1000);
});

waitingData.then((data)=>{
  b = data;
  console.log(a + b);
})