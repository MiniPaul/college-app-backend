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

module.exports=router