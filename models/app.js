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

   
    // Team Roles

   });

   const {Roles} =new mongoose.Roles({

    ios_developer:{
    type: String,
    required: true,

    },

    android_developer:{
    type: String,
    required: true,
    
    },

    full_stack_dev:{
    type: String,
    required: true,
        
    },

    back_end_dev:{
    type: String,
    required: true,
            
    },

    front_end_dev:{
    type: String,
    required: true,
                
     },


     required_skills:{
     type: String,
     required: true,
        
    },
    
    complimentary_skills:{
    type: String,
    required: true,
            
    },
    
    minimium_hours:{
    type: UTF-8,
    required: true,
                
    },
    
    location_preferences:{
    type: String,
    required: true,
                    
     }
     

   });

   // Team Admin

const {Admin} =new mongoose.Admin({

    team_admin:{

       type: String,
       required: true, 

    }

});

// Timeline

const {Timeline} =new mongoose.Timeline({

    start_date:{

       type: Date,
       required: true, 

    },

    end_date:{

        type: Date,
        required: true, 
 
     }

});

 export default application;