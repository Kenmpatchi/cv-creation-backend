const bcrypt=require('bcrypt');
const User=require('../models/user');
const jwt=require('jsonwebtoken');

exports.register=async(req,res)=>{
    try {
        const {username, email,phone, password} = req.body;
        const existuser=await User.findOne({email})
        if(existuser)return res.status(401).json({message:"invalid password or email"})
        const user = new User({username, email, password,phone});
        await user.save();
        res.status(201).json({message: 'Account created successfully'});
    }catch(error){
       res.status(500).json({err:'Server Error!',
        error:error.message
       });
    }
}
exports.login=async(req,res)=>{
    try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(404).json({error: 'User not found!'});
    const isMatch = bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(401).json({error: 'Invalid Password!'});
    const accessToken = jwt.sign({ id: user._id, email: user.email,phone:user.phone}, process.env.Access_Token);
    res.status(201).json({mytoken:accessToken,id:user._id});
    }
    catch(error){
        res.status(500).json({error:'Server Error!',
            error:error.message
        });
    }
}