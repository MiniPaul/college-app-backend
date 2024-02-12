const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        rollno:{
            type:String,
            required:true
        },
        admno:{
            type:String,
            required:true
        },
        collegename:{
            type:String,
            required:true
        },
        parent:{
            type:String,
            required:true
        },
        mobno:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("student",studentSchema)