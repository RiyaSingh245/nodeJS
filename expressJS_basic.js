const express = require('express');
const path = require('path');

const app = express(); //explicilty executing express

//we need a view folder when using any template engine
//setting template engine
app.set('view engine', 'ejs');

//render dynamic pages
app.get('/profilePage',(_,response)=>{
    const user ={
        name:'Riya Singh',
        email:"emailtest@12.com",
        city:'Gaya',
        skills:['C++','Flutter','NodeJS','OOPS']
    }
    response.render('profilePage', {user});
});

app.get('/login',(_,resp)=>{
    resp.render('loginPage');
});

const dirPath = path.join(__dirname,'htmlFiles');

//app.use(express.static(dirPath));      //to load static pages/content


//to remove extension from url (e.g: .html)
app.get('',(_,response)=>{
     response.sendFile(`${dirPath}/index.html`);
});

app.get('/about',(_,response)=>{
    response.sendFile(`${dirPath}/about.html`);
});

app.get('/help',(_,response)=>{
    response.sendFile(`${dirPath}/help.html`);
});


//To create 404 file
app.get('*',(_,response)=>{
    response.sendFile(`${dirPath}/404.html`);
});

//needed to create a server, to execute above code
app.listen(4500);







//get method provides route, here first parameter of get (i.e. 'route) is blank --> indicates home page
app.get('',(request,response)=>{
    console.log(`data sent by browser ${request.query.name}`);  //if browser sent any parameter (in URL after ?)
    response.send(`<h1>this is home page<h1> <a href = "/about"> Go To About Page </a>`);  //<a> tag --> to navigate through pages
})            


//rendering html
app.get('/about',(request,response)=>{
    response.send(`                          
      <input type = "text" placeholder = "User Name" value = "${request.query.name}"/>   
      <button> Click Me </button>
      <a href = "/"> Go To Home Page </a>
    `);
})  


//rendering json
app.get('/help',(request,response)=>{
    response.send({
        name:'Riya',
        email:'riyacs@.com'
    });
})    