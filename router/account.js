const express=require('express');
const router=express.Router();
require('../config/connect');
const bcrypt=require('bcrypt');
const User=require('../models/user');
const jwt=require('jsonwebtoken');
const cors=require('cors');
const { error } = require('jquery');
router.use(cors());

router.post('/register',async(req,res)=>{
    data= req.body;
    usr=new User(data);
    salt=bcrypt.genSaltSync(10);
    cryptpass=await bcrypt.hashSync(data.pass,salt);
    usr.pass=cryptpass;
    user=await User.findOne({email:data.email});
    if(!user){
        usr.save() 
        payload={
            _id:usr.id,
            email:usr.email,
            name:usr.name
        }
        token=jwt.sign(payload,'salem')
        res.status(200).send({mytoken:token,id:usr._id})  
    }
    else{
        res.status(400).send("email already taken")
    }
});

router.post('/login',async(req,res)=>{
    data=req.body;
    user=await User.findOne({email:data.email})
    if(!user){
        res.status(400).send('email or pass invalid !')
    }
    else{
        valdpass=bcrypt.compareSync(data.pass,user.pass)
        if(!valdpass){
            res.status(400).send('email or pass invalid!')
        }
        else{
            payload={
                _id:user.id,
                email:user.email,
                name:user.name
            }
            token=jwt.sign(payload,'salem')
            res.status(200).send({mytoken:token,id:user.id})
            
        }
    }
})



module.exports=router