import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('yoyo').then(()=>console.log("DB Connected"));
   
}


