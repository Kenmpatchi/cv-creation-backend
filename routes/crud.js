const express=require('express');
const router=express.Router();
const crud=require('../controllers/Ccrud')
const auth=require('../middleweares/authentification')

router.post('/posts/:id',auth,crud.CreateCv)
router.get('/getall/:id',auth,crud.getAllCv)
router.get('/get/:id',auth,crud.getCV)
router.delete('/delete/:id',auth,crud.deleteCv)
router.put('/update/:id',auth,crud.updateCv)


module.exports=router;