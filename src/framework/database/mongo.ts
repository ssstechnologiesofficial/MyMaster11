import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const mongoUrl = 'mongodb+srv://ssstechnologies91:SSStechnologies91@cluster0.2im85.mongodb.net/DamanDatabase?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async () => {
  try {
    if(mongoUrl)await mongoose.connect(mongoUrl);
    console.log("database connected");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;
