import mongoose from "mongoose";

mongoose.connect("mongodb+srv://diego:123@cluster0.wi4zy.mongodb.net/alura-node");

let db = mongoose.connection;

export default db; 