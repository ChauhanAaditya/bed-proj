import mongoose from "mongoose";

const connectDB = async()=>{
    mongoose.connection.on('connected',()=>{
        console.log("connection established");
        
    })
    console.log("URL: ", process.env.MONGODB_URI)
    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`)
}
export default connectDB;