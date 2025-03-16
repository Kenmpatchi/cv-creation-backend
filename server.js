const express=require('express');
const app=express()
app.use(express.json());
const cors=require('cors');
app.use(cors())
require('dotenv').config();
require('./config/connect.js');


const accrouter=require('./routes/account')
app.use('/account',accrouter);
const cvrouter=require('./routes/crud')
app.use('/cv',cvrouter);


app.listen(3000,()=>{
    console.log('yo sup')
});
