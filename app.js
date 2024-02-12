const express =require("express")
const mongoose =require("mongoose")
const cors =require("cors")

const studentRouter =require("./controller/StudentRouter")

const app =express()

app.use(express.json())
app.use(cors())

app.use("/api/student",studentRouter)

mongoose.connect("mongodb+srv://minipaul:minipaul@cluster0.isuura7.mongodb.net/StudentDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.listen(3001,()=>{
    console.log("Server Running")
})