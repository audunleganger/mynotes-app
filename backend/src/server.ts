import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

mongoose.connect(MONGO_URI).then(() => {
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    });
}).catch(error => {
    console.log("Error connecting to MongoDB:", error);
});