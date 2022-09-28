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

   
});

// Team Types

const {Team} =new mongoose.Team({

    web_development:{
    type: String,
    required: true,


    },

    mobile_app: {
        type: String,
        required: true,
    },

    growth:{

        type: String,
        required: true,
    },

    marketing_website: {
        type: String,
        required: true,
    },

    prototyping: {
        type: String,
        required: true,
    },

    data: {
        type: String,
        required: true,
    },

    custom_team: {
        type: String,
        required: true,
    }




   });

   const {Roles} =new mongoose.Roles({

    team_roles:{
    type: String,
    required: true,


    }

   });

 export default application;