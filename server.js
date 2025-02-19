const express= require('express');
const app=express();
app.use(express.json())



const accrouter=require('./router/account')
app.use('/account',accrouter);

const cvrouter=require('./router/crud')
app.use('/cv',cvrouter);


app.listen(3000,()=>{
    console.log('yo sup')
});
