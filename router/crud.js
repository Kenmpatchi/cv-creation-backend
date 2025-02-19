const express=require('express');
const router=express.Router();
const cors=require('cors')
const Cv=require('../models/creation');
router.use(cors())
require('../config/connect');

router.post('/posts/:id',(req,res)=>{
    id=req.params.id
    data=req.body
    cv=new Cv(data)
    cv.user_id=id
    cv.save(data)
    .then(
        (cvsave)=>{
            res.send(cvsave)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
})

router.get('/getall/:id',(req,res)=>{
  id=req.params.id
  Cv.find({user_id:id})
  .then(
    (Cvs)=>{
      res.send(Cvs)
    }
  )
  .catch(
    (err)=>{
      res.send(err)
    }
  )
})
router.get('/get/:id',(req,res)=>{
  id=req.params.id
  Cv.findById({_id:id})
  .then(
    (Cv)=>{
      res.send(Cv)
    }
  )
  .catch(
    (err)=>{
      res.send(err)
    }
  )
})
router.delete('/delete/:id',async(req,res)=>{
  id=req.params.id
  Cv.findByIdAndDelete({_id:id})
  .then(
    res.status(200)
  )
  .catch(
    err=>{
      res.status(400).send(err)
    }
  )
})
router.put('/update/:id',(req,res)=>{
  id=req.params.id
  newdata=req.body;
  Cv.findOneAndUpdate({ _id: id }, newdata, { new: true })
  .then(
    (updated)=>{
      res.send(updated)
    }
  )
  .catch(
    (err)=>{
      res.send(err)
    }
  )
})
module.exports=router;