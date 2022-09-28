import { application } from "express";
import mongoose from "mongoose";
const {Schema} =new mongoose.Schema({

   company_description:{
    type:String,
    required:true,

   },

   app

})

 export default application;