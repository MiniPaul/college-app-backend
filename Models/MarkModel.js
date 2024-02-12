const mongoose = require("mongoose")

const markSchema=new mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"student"
        },
        mark1:{
            type:String,
            required:true
        },
        mark2:{
            type:String,
            required:true
        },
        mark3:{
            type:String,
            required:true
        },
        mark4:{
            type:String,
            required:true
        },
        mark5:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("mark",markSchema)