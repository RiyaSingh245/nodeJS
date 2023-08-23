const express = require('express');
const app = express();

//use on routes where a middleware is applied on more than one routes
const route = express.Router();


//a middleware will be created
//It is a good practice to separate middleware in another file as there can be multiple middlewares, which can be used in any other
//files using export import
const reqFilter = (request,response,next) =>{
   if(!request.query.age)
   {
        response.send(`Please Provide Your Age`);
   }
   else if(request.query.age < 18)
   {
        response.send(`You cannot access the page`);
   }
   else{
        next();
   }
}

route.use(reqFilter);

//a middleware will be applied
//app.use(reqFilter);


//middleware 'reqFilter' will be applied to only one route i.e. home route
app.get('/',reqFilter,(request,response)=>{
    response.send(`This is Home Page`);
});

app.get('/users',(request,response)=>{
    response.send(`This is User Page`);
})


//we are applying middleware here on routes that's why used route.get() instead of app.get()
route.get('/about',(request,response)=>{
     response.send(`This is User Page`);
 })
route.get('/contact',(request,response)=>{
     response.send(`This is User Page`);
 })


//added to use middleware on multiple routes(here on contact, about), here we added an instance of route
app.use('/',route);


app.listen(4500);