const express=require('express');
const router=express.Router()
const account=require('../controllers/Caccount')
router.post('/register',account.register);
router.post('/login',account.login)


module.exports=router