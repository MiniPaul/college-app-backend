const express = require("express")
const studentModel=require("../Models/StudentModel")

const bcrypt=require("bcryptjs")

const router = express.Router()

hashPasswordGenerator=async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return  bcrypt.hash(pass,salt)
}

router.post("/add",async(req,res)=>{
 
    let{data}={"data":req.body}
    let password=data.password

    const hashedpassword=await hashPasswordGenerator(password)
    data.password=hashedpassword
    let student=new studentModel(data)
    let result=await student.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let data = await studentModel.find()
    res.json(data)
})

router.post("/login",async(req,res)=>{
    let input = req.body
    let email=req.body.email
    let data =await studentModel.findOne({"email":email})
    if(!data){
        return res.json({
            status:"Invalid User"
        })
    }
    console.log(data)
    let dbpassword=data.password
    let inputpassword=req.body.password
    console.log(dbpassword)
    console.log(inputpassword)
    const match=await bcrypt.compare(inputpassword,dbpassword)
    if(!match)
    {
        return res.json({
            status:"Incorrect Password"
        })
    }
    
    res.json({
        staus:"success","userData":data
    })
})

module.exports=router