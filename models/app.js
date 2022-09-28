import { application } from "express";
import mongoose from "mongoose";
const {Schema} =new mongoose.Schema({

   company_description:{
    type:String,
    required:true,

   },

   apprenticeship_description:{
  type: String,
  required:true,

   },

   // Team Types

  

});

const {Team} =new mongoose.Team({

    web_development:{
    type: String,
    required: true,


    },

    


   });

 export default application;