export function sharedUtils(): string {
  return 'shared-utils';
}

import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://ayush:ayush@cluster0.ocl2xlx.mongodb.net/?tls=true");
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error in connecting to DB:", error);
  }
};
