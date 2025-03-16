const Cv=require('../models/creation');
exports.CreateCv=async(req,res)=>{
    try{
    const id=req.params.id
    const data=req.body
    const cv=new Cv(data)
    cv.user_id=id
    cv.save(data)
    res.status(201).json({_id:cv._id})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}
exports.getAllCv=async(req,res)=>{
    try{
    const id=req.params.id
    const cv=await Cv.find({user_id:id})
    if(!cv)return res.status(400).json({meassage:"cvs not found"})
    res.status(201).json(cv,)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
  }
exports.getCV=async(req,res)=>{
    try{
    const id=req.params.id
    const cv=await Cv.findById({_id:id})
    if(!cv)return res.json("cv not found")
    res.status(200).json(cv)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
  }
  exports.deleteCv=async(req,res)=>{
    try{
    const id=req.params.id
    const cv=await Cv.findByIdAndDelete({_id:id})
    if(!cv)return res.status(400).json({message:"cv not found"})
    res.status(201).json({message:"cv has deleted"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
  }
  exports.updateCv=async(req,res)=>{
    try{
    const id=req.params.id
    const newdata=req.body;
    const cv=await Cv.findOneAndUpdate({ _id: id }, newdata, { new: true })
    if(!cv)return res.status(400).json({message:"cv not found"})
    res.status(201).json({message:"cv has updated"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
  }