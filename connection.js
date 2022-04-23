const mongoose= require("mongoose")
exports.connect=()=>{
    try{
        mongoose.connect("mongodb+srv://Kishoref1:kishorec@cluster0.rru3b.mongodb.net/movies")
        console.log("connection Success")
    }catch(err){
        console.log(err)
    }
}