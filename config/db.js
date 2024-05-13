import mongoose from "mongoose";


export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://prakharsharma:Prakhar%23123@cluster0.yzb3frn.mongodb.net/Food-thrillie').then(()=>console.log("DB Connected"));
}